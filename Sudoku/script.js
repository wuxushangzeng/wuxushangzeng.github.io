(function() {
    class SudokuGenerator {
        static generateFullGrid() {
            const grid = Array.from({ length: 9 }, () => Array(9).fill(0));
            if (SudokuGenerator.solve(grid)) return grid;
            return SudokuGenerator.generateFullGrid();
        }

        static solve(grid) {
            const empty = SudokuGenerator.findEmpty(grid);
            if (!empty) return true;
            const [row, col] = empty;
            const nums = [1,2,3,4,5,6,7,8,9];
            SudokuGenerator.shuffleArray(nums);
            for (const num of nums) {
                if (SudokuGenerator.isValid(grid, row, col, num)) {
                    grid[row][col] = num;
                    if (SudokuGenerator.solve(grid)) return true;
                    grid[row][col] = 0;
                }
            }
            return false;
        }

        static findEmpty(grid) {
            for (let r = 0; r < 9; r++)
                for (let c = 0; c < 9; c++)
                    if (grid[r][c] === 0) return [r, c];
            return null;
        }

        static isValid(grid, row, col, num) {
            for (let i = 0; i < 9; i++) {
                if (grid[row][i] === num) return false;
                if (grid[i][col] === num) return false;
            }
            const boxRow = Math.floor(row / 3) * 3;
            const boxCol = Math.floor(col / 3) * 3;
            for (let r = boxRow; r < boxRow + 3; r++)
                for (let c = boxCol; c < boxCol + 3; c++)
                    if (grid[r][c] === num) return false;
            return true;
        }

        static shuffleArray(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        static generatePuzzle(emptyTarget) {
            const full = SudokuGenerator.generateFullGrid();
            const puzzle = full.map(row => [...row]);
            const cells = [];
            for (let r = 0; r < 9; r++)
                for (let c = 0; c < 9; c++)
                    cells.push([r, c]);
            SudokuGenerator.shuffleArray(cells);
            let removed = 0;
            for (const [r, c] of cells) {
                if (removed >= emptyTarget) break;
                const backup = puzzle[r][c];
                puzzle[r][c] = 0;
                if (SudokuGenerator.countSolutions(puzzle) === 1) {
                    removed++;
                } else {
                    puzzle[r][c] = backup;
                }
            }
            return puzzle;
        }

        static countSolutions(grid) {
            const copy = grid.map(row => [...row]);
            let count = 0;
            function solver(g) {
                if (count > 1) return;
                const empty = SudokuGenerator.findEmpty(g);
                if (!empty) { count++; return; }
                const [r, c] = empty;
                for (let num = 1; num <= 9; num++) {
                    if (SudokuGenerator.isValid(g, r, c, num)) {
                        g[r][c] = num;
                        solver(g);
                        g[r][c] = 0;
                        if (count > 1) return;
                    }
                }
            }
            solver(copy);
            return count;
        }
    }

    const DIFFICULTY_EMPTY = {
        easy: { min: 35, max: 40 },
        medium: { min: 41, max: 45 },
        hard: { min: 46, max: 50 },
        expert: { min: 51, max: 55 },
        insane: { min: 56, max: 60 }
    };

    let board = [];
    let staticCells = [];
    let candidates = [];
    let errorCells = new Set();
    let selectedRow = -1;
    let selectedCol = -1;
    let fillMode = true;
    let solutionGrid = [];
    let assistMode = 'full';
    let puzzleCompleted = false;

    const boardEl = document.getElementById('sudokuBoard');
    const overlay = document.getElementById('completionOverlay');
    const modeIndicator = document.getElementById('modeIndicator');
    const numberButtons = document.getElementById('numberButtons');
    const autoCandidateBtn = document.getElementById('autoCandidateBtn');
    const clearCellBtn = document.getElementById('clearCellBtn');
    const clearAllCandidatesBtn = document.getElementById('clearAllCandidatesBtn');
    const checkBtn = document.getElementById('checkBtn');
    const newGameBtn = document.getElementById('newGameBtn');
    const difficultySelect = document.getElementById('difficulty');
    const messageArea = document.getElementById('messageArea');
    const assistRadioGroup = document.getElementById('assistRadioGroup');

    let cellDOM = [];

    function initGame(puzzle) {
        board = [];
        staticCells = [];
        candidates = [];
        errorCells = new Set();
        selectedRow = -1;
        selectedCol = -1;
        puzzleCompleted = false;
        overlay.classList.add('hidden');

        for (let r = 0; r < 9; r++) {
            board[r] = [];
            staticCells[r] = [];
            candidates[r] = [];
            for (let c = 0; c < 9; c++) {
                board[r][c] = 0;
                staticCells[r][c] = (puzzle[r][c] !== 0);
                candidates[r][c] = new Set();
            }
        }
        for (let r = 0; r < 9; r++)
            for (let c = 0; c < 9; c++)
                if (staticCells[r][c]) board[r][c] = puzzle[r][c];

        const puzzleCopy = puzzle.map(row => [...row]);
        SudokuGenerator.solve(puzzleCopy);
        solutionGrid = puzzleCopy;

        buildBoardDOM();
        computeErrors();
        updateAllCellDisplays();
        updateNumberButtonAvailability();
        updateNumberButtonStyles();
        for (let r = 0; r < 9; r++) {
            let found = false;
            for (let c = 0; c < 9; c++) {
                if (!staticCells[r][c]) {
                    selectCell(r, c);
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
        showMessage('新游戏已就绪', 'success');
    }

    function buildBoardDOM() {
        boardEl.innerHTML = '';
        cellDOM = [];
        const mainTable = document.createElement('table');
        mainTable.cellSpacing = 0;
        mainTable.cellPadding = 0;

        for (let boxRow = 0; boxRow < 3; boxRow++) {
            const tr = document.createElement('tr');
            for (let boxCol = 0; boxCol < 3; boxCol++) {
                const td = document.createElement('td');
                td.className = (boxRow + boxCol) % 2 === 0 ? 'boardCellGroupA' : 'boardCellGroupB';
                const innerTable = document.createElement('table');
                innerTable.cellSpacing = 1;
                innerTable.cellPadding = 0;

                for (let innerRow = 0; innerRow < 3; innerRow++) {
                    const innerTr = document.createElement('tr');
                    for (let innerCol = 0; innerCol < 3; innerCol++) {
                        const r = boxRow * 3 + innerRow;
                        const c = boxCol * 3 + innerCol;
                        const innerTd = document.createElement('td');
                        innerTd.className = 'boardCell';
                        if (staticCells[r][c]) innerTd.classList.add('staticCell');
                        innerTd.dataset.row = r;
                        innerTd.dataset.col = c;

                        const container = document.createElement('div');
                        container.style.cssText = 'width:100%;height:100%;position:relative;';
                        const valueDiv = document.createElement('div');
                        valueDiv.className = 'cell-value';
                        valueDiv.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;';
                        const candGrid = document.createElement('div');
                        candGrid.className = 'candidates-grid';
                        candGrid.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;';
                        for (let n = 1; n <= 9; n++) {
                            const candSpan = document.createElement('span');
                            candSpan.className = 'cand-num hidden';
                            candSpan.textContent = n;
                            candSpan.dataset.candNum = n;
                            candGrid.appendChild(candSpan);
                        }
                        container.appendChild(candGrid);
                        container.appendChild(valueDiv);
                        innerTd.appendChild(container);
                        innerTd.addEventListener('click', () => selectCell(r, c));
                        innerTr.appendChild(innerTd);
                        if (!cellDOM[r]) cellDOM[r] = [];
                        cellDOM[r][c] = {
                            td: innerTd,
                            container,
                            valueDiv,
                            candGrid,
                            candSpans: candGrid.querySelectorAll('.cand-num')
                        };
                    }
                    innerTable.appendChild(innerTr);
                }
                td.appendChild(innerTable);
                tr.appendChild(td);
            }
            mainTable.appendChild(tr);
        }
        boardEl.appendChild(mainTable);
    }

    function selectCell(r, c) {
        if (selectedRow >= 0 && selectedCol >= 0 && cellDOM[selectedRow]) {
            cellDOM[selectedRow][selectedCol].td.classList.remove('selected');
        }
        clearHighlights();
        selectedRow = r;
        selectedCol = c;
        if (cellDOM[r] && cellDOM[r][c]) {
            cellDOM[r][c].td.classList.add('selected');
        }
        highlightRelated(r, c);
        updateNumberButtonStyles();
    }

    function clearHighlights() {
        for (let r = 0; r < 9; r++)
            for (let c = 0; c < 9; c++)
                if (cellDOM[r] && cellDOM[r][c])
                    cellDOM[r][c].td.classList.remove('related', 'sameNumber');
    }

    function highlightRelated(row, col) {
        if (assistMode === 'none') return;

        const value = board[row][col];
        let highlightCells = [];

        if (assistMode === 'full') {
            highlightCells = value !== 0 ? [] : [[row, col]];
            if (value !== 0) {
                for (let r = 0; r < 9; r++)
                    for (let c = 0; c < 9; c++)
                        if (board[r][c] === value) highlightCells.push([r, c]);
            }
        } else if (assistMode === 'cell') {
            highlightCells = [[row, col]];
        }

        const relatedSet = new Set();
        for (const [hr, hc] of highlightCells) {
            const boxRow = Math.floor(hr / 3) * 3;
            const boxCol = Math.floor(hc / 3) * 3;
            for (let r = 0; r < 9; r++) {
                for (let c = 0; c < 9; c++) {
                    if (r === hr || c === hc || (r >= boxRow && r < boxRow+3 && c >= boxCol && c < boxCol+3)) {
                        const key = `${r},${c}`;
                        if (!relatedSet.has(key)) {
                            relatedSet.add(key);
                            if (cellDOM[r] && cellDOM[r][c]) cellDOM[r][c].td.classList.add('related');
                        }
                    }
                }
            }
        }

        if (assistMode === 'full') {
            for (const [hr, hc] of highlightCells) {
                if (cellDOM[hr] && cellDOM[hr][hc]) cellDOM[hr][hc].td.classList.add('sameNumber');
            }
        }
    }

    function computeErrors() {
        errorCells.clear();
        for (let r = 0; r < 9; r++) {
            const seen = {};
            for (let c = 0; c < 9; c++) {
                const v = board[r][c];
                if (v !== 0) {
                    if (seen[v]) {
                        errorCells.add(`${r},${c}`);
                        errorCells.add(seen[v]);
                    } else seen[v] = `${r},${c}`;
                }
            }
        }
        for (let c = 0; c < 9; c++) {
            const seen = {};
            for (let r = 0; r < 9; r++) {
                const v = board[r][c];
                if (v !== 0) {
                    if (seen[v]) {
                        errorCells.add(`${r},${c}`);
                        errorCells.add(seen[v]);
                    } else seen[v] = `${r},${c}`;
                }
            }
        }
        for (let br = 0; br < 9; br += 3) {
            for (let bc = 0; bc < 9; bc += 3) {
                const seen = {};
                for (let r = br; r < br + 3; r++) {
                    for (let c = bc; c < bc + 3; c++) {
                        const v = board[r][c];
                        if (v !== 0) {
                            if (seen[v]) {
                                errorCells.add(`${r},${c}`);
                                errorCells.add(seen[v]);
                            } else seen[v] = `${r},${c}`;
                        }
                    }
                }
            }
        }
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] !== 0 && board[r][c] !== solutionGrid[r][c]) {
                    errorCells.add(`${r},${c}`);
                }
            }
        }
    }

    function isCandidateConflict(row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num) return true;
            if (board[i][col] === num) return true;
        }
        const br = Math.floor(row/3)*3, bc = Math.floor(col/3)*3;
        for (let r = br; r < br+3; r++)
            for (let c = bc; c < bc+3; c++)
                if (board[r][c] === num) return true;
        return false;
    }

    function updateCellDisplay(r, c) {
        const cell = cellDOM[r] && cellDOM[r][c];
        if (!cell) return;
        const value = board[r][c];
        const candSet = candidates[r][c];
        const isError = errorCells.has(`${r},${c}`);

        if (value !== 0) {
            cell.valueDiv.textContent = value;
            cell.valueDiv.style.display = 'flex';
            cell.valueDiv.className = 'cell-value ' + (staticCells[r][c] ? 'static' : 'user-filled');
            cell.candGrid.style.display = 'none';
        } else {
            cell.valueDiv.textContent = '';
            cell.valueDiv.style.display = 'none';
            cell.candGrid.style.display = 'grid';
            const spans = cell.candSpans;
            for (const span of spans) {
                const n = parseInt(span.dataset.candNum);
                if (candSet.has(n)) {
                    span.classList.add('visible');
                    span.classList.remove('hidden');
                    span.classList.toggle('conflict', isCandidateConflict(r, c, n));
                } else {
                    span.classList.add('hidden');
                    span.classList.remove('visible', 'conflict');
                }
            }
        }

        if (staticCells[r][c]) {
            cell.td.classList.add('staticCell');
        } else {
            cell.td.classList.remove('staticCell');
        }

        if (isError) {
            cell.td.classList.add('error');
        } else {
            cell.td.classList.remove('error');
        }
    }

    function updateAllCellDisplays() {
        for (let r = 0; r < 9; r++)
            for (let c = 0; c < 9; c++)
                updateCellDisplay(r, c);
    }

    function removeConflictingCandidates(row, col, num) {
        const affected = new Set();
        const boxRow = Math.floor(row/3)*3;
        const boxCol = Math.floor(col/3)*3;
        for (let i = 0; i < 9; i++) {
            if (i !== col) affected.add(`${row},${i}`);
            if (i !== row) affected.add(`${i},${col}`);
        }
        for (let r = boxRow; r < boxRow+3; r++)
            for (let c = boxCol; c < boxCol+3; c++)
                if (r !== row || c !== col) affected.add(`${r},${c}`);
        for (const key of affected) {
            const [r, c] = key.split(',').map(Number);
            if (board[r][c] === 0 && candidates[r][c].has(num)) {
                candidates[r][c].delete(num);
            }
        }
    }

    function fillNumber(num) {
        if (selectedRow < 0 || selectedCol < 0) {
            showMessage('请先点击选择一个格子', 'error');
            return;
        }
        if (staticCells[selectedRow][selectedCol]) {
            showMessage('初始数字不能修改', 'error');
            return;
        }
        if (fillMode) {
            if (board[selectedRow][selectedCol] === num) {
                board[selectedRow][selectedCol] = 0;
                candidates[selectedRow][selectedCol] = new Set();
            } else {
                board[selectedRow][selectedCol] = num;
                candidates[selectedRow][selectedCol] = new Set();
                removeConflictingCandidates(selectedRow, selectedCol, num);
            }
        } else {
            if (board[selectedRow][selectedCol] !== 0) {
                showMessage('该格已有数字，请先清除', 'error');
                return;
            }
            if (candidates[selectedRow][selectedCol].has(num)) {
                candidates[selectedRow][selectedCol].delete(num);
            } else {
                candidates[selectedRow][selectedCol].add(num);
            }
        }
        computeErrors();
        updateAllCellDisplays();
        clearHighlights();
        highlightRelated(selectedRow, selectedCol);
        updateNumberButtonAvailability();
        updateNumberButtonStyles();

        checkCompletion();
    }

    function checkCompletion() {
        const allFilled = board.flat().every(v => v !== 0);
        const noErrors = errorCells.size === 0;

        if (allFilled && noErrors) {
            if (!puzzleCompleted) {
                puzzleCompleted = true;
                overlay.classList.remove('hidden');
            }
        } else {
            puzzleCompleted = false;
            overlay.classList.add('hidden');
            if (messageArea.textContent === '🎉 完成！') {
                messageArea.textContent = '';
                messageArea.className = '';
            }
        }
    }

    function clearCell() {
        if (selectedRow < 0 || selectedCol < 0) { showMessage('请先选择格子', 'error'); return; }
        if (staticCells[selectedRow][selectedCol]) { showMessage('初始数字不能清除', 'error'); return; }
        board[selectedRow][selectedCol] = 0;
        candidates[selectedRow][selectedCol] = new Set();
        computeErrors();
        updateAllCellDisplays();
        clearHighlights();
        highlightRelated(selectedRow, selectedCol);
        updateNumberButtonAvailability();
        updateNumberButtonStyles();
        checkCompletion();
        showMessage('已清除', 'success');
    }

    function clearAllCandidates() {
        for (let r = 0; r < 9; r++)
            for (let c = 0; c < 9; c++)
                if (!staticCells[r][c] && board[r][c] === 0)
                    candidates[r][c] = new Set();
        updateAllCellDisplays();
        showMessage('所有候选数已清除', 'success');
    }

    function autoFillCandidates() {
        for (let r = 0; r < 9; r++)
            for (let c = 0; c < 9; c++)
                if (board[r][c] === 0) {
                    const used = new Set();
                    for (let i=0;i<9;i++) { if(board[r][i]) used.add(board[r][i]); if(board[i][c]) used.add(board[i][c]); }
                    const br=Math.floor(r/3)*3, bc=Math.floor(c/3)*3;
                    for(let rr=br;rr<br+3;rr++) for(let cc=bc;cc<bc+3;cc++) if(board[rr][cc]) used.add(board[rr][cc]);
                    candidates[r][c] = new Set([1,2,3,4,5,6,7,8,9].filter(n=>!used.has(n)));
                }
        updateAllCellDisplays();
        if (selectedRow>=0 && selectedCol>=0) { clearHighlights(); highlightRelated(selectedRow, selectedCol); }
        showMessage('候选数已更新', 'success');
    }

    function updateNumberButtonAvailability() {
        const count = Array(10).fill(0);
        for (let r=0;r<9;r++) for(let c=0;c<9;c++) if(board[r][c]) count[board[r][c]]++;
        const buttons = numberButtons.querySelectorAll('button');
        buttons.forEach(btn => {
            const num = parseInt(btn.dataset.num);
            btn.disabled = (count[num] === 9);
        });
    }

    function checkSolution() {
        let errors = 0;
        const conflictCells = new Set();
        for (let r=0;r<9;r++) {
            const seen={};
            for(let c=0;c<9;c++){ const v=board[r][c]; if(v){ if(seen[v]){ errors++; conflictCells.add(`${r},${c}`); conflictCells.add(seen[v]); } else seen[v]=`${r},${c}`; } }
        }
        for (let c=0;c<9;c++) {
            const seen={};
            for(let r=0;r<9;r++){ const v=board[r][c]; if(v){ if(seen[v]){ errors++; conflictCells.add(`${r},${c}`); conflictCells.add(seen[v]); } else seen[v]=`${r},${c}`; } }
        }
        for(let br=0;br<9;br+=3) for(let bc=0;bc<9;bc+=3){
            const seen={};
            for(let r=br;r<br+3;r++) for(let c=bc;c<bc+3;c++){ const v=board[r][c]; if(v){ if(seen[v]){ errors++; conflictCells.add(`${r},${c}`); conflictCells.add(seen[v]); } else seen[v]=`${r},${c}`; } }
        }
        let candidateConflicts = 0;
        for (let r=0;r<9;r++) for(let c=0;c<9;c++){
            if(board[r][c]===0 && candidates[r][c].size>0){
                for(const num of candidates[r][c]){
                    if(isCandidateConflict(r,c,num)){
                        candidateConflicts++;
                        conflictCells.add(`${r},${c}`);
                    }
                }
            }
        }
        conflictCells.forEach(key => {
            const [r,c] = key.split(',').map(Number);
            if(cellDOM[r] && cellDOM[r][c]) cellDOM[r][c].td.classList.add('error');
        });
        const allFilled = board.flat().every(v=>v!==0);
        if(errors===0 && candidateConflicts===0 && allFilled) showMessage('🎉 恭喜！全部正确！', 'success');
        else if(errors===0 && candidateConflicts===0) showMessage('目前没有冲突，继续加油！', 'success');
        else {
            let msg = '';
            if(errors>0) msg += `发现 ${errors} 处数字冲突`;
            if(candidateConflicts>0) msg += (msg?'，':'')+`${candidateConflicts} 个非法候选数`;
            showMessage(msg + '（红色标记）', 'error');
        }
        setTimeout(()=>{
            for(let r=0;r<9;r++) for(let c=0;c<9;c++) if(cellDOM[r]&&cellDOM[r][c]) cellDOM[r][c].td.classList.remove('error');
        }, 2500);
    }

    function showMessage(msg, type) {
        messageArea.textContent = msg;
        messageArea.className = '';
        if(type) messageArea.classList.add(type);
        if (msg && type !== 'error' && msg !== '🎉 恭喜！全部正确！') {
            setTimeout(()=>{
                if(messageArea.textContent===msg){
                    messageArea.textContent='';
                    messageArea.className='';
                }
            }, 3000);
        }
    }

    function updateNumberButtonStyles() {
        const buttons = numberButtons.querySelectorAll('button');
        buttons.forEach(btn => {
            const num = parseInt(btn.dataset.num);
            btn.classList.remove('candidate-active');
            if(!fillMode && selectedRow>=0 && selectedCol>=0 && board[selectedRow][selectedCol]===0 && candidates[selectedRow][selectedCol] && candidates[selectedRow][selectedCol].has(num))
                btn.classList.add('candidate-active');
        });
    }

    function newGame() {
        const diff = difficultySelect.value;
        const range = DIFFICULTY_EMPTY[diff];
        const target = Math.floor(Math.random()*(range.max-range.min+1))+range.min;
        showMessage('正在生成谜题…', 'success');
        setTimeout(()=>{
            try {
                const puzzle = SudokuGenerator.generatePuzzle(target);
                initGame(puzzle);
            } catch(e) { showMessage('生成失败，请重试', 'error'); }
        }, 10);
    }

    modeIndicator.addEventListener('click', ()=>{
        fillMode=!fillMode;
        modeIndicator.textContent=fillMode?'✏️ 填入模式':'📝 候选模式';
        modeIndicator.classList.toggle('candidate-mode',!fillMode);
        updateNumberButtonStyles();
        showMessage(fillMode?'填入模式：点击数字直接填入':'候选模式：点击数字标记候选数','success');
    });

    numberButtons.addEventListener('click',(e)=>{
        const btn=e.target.closest('button');
        if(!btn || btn.disabled) return;
        fillNumber(parseInt(btn.dataset.num));
    });

    assistRadioGroup.addEventListener('change', (e) => {
        if (e.target.name === 'assistMode') {
            assistMode = e.target.value;
            if (selectedRow >= 0 && selectedCol >= 0) {
                clearHighlights();
                highlightRelated(selectedRow, selectedCol);
            }
        }
    });

    autoCandidateBtn.addEventListener('click',autoFillCandidates);
    clearCellBtn.addEventListener('click',clearCell);
    clearAllCandidatesBtn.addEventListener('click',clearAllCandidates);
    checkBtn.addEventListener('click',checkSolution);
    newGameBtn.addEventListener('click',newGame);

    overlay.addEventListener('click', () => {
        overlay.classList.add('hidden');
    });

    document.addEventListener('keydown',(e)=>{
        if(e.key>='1'&&e.key<='9'){ e.preventDefault(); fillNumber(parseInt(e.key)); }
        else if(e.key==='Backspace'||e.key==='Delete'||e.key==='0'){ e.preventDefault(); clearCell(); }
        else if(e.key==='ArrowUp'&&selectedRow>0){ e.preventDefault(); selectCell(selectedRow-1,selectedCol); }
        else if(e.key==='ArrowDown'&&selectedRow<8){ e.preventDefault(); selectCell(selectedRow+1,selectedCol); }
        else if(e.key==='ArrowLeft'&&selectedCol>0){ e.preventDefault(); selectCell(selectedRow,selectedCol-1); }
        else if(e.key==='ArrowRight'&&selectedCol<8){ e.preventDefault(); selectCell(selectedRow,selectedCol+1); }
        else if(e.key==='m'||e.key==='M'){ e.preventDefault(); modeIndicator.click(); }
    });

    document.addEventListener('click',(e)=>{
        if(!e.target.closest('#sudokuBoard')&&!e.target.closest('#numberButtons')&&!e.target.closest('#ControlPanel')){
            if(selectedRow>=0&&selectedCol>=0&&cellDOM[selectedRow]) cellDOM[selectedRow][selectedCol].td.classList.remove('selected');
            selectedRow=-1; selectedCol=-1;
            clearHighlights();
            updateNumberButtonStyles();
        }
    });

    const initialPuzzle = [
        [6,0,0,0,9,8,0,2,4],
        [0,0,4,0,0,0,8,3,0],
        [2,0,8,0,0,0,1,0,9],
        [0,6,0,0,8,0,3,5,0],
        [0,9,0,1,0,4,0,8,0],
        [0,5,1,0,2,0,0,9,0],
        [5,0,6,0,0,0,9,0,8],
        [0,2,9,0,0,0,5,0,0],
        [7,8,0,5,1,0,0,0,6]
    ];
    initGame(initialPuzzle);
    showMessage('点击格子后用数字按钮填入，可切换候选模式', 'success');
})();