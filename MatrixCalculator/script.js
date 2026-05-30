/* ================================================================
   Matrix Calculator — script.js  (math.js v13 compatible)
   ================================================================ */

const EPS = 1e-10;
let importTarget = null;
const history = [];

/* ================================================================
   1 — Number formatting (fraction + decimal)
   ================================================================ */

function toFraction(x, maxDenom) {
	if (!isFinite(x) || Math.abs(x) < 1e-14) return "0";
	const sign = x < 0 ? -1 : 1;
	x = Math.abs(x);
	const a0 = Math.floor(x);
	if (Math.abs(x - a0) < 1e-14) return String(sign * a0);
	maxDenom = maxDenom || 500;
	let h1 = 1, k1 = 0, h = a0, k = 1;
	let f = x - a0;
	for (let i = 0; i < 30; i++) {
		if (Math.abs(f) < 1e-14) break;
		const a = Math.floor(1 / f);
		f = 1 / f - a;
		const h2 = h1, k2 = k1;
		h1 = h; k1 = k; h = a * h1 + h2; k = a * k1 + k2;
		if (k > maxDenom) {
			if (Math.abs(x - h1 / k1) < 1e-12) return (sign * h1) + "/" + k1;
			return null;
		}
	}
	if (Math.abs(x - h / k) < 1e-12) return (sign * h) + "/" + k;
	return null;
}

function niceNum(x) {
	if (x === undefined || x === null) return "0";
	if (typeof x === "object") {
		if (x.re !== undefined && x.im !== undefined) {
			if (Math.abs(x.im) < EPS) return niceNum(x.re);
			const sign = x.im >= 0 ? "+" : "-";
			return niceNum(x.re) + sign + niceNum(Math.abs(x.im)) + "i";
		}
		return String(x);
	}
	if (!isFinite(x)) return String(x);
	if (Math.abs(x) < EPS) return "0";
	const frac = toFraction(x, 200);
	if (frac && frac.includes("/") && frac.split("/")[1].length <= 4) return frac;
	return fmtNum(x);
}

function fmtNum(x) {
	if (Math.abs(x) < EPS) return "0";
	const s = x.toFixed(10);
	if (s.includes(".")) {
		let t = s.replace(/0+$/, ""); if (t.endsWith(".")) t += "0";
		return t;
	}
	return s;
}

function isComplex(v) { return typeof v === "object" && v !== null && v.re !== undefined && v.im !== undefined; }
function complexAbs(v) { return isComplex(v) ? Math.sqrt(v.re * v.re + v.im * v.im) : Math.abs(v); }

/* ================================================================
   2 — Matrix formatting helpers
   ================================================================ */

function toArraySafe(M) {
	if (!M) return [];
	if (Array.isArray(M)) return M; // already plain array
	if (typeof M.toArray === "function") return M.toArray();
	if (typeof M === "number") return [[M]];
	return [];
}

function matrixToString(M) {
	if (!M) return "";
	if (typeof M === "number") return niceNum(M);
	try {
		const arr = toArraySafe(M);
		if (arr.length === 0) return String(M);
		const rows = arr.map((row) =>
			(Array.isArray(row) ? row : [row]).map((v) => niceNum(v)).join(","),
		);
		return "[" + rows.join(";") + "]";
	} catch { return String(M); }
}

function matrixToVisualHTML(M) {
	if (!M || typeof M === "number") return "";
	try {
		const arr = toArraySafe(M);
		if (arr.length === 0) return "";
		let html = '<div class="matrix-visual"><table>';
		for (const row of arr) {
			const cells = (Array.isArray(row) ? row : [row]);
			html += "<tr>" + cells.map((v) => "<td>" + niceNum(v) + "</td>").join("") + "</tr>";
		}
		html += "</table></div>";
		return html;
	} catch { return ""; }
}

function matFromArray(arr) {
	try { return math.matrix(arr); } catch { return null; }
}

function flattenMatrix(M) {
	if (!M) return [];
	if (typeof M === "number") return [M];
	const vals = [];
	if (M.forEach) {
		M.forEach((v) => {
			if (typeof v === "object" && v.re !== undefined) vals.push(v);
			else vals.push(v);
		});
	}
	return vals;
}

/* ================================================================
   3 — Substitutes for math.js v13 removed functions
   ================================================================ */

/** Compute rank via QR decomposition (R diagonal elements). */
function computeRank(A) {
	try {
		const { R } = math.qr(A);
		const sz = R.size();
		let rank = 0;
		for (let i = 0; i < Math.min(sz[0], sz[1]); i++) {
			if (complexAbs(R.get([i, i])) > EPS * 100) rank++;
			else break;
		}
		return rank;
	} catch { return 0; }
}

/** Compute SVD via eigenvalue decomposition of AᵀA.  */
function computeSVD(A) {
	const [m, n] = A.size();

	// --- 1.  B = Aᵀ A  (n × n symmetric) ---
	const At = math.transpose(A);
	const B = math.multiply(At, A);

	// --- 2.  Eigen-decomposition of B ---
	let eVals, eVecs;
	try {
		const eig = math.eigs(B);
		eVals = eig.values;
		eVecs = eig.eigenvectors;
	} catch (e) {
		throw new Error("SVD 特征分解失败 (math.eigs): " + e.message);
	}

	// --- 3.  Sort eigenvalues desc by magnitude ---
	const pairs = eVals.map((v, i) => ({ val: Math.max(0, complexAbs(v)), idx: i }));
	pairs.sort((a, b) => b.val - a.val);

	const r = pairs.filter((p) => p.val > EPS).length; // effective rank
	const sVals = pairs.slice(0, r).map((p) => Math.sqrt(p.val));

	// --- 4.  Build V (n × r) ---
	const Vcols = [];
	for (let k = 0; k < r; k++) {
		const col = [];
		const colIdx = pairs[k].idx;
		for (let i = 0; i < n; i++) col.push(eVecs.get([i, colIdx]));
		Vcols.push(col);
	}

	// --- 5.  Build U columns: U_k = A * V_k / σ_k ---
	const Ucols = [];
	for (let k = 0; k < r; k++) {
		const vk = math.matrix(Vcols[k].map((x) => [x])); // n×1
		let uk = math.multiply(A, vk); // m×1
		const sk = sVals[k];
		if (sk > EPS) uk = math.divide(uk, sk);
		const col = [];
		for (let i = 0; i < m; i++) col.push(uk.get([i, 0]));
		Ucols.push(col);
	}

	// --- 6.  If m > r, complete U with Gram-Schmidt ---
	if (m > r) {
		const existing = Ucols.map((c) => math.matrix(c.map((x) => [x])));
		for (let attempt = 0; attempt < m * 2; attempt++) {
			if (Ucols.length >= m) break;
			// Random vector
			const rand = math.matrix(Array.from({ length: m }, () => [Math.random()]));
			let v = rand;
			for (const e of existing) {
				const dot = math.dot(v, e);
				v = math.subtract(v, math.multiply(dot, e));
			}
			const norm = frobNorm(v);
			if (norm > EPS) {
				v = math.divide(v, norm);
				const col = [];
				for (let i = 0; i < m; i++) col.push(v.get([i, 0]));
				existing.push(v);
				Ucols.push(col);
			}
		}
	}

	// Build matrices
	const V = matFromArray(Vcols); // V already has columns as Vcols (n × r)
	// But Vcols are stored as [r][n] where each Vcols[k] is a column of length n
	// Build V as n × r
	const Varr = [];
	for (let i = 0; i < n; i++) {
		const row = [];
		for (let j = 0; j < r; j++) row.push(Vcols[j][i]);
		Varr.push(row);
	}
	const Vmat = matFromArray(Varr);

	const Uarr = [];
	for (let i = 0; i < m; i++) {
		const row = [];
		for (let j = 0; j < Ucols.length; j++) row.push(Ucols[j][i]);
		Uarr.push(row);
	}
	const Umat = matFromArray(Uarr);

	return { U: Umat, S: sVals, V: Vmat };
}

/* ================================================================
   4 — Grid I/O
   ================================================================ */

function readGrid(gridEl) {
	const inputs = gridEl.querySelectorAll("input");
	const vals = [];
	let error = false;
	for (const inp of inputs) {
		const s = inp.value.trim();
		if (s === "" || s === "-" || s === "+") { vals.push(0); continue; }
		const n = Number(s);
		if (isNaN(n)) { inp.style.outline = "2px solid var(--error)"; error = true; }
		else { inp.style.outline = ""; vals.push(n); }
	}
	return error ? null : vals;
}

function readMatrix(gridEl, rows, cols) {
	const vals = readGrid(gridEl);
	if (!vals || vals.length !== rows * cols) return null;
	try {
		const arr = [];
		for (let r = 0; r < rows; r++) arr.push(vals.slice(r * cols, (r + 1) * cols));
		return math.matrix(arr);
	} catch { return null; }
}

function fillMatrix(gridEl, matrix) {
	const data = flattenMatrix(matrix);
	const inputs = gridEl.querySelectorAll("input");
	for (let i = 0; i < Math.min(inputs.length, data.length); i++) {
		inputs[i].value = niceNum(data[i]);
		inputs[i].style.outline = "";
	}
}

function buildMatrixGrid(container, rows, cols, def) {
	container.innerHTML = "";
	container.style.gridTemplateColumns = `repeat(${cols}, auto)`;
	for (let r = 0; r < rows; r++)
		for (let c = 0; c < cols; c++) {
			const inp = document.createElement("input");
			inp.type = "text"; inp.value = def || "0"; inp.placeholder = `a${r + 1}${c + 1}`;
			container.appendChild(inp);
		}
}

function buildVectorGrid(container, size) {
	container.innerHTML = "";
	container.style.gridTemplateColumns = "1fr";
	for (let i = 0; i < size; i++) {
		const inp = document.createElement("input");
		inp.type = "text"; inp.value = "0"; inp.placeholder = `b${i + 1}`;
		container.appendChild(inp);
	}
}

function readVector(gridEl, size) {
	const vals = readGrid(gridEl);
	if (!vals || vals.length !== size) return null;
	return math.matrix(vals.map((v) => [v]));
}

/* ================================================================
   5 — Verification helpers
   ================================================================ */

function verifyPass(msg) {
	return `<span class="result-verify verify-pass">✓ 验算通过：${msg || "误差 &lt; " + EPS + " 以内"}</span>`;
}
function verifyFail(msg) {
	return `<span class="result-verify verify-fail">✗ 验算失败：${msg || "重构误差过大"}</span>`;
}
function frobNorm(M) {
	if (!M) return 1;
	if (typeof M === "number") return Math.abs(M);
	try {
		let sum = 0;
		M.forEach((v) => { const a = complexAbs(v); sum += a * a; });
		return Math.sqrt(sum);
	} catch { return 1; }
}
function matrixDiffNorm(A, B) {
	try { return frobNorm(math.subtract(A, B)); }
	catch { return Infinity; }
}

/* ================================================================
   6 — Single-matrix operations
   ================================================================ */

function opDet(A) {
	const sz = A.size();
	if (sz[0] !== sz[1]) throw new Error("行列式仅适用于方阵。");
	const d = math.det(A);
	const ok = Math.abs(complexAbs(d) - complexAbs(math.det(A))) < EPS;
	return { value: niceNum(d), verify: ok ? verifyPass() : verifyFail("两次计算不一致") };
}

function opInv(A) {
	const [n, m] = A.size();
	if (n !== m) throw new Error("逆矩阵仅适用于方阵。");
	const d = math.det(A);
	if (Math.abs(complexAbs(d)) < EPS) throw new Error("矩阵行列式为 0，不可逆。");
	const inv = math.inv(A);
	try {
		const err = matrixDiffNorm(math.multiply(A, inv), math.identity(n));
		return { value: matrixToString(inv), isMatrix: true, matrix: inv,
			verify: err < EPS * 100 ? verifyPass("A·A⁻¹ ≈ I，ε=" + fmtNum(err)) : verifyFail("ε=" + fmtNum(err)) };
	} catch (e) { return { value: matrixToString(inv), isMatrix: true, matrix: inv, verify: verifyFail(e.message) }; }
}

function opEigen(A) {
	const [n, m] = A.size();
	if (n !== m) throw new Error("特征值仅适用于方阵。");
	try {
		const eig = math.eigs(A);
		const values = eig.values;
		const vectors = eig.eigenvectors;

		// Build display string
		let valStr = "特征值：\n";
		for (let i = 0; i < values.length; i++) valStr += `  λ${i + 1} = ${niceNum(values[i])}\n`;
		valStr += "\n特征向量（各列为对应特征向量）：\n" + matrixToString(vectors);

		// Verify each λ: det(A - λI) ≈ 0
		let allOk = true;
		const fails = [];
		for (let i = 0; i < values.length; i++) {
			const λ = values[i];
			const λMat = (typeof λ === "object" && λ.re !== undefined) ? math.complex(λ.re, λ.im) : λ;
			const shifted = math.subtract(A, math.multiply(λMat, math.identity(n)));
			const d = math.det(shifted);
			if (complexAbs(d) > EPS * 100) { allOk = false; fails.push(`λ${i + 1}: det(A-λI)=${fmtNum(complexAbs(d))}`); }
		}
		return { value: valStr, isMatrix: true, matrix: vectors,
			verify: allOk ? verifyPass("det(A-λI) ≈ 0，所有特征值已验证") : verifyFail(fails.join("; ")) };
	} catch (e) {
		throw new Error("特征值计算失败。math.js eigs() 主要用于实对称矩阵。错误：" + e.message);
	}
}

function opRank(A) {
	try {
		const r = computeRank(A);
		const sz = A.size();
		const maxR = Math.min(sz[0], sz[1]);
		return { value: String(r), verify: r <= maxR ? verifyPass("QR-R 对角元判秩") : verifyFail() };
	} catch (e) { throw new Error("秩计算失败：" + e.message); }
}

function opTrace(A) {
	const [n, m] = A.size();
	if (n !== m) throw new Error("迹仅适用于方阵。");
	const tr = math.trace(A);
	let sum = 0;
	for (let i = 0; i < n; i++) sum += complexAbs(A.get([i, i]));
	return { value: niceNum(tr), verify: Math.abs(complexAbs(tr) - sum) < EPS ? verifyPass() : verifyFail("对角线元素和不一致") };
}

function opLU(A) {
	const [n, m] = A.size();
	if (n !== m) throw new Error("LU 分解仅适用于方阵。");
	try {
		const lup = math.lup(A);
		const L = lup.L, U = lup.U, p = lup.p;
		const P = permMat(lup.p, n);
		const err = matrixDiffNorm(math.multiply(P, A), math.multiply(L, U));
		return { value: "L：\n" + matrixToString(L) + "\n\nU：\n" + matrixToString(U) + "\n\n置换 p：" + JSON.stringify(p),
			verify: err < EPS * 100 ? verifyPass("P·A≈L·U，ε=" + fmtNum(err)) : verifyFail("ε=" + fmtNum(err)) };
	} catch (e) { throw new Error("LU 分解失败：" + e.message); }
}

function permMat(pVec, n) {
	const P = math.zeros(n, n);
	const arr = Array.isArray(pVec) ? pVec : (pVec && pVec.toArray ? pVec.toArray() : []);
	for (let i = 0; i < n; i++) { const ri = arr[i] >= n ? arr[i] - 1 : arr[i]; P.set([ri, i], 1); }
	return P;
}

function opQR(A) {
	try {
		const { Q, R } = math.qr(A);
		const err1 = matrixDiffNorm(math.multiply(Q, R), A);
		const err2 = matrixDiffNorm(math.multiply(math.transpose(Q), Q), math.identity(Q.size()[1]));
		return { value: "Q：\n" + matrixToString(Q) + "\n\nR：\n" + matrixToString(R),
			verify: (err1 < EPS * 100 && err2 < EPS * 100)
				? verifyPass("Q·R≈A, Qᵀ·Q≈I") : verifyFail("ε=" + fmtNum(Math.max(err1, err2))) };
	} catch (e) { throw new Error("QR 分解失败：" + e.message); }
}

function opSVD(A) {
	try {
		const { U, S, V } = computeSVD(A);
		const [m, n] = A.size();
		const Sigma = math.zeros(m, n);
		for (let i = 0; i < S.length; i++) Sigma.set([i, i], S[i]);
		const recon = math.multiply(math.multiply(U, Sigma), math.transpose(V));
		const err = matrixDiffNorm(recon, A);
		return { value: "奇异值：\n  " + S.map(fmtNum).join(", ") + "\n\nU：\n" + matrixToString(U) + "\n\nV：\n" + matrixToString(V),
			verify: err < EPS * 50 ? verifyPass("U·Σ·Vᵀ≈A，ε=" + fmtNum(err)) : verifyFail("ε=" + fmtNum(err)) };
	} catch (e) { throw new Error("SVD 分解失败：" + e.message); }
}

function opPower(A, n) {
	const [rows, cols] = A.size();
	if (rows !== cols) throw new Error("矩阵幂仅适用于方阵。");
	if (!Number.isInteger(n)) throw new Error("幂指数必须为整数。");
	try {
		const result = math.pow(A, n);
		let ok = true;
		if (Math.abs(n) <= 3) {
			let manual;
			if (n === 0) manual = math.identity(rows);
			else if (n > 0) { manual = A; for (let i = 1; i < n; i++) manual = math.multiply(manual, A); }
			else { manual = math.inv(A); for (let i = 1; i < -n; i++) manual = math.multiply(manual, math.inv(A)); }
			ok = matrixDiffNorm(result, manual) < EPS * 100;
		}
		return { value: matrixToString(result), isMatrix: true, matrix: result, verify: ok ? verifyPass() : verifyFail() };
	} catch (e) { throw new Error("矩阵幂计算失败：" + e.message); }
}

/* ================================================================
   7 — Linear system
   ================================================================ */

function opSolveLinear(A, bVec) {
	const [m, n] = A.size();
	if (bVec.size()[0] !== m || bVec.size()[1] !== 1)
		throw new Error(`b 维度 (${bVec.size()[0]}×${bVec.size()[1]}) 与 A 的行数 (${m}) 不匹配。`);
	const bArr = [];
	bVec.forEach((v) => bArr.push(v));
	try {
		let x, method;
		if (m === n) {
			try { x = math.lusolve(A, bArr); method = "LU 分解直接求解"; } catch {
				const AtA = math.multiply(math.transpose(A), A);
				const Atb = math.multiply(math.transpose(A), bVec);
				x = math.lusolve(AtA, Atb);
				method = "最小二乘（矩阵奇异，rank=" + computeRank(A) + "）";
			}
		} else if (m > n) {
			const AtA = math.multiply(math.transpose(A), A);
			x = math.lusolve(AtA, math.multiply(math.transpose(A), bVec));
			method = "最小二乘（超定，m=" + m + ">n=" + n + "）";
		} else {
			const AAt = math.multiply(A, math.transpose(A));
			x = math.multiply(math.transpose(A), math.lusolve(AAt, bVec));
			method = "最小范数解（欠定，m=" + m + "<n=" + n + "）";
		}
		const err = matrixDiffNorm(math.multiply(A, x), bVec);
		return { value: `方法：${method}\n\n解向量 x：\n${matrixToString(x)}`, isMatrix: true, matrix: x,
			verify: err < EPS * 100 ? verifyPass("A·x≈b，ε=" + fmtNum(err)) : verifyFail("ε=" + fmtNum(err)) };
	} catch (e) { throw new Error("方程组求解失败：" + e.message); }
}

/* ================================================================
   8 — Dual-matrix operations
   ================================================================ */

function opAdd(A, B) {
	const sa = A.size(), sb = B.size();
	if (sa[0] !== sb[0] || sa[1] !== sb[1]) throw new Error(`维度不匹配：${sa[0]}×${sa[1]} vs ${sb[0]}×${sb[1]}`);
	const R = math.add(A, B);
	return { value: matrixToString(R), isMatrix: true, matrix: R,
		verify: matrixDiffNorm(math.subtract(R, B), A) < EPS * 100 ? verifyPass() : verifyFail() };
}
function opSub(A, B) {
	const sa = A.size(), sb = B.size();
	if (sa[0] !== sb[0] || sa[1] !== sb[1]) throw new Error(`维度不匹配：${sa[0]}×${sa[1]} vs ${sb[0]}×${sb[1]}`);
	const R = math.subtract(A, B);
	return { value: matrixToString(R), isMatrix: true, matrix: R,
		verify: matrixDiffNorm(math.add(R, B), A) < EPS * 100 ? verifyPass() : verifyFail() };
}
function opMul(A, B) {
	const sa = A.size(), sb = B.size();
	if (sa[1] !== sb[0]) throw new Error(`维度不兼容：A 列数(${sa[1]}) ≠ B 行数(${sb[0]})`);
	const R = math.multiply(A, B);
	return { value: matrixToString(R), isMatrix: true, matrix: R, verify: verifyPass("维度兼容") };
}
function opScalarMul(A, alpha) {
	const R = math.multiply(alpha, A);
	let ok = true;
	if (Math.abs(alpha) > EPS) ok = matrixDiffNorm(math.multiply(1 / alpha, R), A) < EPS * 100;
	return { value: matrixToString(R), isMatrix: true, matrix: R, verify: ok ? verifyPass() : verifyFail() };
}

/* ================================================================
   9 — Parse matrix string
   ================================================================ */

function parseMatrixString(s) {
	s = s.trim();
	if (!s) return null;
	try {
		const node = math.parse(s);
		const result = node.compile().evaluate();
		if (result && typeof result === "object" && result.size) return result;
	} catch {}
	try {
		const arr = JSON.parse(s);
		if (Array.isArray(arr) && arr.length > 0 && Array.isArray(arr[0])) return math.matrix(arr);
	} catch {}
	const lines = s.split(/\n/).filter((l) => l.trim());
	const rows = lines.map((l) => l.split(/[,\s\t]+/).filter((x) => x !== "").map(Number));
	if (rows.length === 0) return null;
	const cols = rows[0].length;
	for (const r of rows) if (r.length !== cols || r.some(isNaN)) return null;
	return math.matrix(rows);
}

/* ================================================================
   10 — Result rendering
   ================================================================ */

function renderResult(container, title, obj) {
	const block = document.createElement("div");
	block.className = "result-block";

	const te = document.createElement("div"); te.className = "result-title"; te.textContent = title;
	block.appendChild(te);

	if (obj.isMatrix && obj.matrix) {
		const vis = matrixToVisualHTML(obj.matrix);
		if (vis) { const vd = document.createElement("div"); vd.innerHTML = vis; block.appendChild(vd); }
	}

	const be = document.createElement("div"); be.className = "result-body"; be.textContent = obj.value;
	block.appendChild(be);

	if (obj.verify) { const ve = document.createElement("div"); ve.innerHTML = obj.verify; block.appendChild(ve); }

	const aa = document.createElement("div"); aa.className = "result-actions";
	if (obj.isMatrix && obj.matrix) {
		const cb = btn("复制结果"); cb.onclick = () => { copyMatrix(obj.matrix); flash(cb); }; aa.appendChild(cb);
		const sb = btn("保存到历史"); sb.onclick = () => { addHistory(title, obj.matrix); flash(sb); }; aa.appendChild(sb);
	} else if (obj.value) {
		const cp = btn("复制文本"); cp.onclick = () => { navigator.clipboard.writeText(obj.value).catch(()=>{}); flash(cp); }; aa.appendChild(cp);
	}
	block.appendChild(aa);
	container.appendChild(block);
	block.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function showError(container, msg) {
	const b = document.createElement("div"); b.className = "result-block"; b.style.borderColor = "var(--error)";
	const d = document.createElement("div"); d.className = "result-body"; d.style.color = "var(--error)";
	d.textContent = "⚠ " + msg; b.appendChild(d);
	container.appendChild(b); b.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function btn(text) { const b = document.createElement("button"); b.className = "btn btn-secondary btn-sm"; b.textContent = text; return b; }
function flash(btn) { const o = btn.textContent; btn.textContent = "已复制!"; btn.style.background = "var(--success)"; setTimeout(() => { btn.textContent = o; btn.style.background = ""; }, 1200); }
function copyMatrix(M) { navigator.clipboard.writeText(matrixToString(M)).catch(() => {}); }

/* ================================================================
   11 — History
   ================================================================ */

function addHistory(label, matrix) {
	const item = { label, matrix: matrixToString(matrix), time: new Date().toLocaleTimeString() };
	history.unshift(item); if (history.length > 50) history.pop();
	renderHistory();
}

function renderHistory() {
	const list = document.getElementById("history-list"); if (!list) return;
	list.innerHTML = "";
	for (const h of history) {
		const d = document.createElement("div"); d.className = "history-item";
		const info = document.createElement("div"); info.className = "hist-info";
		info.innerHTML = `<strong>${h.label}</strong> <span style="opacity:0.6">${h.time}</span>`;
		d.appendChild(info);
		const cb = btn("复制"); cb.className += " hist-copy";
		cb.onclick = () => { navigator.clipboard.writeText(h.matrix).catch(()=>{}); flash(cb); };
		d.appendChild(cb);
		list.appendChild(d);
	}
}

function clearHistory() { history.length = 0; renderHistory(); }

/* ================================================================
   12 — Event wiring
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
	/* Tabs */
	document.querySelectorAll(".tab-btn").forEach((b) => b.addEventListener("click", () => {
		document.querySelectorAll(".tab-btn").forEach((x) => x.classList.remove("active"));
		b.classList.add("active");
		document.querySelectorAll(".tab-panel").forEach((x) => x.classList.remove("active"));
		document.getElementById("tab-" + b.dataset.tab).classList.add("active");
	}));

	/* ===== SINGLE ===== */
	const sg = document.getElementById("sing-grid"), sr = document.getElementById("sing-rows"), sc = document.getElementById("sing-cols");
	const sres = document.getElementById("sing-result");
	function sDims() { return [parseInt(sr.value) || 3, parseInt(sc.value) || 3]; }
	function rSing() { const [r, c] = sDims(); buildMatrixGrid(sg, r, c); sres.innerHTML = ""; } rSing();
	document.getElementById("sing-resize").addEventListener("click", rSing);
	function getSing() {
		const [r, c] = sDims(); const M = readMatrix(sg, r, c);
		if (!M) throw new Error("矩阵中存在无效输入（红色边框标记）。"); return M;
	}
	function singOp(label, fn) { sres.innerHTML = ""; try { renderResult(sres, label, fn(getSing())); } catch (e) { showError(sres, e.message); } }
	document.getElementById("sing-det").addEventListener("click", () => singOp("行列式 det(A)", opDet));
	document.getElementById("sing-inv").addEventListener("click", () => singOp("逆矩阵 A⁻¹", opInv));
	document.getElementById("sing-eigen").addEventListener("click", () => singOp("特征值 & 特征向量", opEigen));
	document.getElementById("sing-rank").addEventListener("click", () => singOp("秩 rank(A)", opRank));
	document.getElementById("sing-trace").addEventListener("click", () => singOp("迹 tr(A)", opTrace));
	document.getElementById("sing-lu").addEventListener("click", () => singOp("LU 分解", opLU));
	document.getElementById("sing-qr").addEventListener("click", () => singOp("QR 分解", opQR));
	document.getElementById("sing-svd").addEventListener("click", () => singOp("SVD 奇异值分解", opSVD));
	document.getElementById("sing-power").addEventListener("click", () => { sres.innerHTML = ""; try { renderResult(sres, "Aⁿ", opPower(getSing(), parseInt(document.getElementById("sing-power-n").value) || 2)); } catch (e) { showError(sres, e.message); } });
	document.getElementById("sing-scalar-mul").addEventListener("click", () => { sres.innerHTML = ""; try { const A = getSing(); const α = parseFloat(document.getElementById("sing-scalar").value); if (isNaN(α)) throw new Error("α 必须为数字。"); renderResult(sres, "α × A（α=" + niceNum(α) + "）", opScalarMul(A, α)); } catch (e) { showError(sres, e.message); } });
	document.getElementById("sing-import").addEventListener("click", () => { importTarget = "single"; openModal(); });
	document.getElementById("sing-paste").addEventListener("click", async () => { try { const t = await navigator.clipboard.readText(); importTarget = "single"; showModalText(t); autoImport(t); } catch { showError(sres, "无法读取剪贴板，请手动粘贴。"); } });

	/* ===== SYSTEM ===== */
	const sysMR = document.getElementById("sys-rows"), sysMC = document.getElementById("sys-cols"), sysGA = document.getElementById("sys-grid-a"), sysGB = document.getElementById("sys-grid-b"), sysRes = document.getElementById("sys-result");
	function sysDims() { return [parseInt(sysMR.value) || 3, parseInt(sysMC.value) || 3]; }
	function rSys() { const [m, n] = sysDims(); buildMatrixGrid(sysGA, m, n); buildVectorGrid(sysGB, m); sysRes.innerHTML = ""; } rSys();
	document.getElementById("sys-resize").addEventListener("click", rSys);
	document.getElementById("sys-solve").addEventListener("click", () => { sysRes.innerHTML = ""; try { const [m, n] = sysDims(); const A = readMatrix(sysGA, m, n); if (!A) throw new Error("A 中无效输入。"); const b = readVector(sysGB, m); if (!b) throw new Error("b 中无效输入。"); renderResult(sysRes, "Ax = b", opSolveLinear(A, b)); } catch (e) { showError(sysRes, e.message); } });

	/* ===== DUAL ===== */
	const daR = document.getElementById("dual-a-rows"), daC = document.getElementById("dual-a-cols"), dbR = document.getElementById("dual-b-rows"), dbC = document.getElementById("dual-b-cols"), dgA = document.getElementById("dual-grid-a"), dgB = document.getElementById("dual-grid-b"), dRes = document.getElementById("dual-result");
	function dDims() { return { ar: parseInt(daR.value) || 3, ac: parseInt(daC.value) || 3, br: parseInt(dbR.value) || 3, bc: parseInt(dbC.value) || 3 }; }
	function rDual() { const d = dDims(); buildMatrixGrid(dgA, d.ar, d.ac); buildMatrixGrid(dgB, d.br, d.bc); dRes.innerHTML = ""; } rDual();
	document.getElementById("dual-resize").addEventListener("click", rDual);
	function dualOp(label, fn) { dRes.innerHTML = ""; try { const d = dDims(); const A = readMatrix(dgA, d.ar, d.ac); if (!A) throw new Error("A 无效。"); const B = readMatrix(dgB, d.br, d.bc); if (!B) throw new Error("B 无效。"); renderResult(dRes, label, fn(A, B)); } catch (e) { showError(dRes, e.message); } }
	document.getElementById("dual-add").addEventListener("click", () => dualOp("A+B", opAdd));
	document.getElementById("dual-sub").addEventListener("click", () => dualOp("A−B", opSub));
	document.getElementById("dual-mul").addEventListener("click", () => dualOp("A×B", opMul));

	/* ===== MODAL ===== */
	const modal = document.getElementById("import-modal"), ta = document.getElementById("import-textarea"), ie = document.getElementById("import-error");
	function openModal() { modal.classList.remove("hidden"); ta.value = ""; ie.classList.add("hidden"); }
	function showModalText(t) { modal.classList.remove("hidden"); ta.value = t; ie.classList.add("hidden"); }
	document.getElementById("import-cancel").addEventListener("click", () => modal.classList.add("hidden"));
	document.getElementById("import-confirm").addEventListener("click", () => autoImport(ta.value.trim()));

	function autoImport(text) {
		ie.classList.add("hidden");
		if (!text) { ie.textContent = "输入为空。"; ie.classList.remove("hidden"); return; }
		const M = parseMatrixString(text);
		if (!M) { ie.textContent = "无法解析矩阵。支持 [1,2;3,4]、空格/逗号分隔、CSV。"; ie.classList.remove("hidden"); return; }
		const sz = M.size();
		if (importTarget === "single") { sr.value = sz[0]; sc.value = sz[1]; buildMatrixGrid(sg, sz[0], sz[1]); fillMatrix(sg, M); document.querySelector(".tab-btn[data-tab='single']").click(); }
		else if (importTarget === "system-a") { sysMR.value = sz[0]; sysMC.value = sz[1]; buildMatrixGrid(sysGA, sz[0], sz[1]); fillMatrix(sysGA, M); buildVectorGrid(sysGB, sz[0]); document.querySelector(".tab-btn[data-tab='system']").click(); }
		else if (importTarget === "dual-a") { daR.value = sz[0]; daC.value = sz[1]; buildMatrixGrid(dgA, sz[0], sz[1]); fillMatrix(dgA, M); document.querySelector(".tab-btn[data-tab='dual']").click(); }
		else if (importTarget === "dual-b") { dbR.value = sz[0]; dbC.value = sz[1]; buildMatrixGrid(dgB, sz[0], sz[1]); fillMatrix(dgB, M); document.querySelector(".tab-btn[data-tab='dual']").click(); }
		modal.classList.add("hidden");
	}
	modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.add("hidden"); });
	document.getElementById("clear-history").addEventListener("click", clearHistory);
	document.addEventListener("keydown", (e) => { if (e.key === "Escape") modal.classList.add("hidden"); });
});
