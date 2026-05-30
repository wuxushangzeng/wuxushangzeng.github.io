// Tractatus Logico-Philosophicus data
// Total propositions: 525
// Translated: 525
// Generated: 2026-05-30T12:20:13.572Z

const PROPOSITIONS = {
  "1": {
    "en": "The world is everything that is the case.",
    "zh": "世界是一切发生的事情。",
    "de": "Die Welt ist alles, was der Fall ist.",
    "enPM": "The world is all that is the case.",
    "depth": 1,
    "translated": true
  },
  "2": {
    "en": "What is the case, the fact, is the existence of atomic facts.",
    "zh": "发生的事情——事实——是事态的存在。",
    "de": "Was der Fall ist, die Tatsache, ist das Bestehen von Sachverhalten.",
    "enPM": "What is the case—a fact—is the existence of states of affairs.",
    "depth": 1,
    "translated": true
  },
  "3": {
    "en": "The logical picture of the facts is the thought.",
    "zh": "事实的逻辑图像是思想。",
    "de": "Das logische Bild der Tatsachen ist der Gedanke.",
    "enPM": "A logical picture of facts is a thought.",
    "depth": 1,
    "translated": true
  },
  "4": {
    "en": "The thought is the significant proposition.",
    "zh": "思想是有意义的命题。",
    "de": "Der Gedanke ist der sinnvolle Satz.",
    "enPM": "A thought is a proposition with a sense.",
    "depth": 1,
    "translated": true
  },
  "5": {
    "en": "Propositions are truth-functions of elementary propositions.\n(An elementary proposition is a truth-function of itself.)",
    "zh": "命题是基本命题的真值函项。（基本命题是其自身的真值函项。）",
    "de": "Der Satz ist eine Wahrheitsfunktion der Elementarsätze.\n(Der Elementarsatz ist eine Wahrheitsfunktion seiner selbst.)",
    "enPM": "A proposition is a truth-function of elementary propositions.\n(An elementary proposition is a truth-function of itself.)",
    "depth": 1,
    "translated": true
  },
  "6": {
    "en": "The general form of truth-function is: $[p, \\xi, N(\\xi)]$.\nThis is the general form of proposition.",
    "zh": "真值函项的一般形式是：[p, ξ, N(ξ)]。这是命题的一般形式。",
    "de": "Die allgemeine Form der Wahrheitsfunktion ist: [p, ξ, N(ξ)].\nDies ist die allgemeine Form des Satzes.",
    "enPM": "The general form of a truth-function is  [p, ξ, N(ξ)].\nThis is the general form of a proposition.",
    "depth": 1,
    "translated": true
  },
  "7": {
    "en": "Whereof one cannot speak, thereof one must be silent.",
    "zh": "对于不可言说的东西，必须保持沉默。",
    "de": "Wovon man nicht sprechen kann, darüber muss man schweigen.",
    "enPM": "What we cannot speak about we must pass over in silence.",
    "depth": 1,
    "translated": true
  },
  "1.1": {
    "en": "The world is the totality of facts, not of things.",
    "zh": "世界是事实的总和，而非事物的总和。",
    "de": "Die Welt ist die Gesamtheit der Tatsachen, nicht der Dinge.",
    "enPM": "The world is the totality of facts, not of things.",
    "depth": 2,
    "translated": true
  },
  "1.11": {
    "en": "The world is determined by the facts, and by these being all the facts.",
    "zh": "世界被事实所规定，被这就是一切事实这一点所规定。",
    "de": "Die Welt ist durch die Tatsachen bestimmt und dadurch, dass es alle Tatsachen sind.",
    "enPM": "The world is determined by the facts, and by their being all the facts.",
    "depth": 3,
    "translated": true
  },
  "1.12": {
    "en": "For the totality of facts determines both what is the case, and also all that is not the case.",
    "zh": "因为，事实的总和既规定了发生的事情，也规定了所有未发生的事情。",
    "de": "Denn, die Gesamtheit der Tatsachen bestimmt, was der Fall ist und auch, was alles nicht der Fall ist.",
    "enPM": "For the totality of facts determines what is the case, and also whatever is not the case.",
    "depth": 3,
    "translated": true
  },
  "1.13": {
    "en": "The facts in logical space are the world.",
    "zh": "在逻辑空间中的事实就是世界。",
    "de": "Die Tatsachen im logischen Raum sind die Welt.",
    "enPM": "The facts in logical space are the world.",
    "depth": 3,
    "translated": true
  },
  "1.2": {
    "en": "The world divides into facts.",
    "zh": "世界分解为事实。",
    "de": "Die Welt zerfällt in Tatsachen.",
    "enPM": "The world divides into facts.",
    "depth": 2,
    "translated": true
  },
  "1.21": {
    "en": "Any one can either be the case or not be the case, and everything else remain the same.",
    "zh": "一件事情既可以发生也可以不发生，而其余一切保持不变。",
    "de": "Eines kann der Fall sein oder nicht der Fall sein und alles übrige gleich bleiben.",
    "enPM": "Each item can be the case or not the case while everything else remains the same.",
    "depth": 3,
    "translated": true
  },
  "2.01": {
    "en": "An atomic fact is a combination of objects (entities, things).",
    "zh": "事态是诸对象（事物、物体）的结合。",
    "de": "Der Sachverhalt ist eine Verbindung von Gegenständen. (Sachen, Dingen.)",
    "enPM": "A state of affairs (a state of things) is a combination of objects (things).",
    "depth": 2,
    "translated": true
  },
  "2.011": {
    "en": "It is essential to a thing that it can be a constituent part of an atomic fact.",
    "zh": "能够成为事态的构成部分，这一点对于事物来说是本质性的。",
    "de": "Es ist dem Ding wesentlich, der Bestandteil eines Sachverhaltes sein zu können.",
    "enPM": "It is essential to things that they should be possible constituents of states of affairs.",
    "depth": 3,
    "translated": true
  },
  "2.012": {
    "en": "In logic nothing is accidental: if a thing can occur in an atomic fact the possibility of that atomic fact must already be prejudged in the thing.",
    "zh": "在逻辑中没有什么是偶然的：如果一个事物能够出现在事态之中，那么该事态的可能性必然已经被预设在该事物之中了。",
    "de": "In der Logik ist nichts zufällig: Wenn das Ding im Sachverhalt vorkommen kann, so muss die Möglichkeit des Sachverhaltes im Ding bereits präjudiziert sein.",
    "enPM": "In logic nothing is accidental: if a thing can occur in a state of affairs, the possibility of the state of affairs must be written into the thing itself.",
    "depth": 3,
    "translated": true
  },
  "2.0121": {
    "en": "It would, so to speak, appear as an accident, when to a thing that could exist alone on its own account, subsequently a state of affairs could be made to fit.\nIf things can occur in atomic facts, this possibility must already lie in them.\n(A logical entity cannot be merely possible. Logic treats of every possibility, and all possibilities are its facts.)\nJust as we cannot think of spatial objects at all apart from space, or temporal objects apart from time, so we cannot think of any object apart from the possibility of its connexion with other things.\nIf I can think of an object in the context of an atomic fact, I cannot think of it apart from the possibility of this context.",
    "zh": "如果一个本身就能独立存在的事物后来能够契合于一种处境，那看起来仿佛是一种偶然。如果诸事物能够出现在诸事态之中，那么这种可能性必然已经存在于它们之中。（某种逻辑的东西不可能是仅仅可能的。逻辑处理每一种可能性，而所有可能性都是它的事实。）正如我们不能离开空间来思考空间对象、离开时间来思考时间对象一样，我们也不能离开某个对象与其他对象结合的可能性来思考该对象。如果我能够在一个事态的关联中思考一个对象，那么我就不能离开这种关联的可能性来思考它。",
    "de": "Es erschiene gleichsam als Zufall, wenn dem Ding, das allein für sich bestehen könnte, nachträglich eine Sachlage passen würde.\nWenn die Dinge in Sachverhalten vorkommen können, so muss dies schon in ihnen liegen.\n(Etwas Logisches kann nicht nur-möglich sein. Die Logik handelt von jeder Möglichkeit und alle Möglichkeiten sind ihre Tatsachen.)\nWie wir uns räumliche Gegenstände überhaupt nicht außerhalb des Raumes, zeitliche nicht außerhalb der Zeit denken können, so können wir uns keinen Gegenstand außerhalb der Möglichkeit seiner Verbindung mit anderen denken.\nWenn ich mir den Gegenstand im Verbande des Sachverhalts denken kann, so kann ich ihn nicht außerhalb der Möglichkeit dieses Verbandes denken.",
    "enPM": "It would seem to be a sort of accident, if it turned out that a situation would fit a thing that could already exist entirely on its own.\nIf things can occur in states of affairs, this possibility must be in them from the beginning.\n(Nothing in the province of logic can be merely possible. Logic deals with every possibility and all possibilities are its facts.)\nJust as we are quite unable to imagine spatial objects outside space or temporal objects outside time, so too there is no object that we can imagine excluded from the possibility of combining with others.\nIf I can imagine objects combined in states of affairs, I cannot imagine them excluded from the possibility of such combinations.",
    "depth": 4,
    "translated": true
  },
  "2.0122": {
    "en": "The thing is independent, in so far as it can occur in all possible circumstances, but this form of independence is a form of connexion with the atomic fact, a form of dependence. (It is impossible for words to occur in two different ways, alone and in the proposition.)",
    "zh": "事物是独立的，因为它能够出现在所有可能的情况之中，但这种独立性形式是一种与事态的关联形式，是一种不独立的形式。（词不可能以两种不同的方式出现——单独出现和在命题中出现。）",
    "de": "Das Ding ist selbständig, insofern es in allen möglichen Sachlagen vorkommen kann, aber diese Form der Selbständigkeit ist eine Form des Zusammenhangs mit dem Sachverhalt, eine Form der Unselbständigkeit. (Es ist unmöglich, dass Worte in zwei verschiedenen Weisen auftreten, allein und im Satz.)",
    "enPM": "Things are independent in so far as they can occur in all possible situations, but this form of independence is a form of connexion with states of affairs, a form of dependence. (It is impossible for words to appear in two different roles: by themselves, and in propositions.)",
    "depth": 4,
    "translated": true
  },
  "2.0123": {
    "en": "If I know an object, then I also know all the possibilities of its occurrence in atomic facts.\n(Every such possibility must lie in the nature of the object.)\nA new possibility cannot subsequently be found.",
    "zh": "如果我认识一个对象，那么我也就认识了它出现在诸事态之中的所有可能性。（每一种这样的可能性都必然处于该对象的本性之中。）不可能事后发现一种新的可能性。",
    "de": "Wenn ich den Gegenstand kenne, so kenne ich auch sämtliche Möglichkeiten seines Vorkommens in Sachverhalten.\n(Jede solche Möglichkeit muss in der Natur des Gegenstandes liegen.)\nEs kann nicht nachträglich eine neue Möglichkeit gefunden werden.",
    "enPM": "If I know an object I also know all its possible occurrences in states of affairs.\n(Every one of these possibilities must be part of the nature of the object.)\nA new possibility cannot be discovered later.",
    "depth": 4,
    "translated": true
  },
  "2.01231": {
    "en": "In order to know an object, I must know not its external but all its internal qualities.",
    "zh": "为了认识一个对象，虽然我不必认识它的外部的——但我必须认识它的所有内部的性质。",
    "de": "Um einen Gegenstand zu kennen, muss ich zwar nicht seine externen – aber ich muss alle seine internen Eigenschaften kennen.",
    "enPM": "If I am to know an object, though I need not know its external properties, I must know all its internal properties.",
    "depth": 5,
    "translated": true
  },
  "2.0124": {
    "en": "If all objects are given, then thereby are all possible atomic facts also given.",
    "zh": "如果所有对象都被给予了，那么由此所有可能的事态也就被给予了。",
    "de": "Sind alle Gegenstände gegeben, so sind damit auch alle möglichen Sachverhalte gegeben.",
    "enPM": "If all objects are given, then at the same time all possible states of affairs are also given.",
    "depth": 4,
    "translated": true
  },
  "2.013": {
    "en": "Every thing is, as it were, in a space of possible atomic facts. I can think of this space as empty, but not of the thing without the space.",
    "zh": "每一个事物仿佛都处于可能事态的一个空间之中。我能够把这个空间思考为空，但不能离开这个空间来思考事物。",
    "de": "Jedes Ding ist, gleichsam, in einem Raume möglicher Sachverhalte. Diesen Raum kann ich mir leer denken, nicht aber das Ding ohne den Raum.",
    "enPM": "Each thing is, as it were, in a space of possible states of affairs. This space I can imagine empty, but I cannot imagine the thing without the space.",
    "depth": 3,
    "translated": true
  },
  "2.0131": {
    "en": "A spatial object must lie in infinite space. (A point in space is an argument place.)\nA speck in a visual field need not be red, but it must have a colour; it has, so to speak, a colour space round it. A tone must have a pitch, the object of the sense of touch a hardness, etc.",
    "zh": "空间对象必须处于无限的空间之中。（空间中的点就是一个主目位置。）视野中的一个斑点不必是红色的，但它必须具有某种颜色——它仿佛被一个颜色空间所包围。一个音调必须具有某种音高，触觉的对象必须具有某种硬度，等等。",
    "de": "Der räumliche Gegenstand muss im unendlichen Raume liegen. (Der Raumpunkt ist eine Argumentstelle.)\nDer Fleck im Gesichtsfeld muss zwar nicht rot sein, aber eine Farbe muss er haben: er hat sozusagen den Farbenraum um sich. Der Ton muss eine Höhe haben, der Gegenstand des Tastsinnes eine Härte, usw.",
    "enPM": "A spatial object must be situated in infinite space. (A spatial point is an argument-place.)\nA speck in the visual field, thought it need not be red, must have some colour: it is, so to speak, surrounded by colour-space. Notes must have some pitch, objects of the sense of touch some degree of hardness, and so on.",
    "depth": 4,
    "translated": true
  },
  "2.014": {
    "en": "Objects contain the possibility of all states of affairs.",
    "zh": "诸对象包含了所有处境的可能性。",
    "de": "Die Gegenstände enthalten die Möglichkeit aller Sachlagen.",
    "enPM": "Objects contain the possibility of all situations.",
    "depth": 3,
    "translated": true
  },
  "2.0141": {
    "en": "The possibility of its occurrence in atomic facts is the form of the object.",
    "zh": "对象出现在诸事态之中的可能性就是对象的形式。",
    "de": "Die Möglichkeit seines Vorkommens in Sachverhalten, ist die Form des Gegenstandes.",
    "enPM": "The possibility of its occurring in states of affairs is the form of an object.",
    "depth": 4,
    "translated": true
  },
  "2.02": {
    "en": "The object is simple.",
    "zh": "对象是简单的。",
    "de": "Der Gegenstand ist einfach.",
    "enPM": "Objects are simple.",
    "depth": 2,
    "translated": true
  },
  "2.0201": {
    "en": "Every statement about complexes can be analysed into a statement about their constituent parts, and into those propositions which completely describe the complexes.",
    "zh": "关于复合物的每一个陈述都可以分解为关于其诸构成部分的陈述以及那些完全描述了这些复合物的命题。",
    "de": "Jede Aussage über Komplexe lässt sich in eine Aussage über deren Bestandteile und in diejenigen Sätze zerlegen, welche die Komplexe vollständig beschreiben.",
    "enPM": "Every statement about complexes can be resolved into a statement about their constituents and into the propositions that describe the complexes completely.",
    "depth": 3,
    "translated": true
  },
  "2.021": {
    "en": "Objects form the substance of the world. Therefore they cannot be compound.",
    "zh": "诸对象构成世界的实体。因此它们不能是复合的。",
    "de": "Die Gegenstände bilden die Substanz der Welt. Darum können sie nicht zusammengesetzt sein.",
    "enPM": "Objects make up the substance of the world. That is why they cannot be composite.",
    "depth": 3,
    "translated": true
  },
  "2.0211": {
    "en": "If the world had no substance, then whether a proposition had sense would depend on whether another proposition was true.",
    "zh": "如果世界没有实体，那么一个命题是否有含义，就取决于另一个命题是否为真。",
    "de": "Hätte die Welt keine Substanz, so würde, ob ein Satz Sinn hat, davon abhängen, ob ein anderer Satz wahr ist.",
    "enPM": "If the world had no substance, then whether a proposition had sense would depend on whether another proposition was true.",
    "depth": 4,
    "translated": true
  },
  "2.0212": {
    "en": "It would then be impossible to form a picture of the world (true or false).",
    "zh": "那样的话，就不可能勾画出一幅关于世界的图像（真的或假的）。",
    "de": "Es wäre dann unmöglich, ein Bild der Welt (wahr oder falsch) zu entwerfen.",
    "enPM": "In that case we could not sketch any picture of the world (true or false).",
    "depth": 4,
    "translated": true
  },
  "2.022": {
    "en": "It is clear that however different from the real one an imagined world may be, it must have something---a form---in common with the real world.",
    "zh": "显然，一个想象的世界不管与实在的世界有多么不同，它都必然与实在的世界具有某种共同的东西——某种形式。",
    "de": "Es ist offenbar, dass auch eine von der wirklichen noch so verschieden gedachte Welt Etwas – eine Form – mit der wirklichen gemein haben muss.",
    "enPM": "It is obvious that an imagined world, however different it may be from the real one, must have something—a form—in common with it.",
    "depth": 3,
    "translated": true
  },
  "2.023": {
    "en": "This fixed form consists of the objects.",
    "zh": "这种固定的形式是由诸对象构成的。",
    "de": "Diese feste Form besteht eben aus den Gegenständen.",
    "enPM": "Objects are just what constitute this unalterable form.",
    "depth": 3,
    "translated": true
  },
  "2.0231": {
    "en": "The substance of the world can only determine a form and not any material properties. For these are first presented by the propositions---first formed by the configuration of the objects.",
    "zh": "世界的实体只能规定一种形式，而不能规定任何物质的性质。因为物质性质首先是由命题来呈现的——首先是由诸对象的配置来形成的。",
    "de": "Die Substanz der Welt kann nur eine Form und keine materiellen Eigenschaften bestimmen. Denn diese werden erst durch die Sätze dargestellt – erst durch die Konfiguration der Gegenstände gebildet.",
    "enPM": "The substance of the world can only determine a form, and not any material properties. For it is only by means of propositions that material properties are represented—only by the configuration of objects that they are produced.",
    "depth": 4,
    "translated": true
  },
  "2.0232": {
    "en": "Roughly speaking: objects are colourless.",
    "zh": "粗略地说：诸对象是无色的。",
    "de": "Beiläufig gesprochen: Die Gegenstände sind farblos.",
    "enPM": "In a manner of speaking, objects are colourless.",
    "depth": 4,
    "translated": true
  },
  "2.0233": {
    "en": "Two objects of the same logical form are---apart from their external properties---only differentiated from one another in that they are different.",
    "zh": "两个具有同一逻辑形式的对象——除了它们的外在性质之外——仅仅因它们是不同的而彼此区分开来。",
    "de": "Zwei Gegenstände von der gleichen logischen Form sind – abgesehen von ihren externen Eigenschaften – von einander nur dadurch unterschieden, dass sie verschieden sind.",
    "enPM": "If two objects have the same logical form, the only distinction between them, apart from their external properties, is that they are different.",
    "depth": 4,
    "translated": true
  },
  "2.02331": {
    "en": "Either a thing has properties which no other has, and then one can distinguish it straight away from the others by a description and refer to it; or, on the other hand, there are several things which have the totality of their properties in common, and then it is quite impossible to point to any one of them.\nFor it a thing is not distinguished by anything, I cannot distinguish it---for otherwise it would be distinguished.",
    "zh": "要么一个事物具有其他任何事物都不具有的性质，那么我们可以通过一个描述直接把它从其他事物中区分出来并指称它；要么，有若干事物，它们的全部性质都是共同的，那么根本就不可能指出它们中的某一个。因为如果事物没有被任何东西所区分，我就不能区分它——否则它就已经被区分了。",
    "de": "Entweder ein Ding hat Eigenschaften, die kein anderes hat, dann kann man es ohneweiteres durch eine Beschreibung aus den anderen herausheben, und darauf hinweisen; oder aber, es gibt mehrere Dinge, die ihre sämtlichen Eigenschaften gemeinsam haben, dann ist es überhaupt unmöglich auf eines von ihnen zu zeigen.\nDenn, ist das Ding durch nichts hervorgehoben, so kann ich es nicht hervorheben, denn sonst ist es eben hervorgehoben.",
    "enPM": "Either a thing has properties that nothing else has, in which case we can immediately use a description to distinguish it from the others and refer to it; or, on the other hand, there are several things that have the whole set of their properties in common, in which case it is quite impossible to indicate one of them.\nFor if there is nothing to distinguish a thing, I cannot distinguish it, since otherwise it would be distinguished after all.",
    "depth": 5,
    "translated": true
  },
  "2.024": {
    "en": "Substance is what exists independently of what is the case.",
    "zh": "实体是独立于发生的事情而存在的。",
    "de": "Die Substanz ist das, was unabhängig von dem was der Fall ist, besteht.",
    "enPM": "The substance is what subsists independently of what is the case.",
    "depth": 3,
    "translated": true
  },
  "2.025": {
    "en": "It is form and content.",
    "zh": "它是形式和内容。",
    "de": "Sie ist Form und Inhalt.",
    "enPM": "It is form and content.",
    "depth": 3,
    "translated": true
  },
  "2.0251": {
    "en": "Space, time and colour (colouredness) are forms of objects.",
    "zh": "空间、时间和颜色（有颜色性）是诸对象的形式。",
    "de": "Raum, Zeit und Farbe (Färbigkeit) sind Formen der Gegenstände.",
    "enPM": "Space, time, colour (being coloured) are forms of objects.",
    "depth": 4,
    "translated": true
  },
  "2.026": {
    "en": "Only if there are objects can there be a fixed form of the world.",
    "zh": "只有存在诸对象，才可能存在世界的固定形式。",
    "de": "Nur wenn es Gegenstände gibt, kann es eine feste Form der Welt geben.",
    "enPM": "There must be objects, if the world is to have unalterable form.",
    "depth": 3,
    "translated": true
  },
  "2.027": {
    "en": "The fixed, the existent and the object are one.",
    "zh": "固定的东西、实存者和对象是同一的。",
    "de": "Das Feste, das Bestehende und der Gegenstand sind Eins.",
    "enPM": "Objects, the unalterable, and the subsistent are one and the same.",
    "depth": 3,
    "translated": true
  },
  "2.0271": {
    "en": "The object is the fixed, the existent; the configuration is the changing, the variable.",
    "zh": "对象是固定的东西，是实存者；配置是变化的东西，是可变的。",
    "de": "Der Gegenstand ist das Feste, Bestehende; die Konfiguration ist das Wechselnde, Unbeständige.",
    "enPM": "Objects are what is unalterable and subsistent; their configuration is what is changing and unstable.",
    "depth": 4,
    "translated": true
  },
  "2.0272": {
    "en": "The configuration of the objects forms the atomic fact.",
    "zh": "诸对象的配置构成事态。",
    "de": "Die Konfiguration der Gegenstände bildet den Sachverhalt.",
    "enPM": "The configuration of objects produces states of affairs.",
    "depth": 4,
    "translated": true
  },
  "2.03": {
    "en": "In the atomic fact objects hang one in another, like the links of a chain.",
    "zh": "在事态中，诸对象就像一条锁链的诸环节那样彼此勾连。",
    "de": "Im Sachverhalt hängen die Gegenstände ineinander, wie die Glieder einer Kette.",
    "enPM": "In a state of affairs objects fit into one another like the links of a chain.",
    "depth": 2,
    "translated": true
  },
  "2.031": {
    "en": "In the atomic fact the objects are combined in a definite way.",
    "zh": "在事态中，诸对象以特定的方式相互结合。",
    "de": "Im Sachverhalt verhalten sich die Gegenstände in bestimmter Art und Weise zueinander.",
    "enPM": "In a state of affairs objects stand in a determinate relation to one another.",
    "depth": 3,
    "translated": true
  },
  "2.032": {
    "en": "The way in which objects hang together in the atomic fact is the structure of the atomic fact.",
    "zh": "诸对象在事态中彼此勾连的方式就是该事态的结构。",
    "de": "Die Art und Weise, wie die Gegenstände im Sachverhalt zusammenhängen, ist die Struktur des Sachverhaltes.",
    "enPM": "The determinate way in which objects are connected in a state of affairs is the structure of the state of affairs.",
    "depth": 3,
    "translated": true
  },
  "2.033": {
    "en": "The form is the possibility of the structure.",
    "zh": "形式是结构的可能性。",
    "de": "Die Form ist die Möglichkeit der Struktur.",
    "enPM": "Form is the possibility of structure.",
    "depth": 3,
    "translated": true
  },
  "2.034": {
    "en": "The structure of the fact consists of the structures of the atomic facts.",
    "zh": "事实的结构由诸事态的结构构成。",
    "de": "Die Struktur der Tatsache besteht aus den Strukturen der Sachverhalte.",
    "enPM": "The structure of a fact consists of the structures of states of affairs.",
    "depth": 3,
    "translated": true
  },
  "2.04": {
    "en": "The totality of existent atomic facts is the world.",
    "zh": "实存着的诸事态的总和就是世界。",
    "de": "Die Gesamtheit der bestehenden Sachverhalte ist die Welt.",
    "enPM": "The totality of existing states of affairs is the world.",
    "depth": 2,
    "translated": true
  },
  "2.05": {
    "en": "The totality of existent atomic facts also determines which atomic facts do not exist.",
    "zh": "实存着的诸事态的总和也规定了哪些事态不实存。",
    "de": "Die Gesamtheit der bestehenden Sachverhalte bestimmt auch, welche Sachverhalte nicht bestehen.",
    "enPM": "The totality of existing states of affairs also determines which states of affairs do not exist.",
    "depth": 2,
    "translated": true
  },
  "2.06": {
    "en": "The existence and non-existence of atomic facts is the reality.\n(The existence of atomic facts we also call a positive fact, their non-existence a negative fact.)",
    "zh": "诸事态的实存和不实存就是实在。（诸事态的实存我们也称为一个肯定的事实，它们的不实存则称为一个否定的事实。）",
    "de": "Das Bestehen und Nichtbestehen von Sachverhalten ist die Wirklichkeit.\n(Das Bestehen von Sachverhalten nennen wir auch eine positive, das Nichtbestehen eine negative Tatsache.)",
    "enPM": "The existence and non-existence of states of affairs is reality.\n(We call the existence of states of affairs a positive fact, and their non-existence a negative fact.)",
    "depth": 2,
    "translated": true
  },
  "2.061": {
    "en": "Atomic facts are independent of one another.",
    "zh": "诸事态是彼此独立的。",
    "de": "Die Sachverhalte sind von einander unabhängig.",
    "enPM": "States of affairs are independent of one another.",
    "depth": 3,
    "translated": true
  },
  "2.062": {
    "en": "From the existence of non-existence of an atomic fact we cannot infer the existence of non-existence of another.",
    "zh": "从一个事态的实存或不实存，不能推出另一个事态的实存或不实存。",
    "de": "Aus dem Bestehen oder Nichtbestehen eines Sachverhaltes kann nicht auf das Bestehen oder Nichtbestehen eines anderen geschlossen werden.",
    "enPM": "From the existence or non-existence of one state of affairs it is impossible to infer the existence or non-existence of another.",
    "depth": 3,
    "translated": true
  },
  "2.063": {
    "en": "The total reality is the world.",
    "zh": "整个实在就是世界。",
    "de": "Die gesamte Wirklichkeit ist die Welt.",
    "enPM": "The sum-total of reality is the world.",
    "depth": 3,
    "translated": true
  },
  "2.1": {
    "en": "We make to ourselves pictures of facts.",
    "zh": "我们给自己绘制事实的图像。",
    "de": "Wir machen uns Bilder der Tatsachen.",
    "enPM": "We picture facts to ourselves.",
    "depth": 2,
    "translated": true
  },
  "2.11": {
    "en": "The picture presents the facts in logical space, the existence and non-existence of atomic facts.",
    "zh": "图像在逻辑空间中呈现处境——诸事态的实存和不实存。",
    "de": "Das Bild stellt die Sachlage im logischen Raume, das Bestehen und Nichtbestehen von Sachverhalten vor.",
    "enPM": "A picture presents a situation in logical space, the existence and non-existence of states of affairs.",
    "depth": 3,
    "translated": true
  },
  "2.12": {
    "en": "The picture is a model of reality.",
    "zh": "图像是实在的一个模型。",
    "de": "Das Bild ist ein Modell der Wirklichkeit.",
    "enPM": "A picture is a model of reality.",
    "depth": 3,
    "translated": true
  },
  "2.13": {
    "en": "To the objects correspond in the picture the elements of the picture.",
    "zh": "在图像中，图像的诸元素对应着诸对象。",
    "de": "Den Gegenständen entsprechen im Bilde die Elemente des Bildes.",
    "enPM": "In a picture objects have the elements of the picture corresponding to them.",
    "depth": 3,
    "translated": true
  },
  "2.131": {
    "en": "The elements of the picture stand, in the picture, for the objects.",
    "zh": "图像的诸元素在图像中代表诸对象。",
    "de": "Die Elemente des Bildes vertreten im Bild die Gegenstände.",
    "enPM": "In a picture the elements of the picture are the representatives of objects.",
    "depth": 4,
    "translated": true
  },
  "2.14": {
    "en": "The picture consists in the fact that its elements are combined with one another in a definite way.",
    "zh": "图像在于其诸元素以特定的方式彼此关联。",
    "de": "Das Bild besteht darin, dass sich seine Elemente in bestimmter Art und Weise zu einander verhalten.",
    "enPM": "What constitutes a picture is that its elements are related to one another in a determinate way.",
    "depth": 3,
    "translated": true
  },
  "2.141": {
    "en": "The picture is a fact.",
    "zh": "图像是一个事实。",
    "de": "Das Bild ist eine Tatsache.",
    "enPM": "A picture is a fact.",
    "depth": 4,
    "translated": true
  },
  "2.15": {
    "en": "That the elements of the picture are combined with one another in a definite way, represents that the things are so combined with one another.\nThis connexion of the elements of the picture is called its structure, and the possibility of this structure is called the form of representation of the picture.",
    "zh": "图像的诸元素以特定的方式彼此关联，这一点表示诸事物是这样彼此关联的。图像的诸元素的这种关联被称为它的结构，而这种结构的可能性则被称为图像的描画形式。",
    "de": "Dass sich die Elemente des Bildes in bestimmter Art und Weise zu einander verhalten, stellt vor, dass sich die Sachen so zu einander verhalten.\nDieser Zusammenhang der Elemente des Bildes heiße seine Struktur und ihre Möglichkeit seine Form der Abbildung.",
    "enPM": "The fact that the elements of a picture are related to one another in a determinate way represents that things are related to one another in the same way.\nLet us call this connexion of its elements the structure of the picture, and let us call the possibility of this structure the pictorial form of the picture.",
    "depth": 3,
    "translated": true
  },
  "2.151": {
    "en": "The form of representation is the possibility that the things are combined with one another as are the elements of the picture.",
    "zh": "描画形式是诸事物像图像的诸元素那样彼此关联的可能性。",
    "de": "Die Form der Abbildung ist die Möglichkeit, dass sich die Dinge so zu einander verhalten, wie die Elemente des Bildes.",
    "enPM": "Pictorial form is the possibility that things are related to one another in the same way as the elements of the picture.",
    "depth": 4,
    "translated": true
  },
  "2.1511": {
    "en": "Thus the picture is linked with reality; it reaches up to it.",
    "zh": "图像就这样与实在相联结；它伸达实在。",
    "de": "Das Bild ist so mit der Wirklichkeit verknüpft – es reicht bis zu ihr.",
    "enPM": "That is how a picture is attached to reality; it reaches right out to it.",
    "depth": 5,
    "translated": true
  },
  "2.1512": {
    "en": "It is like a scale applied to reality.",
    "zh": "它像一把应用于实在的尺度。",
    "de": "Es ist wie ein Maßstab an die Wirklichkeit angelegt.",
    "enPM": "It is laid against reality like a measure.",
    "depth": 5,
    "translated": true
  },
  "2.15121": {
    "en": "Only the outermost points of the dividing lines touch the object to be measured.",
    "zh": "只有分度线的诸最终端点才触及要度量的对象。",
    "de": "Nur die äußersten Punkte der Teilstriche berühren den zu messenden Gegenstand.",
    "enPM": "Only the end-points of the graduating lines actually touch the object that is to be measured.",
    "depth": 6,
    "translated": true
  },
  "2.1513": {
    "en": "According to this view the representing relation which makes it a picture, also belongs to the picture.",
    "zh": "按照这种观点，使图像成为图像的描画关系也属于该图像。",
    "de": "Nach dieser Auffassung gehört also zum Bilde auch noch die abbildende Beziehung, die es zum Bild macht.",
    "enPM": "So a picture, conceived in this way, also includes the pictorial relationship, which makes it into a picture.",
    "depth": 5,
    "translated": true
  },
  "2.1514": {
    "en": "The representing relation consists of the co-ordinations of the elements of the picture and the things.",
    "zh": "描画关系由图像的诸元素与诸事物的配合构成。",
    "de": "Die abbildende Beziehung besteht aus den Zuordnungen der Elemente des Bildes und der Sachen.",
    "enPM": "The pictorial relationship consists of the correlations of the picture’s elements with things.",
    "depth": 5,
    "translated": true
  },
  "2.1515": {
    "en": "These co-ordinations are as it were the feelers of its elements with which the picture touches reality.",
    "zh": "这些配合仿佛是图像的诸元素的触角，图像以这些触角触及实在。",
    "de": "Diese Zuordnungen sind gleichsam die Fühler der Bildelemente, mit denen das Bild die Wirklichkeit berührt.",
    "enPM": "These correlations are, as it were, the feelers of the picture’s elements, with which the picture touches reality.",
    "depth": 5,
    "translated": true
  },
  "2.16": {
    "en": "In order to be a picture a fact must have something in common with what it pictures.",
    "zh": "为了成为一个图像，一个事实必须与它所描画的东西具有某种共同的东西。",
    "de": "Die Tatsache muss, um Bild zu sein, etwas mit dem Abgebildeten gemeinsam haben.",
    "enPM": "If a fact is to be a picture, it must have something in common with what it depicts.",
    "depth": 3,
    "translated": true
  },
  "2.161": {
    "en": "In the picture and the pictured there must be something identical in order that the one can be a picture of the other at all.",
    "zh": "在图像和被描画的东西之中，必须有某种同一的东西，以便这图像能够成为另一图像的图像。",
    "de": "In Bild und Abgebildetem muss etwas identisch sein, damit das eine überhaupt ein Bild des anderen sein kann.",
    "enPM": "There must be something identical in a picture and what it depicts, to enable the one to be a picture of the other at all.",
    "depth": 4,
    "translated": true
  },
  "2.17": {
    "en": "What the picture must have in common with reality in order to be able to represent it after its manner---rightly or falsely---is its form of representation.",
    "zh": "图像为了能够以其方式——正确地或错误地——描画实在而必须与实在共有的东西，就是它的描画形式。",
    "de": "Was das Bild mit der Wirklichkeit gemein haben muss, um sie auf seine Art und Weise – richtig oder falsch – abbilden zu können, ist seine Form der Abbildung.",
    "enPM": "What a picture must have in common with reality, in order to be able to depict it—correctly or incorrectly—in the way that it does, is its pictorial form.",
    "depth": 3,
    "translated": true
  },
  "2.171": {
    "en": "The picture can represent every reality whose form it has.\nThe spatial picture, everything spatial, the coloured, everything coloured, etc.",
    "zh": "图像能够描画其形式为它所具有的每一个实在。空间的图像描画一切空间的东西，颜色的图像描画一切有颜色的东西，等等。",
    "de": "Das Bild kann jede Wirklichkeit abbilden, deren Form es hat.\nDas räumliche Bild alles Räumliche, das farbige alles Farbige, etc.",
    "enPM": "A picture can depict any reality whose form it has.\nA spatial picture can depict anything spatial, a coloured one anything coloured, etc.",
    "depth": 4,
    "translated": true
  },
  "2.172": {
    "en": "The picture, however, cannot represent its form of representation; it shows it forth.",
    "zh": "然而图像不能描画它的描画形式；它显示这种形式。",
    "de": "Seine Form der Abbildung aber, kann das Bild nicht abbilden; es weist sie auf.",
    "enPM": "A picture cannot, however, depict its pictorial form: it displays it.",
    "depth": 4,
    "translated": true
  },
  "2.173": {
    "en": "The picture represents its object from without (its standpoint is its form of representation), therefore the picture represents its object rightly or falsely.",
    "zh": "图像从外部描画其对象（它的视点就是它的描画形式），因此图像正确地或错误地描画其对象。",
    "de": "Das Bild stellt sein Objekt von außerhalb dar (sein Standpunkt ist seine Form der Darstellung), darum stellt das Bild sein Objekt richtig oder falsch dar.",
    "enPM": "A picture represents its subject from a position outside it. (Its standpoint is its representational form.) That is why a picture represents its subject correctly or incorrectly.",
    "depth": 4,
    "translated": true
  },
  "2.174": {
    "en": "But the picture cannot place itself outside of its form of representation.",
    "zh": "但图像不能将它自身置于它的描画形式之外。",
    "de": "Das Bild kann sich aber nicht außerhalb seiner Form der Darstellung stellen.",
    "enPM": "A picture cannot, however, place itself outside its representational form.",
    "depth": 4,
    "translated": true
  },
  "2.18": {
    "en": "What every picture, of whatever form, must have in common with reality in order to be able to represent it at all---rightly or falsely---is the logical form, that is, the form of reality.",
    "zh": "每一个图像——不论它具有什么形式——为了能够（正确地或错误地）描画实在而必须与实在共有的东西，就是逻辑形式，即实在的形式。",
    "de": "Was jedes Bild, welcher Form immer, mit der Wirklichkeit gemein haben muss, um sie überhaupt – richtig oder falsch – abbilden zu können, ist die logische Form, das ist, die Form der Wirklichkeit.",
    "enPM": "What any picture, of whatever form, must have in common with reality, in order to be able to depict it—correctly or incorrectly—in any way at all, is logical form, i.e. the form of reality.",
    "depth": 3,
    "translated": true
  },
  "2.181": {
    "en": "If the form of representation is the logical form, then the picture is called a logical picture.",
    "zh": "如果描画形式就是逻辑形式，那么该图像就被称为逻辑图像。",
    "de": "Ist die Form der Abbildung die logische Form, so heißt das Bild das logische Bild.",
    "enPM": "A picture whose pictorial form is logical form is called a logical picture.",
    "depth": 4,
    "translated": true
  },
  "2.182": {
    "en": "Every picture is also a logical picture. (On the other hand, for example, not every picture is spatial.)",
    "zh": "每一个图像也都是一个逻辑图像。（另一方面，例如并非每一个图像都是空间的图像。）",
    "de": "Jedes Bild ist auch ein logisches. (Dagegen ist z. B. nicht jedes Bild ein räumliches.)",
    "enPM": "Every picture is at the same time a logical one. (On the other hand, not every picture is, for example, a spatial one.)",
    "depth": 4,
    "translated": true
  },
  "2.19": {
    "en": "The logical picture can depict the world.",
    "zh": "逻辑图像能够描画世界。",
    "de": "Das logische Bild kann die Welt abbilden.",
    "enPM": "Logical pictures can depict the world.",
    "depth": 3,
    "translated": true
  },
  "2.2": {
    "en": "The picture has the logical form of representation in common with what it pictures.",
    "zh": "图像与其所描绘的东西共有逻辑的描画形式。",
    "de": "Das Bild hat mit dem Abgebildeten die logische Form der Abbildung gemein.",
    "enPM": "A picture has logico-pictorial form in common with what it depicts.",
    "depth": 2,
    "translated": true
  },
  "2.201": {
    "en": "The picture depicts reality by representing a possibility of the existence and non-existence of atomic facts.",
    "zh": "图像通过表现诸事态的实存和不实存的一种可能性来描画实在。",
    "de": "Das Bild bildet die Wirklichkeit ab, indem es eine Möglichkeit des Bestehens und Nichtbestehens von Sachverhalten darstellt.",
    "enPM": "A picture depicts reality by representing a possibility of existence and non-existence of states of affairs.",
    "depth": 3,
    "translated": true
  },
  "2.202": {
    "en": "The picture represents a possible state of affairs in logical space.",
    "zh": "图像呈现逻辑空间中的一个可能的情况。",
    "de": "Das Bild stellt eine mögliche Sachlage im logischen Raume dar.",
    "enPM": "A picture represents a possible situation in logical space.",
    "depth": 3,
    "translated": true
  },
  "2.203": {
    "en": "The picture contains the possibility of the state of affairs which it represents.",
    "zh": "图像包含了它所呈现的那个情况的可能性。",
    "de": "Das Bild enthält die Möglichkeit der Sachlage, die es darstellt.",
    "enPM": "A picture contains the possibility of the situation that it represents.",
    "depth": 3,
    "translated": true
  },
  "2.21": {
    "en": "The picture agrees with reality or not; it is right or wrong, true or false.",
    "zh": "图像与实在一致或者不一致；它是正确的或者不正确的，是真的或者假的。",
    "de": "Das Bild stimmt mit der Wirklichkeit überein oder nicht; es ist richtig oder unrichtig, wahr oder falsch.",
    "enPM": "A picture agrees with reality or fails to agree; it is correct or incorrect, true or false.",
    "depth": 3,
    "translated": true
  },
  "2.22": {
    "en": "The picture represents what it represents, independently of its truth or falsehood, through the form of representation.",
    "zh": "图像通过描画形式来表现它所表现的东西，而独立于它的真或假。",
    "de": "Das Bild stellt dar, was es darstellt, unabhängig von seiner Wahr- oder Falschheit, durch die Form der Abbildung.",
    "enPM": "What a picture represents it represents independently of its truth or falsity, by means of its pictorial form.",
    "depth": 3,
    "translated": true
  },
  "2.221": {
    "en": "What the picture represents is its sense.",
    "zh": "图像所表现的东西就是它的含义。",
    "de": "Was das Bild darstellt, ist sein Sinn.",
    "enPM": "What a picture represents is its sense.",
    "depth": 4,
    "translated": true
  },
  "2.222": {
    "en": "In the agreement or disagreement of its sense with reality, its truth or falsity consists.",
    "zh": "图像的真或假在于它的含义与实在的一致或不一致。",
    "de": "In der Übereinstimmung oder Nichtübereinstimmung seines Sinnes mit der Wirklichkeit, besteht seine Wahrheit oder Falschheit.",
    "enPM": "The agreement or disagreement of its sense with reality constitutes its truth or falsity.",
    "depth": 4,
    "translated": true
  },
  "2.223": {
    "en": "In order to discover whether the picture is true or false we must compare it with reality.",
    "zh": "为了发现图像是真的还是假的，我们必须把它与实在进行比较。",
    "de": "Um zu erkennen, ob das Bild wahr oder falsch ist, müssen wir es mit der Wirklichkeit vergleichen.",
    "enPM": "In order to tell whether a picture is true or false we must compare it with reality.",
    "depth": 4,
    "translated": true
  },
  "2.224": {
    "en": "It cannot be discovered from the picture alone whether it is true or false.",
    "zh": "不可能从图像本身发现它的真或假。",
    "de": "Aus dem Bild allein ist nicht zu erkennen, ob es wahr oder falsch ist.",
    "enPM": "It is impossible to tell from the picture alone whether it is true or false.",
    "depth": 4,
    "translated": true
  },
  "2.225": {
    "en": "There is no picture which is a priori true.",
    "zh": "不存在先天为真的图像。",
    "de": "Ein a priori wahres Bild gibt es nicht.",
    "enPM": "There are no pictures that are true a priori.",
    "depth": 4,
    "translated": true
  },
  "3.001": {
    "en": "\"An atomic fact is thinkable\"---means: we can imagine it.",
    "zh": "「一个事态是可思考的」——意思是：我们能够想象它。",
    "de": "„Ein Sachverhalt ist denkbar“ heißt: Wir können uns ein Bild von ihm machen.",
    "enPM": "‘A state of affairs is thinkable’: what this means is that we can picture it to ourselves.",
    "depth": 2,
    "translated": true
  },
  "3.01": {
    "en": "The totality of true thoughts is a picture of the world.",
    "zh": "诸真实思想的总和就是世界的一幅图像。",
    "de": "Die Gesamtheit der wahren Gedanken sind ein Bild der Welt.",
    "enPM": "The totality of true thoughts is a picture of the world.",
    "depth": 2,
    "translated": true
  },
  "3.02": {
    "en": "The thought contains the possibility of the state of affairs which it thinks. What is thinkable is also possible.",
    "zh": "思想包含了它所思考的那个情况的可能性。凡是可思考的，也就是可能的。",
    "de": "Der Gedanke enthält die Möglichkeit der Sachlage, die er denkt. Was denkbar ist, ist auch möglich.",
    "enPM": "A thought contains the possibility of the situation of which it is the thought. What is thinkable is possible too.",
    "depth": 2,
    "translated": true
  },
  "3.03": {
    "en": "We cannot think anything unlogical, for otherwise we should have to think unlogically.",
    "zh": "我们不能思考任何不合逻辑的东西，因为否则我们就必须不合逻辑地思考。",
    "de": "Wir können nichts Unlogisches denken, weil wir sonst unlogisch denken müssten.",
    "enPM": "Thought can never be of anything illogical, since, if it were, we should have to think illogically.",
    "depth": 2,
    "translated": true
  },
  "3.031": {
    "en": "It used to be said that God could create everything, except what was contrary to the laws of logic. The truth is, we could not say of an \"unlogical\" world how it would look.",
    "zh": "人们曾经说，上帝能够创造一切，除了违反逻辑规律的东西。真相是，我们不能说一个「不合逻辑的」世界看起来会是什么样子。",
    "de": "Man sagte einmal, dass Gott alles schaffen könne, nur nichts, was den logischen Gesetzen zuwider wäre. – Wir können nämlich von einer „unlogischen“ Welt nicht sagen, wie sie aussähe.",
    "enPM": "It used to be said that God could create anything except what would be contrary to the laws of logic. The truth is that we could not say what an ‘illogical’ world would look like.",
    "depth": 3,
    "translated": true
  },
  "3.032": {
    "en": "To present in language anything which \"contradicts logic\" is as impossible as in geometry to present by its co-ordinates a figure which contradicts the laws of space; or to give the co-ordinates of a point which does not exist.",
    "zh": "在语言中表现出某种「与逻辑矛盾」的东西，就像在几何中通过坐标表现出一个与空间规律矛盾的图形、或者给出一个不存在的点的坐标一样不可能。",
    "de": "Etwas „der Logik widersprechendes“ in der Sprache darstellen, kann man ebensowenig, wie in der Geometrie eine den Gesetzen des Raumes widersprechende Figur durch ihre Koordinaten darstellen; oder die Koordinaten eines Punktes angeben, welcher nicht existiert.",
    "enPM": "It is as impossible to represent in language anything that ‘contradicts logic’ as it is in geometry to represent by its co-ordinates a figure that contradicts the laws of space, or to give the co-ordinates of a point that does not exist.",
    "depth": 3,
    "translated": true
  },
  "3.0321": {
    "en": "We could present spatially an atomic fact which contradicted the laws of physics, but not one which contradicted the laws of geometry.",
    "zh": "我们能够以空间的方式呈现出一个与物理学规律矛盾的事态，但不能呈现出一个与几何学规律矛盾的事态。",
    "de": "Wohl können wir einen Sachverhalt räumlich darstellen, welcher den Gesetzen der Physik, aber keinen, der den Gesetzen der Geometrie zuwiderliefe.",
    "enPM": "Though a state of affairs that would contravene the laws of physics can be represented by us spatially, one that would contravene the laws of geometry cannot.",
    "depth": 4,
    "translated": true
  },
  "3.04": {
    "en": "An a priori true thought would be one whose possibility guaranteed its truth.",
    "zh": "一个先天为真的思想应当是这样一个思想：其可能性就保证了它的真。",
    "de": "Ein a priori richtiger Gedanke wäre ein solcher, dessen Möglichkeit seine Wahrheit bedingte.",
    "enPM": "If a thought were correct a priori, it would be a thought whose possibility ensured its truth.",
    "depth": 2,
    "translated": true
  },
  "3.05": {
    "en": "Only if we could know a priori that a thought is true if its truth was to be recognized from the thought itself (without an object of comparison).",
    "zh": "只有当一种思想的真能从该思想本身被认识（没有比较的对象）的时候，我们才能先天地知道该思想是真的。",
    "de": "Nur so könnten wir a priori wissen, dass ein Gedanke wahr ist, wenn aus dem Gedanken selbst (ohne Vergleichsobjekt) seine Wahrheit zu erkennen wäre.",
    "enPM": "A priori knowledge that a thought was true would be possible only if its truth were recognizable from the thought itself (without anything to compare it with).",
    "depth": 2,
    "translated": true
  },
  "3.1": {
    "en": "In the proposition the thought is expressed perceptibly through the senses.",
    "zh": "在命题中思想被感官可感知地表达出来。",
    "de": "Im Satz drückt sich der Gedanke sinnlich wahrnehmbar aus.",
    "enPM": "In a proposition a thought finds an expression that can be perceived by the senses.",
    "depth": 2,
    "translated": true
  },
  "3.11": {
    "en": "We use the sensibly perceptible sign (sound or written sign, etc.) of the proposition as a projection of the possible state of affairs.\nThe method of projection is the thinking of the sense of the proposition.",
    "zh": "我们使用命题的可被感官感知的记号（声音记号或书写记号等等）作为可能情况的投影。投影的方法就是对命题的含义进行思考。",
    "de": "Wir benützen das sinnlich wahrnehmbare Zeichen (Laut- oder Schriftzeichen etc.) des Satzes als Projektion der möglichen Sachlage.\nDie Projektionsmethode ist das Denken des Satz-Sinnes.",
    "enPM": "We use the perceptible sign of a proposition (spoken or written, etc.) as a projection of a possible situation.\nThe method of projection is to think of the sense of the proposition.",
    "depth": 3,
    "translated": true
  },
  "3.12": {
    "en": "The sign through which we express the thought I call the propositional sign. And the proposition is the propositional sign in its projective relation to the world.",
    "zh": "我们用来表达思想的那个记号，我称之为命题记号。而命题乃是命题记号在其对世界的投影关系之中。",
    "de": "Das Zeichen, durch welches wir den Gedanken ausdrücken, nenne ich das Satzzeichen. Und der Satz ist das Satzzeichen in seiner projektiven Beziehung zur Welt.",
    "enPM": "I call the sign with which we express a thought a propositional sign.—And a proposition is a propositional sign in its projective relation to the world.",
    "depth": 3,
    "translated": true
  },
  "3.13": {
    "en": "To the proposition belongs everything which belongs to the projection; but not what is projected.\nTherefore the possibility of what is projected but not this itself.\nIn the proposition, therefore, its sense is not yet contained, but the possibility of expressing it.\n(\"The content of the proposition\" means the content of the significant proposition.)\nIn the proposition the form of its sense is contained, but not its content.",
    "zh": "属于投影的一切都属于命题；但被投影的东西不属于命题。因此是被投影者的可能性，而非被投影者本身。因此在命题中，它的含义还没有被包含，而仅仅包含了表达该含义的可能性。（「命题的内容」意味着有含义的命题的内容。）在命题中，它的含义的形式被包含了，但其内容没有被包含。",
    "de": "Zum Satz gehört alles, was zur Projektion gehört; aber nicht das Projizierte.\nAlso die Möglichkeit des Projizierten, aber nicht dieses selbst.\nIm Satz ist also sein Sinn noch nicht enthalten, wohl aber die Möglichkeit, ihn auszudrücken.\n(„Der Inhalt des Satzes“ heißt der Inhalt des sinnvollen Satzes.)\nIm Satz ist die Form seines Sinnes enthalten, aber nicht dessen Inhalt.",
    "enPM": "A proposition includes all that the projection includes, but not what is projected.\nTherefore, though what is projected is not itself included, its possibility is.\nA proposition, therefore, does not actually contain its sense, but does contain the possibility of expressing it.\n(‘The content of a proposition’ means the content of a proposition that has sense.)\nA proposition contains the form, but not the content, of its sense.",
    "depth": 3,
    "translated": true
  },
  "3.14": {
    "en": "The propositional sign consists in the fact that its elements, the words, are combined in it in a definite way.\nThe propositional sign is a fact.",
    "zh": "命题记号在于其诸元素——诸词——以特定的方式在其中结合。命题记号是一个事实。",
    "de": "Das Satzzeichen besteht darin, dass sich seine Elemente, die Wörter, in ihm auf bestimmte Art und Weise zu einander verhalten.\nDas Satzzeichen ist eine Tatsache.",
    "enPM": "What constitutes a propositional sign is that in it its elements (the words) stand in a determinate relation to one another.\nA propositional sign is a fact.",
    "depth": 3,
    "translated": true
  },
  "3.141": {
    "en": "The proposition is not a mixture of words (just as the musical theme is not a mixture of tones).\nThe proposition is articulate.",
    "zh": "命题不是诸词的一种混合。（正如音乐主题不是诸音调的一种混合一样。）命题是环节清晰的。",
    "de": "Der Satz ist kein Wörtergemisch. – (Wie das musikalische Thema kein Gemisch von Tönen.)\nDer Satz ist artikuliert.",
    "enPM": "A proposition is not a blend of words.—(Just as a theme in music is not a blend of notes.)\nA proposition is articulate.",
    "depth": 4,
    "translated": true
  },
  "3.142": {
    "en": "Only facts can express a sense, a class of names cannot.",
    "zh": "只有事实才能表达一种含义，一簇名称不能。",
    "de": "Nur Tatsachen können einen Sinn ausdrücken, eine Klasse von Namen kann es nicht.",
    "enPM": "Only facts can express a sense, a set of names cannot.",
    "depth": 4,
    "translated": true
  },
  "3.143": {
    "en": "That the propositional sign is a fact is concealed by the ordinary form of expression, written or printed.\nFor in the printed proposition, for example, the sign of a proposition does not appear essentially different from a word.\n(Thus it was possible for Frege to call the proposition a compounded name.)",
    "zh": "通常的书写或印刷的表达形式掩盖了「命题记号是一个事实」这一点。因为在印刷出来的命题中，例如，命题的记号看起来并不与一个词有本质的不同。（这样，弗雷格就有可能把命题称为一个复合名称。）",
    "de": "Dass das Satzzeichen eine Tatsache ist, wird durch die gewöhnliche Ausdrucksform der Schrift oder des Druckes verschleiert.\nDenn im gedruckten Satz z. B. sieht das Satzzeichen nicht wesentlich verschieden aus vom Wort.\n(So war es möglich, dass Frege den Satz einen zusammengesetzten Namen nannte.)",
    "enPM": "Although a propositional sign is a fact, this is obscured by the usual form of expression in writing or print.\nFor in a printed proposition, for example, no essential difference is apparent between a propositional sign and a word.\n(That is what made it possible for Frege to call a proposition a composite name.)",
    "depth": 4,
    "translated": true
  },
  "3.1431": {
    "en": "The essential nature of the propositional sign becomes very clear when we imagine it made up of spatial objects (such as tables, chairs, books) instead of written signs.\nThe mutual spatial position of these things then expresses the sense of the proposition.",
    "zh": "如果我们想象命题记号不是由书写记号构成，而是由空间对象（比如桌子、椅子、书本）构成的，那么命题记号的本质就会变得非常清楚。这些事物的相互空间位置便表达了命题的含义。",
    "de": "Sehr klar wird das Wesen des Satzzeichens, wenn wir es uns, statt aus Schriftzeichen, aus räumlichen Gegenständen (etwa Tischen, Stühlen, Büchern) zusammengesetzt denken.\nDie gegenseitige räumliche Lage dieser Dinge drückt dann den Sinn des Satzes aus.",
    "enPM": "The essence of a propositional sign is very clearly seen if we imagine one composed of spatial objects (such as tables, chairs, and books) instead of written signs.\nThen the spatial arrangement of these things will express the sense of the proposition.",
    "depth": 5,
    "translated": true
  },
  "3.1432": {
    "en": "We must not say, \"The complex sign 'aRb' says 'a stands in relation R to b'\"; but we must say, \"That 'a' stands in a certain relation to 'b' says that aRb\".",
    "zh": "我们千万不能说：「复合记号『aRb』说a处于对b的关系R之中」；而必须说：「『a』处于对『b』的某种关系之中，这一事实说aRb」。",
    "de": "Nicht: „Das komplexe Zeichen ‚aRb‘ sagt, dass a in der Beziehung R zu b steht“, sondern: Dass „a“ in einer gewissen Beziehung zu „b“ steht, sagt, dass aRb.",
    "enPM": "Instead of, ‘The complex sign “aRb” says that a stands to b in\nthe relation R’, we ought to put, ‘That “a” stands to “b” in a certain\nrelation says that aRb.’",
    "depth": 5,
    "translated": true
  },
  "3.144": {
    "en": "States of affairs can be described but not named.\n(Names resemble points; propositions resemble arrows, they have sense.)",
    "zh": "诸情况可以被描述，但不能被命名。（名称类似于点；命题类似于箭矢，它们具有含义。）",
    "de": "Sachlagen kann man beschreiben, nicht benennen.\n(Namen gleichen Punkten, Sätze Pfeilen, sie haben Sinn.)",
    "enPM": "Situations can be described but not given names.\n(Names are like points; propositions like arrows—they have sense.)",
    "depth": 4,
    "translated": true
  },
  "3.2": {
    "en": "In propositions thoughts can be so expressed that to the objects of the thoughts correspond the elements of the propositional sign.",
    "zh": "在命题中思想可以这样表达：使得思想的诸对象与命题记号的诸元素相对应。",
    "de": "Im Satze kann der Gedanke so ausgedrückt sein, dass den Gegenständen des Gedankens Elemente des Satzzeichens entsprechen.",
    "enPM": "In a proposition a thought can be expressed in such a way that elements of the propositional sign correspond to the objects of the thought.",
    "depth": 2,
    "translated": true
  },
  "3.201": {
    "en": "These elements I call \"simple signs\" and the proposition \"completely analysed\".",
    "zh": "我把这些元素称为「简单记号」，把该命题称为「完全分析过了的命题」。",
    "de": "Diese Elemente nenne ich „einfache Zeichen“ und den Satz „vollständig analysiert“.",
    "enPM": "I call such elements ‘simple signs’, and such a proposition ‘complete analysed’.",
    "depth": 3,
    "translated": true
  },
  "3.202": {
    "en": "The simple signs employed in propositions are called names.",
    "zh": "在命题中使用的诸简单记号被称为名称。",
    "de": "Die im Satze angewandten einfachen Zeichen heißen Namen.",
    "enPM": "The simple signs employed in propositions are called names.",
    "depth": 3,
    "translated": true
  },
  "3.203": {
    "en": "The name means the object. The object is its meaning. (\"A\" is the same sign as \"A\".)",
    "zh": "名称意谓着对象。对象就是它的意谓。（「A」和「A」是同一个记号。）",
    "de": "Der Name bedeutet den Gegenstand. Der Gegenstand ist seine Bedeutung. („A“ ist dasselbe Zeichen wie „A“.)",
    "enPM": "A name means an object. The object is its meaning. (‘A’ is the same sign as ‘A’.)",
    "depth": 3,
    "translated": true
  },
  "3.21": {
    "en": "To the configuration of the simple signs in the propositional sign corresponds the configuration of the objects in the state of affairs.",
    "zh": "命题记号中诸简单记号的配置对应着情况中诸对象的配置。",
    "de": "Der Konfiguration der einfachen Zeichen im Satzzeichen entspricht die Konfiguration der Gegenstände in der Sachlage.",
    "enPM": "The configuration of objects in a situation corresponds to the configuration of simple signs in the propositional sign.",
    "depth": 3,
    "translated": true
  },
  "3.22": {
    "en": "In the proposition the name represents the object.",
    "zh": "在命题中，名称代表着对象。",
    "de": "Der Name vertritt im Satz den Gegenstand.",
    "enPM": "In a proposition a name is the representative of an object.",
    "depth": 3,
    "translated": true
  },
  "3.221": {
    "en": "Objects I can only name. Signs represent them. I can only speak of them. I cannot assert them. A proposition can only say how a thing is, not what it is.",
    "zh": "诸对象我只能命名。诸记号代表着它们。我只能谈论它们。我不能断言它们。一个命题只能说一个事物是怎样，而不能说它是什么。",
    "de": "Die Gegenstände kann ich nur nennen. Zeichen vertreten sie. Ich kann nur von ihnen sprechen, sie aussprechen kann ich nicht. Ein Satz kann nur sagen, wie ein Ding ist, nicht was es ist.",
    "enPM": "Objects can only be named. Signs are their representatives. I can only speak about them: I cannot put them into words. Propositions can only say how things are, not what they are.",
    "depth": 4,
    "translated": true
  },
  "3.23": {
    "en": "The postulate of the possibility of the simple signs is the postulate of the determinateness of the sense.",
    "zh": "诸简单记号之可能性的要求，就是含义之确定性的要求。",
    "de": "Die Forderung der Möglichkeit der einfachen Zeichen ist die Forderung der Bestimmtheit des Sinnes.",
    "enPM": "The requirement that simple signs be possible is the requirement that sense be determinate.",
    "depth": 3,
    "translated": true
  },
  "3.24": {
    "en": "A proposition about a complex stands in internal relation to the proposition about its constituent part.\nA complex can only be given by its description, and this will either be right or wrong. The proposition in which there is mention of a complex, if this does not exist, becomes not nonsense but simply false.\nThat a propositional element signifies a complex can be seen from an indeterminateness in the propositions in which it occurs. We know that everything is not yet determined by this proposition. (The notation for generality contains a prototype.)\nThe combination of the symbols of a complex in a simple symbol can be expressed by a definition.",
    "zh": "一个关于复合物的命题与关于其构成部分的命题处于内在关系之中。一个复合物只能通过其描述被给予，而这个描述要么是正确的，要么是错误的。一个提及复合物的命题——如果该复合物不存在——并不变成无意义的，而仅仅是变成假的。一个命题元素表示着一个复合物，这一点可以从该元素所出现于其中的那些命题的一种不确定性中看出。我们知道，并非一切都被这个命题所规定了。（一般性的记号法包含着一个原型。）通过一个定义，可以把一个复合物的诸符号结合为一个简单的符号。",
    "de": "Der Satz, welcher vom Komplex handelt, steht in interner Beziehung zum Satze, der von dessen Bestandteil handelt.\nDer Komplex kann nur durch seine Beschreibung gegeben sein, und diese wird stimmen oder nicht stimmen. Der Satz, in welchem von einem Komplex die Rede ist, wird, wenn dieser nicht existiert, nicht unsinnig, sondern einfach falsch sein.\nDass ein Satzelement einen Komplex bezeichnet, kann man aus einer Unbestimmtheit in den Sätzen sehen, worin es vorkommt. Wir wissen, durch diesen Satz ist noch nicht alles bestimmt. (Die Allgemeinheitsbezeichnung enthält ja ein Urbild.)\nDie Zusammenfassung des Symbols eines Komplexes in ein einfaches Symbol kann durch eine Definition ausgedrückt werden.",
    "enPM": "A proposition about a complex stands in an internal relation to a proposition about a constituent of the complex.\nA complex can be given\nonly by its description, which will be right or wrong. A proposition\nthat mentions a complex will not be nonsensical, if the complex does\nnot exist, but simply false.\nWhen a propositional element signifies a complex, this can be seen from an indeterminateness in the propositions in which it occurs. In such cases we know that the proposition leaves something undetermined. (In fact the notation for generality contains a prototype.)\nThe contraction of a symbol for a complex into a simple symbol can be expressed in a definition.",
    "depth": 3,
    "translated": true
  },
  "3.25": {
    "en": "There is one and only one complete analysis of the proposition.",
    "zh": "对命题有且仅有一种完全的分析。",
    "de": "Es gibt eine und nur eine vollständige Analyse des Satzes.",
    "enPM": "A proposition has one and only one complete analysis.",
    "depth": 3,
    "translated": true
  },
  "3.251": {
    "en": "The proposition expresses what it expresses in a definite and clearly specifiable way: the proposition is articulate.",
    "zh": "命题以一种确定的、可清晰指明的方式来表达它所表达的东西：命题是环节清晰的。",
    "de": "Der Satz drückt auf bestimmte, klar angebbare Weise aus, was er ausdrückt: Der Satz ist artikuliert.",
    "enPM": "What a proposition expresses it expresses in a determinate manner, which can be set out clearly: a proposition is articulate.",
    "depth": 4,
    "translated": true
  },
  "3.26": {
    "en": "The name cannot be analysed further by any definition. It is a primitive sign.",
    "zh": "名称不能被任何定义进一步分析。它是一个原始记号。",
    "de": "Der Name ist durch keine Definition weiter zu zergliedern: er ist ein Urzeichen.",
    "enPM": "A name cannot be dissected any further by means of a definition: it is a primitive sign.",
    "depth": 3,
    "translated": true
  },
  "3.261": {
    "en": "Every defined sign signifies via those signs by which it is defined, and the definitions show the way.\nTwo signs, one a primitive sign, and one defined by primitive signs, cannot signify in the same way. Names cannot be taken to pieces by definition (nor any sign which alone and independently has a meaning).",
    "zh": "每一个被定义的记号都经由那些用来定义它的记号进行指谓；而这些定义则指明了道路。两个记号——一个是原始记号，另一个是由原始记号来定义的——不可能以相同的方式进行指谓。不能通过定义把名称拆散（任何单独地和独立地具有一个意谓的记号也不能如此）。",
    "de": "Jedes definierte Zeichen bezeichnet über jene Zeichen, durch welche es definiert wurde; und die Definitionen weisen den Weg.\nZwei Zeichen, ein Urzeichen, und ein durch Urzeichen definiertes, können nicht auf dieselbe Art und Weise bezeichnen. Namen kann man nicht durch Definitionen auseinanderlegen. (Kein Zeichen, welches allein, selbständig eine Bedeutung hat.)",
    "enPM": "Every sign that has a definition signifies via the signs that serve to define it; and the definitions point the way.\nTwo signs cannot signify in the same manner if one is primitive and the other is defined by means of primitive signs. Names cannot be anatomized by means of definitions. (Nor can any sign that has a meaning independently and on its own.)",
    "depth": 4,
    "translated": true
  },
  "3.262": {
    "en": "What does not get expressed in the sign is shown by its application. What the signs conceal, their application declares.",
    "zh": "没有在记号中得到表达的东西，由它的应用来显示出来。诸记号所隐藏的东西，它们的应用将它宣示出来。",
    "de": "Was in den Zeichen nicht zum Ausdruck kommt, das zeigt ihre Anwendung. Was die Zeichen verschlucken, das spricht ihre Anwendung aus.",
    "enPM": "What signs fail to express, their application shows. What signs slur over, their application says clearly.",
    "depth": 4,
    "translated": true
  },
  "3.263": {
    "en": "The meanings of primitive signs can be explained by elucidations. Elucidations are propositions which contain the primitive signs. They can, therefore, only be understood when the meanings of these signs are already known.",
    "zh": "诸原始记号的意谓可以通过阐明来得到解释。阐明就是那些包含原始记号的命题。因此，只有当这些记号的意谓已经被知道的时候，它们才能被理解。",
    "de": "Die Bedeutungen von Urzeichen können durch Erläuterungen erklärt werden. Erläuterungen sind Sätze, welche die Urzeichen enthalten. Sie können also nur verstanden werden, wenn die Bedeutungen dieser Zeichen bereits bekannt sind.",
    "enPM": "The meanings of primitive signs can be explained by means of elucidations. Elucidations are propositions that contain the primitive signs. So they can only be understood if the meanings of those signs are already known.",
    "depth": 4,
    "translated": true
  },
  "3.3": {
    "en": "Only the proposition has sense; only in the context of a proposition has a name meaning.",
    "zh": "只有命题才有含义；只有在一个命题的关联中一个名称才有指谓。",
    "de": "Nur der Satz hat Sinn; nur im Zusammenhang des Satzes hat ein Name Bedeutung.",
    "enPM": "Only propositions have sense; only in the nexus of a proposition does a name have meaning.",
    "depth": 2,
    "translated": true
  },
  "3.31": {
    "en": "Every part of a proposition which characterizes its sense I call an expression (a symbol).\n(The proposition itself is an expression.)\nExpressions are everything---essential for the sense of the proposition---that propositions can have in common with one another.\nAn expression characterizes a form and a content.",
    "zh": "我把命题中任何刻画了其含义的部分都称为一个表达式（一个符号）。（命题本身就是一个表达式。）表达式是一切命题可以彼此共同拥有的东西——这对于命题的含义来说是本质性的。一个表达式刻画了一种形式和一种内容。",
    "de": "Jeden Teil des Satzes, der seinen Sinn charakterisiert, nenne ich einen Ausdruck (ein Symbol).\n(Der Satz selbst ist ein Ausdruck.)\nAusdruck ist alles, für den Sinn des Satzes wesentliche, was Sätze miteinander gemein haben können.\nDer Ausdruck kennzeichnet eine Form und einen Inhalt.",
    "enPM": "I call any part of a proposition that characterizes its sense an expression (or a symbol).\n(A proposition is itself an expression.)\nEverything essential to their sense that propositions can have in common with one another is an expression.\nAn expression is the mark of a form and a content.",
    "depth": 3,
    "translated": true
  },
  "3.311": {
    "en": "An expression presupposes the forms of all propositions in which it can occur. It is the common characteristic mark of a class of propositions.",
    "zh": "一个表达式预设了一切它可以出现于其中的命题的形式。它是一簇命题的共同特征标志。",
    "de": "Der Ausdruck setzt die Formen aller Sätze voraus, in welchen er vorkommen kann. Er ist das gemeinsame charakteristische Merkmal einer Klasse von Sätzen.",
    "enPM": "An expression presupposes the forms of all the propositions in which it can occur. It is the common characteristic mark of a class of propositions.",
    "depth": 4,
    "translated": true
  },
  "3.312": {
    "en": "It is therefore represented by the general form of the propositions which it characterizes.\nAnd in this form the expression is constant and everything else variable.",
    "zh": "因此，它是由它所刻画的那些命题的一般形式来表现的。而在这种形式中，表达式是常项，其余一切都是变项。",
    "de": "Er wird also dargestellt durch die allgemeine Form der Sätze, die er charakterisiert.\nUnd zwar wird in dieser Form der Ausdruck konstant und alles übrige variabel sein.",
    "enPM": "It is therefore presented by means of the general form of the propositions that it characterizes.\nIn fact, in this form the expression will be constant and everything else variable.",
    "depth": 4,
    "translated": true
  },
  "3.313": {
    "en": "An expression is thus presented by a variable, whose values are the propositions which contain the expression.\n(In the limiting case the variable becomes constant, the expression a proposition.)\nI call such a variable a \"propositional variable\".",
    "zh": "一个表达式就这样由一个变项来呈现，其值就是那些包含了该表达式的命题。（在极限情形中，这个变项成为常项，而表达式成为一个命题。）我把这样的一个变项称为一个「命题变项」。",
    "de": "Der Ausdruck wird also durch eine Variable dargestellt, deren Werte die Sätze sind, die den Ausdruck enthalten.\n(Im Grenzfall wird die Variable zur Konstanten, der Ausdruck zum Satz.)\nIch nenne eine solche Variable „Satzvariable“.",
    "enPM": "Thus an expression is presented by means of a variable whose values are the propositions that contain the expression.\n(In the limiting case the variable becomes a constant, the expression becomes a proposition.)\nI call such a variable a ‘propositional variable’.",
    "depth": 4,
    "translated": true
  },
  "3.314": {
    "en": "An expression has meaning only in a proposition. Every variable can be conceived as a propositional variable.\n(Including the variable name.)",
    "zh": "一个表达式仅仅在一个命题中才具有意谓。每一个变项都可以被构想为一个命题变项。（包括变项名称也是如此。）",
    "de": "Der Ausdruck hat nur im Satz Bedeutung. Jede Variable lässt sich als Satzvariable auffassen.\n(Auch der variable Name.)",
    "enPM": "An expression has meaning only in a proposition. All variables can be construed as propositional variables.\n(Even variable names.)",
    "depth": 4,
    "translated": true
  },
  "3.315": {
    "en": "If we change a constituent part of a proposition into a variable, there is a class of propositions which are all the values of the resulting variable proposition. This class in general still depends on what, by arbitrary agreement, we mean by parts of that proposition. But if we change all those signs, whose meaning was arbitrarily determined, into variables, there always remains such a class. But this is now no longer dependent on any agreement; it depends only on the nature of the proposition. It corresponds to a logical form, to a logical prototype.",
    "zh": "如果我们把一个命题的一个构成部分变成一个变项，那么就得到了一个命题簇，它们都是由此产生的变项命题的所有值。这个簇一般还依赖于我们——通过任意约定——把该命题的那些部分理解为什么。但是，如果我们把其意谓被任意规定了的所有那些记号都变成变项，那么总是还存在着这样一个簇。然而，这种簇现在不再依赖于任何约定；它仅仅依赖于命题的本性。它对应于一种逻辑形式，一种逻辑原型。",
    "de": "Verwandeln wir einen Bestandteil eines Satzes in eine Variable, so gibt es eine Klasse von Sätzen, welche sämtlich Werte des so entstandenen variablen Satzes sind. Diese Klasse hängt im allgemeinen noch davon ab, was wir, nach willkürlicher Übereinkunft, mit Teilen jenes Satzes meinen. Verwandeln wir aber alle jene Zeichen, deren Bedeutung willkürlich bestimmt wurde, in Variable, so gibt es nun noch immer eine solche Klasse. Diese aber ist nun von keiner Übereinkunft abhängig, sondern nur noch von der Natur des Satzes. Sie entspricht einer logischen Form – einem logischen Urbild.",
    "enPM": "If we turn a constituent of a proposition into a variable, there is a class of propositions all of which are values of the resulting variable proposition. In general, this class too will be dependent on the meaning that our arbitrary conventions have given to parts of the original proposition. But if all the signs in it that have arbitrarily determined meanings are turned into variables, we shall still get a class of this kind. This one, however, is not dependent on any convention, but solely on the nature of the proposition. It corresponds to a logical form—a logical prototype.",
    "depth": 4,
    "translated": true
  },
  "3.316": {
    "en": "What values the propositional variable can assume is determined.\nThe determination of the values is the variable.",
    "zh": "命题变项能够采取什么值是已经规定了。而对诸值的规定就是该变项。",
    "de": "Welche Werte die Satzvariable annehmen darf, wird festgesetzt.\nDie Festsetzung der Werte ist die Variable.",
    "enPM": "What values a propositional variable may take is something that is stipulated.\nThe stipulation of values is the variable.",
    "depth": 4,
    "translated": true
  },
  "3.317": {
    "en": "The determination of the values of the propositional variable is done by indicating the propositions whose common mark the variable is.\nThe determination is a description of these propositions.\nThe determination will therefore deal only with symbols not with their meaning.\nAnd only this is essential to the determination, that it is only a description of symbols and asserts nothing about what is symbolized.\nThe way in which we describe the propositions is not essential.",
    "zh": "对命题变项诸值的规定是这样进行的：指出变项作为其共同标志的那些命题。这种规定是对这些命题的一种描述。因此，这种规定将只涉及诸符号，而不涉及它们的意谓。而且只有这一点对于该规定来说是本质性的——它仅仅是对诸符号的一种描述，而对于被标示的东西不作任何断言。我们描述这些命题的方式是无关紧要的。",
    "de": "Die Festsetzung der Werte der Satzvariablen ist die Angabe der Sätze, deren gemeinsames Merkmal die Variable ist.\nDie Festsetzung ist eine Beschreibung dieser Sätze.\nDie Festsetzung wird also nur von Symbolen, nicht von deren Bedeutung handeln.\nUnd nur dies ist der Festsetzung wesentlich, dass sie nur eine Beschreibung von Symbolen ist und nichts über das Bezeichnete aussagt.\nWie die Beschreibung der Sätze geschieht, ist unwesentlich.",
    "enPM": "To stipulate values for a propositional variable is to give the propositions whose common characteristic the variable is.\nThe stipulation is a description of those propositions.\nThe stipulation will therefore be concerned only with symbols, not with their meaning.\nAnd the only thing essential to the stipulation is that it is merely a description of symbols and states nothing about what is signified.\nHow the description of the propositions is produced is not essential.",
    "depth": 4,
    "translated": true
  },
  "3.318": {
    "en": "I conceive the proposition---like Frege and Russell---as a function of the expressions contained in it.",
    "zh": "我——像弗雷格和罗素一样——把命题构想为它在其中所包含的诸表达式的一个函项。",
    "de": "Den Satz fasse ich – wie Frege und Russell – als Funktion der in ihm enthaltenen Ausdrücke auf.",
    "enPM": "Like Frege and Russell I construe a proposition as a function of the expressions contained in it.",
    "depth": 4,
    "translated": true
  },
  "3.32": {
    "en": "The sign is the part of the symbol perceptible by the senses.",
    "zh": "记号是符号中可以被感官感知的那部分。",
    "de": "Das Zeichen ist das sinnlich Wahrnehmbare am Symbol.",
    "enPM": "A sign is what can be perceived of a symbol.",
    "depth": 3,
    "translated": true
  },
  "3.321": {
    "en": "Two different symbols can therefore have the sign (the written sign or the sound sign) in common---they then signify in different ways.",
    "zh": "因此，两个不同的符号可以共有同一个记号（书写记号或声音记号）——这时它们以不同的方式进行指谓。",
    "de": "Zwei verschiedene Symbole können also das Zeichen (Schriftzeichen oder Lautzeichen etc.) miteinander gemein haben – sie bezeichnen dann auf verschiedene Art und Weise.",
    "enPM": "So one and the same sign (written or spoken, etc.) can be common to two different symbols—in which case they will signify in different ways.",
    "depth": 4,
    "translated": true
  },
  "3.322": {
    "en": "It can never indicate the common characteristic of two objects that we symbolize them with the same signs but by different methods of symbolizing. For the sign is arbitrary. We could therefore equally well choose two different signs and where then would be what was common in the symbolization?",
    "zh": "我们是用相同的记号、但以不同的标示方法来标示两个对象的——这永远不能指示出这两个对象所具有的任何共同特征。因为记号是任意的。我们同样也可以选择两个不同的记号，而这时标示中的共同之处又在哪里呢？",
    "de": "Es kann nie das gemeinsame Merkmal zweier Gegenstände anzeigen, dass wir sie mit demselben Zeichen, aber durch zwei verschiedene Bezeichnungsweisen bezeichnen. Denn das Zeichen ist ja willkürlich. Man könnte also auch zwei verschiedene Zeichen wählen, und wo bliebe dann das Gemeinsame in der Bezeichnung?",
    "enPM": "Our use of the same sign to signify two different objects can never indicate a common characteristic of the two, if we use it with two different modes of signification. For the sign, of course, is arbitrary. So we could choose two different signs instead, and then what would be left in common on the signifying side?",
    "depth": 4,
    "translated": true
  },
  "3.323": {
    "en": "In the language of everyday life it very often happens that the same word signifies in two different ways---and therefore belongs to two different symbols---or that two words, which signify in different ways, are apparently applied in the same way in the proposition.\nThus the word \"is\" appears as the copula, as the sign of equality, and as the expression of existence; \"to exist\" as an intransitive verb like \"to go\"; \"identical\" as an adjective; we speak of something but also of the fact of something happening.\n(In the proposition \"Green is green\"---where the first word is a proper name as the last an adjective---these words have not merely different meanings but they are different symbols.)",
    "zh": "在日常生活的语言中，经常发生同一个词以两种不同的方式进行指谓——因此属于两个不同的符号——的情况，或者，两个以不同方式进行指谓的词以表面上相同的方式被应用于命题之中的情况。例如，「是」这个词既作为系词出现，又作为等号出现，还作为存在的表达出现；「实存」作为不及物动词，像「走」一样；「同一的」作为一个形容词；我们谈论某个东西，但也谈论某个事情的发生。（在「格林是绿色的」这个命题中——第一个词是人名，最后一个词是形容词——这两个词不仅具有不同的意谓，而且是不同的符号。）",
    "de": "In der Umgangssprache kommt es ungemein häufig vor, dass dasselbe Wort auf verschiedene Art und Weise bezeichnet – also verschiedenen Symbolen angehört –, oder, dass zwei Wörter, die auf verschiedene Art und Weise bezeichnen, äußerlich in der gleichen Weise im Satz angewandt werden.\nSo erscheint das Wort „ist“ als Kopula, als Gleichheitszeichen und als Ausdruck der Existenz; „existieren“ als intransitives Zeitwort wie „gehen“; „identisch“ als Eigenschaftswort; wir reden von Etwas, aber auch davon, dass etwas geschieht.\n(Im Satze „Grün ist grün“ – wo das erste Wort ein Personenname, das letzte ein Eigenschaftswort ist – haben diese Worte nicht einfach verschiedene Bedeutung, sondern es sind verschiedene Symbole.)",
    "enPM": "In everyday language it very frequently happens that the same word has different modes of signification—and so belongs to different symbols—or that two words that have different modes of signification are employed in propositions in what is superficially the same way.\nThus the word ‘is’ figures as the copula, as a sign for identity, and as an expression for existence; ‘exist’ figures as an intransitive verb like ‘go’, and ‘identical’ as an adjective; we speak of something, but also of something’s happening.\n(In the proposition, ‘Green is green’—where the first word is the proper name of a person and the last an adjective—these words do not merely have different meanings: they are different symbols.)",
    "depth": 4,
    "translated": true
  },
  "3.324": {
    "en": "Thus there easily arise the most fundamental confusions (of which the whole of philosophy is full).",
    "zh": "这样，就很容易产生最根本的混淆（整个哲学充满了这种混淆）。",
    "de": "So entstehen leicht die fundamentalsten Verwechslungen (deren die ganze Philosophie voll ist).",
    "enPM": "In this way the most fundamental confusions are easily produced (the whole of philosophy is full of them).",
    "depth": 4,
    "translated": true
  },
  "3.325": {
    "en": "In order to avoid these errors, we must employ a symbolism which excludes them, by not applying the same sign in different symbols and by not applying signs in the same way which signify in different ways. A symbolism, that is to say, which obeys the rules of logical grammar---of logical syntax.\n(The logical symbolism of Frege and Russell is such a language, which, however, does still not exclude all errors.)",
    "zh": "为了避免这些错误，我们必须使用一种排除了这些错误的符号系统——即不把同一个记号应用于不同的符号中，也不以相同的方式应用那些以不同的方式进行指谓的记号。也就是说，一种服从于逻辑语法——逻辑句法——的符号系统。（弗雷格和罗素的逻辑符号系统就是这样一种语言，然而它仍然没有排除所有的错误。）",
    "de": "Um diesen Irrtümern zu entgehen, müssen wir eine Zeichensprache verwenden, welche sie ausschließt, indem sie nicht das gleiche Zeichen in verschiedenen Symbolen, und Zeichen, welche auf verschiedene Art bezeichnen, nicht äußerlich auf die gleiche Art verwendet. Eine Zeichensprache also, die der logischen Grammatik – der logischen Syntax – gehorcht.\n(Die Begriffsschrift Frege’s und Russell’s ist eine solche Sprache, die allerdings noch nicht alle Fehler ausschließt.)",
    "enPM": "In order to avoid such errors we must make use of a sign-language that excludes them by not using the same sign for different symbols and by not using in a superficially similar way signs that have different modes of signification: that is to say, a sign-language that is governed by logical grammar—by logical syntax.\n(The conceptual notation of Frege and Russell is such a language, though, it is true, it fails to exclude all mistakes.)",
    "depth": 4,
    "translated": true
  },
  "3.326": {
    "en": "In order to recognize the symbol in the sign we must consider the significant use.",
    "zh": "为了在记号中辨认出符号，我们必须考察它的有意义的用法。",
    "de": "Um das Symbol am Zeichen zu erkennen, muss man auf den sinnvollen Gebrauch achten.",
    "enPM": "In order to recognize a symbol by its sign we must observe how it is used with a sense.",
    "depth": 4,
    "translated": true
  },
  "3.327": {
    "en": "The sign determines a logical form only together with its logical syntactic application.",
    "zh": "记号只有连同它的逻辑句法应用一起才能规定一个逻辑形式。",
    "de": "Das Zeichen bestimmt erst mit seiner logisch-syntaktischen Verwendung zusammen eine logische Form.",
    "enPM": "A sign does not determine a logical form unless it is taken together with its logico-syntactical employment.",
    "depth": 4,
    "translated": true
  },
  "3.328": {
    "en": "If a sign is not necessary then it is meaningless. That is the meaning of Occam's razor.\n(If everything in the symbolism works as though a sign had meaning, then it has meaning.)",
    "zh": "如果一个记号不是必要的，那么它就是无指谓的。这就是奥卡姆剃刀的含义。（如果在符号系统中一切都起作用，就好像某个记号具有一个意谓一样，那么它就具有一个意谓。）",
    "de": "Wird ein Zeichen nicht gebraucht, so ist es bedeutungslos. Das ist der Sinn der Devise Occams.\n(Wenn sich alles so verhält als hätte ein Zeichen Bedeutung, dann hat es auch Bedeutung.)",
    "enPM": "If a sign is useless, it is meaningless. That is the point of Occam’s maxim.\n(If everything behaves as if a sign had meaning, then it does have meaning.)",
    "depth": 4,
    "translated": true
  },
  "3.33": {
    "en": "In logical syntax the meaning of a sign ought never to play a role; it must admit of being established without mention being thereby made of the meaning of a sign; it ought to presuppose only the description of the expressions.",
    "zh": "在逻辑句法中，一个记号的意谓永远不应该扮演任何角色；它必须能够被建立起来而不提任何记号的意谓；它应当仅仅预设对诸表达式的描述。",
    "de": "In der logischen Syntax darf nie die Bedeutung eines Zeichens eine Rolle spielen; sie muss sich aufstellen lassen, ohne dass dabei von der Bedeutung eines Zeichens die Rede wäre, sie darf nur die Beschreibung der Ausdrücke voraussetzen.",
    "enPM": "In logical syntax the meaning of a sign should never play a role. It must be possible to establish logical syntax without mentioning the meaning of a sign: only the description of expressions may be presupposed.",
    "depth": 3,
    "translated": true
  },
  "3.331": {
    "en": "From this observation we get a further view---into Russell's Theory of Types. Russell's error is shown by the fact that in drawing up his symbolic rules he has to speak about the things his signs mean.",
    "zh": "从这一观察出发，我们就对罗素的类型论有了更深入的看法。罗素的错误表现在：在制定他的符号规则时，他不得不谈论他的记号所意谓的那些事物。",
    "de": "Von dieser Bemerkung sehen wir in Russells „Theory of types“ hinüber: Der Irrtum Russells zeigt sich darin, dass er bei der Aufstellung der Zeichenregeln von der Bedeutung der Zeichen reden musste.",
    "enPM": "From this observation we turn to Russell’s ‘theory of types’. It can be seen that Russell must be wrong, because he had to mention the meaning of signs when establishing the rules for them.",
    "depth": 4,
    "translated": true
  },
  "3.332": {
    "en": "No proposition can say anything about itself, because the propositional sign cannot be contained in itself (that is the \"whole theory of types\").",
    "zh": "没有命题能够言说关于它自身的任何事情，因为命题记号不能包含在它自身之中（这就是「整个类型论」）。",
    "de": "Kein Satz kann etwas über sich selbst aussagen, weil das Satzzeichen nicht in sich selbst enthalten sein kann (das ist die ganze „Theory of types“).",
    "enPM": "No proposition can make a statement about itself, because a propositional sign cannot be contained in itself (that is the whole of the ‘theory of types’).",
    "depth": 4,
    "translated": true
  },
  "3.333": {
    "en": "A function cannot be its own argument, because the functional sign already contains the prototype of its own argument and it cannot contain itself.\nIf, for example, we suppose that the function F(fx) could be its own argument, then there would be a proposition \"F(F(fx))\", and in this the outer function F and the inner function F must have different meanings; for the inner has the form $\\phi(fx)$, the outer the form $\\psi(\\phi(fx))$. Common to both functions is only the letter \"F\", which by itself signifies nothing.\nThis is at once clear, if instead of \"F(Fu)\" we write $(\\exists\\phi):F(\\phi u).\\phi u=Fu$.\nHerewith Russell's paradox vanishes.",
    "zh": "一个函项不能是它自己的主目，因为函项记号已经包含了它的主目的原型，而它不能包含自己。例如，假设函项F(fx)能够是它自己的主目；那么就会有一个命题「F(F(fx))」，而在其中外侧的函项F和内侧的函项F必然具有不同的意谓；因为内侧的函项具有φ(fx)的形式，而外侧的函项具有ψ(φ(fx))的形式。这两个函项共有的仅仅是字母「F」，而这个字母本身并不表示什么。如果我们把「F(Fu)」写成(∃φ):F(φu).φu=Fu，这一点就立即清楚了。这样一来，罗素悖论就消失了。",
    "de": "Eine Funktion kann darum nicht ihr eigenes Argument sein, weil das Funktionszeichen bereits das Urbild seines Arguments enthält und es sich nicht selbst enthalten kann.\nNehmen wir nämlich an, die Funktion F(fx) könnte ihr eigenes Argument sein; dann gäbe es also einen Satz: „F(F(fx))“ und in diesem müssen die äußere Funktion F und die innere Funtion F verschiedene Bedeutungen haben, denn die innere hat die Form φ(fx), die äußere die Form ψ(φ(fx)). Gemeinsam ist den beiden Funktionen nur der Buchstabe „F“, der aber allein nichts bezeichnet.\nDies wird sofort klar, wenn wir statt „F(Fu)“ schreiben „(∃φ):F(φu).φu=Fu“.\nHiermit erledigt sich Russells Paradox.",
    "enPM": "The reason why a function cannot be its own argument is that the sign for a function already contains the prototype of its argument, and it cannot contain itself.\nFor let us suppose that the function F(fx) could be its own argument: in that case there would be a proposition ‘F(F(fx))’, in which the outer function F and the inner function F must have different meanings, since the inner one has the form φ(fx) and the outer one has the form ψ(φ(fx)). Only the letter ‘F’ is common to the two functions, but the letter by itself signifies nothing.\nThis immediately becomes clear if instead of ‘F(Fu)’ we write ‘(∃φ):F(φu).φu=Fu’.\nThat disposes of Russell’s paradox.",
    "depth": 4,
    "translated": true
  },
  "3.334": {
    "en": "The rules of logical syntax must follow of themselves, if we only know how every single sign signifies.",
    "zh": "逻辑句法的一些规则必须是自行起作用的，只要我们知道每一个记号是如何进行指谓的。",
    "de": "Die Regeln der logischen Syntax müssen sich von selbst verstehen, wenn man nur weiß, wie ein jedes Zeichen bezeichnet.",
    "enPM": "The rules of logical syntax must go without saying, once we know how each individual sign signifies.",
    "depth": 4,
    "translated": true
  },
  "3.34": {
    "en": "A proposition possesses essential and accidental features.\nAccidental are the features which are due to a particular way of producing the propositional sign. Essential are those which alone enable the proposition to express its sense.",
    "zh": "命题具有本质的偶然的特征。偶然的特征是那些由于产生该命题记号的特殊方式而具有的特征。本质的特征是那些独自使得命题能够表达其含义的特征。",
    "de": "Der Satz besitzt wesentliche und zufällige Züge.\nZufällig sind die Züge, die von der besonderen Art der Hervorbringung des Satzzeichens herrühren. Wesentlich diejenigen, welche allein den Satz befähigen, seinen Sinn auszudrücken.",
    "enPM": "A proposition possesses essential and accidental features.\nAccidental features are those that result from the particular way in which the propositional sign is produced. Essential features are those without which the proposition could not express its sense.",
    "depth": 3,
    "translated": true
  },
  "3.341": {
    "en": "The essential in a proposition is therefore that which is common to all propositions which can express the same sense.\nAnd in the same way in general the essential in a symbol is that which all symbols which can fulfill the same purpose have in common.",
    "zh": "因此，在命题中本质的东西，就是能够表达同一含义的所有命题所共有的东西。同样地，一般说来，在一个符号中本质的东西，就是能够服务于同一目的所有符号所共有的东西。",
    "de": "Das Wesentliche am Satz ist also das, was allen Sätzen, welche den gleichen Sinn ausdrücken können, gemeinsam ist.\nUnd ebenso ist allgemein das Wesentliche am Symbol das, was alle Symbole, die denselben Zweck erfüllen können, gemeinsam haben.",
    "enPM": "So what is essential in a proposition is what all propositions that can express the same sense have in common.\nAnd similarly, in general, what is essential in a symbol is what all symbols that can serve the same purpose have in common.",
    "depth": 4,
    "translated": true
  },
  "3.3411": {
    "en": "One could therefore say the real name is that which all symbols, which signify an object, have in common. It would then follow, step by step, that no sort of composition was essential for a name.",
    "zh": "因此，人们可以说，真正的名称是所有指谓一个对象的那些符号所共有的东西。由此就会一步步地得出：没有哪种复合对于名称来说是本质的。",
    "de": "Man könnte also sagen: Der eigentliche Name ist das, was alle Symbole, die den Gegenstand bezeichnen, gemeinsam haben. Es würde sich so successive ergeben, dass keinerlei Zusammensetzung für den Namen wesentlich ist.",
    "enPM": "So one could say that the real name of an object was what all symbols that signified it had in common. Thus, one by one, all kinds of composition would prove to be unessential to a name.",
    "depth": 5,
    "translated": true
  },
  "3.342": {
    "en": "In our notations there is indeed something arbitrary, but this is not arbitrary, namely that if we have determined anything arbitrarily, then something else must be the case. (This results from the essence of the notation.)",
    "zh": "在我们的诸记号法中，的确存在着某种任意的东西，但以下这一点却不是任意的：即如果我们任意地规定了某种东西，那么另一些东西就必然如此。（这是从记号法的本质中得出的。）",
    "de": "An unseren Notationen ist zwar etwas willkürlich, aber das ist nicht willkürlich: Dass, wenn wir etwas willkürlich bestimmt haben, dann etwas anderes der Fall sein muss. (Dies hängt von dem Wesen der Notation ab.)",
    "enPM": "Although there is something arbitrary in our notations, this much is not arbitrary—that when we have determined one thing arbitrarily, something else is necessarily the case. (This derives from the essence of notation.)",
    "depth": 4,
    "translated": true
  },
  "3.3421": {
    "en": "A particular method of symbolizing may be unimportant, but it is always important that this is a possible method of symbolizing. And this happens as a rule in philosophy: The single thing proves over and over again to be unimportant, but the possibility of every single thing reveals something about the nature of the world.",
    "zh": "一种特殊的标示方法可能是不重要的，但以下这一点却始终是重要的：这是一种可能的标示方法。而这一点在哲学中一般是这样发生的：单个的东西一再被证明为不重要，但每一个单个的东西的可能性都揭示了关于世界本性的某种东西。",
    "de": "Eine besondere Bezeichnungsweise mag unwichtig sein, aber wichtig ist es immer, dass diese eine mögliche Bezeichnungsweise ist. Und so verhält es sich in der Philosophie überhaupt: Das Einzelne erweist sich immer wieder als unwichtig, aber die Möglichkeit jedes Einzelnen gibt uns einen Aufschluss über das Wesen der Welt.",
    "enPM": "A particular mode of signifying may be unimportant but it is always important that it is a possible mode of signifying. And that is generally so in philosophy: again and again the individual case turns out to be unimportant, but the possibility of each individual case discloses something about the essence of the world.",
    "depth": 5,
    "translated": true
  },
  "3.343": {
    "en": "Definitions are rules for the translation of one language into another. Every correct symbolism must be translatable into every other according to such rules. It is this which all have in common.",
    "zh": "定义是把一种语言翻译为另一种语言的规则。每一种正确的符号系统都必须能够按照这样的规则被翻译为任何其他的符号系统。这就是所有符号系统所共有的东西。",
    "de": "Definitionen sind Regeln der Übersetzung von einer Sprache in eine andere. Jede richtige Zeichensprache muss sich in jede andere nach solchen Regeln übersetzen lassen: Dies ist, was sie alle gemeinsam haben.",
    "enPM": "Definitions are rules for translating from one language into another. Any correct sign-language must be translatable into any other in accordance with such rules: it is this that they all have in common.",
    "depth": 4,
    "translated": true
  },
  "3.344": {
    "en": "What signifies in the symbol is what is common to all those symbols by which it can be replaced according to the rules of logical syntax.",
    "zh": "在符号中进行指谓的东西，就是根据逻辑句法的规则可以用该符号来替换的所有那些符号所共有的东西。",
    "de": "Das, was am Symbol bezeichnet, ist das Gemeinsame aller jener Symbole, durch die das erste den Regeln der logischen Syntax zufolge ersetzt werden kann.",
    "enPM": "What signifies in a symbol is what is common to all the symbols that the rules of logical syntax allow us to substitute for it.",
    "depth": 4,
    "translated": true
  },
  "3.3441": {
    "en": "We can, for example, express what is common to all notations for the truth-functions as follows: It is common to them that they all, for example, can be replaced by the notations of \"$\\neg p$\" (\"not $p$\") and $p \\lor q$ (\"$p$ or $q$\").\n(Herewith is indicated the way in which a special possible notation can give us general information.)",
    "zh": "例如，我们可以这样来表达关于真值函项的所有记号法所共有的东西：它们共有的东西是，它们全都可以——比如说——被替换为「~p」（「并非p」）和「p∨q」（「p或q」）这两种记号法。（以此就指明了某种特殊的可能记号法可以怎样给予我们一般性的信息。）",
    "de": "Man kann z. B. das Gemeinsame aller Notationen für die Wahrheitsfunktionen so ausdrücken: Es ist ihnen gemeinsam, dass sich alle – z. B. – durch die Notation von „~p“ („nicht p“) und „p∨q“ („p oder q“) ersetzen lassen.\n(Hiermit ist die Art und Weise gekennzeichnet, wie eine spezielle mögliche Notation uns allgemeine Aufschlüsse geben kann.)",
    "enPM": "For instance, we can express what is common to all notations for truth-functions in the following way: they have in common that, for example, the notation that uses ‘~p’ (‘not p’) and ‘p∨q’ (‘p or q’) can be substituted for any of them.\n(This serves to characterize the way in which something general can be disclosed by the possibility of a specific notation.)",
    "depth": 5,
    "translated": true
  },
  "3.3442": {
    "en": "The sign of the complex is not arbitrarily resolved in the analysis, in such a way that its resolution would be different in every propositional structure.",
    "zh": "复合物的记号并不是在分析中被任意地分解的——使得它在每一个命题结构中都会有不同的分解。",
    "de": "Das Zeichen des Komplexes löst sich auch bei der Analyse nicht willkürlich auf, so dass etwa seine Auflösung in jedem Satzgefüge eine andere wäre.",
    "enPM": "Nor does analysis resolve the sign for a complex in an arbitrary way, so that it would have a different resolution every time that it was incorporated in a different proposition.",
    "depth": 5,
    "translated": true
  },
  "3.4": {
    "en": "The proposition determines a place in logical space: the existence of this logical place is guaranteed by the existence of the constituent parts alone, by the existence of the significant proposition.",
    "zh": "命题在逻辑空间中规定一个位置：仅仅诸组成部分的存在，即有含义的命题的存在，就保证了这个逻辑位置的存在。",
    "de": "Der Satz bestimmt einen Ort im logischen Raum. Die Existenz dieses logischen Ortes ist durch die Existenz der Bestandteile allein verbürgt, durch die Existenz des sinnvollen Satzes.",
    "enPM": "A proposition determines a place in logical space. The existence of this logical place is guaranteed by the mere existence of the constituents—by the existence of the proposition with a sense.",
    "depth": 2,
    "translated": true
  },
  "3.41": {
    "en": "The propositional sign and the logical co-ordinates: that is the logical place.",
    "zh": "命题记号和逻辑坐标：那就是逻辑位置。",
    "de": "Das Satzzeichen und die logischen Koordinaten: Das ist der logische Ort.",
    "enPM": "The propositional sign with logical co-ordinates—that is the logical place.",
    "depth": 3,
    "translated": true
  },
  "3.411": {
    "en": "The geometrical and the logical place agree in that each is the possibility of an existence.",
    "zh": "几何位置和逻辑位置在以下这一点上是一致的：二者都是一个实存的可能性。",
    "de": "Der geometrische und der logische Ort stimmen darin überein, dass beide die Möglichkeit einer Existenz sind.",
    "enPM": "In geometry and logic alike a place is a possibility: something can exist in it.",
    "depth": 4,
    "translated": true
  },
  "3.42": {
    "en": "Although a proposition may only determine one place in logical space, the whole logical space must already be given by it.\n(Otherwise denial, the logical sum, the logical product, etc., would always introduce new elements---in co-ordination.)\n(The logical scaffolding round the picture determines the logical space. The proposition reaches through the whole logical space.)",
    "zh": "虽然一个命题只能规定逻辑空间中的一个位置，但整个逻辑空间必然已经由它给予了。（否则，否定、逻辑和、逻辑积等等就会不断地引入新的元素——以配合的方式。）（环绕图像的逻辑脚手架规定了逻辑空间。命题贯穿整个逻辑空间。）",
    "de": "Obwohl der Satz nur einen Ort des logischen Raumes bestimmen darf, so muss doch durch ihn schon der ganze logische Raum gegeben sein.\n(Sonst würden durch die Verneinung, die logische Summe, das logische Produkt, etc. immer neue Elemente – in Koordination – eingeführt.)\n(Das logische Gerüst um das Bild herum bestimmt den logischen Raum. Der Satz durchgreift den ganzen logischen Raum.)",
    "enPM": "A proposition can determine only one place in logical space: nevertheless the whole of logical space must already be given by it.\n(Otherwise negation, logical sum, logical product, etc., would introduce more and more new elements—in co-ordination.)\n(The logical scaffolding surrounding a picture determines logical space. The force of a proposition reaches through the whole of logical space.)",
    "depth": 3,
    "translated": true
  },
  "3.5": {
    "en": "The applied, thought, propositional sign, is the thought.",
    "zh": "被使用的、被思考的命题记号，就是思想。",
    "de": "Das angewandte, gedachte, Satzzeichen ist der Gedanke.",
    "enPM": "A propositional sign, applied and thought out, is a thought.",
    "depth": 2,
    "translated": true
  },
  "4.001": {
    "en": "The totality of propositions is the language.",
    "zh": "命题的总和就是语言。",
    "de": "Die Gesamtheit der Sätze ist die Sprache.",
    "enPM": "The totality of propositions is language.",
    "depth": 2,
    "translated": true
  },
  "4.002": {
    "en": "Man possesses the capacity of constructing languages, in which every sense can be expressed, without having an idea how and what each word means---just as one speaks without knowing how the single sounds are produced.\nColloquial language is a part of the human organism and is not less complicated than it.\nFrom it it is humanly impossible to gather immediately the logic of language.\nLanguage disguises the thought; so that from the external form of the clothes one cannot infer the form of the thought they clothe, because the external form of the clothes is constructed with quite another object than to let the form of the body be recognized.\nThe silent adjustments to understand colloquial language are enormously complicated.",
    "zh": "人具有构造语言的能力，能以这些语言表达每一种含义，而不需要知道每一个词是如何和意谓着什么的——就像人说话时不需要知道每一个单独的声音是如何产生的一样。日常语言是人的有机体的一部分，其复杂程度并不亚于后者。从日常语言中直接得出语言的逻辑是人力所不及的。语言把思想伪装起来。而且是如此伪装，以至于从衣服的外部形式不能推断出被它遮裹的思想的形式；因为衣服的外部形式是按照完全不同于让人认出身体形式的另一种目的来设计的。为了理解日常语言而所需的那些默会的配合是极其复杂的。",
    "de": "Der Mensch besitzt die Fähigkeit Sprachen zu bauen, womit sich jeder Sinn ausdrücken lässt, ohne eine Ahnung davon zu haben, wie und was jedes Wort bedeutet. – Wie man auch spricht, ohne zu wissen, wie die einzelnen Laute hervorgebracht werden.\nDie Umgangssprache ist ein Teil des menschlichen Organismus und nicht weniger kompliziert als dieser.\nEs ist menschenunmöglich, die Sprachlogik aus ihr unmittelbar zu entnehmen.\nDie Sprache verkleidet den Gedanken. Und zwar so, dass man nach der äußeren Form des Kleides, nicht auf die Form des bekleideten Gedankens schließen kann; weil die äußere Form des Kleides nach ganz anderen Zwecken gebildet ist als danach, die Form des Körpers erkennen zu lassen.\nDie stillschweigenden Abmachungen zum Verständnis der Umgangssprache sind enorm kompliziert.",
    "enPM": "Man possesses the ability to construct languages capable of expressing every sense, without having any idea how each word has meaning or what its meaning is—just as people speak without knowing how the individual sounds are produced.\nEveryday language is a part of the human organism and is no less complicated than it.\nIt is not humanly possible to gather immediately from it what the logic of language is.\nLanguage disguises thought. So much so, that from the outward form of the clothing it is impossible to infer the form of the thought beneath it, because the outward form of the clothing is not designed to reveal the form of the body, but for entirely different purposes.\nThe tacit conventions on which the understanding of everyday language depends are enormously complicated.",
    "depth": 2,
    "translated": true
  },
  "4.003": {
    "en": "Most propositions and questions, that have been written about philosophical matters, are not false, but senseless. We cannot, therefore, answer questions of this kind at all, but only state their senselessness. Most questions and propositions of the philosophers result from the fact that we do not understand the logic of our language.\n(They are of the same kind as the question whether the Good is more or less identical than the Beautiful.)\nAnd so it is not to be wondered at that the deepest problems are really no problems.",
    "zh": "关于哲学问题所写下的、大多数命题和问题，不是假的，而是无含义的。因此，我们根本不能回答这类问题，而只能确定它们的无含义性。哲学家的绝大多数问题和命题来自我们没有理解我们的语言的逻辑。（它们属于和「善比起美来是更同一的还是更不同一的」这种问题同样种类的东西。）因此，最深刻的问题其实根本不是问题，这也就没有什么值得惊讶的了。",
    "de": "Die meisten Sätze und Fragen, welche über philosophische Dinge geschrieben worden sind, sind nicht falsch, sondern unsinnig. Wir können daher Fragen dieser Art überhaupt nicht beantworten, sondern nur ihre Unsinnigkeit feststellen. Die meisten Fragen und Sätze der Philosophen beruhen darauf, dass wir unsere Sprachlogik nicht verstehen.\n(Sie sind von der Art der Frage, ob das Gute mehr oder weniger identisch sei als das Schöne.)\nUnd es ist nicht verwunderlich, dass die tiefsten Probleme eigentlich keine Probleme sind.",
    "enPM": "Most of the propositions and questions to be found in philosophical works are not false but nonsensical. Consequently we cannot give any answer to questions of this kind, but can only point out that they are nonsensical. Most of the propositions and questions of philosophers arise from our failure to understand the logic of our language.\n(They belong to the same class as the question whether the good is more or less identical than the beautiful.)\nAnd it is not surprising that the deepest problems are in fact not problems at all.",
    "depth": 2,
    "translated": true
  },
  "4.0031": {
    "en": "All philosophy is \"Critique of language\" (but not at all in Mauthner's sense). Russell's merit is to have shown that the apparent logical form of the proposition need not be its real form.",
    "zh": "一切哲学都是「语言批判」（不过并非在毛特纳的那种意义上）。罗素的功绩在于指出了：一个命题的表面逻辑形式未必是其真实的形式。",
    "de": "Alle Philosophie ist „Sprachkritik“. (Allerdings nicht im Sinne Mauthners.) Russells Verdienst ist es, gezeigt zu haben, dass die scheinbare logische Form des Satzes nicht seine wirkliche sein muss.",
    "enPM": "All philosophy is a ‘critique of language’ (though not in Mauthner’s sense). It was Russell who performed the service of showing that the apparent logical form of a proposition need not be its real one.",
    "depth": 3,
    "translated": true
  },
  "4.01": {
    "en": "The proposition is a picture of reality.\nThe proposition is a model of the reality as we think it is.",
    "zh": "命题是实在的一幅图像。命题是如我们所思考的那样的实在的一个模型。",
    "de": "Der Satz ist ein Bild der Wirklichkeit.\nDer Satz ist ein Modell der Wirklichkeit, so wie wir sie uns denken.",
    "enPM": "A proposition is a picture of reality.\nA proposition is a model of reality as we imagine it.",
    "depth": 2,
    "translated": true
  },
  "4.011": {
    "en": "At the first glance the proposition---say as it stands printed on paper---does not seem to be a picture of the reality of which it treats. But nor does the musical score appear at first sight to be a picture of a musical piece; nor does our phonetic spelling (letters) seem to be a picture of our spoken language.\nAnd yet these symbolisms prove to be pictures---even in the ordinary sense of the word---of what they represent.",
    "zh": "乍一看，命题——比如当它被印在纸上的时候——似乎不是它所处理的那一实在的图像。但乐谱乍一看似乎也不是一段乐曲的图像；我们的拼音文字（字母）似乎也不是我们的口头语言的图像。而这些符号系统却被证明为——甚至是在该词的通常含义上——都是它们所表现的东西的图像。",
    "de": "Auf den ersten Blick scheint der Satz – wie er etwa auf dem Papier gedruckt steht – kein Bild der Wirklichkeit zu sein, von der er handelt. Aber auch die Notenschrift scheint auf den ersten Blick kein Bild der Musik zu sein, und unsere Lautzeichen-(Buchstaben-)Schrift kein Bild unserer Lautsprache.\nUnd doch erweisen sich diese Zeichensprachen auch im gewöhnlichen Sinne als Bilder dessen, was sie darstellen.",
    "enPM": "At first sight a proposition—one set out on the printed page, for example—does not seem to be a picture of the reality with which it is concerned. But neither do written notes seem at first sight to be a picture of a piece of music, nor our phonetic notation (the alphabet) to be a picture of our speech.\nAnd yet these sign-languages prove to be pictures, even in the ordinary sense, of what they represent.",
    "depth": 3,
    "translated": true
  },
  "4.012": {
    "en": "It is obvious that we perceive a proposition of the form aRb as a picture. Here the sign is obviously a likeness of the signified.",
    "zh": "很明显，我们把一个具有「aRb」形式的命题感知为一幅图像。在这里，记号显然是被标示者的一个相似物。",
    "de": "Offenbar ist, dass wir einen Satz von der Form „aRb“ als Bild empfinden. Hier ist das Zeichen offenbar ein Gleichnis des Bezeichneten.",
    "enPM": "It is obvious that a proposition of the form ‘aRb’ strikes us as a picture. In this case the sign is obviously a likeness of what is signified.",
    "depth": 3,
    "translated": true
  },
  "4.013": {
    "en": "And if we penetrate to the essence of this pictorial nature we see that this is not disturbed by apparent irregularities (like the use of $\\sharp$ and $\\flat$ in the score).\nFor these irregularities also picture what they are to express; only in another way.",
    "zh": "而如果我们深入到这种图像性本性的本质中去，我们就会看到：表面的不规则（如乐谱中♯和♭的使用）并不干扰它。因为这些不规则也描画了它们所要表达的东西；只不过是以另一种方式。",
    "de": "Und wenn wir in das Wesentliche dieser Bildhaftigkeit eindringen, so sehen wir, dass dieselbe durch scheinbare Unregelmäßigkeiten (wie die Verwendung der ♯ und ♭ in der Notenschrift) nicht gestört wird.\nDenn auch diese Unregelmäßigkeiten bilden das ab, was sie ausdrücken sollen; nur auf eine andere Art und Weise.",
    "enPM": "And if we penetrate to the essence of this pictorial character, we see that it is not impaired by apparent irregularities (such as the use of ♯ and ♭ in musical notation).\nFor even these irregularities depict what they are intended to express; only they do it in a different way.",
    "depth": 3,
    "translated": true
  },
  "4.014": {
    "en": "The gramophone record, the musical thought, the score, the waves of sound, all stand to one another in that pictorial internal relation, which holds between language and the world.\nTo all of them the logical structure is common.\n(Like the two youths, their two horses and their lilies in the story. They are all in a certain sense one.)",
    "zh": "留声机唱片、音乐思想、乐谱、声波，它们全都处于语言与世界之间的那种描画的内在关系之中。它们的共同之处是逻辑结构。（就像那个故事中的两个青年、他们的两匹马和他们的百合花。它们在某种意义上全都是一个。）",
    "de": "Die Grammophonplatte, der musikalische Gedanke, die Notenschrift, die Schallwellen, stehen alle in jener abbildenden internen Beziehung zu einander, die zwischen Sprache und Welt besteht.\nIhnen allen ist der logische Bau gemeinsam.\n(Wie im Märchen die zwei Jünglinge, ihre zwei Pferde und ihre Lilien. Sie sind alle in gewissem Sinne Eins.)",
    "enPM": "A gramophone record, the musical idea, the written notes, and the sound-waves, all stand to one another in the same internal relation of depicting that holds between language and the world.\nThey are all constructed according to a common logical pattern.\n(Like the two youths in the fairy-tale, their two horses, and their lilies. They are all in a certain sense one.)",
    "depth": 3,
    "translated": true
  },
  "4.0141": {
    "en": "In the fact that there is a general rule by which the musician is able to read the symphony out of the score, and that there is a rule by which one could reconstruct the symphony from the line on a gramophone record and from this again---by means of the first rule---construct the score, herein lies the internal similarity between these things which at first sight seem to be entirely different. And the rule is the law of projection which projects the symphony into the language of the musical score. It is the rule of translation of this language into the language of the gramophone record.",
    "zh": "在以下事实中——即存在着一条规则，音乐家按照它来从乐谱中读出交响乐；存在着一条规则，按照该规则人们能从留声机唱片上的纹路中重新构造出交响乐，并由此——通过第一条规则——重新构造出乐谱——就存在着这些乍看起来全然不同的东西之间的内在相似性。这条规则就是把交响乐投射到乐谱语言之中去的投影法则。也就是把这种语言翻译为留声机唱片语言的规则。",
    "de": "Dass es eine allgemeine Regel gibt, durch die der Musiker aus der Partitur die Symphonie entnehmen kann, durch welche man aus der Linie auf der Grammophonplatte die Symphonie und nach der ersten Regel wieder die Partitur ableiten kann, darin besteht eben die innere Ähnlichkeit dieser scheinbar so ganz verschiedenen Gebilde. Und jene Regel ist das Gesetz der Projektion, welches die Symphonie in die Notensprache projiziert. Sie ist die Regel der Übersetzung der Notensprache in die Sprache der Grammophonplatte.",
    "enPM": "There is a general rule by means of which the musician can obtain the symphony from the score, and which makes it possible to derive the symphony from the groove on the gramophone record, and, using the first rule, to derive the score again. That is what constitutes the inner similarity between these things which seem to be constructed in such entirely different ways. And that rule is the law of projection which projects the symphony into the language of musical notation. It is the rule for translating this language into the language of gramophone records.",
    "depth": 4,
    "translated": true
  },
  "4.015": {
    "en": "The possibility of all similes, of all the images of our language, rests on the logic of representation.",
    "zh": "一切譬喻、一切关于我们的语言的图像性的可能性，都基于描画的逻辑。",
    "de": "Die Möglichkeit aller Gleichnisse, der ganzen Bildhaftigkeit unserer Ausdrucksweise, ruht in der Logik der Abbildung.",
    "enPM": "The possibility of all imagery, of all our pictorial modes of expression, is contained in the logic of depiction.",
    "depth": 3,
    "translated": true
  },
  "4.016": {
    "en": "In order to understand the essence of the proposition, consider hieroglyphic writing, which pictures the facts it describes.\nAnd from it came the alphabet without the essence of the representation being lost.",
    "zh": "为了理解命题的本质，请想一想象形文字，它描画了它所描述的那些事实。而字母文字正是从它那里产生的，却并没有丢失描画的本质。",
    "de": "Um das Wesen des Satzes zu verstehen, denken wir an die Hieroglyphenschrift, welche die Tatsachen die sie beschreibt abbildet.\nUnd aus ihr wurde die Buchstabenschrift, ohne das Wesentliche der Abbildung zu verlieren.",
    "enPM": "In order to understand the essential nature of a proposition, we should consider hieroglyphic script, which depicts the facts that it describes.\nAnd alphabetic script developed out of it without losing what was essential to depiction.",
    "depth": 3,
    "translated": true
  },
  "4.02": {
    "en": "This we see from the fact that we understand the sense of the propositional sign, without having had it explained to us.",
    "zh": "这一点我们从以下事实中可以看到：我们在没有获得解释的前提下，就理解了命题记号的诸含义。",
    "de": "Dies sehen wir daraus, dass wir den Sinn des Satzzeichens verstehen, ohne dass er uns erklärt wurde.",
    "enPM": "We can see this from the fact that we understand the sense of a propositional sign without its having been explained to us.",
    "depth": 2,
    "translated": true
  },
  "4.021": {
    "en": "The proposition is a picture of reality, for I know the state of affairs presented by it, if I understand the proposition. And I understand the proposition, without its sense having been explained to me.",
    "zh": "命题是实在的一幅图像：因为如果我理解了命题，我就知道由它所呈现的那个情况。并且我在其诸含义没有获得解释的前提下，我就已经理解了该命题。",
    "de": "Der Satz ist ein Bild der Wirklichkeit: Denn ich kenne die von ihm dargestellte Sachlage, wenn ich den Satz verstehe. Und den Satz verstehe ich, ohne dass mir sein Sinn erklärt wurde.",
    "enPM": "A proposition is a picture of reality: for if I understand a proposition, I know the situation that it represents. And I understand the proposition without having had its sense explained to me.",
    "depth": 3,
    "translated": true
  },
  "4.022": {
    "en": "The proposition shows its sense.\nThe proposition shows how things stand, if it is true. And it says, that they do so stand.",
    "zh": "命题显示它的含义。命题显示当它为真时事物是怎样的。而它说，事物就是这样的。",
    "de": "Der Satz zeigt seinen Sinn.\nDer Satz zeigt, wie es sich verhält, wenn er wahr ist. Und er sagt, dass es sich so verhält.",
    "enPM": "A proposition shows its sense.\nA proposition shows how things stand if it is true. And it says that they do so stand.",
    "depth": 3,
    "translated": true
  },
  "4.023": {
    "en": "The proposition determines reality to this extent, that one only needs to say \"Yes\" or \"No\" to it to make it agree with reality.\nReality must therefore be completely described by the proposition.\nA proposition is the description of a fact.\nAs the description of an object describes it by its external properties so propositions describe reality by its internal properties.\nThe proposition constructs a world with the help of a logical scaffolding, and therefore one can actually see in the proposition all the logical features possessed by reality if it is true. One can draw conclusions from a false proposition.",
    "zh": "命题将实在规定到这样一个地步，以至于只需要对它说「是」或「否」，就可以使它与实在相一致。因此，实在必须被命题完全描述。命题就是一个事实的描述。正如对一个对象的描述是按照它的外在性质来描述它，命题则是按照实在的内在性质来描述实在。命题借助一种逻辑脚手架来构建一个世界，因此，如果命题为真，人们实际上能够在命题中一一看到实在所具有的一切逻辑特征。人们可以从一个假命题中推出结论。",
    "de": "Die Wirklichkeit muss durch den Satz auf ja oder nein fixiert sein.\nDazu muss sie durch ihn vollständig beschrieben werden.\nDer Satz ist die Beschreibung eines Sachverhaltes.\nWie die Beschreibung einen Gegenstand nach seinen externen Eigenschaften, so beschreibt der Satz die Wirklichkeit nach ihren internen Eigenschaften.\nDer Satz konstruiert eine Welt mit Hilfe eines logischen Gerüstes und darum kann man am Satz auch sehen, wie sich alles Logische verhält, wenn er wahr ist. Man kann aus einem falschen Satz Schlüsse ziehen.",
    "enPM": "A proposition must restrict reality to two alternatives: yes or no.\nIn order to do that, it must describe reality completely.\nA proposition is a description of a state of affairs.\nJust as a description of an object describes it by giving its external properties, so a proposition describes reality by its internal properties.\nA proposition constructs a world with the help of a logical scaffolding, so that one can actually see from the proposition how everything stands logically if it is true. One can draw inferences from a false proposition.",
    "depth": 3,
    "translated": true
  },
  "4.024": {
    "en": "To understand a proposition means to know what is the case, if it is true.\n(One can therefore understand it without knowing whether it is true or not.)\nOne understands it if one understands it constituent parts.",
    "zh": "理解一个命题，意味着知道当它为真时是什么情况。（因此，人们可以理解它，而不知道它是否为真。）当人们理解了它的诸构成部分时，也就理解了它。",
    "de": "Einen Satz verstehen, heißt, wissen was der Fall ist, wenn er wahr ist.\n(Man kann ihn also verstehen, ohne zu wissen, ob er wahr ist.)\nMan versteht ihn, wenn man seine Bestandteile versteht.",
    "enPM": "To understand a proposition means to know what is the case if it is true.\n(One can understand it, therefore, without knowing whether it is true.)\nIt is understood by anyone who understands its constituents.",
    "depth": 3,
    "translated": true
  },
  "4.025": {
    "en": "The translation of one language into another is not a process of translating each proposition of the one into a proposition of the other, but only the constituent parts of propositions are translated.\n(And the dictionary does not only translate substantives but also adverbs and conjunctions, etc., and it treats them all alike.)",
    "zh": "将一种语言翻译为另一种语言，并不是把前者中的每一个命题翻译为后者的一个命题，而是仅仅翻译命题的诸构成部分。（而词典不仅翻译名词，也翻译副词和连词等等，并把它们全都同等看待。）",
    "de": "Die Übersetzung einer Sprache in eine andere geht nicht so vor sich, dass man jeden Satz der einen in einen Satz der anderen übersetzt, sondern nur die Satzbestandteile werden übersetzt.\n(Und das Wörterbuch übersetzt nicht nur Substantiva, sondern auch Zeit-, Eigenschafts- und Bindewörter etc.; und es behandelt sie alle gleich.)",
    "enPM": "When translating one language into another, we do not proceed by translating each proposition of the one into a proposition of the other, but merely by translating the constituents of propositions.\n(And the dictionary translates not only substantives, but also verbs, adjectives, and conjunctions, etc.; and it treats them all in the same way.)",
    "depth": 3,
    "translated": true
  },
  "4.026": {
    "en": "The meanings of the simple signs (the words) must be explained to us, if we are to understand them.\nBy means of propositions we explain ourselves.",
    "zh": "诸简单记号（诸词）的意谓必须被解释给我们，以使我们可以理解它们。而我们则是通过这些命题来说明自己的。",
    "de": "Die Bedeutung der einfachen Zeichen (der Wörter) müssen uns erklärt werden, dass wir sie verstehen.\nMit den Sätzen aber verständigen wir uns.",
    "enPM": "The meanings of simple signs (words) must be explained to us if we are to understand them.\nWith propositions, however, we make ourselves understood.",
    "depth": 3,
    "translated": true
  },
  "4.027": {
    "en": "It is essential to propositions, that they can communicate a new sense to us.",
    "zh": "命题可以传达一种新的含义，这对于命题来说是本质的。",
    "de": "Es liegt im Wesen des Satzes, dass er uns einen neuen Sinn mitteilen kann.",
    "enPM": "It belongs to the essence of a proposition that it should be able to communicate a new sense to us.",
    "depth": 3,
    "translated": true
  },
  "4.03": {
    "en": "A proposition must communicate a new sense with old words.\nThe proposition communicates to us a state of affairs, therefore it must be essentially connected with the state of affairs.\nAnd the connexion is, in fact, that it is its logical picture.\nThe proposition only asserts something, in so far as it is a picture.",
    "zh": "一个命题必须用旧词来传达一种新的含义。命题向我们传达一个情况，因此它必须与这个情况有本质的关联。而这一关联恰恰在于：命题是它的逻辑图像。命题只是就其是一幅图像而言才断言某种东西。",
    "de": "Ein Satz muss mit alten Ausdrücken einen neuen Sinn mitteilen.\nDer Satz teilt uns eine Sachlage mit, also muss er wesentlich mit der Sachlage zusammenhängen.\nUnd der Zusammenhang ist eben, dass er ihr logisches Bild ist.\nDer Satz sagt nur insoweit etwas aus, als er ein Bild ist.",
    "enPM": "A proposition must use old expressions to communicate a new sense.\nA proposition communicates a situation to us, and so it must be essentially connected with the situation.\nAnd the connexion is precisely that it is its logical picture.\nA proposition states something only in so far as it is a picture.",
    "depth": 2,
    "translated": true
  },
  "4.031": {
    "en": "In the proposition a state of affairs is, as it were, put together for the sake of experiment.\nOne can say, instead of, This proposition has such and such a sense, This proposition represents such and such a state of affairs.",
    "zh": "在命题中，一个情况仿佛是出于尝试的目的而被拼接起来的。我们可以说：该命题表示了如此这般的情况，来代替该命题具有如此这般的含义那句话。",
    "de": "Im Satz wird gleichsam eine Sachlage probeweise zusammengestellt.\nMan kann geradezu sagen: statt, dieser Satz hat diesen und diesen Sinn; dieser Satz stellt diese und diese Sachlage dar.",
    "enPM": "In a proposition a situation is, as it were, constructed by way of experiment.\nInstead of, ‘This proposition has such and such a sense’, we can simply say, ‘This proposition represents such and such a situation’.",
    "depth": 3,
    "translated": true
  },
  "4.0311": {
    "en": "One name stands for one thing, and another for another thing, and they are connected together. And so the whole, like a living picture, presents the atomic fact.",
    "zh": "一个名称代表一个事物，另一个名称代表另一个事物，并且它们彼此联结了起来。而这样，整个整体——像一幅活生生的图像一样——呈现了事态。",
    "de": "Ein Name steht für ein Ding, ein anderer für ein anderes Ding und untereinander sind sie verbunden, so stellt das Ganze – wie ein lebendes Bild – den Sachverhalt vor.",
    "enPM": "One name stands for one thing, another for another thing, and they are combined with one another. In this way the whole group—like a tableau vivant—presents a state of affairs.",
    "depth": 4,
    "translated": true
  },
  "4.0312": {
    "en": "The possibility of propositions is based upon the principle of the representation of objects by signs.\nMy fundamental thought is that the \"logical constants\" do not represent. That the logic of the facts cannot be represented.",
    "zh": "命题的可能性的基础是：对象被记号所代表。我的基本思想是：「逻辑常项」不代表任何东西。事实的逻辑是不能被代表的。",
    "de": "Die Möglichkeit des Satzes beruht auf dem Prinzip der Vertretung von Gegenständen durch Zeichen.\nMein Grundgedanke ist, dass die „logischen Konstanten“ nicht vertreten. Dass sich die Logik der Tatsachen nicht vertreten lässt.",
    "enPM": "The possibility of propositions is based on the principle that objects have signs as their representatives.\nMy fundamental idea is that the ‘logical constants’ are not representatives; that there can be no representatives of the logic of facts.",
    "depth": 4,
    "translated": true
  },
  "4.032": {
    "en": "The proposition is a picture of its state of affairs, only in so far as it is logically articulated.\n(Even the proposition \"ambulo\" is composite, for its stem gives a different sense with another termination, or its termination with another stem.)",
    "zh": "命题只有在被逻辑地具有环节清晰性的时候，才是其相关情况的一幅图像。（甚至命题「ambulo」也是复合的：因为它的词干与另一种词尾结合时给出另一种含义，而它的词尾与另一个词干结合时亦然。）",
    "de": "Nur insoweit ist der Satz ein Bild der Sachlage, als er logisch gegliedert ist.\n(Auch der Satz: „ambulo“, ist zusammengesetzt, denn sein Stamm ergibt mit einer anderen Endung, und seine Endung mit einem anderen Stamm, einen anderen Sinn.)",
    "enPM": "It is only in so far as a proposition is logically articulated that it is a picture of a situation.\n(Even the proposition, Ambulo, is composite: for its stem with a different ending yields a different sense, and so does its ending with a different stem.)",
    "depth": 3,
    "translated": true
  },
  "4.04": {
    "en": "In the proposition there must be exactly as many thing distinguishable as there are in the state of affairs, which it represents.\nThey must both possess the same logical (mathematical) multiplicity (cf. Hertz's Mechanics, on Dynamic Models).",
    "zh": "在命题中，必然正好有与它所表现的那个情况中同样多可以区分出来的东西。它们二者必须具有相同的逻辑（数学）的多重性（参阅赫兹在其《力学》中关于动力学模型的论述）。",
    "de": "Am Satz muss gerade soviel zu unterscheiden sein, als an der Sachlage, die er darstellt.\nDie beiden müssen die gleiche logische (mathematische) Mannigfaltigkeit besitzen. (Vergleiche Hertz’s „Mechanik,“ über Dynamische Modelle.)",
    "enPM": "In a proposition there must be exactly as many distinguishable parts as in the situation that it represents.\nThe two must possess the same logical (mathematical) multiplicity. (Compare Hertz’s Mechanics on dynamical models.)",
    "depth": 2,
    "translated": true
  },
  "4.041": {
    "en": "This mathematical multiplicity naturally cannot in its turn be represented. One cannot get outside it in the representation.",
    "zh": "这种数学的多重性本身自然又不能被表现。人们不能走出它的外部。",
    "de": "Diese mathematische Mannigfaltigkeit kann man natürlich nicht selbst wieder abbilden. Aus ihr kann man beim Abbilden nicht heraus.",
    "enPM": "This mathematical multiplicity, of course, cannot itself be the subject of depiction. One cannot get away from it when depicting.",
    "depth": 3,
    "translated": true
  },
  "4.0411": {
    "en": "If we tried, for example, to express what is expressed by \"$(x).fx$\" by putting an index before $fx$, like: \"$Gen.fx$\", it would not do, we should not know what was generalized. If we tried to show it by an index $g$, like: \"$f(xg)$\" it would not do---we should not know the scope of the generalization.\nIf we were to try it by introducing a mark in the argument places, like \"$(G, G).F(G, G)$\", it would not do---we could not determine the identity of the variables, etc.\nAll these ways of symbolizing are inadequate because they have not the necessary mathematical multiplicity.",
    "zh": "例如，如果我们试图通过在fx之前放一个指标来表达「(x).fx」所要表达的东西——比方写作「Gen.fx」，那是不行的：我们将会不知道什么东西被一般化了。如果我们想通过一个指标g来显示它——例如「f(xg)」——那也不行：我们将会不知道一般化的范围。如果我们试图在诸主目位置上引入一个标记来表达它——例如写作「(G,G).F(G,G)」——那也不行：我们将无法确定这些变项的同一性等等。所有这些标示方式都是不够的，因为它们缺乏必要的数学的多重性。",
    "de": "Wollten wir z. B. das, was wir durch „(x).fx“ ausdrücken, durch Vorsetzen eines Indexes vor „fx“ ausdrücken – etwa so: „Alg.fx“ – es würde nicht genügen – wir wüssten nicht, was verallgemeinert wurde. Wollten wir es durch einen Index „a“ anzeigen – etwa so: „f(xa)“ – es würde auch nicht genügen – wir wüssten nicht den Bereich der Allgemeinheitsbezeichnung.\nWollten wir es durch Einführung einer Marke in die Argumentstellen versuchen – etwa so: „(A, A). F(A, A)“ – es würde nicht genügen – wir könnten die Identität der Variablen nicht feststellen. U.s.w.\nAlle diese Bezeichnungsweisen genügen nicht, weil sie nicht die notwendige mathematische Mannigfaltigkeit haben.",
    "enPM": "If, for example, we wanted to express what we now write as ‘(x).fx’ by putting an affix in front of ‘fx’—for instance by writing ‘Gen. fx’—it would not be adequate: we should not know what was being generalized. If we wanted to signalize it with an affix ‘g’—for instance by writing ‘f(xg)’—that would not be adequate either: we should not know the scope of the generality-sign.\nIf we were to try to do it by introducing a mark into the argument-places—for instance by writing ‘(G, G). F(G, G)’—it would not be adequate: we should not be able to establish the identity of the variables. And so on.\nAll these modes of signifying are inadequate because they lack the necessary mathematical multiplicity.",
    "depth": 4,
    "translated": true
  },
  "4.0412": {
    "en": "For the same reason the idealist explanation of the seeing of spatial relations through \"spatial spectacles\" does not do, because it cannot explain the multiplicity of these relations.",
    "zh": "出于同样的理由，通过「空间眼镜」来看空间关系的唯心主义解释也是行不通的，因为它不能解释这些关系的多重复性。",
    "de": "Aus demselben Grunde genügt die idealistische Erklärung des Sehens der räumlichen Beziehungen durch die „Raumbrille“ nicht, weil sie nicht die Mannigfaltigkeit dieser Beziehungen erklären kann.",
    "enPM": "For the same reason the idealist’s appeal to ‘spatial spectacles’ is inadequate to explain the seeing of spatial relations, because it cannot explain the multiplicity of these relations.",
    "depth": 4,
    "translated": true
  },
  "4.05": {
    "en": "Reality is compared with the proposition.",
    "zh": "实在被拿来与命题进行比较。",
    "de": "Die Wirklichkeit wird mit dem Satz verglichen.",
    "enPM": "Reality is compared with propositions.",
    "depth": 2,
    "translated": true
  },
  "4.06": {
    "en": "Propositions can be true or false only by being pictures of the reality.",
    "zh": "命题只能作为实在的图像才可能是真的或者假的。",
    "de": "Nur dadurch kann der Satz wahr oder falsch sein, indem er ein Bild der Wirklichkeit ist.",
    "enPM": "A proposition can be true or false only in virtue of being a picture of reality.",
    "depth": 2,
    "translated": true
  },
  "4.061": {
    "en": "If one does not observe that propositions have a sense independent of the facts, one can easily believe that true and false are two relations between signs and things signified with equal rights.\nOne could, then, for example, say that \"$p$\" signifies in the true way what \"$\\neg p$\" signifies in the false way, etc.",
    "zh": "如果没有注意到命题具有独立于事实的诸含义，那么人们就容易相信真和假乃是记号和被意谓者之间的两种具有同等权利的关系。那样的话，人们就可以说——譬如——「p」以真的方式指谓「~p」以假的方式所意谓的东西，等等。",
    "de": "Beachtet man nicht, dass der Satz einen von den Tatsachen unabhängigen Sinn hat, so kann man leicht glauben, dass wahr und falsch gleichberechtigte Beziehungen von Zeichen und Bezeichnetem sind.\nMan könnte dann z. B. sagen, dass „p“ auf die wahre Art bezeichnet, was „~p“ auf die falsche Art, etc.",
    "enPM": "It must not be overlooked that a proposition has a sense that is independent of the facts: otherwise one can easily suppose that true and false are relations of equal status between signs and what they signify.\nIn that case one could say, for example, that ‘p’ signified in the true way what ‘~p’ signified in the false way, etc.",
    "depth": 3,
    "translated": true
  },
  "4.062": {
    "en": "Can we not make ourselves understood by means of false propositions as hitherto with true ones, so long as we know that they are meant to be false? No! For a proposition is true, if what we assert by means of it is the case; and if by \"$p$\" we mean $\\neg p$, and what we mean is the case, then \"$p$\" in the new conception is true and not false.",
    "zh": "难道我们不能像迄今为止用真命题那样用假命题来使得自己被理解——只要我们知道它们是在被意指为假？不！因为如果通过命题所断言的情况确实存在，那么该命题就是真的；而如果通过「p」我们意指~p，并且我们所意指的情况确实存在，那么在新构想中「p」就是真的，而不是假的。",
    "de": "Kann man sich nicht mit falschen Sätzen, wie bisher mit wahren, verständigen? Solange man nur weiß, dass sie falsch gemeint sind. Nein! Denn, wahr ist ein Satz, wenn es sich so verhält, wie wir es durch ihn sagen; und wenn wir mit „p“ ~p meinen, und es sich so verhält wie wir es meinen, so ist „p“ in der neuen Auffassung wahr und nicht falsch.",
    "enPM": "Can we not make ourselves understood with false propositions just as we have done up till now with true ones?—So long as it is known that they are meant to be false.—No! For a proposition is true if we use it to say that things stand in a certain way, and they do; and if by ‘p’ we mean ~p and things stand as we mean that they do, then, construed in the new way, ‘p’ is true and not false.",
    "depth": 3,
    "translated": true
  },
  "4.0621": {
    "en": "That, however, the signs \"$p$\" and \"$\\neg p$\" can say the same thing is important, for it shows that the sign \"$\\neg$\" corresponds to nothing in reality.\nThat negation occurs in a proposition, is no characteristic of its sense ($\\neg\\neg p = p$).\nThe propositions \"$p$\" and \"$\\neg p$\" have opposite senses, but to them corresponds one and the same reality.",
    "zh": "然而，记号「p」和「~p」能够说同一个东西，这一点是重要的。因为它表明了：记号「~」并不对应于实在中的任何东西。否定在命题中出现，这并非该命题的含义的特征（~~p=p）。命题「p」和「~p」具有相反的诸含义，但与它们相对应的却是同一个实在。",
    "de": "Dass aber die Zeichen „p“ und „~p“ das gleiche sagen können, ist wichtig. Denn es zeigt, dass dem Zeichen „~“ in der Wirklichkeit nichts entspricht.\nDass in einem Satz die Verneinung vorkommt, ist noch kein Merkmal seines Sinnes (~~p=p).\nDie Sätze „p“ und „~p“ haben entgegengesetzten Sinn, aber es entspricht ihnen eine und dieselbe Wirklichkeit.",
    "enPM": "But it is important that the signs ‘p’ and ‘~p’ can say the same thing. For it shows that nothing in reality corresponds to the sign ‘~’.\nThe occurrence of negation in a proposition is not enough to characterize its sense (~~p=p).\nThe propositions ‘p’ and ‘~p’ have opposite sense, but there corresponds to them one and the same reality.",
    "depth": 4,
    "translated": true
  },
  "4.063": {
    "en": "An illustration to explain the concept of truth. A black spot on white paper; the form of the spot can be described by saying of each point of the plane whether it is white or black. To the fact that a point is black corresponds a positive fact; to the fact that a point is white (not black), a negative fact. If I indicate a point of the plane (a truth-value in Frege's terminology), this corresponds to the assumption proposed for judgment, etc. etc.\nBut to be able to say that a point is black or white, I must first know under what conditions a point is called white or black; in order to be able to say \"p\" is true (or false) I must have determined under what conditions I call \"p\" true, and thereby I determine the sense of the proposition.\nThe point at which the simile breaks down is this: we can indicate a point on the paper, without knowing what white and black are; but to a proposition without a sense corresponds nothing at all, for it signifies no thing (truth-value) whose properties are called \"false\" or \"true\"; the verb of the proposition is not \"is true\" or \"is false\"---as Frege thought---but that which \"is true\" must already contain the verb.",
    "zh": "一幅图像用以说明真假概念。一张白纸上有个黑色的斑点；通过说出这个斑点的形式来对这个平面的每一点是黑是白加以描述。与一个点是黑色的这一事实相对应的，是一个肯定的事实；与一个点是白的（不是黑色的）这一事实相对应的，是一个否定的事实。当我标出这平面上的一个点的时候（在弗雷格的术语中这是一个真值），那么这就相应于被提出来供人们判断的那个假定，等等。但是，为了能够说一个点是黑色的还是白色的，我必须首先知道在什么条件下一个点被称为白的、什么条件下被称为黑的；为了能够说「p」是真的（或假的），我必须已经规定了我是在什么条件下称「p」为真，并由此我规定了该命题的含义。这个类比之所以不成立，是因为：即使不知道白和黑是什么，我们也可以指明这张纸上的一个点；但对一个没有含义的命题来说，根本就不对应任何东西，因为该命题并不标志一个事物（真值）——这些真值的属性后来被称为「假」或「真」；命题的动词并不是「是真的」或「是假的」——如弗雷格所认为的那样——而是，「是真的」的那个东西必须已经包含了该动词。",
    "de": "Ein Bild zur Erklärung des Wahrheitsbegriffes: Schwarzer Fleck auf weißem Papier; die Form des Fleckes kann man beschreiben, indem man für jeden Punkt der Fläche angibt, ob er weiß oder schwarz ist. Der Tatsache, dass ein Punkt schwarz ist, entspricht eine positive – der, dass ein Punkt weiß (nicht schwarz) ist, eine negative Tatsache. Bezeichne ich einen Punkt der Fläche (einen Fregeschen Wahrheitswert), so entspricht dies der Annahme, die zur Beurteilung aufgestellt wird, etc. etc.\nUm aber sagen zu können, ein Punkt sei schwarz oder weiß, muss ich vorerst wissen, wann man einen Punkt schwarz und wann man ihn weiß nennt; um sagen zu können: „p“ ist wahr (oder falsch), muss ich bestimmt haben, unter welchen Umständen ich „p“ wahr nenne, und damit bestimme ich den Sinn des Satzes.\nDer Punkt, an dem das Gleichnis hinkt ist nun der: Wir können auf einen Punkt des Papiers zeigen, auch ohne zu wissen, was weiß und schwarz ist; einem Satz ohne Sinn aber entspricht gar nichts, denn er bezeichnet kein Ding (Wahrheitswert) dessen Eigenschaften etwa „falsch“ oder „wahr“ hießen; das Verbum eines Satzes ist nicht „ist wahr“ oder „ist falsch“ – wie Frege glaubte –, sondern das, was „wahr ist“, muss das Verbum schon enthalten.",
    "enPM": "An analogy to illustrate the concept of truth: imagine a black spot on white paper: you can describe the shape of the spot by saying, for each point on the sheet, whether it is black or white. To the fact that a point is black there corresponds a positive fact, and to the fact that a point is white (not black), a negative fact. If I designate a point on the sheet (a truth-value according to Frege), then this corresponds to the supposition that is put forward for judgement, etc. etc.\nBut in order to be able to say that a point is black or white, I must first know when a point is called black, and when white: in order to be able to say, ‘“p” is true (or false)’, I must have determined in what circumstances I call ‘p’ true, and in so doing I determine the sense of the proposition.\nNow the point where the simile breaks down is this: we can indicate a point on the paper even if we do not know what black and white are, but if a proposition has no sense, nothing corresponds to it, since it does not designate a thing (a truth-value) which might have properties called ‘false’ or ‘true’. The verb of a proposition is not ‘is true’ or ‘is false’, as Frege thought: rather, that which ‘is true’ must already contain the verb.",
    "depth": 3,
    "translated": true
  },
  "4.064": {
    "en": "Every proposition must already have a sense; assertion cannot give it a sense, for what it asserts is the sense itself. And the same holds of denial, etc.",
    "zh": "每一个命题必须已经具有一种含义；命题的断言不能给予它一种含义，因为断言所断言的恰恰是这含义本身。对于否定等等也同样如此。",
    "de": "Jeder Satz muss schon einen Sinn haben; die Bejahung kann ihn ihm nicht geben, denn sie bejaht ja gerade den Sinn. Und dasselbe gilt von der Verneinung, etc.",
    "enPM": "Every proposition must already have a sense: it cannot be given a sense by affirmation. Indeed its sense is just what is affirmed. And the same applies to negation, etc.",
    "depth": 3,
    "translated": true
  },
  "4.0641": {
    "en": "One could say, the denial is already related to the logical place determined by the proposition that is denied.\nThe denying proposition determines a logical place other than does the proposition denied.\nThe denying proposition determines a logical place, with the help of the logical place of the proposition denied, by saying that it lies outside the latter place.\nThat one can deny again the denied proposition, shows that what is denied is already a proposition and not merely the preliminary to a proposition.",
    "zh": "人们可以说，否定已经与被该否定命题所规定的那个逻辑位置相关联了。否定的命题规定了一个与被否命题的逻辑位置不同的逻辑位置。否定的命题是这样规定一个逻辑位置的：它借助那个被否命题的逻辑位置来规定一个逻辑位置，即说它处于后一逻辑位置之外。被否命题可以被再一次地否定这一事实就表明了：被否命题已经是一个命题，而不仅仅是命题的前奏。",
    "de": "Man könnte sagen: Die Verneinung bezieht sich schon auf den logischen Ort, den der verneinte Satz bestimmt.\nDer verneinende Satz bestimmt einen anderen logischen Ort als der verneinte.\nDer verneinende Satz bestimmt einen logischen Ort mit Hilfe des logischen Ortes des verneinten Satzes, indem er jenen als außerhalb diesem liegend beschreibt.\nDass man den verneinten Satz wieder verneinen kann, zeigt schon, dass das, was verneint wird, schon ein Satz und nicht erst die Vorbereitung zu einem Satze ist.",
    "enPM": "One could say that negation must be related to the logical place determined by the negated proposition.\nThe negating proposition determines a logical place different from that of the negated proposition.\nThe negating proposition determines a logical place with the help of the logical place of the negated proposition. For it describes it as lying outside the latter’s logical place.\nThe negated proposition can be negated again, and this in itself shows that what is negated is already a proposition, and not merely something that is preliminary to a proposition.",
    "depth": 4,
    "translated": true
  },
  "4.1": {
    "en": "A proposition presents the existence and non-existence of atomic facts.",
    "zh": "一个命题呈现出诸事态的实存和非实存。",
    "de": "Der Satz stellt das Bestehen und Nichtbestehen der Sachverhalte dar.",
    "enPM": "Propositions represent the existence and non-existence of states of affairs.",
    "depth": 2,
    "translated": true
  },
  "4.11": {
    "en": "The totality of true propositions is the total natural science (or the totality of the natural sciences).",
    "zh": "所有真命题的总和就是整个的自然科学（或全部自然科学的总体）。",
    "de": "Die Gesamtheit der wahren Sätze ist die gesamte Naturwissenschaft (oder die Gesamtheit der Naturwissenschaften).",
    "enPM": "The totality of true propositions is the whole of natural science (or the whole corpus of the natural sciences).",
    "depth": 3,
    "translated": true
  },
  "4.111": {
    "en": "Philosophy is not one of the natural sciences.\n(The word \"philosophy\" must mean something which stands above or below, but not beside the natural sciences.)",
    "zh": "哲学不是诸自然科学中的一种。（「哲学」一词必须意谓着某种站在诸自然科学之上或之下的东西，而不是站在它们旁边的东西。）",
    "de": "Die Philosophie ist keine der Naturwissenschaften.\n(Das Wort „Philosophie“ muss etwas bedeuten, was über oder unter, aber nicht neben den Naturwissenschaften steht.)",
    "enPM": "Philosophy is not one of the natural sciences.\n(The word ‘philosophy’ must mean something whose place is above or below the natural sciences, not beside them.)",
    "depth": 4,
    "translated": true
  },
  "4.112": {
    "en": "The object of philosophy is the logical clarification of thoughts.\nPhilosophy is not a theory but an activity.\nA philosophical work consists essentially of elucidations.\nThe result of philosophy is not a number of \"philosophical propositions\", but to make propositions clear.\nPhilosophy should make clear and delimit sharply the thoughts which otherwise are, as it were, opaque and blurred.",
    "zh": "哲学的目的是对诸思想的逻辑澄清。哲学不是一种理论，而是一种活动。一种哲学工作本质上是由诸阐释构成的。哲学的结果不是一些「哲学命题」，而是使诸命题变得清晰。哲学应当把那些仿佛是模糊不清的思想弄清晰、划出明确的界限。",
    "de": "Der Zweck der Philosophie ist die logische Klärung der Gedanken.\nDie Philosophie ist keine Lehre, sondern eine Tätigkeit.\nEin philosophisches Werk besteht wesentlich aus Erläuterungen.\nDas Resultat der Philosophie sind nicht „philosophische Sätze“, sondern das Klarwerden von Sätzen.\nDie Philosophie soll die Gedanken, die sonst, gleichsam, trübe und verschwommen sind, klar machen und scharf abgrenzen.",
    "enPM": "Philosophy aims at the logical clarification of thoughts.\nPhilosophy is not a body of doctrine but an activity.\nA philosophical work consists essentially of elucidations.\nPhilosophy does not result in ‘philosophical propositions’, but rather in the clarification of propositions.\nWithout philosophy thoughts are, as it were, cloudy and indistinct: its task is to make them clear and to give them sharp boundaries.",
    "depth": 4,
    "translated": true
  },
  "4.1121": {
    "en": "Psychology is no nearer related to philosophy, than is any other natural science.\nThe theory of knowledge is the philosophy of psychology.\nDoes not my study of sign-language correspond to the study of thought processes which philosophers held to be so essential to the philosophy of logic? Only they got entangled for the most part in unessential psychological investigations, and there is an analogous danger for my method.",
    "zh": "心理学并不比任何其他自然科学与哲学有更切近的关系。认识论是心理学的哲学。我对记号语言的研究难道不与哲学家们曾认为对逻辑哲学如此本质的那些思想过程的研究相对应吗？只不过他们绝大多数都纠缠于非本质的心理学的研究之中，而对于我的方法来说也存在着一种类似的危险。",
    "de": "Die Psychologie ist der Philosophie nicht verwandter als irgend eine andere Naturwissenschaft.\nErkenntnistheorie ist die Philosophie der Psychologie.\nEntspricht nicht mein Studium der Zeichensprache dem Studium der Denkprozesse, welches die Philosophen für die Philosophie der Logik für so wesentlich hielten? Nur verwickelten sie sich meistens in unwesentliche psychologische Untersuchungen und eine analoge Gefahr gibt es auch bei meiner Methode.",
    "enPM": "Psychology is no more closely related to philosophy than any other natural science.\nTheory of knowledge is the philosophy of psychology.\nDoes not my study of sign-language correspond to the study of thought-processes, which philosophers used to consider so essential to the philosophy of logic? Only in most cases they got entangled in unessential psychological investigations, and with my method too there is an analogous risk.",
    "depth": 5,
    "translated": true
  },
  "4.1122": {
    "en": "The Darwinian theory has no more to do with philosophy than has any other hypothesis of natural science.",
    "zh": "达尔文理论与哲学的关系，并不多于任何其他自然科学假设与哲学的关系。",
    "de": "Die Darwinsche Theorie hat mit der Philosophie nicht mehr zu schaffen als irgendeine andere Hypothese der Naturwissenschaft.",
    "enPM": "Darwin’s theory has no more to do with philosophy than any other hypothesis in natural science.",
    "depth": 5,
    "translated": true
  },
  "4.113": {
    "en": "Philosophy limits the disputable sphere of natural science.",
    "zh": "哲学为自然科学的可争辩领域划界。",
    "de": "Die Philosophie begrenzt das bestreitbare Gebiet der Naturwissenschaft.",
    "enPM": "Philosophy sets limits to the much disputed sphere of natural science.",
    "depth": 4,
    "translated": true
  },
  "4.114": {
    "en": "It should limit the thinkable and thereby the unthinkable.\nIt should limit the unthinkable from within through the thinkable.",
    "zh": "它应该为可思考的东西并由此也为不可思考的东西划界。它应该通过可思考的东西从内部来为不可思考的东西划界。",
    "de": "Sie soll das Denkbare abgrenzen und damit das Undenkbare.\nSie soll das Undenkbare von innen durch das Denkbare begrenzen.",
    "enPM": "It must set limits to what can be thought; and, in doing so, to what cannot be thought.\nIt must set limits to what cannot be thought by working outwards through what can be thought.",
    "depth": 4,
    "translated": true
  },
  "4.115": {
    "en": "It will mean the unspeakable by clearly displaying the speakable.",
    "zh": "它通过清晰地展示可说的东西来意谓那不可说的东西。",
    "de": "Sie wird das Unsagbare bedeuten, indem sie das Sagbare klar darstellt.",
    "enPM": "It will signify what cannot be said, by presenting clearly what can be said.",
    "depth": 4,
    "translated": true
  },
  "4.116": {
    "en": "Everything that can be thought at all can be thought clearly. Everything that can be said can be said clearly.",
    "zh": "凡是能够被思考的东西就能够被清晰地思考。凡是能够被言说的东西就能够被清晰地言说。",
    "de": "Alles was überhaupt gedacht werden kann, kann klar gedacht werden. Alles, was sich aussprechen lässt, lässt sich klar aussprechen.",
    "enPM": "Everything that can be thought at all can be thought clearly. Everything that can be put into words can be put clearly.",
    "depth": 4,
    "translated": true
  },
  "4.12": {
    "en": "Propositions can represent the whole reality, but they cannot represent what they must have in common with reality in order to be able to represent it---the logical form.\nTo be able to represent the logical form, we should have to be able to put ourselves with the propositions outside logic, that is outside the world.",
    "zh": "命题可以表现整个的实在，但是不能表现它们为了能够表现实在而必须与实在共有的东西——逻辑形式。为了能够表现这逻辑形式，我们必须能够把自身和诸命题一起置于逻辑之外，也就是置于世界之外。",
    "de": "Der Satz kann die gesamte Wirklichkeit darstellen, aber er kann nicht das darstellen, was er mit der Wirklichkeit gemein haben muss, um sie darstellen zu können – die logische Form.\nUm die logische Form darstellen zu können, müssten wir uns mit dem Satze außerhalb der Logik aufstellen können, das heißt außerhalb der Welt.",
    "enPM": "Propositions can represent the whole of reality, but they cannot represent what they must have in common with reality in order to be able to represent it—logical form.\nIn order to be able to represent logical form, we should have to be able to station ourselves with propositions somewhere outside logic, that is to say outside the world.",
    "depth": 3,
    "translated": true
  },
  "4.121": {
    "en": "Propositions cannot represent the logical form: this mirrors itself in the propositions.\nThat which mirrors itself in language, language cannot represent.\nThat which expresses itself in language, we cannot express by language.\nThe propositions show the logical form of reality.\nThey exhibit it.",
    "zh": "诸命题不能表现那逻辑形式：这逻辑形式映现自身在命题之中。语言所映现自身于其中的东西，语言不能表现它。我们用语言不能表达那表达自身于语言中的东西。诸命题显示实在的逻辑形式。它们展示它。",
    "de": "Der Satz kann die logische Form nicht darstellen, sie spiegelt sich in ihm.\nWas sich in der Sprache spiegelt, kann sie nicht darstellen.\nWas sich in der Sprache ausdrückt, können wir nicht durch sie ausdrücken.\nDer Satz zeigt die logische Form der Wirklichkeit.\nEr weist sie auf.",
    "enPM": "Propositions cannot represent logical form: it is mirrored in them.\nWhat finds its reflection in language, language cannot represent.\nWhat expresses itself in language, we cannot express by means of language.\nPropositions show the logical form of reality.\nThey display it.",
    "depth": 4,
    "translated": true
  },
  "4.1211": {
    "en": "Thus a proposition \"fa\" shows that in its sense the object a occurs, two propositions \"fa\" and \"ga\" that they are both about the same object.\nIf two propositions contradict one another, this is shown by their structure; similarly if one follows from another, etc.",
    "zh": "因此，命题「fa」显示出：在它的含义中出现了对象a；两个命题「fa」和「ga」显示出：它们都谈及同一个对象。如果两个命题彼此矛盾，那么它们的结构就显示出这一点；同样地如果一个命题从另一个命题推出也是如此，等等。",
    "de": "So zeigt ein Satz „fa“, dass in seinem Sinn der Gegenstand a vorkommt, zwei Sätze „fa“ und „ga“, dass in ihnen beiden von demselben Gegenstand die Rede ist.\nWenn zwei Sätze einander widersprechen, so zeigt dies ihre Struktur; ebenso, wenn einer aus dem anderen folgt. U.s.w.",
    "enPM": "Thus one proposition ‘fa’ shows that the object a occurs in its sense, two propositions ‘fa’ and ‘ga’ show that the same object is mentioned in both of them.\nIf two propositions contradict one another, then their structure shows it; the same is true if one of them follows from the other. And so on.",
    "depth": 5,
    "translated": true
  },
  "4.1212": {
    "en": "What can be shown cannot be said.",
    "zh": "能够被显示的东西不能被言说。",
    "de": "Was gezeigt werden kann, kann nicht gesagt werden.",
    "enPM": "What can be shown, cannot be said.",
    "depth": 5,
    "translated": true
  },
  "4.1213": {
    "en": "Now we understand our feeling that we are in possession of the right logical conception, if only all is right in our symbolism.",
    "zh": "现在，我们可以理解我们的这样一种感觉：即只要我们的符号系统中一切妥当，我们就具有了一个正确的逻辑构想。",
    "de": "Jetzt verstehen wir auch unser Gefühl: dass wir im Besitze einer richtigen logischen Auffassung seien, wenn nur einmal alles in unserer Zeichensprache stimmt.",
    "enPM": "Now, too, we understand our feeling that once we have a sign-language in which everything is all right, we already have a correct logical point of view.",
    "depth": 5,
    "translated": true
  },
  "4.122": {
    "en": "We can speak in a certain sense of formal properties of objects and atomic facts, or of properties of the structure of facts, and in the same sense of formal relations and relations of structures.\n(Instead of property of the structure I also say \"internal property\"; instead of relation of structures \"internal relation\".\nI introduce these expressions in order to show the reason for the confusion, very widespread among philosophers, between internal relations and proper (external) relations.)\nThe holding of such internal properties and relations cannot, however, be asserted by propositions, but it shows itself in the propositions, which present the facts and treat of the objects in question.",
    "zh": "在某种意义上，我们可以谈论对象和事态的形式性质，或者谈论诸事实的结构的性质；在同样的意义上，我们也可以谈论形式关系以及诸结构的关系。（我不用结构性质而说「内在性质」；不用诸结构的关系而说「内在关系」。我引入这些表达式，是为了揭示在哲学家们中间非常普遍的一种混淆的原因——即内在关系与真正的（外在的）关系被混淆了的原因。）然而对于这样一些内在性质和关系的持有，是不能通过命题来断言的：它在诸命题中自行显示——在那些呈现了这些事实、论述了所讨论的对象的诸命题中自行显示。",
    "de": "Wir können in gewissem Sinne von formalen Eigenschaften der Gegenstände und Sachverhalte bezw. von Eigenschaften der Struktur der Tatsachen reden, und in demselben Sinne von formalen Relationen und Relationen von Strukturen.\n(Statt Eigenschaft der Struktur sage ich auch „interne Eigenschaft“; statt Relation der Strukturen „interne Relation“.\nIch führe diese Ausdrücke ein, um den Grund der bei den Philosophen sehr verbreiteten Verwechslung zwischen den internen Relationen und den eigentlichen (externen) Relationen zu zeigen.)\nDas Bestehen solcher interner Eigenschaften und Relationen kann aber nicht durch Sätze behauptet werden, sondern es zeigt sich in den Sätzen, welche jene Sachverhalte darstellen und von jenen Gegenständen handeln.",
    "enPM": "In a certain sense we can talk about formal properties of objects and states of affairs, or, in the case of facts, about structural properties: and in the same sense about formal relations and structural relations.\n(Instead of ‘structural property’ I also say ‘internal property’; instead of ‘structural relation’, ‘internal relation’.\nI introduce these expressions in order to indicate the source of the confusion between internal relations and relations proper (external relations), which is very widespread among philosophers.)\nIt is impossible, however, to assert by means of propositions that such internal properties and relations obtain: rather, this makes itself manifest in the propositions that represent the relevant states of affairs and are concerned with the relevant objects.",
    "depth": 4,
    "translated": true
  },
  "4.1221": {
    "en": "An internal property of a fact we also call a feature of this fact. (In the sense in which we speak of facial features.)",
    "zh": "一个事实的一种内在性质也可以被称为该事实的一个特征。（在我们谈论「面容特征」的意义上来说。）",
    "de": "Eine interne Eigenschaft einer Tatsache können wir auch einen Zug dieser Tatsache nennen. (In dem Sinn, in welchem wir etwa von Gesichtszügen sprechen.)",
    "enPM": "An internal property of a fact can also be called a feature of that fact (in the sense in which we speak of facial features, for example).",
    "depth": 5,
    "translated": true
  },
  "4.123": {
    "en": "A property is internal if it is unthinkable that its object does not possess it.\n(This bright blue colour and that stand in the internal relation of bright and darker eo ipso. It is unthinkable that these two objects should not stand in this relation.)\n(Here to the shifting use of the words \"property\" and \"relation\" there corresponds the shifting use of the word \"object\".)",
    "zh": "一种性质，如果不可能设想它的对象不拥有它，那么它就是内在的。（这只鲜艳的蓝色和那只较浅的蓝色自己就处于较鲜艳和较浅淡的内在关系中了。不可能设想这两个对象不处于这种关系之中。）（这里，与「性质」和「关系」这两个词用法上的浮动相对应的是「对象」这个词用法上的浮动。）",
    "de": "Eine Eigenschaft ist intern, wenn es undenkbar ist, dass ihr Gegenstand sie nicht besitzt.\n(Diese blaue Farbe und jene stehen in der internen Relation von heller und dunkler eo ipso. Es ist undenkbar, dass diese beiden Gegenstände nicht in dieser Relation stünden.)\n(Hier entspricht dem schwankenden Gebrauch der Worte „Eigenschaft“ und „Relation“ der schwankende Gebrauch des Wortes „Gegenstand“.)",
    "enPM": "A property is internal if it is unthinkable that its object should not possess it.\n(This shade of blue and that one stand, eo ipso, in the internal relation of lighter to darker. It is unthinkable that these two objects should not stand in this relation.)\n(Here the shifting use of the word ‘object’ corresponds to the shifting use of the words ‘property’ and ‘relation’.)",
    "depth": 4,
    "translated": true
  },
  "4.124": {
    "en": "The existence of an internal property of a possible state of affairs is not expressed by a proposition, but it expresses itself in the proposition which presents that state of affairs, by an internal property of this proposition.\nIt would be as senseless to ascribe a formal property to a proposition as to deny it the formal property.",
    "zh": "一个可能情况的一种内在性质的存在并不是由某个命题来表达的：它通过一个表现这个情况的命题的某种内在性质而在该命题中自行表达出来。",
    "de": "Das Bestehen einer internen Eigenschaft einer möglichen Sachlage wird nicht durch einen Satz ausgedrückt, sondern es drückt sich in dem sie darstellenden Satz durch eine interne Eigenschaft dieses Satzes aus.\nEs wäre ebenso unsinnig, dem Satze eine formale Eigenschaft zuzusprechen, als sie ihm abzusprechen.",
    "enPM": "The existence of an internal property of a possible situation is not expressed by means of a proposition: rather, it expresses itself in the proposition representing the situation, by means of an internal property of that proposition.\nIt would be just as nonsensical to assert that a proposition had a formal property as to deny it.",
    "depth": 4,
    "translated": true
  },
  "4.1241": {
    "en": "One cannot distinguish forms from one another by saying that one has this property, the other that: for this assumes that there is a sense in asserting either property of either form.",
    "zh": "我们不能通过说这种形式具有此一性质而那种形式具有彼一性质来辨别诸形式：因为这是假设在断言这两个形式中的任何一个时都有一种把它们区分开来的含义。",
    "de": "Formen kann man nicht dadurch voneinander unterscheiden, dass man sagt, die eine habe diese, die andere aber jene Eigenschaft; denn dies setzt voraus, dass es einen Sinn habe, beide Eigenschaften von beiden Formen auszusagen.",
    "enPM": "It is impossible to distinguish forms from one another by saying that one has this property and another that property: for this presupposes that it makes sense to ascribe either property to either form.",
    "depth": 5,
    "translated": true
  },
  "4.125": {
    "en": "The existence of an internal relation between possible states of affairs expresses itself in language by an internal relation between the propositions presenting them.",
    "zh": "在诸可能情况之间的某种内在关系的存在，通过表现着它们的诸命题之间的某种内在关系而在语言中自行表达出来。",
    "de": "Das Bestehen einer internen Relation zwischen möglichen Sachlagen drückt sich sprachlich durch eine interne Relation zwischen den sie darstellenden Sätzen aus.",
    "enPM": "The existence of an internal relation between possible situations expresses itself in language by means of an internal relation between the propositions representing them.",
    "depth": 4,
    "translated": true
  },
  "4.1251": {
    "en": "Now this settles the disputed question \"whether all relations are internal or external\".",
    "zh": "这也就解决了「是否一切关系都是内在的或外在的？」这个有争议的问题。",
    "de": "Hier erledigt sich nun die Streitfrage, „ob alle Relationen intern oder extern seien“.",
    "enPM": "Here we have the answer to the vexed question ‘whether all relations are internal or external’.",
    "depth": 5,
    "translated": true
  },
  "4.1252": {
    "en": "Series which are ordered by internal relations I call formal series.\nThe series of numbers is ordered not by an external, but by an internal relation.\nSimilarly the series of propositions $aRb$,\n$(\\exists x):aRx.xRb$,\n$(\\exists x,y):aRx.xRy.yRb$, etc.\n(If $b$ stands in one of these relations to $a$, I call $b$ a successor of $a$.)",
    "zh": "那些通过内在关系而排序的序列，我称之为形式序列。数序的排序不是通过一种外在关系，而是通过一种内在关系。同样，以下命题序列也是如此：aRb，(∃x):aRx.xRb，(∃x,y):aRx.xRy.yRb，等等。（如果b处于对a的这种关系之一中，那么我就称b为a的一个后继者。）",
    "de": "Reihen, welche durch interne Relationen geordnet sind, nenne ich Formenreihen.\nDie Zahlenreihe ist nicht nach einer externen, sondern nach einer internen Relation geordnet.\nEbenso die Reihe der Sätze „aRb“,\n„(∃x):aRx.xRb“,\n„(∃x,y):aRx.xRy.yRb“, u. s. f.\n(Steht b in einer dieser Beziehungen zu a, so nenne ich b einen Nachfolder von a.)",
    "enPM": "I call a series that is ordered by an internal relation a series of forms.\nThe order of the number-series is not governed by an external relation but by an internal relation.\nThe same is true of the series of propositions ‘aRb’,\n‘(∃x):aRx.xRb’,\n‘(∃x,y):aRx.xRy.yRb’, and so forth.\n(If b stands in one of these relations to a, I call b a successor of a.)",
    "depth": 5,
    "translated": true
  },
  "4.126": {
    "en": "In the sense in which we speak of formal properties we can now speak also of formal concepts.\n(I introduce this expression in order to make clear the confusion of formal concepts with proper concepts which runs through the whole of the old logic.)\nThat anything falls under a formal concept as an object belonging to it, cannot be expressed by a proposition. But it is shown in the symbol for the object itself. (The name shows that it signifies an object, the numerical sign that it signifies a number, etc.)\nFormal concepts, cannot, like proper concepts, be presented by a function.\nFor their characteristics, the formal properties, are not expressed by the functions.\nThe expression of a formal property is a feature of certain symbols.\nThe sign that signifies the characteristics of a formal concept is, therefore, a characteristic feature of all symbols, whose meanings fall under the concept.\nThe expression of the formal concept is therefore a propositional variable in which only this characteristic feature is constant.",
    "zh": "在谈论形式性质的意义上，现在我们也可以谈论形式概念。（我引入这个表达式，是为了澄清贯穿整个旧逻辑的形式概念与真正的概念被混淆的情况。）某个东西作为一个属于形式概念的对象而归摄于这形式概念下，这是不能通过命题来表现的。而是在该对象自身的符号中自行显示出来的。（名称显示出，它标示一个对象；数字记号显示出，它标示一个数字；等等。）形式概念不能够像真正的概念那样通过一个函项来被呈现。因为它们的特征——形式性质——并不是通过函项来表达的。形式性质的表达式是某些符号的一个特征。所以，标示形式概念的那些特征的记号，乃是所有其意谓归摄于这些概念之下的那些符号的一个特征标记。因此，形式概念的表达式是以只有这个特征标记保持不变的命题变项来呈现的。",
    "de": "In dem Sinne, in welchem wir von formalen Eigenschaften sprechen, können wir nun auch von formalen Begriffen reden.\n(Ich führe diesen Ausdruck ein, um den Grund der Verwechslung der formalen Begriffe mit den eigentlichen Begriffen, welche die ganze alte Logik durchzieht, klar zu machen.)\nDass etwas unter einen formalen Begriff als dessen Gegenstand fällt, kann nicht durch einen Satz ausgedrückt werden. Sondern es zeigt sich an dem Zeichen dieses Gegenstandes selbst. (Der Name zeigt, dass er einen Gegenstand bezeichnet, das Zahlenzeichen, dass es eine Zahl bezeichnet etc.)\nDie formalen Begriffe können ja nicht, wie die eigentlichen Begriffe, durch eine Funktion dargestellt werden.\nDenn ihre Merkmale, die formalen Eigenschaften, werden nicht durch Funktionen ausgedrückt.\nDer Ausdruck der formalen Eigenschaft ist ein Zug gewisser Symbole.\nDas Zeichen der Merkmale eines formalen Begriffes ist also ein charakteristischer Zug aller Symbole, deren Bedeutungen unter den Begriff fallen.\nDer Ausdruck des formalen Begriffes also, eine Satzvariable, in welcher nur dieser charakteristische Zug konstant ist.",
    "enPM": "We can now talk about formal concepts, in the same sense that we speak of formal properties.\n(I introduce this expression in order to exhibit the source of the confusion between formal concepts and concepts proper, which pervades the whole of traditional logic.)\nWhen something falls under a formal concept as one of its objects, this cannot be expressed by means of a proposition. Instead it is shown in the very sign for this object. (A name shows that it signifies an object, a sign for a number that it signifies a number, etc.)\nFormal concepts cannot, in fact, be represented by means of a function, as concepts proper can.\nFor their characteristics, formal properties, are not expressed by means of functions.\nThe expression for a formal property is a feature of certain symbols.\nSo the sign for the characteristics of a formal concept is a distinctive feature of all symbols whose meanings fall under the concept.\nSo the expression for a formal concept is a propositional variable in which this distinctive feature alone is constant.",
    "depth": 4,
    "translated": true
  },
  "4.127": {
    "en": "The propositional variable signifies the formal concept, and its values signify the objects which fall under this concept.",
    "zh": "命题变项标示着形式概念，而它的那些值则标示着归摄于这个概念之下的那些对象。",
    "de": "Die Satzvariable bezeichnet den formalen Begriff und ihre Werte die Gegenstände, welche unter diesen Begriff fallen.",
    "enPM": "The propositional variable signifies the formal concept, and its values signify the objects that fall under the concept.",
    "depth": 4,
    "translated": true
  },
  "4.1271": {
    "en": "Every variable is the sign of a formal concept.\nFor every variable presents a constant form, which all its values possess, and which can be conceived as a formal property of these values.",
    "zh": "每一个变项都是一个形式概念的记号。因为每一个变项都呈现了一个不变的形式——该形式为它的所有值所具有——该形式就可以被构想为这些值的一个形式性质。",
    "de": "Jede Variable ist das Zeichen eines formalen Begriffes.\nDenn jede Variable stellt eine konstante Form dar, welche alle ihre Werte besitzen, und die als formale Eigenschaft dieser Werte aufgefasst werden kann.",
    "enPM": "Every variable is the sign for a formal concept.\nFor every variable represents a constant form that all its values possess, and this can be regarded as a formal property of those values.",
    "depth": 5,
    "translated": true
  },
  "4.1272": {
    "en": "So the variable name \"x\" is the proper sign of the pseudo-concept object.\nWherever the word \"object\" (\"thing\", \"entity\", etc.) is rightly used, it is expressed in logical symbolism by the variable name.\nFor example in the proposition \"there are two objects which ...\", by \"$(\\exists x,y)$...\".\nWherever it is used otherwise, i.e. as a proper concept word, there arise senseless pseudo-propositions.\nSo one cannot, e.g. say \"There are objects\" as one says \"There are books\". Nor \"There are 100 objects\" or \"There are $\\aleph_0$ objects\".\nAnd it is senseless to speak of the number of all objects.\nThe same holds of the words \"Complex\", \"Fact\", \"Function\", \"Number\", etc.\nThey all signify formal concepts and are presented in logical symbolism by variables, not by functions or classes (as Frege and Russell thought).\nExpressions like \"1 is a number\", \"there is only one number nought\", and all like them are senseless.\n(It is as senseless to say, \"there is only one 1\" as it would be to say: 2+2 is at 3 o'clock equal to 4.)",
    "zh": "因此，变项名称「x」就是那个伪概念「对象」的真正的记号。凡是这个词——「对象」（「事物」「实体」等）——被正确地使用的地方，它在逻辑符号系统里都是用变项名称来表达的。例如在「有两个对象，它们……」这个命题中，是用「(∃x,y)……」；凡是它被以其他的方式使用的地方——即作为真正的概念词来用——都会产生无含义的伪命题。因此，譬如说我们不能像说「有一些书」那样去说「有诸对象」。同样地也不能说「有100个对象」或者「有ℵ₀个对象」。而谈论所有的对象的数目是无含义的。同样的说法也适用于「复合物」「事实」「函项」「数」等词。它们全都是标示形式概念，在逻辑符号系统里是通过变项来表现的，而不是像弗雷格和罗素所认为的那样通过函项或者类来表现。像「1是一个数」「只有一个零」之类的表达式全都是无含义的。（说「只有一个1」，就如同说「2+2在3点钟的时候等于4」一样无含义。）",
    "de": "So ist der variable Name „x“ das eigentliche Zeichen des Scheinbegriffes Gegenstand.\nWo immer das Wort „Gegenstand“ („Ding“, „Sache“, etc.) richtig gebraucht wird, wird es in der Begriffsschrift durch den variablen Namen ausgedrückt.\nZum Beispiel in dem Satz „es gibt 2 Gegenstände, welche …“ durch „(∃x,y)…“.\nWo immer es anders, also als eigentliches Begriffswort gebraucht wird, entstehen unsinnige Scheinsätze.\nSo kann man z. B. nicht sagen „Es gibt Gegenstände“, wie man etwa sagt: „Es gibt Bücher“. Und ebenso wenig: „Es gibt 100 Gegenstände“, oder „Es gibt ℵ0 Gegenstände“.\nUnd es ist unsinnig, von der Anzahl aller Gegenstände zu sprechen.\nDasselbe gilt von den Worten „Komplex“, „Tatsache“, „Funktion“, „Zahl“, etc.\nSie alle bezeichnen formale Begriffe und werden in der Begriffsschrift durch Variable, nicht durch Funktionen oder Klassen dargestellt. (Wie Frege und Russell glaubten.)\nAusdrücke wie „1 ist eine Zahl“, „es gibt nur Eine Null“ und alle ähnlichen sind unsinnig.\n(Es ist ebenso unsinnig zu sagen: „es gibt nur eine 1“, als es unsinnig wäre, zu sagen: 2+2 ist um 3 Uhr gleich 4.)",
    "enPM": "Thus the variable name ‘x’ is the proper sign for the pseudo-concept object.\nWherever the word ‘object’ (‘thing’, etc.) is correctly used, it is expressed in conceptual notation by a variable name.\nFor example, in the proposition, ‘There are 2 objects which …’, it is expressed by ‘(∃x,y)…’.\nWherever it is used in a different way, that is as a proper concept-word, nonsensical pseudo-propositions are the result.\nSo one cannot say, for example, ‘There are objects’, as one might say, ‘There are books’. And it is just as impossible to say, ‘There are 100 objects’, or, ‘There are ℵ0 objects’.\nAnd it is nonsensical to speak of the total number of objects.\nThe same applies to the words ‘complex’, ‘fact’, ‘function’, ‘number’, etc.\nThey all signify formal concepts, and are represented in conceptual notation by variables, not by functions or classes (as Frege and Russell believed).\n‘1 is a number’, ‘There is only one zero’, and all similar expressions are nonsensical.\n(It is just as nonsensical to say, ‘There is only one 1’, as it would be to say, ‘2+2 at 3 o’clock equals 4’.)",
    "depth": 5,
    "translated": true
  },
  "4.12721": {
    "en": "The formal concept is already given with an object, which falls under it. One cannot, therefore, introduce both, the objects which fall under a formal concept and the formal concept itself, as primitive ideas. One cannot, therefore, e.g. introduce (as Russell does) the concept of function and also special functions as primitive ideas; or the concept of number and definite numbers.",
    "zh": "形式概念在任何一个归属于它的对象那里都已经被给予了。因此，我们不能既把归摄于一个形式概念之下的那些对象、又把该形式概念本身当作基本观念来引入。所以，不能像罗素那样既引入函项概念又引入特殊的几个函项作为基本观念；也不能一边引入数的概念、一边又引入几个确定的数。",
    "de": "Der formale Begriff ist mit einem Gegenstand, der unter ihn fällt, bereits gegeben. Man kann also nicht Gegenstände eines formalen Begriffes und den formalen Begriff selbst als Grundbegriffe einführen. Man kann also z. B. nicht den Begriff der Funktion, und auch spezielle Funktionen (wie Russell) als Grundbegriffe einführen; oder den Begriff der Zahl und bestimmte Zahlen.",
    "enPM": "A formal concept is given immediately any object falling under it is given. It is not possible, therefore, to introduce as primitive ideas objects belonging to a formal concept and the formal concept itself. So it is impossible, for example, to introduce as primitive ideas both the concept of a function and specific functions, as Russell does; or the concept of a number and particular numbers.",
    "depth": 6,
    "translated": true
  },
  "4.1273": {
    "en": "If we want to express in logical symbolism the general proposition \"b is a successor of a\" we need for this an expression for the general term of the formal series:\n$aRb$,\n$(\\exists x):aRx.xRb$,\n$(\\exists x,y):aRx.xRy.yRb$,\n...  .\nThe general term of a formal series can only be expressed by a variable, for the concept symbolized by \"term of this formal series\" is a formal concept. (This Frege and Russell overlooked; the way in which they express general propositions like the above is, therefore, false; it contains a vicious circle.)\nWe can determine the general term of the formal series by giving its first term and the general form of the operation, which generates the following term out of the preceding proposition.",
    "zh": "如果我们想用逻辑符号系统来表达一般命题「b是a的后继者」，那么我们就需要某种东西来表达形式序列的一般项：aRb，(∃x):aRx.xRb，(∃x,y):aRx.xRy.yRb，……形式系列的一般项只能通过一个变项来表达，因为这个「形式序列的项」所标示的概念是一个形式概念。（这是弗雷格和罗素忽视了的一点；因此他们表达如上的一般命题的方式是错误的；它包含着一个恶性循环。）我们可以这样来规定形式序列的一般项：给出它的第一项和那个运演的一般形式——该运演从前面一项产生出下面一项。",
    "de": "Wollen wir den allgemeinen Satz: „b ist ein Nachfolger von a“ in der Begriffsschrift ausdrücken, so brauchen wir hierzu einen Ausdruck für das allgemeine Glied der Formenreihe:\naRb,\n(∃x):aRx.xRb,\n(∃x,y):aRx.xRy.yRb,\n…  .\nDas allgemeine Glied einer Formenreihe kann man nur durch eine Variable ausdrücken, denn der Begriff: Glied dieser Formenreihe, ist ein formaler Begriff. (Dies haben Frege und Russell übersehen; die Art und Weise, wie sie allgemeine Sätze wie den obigen ausdrücken wollen, ist daher falsch; sie enthält einen circulus vitiosus.)\nWir können das allgemeine Glied der Formenreihe bestimmen, indem wir ihr erstes Glied angeben und die allgemeine Form der Operation, welche das folgende Glied aus dem vorhergehenden Satz erzeugt.",
    "enPM": "If we want to express in conceptual notation the general proposition, ‘b is a successor of a’, then we require an expression for the general term of the series of forms\naRb,\n(∃x):aRx.xRb,\n(∃x,y):aRx.xRy.yRb,\n…  .\nIn order to express the general term of a series of forms, we must use a variable, because the concept ‘term of that series of forms’ is a formal concept. (This is what Frege and Russell overlooked: consequently the way in which they want to express general propositions like the one above is incorrect; it contains a vicious circle.)\nWe can determine the general term of a series of forms by giving its first term and the general form of the operation that produces the next term out of the proposition that precedes it.",
    "depth": 5,
    "translated": true
  },
  "4.1274": {
    "en": "The question about the existence of a formal concept is senseless. For no proposition can answer such a question.\n(For example, one cannot ask: \"Are there unanalysable subject-predicate propositions?\")",
    "zh": "关于一个形式概念是否存在的问题是无含义的。因为没有命题能够回答这样的问题。（例如，不能问：「有不可分析的主谓式命题吗？」）",
    "de": "Die Frage nach der Existenz eines formalen Begriffes ist unsinnig. Denn kein Satz kann eine solche Frage beantworten.\n(Man kann also z. B. nicht fragen: „Gibt es unanalysierbare Subjekt-Prädikatsätze?“)",
    "enPM": "To ask whether a formal concept exists is nonsensical. For no proposition can be the answer to such a question.\n(So, for example, the question, ‘Are there unanalysable subject-predicate propositions?’ cannot be asked.)",
    "depth": 5,
    "translated": true
  },
  "4.128": {
    "en": "The logical forms are anumerical.\nTherefore there are in logic no pre-eminent numbers, and therefore there is no philosophical monism or dualism, etc.",
    "zh": "逻辑形式都是无（特定）数量的。因此在逻辑中没有处于优势的数，因此也没有哲学的一元论或二元论，等等。",
    "de": "Die logischen Formen sind zahllos.\nDarum gibt es in der Logik keine ausgezeichneten Zahlen und darum gibt es keinen philosophischen Monismus oder Dualismus, etc.",
    "enPM": "Logical forms are without number.\nHence there are no pre-eminent numbers in logic, and hence there is no possibility of philosophical monism or dualism, etc.",
    "depth": 4,
    "translated": true
  },
  "4.2": {
    "en": "The sense of a proposition is its agreement and disagreement with the possibilities of the existence and non-existence of the atomic facts.",
    "zh": "命题的含义是它与事态之存在和非存在的可能性的一致和不一致。",
    "de": "Der Sinn des Satzes ist seine Übereinstimmung und Nichtübereinstimmung mit den Möglichkeiten des Bestehens und Nichtbestehens der Sachverhalte.",
    "enPM": "The sense of a proposition is its agreement and disagreement with possibilities of existence and non-existence of states of affairs.",
    "depth": 2,
    "translated": true
  },
  "4.21": {
    "en": "The simplest proposition, the elementary proposition, asserts the existence of an atomic fact.",
    "zh": "最简单的命题——基本命题——断言一个事态的实存。",
    "de": "Der einfachste Satz, der Elementarsatz, behauptet das Bestehen eines Sachverhaltes.",
    "enPM": "The simplest kind of proposition, an elementary proposition, asserts the existence of a state of affairs.",
    "depth": 3,
    "translated": true
  },
  "4.211": {
    "en": "It is a sign of an elementary proposition, that no elementary proposition can contradict it.",
    "zh": "基本命题的一个标志是：没有基本命题能够与它矛盾。",
    "de": "Ein Zeichen des Elementarsatzes ist es, dass kein Elementarsatz mit ihm in Widerspruch stehen kann.",
    "enPM": "It is a sign of a proposition’s being elementary that there can be no elementary proposition contradicting it.",
    "depth": 4,
    "translated": true
  },
  "4.22": {
    "en": "The elementary proposition consists of names. It is a connexion, a concatenation, of names.",
    "zh": "基本命题是由诸名称构成的。它是诸名称的一种联系、一种联结。",
    "de": "Der Elementarsatz besteht aus Namen. Er ist ein Zusammenhang, eine Verkettung, von Namen.",
    "enPM": "An elementary proposition consists of names. It is a nexus, a concatenation, of names.",
    "depth": 3,
    "translated": true
  },
  "4.221": {
    "en": "It is obvious that in the analysis of propositions we must come to elementary propositions, which consist of names in immediate combination.\nThe question arises here, how the propositional connexion comes to be.",
    "zh": "很明显，在对命题的分析中，我们必须达到直接地联结起来的诸名称所组成的基本命题。这里便提出了一个问题：命题的联结是如何发生的。",
    "de": "Es ist offenbar, dass wir bei der Analyse der Sätze auf Elementarsätze kommen müssen, die aus Namen in unmittelbarer Verbindung bestehen.\nEs frägt sich hier, wie kommt der Satzverband zustande.",
    "enPM": "It is obvious that the analysis of propositions must bring us to elementary propositions which consist of names in immediate combination.\nThis raises the question how such combination into propositions comes about.",
    "depth": 4,
    "translated": true
  },
  "4.2211": {
    "en": "Even if the world is infinitely complex, so that every fact consists of an infinite number of atomic facts and every atomic fact is composed of an infinite number of objects, even then there must be objects and atomic facts.",
    "zh": "即使世界是无限复杂的，以至于每个事实都是由无限多个事态所组成，而每个事态又是由无限多个对象所复合而成的，那么即使如此，也还是必须有诸对象和诸事态。",
    "de": "Auch wenn die Welt unendlich komplex ist, so dass jede Tatsache aus unendlich vielen Sachverhalten besteht und jeder Sachverhalt aus unendlich vielen Gegenständen zusammengesetzt ist, auch dann müsste es Gegenstände und Sachverhalte geben.",
    "enPM": "Even if the world is infinitely complex, so that every fact consists of infinitely many states of affairs and every state of affairs is composed of infinitely many objects, there would still have to be objects and states of affairs.",
    "depth": 5,
    "translated": true
  },
  "4.23": {
    "en": "The name occurs in the proposition only in the context of the elementary proposition.",
    "zh": "名称仅仅在基本命题的关联中才出现在命题之中。",
    "de": "Der Name kommt im Satz nur im Zusammenhange des Elementarsatzes vor.",
    "enPM": "It is only in the nexus of an elementary proposition that a name occurs in a proposition.",
    "depth": 3,
    "translated": true
  },
  "4.24": {
    "en": "The names are the simple symbols, I indicate them by single letters (x, y, z).\nThe elementary proposition I write as function of the names, in the form $fx$, $\\phi(x,y)$, etc.\nOr I indicate it by the letters $p$, $q$, $r$.",
    "zh": "诸名称是简单的诸符号。我用单独的字母（x, y, z）来标示它们。我把基本命题写为这些名称的函项，形式为：fx，φ(x,y)，等等。或者我用字母p, q, r来标示它。",
    "de": "Die Namen sind die einfachen Symbole, ich deute sie durch einzelne Buchstaben („x“, „y“, „z“) an.\nDen Elementarsatz schreibe ich als Funktion der Namen in der Form: „fx“, „φ(x,y)“, etc.\nOder ich deute ihn durch die Buchstaben p, q, r an.",
    "enPM": "Names are the simple symbols: I indicate them by single letters (‘x’, ‘y’, ‘z’).\nI write elementary propositions as functions of names, so that they have the form ‘fx’, ‘φ(x,y)’, etc.\nOr I indicate them by the letters ‘p’, ‘q’, ‘r’.",
    "depth": 3,
    "translated": true
  },
  "4.241": {
    "en": "If I use two signs with one and the same meaning, I express this by putting between them the sign \"=\".\n\"a=b\" means then, that the sign \"a\" is replaceable by the sign \"b\".\n(If I introduce by an equation a new sign \"b\", by determining that it shall replace a previously known sign \"a\", I write the equation---definition---(like Russell) in the form \"a=b Def.\". A definition is a symbolic rule.)",
    "zh": "如果我使用两个具有同一个意谓的记号，那么我通过在这两个记号之间放入记号「=」来表达这一点。这样一来，「a=b」就意味着：记号「a」可以用记号「b」来替换。（如果我通过一个等式来引入一个新的记号——即规定它将替换一个已知的记号——那么我就（像罗素那样）把该等式——定义——写成「a=b Def.」的形式。定义是一条符号规则。）",
    "de": "Gebrauche ich zwei Zeichen in ein und derselben Bedeutung, so drücke ich dies aus, indem ich zwischen beide das Zeichen „=“ setze.\n„a=b“ heißt also: das Zeichen „a“ ist durch das Zeichen „b“ ersetzbar.\n(Führe ich durch eine Gleichung ein neues Zeichen „b“ ein, indem ich bestimme, es solle ein bereits bekanntes Zeichen „a“ ersetzen, so schreibe ich die Gleichung – Definition – (wie Russell) in der Form „a=b Def.“. Die Definition ist eine Zeichenregel.)",
    "enPM": "When I use two signs with one and the same meaning, I express this by putting the sign ‘=’ between them.\nSo ‘a=b’ means that the sign ‘b’ can be substituted for the sign ‘a’.\n(If I use an equation to introduce a new sign ‘b’, laying down that it shall serve as a substitute for a sign ‘a’ that is already known, then, like Russell, I write the equation—definition—in the form ‘a=b Def.’ A definition is a rule dealing with signs.)",
    "depth": 4,
    "translated": true
  },
  "4.242": {
    "en": "Expressions of the form \"a=b\" are therefore only expedients in presentation: They assert nothing about the meaning of the signs \"a\" and \"b\".",
    "zh": "因此「a=b」这种形式的表达式仅仅是一些表述上的权宜之计：它们对于记号「a」和「b」的意谓什么也没有断言。",
    "de": "Ausdrücke von der Form „a=b“ sind also nur Behelfe der Darstellung; sie sagen nichts über die Bedeutung der Zeichen „a“, „b“ aus.",
    "enPM": "Expressions of the form ‘a=b’ are, therefore, mere representational devices. They state nothing about the meaning of the signs ‘a’ and ‘b’.",
    "depth": 4,
    "translated": true
  },
  "4.243": {
    "en": "Can we understand two names without knowing whether they signify the same thing or two different things? Can we understand a proposition in which two names occur, without knowing if they mean the same or different things?\nIf I know the meaning of an English and a synonymous German word, it is impossible for me not to know that they are synonymous, it is impossible for me not to be able to translate them into one another.\nExpressions like \"a=a\", or expressions deduced from these are neither elementary propositions nor otherwise significant signs. (This will be shown later.)",
    "zh": "我们能够在不加道的两个名称是否意指同一个事物还是两个不同的事物的情况下理解这两个名称吗？我们能够在不加道两个名称是意指同一个事物还是意指不同的事物的情况下理解一个在其中这两个名称出现的命题吗？如果我知道一个英语词和一个同义的法语词的意谓，那么我是不可能不知道它们是同义的；我不可能不将它们互相翻译出来。像「a=a」或从它推导出的表达式之类的表达式，既不是基本命题，也不是自身有含义的记号。（这将在后面显示出来。）",
    "de": "Können wir zwei Namen verstehen, ohne zu wissen, ob sie dasselbe Ding oder zwei verschiedene Dinge bezeichnen? – Können wir einen Satz, worin zwei Namen vorkommen, verstehen, ohne zu wissen, ob sie Dasselbe oder Verschiedenes bedeuten?\nKenne ich etwa die Bedeutung eines englischen und eines gleichbedeutenden deutschen Wortes, so ist es unmöglich, dass ich nicht weiß, dass die beiden gleichbedeutend sind; es ist unmöglich, dass ich sie nicht ineinander übersetzen kann.\nAusdrücke wie „a=a“, oder von diesen abgeleitete, sind weder Elementarsätze, noch sonst sinnvolle Zeichen. (Dies wird sich später zeigen.)",
    "enPM": "Can we understand two names without knowing whether they signify the same thing or two different things?—Can we understand a proposition in which two names occur without knowing whether their meaning is the same or different?\nSuppose I know the meaning of an English word and of a German word that means the same: then it is impossible for me to be unaware that they do mean the same; I must be capable of translating each into the other.\nExpressions like ‘a=a’, and those derived from them, are neither elementary propositions nor is there any other way in which they have sense. (This will become evident later.)",
    "depth": 4,
    "translated": true
  },
  "4.25": {
    "en": "If the elementary proposition is true, the atomic fact exists; if it is false the atomic fact does not exist.",
    "zh": "如果基本命题是真的，那么该事态就实存着；如果基本命题是假的，那么该事态就不实存。",
    "de": "Ist der Elementarsatz wahr, so besteht der Sachverhalt; ist der Elementarsatz falsch, so besteht der Sachverhalt nicht.",
    "enPM": "If an elementary proposition is true, the state of affairs exists: if an elementary proposition is false, the state of affairs does not exist.",
    "depth": 3,
    "translated": true
  },
  "4.26": {
    "en": "The specification of all true elementary propositions describes the world completely. The world is completely described by the specification of all elementary propositions plus the specification, which of them are true and which false.",
    "zh": "将所有真的基本命题都列举出来，就完全描述了世界。世界通过列举所有的基本命题再加上其中哪些为真哪些为假这一点，就被完全描述了。",
    "de": "Die Angabe aller wahren Elementarsätze beschreibt die Welt vollständig. Die Welt ist vollständig beschrieben durch die Angaben aller Elementarsätze plus der Angabe, welche von ihnen wahr und welche falsch sind.",
    "enPM": "If all true elementary propositions are given, the result is a complete description of the world. The world is completely described by giving all elementary propositions, and adding which of them are true and which false.",
    "depth": 3,
    "translated": true
  },
  "4.27": {
    "en": "With regard to the existence of $n$ atomic facts there are\n$K_n = $\\sum_{v=0}^n \\binom{n}{v}$ possibilities.\nIt is possible for all combinations of atomic facts to exist, and the others not to exist.",
    "zh": "对于n个事态，其存在的可能性有K_n = Σ_{ν=0}^{n} (n,ν)种可能性。所有的诸事态的组合都可以存在，而其他的不必存在。",
    "de": "Bezüglich des Bestehens und Nichtbestehens von n Sachverhalten gibt es Kn =\nEs können alle Kombinationen der Sachverhalte bestehen, die andern nicht bestehen.",
    "enPM": "\nOf these states of affairs any combination can exist and the remainder not exist.",
    "depth": 3,
    "translated": true
  },
  "4.28": {
    "en": "To these combinations correspond the same number of possibilities of the truth---and falsehood---of n elementary propositions.",
    "zh": "与这些组合相对应的是n个基本命题同样多的真和假的可能性。",
    "de": "Diesen Kombinationen entsprechen ebenso viele Möglichkeiten der Wahrheit – und Falschheit – von n Elementarsätzen.",
    "enPM": "There correspond to these combinations the same number of possibilities of truth—and falsity—for n elementary propositions.",
    "depth": 3,
    "translated": true
  },
  "4.3": {
    "en": "The truth-possibilities of the elementary propositions mean the possibilities of the existence and non-existence of the atomic facts.",
    "zh": "基本命题的真值可能性表示事态之存在和非存在的可能性。",
    "de": "Die Wahrheitsmöglichkeiten der Elementarsätze bedeuten die Möglichkeiten des Bestehens und Nichtbestehens der Sachverhalte.",
    "enPM": "Truth-possibilities of elementary propositions mean possibilities of existence and non-existence of states of affairs.",
    "depth": 2,
    "translated": true
  },
  "4.31": {
    "en": "The truth-possibilities can be presented by schemata of the following kind (\"T\" means \"true\", \"F\" \"false\". The rows of T's and F's under the row of the elementary propositions mean their truth-possibilities in an easily intelligible symbolism).\n| p | q | r |\n|---+---+---|\n| T | T | T |\n| F | T | T |\n| T | F | T |\n| T | T | F |\n| F | F | T |\n| F | T | F |\n| T | F | F |\n| F | F | F |\n| p | q |\n|---+---|\n| T | T |\n| F | T |\n| T | F |\n| F | F |\n| p |\n|---|\n| T |\n| F |",
    "zh": "真值可能性可以按照下面这种样式被表现出来（「W」表示「真」，「F」表示「假」。在基本命题这一行下面各行的W和F以用一种易于理解的符号系统来表示这些基本命题的真值可能性。）",
    "de": "Die Wahrheitsmöglichkeiten können wir durch Schemata folgender Art darstellen („W“ bedeutet „wahr“, „F“, „falsch“. Die Reihen der „W“ und „F“ unter der Reihe der Elementarsätze bedeuten in leichtverständlicher Symbolik deren Wahrheitsmöglichkeiten):",
    "enPM": "We can represent truth-possibilities by schemata of the following kind (‘T’ means ‘true’, ‘F’ means ‘false’; the rows of ‘T’s’ and ‘F’s’ under the row of elementary propositions symbolize their truth-possibilities in a way that can easily be understood):",
    "depth": 3,
    "translated": true
  },
  "4.4": {
    "en": "A proposition is the expression of agreement and disagreement with the truth-possibilities of the elementary propositions.",
    "zh": "命题是与基本命题的真值可能性一致和不一致的表达。",
    "de": "Der Satz ist der Ausdruck der Übereinstimmung und Nichtübereinstimmung mit den Wahrheitsmöglichkeiten der Elementarsätze.",
    "enPM": "A proposition is an expression of agreement and disagreement with truth-possibilities of elementary propositions.",
    "depth": 2,
    "translated": true
  },
  "4.41": {
    "en": "The truth-possibilities of the elementary propositions are the conditions of the truth and falsehood of the propositions.",
    "zh": "基本命题的真值可能性是诸命题的真和假的条件。",
    "de": "Die Wahrheitsmöglichkeiten der Elementarsätze sind die Bedingungen der Wahrheit und Falschheit der Sätze.",
    "enPM": "Truth-possibilities of elementary propositions are the conditions of the truth and falsity of propositions.",
    "depth": 3,
    "translated": true
  },
  "4.411": {
    "en": "It seems probable even at first sight that the introduction of the elementary propositions is fundamental for the comprehension of the other kinds of propositions. Indeed the comprehension of the general propositions depends palpably on that of the elementary propositions.",
    "zh": "乍看起来，引入基本命题对于理解所有其他种类的命题来说似乎也是基础性的。实际上，对于一般命题的理解明显依赖于对基本命题的理解。",
    "de": "Es ist von vornherein wahrscheinlich, dass die Einführung der Elementarsätze für das Verständnis aller anderen Satzarten grundlegend ist. Ja, das Verständnis der allgemeinen Sätze hängt fühlbar von dem der Elementarsätze ab.",
    "enPM": "It immediately strikes one as probable that the introduction of elementary propositions provides the basis for understanding all other kinds of proposition. Indeed the understanding of general propositions palpably depends on the understanding of elementary propositions.",
    "depth": 4,
    "translated": true
  },
  "4.42": {
    "en": "With regard to the agreement and disagreement of a proposition with the truth-possibilities of n elementary propositions there are $\\sum_{\\kappa=0}^{K_n} \\binom{K_n}{\\kappa} = L_n$ possibilities.",
    "zh": "关于一个命题与n个基本命题的一致性或者不一致性，有∑_{κ=0}^{K_n} (K_n,κ) = L_n种可能性。",
    "de": "Bezüglich der Übereinstimmung und Nichtübereinstimmung eines Satzes mit den Wahrheitsmöglichkeiten von n Elementarsätzen gibt es Kn",
    "enPM": "",
    "depth": 3,
    "translated": true
  },
  "4.43": {
    "en": "Agreement with the truth-possibilities can be expressed by co-ordinating with them in the schema the mark \"T\" (true).\nAbsence of this mark means disagreement.",
    "zh": "与诸真值可能性的一致，可以通过在诸基本命题的样式相应位置标上「T，即「真」」而被表达出来。没有这个标记就表示不一致。",
    "de": "Die Übereinstimmung mit den Wahrheitsmöglichkeiten können wir dadurch ausdrücken, indem wir ihnen im Schema etwa das Abzeichen „W“ (wahr) zuordnen.\nDas Fehlen dieses Abzeichens bedeutet die Nichtübereinstimmung.",
    "enPM": "We can express agreement with truth-possibilities by correlating the mark ‘T’ (true) with them in the schema.\nThe absence of this mark means disagreement.",
    "depth": 3,
    "translated": true
  },
  "4.431": {
    "en": "The expression of the agreement and disagreement with the truth-possibilities of the elementary propositions expresses the truth-conditions of the proposition.\nThe proposition is the expression of its truth-conditions.\n(Frege has therefore quite rightly put them at the beginning, as explaining the signs of his logical symbolism. Only Frege's explanation of the truth-concept is false: if \"the true\" and \"the false\" were real objects and the arguments in $\\neg p$, etc., then the sense of $\\neg p$ would by no means be determined by Frege's determination.)",
    "zh": "与基本命题的诸真值可能性的一致和不一致的那个表达式，表达了该命题的真值条件。该命题就是它的诸真值条件的表达式。（因此，从他的命题的概念来讲，弗雷格正确地将它们作为诸真值条件的解释的起点。只是弗雷格关于真值概念的解释是错误的：假如「真」和「假」是真实的对象而且那些~p等等中的主目，那么按照弗雷格的决定，~p的含义也绝不是规定了。）",
    "de": "Der Ausdruck der Übereinstimmung und Nichtübereinstimmung mit den Wahrheitsmöglichkeiten der Elementarsätze drückt die Wahrheitsbedingungen des Satzes aus.\nDer Satz ist der Ausdruck seiner Wahrheitsbedingungen.\n(Frege hat sie daher ganz richtig als Erklärung der Zeichen seiner Begriffsschrift vorausgeschickt. Nur ist die Erklärung des Wahrheitsbegriffes bei Frege falsch: Wären „das Wahre“ und „das Falsche“ wirklich Gegenstände und die Argumente in ~p etc. dann wäre nach Freges Bestimmung der Sinn von „~p“ keineswegs bestimmt.)",
    "enPM": "The expression of agreement and disagreement with the truth possibilities of elementary propositions expresses the truth-conditions of a proposition.\nA proposition is the expression of its truth-conditions.\n(Thus Frege was quite right to use them as a starting point when he explained the signs of his conceptual notation. But the explanation of the concept of truth that Frege gives is mistaken: if ‘the true’ and ‘the false’ were really objects, and were the arguments in ~p etc., then Frege’s method of determining the sense of ‘~p’ would leave it absolutely undetermined.)",
    "depth": 4,
    "translated": true
  },
  "4.44": {
    "en": "The sign which arises from the co-ordination of that mark \"T\" with the truth-possibilities is a propositional sign.",
    "zh": "通过记号「T」与诸真值可能性的协调而产生的那个记号就是一个命题记号。",
    "de": "Das Zeichen, welches durch die Zuordnung jener Abzeichen „W“ und der Wahrheitsmöglichkeiten entsteht, ist ein Satzzeichen.",
    "enPM": "The sign that results from correlating the mark ‘T’ with truth-possibilities is a propositional sign.",
    "depth": 3,
    "translated": true
  },
  "4.441": {
    "en": "It is clear that to the complex of the signs \"F\" and \"T\" no object (or complex of objects) corresponds; any more than to horizontal and vertical lines or to brackets. There are no \"logical objects\".\nSomething analogous holds of course for all signs, which express the same as the schemata of \"T\" and \"F\".",
    "zh": "很明显，对于记号「F」和「W」的联结，没有对象（或诸对象的复合物）与之对应；就像没有对象对应于横线或竖线或弧线一样。「逻辑对象」不存在。凡是与「T」-「F」样式中那些表示真值标记的图式表达了同样的东西的所有记号法，显然都是等价的。",
    "de": "Es ist klar, dass dem Komplex der Zeichen „F“ und „W“ kein Gegenstand (oder Komplex von Gegenständen) entspricht; so wenig, wie den horizontalen und vertikalen Strichen oder den Klammern. – „Logische Gegenstände“ gibt es nicht.\nAnaloges gilt natürlich für alle Zeichen, die dasselbe ausdrücken wie die Schemata der „W“ und „F“.",
    "enPM": "It is clear that a complex of the signs ‘F’ and ‘T’ has no object (or complex of objects) corresponding to it, just as there is none corresponding to the horizontal and vertical lines or to the brackets.—There are no ‘logical objects’.\nOf course the same applies to all signs that express what the schemata of ‘T’s’ and ‘F’s’ express.",
    "depth": 4,
    "translated": true
  },
  "4.442": {
    "en": "Thus e.g.\n| p | q |   |\n|---+---+---|\n| T | T | T |\n| F | T | T |\n| T | F |   |\n| F | F | T |\nis a propositional sign.\n(Frege's assertion sign $\\vdash$ is logically altogether meaningless; in Frege (and Russell) it only shows that these authors hold as true the propositions marked in this way.\n$\\vdash$ belongs therefore to the propositions no more than does the number of the proposition. A proposition cannot possibly assert of itself that it is true.\nIf the sequence of the truth-possibilities in the schema is once for all determined by a rule of combination, then the last column is by itself an expression of the truth-conditions. If we write this column as a row the propositional sign becomes:\n\"(TT--T)  (p, q)\",\nor more plainly:\n\"(TTFT)  (p, q)\".\n(The number of places in the left-hand bracket is determined by the number of terms in the right-hand bracket.)",
    "zh": "例如以下就是一个命题记号：（弗雷格『判断符号』⊢在逻辑上是完全没有含义的；它在弗雷格和罗素那里只是表示，这两位作者认为用该记号所标示的命题是真的。因此，⊢和命题的编号一样，并不属于命题的构成部分。不可能一个命题自己断言自己是真的。）如果谁样式中那些诸真值可能性的排列次序是通过一条组合规则被一劳永逸地固定下来，那么最后这一纵列单独地将真值条件表达出来了。如果我们现在把这一纵列写成一个横列，则这个命题记号将变成：「(WW-W)(p,q)」或者更清楚一些：「(WWFW)(p,q)」（左边括号中的数字的位数由右边括号中的诸项的数目来决定）。",
    "de": "Es ist z. B.:\nein Satzzeichen.\n(Frege’s „Urteilsstrich“ „⊢“ ist logisch ganz bedeutunglos; er zeigt bei Frege (und Russell) nur an, dass diese Autoren die so bezeichneten Sätze für wahr halten. \n„⊢“ gehört daher ebenso wenig zum Satzgefüge, wie etwa die Nummer des Satzes. Ein Satz kann unmöglich von sich selbst aussagen, dass er wahr ist.)\nIst die Reihenfolge der Wahrheitsmöglichkeiten im Schema durch eine Kombinationsregel ein für allemal festgesetzt, dann ist die letzte Kolonne allein schon ein Ausdruck der Wahrheitsbedingungen. Schreiben wir diese Kolonne als Reihe hin, so wird das Satzzeichen zu\n„ (WW–W)  (p, q)“\noder deutlicher\n„ (WWFW)  (p, q)“.\n(Die Anzahl der Stellen in der linken Klammer ist durch die Anzahl der Glieder in der rechten bestimmt.)",
    "enPM": "For example, the following is a propositional sign:\n(Frege’s ‘judgement stroke’ ‘⊢’ is logically quite meaningless: in the works of Frege (and Russell) it simply indicates that these authors hold the propositions marked with this sign to be true. Thus ‘⊢’ is no more a component part of a proposition than is, for instance, the proposition’s number. It is quite impossible for a proposition to state that it itself is true.)\nIf the order or the truth-possibilities in a schema is fixed once and for all by a combinatory rule, then the last column by itself will be an expression of the truth-conditions. If we now write this column as a row, the propositional sign will become\n“(TT–T)  (p, q)”,\nor more explicitly\n“(TTFT)  (p, q)”.\n(The number of places in the left-hand pair of brackets is determined by the number of terms in the right-hand pair.)",
    "depth": 4,
    "translated": true
  },
  "4.45": {
    "en": "For $n$ elementary propositions there are $L_n$ possible groups of truth-conditions.\nThe groups of truth-conditions which belong to the truth-possibilities of a number of elementary propositions can be ordered in a series.",
    "zh": "对于n个基本命题，存在着L_n个可能的基本命题的真-假组合的类群组。对n个基本命题的真值可能性的一致和不一致的组合的类群组可以由L_n中的任意一个组合来构成。",
    "de": "Für n Elementarsätze gibt es Ln mögliche Gruppen von Wahrheitsbedingungen.\nDie Gruppen von Wahrheitsbedingungen, welche zu den Wahrheitsmöglichkeiten einer Anzahl von Elementarsätzen gehören, lassen sich in eine Reihe ordnen.",
    "enPM": "For n elementary propositions there are Ln possible groups of truth-conditions.\nThe groups of truth-conditions that are obtainable from the truth-possibilities of a given number of elementary propositions can be arranged in a series.",
    "depth": 3,
    "translated": true
  },
  "4.46": {
    "en": "Among the possible groups of truth-conditions there are two extreme cases.\nIn the one case the proposition is true for all the truth-possibilities of the elementary propositions. We say that the truth-conditions are tautological.\nIn the second case the proposition is false for all the truth-possibilities. The truth-conditions are self-contradictory.\nIn the first case we call the proposition a tautology, in the second case a contradiction.",
    "zh": "在诸可能的真值条件之间，有三种可能条件。——极端的情况是，在某个命题的诸真值可能性全都是真的；真值条件就是重言式的。第二种情况是该命题对于所有的真值可能性都是假的：真值条件是矛盾式的。在第一个情况下我们称一个命题为重言式，在第二个情况下称它为矛盾式。",
    "de": "Unter den möglichen Gruppen von Wahrheitsbedingungen gibt es zwei extreme Fälle.\nIn dem einen Fall ist der Satz für sämtliche Wahrheitsmöglichkeiten der Elementarsätze wahr. Wir sagen, die Wahrheitsbedingungen sind tautologisch.\nIm zweiten Fall ist der Satz für sämtliche Wahrheitsmöglichkeiten falsch: Die Wahrheitsbedingungen sind kontradiktorisch.\nIm ersten Fall nennen wir den Satz eine Tautologie, im zweiten Fall eine Kontradiktion.",
    "enPM": "Among the possible groups of truth-conditions there are two extreme cases.\nIn one of these cases the proposition is true for all the truth-possibilities of the elementary propositions. We say that the truth-conditions are tautological.\nIn the second case the proposition is false for all the truth-possibilities: the truth-conditions are contradictory.\nIn the first case we call the proposition a tautology; in the second, a contradiction.",
    "depth": 3,
    "translated": true
  },
  "4.461": {
    "en": "The proposition shows what it says, the tautology and the contradiction that they say nothing.\nThe tautology has no truth-conditions, for it is unconditionally true; and the contradiction is on no condition true.\nTautology and contradiction are without sense.\n(Like the point from which two arrows go out in opposite directions.)\n(I know, e.g. nothing about the weather, when I know that it rains or does not rain.)",
    "zh": "命题显示它们所说出的事情；重言式和矛盾式则显示它们没有说出任何事情。重言式没有任何真值条件，因为它是无条件地真的；而矛盾式则是在任何条件下都不是真的。因此重言式和矛盾式是没有含义的。（就像一个点——两支箭从这里以相反方向射出。）举例说，我对于下列命题是什么都不知道：下雨了或者没有下雨。但是，对于命题「或者下雨了，或者没有下雨」，我是什么也不知道。",
    "de": "Der Satz zeigt was er sagt, die Tautologie und die Kontradiktion, dass sie nichts sagen.\nDie Tautologie hat keine Wahrheitsbedingungen, denn sie ist bedingungslos wahr; und die Kontradiktion ist unter keiner Bedingung wahr.\nTautologie und Kontradiktion sind sinnlos.\n(Wie der Punkt, von dem zwei Pfeile in entgegengesetzter Richtung auseinandergehen.)\n(Ich weiß z. B. nichts über das Wetter, wenn ich weiß, dass es regnet oder nicht regnet.)",
    "enPM": "Propositions show what they say: tautologies and contradictions show that they say nothing.\nA tautology has no truth-conditions, since it is unconditionally true: and a contradiction is true on no condition.\nTautologies and contradictions lack sense.\n(Like a point from which two arrows go out in opposite directions to one another.)\n(For example, I know nothing about the weather when I know that it is either raining or not raining.)",
    "depth": 4,
    "translated": true
  },
  "4.4611": {
    "en": "Tautology and contradiction are, however, not senseless; they are part of the symbolism, in the same way that \"0\" is part of the symbolism of Arithmetic.",
    "zh": "但重言式和矛盾式并不是无含义的；它们是属于符号系统，就像「0」是属于算术符号一样。",
    "de": "Tautologie und Kontradiktion sind aber nicht unsinnig; sie gehören zum Symbolismus, und zwar ähnlich wie die „0“ zum Symbolismus der Arithmetik.",
    "enPM": "Tautologies and contradictions are not, however, nonsensical. They are part of the symbolism, much as ‘0’ is part of the symbolism of arithmetic.",
    "depth": 5,
    "translated": true
  },
  "4.462": {
    "en": "Tautology and contradiction are not pictures of the reality. They present no possible state of affairs. For the one allows every possible state of affairs, the other none.\nIn the tautology the conditions of agreement with the world---the presenting relations---cancel one another, so that it stands in no presenting relation to reality.",
    "zh": "重言式和矛盾式都不是实在的图像。它们不描画任何可能的情况。因为前者容许任何可能的情况，后者不容许任何。重言式中与实在达成一致的条件是——它们是互相抵消的——彼此抵消以致它们与实在不具有那种表现的关系。",
    "de": "Tautologie und Kontradiktion sind nicht Bilder der Wirklichkeit. Sie stellen keine mögliche Sachlage dar. Denn jene lässt jede mögliche Sachlage zu, diese keine.\nIn der Tautologie heben die Bedingungen der Übereinstimmung mit der Welt – die darstellenden Beziehungen – einander auf, so dass sie in keiner darstellenden Beziehung zur Wirklichkeit steht.",
    "enPM": "Tautologies and contradictions are not pictures of reality. They do not represent any possible situations. For the former admit all possible situations, and latter none.\nIn a tautology the conditions of agreement with the world—the representational relations—cancel one another, so that it does not stand in any representational relation to reality.",
    "depth": 4,
    "translated": true
  },
  "4.463": {
    "en": "The truth-conditions determine the range, which is left to the facts by the proposition.\n(The proposition, the picture, the model, are in a negative sense like a solid body, which restricts the free movement of another: in a positive sense, like the space limited by solid substance, in which a body may be placed.)\nTautology leaves to reality the whole infinite logical space; contradiction fills the whole logical space and leaves no point to reality. Neither of them, therefore, can in any way determine reality.",
    "zh": "真值条件规定了那些留给命题的事实范围。（命题：一幅图像，一个模型能在肯定的意义上说：该空间必须是空的，这恰恰是规定了这空间的填充方式。）命题通过它的逻辑脚手架来决定逻辑的空间。命题在全部逻辑空间中范围了逻辑空间（它事实上描述了这样的逻辑空间）。",
    "de": "Die Wahrheitsbedingungen bestimmen den Spielraum, der den Tatsachen durch den Satz gelassen wird.\n(Der Satz, das Bild, das Modell, sind im negativen Sinne wie ein fester Körper, der die Bewegungsfreiheit der anderen beschränkt; im positiven Sinne, wie der von fester Substanz begrenzte Raum, worin ein Körper Platz hat.)\nDie Tautologie lässt der Wirklichkeit den ganzen – unendlichen – logischen Raum; die Kontradiktion erfüllt den ganzen logischen Raum und lässt der Wirklichkeit keinen Punkt. Keine von beiden kann daher die Wirklichkeit irgendwie bestimmen.",
    "enPM": "The truth-conditions of a proposition determine the range that it leaves open to the facts.\n(A proposition, a picture, or a model is, in the negative sense, like a solid body that restricts the freedom of movement of others, and, in the positive sense, like a space bounded by solid substance in which there is room for a body.)\nA tautology leaves open to reality the whole—the infinite whole—of logical space: a contradiction fills the whole of logical space leaving no point of it for reality. Thus neither of them can determine reality in any way.",
    "depth": 4,
    "translated": true
  },
  "4.464": {
    "en": "The truth of tautology is certain, of propositions possible, of contradiction impossible.\n(Certain, possible, impossible: here we have an indication of that gradation which we need in the theory of probability.)",
    "zh": "重言式的真是确实的、确定的（无条件地真的），但命题的真可以是可能的，矛盾式的真是不可能的。（确实，可能，不可能：在这里我们得到了概率论中我们所需的那若干等级度量的指示。）",
    "de": "Die Wahrheit der Tautologie ist gewiss, des Satzes möglich, der Kontradiktion unmöglich.\n(Gewiss, möglich, unmöglich: Hier haben wir das Anzeichen jener Gradation, die wir in der Wahrscheinlichkeitslehre brauchen.)",
    "enPM": "A tautology’s truth is certain, a proposition’s possible, a contradiction’s impossible.\n(Certain, possible, impossible: here we have the first indication of the scale that we need in the theory of probability.)",
    "depth": 4,
    "translated": true
  },
  "4.465": {
    "en": "The logical product of a tautology and a proposition says the same as the proposition. Therefore that product is identical with the proposition. For the essence of the symbol cannot be altered without altering its sense.",
    "zh": "重言式和命题的逻辑积说出和该命题同样的东西。因此，这个积与该命题是同一的。因为如果不能改变一个符号的含义，也不能改变这个符号的本质。",
    "de": "Das logische Produkt einer Tautologie und eines Satzes sagt dasselbe, wie der Satz. Also ist jenes Produkt identisch mit dem Satz. Denn man kann das Wesentliche des Symbols nicht ändern, ohne seinen Sinn zu ändern.",
    "enPM": "The logical product of a tautology and a proposition says the same thing as the proposition. This product, therefore, is identical with the proposition. For it is impossible to alter what is essential to a symbol without altering its sense.",
    "depth": 4,
    "translated": true
  },
  "4.466": {
    "en": "To a definite logical combination of signs corresponds a definite logical combination of their meanings; every arbitrary combination only corresponds to the unconnected signs.\nThat is, propositions which are true for every state of affairs cannot be combinations of signs at all, for otherwise there could only correspond to them definite combinations of objects.\n(And to no logical combination corresponds no combination of the objects.)\nTautology and contradiction are the limiting cases of the combination of symbols, namely their dissolution.",
    "zh": "诸记号的一种确定的逻辑结合对应着它们的意谓的一种确定的逻辑结合。它对应着每一种任意的结合。这就是说，对于那些一般地不是真的联系起来的形式，它们对应着那些意谓中的任何任意的结合。这意味着，那些一般地不为真的命题结合形式不能是「必然的」结合形式。",
    "de": "Einer bestimmten logischen Verbindung von Zeichen entspricht eine bestimmte logische Verbindung ihrer Bedeutungen; jede beliebige Verbindung entspricht nur den unverbundenen Zeichen.\nDas heißt, Sätze, die für jede Sachlage wahr sind, können überhaupt keine Zeichenverbindungen sein, denn sonst könnten ihnen nur bestimmte Verbindungen von Gegenständen entsprechen.\n(Und keiner logischen Verbindung entspricht keine Verbindung der Gegenstände.)\nTautologie und Kontradiktion sind die Grenzfälle der Zeichenverbindung, nämlich ihre Auflösung.",
    "enPM": "What corresponds to a determinate logical combination of signs is a determinate logical combination of their meanings. It is only to the uncombined signs that absolutely any combination corresponds.\nIn other words, propositions that are true for every situation cannot be combinations of signs at all, since, if they were, only determinate combinations of objects could correspond to them.\n(And what is not a logical combination has no combination of objects corresponding to it.)\nTautology and contradiction are the limiting cases—indeed the disintegration—of the combination of signs.",
    "depth": 4,
    "translated": true
  },
  "4.4661": {
    "en": "Of course the signs are also combined with one another in the tautology and contradiction, i.e. they stand in relations to one another, but these relations are meaningless, unessential to the symbol.",
    "zh": "诚然，诸记号在重言式和矛盾式中也可以以一定的逻辑关系结合，但这些关系自身在取消相互抵消，这样它们最终就不产生出任何有含义的东西来。",
    "de": "Freilich sind auch in der Tautologie und Kontradiktion die Zeichen noch mit einander verbunden, d. h. sie stehen in Beziehungen zu einander, aber diese Beziehungen sind bedeutungslos, dem Symbol unwesentlich.",
    "enPM": "Admittedly the signs are still combined with one another even in tautologies and contradictions—i.e. they stand in certain relations to one another: but these relations have no meaning, they are not essential to the symbol.",
    "depth": 5,
    "translated": true
  },
  "4.5": {
    "en": "Now it appears to be possible to give the most general form of proposition; i.e. to give a description of the propositions of some one sign language, so that every possible sense can be expressed by a symbol, which falls under the description, and so that every symbol which falls under the description can express a sense, if the meanings of the names are chosen accordingly.\nIt is clear that in the description of the most general form of proposition only what is essential to it may be described---otherwise it would not be the most general form.\nThat there is a general form is proved by the fact that there cannot be a proposition whose form could not have been foreseen (i.e. constructed). The general form of proposition is: Such and such is the case.",
    "zh": "现在似乎可以给出最一般的命题形式了；也就是说，给出来一个符号语言的命题的描述，使得每一个可能的含义都可以由一个满足该描述的符号来表达，使得每一个满足该描述的符号都可以表达一个含义，如果诸名称的意谓被适当地选择的话。显然，在描述最一般的命题形式时，只有它的本质的东西可以被描述——否则的话它就不是那最一般的形式。具有一般命题形式，这一点是被以下事实证明为真的，即不可能存在这样的一个命题，它的形式是不能被预见的（即构造的）。命题的一般形式就是这样这样的。",
    "de": "Nun scheint es möglich zu sein, die allgemeinste Satzform anzugeben: das heißt, eine Beschreibung der Sätze irgend einer Zeichensprache zu geben, so dass jeder mögliche Sinn durch ein Symbol, auf welches die Beschreibung passt, ausgedrückt werden kann, und dass jedes Symbol, worauf die Beschreibung passt, einen Sinn ausdrücken kann, wenn die Bedeutungen der Namen entsprechend gewählt werden.\nEs ist klar, dass bei der Beschreibung der allgemeinsten Satzform nur ihr Wesentliches beschrieben werden darf, – sonst wäre sie nämlich nicht die allgemeinste.\nDass es eine allgemeine Satzform gibt, wird dadurch bewiesen, dass es keinen Satz geben darf, dessen Form man nicht hätte voraussehen (d. h. konstruieren) können. Die allgemeine Form des Satzes ist: Es verhält sich so und so.",
    "enPM": "It now seems possible to give the most general propositional form: that is, to give a description of the propositions of any sign-language whatsoever in such a way that every possible sense can be expressed by a symbol satisfying the description, and every symbol satisfying the description can express a sense, provided that the meanings of the names are suitably chosen.\nIt is clear that only what is essential to the most general propositional form may be included in its description—for otherwise it would not be the most general form.\nThe existence of a general propositional form is proved by the fact that there cannot be a proposition whose form could not have been foreseen (i.e. constructed). The general form of a proposition is: This is how things stand.",
    "depth": 2,
    "translated": true
  },
  "4.51": {
    "en": "Suppose all elementary propositions were given me: then we can simply ask: what propositions I can build out of them. And these are all propositions and so are they limited.",
    "zh": "假定所有基本命题都给予了我，那么可以这样简单地问：我从这些基本命题中可以形成哪些有含义的命题呢？这就是所有命题，这样它们现在都被规定了。",
    "de": "Angenommen, mir wären alle Elementarsätze gegeben: Dann lässt sich einfach fragen: Welche Sätze kann ich aus ihnen bilden. Und das sind alle Sätze und so sind sie begrenzt.",
    "enPM": "Suppose that I am given all elementary propositions: then I can simply ask what propositions I can construct out of them. And there I have all propositions, and that fixes their limits.",
    "depth": 3,
    "translated": true
  },
  "4.52": {
    "en": "The propositions are everything which follows from the totality of all elementary propositions (of course also from the fact that it is the totality of them all). (So, in some sense, one could say, that all propositions are generalizations of the elementary propositions.)",
    "zh": "凡是按照全部给予我作为基本命题的命题总体来描述的所有命题，都属于命题。所以人们可以完全一般地说，所有命题都是由基本命题的真值运算产生的。",
    "de": "Die Sätze sind Alles, was aus der Gesamtheit aller Elementarsätze folgt (natürlich auch daraus, dass es die Gesamtheit aller ist). (So könnte man in gewissem Sinne sagen, dass alle Sätze Verallgemeinerungen der Elementarsätze sind.)",
    "enPM": "Propositions comprise all that follows from the totality of all elementary propositions (and, of course, from its being the totality of them all). (Thus, in a certain sense, it could be said that all propositions were generalizations of elementary propositions.)",
    "depth": 3,
    "translated": true
  },
  "4.53": {
    "en": "The general proposition form is a variable.",
    "zh": "一般的命题形式是一个变项。",
    "de": "Die allgemeine Satzform ist eine Variable.",
    "enPM": "The general propositional form is a variable.",
    "depth": 3,
    "translated": true
  },
  "5.01": {
    "en": "The elementary propositions are the truth-arguments of propositions.",
    "zh": "基本命题是真值函项的主目。",
    "de": "Die Elementarsätze sind die Wahrheitsargumente des Satzes.",
    "enPM": "Elementary propositions are the truth-arguments of propositions.",
    "depth": 2,
    "translated": true
  },
  "5.02": {
    "en": "It is natural to confuse the arguments of functions with the indices of names. For I recognize the meaning of the sign containing it from the argument just as much as from the index.\nIn Russell's \"$+c$\", for example, \"$c$\" is an index which indicates that the whole sign is the addition sign for cardinal numbers. But this way of symbolizing depends on arbitrary agreement, and one could choose a simple sign instead of \"$+c$\": but in \"$\\neg p$\" \"$p$\" is not an index but an argument; the sense of \"$\\neg p$\" cannot be understood, unless the sense of \"$p$\" has previously been understood. (In the name Julius Caesar, Julius is an index. The index is always part of a description of the object to whose name we attach it, e.g. The Caesar of the Julian gens.)\nThe confusion of argument and index is, if I am not mistaken, at the root of Frege's theory of the meaning of propositions and functions. For Frege the propositions of logic were names and their arguments the indices of these names.",
    "zh": "很容易把函项的主目和名称的指标相混淆。因为从主目以及从指标的记号中，我同样都认识了该记号的含义。譬如在罗素的「+c」中，「c」便是一个指标，它指明了这整个记号是基数的加法记号。但是这种标明只是通过任意的约定来进行的，我们完全可以用一个简单的记号来代替「+c」，但是在「~p」中，「p」不是指标，而是一个主目：「~p」的含义除非是在此之前「p」的含义被理解了，否则它就不可能被理解。（在尤利乌斯·凯撒名下，凯撒是可变的。含义就是那可变的。）",
    "de": "Es liegt nahe, die Argumente von Funktionen mit den Indices von Namen zu verwechseln. Ich erkenne nämlich sowohl am Argument wie am Index die Bedeutung des sie enthaltenden Zeichens.\nIn Russells „+c“ ist z. B. „c“ ein Index, der darauf hinweist, dass das ganze Zeichen das Additionszeichen für Kardinalzahlen ist. Aber diese Bezeichnung beruht auf willkürlicher Übereinkunft und man könnte statt „+c“ auch ein einfaches Zeichen wählen; in „~p“ aber ist „p“ kein Index, sondern ein Argument: der Sinn von „~p“ kann nicht verstanden werden, ohne dass vorher der Sinn von „p“ verstanden worden wäre. (Im Namen Julius Cäsar ist „Julius“ ein Index. Der Index ist immer ein Teil einer Beschreibung des Gegenstandes, dessen Namen wir ihn anhängen. Z. B. Der Cäsar aus dem Geschlechte der Julier.)\nDie Verwechslung von Argument und Index liegt, wenn ich mich nicht irre, der Theorie Freges von der Bedeutung der Sätze und Funktionen zugrunde. Für Frege waren die Sätze der Logik Namen, und deren Argumente die Indices dieser Namen.",
    "enPM": "The arguments of functions are readily confused with the affixes of names. For both arguments and affixes enable me to recognize the meaning of the signs containing them.\nFor example, when Russell writes ‘+c’, the ‘c’ is an affix which indicates that the sign as a whole is the addition-sign for cardinal numbers. But the use of this sign is the result of arbitrary convention and it would be quite possible to choose a simple sign instead of ‘+c’; in ‘~p’, however, ‘p’ is not an affix but an argument: the sense of ‘~p’ cannot be understood unless the sense of ‘p’ has been understood already. (In the name Julius Caesar ‘Julius’ is an affix. An affix is always part of a description of the object to whose name we attach it: e.g. the Caesar of the Julian gens.)\nIf I am not mistaken, Frege’s theory about the meaning of propositions and functions is based on the confusion between an argument and an affix. Frege regarded the propositions of logic as names, and their arguments as the affixes of those names.",
    "depth": 2,
    "translated": true
  },
  "5.1": {
    "en": "The truth-functions can be ordered in series.\nThat is the foundation of the theory of probability.",
    "zh": "真值函项可以排成系列。这是概率论的基础。",
    "de": "Die Wahrheitsfunktionen lassen sich in Reihen ordnen.\nDas ist die Grundlage der Wahrscheinlichkeitslehre.",
    "enPM": "Truth-functions can be arranged in series.\nThat is the foundation of the theory of probability.",
    "depth": 2,
    "translated": true
  },
  "5.101": {
    "en": "The truth-functions of every number of elementary propositions can be written in a schema of the following kind:\n| (T T T T) (p, q) | Tautology     | (if $p$ then $p$; and if $q$ then $q$) $[p \\supset p.q \\supset q]$ |\n| (F T T T) (p, q) | in words:     | Not both $p$ and $q$. $[\\neg (p.q)]$                               |\n| (T F T T) (p, q) | \"    \"        | If $q$ then $p$. $[q \\supset p]$                                   |\n| (T T F T) (p, q) | \"    \"        | If $p$ then $q$. $[p \\supset q]$                                   |\n| (T T T F) (p, q) | \"    \"        | $p$ or $q$. $[p \\lor q]$                                           |\n| (F F T T) (p, q) | \"    \"        | Not $q$. $[\\neg q]$                                                |\n| (F T F T) (p, q) | \"    \"        | Not $p$. $[\\neg p]$                                                |\n| (F T T F) (p, q) | \"    \"        | $p$ or $q$, but not both. $[p.\\neg q : \\lor : q.\\neg p]$           |\n| (T F F T) (p, q) | \"    \"        | If $p$, then $q$; and if $q$, then $p$. $[p \\equiv q]$             |\n| (T F T F) (p, q) | \"    \"        | $p$                                                                |\n| (F F F T) (p, q) | \"    \"        | Neither $p$ nor $q$. $[\\neg p.\\neg q or p \\vert q]$                |\n| (T T F F) (p, q) | \"    \"        | $q$                                                                |\n| (F F T F) (p, q) | \"    \"        | $p$ and not $q$. $[p.\\neg q]$                                      |\n| (F T F F) (p, q) | \"    \"        | $q$ and not $p$. $[q.\\neg p]$                                      |\n| (T F F F) (p, q) | \"    \"        | $p$ and $q$. $[p.q]$                                               |\n| (F F F F) (p, q) | Contradiction | ($p$ and not $p$; and $q$ and not $q$.) $[p.\\neg p.q.\\neg q]$      |\nThose truth-possibilities of its truth-arguments, which verify the proposition, I shall call its truth-grounds.",
    "zh": "一定数目之基本命题的诸真值函项可以展开成一种如下这种图式：（此处是那些真值可能性排列而成的一种Schemata，参见原书。）凡是其真值标记都可以在几个命题中共用的那些真值函项，它们构成一个命题系列或者是这样一种关系；命题之间的关系。使得这些真值可能性按照组合规则顺序排列而相互推导出来，其实质是很容易看出的。",
    "de": "Die Wahrheitsfunktionen jeder Anzahl von Elementarsätzen lassen sich in einem Schema folgender Art hinschreiben:\n(\nDiejenigen Wahrheitsmöglichkeiten seiner Wahrheitsargumente, welche den Satz bewahrheiten, will ich seine Wahrheitsgründe nennen.",
    "enPM": "The truth-functions of a given number of elementary propositions can always be set out in a schema of the following kind:\nI will give the name truth-grounds of a proposition to those truth-possibilities of its truth-arguments that make it true.",
    "depth": 3,
    "translated": true
  },
  "5.11": {
    "en": "If the truth-grounds which are common to a number of propositions are all also truth-grounds of some one proposition, we say that the truth of this proposition follows from the truth of those propositions.",
    "zh": "如果所有那些对一定数目的诸基本命题为真的真值理由是共通的，那么这表达出这些真值理由是对它们全体为真的，并且表达出它们可以相互推导出来。",
    "de": "Sind die Wahrheitsgründe, die einer Anzahl von Sätzen gemeinsam sind, sämtlich auch Wahrheitsgründe eines bestimmten Satzes, so sagen wir, die Wahrheit dieses Satzes folge aus der Wahrheit jener Sätze.",
    "enPM": "If all the truth-grounds that are common to a number of propositions are at the same time truth-grounds of a certain proposition, then we say that the truth of that proposition follows from the truth of the others.",
    "depth": 3,
    "translated": true
  },
  "5.12": {
    "en": "In particular the truth of a proposition $p$ follows from that of a proposition $q$, if all the truth-grounds of the second are truth-grounds of the first.",
    "zh": "具体说来，一个命题「p」可以从命题「q」推出来，当命题「q」的含义在「p」的含义中已经包含在自身之内时。",
    "de": "Insbesondere folgt die Wahrheit eines Satzes „p“ aus der Wahrheit eines anderen „q“, wenn alle Wahrheitsgründe des zweiten Wahrheitsgründe des ersten sind.",
    "enPM": "In particular, the truth of a proposition ‘p’ follows from the truth of another proposition ‘q’ if all the truth-grounds of the latter are truth-grounds of the former.",
    "depth": 3,
    "translated": true
  },
  "5.121": {
    "en": "The truth-grounds of $q$ are contained in those of $p$; $p$ follows from $q$.",
    "zh": "「q」的含义包含在「p」的含义中：p就通过这一事实从q推出了",
    "de": "Die Wahrheitsgründe des einen sind in denen des anderen enthalten; p folgt aus q.",
    "enPM": "The truth-grounds of the one are contained in those of the other: p follows from q.",
    "depth": 4,
    "translated": true
  },
  "5.122": {
    "en": "If $p$ follows from $q$, the sense of \"$p$\" is contained in that of \"$q$\".",
    "zh": "如果p从q推出，那么「p」的含义在「q」的含义里。",
    "de": "Folgt p aus q, so ist der Sinn von „p“ im Sinne von „q“ enthalten.",
    "enPM": "If p follows from q, the sense of ‘p’ is contained in the sense of ‘q’.",
    "depth": 4,
    "translated": true
  },
  "5.123": {
    "en": "If a god creates a world in which certain propositions are true, he creates thereby also a world in which all propositions consequent on them are true. And similarly he could not create a world in which the proposition \"p\" is true without creating all its objects.",
    "zh": "如果上帝创造一个世界，在其中一些命题都是真的，那么它由此也创造了一个一切从它们推出来的命题都在其中为真的世界。同样，上帝不能创造这样一个世界，在其中命题「p」是真的，而不创造p的全部对象。",
    "de": "Wenn ein Gott eine Welt erschafft, worin gewisse Sätze wahr sind, so schafft er damit auch schon eine Welt, in welcher alle ihre Folgesätze stimmen. Und ähnlich könnte er keine Welt schaffen, worin der Satz „p“ wahr ist, ohne seine sämtlichen Gegenstände zu schaffen.",
    "enPM": "If a god creates a world in which certain propositions are true, then by that very act he also creates a world in which all the propositions that follow from them come true. And similarly he could not create a world in which the proposition ‘p’ was true without creating all its objects.",
    "depth": 4,
    "translated": true
  },
  "5.124": {
    "en": "A proposition asserts every proposition which follows from it.",
    "zh": "一个命题肯定了每一个从它推出来的命题。",
    "de": "Der Satz bejaht jeden Satz, der aus ihm folgt.",
    "enPM": "A proposition affirms every proposition that follows from it.",
    "depth": 4,
    "translated": true
  },
  "5.1241": {
    "en": "\"p.q\" is one of the propositions which assert \"p\" and at the same time one of the propositions which assert \"q\".\nTwo propositions are opposed to one another if there is no significant proposition which asserts them both.\nEvery proposition which contradicts another, denies it.",
    "zh": "「p·q」是那些既能从p中又能从q中推出来的命题之一。「p」是那些可以从p推出且仅以p为前提的命题。「p∨q」是那些从p及从q都不能推出的命题。",
    "de": "„p.q“ ist einer der Sätze, welche „p“ bejahen, und zugleich einer der Sätze, welche „q“ bejahen.\nZwei Sätze sind einander entgegengesetzt, wenn es keinen sinnvollen Satz gibt, der sie beide bejaht.\nJeder Satz der einem anderen widerspricht, verneint ihn.",
    "enPM": "‘p.q’ is one of the propositions that affirm ‘p’ and at the same time one of the propositions that affirm ‘q’.\nTwo propositions are opposed to one another if there is no proposition with a sense, that affirms them both.\nEvery proposition that contradicts another negates it.",
    "depth": 5,
    "translated": true
  },
  "5.13": {
    "en": "That the truth of one proposition follows from the truth of other propositions, we perceive from the structure of the propositions.",
    "zh": "诸命题之间的推导关系的存在，我们是透过诸命题的结构而看见的。",
    "de": "Dass die Wahrheit eines Satzes aus der Wahrheit anderer Sätze folgt, ersehen wir aus der Struktur der Sätze.",
    "enPM": "When the truth of one proposition follows from the truth of others, we can see this from the structure of the propositions.",
    "depth": 3,
    "translated": true
  },
  "5.131": {
    "en": "If the truth of one proposition follows from the truth of others, this expresses itself in relations in which the forms of these propositions stand to one another, and we do not need to put them in these relations first by connecting them with one another in a proposition; for these relations are internal, and exist as soon as, and by the very fact that, the propositions exist.",
    "zh": "如果一个命题的真是从其他命题的真推出来的，那么这由这些命题在形式上的相互关系中表现出来。我们并不需要首先将它们结合在一个命题中，才使得这个关系得以存在。相反，这种关系是在这些命题被放到一起的时候已经是内在的，因此它是内在的，而且它独立于命题结合的真和假。",
    "de": "Folgt die Wahrheit eines Satzes aus der Wahrheit anderer, so drückt sich dies durch Beziehungen aus, in welchen die Formen jener Sätze zu einander stehen; und zwar brauchen wir sie nicht erst in jene Beziehungen zu setzen, indem wir sie in einem Satz miteinander verbinden, sondern diese Beziehungen sind intern und bestehen, sobald, und dadurch dass, jene Sätze bestehen.",
    "enPM": "If the truth of one proposition follows from the truth of others, this finds expression in relations in which the forms of the propositions stand to one another: nor is it necessary for us to set up these relations between them, by combining them with one another in a single proposition; on the contrary, the relations are internal, and their existence is an immediate result of the existence of the propositions.",
    "depth": 4,
    "translated": true
  },
  "5.1311": {
    "en": "When we conclude from $p \\lor q$ and $\\neg p$ to $q$ the relation between the forms of the propositions \"$p \\lor q$\" and \"$\\neg p$\" is here concealed by the method of symbolizing. But if we write, e.g. instead of \"$p \\lor q$\" \"$p|q.|.p|q$\" and instead of \"$\\neg p$\" \"$p|p$\" ($p|q$=neither $p$ nor $q$), then the inner connexion becomes obvious.\n(The fact that we can infer $fa$ from $(x).fx$ shows that generality is present also in the symbol \"$(x).fx$\".\nThe method of inference is to be understood from the two propositions alone.\nOnly they themselves can justify the inference.\nLaws of inference, which---as in Frege and Russell---are to justify the conclusions, are senseless and would be superfluous.",
    "zh": "如果我们从p∨q以及~p推出q来，那么「p∨q」和「~p」和「q」之间的关系在此是通过这些符号的表示方式来被掩盖的。然而如果我们例如不写「p∨q」，而写例如「p|q·|·p|q」，不写「~p」而写成「p|p」（p|q=既非p又非q），那么内在联系就显示出来了。（人们可以看到，从(x).fx可以推出fa，这事实表明，在(x).fx符号本身中已经在哪样的记号表示上就有了这一般性的记号。）",
    "de": "Wenn wir von p∨q und ~p auf q schließen, so ist hier durch die Bezeichnungsweise die Beziehung der Satzformen von „p∨q“ und „~p“ verhüllt. Schreiben wir aber z. B. statt „p∨q“ „p|q.|.p|q“ und statt „~p“ „p|p“ (p|q = weder p, noch q), so wird der innere Zusammenhang offenbar.\n(Dass man aus (x).fx auf fa schließen kann, das zeigt, dass die Allgemeinheit auch im Symbol „(x).fx“ vorhanden ist.)",
    "enPM": "When we infer q from p∨q and ~p, the relation between the propositional forms of ‘p∨q’ and ‘~p’ is masked, in this case, by our mode of signifying. But if instead of ‘p∨q’ we write, for example, ‘p|q.|.p|q’, and instead of ‘~p’, ‘p|p’ (p|q = neither p nor q), then the inner connexion becomes obvious.\n(The possibility of inference from (x).fx to fa shows that the symbol (x).fx itself has generality in it.)",
    "depth": 5,
    "translated": true
  },
  "5.133": {
    "en": "All inference takes place a priori.",
    "zh": "一切推演都是先天地发生的。",
    "de": "Alles Folgern geschieht a priori.",
    "enPM": "All deductions are made a priori.",
    "depth": 4,
    "translated": true
  },
  "5.134": {
    "en": "From an elementary proposition no other can be inferred.",
    "zh": "从一个基本命题不能推出任何其他的命题。",
    "de": "Aus einem Elementarsatz lässt sich kein anderer folgern.",
    "enPM": "One elementary proposition cannot be deduced from another.",
    "depth": 4,
    "translated": true
  },
  "5.135": {
    "en": "In no way can an inference be made from the existence of one state of affairs to the existence of another entirely different from it.",
    "zh": "绝不能从一种情况的存在推出另一个与它完全不同的情况的存在。",
    "de": "Auf keine Weise kann aus dem Bestehen irgend einer Sachlage auf das Bestehen einer von ihr gänzlich verschiedenen Sachlage geschlossen werden.",
    "enPM": "There is no possible way of making an inference from the existence of one situation to the existence of another, entirely different situation.",
    "depth": 4,
    "translated": true
  },
  "5.136": {
    "en": "There is no causal nexus which justifies such an inference.",
    "zh": "不可能存在证明这样一种推论的因果联系。",
    "de": "Einen Kausalnexus, der einen solchen Schluss rechtfertigte, gibt es nicht.",
    "enPM": "There is no causal nexus to justify such an inference.",
    "depth": 4,
    "translated": true
  },
  "5.1361": {
    "en": "The events of the future cannot be inferred from those of the present.\nSuperstition is the belief in the causal nexus.",
    "zh": "未来的事件不能从现在的事件中推出。相信因果联系就是迷信。",
    "de": "Die Ereignisse der Zukunft können wir nicht aus den gegenwärtigen erschließen.\nDer Glaube an den Kausalnexus ist der Aberglaube.",
    "enPM": "We cannot infer the events of the future from those of the present.\nSuperstition is nothing but belief in the causal nexus.",
    "depth": 5,
    "translated": true
  },
  "5.1362": {
    "en": "The freedom of the will consists in the fact that future actions cannot be known now. We could only know them if causality were an inner necessity, like that of logical deduction.---The connexion of knowledge and what is known is that of logical necessity.\n(\"$A$ knows that $p$ is the case\" is senseless if $p$ is a tautology.)",
    "zh": "意志自由在于：现在不可能认识未来的行为。只有在对因果性是一种内在必然性——像逻辑推理的必然性一样——来说，我们才能知道它。——知与所知之间的关联是：逻辑的必然性。",
    "de": "Die Willensfreiheit besteht darin, dass zukünftige Handlungen jetzt nicht gewusst werden können. Nur dann könnten wir sie wissen, wenn die Kausalität eine innere Notwendigkeit wäre, wie die des logischen Schlusses. – Der Zusammenhang von Wissen und Gewusstem ist der der logischen Notwendigkeit.\n(„A weiß, dass p der Fall ist“ ist sinnlos, wenn p eine Tautologie ist.)",
    "enPM": "The freedom of the will consists in the impossibility of knowing actions that still lie in the future. We could know them only if causality were an inner necessity like that of logical inference.—The connexion between knowledge and what is known is that of logical necessity.\n(‘A knows that p is the case’, has no sense if p is a tautology.)",
    "depth": 5,
    "translated": true
  },
  "5.1363": {
    "en": "If from the fact that a proposition is obvious to us it does not follow that it is true, then obviousness is no justification for our belief in its truth.",
    "zh": "如果从一个命题对我们来说不是必然为真的，这并不等于我们没有认识到它为真。这也不表示我们可以从它中推出一个非真的东西。",
    "de": "Wenn daraus, dass ein Satz uns einleuchtet, nicht folgt, dass er wahr ist, so ist das Einleuchten auch keine Rechtfertigung für unseren Glauben an seine Wahrheit.",
    "enPM": "If the truth of a proposition does not follow from the fact that it is self-evident to us, then its self-evidence in no way justifies our belief in its truth.",
    "depth": 5,
    "translated": true
  },
  "5.14": {
    "en": "If a proposition follows from another, then the latter says more than the former, the former less than the latter.",
    "zh": "如果一个命题是从另一个命题推出的，那么前者所说的比后者多：后者所说的比前者少。",
    "de": "Folgt ein Satz aus einem anderen, so sagt dieser mehr als jener, jener weniger als dieser.",
    "enPM": "If one proposition follows from another, then the latter says more than the former, and the former less than the latter.",
    "depth": 3,
    "translated": true
  },
  "5.141": {
    "en": "If $p$ follows from $q$ and $q$ from $p$ then they are one and the same proposition.",
    "zh": "如果p从q推出、q从p推出，那么它们是同一个命题。",
    "de": "Folgt p aus q und q aus p, so sind sie ein und derselbe Satz.",
    "enPM": "If p follows from q and q from p, then they are one and the same proposition.",
    "depth": 4,
    "translated": true
  },
  "5.142": {
    "en": "A tautology follows from all propositions: it says nothing.",
    "zh": "重言式是从所有命题推出的：它什么也没有说。",
    "de": "Die Tautologie folgt aus allen Sätzen: sie sagt nichts.",
    "enPM": "A tautology follows from all propositions: it says nothing.",
    "depth": 4,
    "translated": true
  },
  "5.143": {
    "en": "Contradiction is something shared by propositions, which no proposition has in common with another. Tautology is that which is shared by all propositions, which have nothing in common with one another.\nContradiction vanishes so to speak outside, tautology inside all propositions.\nContradiction is the external limit of the propositions, tautology their substanceless centre.",
    "zh": "矛盾式是一种诸命题的共同性质，即：没有命题能与之共有某些东西。重言式是所有那些没有任何彼此共同东西的命题的共同性质：只有当矛盾式从外消失时，才可以说，所有命题的共同性质、或者所有命题在这种情况下的含义都消失了。所以，在某种更加不确切的意义上重言式可以说是命题的「零线」。在符号方式上就是如此。",
    "de": "Die Kontradiktion ist das Gemeinsame der Sätze, was kein Satz mit einem anderen gemein hat. Die Tautologie ist das Gemeinsame aller Sätze, welche nichts miteinander gemein haben.\nDie Kontradiktion verschwindet sozusagen außerhalb, die Tautologie innerhalb aller Sätze.\nDie Kontradiktion ist die äußere Grenze der Sätze, die Tautologie ihr substanzloser Mittelpunkt.",
    "enPM": "Contradiction is that common factor of propositions which no proposition has in common with another. Tautology is the common factor of all propositions that have nothing in common with one another.\nContradiction, one might say, vanishes outside all propositions: tautology vanishes inside them.\nContradiction is the outer limit of propositions: tautology is the unsubstantial point at their centre.",
    "depth": 4,
    "translated": true
  },
  "5.15": {
    "en": "If Tr is the number of the truth-grounds of the proposition \"r\", Trs the number of those truth-grounds of the proposition \"s\" which are at the same time truth-grounds of \"r\", then we call the ratio Trs : Tr the measure of the probability which the proposition \"r\" gives to the proposition \"s\".",
    "zh": "如果Wr是命题「r」的真值基础的数量，那么Wrs是那些既是「r」的真值基础也是「s」的真值基础的真值基础的数量。因此，将命题「r」给予命题「s」的概率可表达为分式比例：Wrs:Ws。",
    "de": "Ist Wr die Anzahl der Wahrheitsgründe des Satzes „r“, Wrs die Anzahl derjenigen Wahrheitsgründe des Satzes „s“, die zugleich Wahrheitsgründe von „r“ sind, dann nennen wir das Verhältnis: Wrs : Wr das Maß der Wahrscheinlichkeit, welche der Satz „r“ dem Satz „s“ gibt.",
    "enPM": "If Tr is the number of the truth-grounds of a proposition ‘r’, and if Trs is the number of the truth-grounds of a proposition ‘s’ that are at the same time truth-grounds of ‘r’, then we call the ratio Trs : Tr the degree of probability that the proposition ‘r’ gives to the proposition ‘s’.",
    "depth": 3,
    "translated": true
  },
  "5.151": {
    "en": "Suppose in a schema like that above in No. 5.101 Tr is the number of the \"T\"'s in the proposition r, Trs the number of those \"T\"'s in the proposition s, which stand in the same columns as \"T\"'s of the proposition r; then the proposition r gives to the proposition s the probability Trs : Tr.",
    "zh": "设Wr（在如上图式中）是命题r的「W」的数量；Wrs是命题s的「W」的数量，同时r也具有W。于是比例：Wrs:Ws就度量出命题r给予命题s的概率。",
    "de": "Sei in einem Schema wie dem obigen in No. 5.101 Wr die Anzahl der „W“ im Satze r; Wrs die Anzahl derjenigen „W“ im Satze s, die in gleichen Kolonnen mit „W“ des Satzes r stehen. Der Satz r gibt dann dem Satze s die Wahrscheinlichkeit: Wrs : Wr.",
    "enPM": "In a schema like the one above in 5.101, let Tr be the number of ‘T’s’ in the proposition r, and let Trs, be the number of ‘T’s’ in the proposition s that stand in columns in which the proposition r has ‘T’s’. Then the proposition r gives to the proposition s the probability Trs : Tr.",
    "depth": 4,
    "translated": true
  },
  "5.1511": {
    "en": "There is no special object peculiar to probability propositions.",
    "zh": "并不存在一种概率命题所特有的特殊的对象。",
    "de": "Es gibt keinen besonderen Gegenstand, der den Wahrscheinlichkeitssätzen eigen wäre.",
    "enPM": "There is no special object peculiar to probability propositions.",
    "depth": 5,
    "translated": true
  },
  "5.152": {
    "en": "Propositions which have no truth-arguments in common with one another we call independent.\nIndependent propositions (e.g. any two elementary propositions) give to one another the probability $\\frac{1}{2}$.\nIf $p$ follows from $q$, the proposition $q$ gives to the proposition $p$ the probability 1. The certainty of logical conclusion is a limiting case of probability.\n(Application to tautology and contradiction.)",
    "zh": "彼此没有共同的诸真值基础之作为命题：我们称之为：这一个是另一个的相互排斥。从一个命题推到另一个命题：在一个中为真，在另一个中为假。",
    "de": "Sätze, welche keine Wahrheitsargumente mit einander gemein haben, nennen wir von einander unabhängig.\nZwei Elementarsätze geben einander die Wahrscheinlichkeit ½.\nFolgt p aus q, so gibt der Satz „q“ dem Satz „p“ die Wahrscheinlichkeit 1. Die Gewissheit des logischen Schlusses ist ein Grenzfall der Wahrscheinlichkeit.\n(Anwendung auf Tautologie und Kontradiktion.)",
    "enPM": "When propositions have no truth-arguments in common with one another, we call them independent of one another.\nTwo elementary propositions give one another the probability ½.\nIf p follows from q, then the proposition ‘q’ gives to the proposition ‘p’ the probability 1. The certainty of logical inference is a limiting case of probability.\n(Application of this to tautology and contradiction.)",
    "depth": 4,
    "translated": true
  },
  "5.153": {
    "en": "A proposition is in itself neither probable nor improbable. An event occurs or does not occur, there is no middle course.",
    "zh": "一个命题本身既不是似真的，也不是不似真的。一个事件发生了或没有发生：没有横棱两者之间。",
    "de": "Ein Satz ist an sich weder wahrscheinlich noch unwahrscheinlich. Ein Ereignis trifft ein, oder es trifft nicht ein, ein Mittelding gibt es nicht.",
    "enPM": "In itself, a proposition is neither probable nor improbable. Either an event occurs or it does not: there is no middle way.",
    "depth": 4,
    "translated": true
  },
  "5.154": {
    "en": "In an urn there are equal numbers of white and black balls (and no others). I draw one ball after another and put them back in the urn. Then I can determine by the experiment that the numbers of the black and white balls which are drawn approximate as the drawing continues.\nSo this is not a mathematical fact.\nIf then, I say, It is equally probable that I should draw a white and a black ball, this means, All the circumstances known to me (including the natural laws hypothetically assumed) give to the occurrence of the one event no more probability than to the occurrence of the other. That is they give---as can easily be understood from the above explanations---to each the probability $\\frac{1}{2}$.\nWhat I can verify by the experiment is that the occurrence of the two events is independent of the circumstances with which I have no closer acquaintance.",
    "zh": "假设一个壶中有等数量的白球与黑球（并且没有其他的球）。如果我依次抽出球来又将它们放回去，那么这种实验能使我知道，随着我不断进行下去，取出来的球中黑球和白球在数量上大致彼此相配合。所以这不是一个数学的事实。现在我如果说：我抽出一个白球的概率等于我抽出一个黑球的概率，这意思是，所有我所知的那些情况（包括作为假定的那些自然律），给予一个事件发生的概率，并不比给予另一个事件发生的概率大。这就是说，如不难从上述解释中得出的，它们给每一个事件的发生赋予了—概率。实验所确认的是：这两类事件的出现的频率在某些情况下并不受那两个事件发生情况的更多的影响。而这些都独立于所发生的事件的概率。而这一点可以确定下来。",
    "de": "In einer Urne seien gleichviel weiße und schwarze Kugeln (und keine anderen). Ich ziehe eine Kugel nach der anderen und lege sie wieder in die Urne zurück. Dann kann ich durch den Versuch feststellen, dass sich die Zahlen der gezogenen schwarzen und weißen Kugeln bei fortgesetztem Ziehen einander nähern.\nDas ist also kein mathematisches Faktum.\nWenn ich nun sage: Es ist gleich wahrscheinlich, dass ich eine weiße Kugel wie eine schwarze ziehen werde, so heißt das: Alle mir bekannten Umstände (die hypothetisch angenommenen Naturgesetze mitinbegriffen) geben dem Eintreffen des einen Ereignisses nicht mehr Wahrscheinlichkeit als dem Eintreffen des anderen. Das heißt, sie geben – wie aus den obigen Erklärungen leicht zu entnehmen ist – jedem die Wahrscheinlichkeit ½.\nWas ich durch den Versuch bestätige ist, dass das Eintreffen der beiden Ereignisse von den Umständen, die ich nicht näher kenne, unabhängig ist.",
    "enPM": "Suppose that an urn contains black and white balls in equal numbers (and none of any other kind). I draw one ball after another, putting them back into the urn. By this experiment I can establish that the number of black balls drawn and the number of white balls drawn approximate to one another as the draw continues.\nSo this is not a mathematical truth.\nNow, if I say, ‘The probability of my drawing a white ball is equal to the probability of my drawing a black one’, this means that all the circumstances that I know of (including the laws of nature assumed as hypotheses) give no more probability to the occurrence of the one event than to that of the other. That is to say, they give each the probability ½, as can easily be gathered from the above definitions.\nWhat I confirm by the experiment is that the occurrence of the two events is independent of the circumstances of which I have no more detailed knowledge.",
    "depth": 4,
    "translated": true
  },
  "5.155": {
    "en": "The unit of the probability proposition is: The circumstances---with which I am not further acquainted---give to the occurrence of a definite event such and such a degree of probability.",
    "zh": "概率命题的基本单位是：那些我此外对之就一无所知的情况，给了一个特定事件以某一定程度的概率。",
    "de": "Die Einheit des Wahrscheinlichkeitssatzes ist: Die Umstände – die ich sonst nicht weiter kenne – geben dem Eintreffen eines bestimmten Ereignisses den und den Grad der Wahrscheinlichkeit.",
    "enPM": "The minimal unit for a probability proposition is this: The circumstances—of which I have no further knowledge—give such and such a degree of probability to the occurrence of a particular event.",
    "depth": 4,
    "translated": true
  },
  "5.156": {
    "en": "Probability is a generalization.\nIt involves a general description of a propositional form.\nOnly in default of certainty do we need probability. If we are not completely acquainted with a fact, but know something about its form.\n(A proposition can, indeed, be an incomplete picture of a certain state of affairs, but it is always a complete picture.)\nThe probability proposition is, as it were, an extract from other propositions.",
    "zh": "因此，概率是一种概括。它包含着对一种命题形式的一般描述。只是因为没有确实性我们才需要它。——当我们对一个事实不是完全地认识，但我们确实知道关于它的形式的某些东西时。（一个命题虽然实际上不一定就是实在的一幅完整的图像，但它始终是某一幅完整的图像。）概率命题仿佛是其他一些命题的一个摘要。",
    "de": "So ist die Wahrscheinlichkeit eine Verallgemeinerung.\nSie involviert eine allgemeine Beschreibung einer Satzform.\nNur in Ermanglung der Gewissheit gebrauchen wir die Wahrscheinlichkeit. – Wenn wir zwar eine Tatsache nicht vollkommen kennen, wohl aber etwas über ihre Form wissen.\n(Ein Satz kann zwar ein unvollständiges Bild einer gewissen Sachlage sein, aber er ist immer ein vollständiges Bild.)\nDer Wahrscheinlichkeitssatz ist gleichsam ein Auszug aus anderen Sätzen.",
    "enPM": "It is in this way that probability is a generalization.\nIt involves a general description of a propositional form.\nWe use probability only in default of certainty—if our knowledge of a fact is not indeed complete, but we do know something about its form.\n(A proposition may well be an incomplete picture of a certain situation, but it is always a complete picture of something.)\nA probability proposition is a sort of excerpt from other propositions.",
    "depth": 4,
    "translated": true
  },
  "5.2": {
    "en": "The structures of propositions stand to one another in internal relations.",
    "zh": "诸命题的结构彼此之间处于内在关系之中。",
    "de": "Die Strukturen der Sätze stehen in internen Beziehungen zu einander.",
    "enPM": "The structures of propositions stand in internal relations to one another.",
    "depth": 2,
    "translated": true
  },
  "5.21": {
    "en": "We can bring out these internal relations in our manner of expression, by presenting a proposition as the result of an operation which produces it from other propositions (the bases of the operation).",
    "zh": "我们可以这样来强调这些内在关系：在我们表示形式中让一个命题表现为从某个运演中产生于其他诸命题（即运演的诸基础）的结果。",
    "de": "Wir können diese internen Beziehungen dadurch in unserer Ausdrucksweise hervorheben, dass wir einen Satz als Resultat einer Operation darstellen, die ihn aus anderen Sätzen (den Basen der Operation) hervorbringt.",
    "enPM": "In order to give prominence to these internal relations we can adopt the following mode of expression: we can represent a proposition as the result of an operation that produces it out of other propositions (which are the bases of the operation).",
    "depth": 3,
    "translated": true
  },
  "5.22": {
    "en": "The operation is the expression of a relation between the structures of its result and its bases.",
    "zh": "运演是它的结果的结构和它的基础的结构之间的一种关系的表达式。",
    "de": "Die Operation ist der Ausdruck einer Beziehung zwischen den Strukturen ihres Resultats und ihrer Basen.",
    "enPM": "An operation is the expression of a relation between the structures of its result and of its bases.",
    "depth": 3,
    "translated": true
  },
  "5.23": {
    "en": "The operation is that which must happen to a proposition in order to make another out of it.",
    "zh": "运演是为了从一种形式形成一个命题而必须对它实行的东西。",
    "de": "Die Operation ist das, was mit dem einen Satz geschehen muss, um aus ihm den anderen zu machen.",
    "enPM": "The operation is what has to be done to the one proposition in order to make the other out of it.",
    "depth": 3,
    "translated": true
  },
  "5.231": {
    "en": "And that will naturally depend on their formal properties, on the internal similarity of their forms.",
    "zh": "而这自然依赖那些形式上的性质、那些内在的相似性。",
    "de": "Und das wird natürlich von ihren formalen Eigenschaften, von der internen Ähnlichkeit ihrer Formen abhängen.",
    "enPM": "And that will, of course, depend on their formal properties, on the internal similarity of their forms.",
    "depth": 4,
    "translated": true
  },
  "5.232": {
    "en": "The internal relation which orders a series is equivalent to the operation by which one term arises from another.",
    "zh": "那些整理序列的内在关系，等同于一个运演——通过该运演，一项从另一项中产生出来。",
    "de": "Die interne Relation, die eine Reihe ordnet, ist äquivalent mit der Operation, durch welche ein Glied aus dem anderen entsteht.",
    "enPM": "The internal relation by which a series is ordered is equivalent to the operation that produces one term from another.",
    "depth": 4,
    "translated": true
  },
  "5.233": {
    "en": "The first place in which an operation can occur is where a proposition arises from another in a logically significant way; i.e. where the logical construction of the proposition begins.",
    "zh": "一个运演不可能发生在这一个那个以前——在那些有一个「运演的基础」的诸命题产生之前。",
    "de": "Die Operation kann erst dort auftreten, wo ein Satz auf logisch bedeutungsvolle Weise aus einem anderen entsteht. Also dort, wo die logische Konstruktion des Satzes anfängt.",
    "enPM": "Operations cannot make their appearance before the point at which one proposition is generated out of another in a logically meaningful way; i.e. the point at which the logical construction of propositions begins.",
    "depth": 4,
    "translated": true
  },
  "5.234": {
    "en": "The truth-functions of elementary proposition, are results of operations which have the elementary propositions as bases. (I call these operations, truth-operations.)",
    "zh": "基本命题的真值函项是一些以基本命题为基础的真值运算的结果。（我把这些称为真值操作。）",
    "de": "Die Wahrheitsfunktionen der Elementarsätze sind Resultate von Operationen, die die Elementarsätze als Basen haben. (Ich nenne diese Operationen Wahrheitsoperationen.)",
    "enPM": "Truth-functions of elementary propositions are results of operations with elementary propositions as bases. (These operations I call truth-operations.)",
    "depth": 4,
    "translated": true
  },
  "5.2341": {
    "en": "The sense of a truth-function of $p$ is a function of the sense of $p$.\nDenial, logical addition, logical multiplication, etc., etc., are operations.\n(Denial reverses the sense of a proposition.)",
    "zh": "p的真值函项的意义是p的真值（当p为真时p的真值也为真）的一种函数。否定、逻辑加、逻辑乘等等都是运演。（否定在一种意义上反转了命题的含义。）",
    "de": "Der Sinn einer Wahrheitsfunktion von p ist eine Funktion des Sinnes von p.\nVerneinung, logische Addition, logische Multiplikation, etc., etc. sind Operationen.\n(Die Verneinung verkehrt den Sinn des Satzes.)",
    "enPM": "The sense of a truth-function of p is a function of the sense of p.\nNegation, logical addition, logical multiplication, etc. etc. are operations.\n(Negation reverses the sense of a proposition.)",
    "depth": 5,
    "translated": true
  },
  "5.24": {
    "en": "An operation shows itself in a variable; it shows how we can proceed from one form of proposition to another.\nIt gives expression to the difference between the forms.\n(And that which is common the the bases, and the result of an operation, is the bases themselves.)",
    "zh": "运演把它自己显示在一个变项之中；它显示我们怎样从一种形式的命题达到另一种形式的命题。它使诸形式之间的区别得以表达出来。（而基础与运演结果之间的共同之处却正好是这些基础本身。）",
    "de": "Die Operation zeigt sich in einer Variablen; sie zeigt, wie man von einer Form von Sätzen zu einer anderen gelangen kann.\nSie bringt den Unterschied der Formen zum Ausdruck.\n(Und das Gemeinsame zwischen den Basen und dem Resultat der Operation sind eben die Basen.)",
    "enPM": "An operation manifests itself in a variable; it shows how we can get from one form of proposition to another.\nIt gives expression to the difference between the forms.\n(And what the bases of an operation and its result have in common is just the bases themselves.)",
    "depth": 3,
    "translated": true
  },
  "5.241": {
    "en": "The operation does not characterize a form but only the difference between forms.",
    "zh": "运演并不是一个形式的特征标记，而是诸形式之间的一种差别的标记。",
    "de": "Die Operation kennzeichnet keine Form, sondern nur den Unterschied der Formen.",
    "enPM": "An operation is not the mark of a form, but only of a difference between forms.",
    "depth": 4,
    "translated": true
  },
  "5.242": {
    "en": "The same operation which makes \"q\" from \"p\", makes \"r\" from \"q\", and so on. This can only be expressed by the fact that \"p\", \"q\", \"r\", etc., are variables which give general expression to certain formal relations.",
    "zh": "从「p」产生「q」的那个运演，同样也从「q」产生出「r」来，等等。这只能这样表达：除了它们皆是那些形式运算的结果以外，不能用其他的方式来表达「p」「q」「r」等。",
    "de": "Dieselbe Operation, die „q“ aus „p“ macht, macht aus „q“ „r“ u. s. f. Dies kann nur darin ausgedrückt sein, dass „p“, „q“, „r“, etc. Variable sind, die gewisse formale Relationen allgemein zum Ausdruck bringen.",
    "enPM": "The operation that produces ‘q’ from ‘p’ also produces ‘r’ from ‘q’, and so on. There is only one way of expressing this: ‘p’, ‘q’, ‘r’, etc. have to be variables that give expression in a general way to certain formal relations.",
    "depth": 4,
    "translated": true
  },
  "5.25": {
    "en": "The occurrence of an operation does not characterize the sense of a proposition.\nFor an operation does not assert anything; only its result does, and this depends on the bases of the operation.\n(Operation and function must not be confused with one another.)",
    "zh": "运演的出现并不表示命题的含义中的特征。运演的确什么也没有说，而仅仅是它的结果说了一些东西，而这取决于运演的诸基础。（运演和函项绝对不能混淆。）",
    "de": "Das Vorkommen der Operation charakterisiert den Sinn des Satzes nicht.\nDie Operation sagt ja nichts aus, nur ihr Resultat, und dies hängt von den Basen der Operation ab.\n(Operation und Funktion dürfen nicht miteinander verwechselt werden.)",
    "enPM": "The occurrence of an operation does not characterize the sense of a proposition.\nIndeed, no statement is made by an operation, but only by its result, and this depends on the bases of the operation.\n(Operations and functions must not be confused with each other.)",
    "depth": 3,
    "translated": true
  },
  "5.251": {
    "en": "A function cannot be its own argument, but the result of an operation can be its own basis.",
    "zh": "一个函项不能是它自己的主目，而一个运演的结果则完全可以是它自己的基础。",
    "de": "Eine Funktion kann nicht ihr eigenes Argument sein, wohl aber kann das Resultat einer Operation ihre eigene Basis werden.",
    "enPM": "A function cannot be its own argument, whereas an operation can take one of its own results as its base.",
    "depth": 4,
    "translated": true
  },
  "5.252": {
    "en": "Only in this way is the progress from term to term in a formal series possible (from type to type in the hierarchy of Russell and Whitehead). (Russell and Whitehead have not admitted the possibility of this progress but have made use of it all the same.)",
    "zh": "只有这样才能有形式序列中一项向另一项的过渡（在罗素和怀特海的类型论中，从一类型过渡到另一类型）。所以罗素和怀特海所不能说的关于这种过渡的可能性，只有通过这样一点才能表达：即这是一个从该项中经过多次运演而产生出来的项（通过对一个运演的反复使用）。",
    "de": "Nur so ist das Fortschreiten von Glied zu Glied in einer Formenreihe (von Type zu Type in den Hierarchien Russells und Whiteheads) möglich. (Russell und Whitehead haben die Möglichkeit dieses Fortschreitens nicht zugegeben, aber immer wieder von ihr Gebrauch gemacht.)",
    "enPM": "It is only in this way that the step from one term of a series of forms to another is possible (from one type to another in the hierarchies of Russell and Whitehead). (Russell and Whitehead did not admit the possibility of such steps, but repeatedly availed themselves of it.)",
    "depth": 4,
    "translated": true
  },
  "5.2521": {
    "en": "The repeated application of an operation to its own result I call its successive application (\"O'O'O'a\" is the result of the threefold successive application of \"O'$\\xi$\" to \"a\").\nIn a similar sense I speak of the successive application of several operations to a number of propositions.",
    "zh": "将一个运演重复地应用于它自己的结果，我称之为它的逐次应用（「O'O'a」是「O'a」的运演结果在三重运演上的结果）。在类似的意义上，我谈论将许多运演逐次应用于一系列命题上。",
    "de": "Die fortgesetzte Anwendung einer Operation auf ihr eigenes Resultat nenne ich ihre successive Anwendung („O’O’O’a“ ist das Resultat der dreimaligen successiven Anwendung von „O’ξ“ auf „a“).\nIn einem ähnlichen Sinne rede ich von der successiven Anwendung mehrerer Operationen auf eine Anzahl von Sätzen.",
    "enPM": "If an operation is applied repeatedly to its own results, I speak of successive applications of it. (‘O’O’O’a’ is the result of three successive applications of the operation ‘O’ξ’ to ‘a’.)\nIn a similar sense I speak of successive applications of more than one operation to a number of propositions.",
    "depth": 5,
    "translated": true
  },
  "5.2522": {
    "en": "The general term of the formal series a, O'a, O'O'a,.... I write thus: \"[a, x, O'x]\". This expression in brackets is a variable. The first term of the expression is the beginning of the formal series, the second the form of an arbitrary term x of the series, and the third the form of that term of the series which immediately follows x.",
    "zh": "一个形式序列a, O'a, O'O'a……的一般项，我这样来写[a, x, O'x]。这个被括起来的表达式是一个变项。它的第一项是这个形式序列的起始项；第二项是任意选择出来的项x的形式，第三项是系列中紧随着x的那个项的形式。",
    "de": "Das allgemeine Glied einer Formenreihe a, O’a, O’O’a,… schreibe ich daher so: „[a, x, O’x]“. Dieser Klammerausdruck ist eine Variable. Das erste Glied des Klammerausdruckes ist der Anfang der Formenreihe, das zweite die Form eines beliebigen Gliedes x der Reihe und das dritte die Form desjenigen Gliedes der Reihe, welches auf x unmittelbar folgt.",
    "enPM": "Accordingly I use the sign ‘[a, x, O’x]’ for the general term of the series of forms a, O’a, O’O’a,…. This bracketed expression is a variable: the first term of the bracketed expression is the beginning of the series of forms, the second is the form of a term x arbitrarily selected from the series, and the third is the form of the term that immediately follows x in the series.",
    "depth": 5,
    "translated": true
  },
  "5.2523": {
    "en": "The concept of the successive application of an operation is equivalent to the concept \"and so on\".",
    "zh": "连续地应用一种运演这个观念，与「等等」是等价的。",
    "de": "Der Begriff der successiven Anwendung der Operation ist äquivalent mit dem Begriff „und so weiter“.",
    "enPM": "The concept of successive applications of an operation is equivalent to the concept ‘and so on’.",
    "depth": 5,
    "translated": true
  },
  "5.253": {
    "en": "One operation can reverse the effect of another. Operations can cancel one another.",
    "zh": "一种运演可以抵消另一种运演的结果。多种运演可以互相抵消。",
    "de": "Eine Operation kann die Wirkung einer anderen rückgängig machen. Operationen können einander aufheben.",
    "enPM": "One operation can counteract the effect of another. Operations can cancel one another.",
    "depth": 4,
    "translated": true
  },
  "5.254": {
    "en": "Operations can vanish (e.g. denial in \"$\\neg\\neg p$\". $\\neg\\neg p = p$).",
    "zh": "运演可以消失（例如，在「~ ~p」中的否定：~ ~p=p）。",
    "de": "Die Operation kann verschwinden (z. B. die Verneinung in „~~p“: ~~p=p).",
    "enPM": "An operation can vanish (e.g. negation in ‘~~p’: ~~p=p).",
    "depth": 4,
    "translated": true
  },
  "5.3": {
    "en": "All propositions are results of truth-operations on the elementary propositions.\nThe truth-operation is the way in which a truth-function arises from elementary propositions.\nAccording to the nature of truth-operations, in the same way as out of elementary propositions arise their truth-functions, from truth-functions arises a new one. Every truth-operation creates from truth-functions of elementary propositions, another truth-function of elementary propositions i.e. a proposition. The result of every truth-operation on the results of truth-operations on elementary propositions is also the result of one truth-operation on elementary propositions.\nEvery proposition is the result of truth-operations on elementary propositions.",
    "zh": "所有命题都是对基本命题作真值运算的结果。真值运算是由基本命题产生真值函项的方式。根据真值运算的本性，就像从基本命题中产生其真值函项一样，从真值函项中又产生新的真值函项。每一次真值运算都从基本命题的真值函项中产生出另一个基本命题的真值函项，即一个命题。每一次对基本命题的真值运算的结果进行真值运算，其结果仍然是基本命题的一次真值运算的结果。每个命题都是对基本命题作真值运算的结果。",
    "de": "Alle Sätze sind Resultate von Wahrheitsoperationen mit den Elementarsätzen.\nDie Wahrheitsoperation ist die Art und Weise, wie aus den Elementarsätzen die Wahrheitsfunktion entsteht.\nNach dem Wesen der Wahrheitsoperation wird auf die gleiche Weise, wie aus den Elementarsätzen ihre Wahrheitsfunktion, aus Wahrheitsfunktionen eine Neue. Jede Wahrheitsoperation erzeugt aus Wahrheitsfunktionen von Elementarsätzen wieder eine Wahrheitsfunktion von Elementarsätzen, einen Satz. Das Resultat jeder Wahrheitsoperation mit den Resultaten von Wahrheitsoperationen mit Elementarsätzen ist wieder das Resultat Einer Wahrheitsoperation mit Elementarsätzen.\nJeder Satz ist das Resultat von Wahrheitsoperationen mit Elementarsätzen.",
    "enPM": "All propositions are results of truth-operations on elementary propositions.\nA truth-operation is the way in which a truth-function is produced out of elementary propositions.\nIt is of the essence of truth-operations that, just as elementary propositions yield a truth-function of themselves, so too in the same way truth-functions yield a further truth-function. When a truth-operation is applied to truth-functions of elementary propositions, it always generates another truth-function of elementary propositions, another proposition. When a truth-operation is applied to the results of truth-operations on elementary propositions, there is always a single operation on elementary propositions that has the same result.\nEvery proposition is the result of truth-operations on elementary propositions.",
    "depth": 2,
    "translated": true
  },
  "5.31": {
    "en": "The Schemata No. 4.31 are also significant, if \"$p$\", \"$q$\", \"$r$\", etc. are not elementary propositions.\nAnd it is easy to see that the propositional sign in No. 4.442 expresses one truth-function of elementary propositions even when \"$p$\" and \"$q$\" are truth-functions of elementary propositions.",
    "zh": "即使「p」「q」「r」等——当它们不是基本命题时——含有作为基础的真值运算，在真值运算中那些图式（4.31）也具有一种含义。很容易看出，即使「p」和「q」是真值函项，在4.442中的命题记号也表达了基本命题的一个真值函项。",
    "de": "Die Schemata No. 4.31 haben auch dann eine Bedeutung, wenn „p“, „q“, „r“, etc. nicht Elementarsätze sind.\nUnd es ist leicht zu sehen, dass das Satzzeichen in No. 4.442, auch wenn „p“ und „q“ Wahrheitsfunktionen von Elementarsätzen sind, Eine Wahrheitsfunktion von Elementarsätzen ausdrückt.",
    "enPM": "The schemata in 4.31 have a meaning even when ‘p’, ‘q’, ‘r’, etc. are not elementary propositions.\nAnd it is easy to see that the propositional sign in 4.442 expresses a single truth-function of elementary propositions even when ‘p’ and ‘q’ are truth-functions of elementary propositions.",
    "depth": 3,
    "translated": true
  },
  "5.32": {
    "en": "All truth-functions are results of the successive application of a finite number of truth-operations to elementary propositions.",
    "zh": "所有真值函项都是对基本命题有限次地应用真值运算的结果，这些真值运算产生出这些真值函项。",
    "de": "Alle Wahrheitsfunktionen sind Resultate der successiven Anwendung einer endlichen Anzahl von Wahrheitsoperationen auf die Elementarsätze.",
    "enPM": "All truth-functions are results of successive applications to elementary propositions of a finite number of truth-operations.",
    "depth": 3,
    "translated": true
  },
  "5.4": {
    "en": "Here it becomes clear that there are no such things as \"logical objects\" or \"logical constants\" (in the sense of Frege and Russell).",
    "zh": "在这里变得清楚的是，不存在（在弗雷格和罗素意义上的）「逻辑对象」或「逻辑常项」。",
    "de": "Hier zeigt es sich, dass es „logische Gegenstände“, „logische Konstante“ (im Sinne Freges und Russells) nicht gibt.",
    "enPM": "At this point it becomes manifest that there are no ‘logical objects’ or ‘logical constants’ (in Frege’s and Russell’s sense).",
    "depth": 2,
    "translated": true
  },
  "5.41": {
    "en": "For all those results of truth-operations on truth-functions are identical, which are one and the same truth-function of elementary propositions.",
    "zh": "因为，那些对真值函项的真值运算所产生的所有的结果，当它们是基本命题的同一个真值函项时，就都是等同的。",
    "de": "Denn: Alle Resultate von Wahrheitsoperationen mit Wahrheitsfunktionen sind identisch, welche eine und dieselbe Wahrheitsfunktion von Elementarsätzen sind.",
    "enPM": "The reason is that the results of truth-operations on truth-functions are always identical whenever they are one and the same truth-function of elementary propositions.",
    "depth": 3,
    "translated": true
  },
  "5.42": {
    "en": "That $\\lor$, $\\supset$, etc., are not relations in the sense of right and left, etc., is obvious.\nThe possibility of crosswise definition of the logical \"primitive signs\" of Frege and Russell shows by itself that these are not primitive signs and that they signify no relations.\nAnd it is obvious that the \"$\\supset$\" which we define by means of \"$\\neg$\" and \"$\\lor$\" is identical with that by which we define \"$\\lor$\" with the help of \"$\\neg$\", and that this \"$\\lor$\" is the same as the first, and so on.",
    "zh": "显然，∨，⊃，等等不是左右方位的意义上的关系。弗雷格和罗素的逻辑的「原始记号」的相互定义已经表明这些记号不是原始记号，更不是标志着什么关系。而显然，那个我们用「~」和「∨」来定义的「⊃」与那个我们用「~」来与「∨」加以定义的、在其中「∨」出现的那个「⊃」也是等同的。",
    "de": "Dass ∨, ⊃, etc. nicht Beziehungen im Sinne von rechts und links etc. sind, leuchtet ein.\nDie Möglichkeit des kreuzweisen Definierens der logischen „Urzeichen“ Freges und Russells zeigt schon, dass diese keine Urzeichen sind, und schon erst recht, dass sie keine Relationen bezeichnen.\nUnd es ist offenbar, dass das „⊃“, welches wir durch „~“ und „∨“ definieren, identisch ist mit dem, durch welches wir „∨“ mit „~“ definieren, und dass dieses „∨“ mit dem ersten identisch ist. U. s. w.",
    "enPM": "It is self-evident that ∨, ⊃, etc. are not relations in the sense in which right and left etc. are relations.\nThe interdefinability of Frege’s and Russell’s ‘primitive signs’ of logic is enough to show that they are not primitive signs, still less signs for relations.\nAnd it is obvious that the ‘⊃’ defined by means of ‘~’ and ‘∨’ is identical with the one that figures with ‘~’ in the definition of ‘∨’; and that the second ‘∨’ is identical with the first one; and so on.",
    "depth": 3,
    "translated": true
  },
  "5.43": {
    "en": "That from a fact $p$ an infinite number of others should follow, namely, $\\neg\\neg p$, $\\neg\\neg\\neg\\neg p$, etc., is indeed hardly to be believed, and it is no less wonderful that the infinite number of propositions of logic (of mathematics) should follow from half a dozen \"primitive propositions\".\nBut the propositions of logic say the same thing. That is, nothing.",
    "zh": "从一个事实p会得出无穷多的其他事实，即~ ~p，~ ~ ~ ~p，等等，这实际上是难以相信的。而且同样令人奇怪的是，关于逻辑（数学）的无穷多个命题，竟是从半打「基本规律」得出来的。但是，所有逻辑命题说的都是同样的东西。即什么都没有说。",
    "de": "Dass aus einer Tatsache p unendlich viele andere folgen sollten, nämlich ~~p, ~~~~p, etc., ist doch von vornherein kaum zu glauben. Und nicht weniger merkwürdig ist, dass die unendliche Anzahl der Sätze der Logik (der Mathematik) aus einem halben Dutzend „Grundgesetzen“ folgen.\nAlle Sätze der Logik sagen aber dasselbe. Nämlich nichts.",
    "enPM": "Even at first sight it seems scarcely credible that there should follow from one fact p infinitely many others, namely ~~p, ~~~~p, etc. And it is no less remarkable that the infinite number of propositions of logic (mathematics) follow from half a dozen ‘primitive propositions’.\nBut in fact all the propositions of logic say the same thing, to wit nothing.",
    "depth": 3,
    "translated": true
  },
  "5.44": {
    "en": "Truth-functions are not material functions.\nIf e.g. an affirmation can be produced by repeated denial, is the denial---in any sense---contained in the affirmation? Does \"$\\neg\\neg p$\" deny $\\neg p$, or does it affirm $p$; or both?\nThe proposition \"$\\neg\\neg p$\" does not treat of denial as an object, but the possibility of denial is already prejudged in affirmation.\nAnd if there was an object called \"$\\neg$\", then \"$\\neg\\neg p$\" would have to say something other than \"$p$\". For the one proposition would then treat of $\\neg$, the other would not.",
    "zh": "真值函项并不是实质性的函项。如：肯定可由双重否定来产生。那么，是否双重否定在一种意义上就含于肯定之中了呢？「~~p」是否以一种隐蔽的方式含有p呢？",
    "de": "Die Wahrheitsfunktionen sind keine materiellen Funktionen.\nWenn man z. B. eine Bejahung durch doppelte Verneinung erzeugen kann, ist dann die Verneinung – in irgend einem Sinn – in der Bejahung enthalten? Verneint „~~p“ ~p, oder bejaht es p; oder beides?\nDer Satz „~~p“ handelt nicht von der Verneinung wie von einem Gegenstand; wohl aber ist die Möglichkeit der Verneinung in der Bejahung bereits präjudiziert.\nUnd gäbe es einen Gegenstand, der „~“ hieße, so müsste „~~p“ etwas anderes sagen als „p“. Denn der eine Satz würde dann eben von ~ handeln, der andere nicht.",
    "enPM": "Truth-functions are not material functions.\nFor example, an affirmation can be produced by double negation: in such a case does it follow that in some sense negation is contained in affirmation? Does ‘~~p’ negate ~p, or does it affirm p—or both?\nThe proposition ‘~~p’ is not about negation, as if negation were an object: on the other hand, the possibility of negation is already written into affirmation.\nAnd if there were an object called ‘~’, it would follow that ‘~~p’ said something different from what ‘p’ said, just because the one proposition would then be about ~ and the other would not.",
    "depth": 3,
    "translated": true
  },
  "5.441": {
    "en": "This disappearance of the apparent logical constants also occurs if \"$\\neg(\\exists x).\\neg fx$\" says the same as \"$(x).fx$\", or \"$(\\exists x).fx.x=a$\" the same as \"$fa$\".",
    "zh": "这些表面的逻辑常项的消失也发生在这样情况中：「~(∃x).~fx」与「(x).fx」说的是一样的，或者「(∃x).fx.x=a」与「fa」说的是一样的。",
    "de": "Dieses Verschwinden der scheinbaren logischen Konstanten tritt auch ein, wenn „~(∃x).~fx“ dasselbe sagt wie „(x).fx“, oder „(∃x).fx.x=a“ dasselbe wie „fa“.",
    "enPM": "This vanishing of the apparent logical constants also occurs in the case of ‘~(∃x).~fx’, which says the same as ‘(x).fx’, and in the case of ‘(∃x).fx.x=a’, which says the same as ‘fa’.",
    "depth": 4,
    "translated": true
  },
  "5.442": {
    "en": "If a proposition is given to us then the results of all truth-operations which have it as their basis are given with it.",
    "zh": "当我们给出了一个命题时，那么与之一起，所有那些真值运算的结果也就都已经给出了。",
    "de": "Wenn uns ein Satz gegeben ist, so sind mit ihm auch schon die Resultate aller Wahrheitsoperationen, die ihn zur Basis haben, gegeben.",
    "enPM": "If we are given a proposition, then with it we are also given the results of all truth-operations that have it as their base.",
    "depth": 4,
    "translated": true
  },
  "5.45": {
    "en": "If there are logical primitive signs a correct logic must make clear their position relative to one another and justify their existence. The construction of logic out of its primitive signs must become clear.",
    "zh": "如果存在着逻辑的原始记号，那么一个正确的逻辑就必须使它们彼此相对的位置清晰；必须使它们的存在得到确证。逻辑记号的相互引入必须是可被看清的。",
    "de": "Gibt es logische Urzeichen, so muss eine richtige Logik ihre Stellung zueinander klar machen und ihr Dasein rechtfertigen. Der Bau der Logik aus ihren Urzeichen muss klar werden.",
    "enPM": "If there are primitive logical signs, then any logic that fails to show clearly how they are placed relatively to one another and to justify their existence will be incorrect. The construction of logic out of its primitive signs must be made clear.",
    "depth": 3,
    "translated": true
  },
  "5.451": {
    "en": "If logic has primitive ideas these must be independent of one another. If a primitive idea is introduced it must be introduced in all contexts in which it occurs at all. One cannot therefore introduce it for one context and then again for another. For example, if denial is introduced, we must understand it in propositions of the form \"$\\neg p$\", just as in propositions like \"$\\neg(p \\lor q)$\", \"$(\\exists x).\\neg fx$\" and others. We may not first introduce it for one class of cases and then for another, for it would then remain doubtful whether its meaning in the two cases was the same, and there would be no reason to use the same way of symbolizing in the two cases.\n(In short, what Frege (\"Grundgesetze der Arithmetik\") has said about the introduction of signs by definitions holds, mutatis mutandis, for the introduction of primitive signs also.)",
    "zh": "如果逻辑具有初始概念，那么它们必须是互相独立的。如果一个初始概念被引入了，那么它必须是在它出现于其中的一切结合之中都已被引入。因此，不能先为一种结合引入它，然后又为另一种结合引入它。例如：如果否定被引入了，那么我们现在必须在具有「~p」形式的命题中正如在具有「~p∨q」「(∃x).~fx」等等形式的命题中一样理解它。我们不应该先为一种情况引入它，然后又为另一种情况引入它，因为这样一来，在这两种情况中它的意谓是否相同，便是悬而未定的了；在这两种情况中没有任何理由使用同一种符号结合方式。（简言之，为了引入原始记号的用法，FREGE曾说过的那些话（在《算术基本法则》中）经必要修正mutatis mutandis后也适用于原始记号的引入。）",
    "de": "Hat die Logik Grundbegriffe, so müssen sie von einander unabhängig sein. Ist ein Grundbegriff eingeführt, so muss er in allen Verbindungen eingeführt sein, worin er überhaupt vorkommt. Man kann ihn also nicht zuerst für eine Verbindung, dann noch einmal für eine andere einführen. Z. B.: Ist die Verneinung eingeführt, so müssen wir sie jetzt in Sätzen von der Form „~p“ ebenso verstehen, wie in Sätzen wie „~(p∨q)“, „(∃x).~fx“ u. a. Wir dürfen sie nicht erst für die eine Klasse von Fällen, dann für die andere einführen, denn es bliebe dann zweifelhaft, ob ihre Bedeutung in beiden Fällen die gleiche wäre und es wäre kein Grund vorhanden, in beiden Fällen dieselbe Art der Zeichenverbindung zu benützen.\n(Kurz, für die Einführung der Urzeichen gilt, mutatis mutandis, dasselbe, was Frege („Grundgesetze der Arithmetik“) für die Einführung von Zeichen durch Definitionen gesagt hat.)",
    "enPM": "If logic has primitive ideas, they must be independent of one another. If a primitive idea has been introduced, it must have been introduced in all the combinations in which it ever occurs. It cannot, therefore, be introduced first for one combination and later reintroduced for another. For example, once negation has been introduced, we must understand it both in propositions of the form ‘~p’ and in propositions like ‘~(p∨q)’, ‘(∃x).~fx’, etc. We must not introduce it first for the one class of cases and then for the other, since it would then be left in doubt whether its meaning were the same in both cases, and no reason would have been given for combining the signs in the same way in both cases.\n(In short, Frege’s remarks about introducing signs by means of definitions (in The Fundamental Laws of Arithmetic) also apply, mutatis mutandis, to the introduction of primitive signs.)",
    "depth": 4,
    "translated": true
  },
  "5.452": {
    "en": "The introduction of a new expedient in the symbolism of logic must always be an event full of consequences. No new symbol may be introduced in logic in brackets or in the margin---with, so to speak, an entirely innocent face.\n(Thus in the \"Principia Mathematica\" of Russell and Whitehead there occur definitions and primitive propositions in words. Why suddenly words here? This would need a justification. There was none, and can be none for the process is actually not allowed.)\nBut if the introduction of a new expedient has proved necessary in one place, we must immediately ask: Where is this expedient always to be used? Its position in logic must be made clear.",
    "zh": "把一种新的设计引入逻辑的符号系统之中，这必然总是后果严重的事情。任何新的设计在逻辑中都不可以一种可以说完全天真的样子在括号或脚注中被引入。（在罗素和怀特海的《数学原理》中，出现了许多以言语叙述形式引入的新的设计。）",
    "de": "Die Einführung eines neuen Behelfes in den Symbolismus der Logik muss immer ein folgenschweres Ereignis sein. Kein neuer Behelf darf in die Logik – sozusagen, mit ganz unschuldiger Miene – in Klammern oder unter dem Striche eingeführt werden.\n(So kommen in den „Principia Mathematica“ von Russell und Whitehead Definitionen und Grundgesetze in Worten vor. Warum hier plötzlich Worte? Dies bedürfte einer Rechtfertigung. Sie fehlt und muss fehlen, da das Vorgehen tatsächlich unerlaubt ist.)\nHat sich aber die Einführung eines neuen Behelfes an einer Stelle als nötig erwiesen, so muss man sich nun sofort fragen: Wo muss dieser Behelf nun immer angewandt werden? Seine Stellung in der Logik muss nun erklärt werden.",
    "enPM": "The introduction of any new device into the symbolism of logic is necessarily a momentous event. In logic a new device should not be introduced in brackets or in a footnote with what one might call a completely innocent air.\n(Thus in Russell and Whitehead’s Principia Mathematica there occur definitions and primitive propositions expressed in words. Why this sudden appearance of words? It would require a justification, but none is given, or could be given, since the procedure is in fact illicit.)\nBut if the introduction of a new device has proved necessary at a certain point, we must immediately ask ourselves, ‘At what points is the employment of this device now unavoidable?’ and its place in logic must be made clear.",
    "depth": 4,
    "translated": true
  },
  "5.453": {
    "en": "All numbers in logic must be capable of justification.\nOr rather it must become plain that there are no numbers in logic.\nThere are no pre-eminent numbers.",
    "zh": "在逻辑中必须没有任何数目。必须没有任何例外。",
    "de": "Alle Zahlen der Logik müssen sich rechtfertigen lassen.\nOder vielmehr: Es muss sich herausstellen, dass es in der Logik keine Zahlen gibt.\nEs gibt keine ausgezeichneten Zahlen.",
    "enPM": "All numbers in logic stand in need of justification.\nOr rather, it must become evident that there are no numbers in logic.\nThere are no privileged numbers.",
    "depth": 4,
    "translated": true
  },
  "5.454": {
    "en": "In logic there is no side by side, there can be no classification.\nIn logic there cannot be a more general and a more special.",
    "zh": "在逻辑中，一切都被给出了，没有任何可以是一起被解决的东西。在逻辑中，没有比肩而立的东西。在逻辑中，不可能有分类别。在逻辑中，不可能有更一般和更特殊。",
    "de": "In der Logik gibt es kein Nebeneinander, kann es keine Klassifikation geben.\nIn der Logik kann es nicht Allgemeineres und Spezielleres geben.",
    "enPM": "In logic there is no co-ordinate status, and there can be no classification.\nIn logic there can be no distinction between the general and the specific.",
    "depth": 4,
    "translated": true
  },
  "5.4541": {
    "en": "The solution of logical problems must be simple for they set the standard of simplicity.\nMen have always thought that there must be a sphere of questions whose answers---a priori---are symmetrical and united into a closed regular structure.\nA sphere in which the proposition, simplex sigillum veri, is valid.",
    "zh": "逻辑问题的解决必须是简单的，因为它们设置了简单性的标准。人总是预感到：必定存在着这样一个问题领域，在其中答案是——先天地——对称地、联合地形成一个自身封闭的、有规则的结构。——在这个领域中有效的是这样一个命题：Simplex sigillum veri。",
    "de": "Die Lösungen der logischen Probleme müssen einfach sein, denn sie setzen den Standard der Einfachheit.\nDie Menschen haben immer geahnt, dass es ein Gebiet von Fragen geben müsse, deren Antworten – a priori – symmetrisch, und zu einem abgeschlossenen, regelmäßigen Gebilde vereint liegen.\nEin Gebiet, in dem der Satz gilt: simplex sigillum veri.",
    "enPM": "The solutions of the problems of logic must be simple, since they set the standard of simplicity.\nMen have always had a presentiment that there must be a realm in which the answers to questions are symmetrically combined—a priori—to form a self-contained system.\nA realm subject to the law: Simplex sigillum veri.",
    "depth": 5,
    "translated": true
  },
  "5.46": {
    "en": "When we have rightly introduced the logical signs, the sense of all their combinations has been already introduced with them: therefore not only \"$p \\lor q$\" but also \"$\\neg(p \\lor \\neg q)$\", etc. etc. We should then already have introduced the effect of all possible combinations of brackets; and it would then have become clear that the proper general primitive signs are not \"$p \\lor q$\", \"$(\\exists x).fx$\", etc., but the most general form of their combinations.",
    "zh": "如果我们正确地引入了逻辑记号，那么我们也就已经引入了它们一切结合的含义；即不仅是「p∨q」，而且还有「~(p∨~q)」等等。我们也就已经引入了仅仅括号的一切结合的效用。这样就清楚了，真正的一般性的原始记号，非「p∨q」「(x).fx」等等，而是它们的结合的最一般的形式。",
    "de": "Wenn man die logischen Zeichen richtig einführte, so hätte man damit auch schon den Sinn aller ihrer Kombinationen eingeführt; also nicht nur „p∨q“ sondern auch schon „~(p∨~q)“ etc. etc. Man hätte damit auch schon die Wirkung aller nur möglichen Kombinationen von Klammern eingeführt. Und damit wäre es klar geworden, dass die eigentlichen allgemeinen Urzeichen nicht die „p∨q “, „(∃x).fx“, etc. sind, sondern die allgemeinste Form ihrer Kombinationen.",
    "enPM": "If we introduced logical signs properly, then we should also have introduced at the same time the sense of all combinations of them; i.e. not only ‘p∨q’ but ‘~(p∨~q)’ as well, etc. etc. We should also have introduced at the same time the effect of all possible combinations of brackets. And thus it would have been made clear that the real general primitive signs are not ‘p∨q’, ‘(∃x).fx’, etc. but the most general form of their combinations.",
    "depth": 3,
    "translated": true
  },
  "5.461": {
    "en": "The apparently unimportant fact that the apparent relations like $\\lor$ and $\\supset$ need brackets---unlike real relations---is of great importance.\nThe use of brackets with these apparent primitive signs shows that these are not the real primitive signs; and nobody of course would believe that the brackets have meaning by themselves.",
    "zh": "显得不重要然而具有重要含义的是：逻辑的伪关系，如∨和⊃，需要括号——这与真正的那些不同。在那些原始的记号旁使用括号，这本身已经表明那些原始的记号实际上不是关系记号。然而却没有人会相信：括号具有一种独立的含义。",
    "de": "Bedeutungsvoll ist die scheinbar unwichtige Tatsache, dass die logischen Scheinbeziehungen, wie ∨ und ⊃, der Klammern bedürfen – im Gegensatz zu den wirklichen Beziehungen.\nDie Benützung der Klammern mit jenen scheinbaren Urzeichen deutet ja schon darauf hin, dass diese nicht die wirklichen Urzeichen sind. Und es wird doch wohl niemand glauben, dass die Klammern eine selbständige Bedeutung haben.",
    "enPM": "Though it seems unimportant, it is in fact significant that the pseudo-relations of logic, such as ∨ and ⊃, need brackets—unlike real relations.\nIndeed, the use of brackets with these apparently primitive signs is itself an indication that they are not primitive signs. And surely no one is going to believe brackets have an independent meaning.",
    "depth": 4,
    "translated": true
  },
  "5.4611": {
    "en": "Logical operation signs are punctuations.",
    "zh": "逻辑运算记号的那些记号是标点。",
    "de": "Die logischen Operationszeichen sind Interpunktionen.",
    "enPM": "Signs for logical operations are punctuation-marks.",
    "depth": 5,
    "translated": true
  },
  "5.47": {
    "en": "It is clear that everything which can be said beforehand about the form of all propositions at all can be said on one occasion.\nFor all logical operations are already contained in the elementary proposition. For \"$fa$\" says the same as\n\"$(\\exists x).fx.x=a$\".\nWhere there is composition, there is argument and function, and where these are, all logical constants already are.\nOne could say: the one logical constant is that which all propositions, according to their nature, have in common with one another.\nThat however is the general form of proposition.",
    "zh": "很明显，凡是一般地可以关于一切命题的形式预先说出的东西，都可以一次说出。所有逻辑命题都已经是预先一次性道尽的了。因为，所有命题变项的所有逻辑运演都已经包含在基本命题中。",
    "de": "Es ist klar, dass alles, was sich überhaupt von vornherein über die Form aller Sätze sagen lässt, sich auf einmal sagen lassen muss.\nSind ja schon im Elementarsatze alle logischen Operationen enthalten. Denn „fa“ sagt dasselbe wie\n„(∃x).fx.x=a“.\nWo Zusammengesetztheit ist, da ist Argument und Funktion, und wo diese sind, sind bereits alle logischen Konstanten.\nMan könnte sagen: Die Eine logische Konstante ist das, was alle Sätze, ihrer Natur nach, mit einander gemein haben.\nDas aber ist die allgemeine Satzform.",
    "enPM": "It is clear that whatever we can say in advance about the form of all propositions, we must be able to say all at once.\nAn elementary proposition really contains all logical operations in itself. For ‘fa’ says the same thing as\n‘(∃x).fx.x=a’.\nWherever there is compositeness, argument and function are present, and where these are present, we already have all the logical constants.\nOne could say that the sole logical constant was what all propositions, by their very nature, had in common with one another.\nBut that is the general propositional form.",
    "depth": 3,
    "translated": true
  },
  "5.471": {
    "en": "The general form of proposition is the essence of proposition.",
    "zh": "命题的一般形式就是命题的本质。",
    "de": "Die allgemeine Satzform ist das Wesen des Satzes.",
    "enPM": "The general propositional form is the essence of a proposition.",
    "depth": 4,
    "translated": true
  },
  "5.4711": {
    "en": "To give the essence of proposition means to give the essence of all description, therefore the essence of the world.",
    "zh": "给出命题的本质，意味着给出一切描述的本质，从而也就意味着给出世界的本质。",
    "de": "Das Wesen des Satzes angeben, heißt, das Wesen aller Beschreibung angeben, also das Wesen der Welt.",
    "enPM": "To give the essence of a proposition means to give the essence of all description, and thus the essence of the world.",
    "depth": 5,
    "translated": true
  },
  "5.472": {
    "en": "The description of the most general propositional form is the description of the one and only general primitive sign in logic.",
    "zh": "对最一般的命题形式的描述，就是对逻辑中唯一的那个、一般性的原始记号的描述。",
    "de": "Die Beschreibung der allgemeinsten Satzform ist die Beschreibung des einen und einzigen allgemeinen Urzeichens der Logik.",
    "enPM": "The description of the most general propositional form is the description of the one and only general primitive sign in logic.",
    "depth": 4,
    "translated": true
  },
  "5.473": {
    "en": "Logic must take care of itself.\nA possible sign must also be able to signify. Everything which is possible in logic is also permitted. (\"Socrates is identical\" means nothing because there is no property which is called \"identical\". The proposition is senseless because we have not made some arbitrary determination, not because the symbol is in itself unpermissible.)\nIn a certain sense we cannot make mistakes in logic.",
    "zh": "逻辑必须照料自己。如果一个记号是可能的，那么它也就能够进行指谓。凡是可能的东西，在逻辑中也就是合法的。（「苏格拉底是同一的」这个命题之所以没有意谓什么，乃是因为没有一种叫作「同一的」的性质。该命题之所以无含义，是因为我们并没有做出某种任意的规定，而不是因为该符号本身是不被允许的。）",
    "de": "Die Logik muss für sich selber sorgen.\nEin mögliches Zeichen muss auch bezeichnen können. Alles was in der Logik möglich ist, ist auch erlaubt. („Sokrates ist identisch“ heißt darum nichts, weil es keine Eigenschaft gibt, die „identisch“ heißt. Der Satz ist unsinnig, weil wir eine willkürliche Bestimmung nicht getroffen haben, aber nicht darum, weil das Symbol an und für sich unerlaubt wäre.)\nWir können uns, in gewissem Sinne, nicht in der Logik irren.",
    "enPM": "Logic must look after itself.\nIf a sign is possible, then it is also capable of signifying. Whatever is possible in logic is also permitted. (The reason why ‘Socrates is identical’ means nothing is that there is no property called ‘identical’. The proposition is nonsensical because we have failed to make an arbitrary determination, and not because the symbol, in itself, would be illegitimate.)\nIn a certain sense, we cannot make mistakes in logic.",
    "depth": 4,
    "translated": true
  },
  "5.4731": {
    "en": "Self-evidence, of which Russell has said so much, can only be discard in logic by language itself preventing every logical mistake. That logic is a priori consists in the fact that we cannot think illogically.",
    "zh": "自明性——罗素曾对此谈论过那样多——在逻辑中之所以能够是多余的，仅仅是因为语言本身会防止任何逻辑错误。——逻辑的先天性在于：不可能不合逻辑地思想。",
    "de": "Das Einleuchten, von dem Russell so viel sprach, kann nur dadurch in der Logik entbehrlich werden, dass die Sprache selbst jeden logischen Fehler verhindert. – Dass die Logik a priori ist, besteht darin, dass nicht unlogisch gedacht werden kann.",
    "enPM": "Self-evidence, which Russell talked about so much, can become dispensable in logic, only because language itself prevents every logical mistake.—What makes logic a priori is the impossibility of illogical thought.",
    "depth": 5,
    "translated": true
  },
  "5.4732": {
    "en": "We cannot give a sign the wrong sense.",
    "zh": "我们不能给予一个记号以错误的意义。",
    "de": "Wir können einem Zeichen nicht den unrechten Sinn geben.",
    "enPM": "We cannot give a sign the wrong sense.",
    "depth": 5,
    "translated": true
  },
  "5.47321": {
    "en": "Occam's razor is, of course, not an arbitrary rule nor one justified by its practical success. It simply says that unnecessary elements in a symbolism mean nothing.\nSigns which serve one purpose are logically equivalent, signs which serve no purpose are logically meaningless.",
    "zh": "奥卡姆剃刀自然不是一条任意的规则，也不是一条通过实践上成功来证成的规则：它说的是，语言中不必要的记号单元什么也不指谓。满足了同一个目的的诸记号在逻辑上是等价的；没有满足任何目的的诸记号在逻辑上是无含义的。",
    "de": "Occams Devise ist natürlich keine willkürliche, oder durch ihren praktischen Erfolg gerechtfertigte Regel: Sie besagt, dass unnötige Zeicheneinheiten nichts bedeuten.\nZeichen, die Einen Zweck erfüllen, sind logisch äquivalent, Zeichen, die keinen Zweck erfüllen, logisch bedeutungslos.",
    "enPM": "Occam’s maxim is, of course, not an arbitrary rule, nor one that is justified by its success in practice: its point is that unnecessary units in a sign-language mean nothing.\nSigns that serve one purpose are logically equivalent, and signs that serve none are logically meaningless.",
    "depth": 6,
    "translated": true
  },
  "5.4733": {
    "en": "Frege says: Every legitimately constructed proposition must have a sense; and I say: Every possible proposition is legitimately constructed, and if it has no sense this can only be because we have given no meaning to some of its constituent parts.\n(Even if we believe that we have done so.)\nThus \"Socrates is identical\" says nothing, because we have given no meaning to the word \"identical\" as adjective. For when it occurs as the sign of equality it symbolizes in an entirely different way---the symbolizing relation is another---therefore the symbol is in the two cases entirely different; the two symbols have the sign in common with one another only by accident.",
    "zh": "弗雷格说：每一个合法构成的命题都必须有一个含义；而我说：每一个可能的命题都是合法构成的，而如果它没有一个含义，那只能是因为我们没有给予它的某些构成部分以任何意谓。（即使我们相信已经这样做了。）因此，「苏格拉底是同一的」什么也没有说，乃是因为我们没有赋予「同一的」一词作为形容词以任何意谓。因为当它作为等号出现时，它以完全不同的符号关系即另一种标示方式进行意谓。在这两个符号中，记号是相同的，而符号关系则是不同的，因此这两个符号是通过不同的方式来标示的。",
    "de": "Frege sagt: Jeder rechtmäßig gebildete Satz muss einen Sinn haben; und ich sage: Jeder mögliche Satz ist rechtmäßig gebildet, und wenn er keinen Sinn hat, so kann das nur daran liegen, dass wir einigen seiner Bestandteile keine Bedeutung gegeben haben.\n(Wenn wir auch glauben, es getan zu haben.)\nSo sagt „Sokrates ist identisch“ darum nichts, weil wir dem Wort „identisch“ als Eigenschaftswort keine Bedeutung gegeben haben. Denn, wenn es als Gleichheitszeichen auftritt, so symbolisiert es auf ganz andere Art und Weise – die bezeichnende Beziehung ist eine andere, – also ist auch das Symbol in beiden Fällen ganz verschieden; die beiden Symbole haben nur das Zeichen zufällig miteinander gemein.",
    "enPM": "Frege says that any legitimately constructed proposition must have a sense. And I say that any possible proposition is legitimately constructed, and, if it has no sense, that can only be because we have failed to give a meaning to some of its constituents.\n(Even if we think that we have done so.)\nThus the reason why ‘Socrates is identical’ says nothing is that we have not given any adjectival meaning to the word ‘identical’. For when it appears as a sign for identity, it symbolizes in an entirely different way—the signifying relation is a different one—therefore the symbols also are entirely different in the two cases: the two symbols have only the sign in common, and that is an accident.",
    "depth": 5,
    "translated": true
  },
  "5.474": {
    "en": "The number of necessary fundamental operations depends only on our notation.",
    "zh": "所需要的那些基本运演的数目，仅仅依赖于我们的记号法。",
    "de": "Die Anzahl der nötigen Grundoperationen hängt nur von unserer Notation ab.",
    "enPM": "The number of fundamental operations that are necessary depends solely on our notation.",
    "depth": 4,
    "translated": true
  },
  "5.475": {
    "en": "It is only a question of constructing a system of signs of a definite number of dimensions---of a definite mathematical multiplicity.",
    "zh": "问题仅仅是构造一个记号系统——它具有特定数目的维数——即一个具有特定数学的多重性的符号系统。",
    "de": "Es kommt nur darauf an, ein Zeichensystem von einer bestimmten Anzahl von Dimensionen – von einer bestimmten mathematischen Mannigfaltigkeit – zu bilden.",
    "enPM": "All that is required is that we should construct a system of signs with a particular number of dimensions—with a particular mathematical multiplicity.",
    "depth": 4,
    "translated": true
  },
  "5.476": {
    "en": "It is clear that we are not concerned here with a number of primitive ideas which must be signified but with the expression of a rule.",
    "zh": "显然，这里所谈的不是必须被标示出来的若干初始概念，而是对一条规则的表达而已。",
    "de": "Es ist klar, dass es sich hier nicht um eine Anzahl von Grundbegriffen handelt, die bezeichnet werden müssen, sondern um den Ausdruck einer Regel.",
    "enPM": "It is clear that this is not a question of a number of primitive ideas that have to be signified, but rather of the expression of a rule.",
    "depth": 4,
    "translated": true
  },
  "5.5": {
    "en": "Every truth-function is a result of the successive application of the operation (-----T)($\\xi$,....) to elementary propositions.\nThis operation denies all the propositions in the right-hand bracket and I call it the negation of these propositions.",
    "zh": "每一个真值函项都是将运算（-----W）（ξ,....）逐次应用于基本命题的结果。这个运演否定了右边括号中的所有命题，我称之为这些命题的否定。",
    "de": "Jede Wahrheitsfunktion ist ein Resultat der successiven Anwendung der Operation (−−−−−W) (ξ, . . . . .) auf Elementarsätze.\nDiese Operation verneint sämtliche Sätze in der rechten Klammer, und ich nenne sie die Negation dieser Sätze.",
    "enPM": "Every truth-function is a result of successive applications to elementary propositions of the operation ‘(−−−−−T) (ξ, . . . . .)’.\nThis operation negates all the propositions in the right-hand pair of brackets, and I call it the negation of those propositions.",
    "depth": 2,
    "translated": true
  },
  "5.501": {
    "en": "An expression in brackets whose terms are propositions I indicate---if the order of the terms in the bracket is indifferent---by a sign of the form \"($\\xi$)\". \"$\\xi$\" is a variable whose values are the terms of the expression in brackets, and the line over the variable indicates that it stands for all its values in the bracket.\n(Thus if $\\xi$ has the 3 values $P$, $Q$, $R$, then $(\\xi)=(P, Q, R)$.)\nThe values of the variables must be determined.\nThe determination is the description of the propositions which the variable stands for.\nHow the description of the terms of the expression in brackets takes place is unessential.\nWe may distinguish 3 kinds of description: 1. Direct enumeration. In this case we can place simply its constant values instead of the variable. 2. Giving a function fx, whose values for all values of x are the propositions to be described. 3. Giving a formal law, according to which those propositions are constructed. In this case the terms of the expression in brackets are all the terms of a formal series.",
    "zh": "一个括在括号中、其诸项为命题的表达式——括号中诸项的排列次序是无关紧要的——我用一个形如「(ξ)」的记号来标示它。ξ是一个变项，它的值就是那个括号表达式的各项；而那加在变项上的横线则表示，该变项在括号中代表它的所有的值。（因此，如果ξ有三个值P, Q, R，那么 (ξ) = (P, Q, R)。）这些变项的值是被规定好的。这种规定是对这些变项所代表的那些命题的描述。至于括号表达式中的诸项是如何被描述的，这是无关紧要的。我们可以区分三种描述：1. 直接列举。在此情形中，我们能够简单地用常项值来代替那个变项。2. 给出一个函项fx，它的所有那些对所有x的值都是将被描述的命题。3. 给出一个形式的规律，那些命题按照这规律被构造出来。在这种情况下，这个括号表达式的各项就是一个形式序列的全部各项。",
    "de": "Einen Klammerausdruck, dessen Glieder Sätze sind, deute ich – wenn die Reihenfolge der Glieder in der Klammer gleichgültig ist – durch ein Zeichen von der Form „(ξ)“ an. „ξ“ ist eine Variable, deren Werte die Glieder des Klammerausdruckes sind; und der Strich über der Variablen deutet an, dass sie ihre sämtlichen Werte in der Klammer vertritt.\n(Hat also ξ etwa die 3 Werte P, Q, R, so ist (ξ)=(P, Q, R).)\nDie Werte der Variablen werden festgesetzt.\nDie Festsetzung ist die Beschreibung der Sätze, welche die Variable vertritt.\nWie die Beschreibung der Glieder des Klammerausdruckes geschieht, ist unwesentlich.\nWir können drei Arten der Beschreibung unterscheiden: 1. Die direkte Aufzählung. In diesem Fall können wir statt der Variablen einfach ihre konstanten Werte setzen. 2. Die Angabe einer Funktion fx, deren Werte für alle Werte von x die zu beschreibenden Sätze sind. 3. Die Angabe eines formalen Gesetzes, nach welchem jene Sätze gebildet sind. In diesem Falle sind die Glieder des Klammerausdrucks sämtliche Glieder einer Formenreihe.",
    "enPM": "When a bracketed expression has propositions as its terms—and the order of the terms inside the brackets is indifferent—then I indicate it by a sign of the form ‘(ξ)’. ‘ξ’ is a variable whose values are terms of the bracketed expression and the bar over the variable indicates that it is the representative of all its values in the brackets.\n(E.g. if ξ has the three values P, Q, R, then (ξ)=(P, Q, R). )\nWhat the values of the variable are is something that is stipulated.\nThe stipulation is a description of the propositions that have the variable as their representative.\nHow the description of the terms of the bracketed expression is produced is not essential.\nWe can distinguish three kinds of description: 1. direct enumeration, in which case we can simply substitute for the variable the constants that are its values; 2. giving a function fx whose values for all values of x are the propositions to be described; 3. giving a formal law that governs the construction of the propositions, in which case the bracketed expression has as its members all the terms of a series of forms.",
    "depth": 3,
    "translated": true
  },
  "5.502": {
    "en": "Therefore I write instead of \"(-----T)($\\xi$,....)\", \"$N(\\xi)$\".\n$N(\\xi)$ is the negation of all the values of the propositional variable $\\xi$.",
    "zh": "因此，我不用「(-----W)(ξ,....)」而写「N(ξ)」。N(ξ)是命题变项ξ的所有值的否定。",
    "de": "Ich schreibe also statt „(−−−−−W) (ξ, . . . . .)“ „N(ξ)“.\nN(ξ) ist die Negation sämtlicher Werte der Satzvariablen ξ.",
    "enPM": "So instead of ‘(−−−−−T) (ξ, . . . . .)’, I write ‘N(ξ)’.\nN(ξ) is the negation of all the values of the propositional variable ξ.",
    "depth": 3,
    "translated": true
  },
  "5.503": {
    "en": "As it is obviously easy to express how propositions can be constructed by means of this operation and how propositions are not to be constructed by means of it, this must be capable of exact expression.",
    "zh": "因为很明显，用这个运演很容易表达命题是怎样能够用这运演来构造的，以及命题是怎样不能够用这运演来构造的；因而这必然也能够得到精确的表达。",
    "de": "Da sich offenbar leicht ausdrücken lässt, wie mit dieser Operation Sätze gebildet werden können und wie Sätze mit ihr nicht zu bilden sind, so muss dies auch einen exakten Ausdruck finden können.",
    "enPM": "It is obvious that we can easily express how propositions may be constructed with this operation, and how they may not be constructed with it; so it must be possible to find an exact expression for this.",
    "depth": 3,
    "translated": true
  },
  "5.51": {
    "en": "If $\\xi$ has only one value, then $N(\\xi) = \\neg p$ (not $p$), if it has two values then $N(\\xi) = \\neg p.\\neg q$ (neither $p$ nor $q$).",
    "zh": "如果ξ只有一个值，则N(ξ)=~p（非p）；如果它有两个值，则N(ξ)=~p·~q（既非p又非q）。",
    "de": "Hat ξ nur einen Wert, so ist N(ξ)=~p (nicht p), hat es zwei Werte, so ist N (ξ)=~p.~q (weder p noch q).",
    "enPM": "If ξ has only one value, then N(ξ)=~p (not p); if it has two values, then N (ξ)=~p.~q (neither p nor q).",
    "depth": 3,
    "translated": true
  },
  "5.511": {
    "en": "How can the all-embracing logic which mirrors the world use such special catches and manipulations? Only because all these are connected into an infinitely fine network, to the great mirror.",
    "zh": "那通观一切、映现世界的逻辑，怎么能够在这样一些特殊的钩子和处理中应用呢？仅仅是因为它们全都联结为一个无限精细的网络——这面巨大无比的镜子。",
    "de": "Wie kann die allumfassende, weltspiegelnde Logik so spezielle Haken und Manipulationen gebrauchen? Nur, indem sich alle diese zu einem unendlich feinen Netzwerk, zu dem großen Spiegel, verknüpfen.",
    "enPM": "How can logic—all-embracing logic, which mirrors the world—use such peculiar crotchets and contrivances? Only because they are all connected with one another in an infinitely fine network, the great mirror.",
    "depth": 4,
    "translated": true
  },
  "5.512": {
    "en": "\"$\\neg p$\" is true if \"$p$\" is false. Therefore in the true proposition \"$\\neg p$\" \"$p$\" is a false proposition. How then can the stroke \"$\\neg$\" bring it into agreement with reality?\nThat which denies in \"$\\neg p$\" is however not \"$\\neg$\", but that which all signs of this notation, which deny p, have in common.\nHence the common rule according to which \"$\\neg p$\", \"$\\neg\\neg\\neg p$\", \"$\\neg p \\lor \\negp$\", \"\\neg p.\\neg p\", etc. etc. (to infinity) are constructed. And this which is common to them all mirrors denial.",
    "zh": "「~p」是真的，当「p」是假的。因此，在真的命题「~p」中，「p」是一个假命题。那么记号「~」怎么能够使他与现实一致呢？然而在~p中起否定作用的东西，不是「~」本身，而是这个记号系统中所有否定p的记号所共有的东西。这就是据以构成~p, ~~~p, ~p∨~p, ~p·~p等等（以至于无穷）的那个共同的规则。而这个共同的东西映现了否定。",
    "de": "„~p“ ist wahr, wenn „p“ falsch ist. Also in dem wahren Satz „~p“ ist „p“ ein falscher Satz. Wie kann ihn nun der Strich „~“ mit der Wirklichkeit zum Stimmen bringen?\nDas, was in „~p“ verneint, ist aber nicht das „~“, sondern dasjenige, was allen Zeichen dieser Notation, welche p verneinen, gemeinsam ist.\nAlso die gemeinsame Regel, nach welcher „~p“, „~~~p“, „~p∨~p“, „~p.~p“, etc. etc. (ad inf.) gebildet werden. Und dies Gemeinsame spiegelt die Verneinung wieder.",
    "enPM": "‘~p’ is true if ‘p’ is false. Therefore, in the proposition ‘~p’, when it is true, ‘p’ is a false proposition. How then can the stroke ‘~’ make it agree with reality?\nBut in ‘~p’ it is not ‘~’ that negates, it is rather what is common to all the signs of this notation that negate p.\nThat is to say the common rule that governs the construction of ‘~p’, ‘~~~p’, ‘~p∨~p’, ‘~p.~p’, etc. etc. (ad inf.). And this common factor mirrors negation.",
    "depth": 4,
    "translated": true
  },
  "5.513": {
    "en": "We could say: What is common to all symbols, which assert both $p$ and $q$, is the proposition \"$p.q$\". What is common to all symbols, which asserts either $p$ or $q$, is the proposition \"$p \\lor q$\".\nAnd similarly we can say: Two propositions are opposed to one another when they have nothing in common with one another; and every proposition has only one negative, because there is only one proposition which lies altogether outside it.\nThus in Russell's notation also it appears evident that \"$q : p \\lor \\neg p$\" says the same thing as \"$q$\"; that \"$p \\lor \\neg p$\" says nothing.",
    "zh": "人们可以说：所有那些既肯定p又肯定q的符号所共有的东西，就是命题「p·q」。所有那些或者肯定p或者肯定q的符号所共有的东西，就是命题「p∨q」。因此我们可以说：两个命题是彼此反对的，当它们没有任何共同的东西的时候；并且：每一个命题都只具有一种否定，因为只有一个命题完全在它之外。因此同样，在罗素的记号法中，也显示出「q:p∨~p」说的与「q」是同样的东西；「p∨~p」什么也没有说。",
    "de": "Man könnte sagen: Das Gemeinsame aller Symbole, die sowohl p als q bejahen, ist der Satz „p.q“. Das Gemeinsame aller Symbole, die entweder p oder q bejahen, ist der Satz „p∨q“.\nUnd so kann man sagen: Zwei Sätze sind einander entgegengesetzt, wenn sie nichts miteinander gemein haben, und: Jeder Satz hat nur ein Negativ, weil es nur einen Satz gibt, der ganz außerhalb seiner liegt.\nEs zeigt sich so auch in Russells Notation, dass „q:p∨~p“ dasselbe sagt wie „q“; dass „p∨~p“ nichts sagt.",
    "enPM": "We might say that what is common to all symbols that affirm both p and q is the proposition ‘p.q’; and that what is common to all symbols that affirm either p or q is the proposition ‘p∨q’.\nAnd similarly we can say that two propositions are opposed to one another if they have nothing in common with one another, and that every proposition has only one negative, since there is only one proposition that lies completely outside it.\nThus in Russell’s notation too it is manifest that ‘q:p∨~p’ says the same thing as ‘q’, that ‘p∨~p’ says nothing.",
    "depth": 4,
    "translated": true
  },
  "5.514": {
    "en": "If a notation is fixed, there is in it a rule according to which all the propositions denying $p$ are constructed, a rule according to which all the propositions asserting $p$ are constructed, a rule according to which all the propositions asserting $p$ or $q$ are constructed, and so on. These rules are equivalent to the symbols and in them their sense is mirrored.",
    "zh": "一种记号法一旦确定下来，在其中由p∨q, ~p等等构成的所有规则就都已经被给予了。事实上，在理想的记号法中是已经给予了。",
    "de": "Ist eine Notation festgelegt, so gibt es in ihr eine Regel, nach der alle p verneinenden Sätze gebildet werden, eine Regel, nach der alle p bejahenden Sätze gebildet werden, eine Regel, nach der alle p oder q bejahenden Sätze gebildet werden, u. s. f. Diese Regeln sind den Symbolen äquivalent und in ihnen spiegelt sich ihr Sinn wieder.",
    "enPM": "Once a notation has been established, there will be in it a rule governing the construction of all propositions that negate p, a rule governing the construction of all propositions that affirm p, and a rule governing the construction of all propositions that affirm p or q; and so on. These rules are equivalent to the symbols; and in them their sense is mirrored.",
    "depth": 4,
    "translated": true
  },
  "5.515": {
    "en": "It must be recognized in our symbols that what is connected by \"$\\lor$\", \".\", etc., must be propositions.\nAnd this is the case, for the symbols \"$p$\" and \"$q$\" presuppose \"$\\lor$\", \"$\\neg$\", etc. If the sign \"$p$\" in \"$p \\lor q$\" does not stand for a complex sign, then by itself it cannot have sense; but then also the signs \"$p \\lor p$\", \"$p.p$\", etc. which have the same sense as \"$p$\" have no sense. If, however, \"$p \\lor p$\" has no sense, then also \"$p \\lor q$\" can have no sense.",
    "zh": "必须通过我们的那些符号来显示出来的乃是：那些以「∨」「·」等等结合起来的东西，必须是命题。而情况正是如此，因为符号「p」和「q」本身就假定了「∨」「~」等等。如果在「p∨q」中的记号「p」不代表一个复合的记号，那么它单独地根本不能有意义；而这样一来，和「p」具有相同含义的记号「p∨p」「p·p」等等也就不能有意义。但是如果「p∨p」没有含义，那么「p∨q」也就绝对不会有一种含义。",
    "de": "Es muss sich an unseren Symbolen zeigen, dass das, was durch „∨“, „.“, etc. miteinander verbunden ist, Sätze sein müssen.\nUnd dies ist auch der Fall, denn das Symbol „p“ und „q“ setzt ja selbst das „∨“, „~“, etc. voraus. Wenn das Zeichen „p“ in „p∨q“ nicht für ein komplexes Zeichen steht, dann kann es allein nicht Sinn haben; dann können aber auch die mit „p“ gleichsinnigen Zeichen „p∨p“, „p.p“, etc. keinen Sinn haben. Wenn aber „p∨p“ keinen Sinn hat, dann kann auch „p∨q“ keinen Sinn haben.",
    "enPM": "It must be manifest in our symbols that it can only be propositions that are combined with one another by ‘∨’, ‘.’, etc.\nAnd this is indeed the case, since the symbol in ‘p’ and ‘q’ itself presupposes ‘∨’, ‘~’, etc. If the sign ‘p’ in ‘p∨q’ does not stand for a complex sign, then it cannot have sense by itself: but in that case the signs ‘p∨p’, ‘p.p’, etc., which have the same sense as p, must also lack sense. But if ‘p∨p’ has no sense, then ‘p∨q’ cannot have a sense either.",
    "depth": 4,
    "translated": true
  },
  "5.5151": {
    "en": "Must the sign of the negative proposition be constructed by means of the sign of the positive? Why should one not be able to express the negative proposition by means of a negative fact? (Like: if \"$a$\" does not stand in a certain relation to \"$b$\", it could express that $aRb$ is not the case.)\nBut here also the negative proposition is indirectly constructed with the positive.\nThe positive proposition must presuppose the existence of the negative proposition and conversely.",
    "zh": "一个否定命题的记号必须是用那肯定的命题的记号构造而成的吗？究竟为什么不能用一种否定的事实来表达一个否定的命题呢？（例如：如果「a」并不处于对「b」的某关系中，这可以表达为：aRb不是实际情况。但是在这里，否定命题也确实是通过那肯定的命题间接地构成的。）肯定的命题必须预设否定命题的存在，反之亦然。",
    "de": "Muss das Zeichen des negativen Satzes mit dem Zeichen des positiven gebildet werden? Warum sollte man den negativen Satz nicht durch eine negative Tatsache ausdrücken können. (Etwa: Wenn „a“ nicht in einer bestimmten Beziehung zu „b“ steht, könnte das ausdrücken, dass aRb nicht der Fall ist.)\nAber auch hier ist ja der negative Satz indirekt durch den positiven gebildet.\nDer positive Satz muss die Existenz des negativen Satzes voraussetzen und umgekehrt.",
    "enPM": "Must the sign of a negative proposition be constructed with that of the positive proposition? Why should it not be possible to express a negative proposition by means of a negative fact? (E.g. suppose that ‘a’ does not stand in a certain relation to ‘b’; then this might be used to say that aRb was not the case.)\nBut really even in this case the negative proposition is constructed by an indirect use of the positive.\nThe positive proposition necessarily presupposes the existence of the negative proposition and vice versa.",
    "depth": 5,
    "translated": true
  },
  "5.52": {
    "en": "If the values of $\\xi$ are the total values of a function $fx$ for all values of $x$, then $N(\\xi) = \\neg(\\exists x).fx$.",
    "zh": "如果ξ的那些值是函项fx对于所有x值的全部值，那么N(ξ)=~(∃x).fx。",
    "de": "Sind die Werte von ξ sämtliche Werte einer Funktion fx für alle Werte von x, so wird N(ξ)=~(∃x).fx.",
    "enPM": "If ξ has as its values all the values of a function fx for all values of x, then N(ξ)=~(∃x).fx.",
    "depth": 3,
    "translated": true
  },
  "5.521": {
    "en": "I separate the concept all from the truth-function.\nFrege and Russell have introduced generality in connexion with the logical product or the logical sum. Then it would be difficult to understand the propositions \"$(\\exists x).fx$\" and \"$(x).fx$\" in which both ideas lie concealed.",
    "zh": "我把「所有的」这个概念和真值函项分离开。弗雷格和罗素是与逻辑积或逻辑和联系起来引入概括的。这样就不易理解那隐藏在这两个概念下的命题「(∃x).fx」和「(x).fx」。",
    "de": "Ich trenne den Begriff Alle von der Wahrheitsfunktion.\nFrege und Russell haben die Allgemeinheit in Verbindung mit dem logischen Produkt oder der logischen Summe eingeführt. So wurde es schwer, die Sätze „(∃x).fx“ und „(x).fx“, in welchen beide Ideen beschlossen liegen, zu verstehen.",
    "enPM": "I dissociate the concept all from truth-functions.\nFrege and Russell introduced generality in association with logical product or logical sum. This made it difficult to understand the propositions ‘(∃x).fx’ and ‘(x).fx’, in which both ideas are embedded.",
    "depth": 4,
    "translated": true
  },
  "5.522": {
    "en": "That which is peculiar to the \"symbolism of generality\" is firstly, that it refers to a logical prototype, and secondly, that it makes constants prominent.",
    "zh": "概括记号法的突出特征在于：第一，它指向一个逻辑原型；第二，它凸显出那些常项。",
    "de": "Das Eigentümliche der Allgemeinheitsbezeichnung ist erstens, dass sie auf ein logisches Urbild hinweist, und zweitens, dass sie Konstante hervorhebt.",
    "enPM": "What is peculiar to the generality-sign is first, that it indicates a logical prototype, and secondly, that it gives prominence to constants.",
    "depth": 4,
    "translated": true
  },
  "5.523": {
    "en": "The generality symbol occurs as an argument.",
    "zh": "概括记号作为主目而出现。",
    "de": "Die Allgemeinheitsbezeichnung tritt als Argument auf.",
    "enPM": "The generality-sign occurs as an argument.",
    "depth": 4,
    "translated": true
  },
  "5.524": {
    "en": "If the objects are given, therewith are all objects also given.\nIf the elementary propositions are given, then therewith all elementary propositions are also given.",
    "zh": "当诸对象被给出时，由此就已经给出了所有的对象。当诸基本命题被给出时，由此也就已经给出了所有的基本命题。",
    "de": "Wenn die Gegenstände gegeben sind, so sind uns damit auch schon alle Gegenstände gegeben.\nWenn die Elementarsätze gegeben sind, so sind damit auch alle Elementarsätze gegeben.",
    "enPM": "If objects are given, then at the same time we are given all objects.\nIf elementary propositions are given, then at the same time all elementary propositions are given.",
    "depth": 4,
    "translated": true
  },
  "5.525": {
    "en": "It is not correct to render the proposition \"$(\\exists x).fx$\"---as Russell does---in the words \"$fx$ is possible\".\nCertainty, possibility or impossibility of a state of affairs are not expressed by a proposition but by the fact that an expression is a tautology, a significant proposition or a contradiction.\nThat precedent to which one would always appeal, must be present in the symbol itself.",
    "zh": "把命题(∃x).fx转写为「有可能存在一个x，对它是f」，是不正确的，正如用「(x).fx意谓对所有x，f都成立」来图解它一样不正确。我的思想是对可证明性的解说，应当在命题中表达出来。",
    "de": "Es ist unrichtig, den Satz „(∃x).fx“ – wie Russell dies tut – in Worten durch „fx ist möglich“ wiederzugeben.\nGewissheit, Möglichkeit oder Unmöglichkeit einer Sachlage wird nicht durch einen Satz ausgedrückt, sondern dadurch, dass ein Ausdruck eine Tautologie, ein sinnvoller Satz oder eine Kontradiktion ist.\nJener Präzedenzfall, auf den man sich immer berufen möchte, muss schon im Symbol selber liegen.",
    "enPM": "It is incorrect to render the proposition ‘(∃x).fx’ in the words, ‘fx is possible’ as Russell does.\nThe certainty, possibility, or impossibility of a situation is not expressed by a proposition, but by an expression’s being a tautology, a proposition with a sense, or a contradiction.\nThe precedent to which we are constantly inclined to appeal must reside in the symbol itself.",
    "depth": 4,
    "translated": true
  },
  "5.526": {
    "en": "One can describe the world completely by completely generalized propositions, i.e. without from the outset co-ordinating any name with a definite object.\nIn order then to arrive at the customary way of expression we need simply say after an expression \"there is only and only one $x$, which ...\": and this $x$ is $a$.",
    "zh": "借助完全概括的命题，我们就可以完全描述世界，即是说，不需从外部将任何一个名称与一个特定的对象相配合。因此，为了达到通常的表达方式，在「有且仅有一个x，使得…….」这表达式之后，只须说：而且这个x就是a。",
    "de": "Man kann die Welt vollständig durch vollkommen verallgemeinerte Sätze beschreiben, das heißt also, ohne irgendeinen Namen von vornherein einem bestimmten Gegenstand zuzuordnen.\nUm dann auf die gewöhnliche Ausdrucksweise zu kommen, muss man einfach nach einem Ausdruck: „Es gibt ein und nur ein x, welches …“ sagen: Und dies x ist a.",
    "enPM": "We can describe the world completely by means of fully generalized propositions, i.e. without first correlating any name with a particular object.\nThen, in order to arrive at the customary mode of expression, we simply need to add, after an expression like, ‘There is one and only one x such that …’, the words, ‘and that x is a’.",
    "depth": 4,
    "translated": true
  },
  "5.5261": {
    "en": "A completely generalized proposition is like every other proposition composite. (This is shown by the fact that in \"$(\\exists x, \\phi).\\phi x$\" we must mention \"$\\phi$\" and \"$x$\" separately. Both stand independently in signifying relations to the world as in the ungeneralized proposition.)\nA characteristic of a composite symbol: it has something in common with other symbols.",
    "zh": "一个完全概括的命题和每一个其他命题一样，都是复合的。（这一点表现在：在「(∃x).(φx)」中，我们必须分开提到「φ」和「x」。二者都独立地处于与世界的一种表示的关系之中，正如非概括命题一样。）复合符号的特征：它与其他的东西有某种共同之处。",
    "de": "Ein vollkommen verallgemeinerter Satz ist, wie jeder andere Satz, zusammengesetzt. (Dies zeigt sich daran, dass wir in „(∃x, φ).φx“ „φ“ und „x“ getrennt erwähnen müssen. Beide stehen unabhängig in bezeichnenden Beziehungen zur Welt, wie im unverallgemeinerten Satz.)\nKennzeichen des zusammengesetzten Symbols: Es hat etwas mit anderen Symbolen gemeinsam.",
    "enPM": "A fully generalized proposition, like every other proposition, is composite. (This is shown by the fact that in ‘(∃x, φ).φx’ we have to mention ‘φ’ and ‘x’ separately. They both, independently, stand in signifying relations to the world, just as is the case in ungeneralized propositions.)\nIt is a mark of a composite symbol that it has something in common with other symbols.",
    "depth": 5,
    "translated": true
  },
  "5.5262": {
    "en": "The truth or falsehood of every proposition alters something in the general structure of the world. And the range which is allowed to its structure by the totality of elementary propositions is exactly that which the completely general propositions delimit.\n(If an elementary proposition is true, then, at any rate, there is one more elementary proposition true.)",
    "zh": "每个命题的真或假，对于世界的一般结构确是有所改变的。而通过基本命题的总和而留给世界结构的那个回旋余地，恰恰就是完全概括的命题所划界的那个回旋余地。（如果一个基本命题是真的，那么无论如何由此多了有一个—基本命题—为真。）",
    "de": "Es verändert ja die Wahr- oder Falschheit jedes Satzes etwas am allgemeinen Bau der Welt. Und der Spielraum, welcher ihrem Bau durch die Gesamtheit der Elementarsätze gelassen wird, ist eben derjenige, welchen die ganz allgemeinen Sätze begrenzen.\n(Wenn ein Elementarsatz wahr ist, so ist damit doch jedenfalls Ein Elementarsatz mehr wahr.)",
    "enPM": "The truth or falsity of every proposition does make some alteration in the general construction of the world. And the range that the totality of elementary propositions leaves open for its construction is exactly the same as that which is delimited by entirely general propositions.\n(If an elementary proposition is true, that means, at any rate, one more true elementary proposition.)",
    "depth": 5,
    "translated": true
  },
  "5.53": {
    "en": "Identity of the object I express by identity of the sign and not by means of a sign of identity. Difference of the objects by difference of the signs.",
    "zh": "对象的同一我用记号的同一来表达，而不是借助一个同一的记号。对象的不同我用记号的不同来表达。",
    "de": "Gleichheit des Gegenstandes drücke ich durch Gleichheit des Zeichens aus, und nicht mit Hilfe eines Gleichheitszeichens. Verschiedenheit der Gegenstände durch Verschiedenheit der Zeichen.",
    "enPM": "Identity of object I express by identity of sign, and not by using a sign for identity. Difference of objects I express by difference of signs.",
    "depth": 3,
    "translated": true
  },
  "5.5301": {
    "en": "That identity is not a relation between objects is obvious. This becomes very clear if, for example, one considers the proposition \"$(x) : fx.\\supset.x = a$\". What this proposition says is simply that only $a$ satisfies the function $f$, and not that only such things satisfy the function $f$ which have a certain relation to $a$.\nOne could of course say that in fact only $a$ has this relation to $a$, but in order to express this we should need the sign of identity itself.",
    "zh": "同一不是对象之间的一种关系。这是显而易见的。例如考察一下命题：「(x):fx.⊃.x=a」。这个命题说的是：仅仅只有a满足函项f，而不是说只有那些与a有某种关系的事物才满足函项f。人们自然可以说：确实只有a对a才具有这种关系；但是为了表达这一点，我们就需要同一条记号的自身。",
    "de": "Dass die Identität keine Relation zwischen Gegenständen ist, leuchtet ein. Dies wird sehr klar, wenn man z. B. den Satz „(x):fx.⊃.x=a“ betrachtet. Was dieser Satz sagt, ist einfach, dass nur a der Funktion f genügt, und nicht, dass nur solche Dinge der Funktion f genügen, welche eine gewisse Beziehung zu a haben.\nMan könnte nun freilich sagen, dass eben nur a diese Beziehung zu a habe, aber, um dies auszudrücken, brauchten wir das Gleichheitszeichen selber.",
    "enPM": "It is self-evident that identity is not a relation between objects. This becomes very clear if one considers, for example, the proposition ‘(x):fx.⊃.x=a’. What this proposition says is simply that only a satisfies the function f, and not that only things that have a certain relation to a satisfy the function f.\nOf course, it might then be said that only a did have this relation to a; but in order to express that, we should need the identity-sign itself.",
    "depth": 4,
    "translated": true
  },
  "5.5302": {
    "en": "Russell's definition of \"=\" won't do; because according to it one cannot say that two objects have all their properties in common. (Even if this proposition is never true, it is nevertheless significant.)",
    "zh": "罗素对「=」的定义是不够用的，因为根据他的定义，我们不能说两个对象共有所有性质。（即使这个命题从来不是正确的，但它仍然具有含义。）",
    "de": "Russells Definition von „=“ genügt nicht; weil man nach ihr nicht sagen kann, dass zwei Gegenstände alle Eigenschaften gemeinsam haben. (Selbst wenn dieser Satz nie richtig ist, hat er doch Sinn.)",
    "enPM": "Russell’s definition of ‘=’ is inadequate, because according to it we cannot say that two objects have all their properties in common. (Even if this proposition is never correct, it still has sense.)",
    "depth": 4,
    "translated": true
  },
  "5.5303": {
    "en": "Roughly speaking: to say of two things that they are identical is nonsense, and to say of one thing that it is identical with itself is to say nothing.",
    "zh": "粗略地说：断言两个东西是同一的，这是无含义的；而断言一个东西是与自身同一的，这等于什么也没有说。",
    "de": "Beiläufig gesprochen: Von zwei Dingen zu sagen, sie seien identisch, ist ein Unsinn, und von Einem zu sagen, es sei identisch mit sich selbst, sagt gar nichts.",
    "enPM": "Roughly speaking, to say of two things that they are identical is nonsense, and to say of one thing that it is identical with itself is to say nothing at all.",
    "depth": 4,
    "translated": true
  },
  "5.531": {
    "en": "I write therefore not \"$f(a,b).a = b$\" but \"$f(a,a)$\" (or \"$f(b,b)$\"). And not \"$f(a,b).\\neg a = b$\", but \"$f(a,b)$\".",
    "zh": "因此我不写「f(a,b).a=b」，而写「f(a,a)」（或者「f(b,b)」）；不写「f(a,b).~a=b」，而写「f(a,b)」。",
    "de": "Ich schreibe also nicht „f(a,b).a=b“, sondern „f(a,a)“ (oder „f(b,b)“). Und nicht „f(a,b).~a=b“, sondern „f(a,b)“.",
    "enPM": "Thus I do not write ‘f(a,b).a=b’, but ‘f(a,a)’ (or ‘f(b,b)’); and not ‘f(a,b).~a=b’, but ‘f(a,b)’.",
    "depth": 4,
    "translated": true
  },
  "5.532": {
    "en": "And analogously: not \"$(\\exists x,y).f(x,y). x = y$\", but \"$(\\exists x).f(x,x)$\"; and not \"$(\\exists x,y).f(x,y).\\neg x = y$\", but \"$(\\exists x,y).f(x,y)$\".\n(Therefore instead of Russell's \"$(\\exists x,y).f(x,y)$\": \"$(\\exists x,y).f(x,y).\\lor.(\\exists x).f(x,x)$\".)",
    "zh": "以此类推：我不写「(∃x,y).f(x,y).x=y」，而写「(∃x).f(x,x)」；不写「(∃x,y).f(x,y).~x=y」，而写「(∃x,y).f(x,y)」。（这样，罗素的「(∃x,y).f(x,y)」就变成「(∃x,y).f(x,y).∨.(∃x).f(x,x)」。）",
    "de": "Und analog: Nicht „(∃x,y).f(x,y).x=y“, sondern „(∃x).f(x,x)“; und nicht „(∃x,y).f(x,y).~x=y“, sondern „(∃x,y).f(x,y)“.\n(Also statt des Russell’schen „(∃x,y). f(x,y)“: „(∃x,y).f(x,y).∨.(∃x).f(x,x)“.)",
    "enPM": "And analogously I do not write ‘(∃x,y).f(x,y).x=y’, but ‘(∃x).f(x,x)’; and not ‘(∃x,y).f(x,y).~x=y’, but ‘(∃x,y).f(x,y)’.\n(So Russell’s ‘(∃x,y).f(x,y)’ becomes ‘(∃x,y).f(x,y).∨.(∃x).f(x,x)’.)",
    "depth": 4,
    "translated": true
  },
  "5.5321": {
    "en": "Instead of \"$(x) : fx \\supset x = a$\" we therefore write e.g. \"$(\\exists x).fx.\\supset.fa:\\neg(\\exists x,y).fx.fy$\".\nAnd if the proposition \"only one $x$ satisfies $f( )$\" reads: \"$(\\neg x).fx.\\supset.fa:\\neg(\\exists x,y).fx.fy$\".",
    "zh": "因此，例如我们不写「(x):fx⊃x=a」，而写「(∃x).fx.⊃.fa: ~(∃x,y).fx.fy」。而命题「只有一个x满足f()」则读如：「(∃x).fx: ~(∃x,y).fx.fy」。",
    "de": "Statt „(x):fx⊃x=a“ schreiben wir also z. B. „(∃x).fx.⊃.fa:~(∃x,y).fx.fy“.\nUnd der Satz: „nur Ein x befriedigt f( )“ lautet: „(∃x).fx:~(∃x,y).fx.fy“.",
    "enPM": "Thus, for example, instead of ‘(x):fx⊃x=a’ we write ‘(∃x).fx.⊃.fa:~(∃x,y).fx.fy’.\nAnd the proposition, ‘Only one x satisfies f( )’, will read ‘(∃x).fx:~(∃x,y).fx.fy’.",
    "depth": 5,
    "translated": true
  },
  "5.533": {
    "en": "The identity sign is therefore not an essential constituent of logical notation.",
    "zh": "因此，同一的记号在概念记法中是根本不可能成为任何本质性的构成部分的。",
    "de": "Das Gleichheitszeichen ist also kein wesentlicher Bestandteil der Begriffsschrift.",
    "enPM": "The identity-sign, therefore, is not an essential constituent of conceptual notation.",
    "depth": 4,
    "translated": true
  },
  "5.534": {
    "en": "And we see that the apparent propositions like: \"$a = a$\", \"$a = b.b = c.\\supset a = c$\", \"$(x).x = x$\". \"$(\\exists x).x = a$\", etc. cannot be written in a correct logical notation at all.",
    "zh": "现在我们看到，像「a=a」「a=b.b=c.⊃a=c」「(x).x=x」「(∃x).x=a」这类伪句，在一种正确的概念记法中根本是不可能写出来的。",
    "de": "Und nun sehen wir, dass Scheinsätze wie: „a=a“, „a=b.b=c.⊃a=c“, „(x).x=x“, „(∃x).x=a“, etc. sich in einer richtigen Begriffsschrift gar nicht hinschreiben lassen.",
    "enPM": "And now we see that in a correct conceptual notation pseudo-propositions like ‘a=a’, ‘a=b.b=c.⊃a=c’, ‘(x).x=x’, ‘(∃x).x=a’, etc. cannot even be written down.",
    "depth": 4,
    "translated": true
  },
  "5.535": {
    "en": "So all problems disappear which are connected with such pseudo-propositions.\nThis is the place to solve all the problems with arise through Russell's \"Axiom of Infinity\".\nWhat the axiom of infinity is meant to say would be expressed in language by the fact that there is an infinite number of names with different meanings.",
    "zh": "这样一来，所有那些与这样的伪命题联系在一起的问题也就都消解了。罗素的「无穷公理」所带出的一切问题在这里都得到了解决。无穷公理所应说的东西，在语言中本可通过出现无限多的具有不同意谓的名称而得到表达。",
    "de": "Damit erledigen sich auch alle Probleme, die an solche Scheinsätze geknüpft waren.\nAlle Probleme, die Russells „Axiom of Infinity“ mit sich bringt, sind schon hier zu lösen.\nDas, was das Axiom of Infinity sagen soll, würde sich in der Sprache dadurch ausdrücken, dass es unendlich viele Namen mit verschiedener Bedeutung gäbe.",
    "enPM": "This also disposes of all the problems that were connected with such pseudo-propositions.\nAll the problems that Russell’s ‘axiom of infinity’ brings with it can be solved at this point.\nWhat the axiom of infinity is intended to say would express itself in language through the existence of infinitely many names with different meanings.",
    "depth": 4,
    "translated": true
  },
  "5.5351": {
    "en": "There are certain cases in which one is tempted to use expressions of the form \"$a = a$\" or \"$p\\supset p$\" and of that kind. And indeed this takes place when one would speak of the archetype Proposition, Thing, etc. So Russell in the Principles of Mathematics has rendered the nonsense \"$p$ is a proposition\" in symbols by \"$p \\supset p$\" and has put it as hypothesis before certain propositions to show that their places for arguments could only be occupied by propositions.\n(It is nonsense to place the hypothesis $p \\supset p$ before a proposition in order to ensure that its arguments have the right form, because the hypotheses for a non-proposition as argument becomes not false but meaningless, and because the proposition itself becomes senseless for arguments of the wrong kind, and therefore it survives the wrong arguments no better and no worse than the senseless hypothesis attached for this purpose.)",
    "zh": "在某些情况中，会使人诱发使用「a=a」之类表达式。事实上，当人们想谈论「原型命题」「事物」等等时，这些情况就会发生。如在罗素的《数学原则》中，就把「p是一个命题」——这是无含义的——用「p⊃p」来转述，并且将其作为假设置于某些命题的前面，以使得这些命题的主目位置只能被命题所占据。（把关于p⊃p型的假设置于一个命题的前面以保证其主目具有正确形式，这已经因为对于非命题作为主目来说这个假设为假而不是无含义的而成为无意义的；而且因为被保护的那个命题本身由于具有不适当种类的主目而成为无含义的，所以它自身也成了无含义的命题。因此，这个命题在防止错误的主目出现这件事上，和那为此目的而悬挂的无含义的假设相比，是同样地安全、甚至更加安全的。）",
    "de": "Es gibt gewisse Fälle, wo man in Versuchung gerät, Ausdrücke von der Form „a=a“ oder „p⊃p“ u. dgl. zu benützen. Und zwar geschieht dies, wenn man von dem Urbild: Satz, Ding, etc. reden möchte. So hat Russell in den „Principles of Mathematics“ den Unsinn „p ist ein Satz“ in Symbolen durch „p⊃p“ wiedergegeben und als Hypothese vor gewisse Sätze gestellt, damit deren Argumentstellen nur von Sätzen besetzt werden könnten.\n(Es ist schon darum Unsinn, die Hypothese p⊃p vor einen Satz zu stellen, um ihm Argumente der richtigen Form zu sichern, weil die Hypothese für einen Nicht-Satz als Argument nicht falsch, sondern unsinnig wird, und weil der Satz selbst durch die unrichtige Gattung von Argumenten unsinnig wird, also sich selbst ebenso gut, oder so schlecht, vor den unrechten Argumenten bewahrt wie die zu diesem Zweck angehängte sinnlose Hypothese.)",
    "enPM": "There are certain cases in which one is tempted to use expressions of the form ‘a=a’ or ‘p⊃p’ and the like. In fact, this happens when one wants to talk about prototypes, e.g. about proposition, thing, etc. Thus in Russell’s Principles of Mathematics ‘p is a proposition’—which is nonsense—was given the symbolic rendering ‘p⊃p’ and placed as an hypothesis in front of certain propositions in order to exclude from their argument-places everything but propositions.\n(It is nonsense to place the hypothesis ‘p⊃p’ in front of a proposition, in order to ensure that its arguments shall have the right form, if only because with a non-proposition as argument the hypothesis becomes not false but nonsensical, and because arguments of the wrong kind make the proposition itself nonsensical, so that it preserves itself from wrong arguments just as well, or as badly, as the hypothesis without sense that was appended for that purpose.)",
    "depth": 5,
    "translated": true
  },
  "5.5352": {
    "en": "Similarly it was proposed to express \"There are no things\" by \"$\\neg(\\exists x).x = x$\". But even if this were a proposition---would it not be true if indeed \"There were things\", but these were not identical with themselves?",
    "zh": "同样，人们也想用「没有事物」来表达「~(∃x).x=x」。但即使这是一个命题——如果没有事物存在，这些事物甚至就不存在，那么难道它也是真的吗？",
    "de": "Ebenso wollte man „Es gibt keine Dinge“ ausdrücken durch „~(∃x).x=x“. Aber selbst wenn dies ein Satz wäre – wäre er nicht auch wahr, wenn es zwar „Dinge gäbe“, aber diese nicht mit sich selbst identisch wären?",
    "enPM": "In the same way people have wanted to express, ‘There are no things’, by writing ‘~(∃x).x=x’. But even if this were a proposition, would it not be equally true if in fact ‘there were things’ but they were not identical with themselves?",
    "depth": 5,
    "translated": true
  },
  "5.54": {
    "en": "In the general propositional form, propositions occur in a proposition only as bases of the truth-operations.",
    "zh": "在一般的命题形式中，命题在命题中只能作为真值运算的基础出现。",
    "de": "In der allgemeinen Satzform kommt der Satz im Satze nur als Basis der Wahrheitsoperationen vor.",
    "enPM": "In the general propositional form propositions occur in other propositions only as bases of truth-operations.",
    "depth": 3,
    "translated": true
  },
  "5.541": {
    "en": "At first sight it appears as if there were also a different way in which one proposition could occur in another.\nEspecially in certain propositional forms of psychology, like \"$A$ thinks, that $p$ is the case\", or \"$A$ thinks $p$\", etc.\nHere it appears superficially as if the proposition $p$ stood to the object $A$ in a kind of relation.\n(And in modern epistemology (Russell, Moore, etc.) those propositions have been conceived in this way.)",
    "zh": "初看起来，一个命题似乎也可能以别的方式在另一个命题中出现。特别是在心理学的某些命题形式中，如「A相信p是实际情况」，或者「A思考p」，等等。这里初看起来似乎命题p对对象A是处在某种关系之中。（在现代认识论中（罗素、穆尔等人），这些命题也被这样构想的。）",
    "de": "Auf den ersten Blick scheint es, als könne ein Satz in einem anderen auch auf andere Weise vorkommen.\nBesonders in gewissen Satzformen der Psychologie, wie „A glaubt, dass p der Fall ist“, oder „A denkt p“, etc.\nHier scheint es nämlich oberflächlich, als stünde der Satz p zu einem Gegenstand A in einer Art von Relation.\n(Und in der modernen Erkenntnistheorie (Russell, Moore, etc.) sind jene Sätze auch so aufgefasst worden.)",
    "enPM": "At first sight it looks as if it were also possible for one proposition to occur in another in a different way.\nParticularly with certain forms of proposition in psychology, such as ‘A believes that p is the case’ and ‘A has the thought p’, etc.\nFor if these are considered superficially, it looks as if the proposition p stood in some kind of relation to an object A.\n(And in modern theory of knowledge (Russell, Moore, etc.) these propositions have actually been construed in this way.)",
    "depth": 4,
    "translated": true
  },
  "5.542": {
    "en": "But it is clear that \"$A$ believes that $p$\", \"$A$ thinks $p$\", \"$A$ says $p$\", are of the form \"'$p$' says $p$\": and here we have no co-ordination of a fact and an object, but a co-ordination of facts by means of a co-ordination of their objects.",
    "zh": "但是，「A相信p」「A思考p」「A说p」是「『p』说p」的形式；而这并没有涉及一个事实与一个对象的配合，而是通过其诸对象的配合而来的诸事实的配合。",
    "de": "Es ist aber klar, dass „A glaubt, dass p“, „A denkt p“, „A sagt p“ von der Form „‚p‘ sagt p“ sind: Und hier handelt es sich nicht um eine Zuordnung von einer Tatsache und einem Gegenstand, sondern um die Zuordnung von Tatsachen durch Zuordnung ihrer Gegenstände.",
    "enPM": "It is clear, however, that ‘A believes that p’, ‘A has the thought p’, and ‘A says p’ are of the form ‘“p” says p’: and this does not involve a correlation of a fact with an object, but rather the correlation of facts by means of the correlation of their objects.",
    "depth": 4,
    "translated": true
  },
  "5.5421": {
    "en": "This shows that there is no such thing as the soul---the subject, etc.---as it is conceived in superficial psychology.\nA composite soul would not be a soul any longer.",
    "zh": "这也表明，灵魂——主体等等——像当今肤浅的心理学所构想的那样，是一种荒谬之物。一个复合的灵魂将不再是一个灵魂。",
    "de": "Dies zeigt auch, dass die Seele – das Subjekt etc. – wie sie in der heutigen oberflächlichen Psychologie aufgefasst wird, ein Unding ist.\nEine zusammengesetzte Seele wäre nämlich keine Seele mehr.",
    "enPM": "This shows too that there is no such thing as the soul—the subject, etc.—as it is conceived in the superficial psychology of the present day.\nIndeed a composite soul would no longer be a soul.",
    "depth": 5,
    "translated": true
  },
  "5.5422": {
    "en": "The correct explanation of the form of the proposition \"$A$ judges $p$\" must show that it is impossible to judge a nonsense. (Russell's theory does not satisfy this condition.)",
    "zh": "对命题形式「A相信p」的正确解释，必须表明：用无含义代替一个命题是不可能的。（因为罗素的理论不满足这个条件。）",
    "de": "Die richtige Erklärung der Form des Satzes „A urteilt p“ muss zeigen, dass es unmöglich ist, einen Unsinn zu urteilen. (Russells Theorie genügt dieser Bedingung nicht.)",
    "enPM": "The correct explanation of the form of the proposition, ‘A makes the judgement p’, must show that it is impossible for a judgement to be a piece of nonsense. (Russell’s theory does not satisfy this requirement.)",
    "depth": 5,
    "translated": true
  },
  "5.5423": {
    "en": "To perceive a complex means to perceive that its constituents are combined in such and such a way.\nThis perhaps explains that the figure\ncan be seen in two ways as a cube; and all similar phenomena. For we really see two different facts.\n(If I fix my eyes first on the corners $a$ and only glance at $b$, $a$ appears in front and $b$ behind, and vice versa.)",
    "zh": "感知一个复合物，意味着感知它的诸组成部分是以如此这般的方式彼此联结在一起的。这也很恰当地解释了何以可以将一个图形以两种方式看作立方体；以及何以可以将此图形这样地看成立方体。因为确实存在着两个不同的事实。（先看那些角a，然后对那些b只是粗略地一瞥。）",
    "de": "Einen Komplex wahrnehmen heißt wahrnehmen, dass sich seine Bestandteile so und so zu einander verhalten.\nDies erklärt wohl auch, dass man die Figur\nauf zweierlei Art als Würfel sehen kann; und alle ähnlichen Erscheinungen. Denn wir sehen eben wirklich zwei verschiedene Tatsachen.\n(Sehe ich erst auf die Ecken a und nur flüchtig auf b, so erscheint a vorne; und umgekehrt.)",
    "enPM": "To perceive a complex means to perceive that its constituents are related to one another in such and such a way.\nThis no doubt also explains why there are two possible ways of seeing the figure\nas a cube; and all similar phenomena. For we really see two different facts.\n(If I look in the first place at the corners marked a and only glance at the b’s, then the a’s appear to be in front, and vice versa).",
    "depth": 5,
    "translated": true
  },
  "5.55": {
    "en": "We must now answer a priori the question as to all possible forms of the elementary propositions.\nThe elementary proposition consists of names. Since we cannot give the number of names with different meanings, we cannot give the composition of the elementary proposition.",
    "zh": "我们现在必须对关于基本命题的一切可能形式的问题先天地加以回答。基本命题是由名称构成的。因为不能给出具有不同意谓的名称的数目，所以我们也就不能给出不同基本命题的数目。",
    "de": "Wir müssen nun die Frage nach allen möglichen Formen der Elementarsätze a priori beantworten.\nDer Elementarsatz besteht aus Namen. Da wir aber die Anzahl der Namen von verschiedener Bedeutung nicht angeben können, so können wir auch nicht die Zusammensetzung des Elementarsatzes angeben.",
    "enPM": "We now have to answer a priori the question about all the possible forms of elementary propositions.\nElementary propositions consist of names. Since, however, we are unable to give the number of names with different meanings, we are also unable to give the composition of elementary propositions.",
    "depth": 3,
    "translated": true
  },
  "5.551": {
    "en": "Our fundamental principle is that every question which can be decided at all by logic can be decided without further trouble.\n(And if we get into a situation where we need to answer such a problem by looking at the world, this shows that we are on a fundamentally wrong track.)",
    "zh": "我们的基本原则是：凡是能够一般地由逻辑决定的问题，都必定能够当下决定。（如果我们面临如下处境：为了解答这样的问题，我们不得不去「直观」世界，那么这就表明我们从根本上走在一条错误的轨道上。）",
    "de": "Unser Grundsatz ist, dass jede Frage, die sich überhaupt durch die Logik entscheiden lässt, sich ohne weiteres entscheiden lassen muss.\n(Und wenn wir in die Lage kommen, ein solches Problem durch Ansehen der Welt beantworten zu müssen, so zeigt dies, dass wir auf grundfalscher Fährte sind.)",
    "enPM": "Our fundamental principle is that whenever a question can be decided by logic at all it must be possible to decide it without more ado.\n(And if we get into a position where we have to look at the world for an answer to such a problem, that shows that we are on a completely wrong track.)",
    "depth": 4,
    "translated": true
  },
  "5.552": {
    "en": "The \"experience\" which we need to understand logic is not that such and such is the case, but that something is; but that is no experience.\nLogic precedes every experience---that something is so.\nIt is before the How, not before the What.",
    "zh": "为理解逻辑所必需的「经验」不是某物如此这般的经验，而是某物存在的经验；但这恰恰不是经验。逻辑先于一切经验——即先于某物为如此的。逻辑先于关于「如何」的问题，而不先于关于「什么」的问题。",
    "de": "Die „Erfahrung“, die wir zum Verstehen der Logik brauchen, ist nicht die, dass sich etwas so und so verhält, sondern, dass etwas ist: aber das ist eben keine Erfahrung.\nDie Logik ist vor jeder Erfahrung – dass etwas so ist.\nSie ist vor dem Wie, nicht vor dem Was.",
    "enPM": "The ‘experience’ that we need in order to understand logic is not that something or other is the state of things, but that something is: that, however, is not an experience.\nLogic is prior to every experience—that something is so.\nIt is prior to the question ‘How?’, not prior to the question ‘What?’",
    "depth": 4,
    "translated": true
  },
  "5.5521": {
    "en": "And if this were not the case, how could we apply logic? We could say: if there were a logic, even if there were no world, how then could there be a logic, since there is a world?",
    "zh": "如果不是这样，那么我们怎么能够应用逻辑呢？人们可以这样说：如果没有世界，那就不会有逻辑；因为假若我们所在的是一个充满各式各样变化的世界中，则我们又如何能有一种逻辑呢？",
    "de": "Und wenn dies nicht so wäre, wie könnten wir die Logik anwenden? Man könnte sagen: Wenn es eine Logik gäbe, auch wenn es keine Welt gäbe, wie könnte es dann eine Logik geben, da es eine Welt gibt.",
    "enPM": "And if this were not so, how could we apply logic? We might put it in this way: if there would be a logic even if there were no world, how then could there be a logic given that there is a world?",
    "depth": 5,
    "translated": true
  },
  "5.553": {
    "en": "Russell said that there were simple relations between different numbers of things (individuals). But between what numbers? And how should this be decided---by experience?\n(There is no pre-eminent number.)",
    "zh": "罗素说，在不同的数目（个体）之间存在着简单的关系。但是在什么数目之间？这又应当如何断定呢？——通过经验？（没有特异数的经验。）",
    "de": "Russell sagte, es gäbe einfache Relationen zwischen verschiedenen Anzahlen von Dingen (Individuals). Aber zwischen welchen Anzahlen? Und wie soll sich das entscheiden? – Durch die Erfahrung?\n(Eine ausgezeichnete Zahl gibt es nicht.)",
    "enPM": "Russell said that there were simple relations between different numbers of things (individuals). But between what numbers? And how is this supposed to be decided?—By experience?\n(There is no privileged number.)",
    "depth": 4,
    "translated": true
  },
  "5.554": {
    "en": "The enumeration of any special forms would be entirely arbitrary.",
    "zh": "对任何特殊形式的东西的列举将是完全任意的。",
    "de": "Die Angabe jeder speziellen Form wäre vollkommen willkürlich.",
    "enPM": "It would be completely arbitrary to give any specific form.",
    "depth": 4,
    "translated": true
  },
  "5.5541": {
    "en": "How could we decide a priori whether, for example, I can get into a situation in which I need to symbolize with a sign of a 27-termed relation?",
    "zh": "例如，是否我处于这样一种状况：我必须用二十七位的关系去标示某种东西，这应当能够先天地确定。",
    "de": "Es soll sich a priori angeben lassen, ob ich z. B. in die Lage kommen kann, etwas mit dem Zeichen einer 27-stelligen Relation bezeichnen zu müssen.",
    "enPM": "It is supposed to be possible to answer a priori the question whether I can get into a position in which I need the sign for a 27-termed relation in order to signify something.",
    "depth": 5,
    "translated": true
  },
  "5.5542": {
    "en": "May we then ask this at all? Can we set out a sign form and not know whether anything can correspond to it?\nHas the question sense: what must there be in order that anything can be the case?",
    "zh": "难道真的允许这样提问吗？我们需要什么样的-记号法来标示？什么必须被标示？我们必须建立一种记号系统来表示那能够被表示出来的东西吗？",
    "de": "Dürfen wir denn aber überhaupt so fragen? Können wir eine Zeichenform aufstellen und nicht wissen, ob ihr etwas entsprechen könne?\nHat die Frage einen Sinn: Was muss sein, damit etwas der-Fall-sein kann?",
    "enPM": "But is it really legitimate even to ask such a question? Can we set up a form of sign without knowing whether anything can correspond to it?\nDoes it make sense to ask what there must be in order that something can be the case?",
    "depth": 5,
    "translated": true
  },
  "5.555": {
    "en": "It is clear that we have a concept of the elementary proposition apart from its special logical form.\nWhere, however, we can build symbols according to a system, there this system is the logically important thing and not the single symbols.\nAnd how would it be possible that I should have to deal with forms in logic which I can invent: but I must have to deal with that which makes it possible for me to invent them.",
    "zh": "除了我们的特殊经验之外，我们关于基本命题的概念显然是根据什么样的命题形式的知识而来的。然而，不论基本命题是什么样子，我们都能够构造出这些命题的形式来。任何记号系统，能够按照逻辑的句法规则把那些不同的符号翻译为另一种记号，都必定是可以的：每一个按照逻辑句法构成的命题都是已经构成的。",
    "de": "Es ist klar, wir haben vom Elementarsatz einen Begriff, abgesehen von seiner besonderen logischen Form.\nWo man aber Symbole nach einem System bilden kann, dort ist dieses System das logisch wichtige und nicht die einzelnen Symbole.\nUnd wie wäre es auch möglich, dass ich es in der Logik mit Formen zu tun hätte, die ich erfinden kann; sondern mit dem muss ich es zu tun haben, was es mir möglich macht, sie zu erfinden.",
    "enPM": "Clearly we have some concept of elementary propositions quite apart from their particular logical forms.\nBut when there is a system by which we can create symbols, the system is what is important for logic and not the individual symbols.\nAnd anyway, is it really possible that in logic I should have to deal with forms that I can invent? What I have to deal with must be that which makes it possible for me to invent them.",
    "depth": 4,
    "translated": true
  },
  "5.556": {
    "en": "There cannot be a hierarchy of the forms of the elementary propositions. Only that which we ourselves construct can we foresee.",
    "zh": "基本命题形式的一个等级系列是不可能有的。我们只能预见我们自己构造出来的东西。",
    "de": "Eine Hierarchie der Formen der Elementarsätze kann es nicht geben. Nur was wir selbst konstruieren, können wir voraussehen.",
    "enPM": "There cannot be a hierarchy of the forms of elementary propositions. We can foresee only what we ourselves construct.",
    "depth": 4,
    "translated": true
  },
  "5.5561": {
    "en": "Empirical reality is limited by the totality of objects. The boundary appears again in the totality of elementary propositions.\nThe hierarchies are and must be independent of reality.",
    "zh": "经验的实在被诸对象的全体所限定。这个边界又显示在诸基本命题的全体中。诸等级序列是独立的，并且必须是独立的。",
    "de": "Die empirische Realität ist begrenzt durch die Gesamtheit der Gegenstände. Die Grenze zeigt sich wieder in der Gesamtheit der Elementarsätze.\nDie Hierarchien sind, und müssen unabhängig von der Realität sein.",
    "enPM": "Empirical reality is limited by the totality of objects. The limit also makes itself manifest in the totality of elementary propositions.\nHierarchies are and must be independent of reality.",
    "depth": 5,
    "translated": true
  },
  "5.5562": {
    "en": "If we know on purely logical grounds, that there must be elementary propositions, then this must be known by everyone who understands propositions in their unanalysed form.",
    "zh": "如果我们出自纯逻辑的理由知道必存在着一些基本命题，那么每一个理解了那些未经分析的形式中的命题的人也必然知道这一点。",
    "de": "Wissen wir aus rein logischen Gründen, dass es Elementarsätze geben muss, dann muss es jeder wissen, der die Sätze in ihrer unanalysierten Form versteht.",
    "enPM": "If we know on purely logical grounds that there must be elementary propositions, then everyone who understands propositions in their unanalyzed form must know it.",
    "depth": 5,
    "translated": true
  },
  "5.5563": {
    "en": "All propositions of our colloquial language are actually, just as they are, logically completely in order. That simple thing which we ought to give here is not a model of the truth but the complete truth itself.\n(Our problems are not abstract but perhaps the most concrete that there are.)",
    "zh": "事实上，我们日常生活中语言中的所有命题，一如它们现在这个样式，在 逻辑上是完全有条理的。——那个简单之物——在此我们必须给出的——不是真实的比拟物，而是完整的真实本身。（我们的问题不是抽象的，而且也许是一切问题中最具体的。）",
    "de": "Alle Sätze unserer Umgangssprache sind tatsächlich, so wie sie sind, logisch vollkommen geordnet. – Jenes Einfachste, was wir hier angeben sollen, ist nicht ein Gleichnis der Wahrheit, sondern die volle Wahrheit selbst.\n(Unsere Probleme sind nicht abstrakt, sondern vielleicht die konkretesten, die es gibt.)",
    "enPM": "In fact, all the propositions of our everyday language, just as they stand, are in perfect logical order.—That utterly simple thing, which we have to formulate here, is not a likeness of the truth, but the truth itself in its entirety.\n(Our problems are not abstract, but perhaps the most concrete that there are.)",
    "depth": 5,
    "translated": true
  },
  "5.557": {
    "en": "The application of logic decides what elementary propositions there are.\nWhat lies in its application logic cannot anticipate.\nIt is clear that logic may not conflict with its application.\nBut logic must have contact with its application.\nTherefore logic and its application may not overlap one another.",
    "zh": "逻辑的应用决定有什么样的基本命题。逻辑不能预先知道什么暗含在它的应用中。显然：逻辑不能与它的应用相冲突。但是逻辑却必须接触到它的应用。因此逻辑不能与它的应用交叠。",
    "de": "Die Anwendung der Logik entscheidet darüber, welche Elementarsätze es gibt.\nWas in der Anwendung liegt, kann die Logik nicht vorausnehmen.\nDas ist klar: Die Logik darf mit ihrer Anwendung nicht kollidieren.\nAber die Logik muss sich mit ihrer Anwendung berühren.\nAlso dürfen die Logik und ihre Anwendung einander nicht übergreifen.",
    "enPM": "The application of logic decides what elementary propositions there are.\nWhat belongs to its application, logic cannot anticipate.\nIt is clear that logic must not clash with its application.\nBut logic has to be in contact with its application.\nTherefore logic and its application must not overlap.",
    "depth": 4,
    "translated": true
  },
  "5.5571": {
    "en": "If I cannot give elementary propositions a priori then it must lead to obvious nonsense to try to give them.",
    "zh": "如果我不能先天地给出基本命题，那么想要给出它们就必然会导向明显的无意义。",
    "de": "Wenn ich die Elementarsätze nicht a priori angeben kann, dann muss es zu offenbarem Unsinn führen, sie angeben zu wollen.",
    "enPM": "If I cannot say a priori what elementary propositions there are, then the attempt to do so must lead to obvious nonsense.",
    "depth": 5,
    "translated": true
  },
  "5.6": {
    "en": "The limits of my language mean the limits of my world.",
    "zh": "我的语言的界限意味着我的世界的界限。",
    "de": "Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.",
    "enPM": "The limits of my language mean the limits of my world.",
    "depth": 2,
    "translated": true
  },
  "5.61": {
    "en": "Logic fills the world: the limits of the world are also its limits.\nWe cannot therefore say in logic: This and this there is in the world, that there is not.\nFor that would apparently presuppose that we exclude certain possibilities, and this cannot be the case since otherwise logic must get outside the limits of the world: that is, if it could consider these limits from the other side also.\nWhat we cannot think, that we cannot think: we cannot therefore say what we cannot think.",
    "zh": "逻辑充满世界：世界的界限也就是逻辑的界限。因此我们不能在逻辑中说：世界中有这个和这个，而没有那个。因为那看来就是要预设我们会排除某些可能性，而这种情况不可能发生，因为否则逻辑就必然会越出世界的界限；即如果它也能从另一边来观察这些界限的话。我们不能思考的东西，我们就不能思考；所以我们也不能说出我们不能够思考的东西。",
    "de": "Die Logik erfüllt die Welt; die Grenzen der Welt sind auch ihre Grenzen.\nWir können also in der Logik nicht sagen: Das und das gibt es in der Welt, jenes nicht.\nDas würde nämlich scheinbar voraussetzen, dass wir gewisse Möglichkeiten ausschließen, und dies kann nicht der Fall sein, da sonst die Logik über die Grenzen der Welt hinaus müsste; wenn sie nämlich diese Grenzen auch von der anderen Seite betrachten könnte.\nWas wir nicht denken können, das können wir nicht denken; wir können also auch nicht sagen, was wir nicht denken können.",
    "enPM": "Logic pervades the world: the limits of the world are also its limits.\nSo we cannot say in logic, ‘The world has this in it, and this, but not that.’\nFor that would appear to presuppose that we were excluding certain possibilities, and this cannot be the case, since it would require that logic should go beyond the limits of the world; for only in that way could it view those limits from the other side as well.\nWe cannot think what we cannot think; so what we cannot think we cannot say either.",
    "depth": 3,
    "translated": true
  },
  "5.62": {
    "en": "This remark provides a key to the question, to what extent solipsism is a truth.\nIn fact what solipsism means, is quite correct, only it cannot be said, but it shows itself.\nThat the world is my world, shows itself in the fact that the limits of the language (the language which only I understand) mean the limits of my world.",
    "zh": "这一评论提供了决定唯我论在多大程度上是真理这一问题的钥匙。唯我论所意指的东西是完全正确的；只是它不能被说出来，而只能自行显示出来。世界是我的世界；这一点显示在语言（那唯一能理解的语言）的界限意味着我的世界的界限。",
    "de": "Diese Bemerkung gibt den Schlüssel zur Entscheidung der Frage, inwieweit der Solipsismus eine Wahrheit ist.\nWas der Solipsismus nämlich meint, ist ganz richtig, nur lässt es sich nicht sagen, sondern es zeigt sich.\nDass die Welt meine Welt ist, das zeigt sich darin, dass die Grenzen der Sprache (der Sprache, die allein ich verstehe) die Grenzen meiner Welt bedeuten.",
    "enPM": "This remark provides the key to the problem, how much truth there is in solipsism.\nFor what the solipsist means is quite correct; only it cannot be said, but makes itself manifest.\nThe world is my world: this is manifest in the fact that the limits of language (of that language which alone I understand) mean the limits of my world.",
    "depth": 3,
    "translated": true
  },
  "5.621": {
    "en": "The world and life are one.",
    "zh": "世界和生活是一回事。",
    "de": "Die Welt und das Leben sind Eins.",
    "enPM": "The world and life are one.",
    "depth": 4,
    "translated": true
  },
  "5.63": {
    "en": "I am my world. (The microcosm.)",
    "zh": "我是我的世界。（小宇宙。）",
    "de": "Ich bin meine Welt. (Der Mikrokosmos.)",
    "enPM": "I am my world. (The microcosm.)",
    "depth": 3,
    "translated": true
  },
  "5.631": {
    "en": "The thinking, presenting subject; there is no such thing.\nIf I wrote a book \"The world as I found it\", I should also have therein to report on my body and say which members obey my will and which do not, etc. This then would be a method of isolating the subject or rather of showing that in an important sense there is no subject: that is to say, of it alone in this book mention could not be made.",
    "zh": "能思维、有表象的主体是不存在的。如果我写一本名为《我所经历的世界》的书，那么这书中也必须报道我的身体，并且说明哪些肢体服从我的意志等。因为这正是将主体隔离开来的一种方法，或毋宁说以一种意义深远的形式表明主体是不存在的；即在这本书中唯独不能谈到它。——",
    "de": "Das denkende, vorstellende, Subjekt gibt es nicht.\nWenn ich ein Buch schriebe „Die Welt, wie ich sie vorfand“, so wäre darin auch über meinen Leib zu berichten und zu sagen, welche Glieder meinem Willen unterstehen und welche nicht, etc., dies ist nämlich eine Methode, das Subjekt zu isolieren, oder vielmehr zu zeigen, dass es in einem wichtigen Sinne kein Subjekt gibt: Von ihm allein nämlich könnte in diesem Buche nicht die Rede sein.—",
    "enPM": "There is no such thing as the subject that thinks or entertains ideas.\nIf I wrote a book called The World as I found it, I should have to include a report on my body, and should have to say which parts were subordinate to my will, and which were not, etc., this being a method of isolating the subject, or rather of showing that in an important sense there is no subject; for it alone could not be mentioned in that book.—",
    "depth": 4,
    "translated": true
  },
  "5.632": {
    "en": "The subject does not belong to the world but it is a limit of the world.",
    "zh": "主体不属于世界，而是世界的一个界限。",
    "de": "Das Subjekt gehört nicht zur Welt, sondern es ist eine Grenze der Welt.",
    "enPM": "The subject does not belong to the world: rather, it is a limit of the world.",
    "depth": 4,
    "translated": true
  },
  "5.633": {
    "en": "Where in the world is a metaphysical subject to be noted?\nYou say that this case is altogether like that of the eye and the field of sight. But you do not really see the eye.\nAnd from nothing in the field of sight can it be concluded that it is seen from an eye.",
    "zh": "在世界中哪里可以见到一个形而上学的主体呢？你说，这就好像眼睛和视野完全一样。但是，你实际上并没有看到眼睛。在视野中没有东西能使你推出它是被一只眼睛看到的。",
    "de": "Wo in der Welt ist ein metaphysisches Subjekt zu merken?\nDu sagst, es verhält sich hier ganz wie mit Auge und Gesichtsfeld. Aber das Auge siehst du wirklich nicht.\nUnd nichts am Gesichtsfeld lässt darauf schließen, dass es von einem Auge gesehen wird.",
    "enPM": "Where in the world is a metaphysical subject to be found?\nYou will say that this is exactly like the case of the eye and the visual field. But really you do not see the eye.\nAnd nothing in the visual field allows you to infer that it is seen by an eye.",
    "depth": 4,
    "translated": true
  },
  "5.6331": {
    "en": "For the field of sight has not a form like this:\nEye ---",
    "zh": "因为视野并没有如下这样的一种形式：",
    "de": "Das Gesichtsfeld hat nämlich nicht etwa eine solche Form:\nAuge —",
    "enPM": "For the form of the visual field is surely not like this\nEye —",
    "depth": 5,
    "translated": true
  },
  "5.634": {
    "en": "This is connected with the fact that no part of our experience is also a priori.\nEverything we see could also be otherwise.\nEverything we describe at all could also be otherwise.\nThere is no order of things a priori.",
    "zh": "这是与这个事实相关联的：我们的经验中没有任何部分同时是先天的。凡是看到的，都可能是另一个样子。凡是能够描述的，都可能是另一个样子。没有任何事物的秩序是先天的。",
    "de": "Das hängt damit zusammen, dass kein Teil unserer Erfahrung auch a priori ist.\nAlles, was wir sehen, könnte auch anders sein.\nAlles, was wir überhaupt beschreiben können, könnte auch anders sein.\nEs gibt keine Ordnung der Dinge a priori.",
    "enPM": "This is connected with the fact that no part of our experience is at the same time a priori.\nWhatever we see could be other than it is.\nWhatever we can describe at all could be other than it is.\nThere is no a priori order of things.",
    "depth": 4,
    "translated": true
  },
  "5.64": {
    "en": "Here we see that solipsism strictly carried out coincides with pure realism. The I in solipsism shrinks to an extensionless point and there remains the reality co-ordinated with it.",
    "zh": "这里我们可以看到，严格贯彻的唯我论是与纯粹的实在论重合的。唯我论中的「我」缩小到了一个没有广延的点，而留下来了与它协调的实在。",
    "de": "Hier sieht man, dass der Solipsismus, streng durchgeführt, mit dem reinen Realismus zusammenfällt. Das Ich des Solipsismus schrumpft zum ausdehnungslosen Punkt zusammen, und es bleibt die ihm koordinierte Realität.",
    "enPM": "Here it can be seen that solipsism, when its implications are followed out strictly, coincides with pure realism. The self of solipsism shrinks to a point without extension, and there remains the reality co-ordinated with it.",
    "depth": 3,
    "translated": true
  },
  "5.641": {
    "en": "There is therefore really a sense in which the philosophy we can talk of a non-psychological I.\nThe I occurs in philosophy through the fact that the \"world is my world\".\nThe philosophical I is not the man, not the human body or the human soul of which psychology treats, but the metaphysical subject, the limit---not a part of the world.",
    "zh": "因此，实际上当真有一种在哲学上能用非心理学的方式来说明的「我」的意义。——「我」之进入哲学，乃是因「世界是我的世界」而进来的。哲学性的我不是一个人，不是人的身体或者心理学所处理的人的心灵，而是形而上学的主体，它是世界的界限——而不是世界的一部分。",
    "de": "Es gibt also wirklich einen Sinn, in welchem in der Philosophie nichtpsychologisch vom Ich die Rede sein kann.\nDas Ich tritt in die Philosophie dadurch ein, dass „die Welt meine Welt ist“.\nDas philosophische Ich ist nicht der Mensch, nicht der menschliche Körper, oder die menschliche Seele, von der die Psychologie handelt, sondern das metaphysische Subjekt, die Grenze –nicht ein Teil – der Welt.",
    "enPM": "Thus there really is a sense in which philosophy can talk about the self in a non-psychological way.\nWhat brings the self into philosophy is the fact that ‘the world is my world’.\nThe philosophical self is not the human being, not the human body, or the human soul, with which psychology deals, but rather the metaphysical subject, the limit of the world—not a part of it.",
    "depth": 4,
    "translated": true
  },
  "6.001": {
    "en": "This says nothing else than that every proposition is the result of successive applications of the operation $N'(\\xi)$ to the elementary propositions.",
    "zh": "这绝没有说出：每个命题都是真值运算的结果，而是说，一般的命题形式就是变项。",
    "de": "Dies sagt nichts anderes, als dass jeder Satz ein Resultat der successiven Anwendung der Operation N’(ξ) auf die Elementarsätze ist.",
    "enPM": "What this says is just that every proposition is a result of successive applications to elementary propositions of the operation N(ξ).",
    "depth": 2,
    "translated": true
  },
  "6.002": {
    "en": "If we are given the general form of the way in which a proposition is constructed, then thereby we are also given the general form of the way in which by an operation out of one proposition another can be created.",
    "zh": "如果给出了构造一个命题的一般形式，那么与此同时也给出了一个命题通过真值运算能从另一个命题产生出来的一般形式。",
    "de": "Ist die allgemeine Form gegeben, wie ein Satz gebaut ist, so ist damit auch schon die allgemeine Form davon gegeben, wie aus einem Satz durch eine Operation ein anderer erzeugt werden kann.",
    "enPM": "If we are given the general form according to which propositions are constructed, then with it we are also given the general form according to which one proposition can be generated out of another by means of an operation.",
    "depth": 2,
    "translated": true
  },
  "6.01": {
    "en": "The general form of the operation $\\Omega'(\\eta)$ is therefore: $[\\xi, N(\\xi)]'(\\eta) (=[\\eta, \\xi, N(\\xi)])$.\nThis is the most general form of transition from one proposition to another.",
    "zh": "因此运算Ω'(η)的一般形式是：[ξ, N(ξ)] (η) (= [η, ξ, N(ξ)])。这是从一个命题过渡到另一个命题的最一般形式。",
    "de": "Die allgemeine Form der Operation Ω’(η) ist also: [ξ, N(ξ)]’ (η) (=[η, ξ, N(ξ)]).\nDas ist die allgemeinste Form des Überganges von einem Satz zum anderen.",
    "enPM": "Therefore the general form of an operation Ω’(η) is [ξ, N(ξ)]’ (η) (=[η, ξ, N(ξ)]).\nThis is the most general form of transition from one proposition to another.",
    "depth": 2,
    "translated": true
  },
  "6.02": {
    "en": "And thus we come to numbers: I define\n$x = \\Omega^{0}'x$ Def. and\n$\\Omega'\\Omega\\nu'x = \\Omega^{\\nu+1}'x$ Def.\nAccording, then, to these symbolic rules we write the series $x, \\Omega'x, \\Omega'\\Omega'x, \\Omega'\\Omega'\\Omega'x, ...$\nas: $\\Omega^{0}'x, \\Omega^{0 + 1}'x, \\Omega^{0 + 1 + 1}'x, \\Omega^{0 + 1 + 1 + 1}'x, ...$\nTherefore I write in place of \"$[x, \\xi, \\Omega'\\xi]$\",\n\"$[\\Omega^{0}'x, \\Omega^{\\nu}'x, \\Omega^{\\nu + 1}'x]$\".\nAnd I define:\n0 + 1 = 1 Def.\n0 + 1 + 1 = 2 Def.\n0 + 1 + 1 + 1 = 3 Def.\nand so on.",
    "zh": "这样我们就达到了数。我定义：x=Ω^{0'}x Def.，并且Ω'Ω^{ν'}x=Ω^{ν+1'}x Def.。这样我们通过这些符号规则就把诸记号「0, 1, 2, 3...」放在括号之中，将记号系列x, Ω'x, Ω'Ω'x, Ω'Ω'Ω'x编写为：Ω^{0'}x, Ω^{0+1'}x, Ω^{0+1+1'}x, Ω^{0+1+1+1'}x...我以如下方式定义数：[0, ξ, ξ+1]",
    "de": "Und so kommen wir zu den Zahlen: Ich definiere\nx=\nNach diesen Zeichenregeln schreiben wir also die Reihe\nx, Ω’x, Ω’Ω’x, Ω’Ω’Ω’x, . . . . .\nso:\nΩ0’x, Ω0+1’x, Ω0+1+1’x, Ω0+1+1+1’x,  . . . . .\nAlso schreibe ich statt „[x, ξ, Ω’ξ]“:\n„[Ω0’x, Ων’x, Ων+1’x]“.\nUnd definiere:\n0+1=1  Def.",
    "enPM": "And this is how we arrive at numbers. I give the following definitions\nSo, in accordance with these rules, which deal with signs, we write the series\nx, Ω’x, Ω’Ω’x, Ω’Ω’Ω’x, . . . . .\nin the following way\nΩ0’x, Ω0+1’x, Ω0+1+1’x, Ω0+1+1+1’x,  . . . . .\nTherefore, instead of ‘[x, ξ, Ω’ξ]’,\nI write    ‘[Ω0’x, Ων’x, Ων+1’x]’.\nAnd I give the following definitions",
    "depth": 2,
    "translated": true
  },
  "6.021": {
    "en": "A number is the exponent of an operation.",
    "zh": "数是运算的指数。",
    "de": "Die Zahl ist der Exponent einer Operation.",
    "enPM": "A number is the exponent of an operation.",
    "depth": 3,
    "translated": true
  },
  "6.022": {
    "en": "The concept number is nothing else than that which is common to all numbers, the general form of a number.\nThe concept number is the variable number.\nAnd the concept of equality of numbers is the general form of all special equalities of numbers.",
    "zh": "数的概念无非是所有各数的共同之物，是数的普遍形式。",
    "de": "Der Zahlbegriff ist nichts anderes als das Gemeinsame aller Zahlen, die allgemeine Form der Zahl.\nDer Zahlbegriff ist die variable Zahl.\nUnd der Begriff der Zahlengleichheit ist die allgemeine Form aller speziellen Zahlengleichheiten.",
    "enPM": "The concept of number is simply what is common to all numbers, the general form of a number.\nThe concept of number is the variable number.\nAnd the concept of numerical equality is the general form of all particular cases of numerical equality.",
    "depth": 3,
    "translated": true
  },
  "6.03": {
    "en": "The general form of the cardinal number is: $[0, \\xi, \\xi+1]$.",
    "zh": "整数的普遍形式是：[0, ξ, ξ+1]。",
    "de": "Die allgemeine Form der ganzen Zahl ist: [0, ξ, ξ+1].",
    "enPM": "The general form of an integer is [0, ξ, ξ+1].",
    "depth": 2,
    "translated": true
  },
  "6.031": {
    "en": "The theory of classes is altogether superfluous in mathematics.\nThis is connected with the fact that the generality which we need in mathematics is not the accidental one.",
    "zh": "在数学中，类的理论完全是多余的。这与这样一件事有关，即我们在数学中所需的概括不是偶然的概括。",
    "de": "Die Theorie der Klassen ist in der Mathematik ganz überflüssig.\nDies hängt damit zusammen, dass die Allgemeinheit, welche wir in der Mathematik brauchen, nicht die zufällige ist.",
    "enPM": "The theory of classes is completely superfluous in mathematics.\nThis is connected with the fact that the generality required in mathematics is not accidental generality.",
    "depth": 3,
    "translated": true
  },
  "6.1": {
    "en": "The propositions of logic are tautologies.",
    "zh": "逻辑的命题是重言式。",
    "de": "Die Sätze der Logik sind Tautologien.",
    "enPM": "The propositions of logic are tautologies.",
    "depth": 2,
    "translated": true
  },
  "6.11": {
    "en": "The propositions of logic therefore say nothing. (They are the analytical propositions.)",
    "zh": "因此逻辑命题什么也没有说。（它们是分析命题。）",
    "de": "Die Sätze der Logik sagen also Nichts. (Sie sind die analytischen Sätze.)",
    "enPM": "Therefore the propositions of logic say nothing. (They are the analytic propositions.)",
    "depth": 3,
    "translated": true
  },
  "6.111": {
    "en": "Theories which make a proposition of logic appear substantial are always false. One could e.g. believe that the words \"true\" and \"false\" signify two properties among other properties, and then it would appear as a remarkable fact that every proposition possesses one of these properties. This now by no means appears self-evident, no more so than the proposition \"All roses are either yellow or red\" would seem even if it were true. Indeed our proposition now gets quite the character of a proposition of natural science and this is a certain symptom of its being falsely understood.",
    "zh": "使一个逻辑命题显得具有内容的理论，总是错误的。例如，人们可能相信「真」和「假」这两个词标明了两种性质，好像与其他性质并列一样；这样一来，看起来「真的命题」具有「真」性质，云云。而且这似乎就成了一件稀奇的事实：所有命题都拥有这种性质，而不是像一个命题例如「所有玫瑰花都是黄的」（即使它是真的）等等这样平凡。",
    "de": "Theorien, die einen Satz der Logik gehaltvoll erscheinen lassen, sind immer falsch. Man könnte z. B. glauben, dass die Worte „wahr“ und „falsch“ zwei Eigenschaften unter anderen Eigenschaften bezeichnen, und da erschiene es als eine merkwürdige Tatsache, dass jeder Satz eine dieser Eigenschaften besitzt. Das scheint nun nichts weniger als selbstverständlich zu sein, ebensowenig selbstverständlich, wie etwa der Satz, „alle Rosen sind entweder gelb oder rot“ klänge, auch wenn er wahr wäre. Ja, jener Satz bekommt nun ganz den Charakter eines naturwissenschaftlichen Satzes, und dies ist das sichere Anzeichen dafür, dass er falsch aufgefasst wurde.",
    "enPM": "All theories that make a proposition of logic appear to have content are false. One might think, for example, that the words ‘true’ and ‘false’ signified two properties among other properties, and then it would seem to be a remarkable fact that every proposition possessed one of these properties. On this theory it seems to be anything but obvious, just as, for instance, the proposition, ‘All roses are either yellow or red’, would not sound obvious even if it were true. Indeed, the logical proposition acquires all the characteristics of a proposition of natural science and this is the sure sign that it has been construed wrongly.",
    "depth": 4,
    "translated": true
  },
  "6.112": {
    "en": "The correct explanation of logical propositions must give them a peculiar position among all propositions.",
    "zh": "对逻辑命题的正确解释必须赋予它们在所有命题中以独一无二的地位。",
    "de": "Die richtige Erklärung der logischen Sätze muss ihnen eine einzigartige Stellung unter allen Sätzen geben.",
    "enPM": "The correct explanation of the propositions of logic must assign to them a unique status among all propositions.",
    "depth": 4,
    "translated": true
  },
  "6.113": {
    "en": "It is the characteristic mark of logical propositions that one can perceive in the symbol alone that they are true; and this fact contains in itself the whole philosophy of logic. And so also it is one of the most important facts that the truth or falsehood of non-logical propositions can not be recognized from the propositions alone.",
    "zh": "逻辑命题的特有标志是：仅从符号中便可认出它们是真的。而这个事实本身就包含了整个逻辑哲学。因此，非逻辑命题的真假不能仅从这些命题中认出，这也是最重要的诸事实之一。",
    "de": "Es ist das besondere Merkmal der logischen Sätze, dass man am Symbol allein erkennen kann, dass sie wahr sind, und diese Tatsache schließt die ganze Philosophie der Logik in sich. Und so ist es auch eine der wichtigsten Tatsachen, dass sich die Wahrheit oder Falschheit der nichtlogischen Sätze nicht am Satz allein erkennen lässt.",
    "enPM": "It is the peculiar mark of logical propositions that one can recognize that they are true from the symbol alone, and this fact contains in itself the whole philosophy of logic. And so too it is a very important fact that the truth or falsity of non-logical propositions cannot be recognized from the propositions alone.",
    "depth": 4,
    "translated": true
  },
  "6.12": {
    "en": "The fact that the propositions of logic are tautologies shows the formal---logical---properties of language, of the world.\nThat its constituent parts connected together in this way give a tautology characterizes the logic of its constituent parts.\nIn order that propositions connected together in a definite way may give a tautology they must have definite properties of structure. That they give a tautology when so connected shows therefore that they possess these properties of structure.",
    "zh": "逻辑命题之为重言式，这一事实显示了语言和世界的形式的——逻辑的——性质。逻辑之所以刻画它的那些构成部分以这样连接起来的方式产生重言式，这就刻画了它们的构成部分的逻辑。要使一些以特定方式连接起来的命题产生重言式，那些命题就必须具有特定的诸结构性质。因此，当它们以这种方式连接起来产生重言式时，就表明它们具有了这些诸结构性质。",
    "de": "Dass die Sätze der Logik Tautologien sind, das zeigt die formalen – logischen – Eigenschaften der Sprache, der Welt.\nDass ihre Bestandteile so verknüpft eine Tautologie ergeben, das charakterisiert die Logik ihrer Bestandteile.\nDamit Sätze, auf bestimmte Art und Weise verknüpft, eine Tautologie ergeben, dazu müssen sie bestimmte Eigenschaften der Struktur haben. Dass sie so verbunden eine Tautologie ergeben, zeigt also, dass sie diese Eigenschaften der Struktur besitzen.",
    "enPM": "The fact that the propositions of logic are tautologies shows the formal—logical—properties of language and the world.\nThe fact that a tautology is yielded by this particular way of connecting its constituents characterizes the logic of its constituents.\nIf propositions are to yield a tautology when they are connected in a certain way, they must have certain structural properties. So their yielding a tautology when combined in this way shows that they possess these structural properties.",
    "depth": 3,
    "translated": true
  },
  "6.1201": {
    "en": "That e.g. the propositions \"$p$\" and \"$\\neg p$\" in the connexion \"$\\neg(p.\\neg p)$\" give a tautology shows that they contradict one another. That the propositions \"$p \\supset q$\", \"$p$\" and \"$q$\" connected together in the form \"$(p \\supset q).(p):\\supset:(q)$\" give a tautology shows that $q$ follows from $p$ and $p \\supset q$. That \"$(x).fx : \\supset : fa$\" is a tautology shows that $fa$ follows from $(x).fx$, etc. etc.",
    "zh": "例如，两个命题「p」和「~p」在连接「~(p·~p)」中产生一个重言式，这显示它们互相矛盾。「p⊃q」「p」「q」以「(p⊃q)·(p):⊃:(q)」的形式彼此相连产生一个重言式，这显示出q从p以及p⊃q推出。「(x).fx:⊃:fa」是一个重言式，这显示出fa从(x).fx推出。等等。",
    "de": "Dass z. B. die Sätze „p“ und „~p“ in der Verbindung „~(p.~p)“ eine Tautologie ergeben, zeigt, dass sie einander widersprechen. Dass die Sätze „p⊃q“, „p“ und „q“ in der Form „(p⊃q).(p):⊃:(q)“ miteinander verbunden eine Tautologie ergeben, zeigt, dass q aus p und p⊃q folgt. Dass „(x).fx:⊃:fa“ eine Tautologie ist, dass fa aus (x).fx folgt. etc. etc.",
    "enPM": "For example, the fact that the propositions ‘p’ and ‘~p’ in the combination ‘~(p.~p)’ yield a tautology shows that they contradict one another. The fact that the propositions ‘p⊃q’, ‘p’, and ‘q’, combined with one another in the form ‘(p⊃q).(p):⊃:(q)’, yield a tautology shows that q follows from p and p⊃q. The fact that ‘(x).fx:⊃:fa’ is a tautology shows that fa follows from (x).fx. Etc. etc.",
    "depth": 4,
    "translated": true
  },
  "6.1202": {
    "en": "It is clear that we could have used for this purpose contradictions instead of tautologies.",
    "zh": "很清楚，为了同样的目的，也可以不用重言式而用矛盾式。",
    "de": "Es ist klar, dass man zu demselben Zweck statt der Tautologien auch die Kontradiktionen verwenden könnte.",
    "enPM": "It is clear that one could achieve the same purpose by using contradictions instead of tautologies.",
    "depth": 4,
    "translated": true
  },
  "6.1203": {
    "en": "In order to recognize a tautology as such, we can, in cases in which no sign of generality occurs in the tautology, make use of the following intuitive method: I write instead of \"p\", \"q\", \"r\", etc., \"TpF\", \"TqF\", \"TrF\", etc. The truth-combinations I express by brackets, e.g.:\nand the co-ordination of the truth or falsity of the whole proposition with the truth-combinations of the truth-arguments by lines in the following way:\nThis sign, for example, would therefore present the proposition $p \\supset p$. Now I will proceed to inquire whether such a proposition as $\\neg(p.\\neg p)$ (The Law of Contradiction) is a tautology. The form \"$\\neg\\xi$\" is written in our notation\nthe form \"$\\xi.\\nu$\" thus:---\nHence the proposition $\\neg(p.\\neg q)$ runs thus:---\nIf here we put \"$p$\" instead of \"$q$\" and examine the combination of the outermost T and F with the innermost, it is seen that the truth of the whole proposition is co-ordinated with all the truth-combinations of its argument, its falsity with none of the truth-combinations.",
    "zh": "为了认出一个重言式，在重言式中不包含概括记号的情况下，可以运用下面这种直观的方法：我将「p」「q」「r」等等写成「TpF」「TqF」「TrF」等等。真值组合我用线段来表示。这样一来，「~p」这一表达式可以这样来表达：这个记号则等同于记号「q⊃p」；重言式「p⊃~p」则指示出p如何不出现在它们的命题之中：记号「p∨q」的络线的结构，那些连接规则也以这样的形式和记号的多重性对应；只有在重言式如~p情况下，我们才作为一条规则可以指示出：记号如何相互面对面的产生出一种虚构的合取等。因此，命题「p⊃q」「p」「q」三种形式的记号结合起来是重言式，表明q是从p和p⊃q推出来的。这是清楚的：逻辑的命题是真值和实质的诸情况，——并和一切其他的像生物、或事实的事物相反，——然而在生物和事实中却没有「T」和「F」。例如，人们可能一时考虑：逻辑命题「p⊃p」的证明是怎样进行的？若人们将「p」看作是由各种记号联接而成的命题，若人们将基本的命题看作是根本的记号，那么在上述的指示方式下，就总是可以将那些推导过程看作是一种没有任何内容的组合规则的表现。",
    "de": "Um eine Tautologie als solche zu erkennen, kann man sich, in den Fällen, in welchen in der Tautologie keine Allgemeinheitsbezeichnung vorkommt, folgender anschaulichen Methode bedienen: Ich schreibe statt „p“, „q“, „r“ etc. „W p F“, „W q F“, „W r F“ etc. Die Wahrheitskombinationen drücke ich durch Klammern aus, z. B.:\nund die Zuordnung der Wahr- oder Falschheit des ganzen Satzes und der Wahrheitskombinationen der Wahrheitsargumente durch Striche auf folgende Weise:\nDies Zeichen würde also z. B. den Satz p⊃q darstellen. Nun will ich z. B. den Satz ~(p.~p) (Gesetz des Widerspruchs) daraufhin untersuchen, ob er eine Tautologie ist. Die Form „~ξ“ wird in unserer Notation\ngeschrieben; die Form „ξ.η“ so:\nDaher lautet der Satz ~(p.~q) so:\nSetzen wir hier statt „q“ „p“ ein und untersuchen die Verbindung der äußersten W und F mit den innersten, so ergibt sich, dass die Wahrheit des ganzen Satzes allen Wahrheitskombinationen seines Argumentes, seine Falschheit keiner der Wahrheitskombinationen zugeordnet ist.",
    "enPM": "In order to recognize an expression as a tautology, in cases where no generality-sign occurs in it, one can employ the following intuitive method: instead of ‘p’, ‘q’, ‘r’, etc. I write ‘T p F’, ‘T q F’, ‘T r F’, etc. Truth-combinations I express by means of brackets, e.g.\nand I use lines to express the correlation of the truth or falsity of the whole proposition with the truth-combinations of its truth-arguments, in the following way\nSo this sign, for instance, would represent the proposition p⊃q. Now, by way of example, I wish to examine the proposition ~(p.~p) (the law of contradiction) in order to determine whether it is a tautology. In our notation the form ‘~ξ’ is written as\nand the form ‘ξ.η’ as\nHence the proposition ~(p.~q) reads as follows\nIf we here substitute ‘p’ for ‘q’ and examine how the outermost T and F are connected with the innermost ones, the result will be that the truth of the whole proposition is correlated with all the truth-combinations of its argument, and its falsity with none of the truth-combinations.",
    "depth": 4,
    "translated": true
  },
  "6.121": {
    "en": "The propositions of logic demonstrate the logical properties of propositions, by combining them into propositions which say nothing.\nThis method could be called a zero-method. In a logical proposition propositions are brought into equilibrium with one another, and the state of equilibrium then shows how these propositions must be logically constructed.",
    "zh": "逻辑的命题通过把一些命题结合起来形成什么都没有说的命题而证明这些命题的逻辑性质。人们可以把这个方法称之为一种零方法。在重言式中，命题之间达成均衡的状态，而这种情况便构成了这些命题的逻辑性质。",
    "de": "Die Sätze der Logik demonstrieren die logischen Eigenschaften der Sätze, indem sie sie zu nichtssagenden Sätzen verbinden.\nDiese Methode könnte man auch eine Nullmethode nennen. Im logischen Satz werden Sätze miteinander ins Gleichgewicht gebracht und der Zustand des Gleichgewichts zeigt dann an, wie diese Sätze logisch beschaffen sein müssen.",
    "enPM": "The propositions of logic demonstrate the logical properties of propositions by combining them so as to form propositions that say nothing.\nThis method could also be called a zero-method. In a logical proposition, propositions are brought into equilibrium with one another, and the state of equilibrium then indicates what the logical constitution of these propositions must be.",
    "depth": 4,
    "translated": true
  },
  "6.122": {
    "en": "Whence it follows that we can get on without logical propositions, for we can recognize in an adequate notation the formal properties of the propositions by mere inspection.",
    "zh": "由此得出：我们也可以不用逻辑命题而单凭以一种适当的方式来单纯观察这些命题的符号本身而得到那些相应的内在性质。",
    "de": "Daraus ergibt sich, dass wir auch ohne die logischen Sätze auskommen können, da wir ja in einer entsprechenden Notation die formalen Eigenschaften der Sätze durch das bloße Ansehen dieser Sätze erkennen können.",
    "enPM": "It follows from this that we can actually do without logical propositions; for in a suitable notation we can in fact recognize the formal properties of propositions by mere inspection of the propositions themselves.",
    "depth": 4,
    "translated": true
  },
  "6.1221": {
    "en": "If for example two propositions \"$p$\" and \"$q$\" give a tautology in the connexion \"$p \\supset q$\", then it is clear that $q$ follows from $p$.\nE.g. that \"$q$\" follows from \"$p \\supset q.p$\" we see from these two propositions themselves, but we can also show it by combining them to \"$p \\supset q.p : \\supset : q$\" and then showing that this is a tautology.",
    "zh": "如果两个命题「p」和「q」在联结「p⊃q」中产生一个重言式，那么显然q是从p推出的。例如，我们看见「p⊃q·p」产生一个重言式，就显示q是从p·p⊃q推出的。但这样证明也是多余的。",
    "de": "Ergeben z. B. zwei Sätze „p“ und „q“ in der Verbindung „p⊃q“ eine Tautologie, so ist klar, dass q aus p folgt.\nDass z. B. „q“ aus „p⊃q.p“ folgt, ersehen wir aus diesen beiden Sätzen selbst, aber wir können es auch so zeigen, indem wir sie zu „p⊃q.p:⊃:q“ verbinden und nun zeigen, dass dies eine Tautologie ist.",
    "enPM": "If, for example, two propositions ‘p’ and ‘q’ in the combination ‘p⊃q’ yield a tautology, then it is clear that q follows from p.\nFor example, we see from the two propositions themselves that ‘q’ follows from ‘p⊃q.p’, but it is also possible to show it in this way: we combine them to form ‘p⊃q.p:⊃:q’, and then show that this is a tautology.",
    "depth": 5,
    "translated": true
  },
  "6.1222": {
    "en": "This throws light on the question why logical propositions can no more be empirically established than they can be empirically refuted. Not only must a proposition of logic be incapable of being contradicted by any possible experience, but it must also be incapable of being established by any such.",
    "zh": "这不仅说明为什么逻辑命题既不能被经验所确证，也不能被经验所驳倒，而且一种不仅逻辑的命题必须是不可被可能的经验驳倒的，也不可被任何可能的确证所确证。",
    "de": "Dies wirft ein Licht auf die Frage, warum die logischen Sätze nicht durch die Erfahrung bestätigt werden können, ebenso wenig, wie sie durch die Erfahrung widerlegt werden können. Nicht nur muss ein Satz der Logik durch keine mögliche Erfahrung widerlegt werden können, sondern er darf auch nicht durch eine solche bestätigt werden können.",
    "enPM": "This throws some light on the question why logical propositions cannot be confirmed by experience any more than they can be refuted by it. Not only must a proposition of logic be irrefutable by any possible experience, but it must also be unconfirmable by any possible experience.",
    "depth": 5,
    "translated": true
  },
  "6.1223": {
    "en": "It now becomes clear why we often feel as though \"logical truths\" must be \"postulated\" by us. We can in fact postulate them in so far as we can postulate an adequate notation.",
    "zh": "现在我们清楚了为什么我们经常感觉「逻辑真理」是我们可以「先天有效地」「要求的」：即我们可以要求它们，是因为我们要求一种令人满意的记号法。",
    "de": "Nun wird klar, warum man oft fühlte, als wären die „logischen Wahrheiten“ von uns zu „fordern“: Wir können sie nämlich insofern fordern, als wir eine genügende Notation fordern können.",
    "enPM": "Now it becomes clear why people have often felt as if it were for us to ‘postulate’ the ‘truths of logic’. The reason is that we can postulate them in so far as we can postulate an adequate notation.",
    "depth": 5,
    "translated": true
  },
  "6.1224": {
    "en": "It also becomes clear why logic has been called the theory of forms and of inference.",
    "zh": "现在也清楚了，为什么逻辑曾被称为形式和推论的理论。",
    "de": "Es wird jetzt auch klar, warum die Logik die Lehre von den Formen und vom Schließen genannt wurde.",
    "enPM": "It also becomes clear now why logic was called the theory of forms and of inference.",
    "depth": 5,
    "translated": true
  },
  "6.123": {
    "en": "It is clear that the laws of logic cannot themselves obey further logical laws.\n(There is not, as Russell supposed, for every \"type\" a special law of contradiction; but one is sufficient, since it is not applied to itself.)",
    "zh": "很明显，「逻辑规律」本身不能再从属于逻辑规律。（并不像罗素所认为的那样，对于每个「类型」都有一条特殊的矛盾律；相反，一条就够了，因为它并不应用于它自身。）",
    "de": "Es ist klar: Die logischen Gesetze dürfen nicht selbst wieder logischen Gesetzen unterstehen.\n(Es gibt nicht, wie Russell meinte, für jede „Type“ ein eigenes Gesetz des Widerspruches, sondern Eines genügt, da es auf sich selbst nicht angewendet wird.)",
    "enPM": "Clearly the laws of logic cannot in their turn be subject to laws of logic.\n(There is not, as Russell thought, a special law of contradiction for each ‘type’; one law is enough, since it is not applied to itself.)",
    "depth": 4,
    "translated": true
  },
  "6.1231": {
    "en": "The mark of logical propositions is not their general validity.\nTo be general is only to be accidentally valid for all things. An ungeneralized proposition can be tautologous just as well as a generalized one.",
    "zh": "逻辑命题的标志不是普遍有效性。因为普遍只是意味着：偶然地对所有事物有效。一个非概括命题本来可以和概括命题一样也是重言式。",
    "de": "Das Anzeichen des logischen Satzes ist nicht die Allgemeingültigkeit.\nAllgemein sein, heißt ja nur: Zufälligerweise für alle Dinge gelten. Ein unverallgemeinerter Satz kann ja ebensowohl tautologisch sein als ein verallgemeinerter.",
    "enPM": "The mark of a logical proposition is not general validity.\nTo be general means no more than to be accidentally valid for all things. An ungeneralized proposition can be tautological just as well as a generalized one.",
    "depth": 5,
    "translated": true
  },
  "6.1232": {
    "en": "Logical general validity, we could call essential as opposed to accidental general validity, e.g. of the proposition \"all men are mortal\". Propositions like Russell's \"axiom of reducibility\" are not logical propositions, and this explains our feeling that, if true, they can only be true by a happy chance.",
    "zh": "人们可以称逻辑的普遍有效性为本质的，与偶然的普遍有效性——如命题「所有的人都有一死」——相对立。命题如罗素的「可化归公理」不是逻辑的命题，这就解释了我们何以感觉到：这些命题如果是真的，那只能由于一种幸运的偶然才是真的。",
    "de": "Die logische Allgemeingültigkeit könnte man wesentlich nennen, im Gegensatz zu jener zufälligen, etwa des Satzes: „alle Menschen sind sterblich“. Sätze wie Russells „Axiom of reducibility“ sind nicht logische Sätze, und dies erklärt unser Gefühl: Dass sie, wenn wahr, so doch nur durch einen günstigen Zufall wahr sein könnten.",
    "enPM": "The general validity of logic might be called essential, in contrast with the accidental general validity of such propositions as ‘All men are mortal’. Propositions like Russell’s ‘axiom of reducibility’ are not logical propositions, and this explains our feeling that, even if they were true, their truth could only be the result of a fortunate accident.",
    "depth": 5,
    "translated": true
  },
  "6.1233": {
    "en": "We can imagine a world in which the axiom of reducibility is not valid. But it is clear that logic has nothing to do with the question whether our world is really of this kind or not.",
    "zh": "可以设想一个世界，在其中「可化归公理」无效。显然，关于我们的世界与那个世界（在其中上面的公理有效）之间究竟有什么不同的问题，与逻辑是不相干的。",
    "de": "Es lässt sich eine Welt denken, in der das Axiom of reducibility nicht gilt. Es ist aber klar, dass die Logik nichts mit der Frage zu schaffen hat, ob unsere Welt wirklich so ist oder nicht.",
    "enPM": "It is possible to imagine a world in which the axiom of reducibility is not valid. It is clear, however, that logic has nothing to do with the question whether our world really is like that or not.",
    "depth": 5,
    "translated": true
  },
  "6.124": {
    "en": "The logical propositions describe the scaffolding of the world, or rather they present it. They \"treat\" of nothing. They presuppose that names have meaning, and that elementary propositions have sense. And this is their connexion with the world. It is clear that it must show something about the world that certain combinations of symbols---which essentially have a definite character---are tautologies. Herein lies the decisive point. We said that in the symbols which we use much is arbitrary, much not. In logic only this expresses: but this means that in logic it is not we who express, by means of signs, what we want, but in logic the nature of the essentially necessary signs itself asserts. That is to say, if we know the logical syntax of any sign language, then all the propositions of logic are already given.",
    "zh": "逻辑命题描述世界的脚手架。或者毋宁说，它们表现世界的脚手架。它们无所「处理」：假定了名称是有意谓的，基本命题是有含义的。这就是它们与世界的联系。很明显，本质上具有确定性质的符号的一定联结成为重言式，必定对世界显示出某种东西。这里包含着决定性的东西。我们说，在我们使用的那些符号中，有些东西是任意的，有些不是。在逻辑中，只有后者才进行表达：而这等于说，在逻辑中，不是我们借助那些记号来表达我们所愿望的东西；而是在逻辑中，那些本性上必然的记号自己进行了陈述。如果我们知道了任何一种记号语言的逻辑句法，那么所有逻辑的命题就都已经被给予了。",
    "de": "Die logischen Sätze beschreiben das Gerüst der Welt, oder vielmehr, sie stellen es dar. Sie „handeln“ von nichts. Sie setzen voraus, dass Namen Bedeutung, und Elementarsätze Sinn haben: Und dies ist ihre Verbindung mit der Welt. Es ist klar, dass es etwas über die Welt anzeigen muss, dass gewisse Verbindungen von Symbolen – welche wesentlich einen bestimmten Charakter haben – Tautologien sind. Hierin liegt das Entscheidende. Wir sagten, manches an den Symbolen, die wir gebrauchen, wäre willkürlich, manches nicht. In der Logik drückt nur dieses aus: Das heißt aber, in der Logik drücken nicht wir mit Hilfe der Zeichen aus, was wir wollen, sondern in der Logik sagt die Natur der naturnotwendigen Zeichen selbst aus: Wenn wir die logische Syntax irgendeiner Zeichensprache kennen, dann sind bereits alle Sätze der Logik gegeben.",
    "enPM": "The propositions of logic describe the scaffolding of the world, or rather they represent it. They have no ‘subject-matter’. They presuppose that names have meaning and elementary propositions sense; and that is their connexion with the world. It is clear that something about the world must be indicated by the fact that certain combinations of symbols—whose essence involves the possession of a determinate character—are tautologies. This contains the decisive point. We have said that some things are arbitrary in the symbols that we use and that some things are not. In logic it is only the latter that express: but that means that logic is not a field in which we express what we wish with the help of signs, but rather one in which the nature of the natural and inevitable signs speaks for itself. If we know the logical syntax of any sign-language, then we have already been given all the propositions of logic.",
    "depth": 4,
    "translated": true
  },
  "6.125": {
    "en": "It is possible, even in the old logic, to give at the outset a description of all \"true\" logical propositions.",
    "zh": "因此，按照旧逻辑学的正确的概念，也可以从一开始就仅仅通过对符号的观察，把所有逻辑命题描述下来。",
    "de": "Es ist möglich, und zwar auch nach der alten Auffassung der Logik, von vornherein eine Beschreibung aller „wahren“ logischen Sätze zu geben.",
    "enPM": "It is possible—indeed possible even according to the old conception of logic—to give in advance a description of all ‘true’ logical propositions.",
    "depth": 4,
    "translated": true
  },
  "6.1251": {
    "en": "Hence there can never be surprises in logic.",
    "zh": "所以，在逻辑中不可能有使人出乎意料之外的东西。",
    "de": "Darum kann es in der Logik auch nie Überraschungen geben.",
    "enPM": "Hence there can never be surprises in logic.",
    "depth": 5,
    "translated": true
  },
  "6.126": {
    "en": "Whether a proposition belongs to logic can be calculated by calculating the logical properties of the symbol.\nAnd this we do when we prove a logical proposition. For without troubling ourselves about a sense and a meaning, we form the logical propositions out of others by mere symbolic rules.\nWe prove a logical proposition by creating it out of other logical propositions by applying in succession certain operations, which again generate tautologies out of the first. (And from a tautology only tautologies follow.)\nNaturally this way of showing that its propositions are tautologies is quite unessential to logic. Because the propositions, from which the proof starts, must show without proof that they are tautologies.",
    "zh": "一个命题是否属于逻辑，可以通过计算符号的逻辑属性而计算出来。这就是我们在「证明」一个逻辑命题时所做的事情。因为不必关心意义和意谓，我们仅仅按照符号规则从别的命题来构造逻辑命题。一个逻辑命题的证明在于：我们持续应用某些总是再次从原初的重言式中产生重言式的运演，以此将它从别的逻辑命题中产生出来。（而且，从一个重言式只能得出重言式来的。）自然，这种指明逻辑命题是重言式的方式，对于逻辑来说本身是完全不重要的。因为证明所从之出发的那些命题，当然一定会无须证明就表明它们自己本身就是重言式。",
    "de": "Ob ein Satz der Logik angehört, kann man berechnen, indem man die logischen Eigenschaften des Symbols berechnet.\nUnd dies tun wir, wenn wir einen logischen Satz „beweisen“. Denn, ohne uns um einen Sinn und eine Bedeutung zu kümmern, bilden wir den logischen Satz aus anderen nach bloßen Zeichenregeln.\nDer Beweis der logischen Sätze besteht darin, dass wir sie aus anderen logischen Sätzen durch successive Anwendung gewisser Operationen entstehen lassen, die aus den ersten immer wieder Tautologien erzeugen. (Und zwar folgen aus einer Tautologie nur Tautologien.)\nNatürlich ist diese Art zu zeigen, dass ihre Sätze Tautologien sind, der Logik durchaus unwesentlich. Schon darum, weil die Sätze, von welchen der Beweis ausgeht, ja ohne Beweis zeigen müssen, dass sie Tautologien sind.",
    "enPM": "One can calculate whether a proposition belongs to logic, by calculating the logical properties of the symbol.\nAnd this is what we do when we ‘prove’ a logical proposition. For, without bothering about sense or meaning, we construct the logical proposition out of others using only rules that deal with signs.\nThe proof of logical propositions consists in the following process: we produce them out of other logical propositions by successively applying certain operations that always generate further tautologies out of the initial ones. (And in fact only tautologies follow from a tautology.)\nOf course this way of showing that the propositions of logic are tautologies is not at all essential to logic, if only because the propositions from which the proof starts must show without any proof that they are tautologies.",
    "depth": 4,
    "translated": true
  },
  "6.1261": {
    "en": "In logic process and result are equivalent. (Therefore no surprises.)",
    "zh": "在逻辑中，过程和结果是等价的。（因此其中不包含任何出人意料的东西。）",
    "de": "In der Logik sind Prozess und Resultat äquivalent. (Darum keine Überraschung.)",
    "enPM": "In logic process and result are equivalent. (Hence the absence of surprise.)",
    "depth": 5,
    "translated": true
  },
  "6.1262": {
    "en": "Proof in logic is only a mechanical expedient to facilitate the recognition of tautology, where it is complicated.",
    "zh": "逻辑中的证明只是一种使其认出重言式的机械辅助手段，而在那些重言式是复杂的情况下，它便利了这种认出。",
    "de": "Der Beweis in der Logik ist nur ein mechanisches Hilfsmittel zum leichteren Erkennen der Tautologie, wo sie kompliziert ist.",
    "enPM": "Proof in logic is merely a mechanical expedient to facilitate the recognition of tautologies in complicated cases.",
    "depth": 5,
    "translated": true
  },
  "6.1263": {
    "en": "It would be too remarkable, if one could prove a significant proposition logically from another, and a logical proposition also. It is clear from the beginning that the logical proof of a significant proposition and the proof in logic must be two quite different things.",
    "zh": "如果人们能证明一个有含义的命题在逻辑上来自其他的命题，那么这确实意味着是在逻辑命题上获得了同样的证明，若那些命题是真的，那会是很了不起的。很清楚，一个有意义命题的证明和那逻辑上的命题证明本身不可能是同样的东西。",
    "de": "Es wäre ja auch zu merkwürdig, wenn man einen sinnvollen Satz logisch aus anderen beweisen könnte, und einen logischen Satz auch. Es ist von vornherein klar, dass der logische Beweis eines sinnvollen Satzes und der Beweis in der Logik zwei ganz verschiedene Dinge sein müssen.",
    "enPM": "Indeed, it would be altogether too remarkable if a proposition that had sense could be proved logically from others, and so too could a logical proposition. It is clear from the start that a logical proof of a proposition that has sense and a proof in logic must be two entirely different things.",
    "depth": 5,
    "translated": true
  },
  "6.1264": {
    "en": "The significant proposition asserts something, and its proof shows that it is so; in logic every proposition is the form of a proof.\nEvery proposition of logic is a modus ponens presented in signs. (And the modus ponens can not be expressed by a proposition.)",
    "zh": "有含义的命题断言了某种东西，而它的证明显示出：情况是它所断言的；在逻辑中，每个命题都是一种证明的形式。每一个逻辑命题都是一个以记号表现出来的被证明了的Modus ponens。（而且人们不可能通过一个命题来表达那个Modus ponens。）",
    "de": "Der sinnvolle Satz sagt etwas aus, und sein Beweis zeigt, dass es so ist; in der Logik ist jeder Satz die Form eines Beweises.\nJeder Satz der Logik ist ein in Zeichen dargestellter modus ponens. (Und den modus ponens kann man nicht durch einen Satz ausdrücken.)",
    "enPM": "A proposition that has sense states something, which is shown by its proof to be so. In logic every proposition is the form of a proof.\nEvery proposition of logic is a modus ponens represented in signs. (And one cannot express the modus ponens by means of a proposition.)",
    "depth": 5,
    "translated": true
  },
  "6.1265": {
    "en": "Logic can always be conceived to be such that every proposition is its own proof.",
    "zh": "逻辑总是可以被这样来构想，即每一个命题都是它自己的证明。",
    "de": "Immer kann man die Logik so auffassen, dass jeder Satz sein eigener Beweis ist.",
    "enPM": "It is always possible to construe logic in such a way that every proposition is its own proof.",
    "depth": 5,
    "translated": true
  },
  "6.127": {
    "en": "All propositions of logic are of equal rank; there are not some which are essentially primitive and others deduced from there.\nEvery tautology itself shows that it is a tautology.",
    "zh": "所有的逻辑命题都是平权的：其中没有本质的基本命题，也没有派生命题。每一个重言式自身就表明它是一个重言式。",
    "de": "Alle Sätze der Logik sind gleichberechtigt, es gibt unter ihnen nicht wesentlich Grundgesetze und abgeleitete Sätze.\nJede Tautologie zeigt selbst, dass sie eine Tautologie ist.",
    "enPM": "All the propositions of logic are of equal status: it is not the case that some of them are essentially derived propositions.\nEvery tautology itself shows that it is a tautology.",
    "depth": 4,
    "translated": true
  },
  "6.1271": {
    "en": "It is clear that the number of \"primitive propositions of logic\" is arbitrary, for we could deduce logic from one primitive proposition by simply forming, for example, the logical produce of Frege's primitive propositions. (Frege would perhaps say that this would no longer be immediately self-evident. But it is remarkable that so exact a thinker as Frege should have appealed to the degree of self-evidence as the criterion of a logical proposition.)",
    "zh": "很明显，「逻辑的初始命题」的数目是任意的。因为逻辑可以是从一个基本命题推导出来的，如果人们干脆把例如弗雷格的初始命题诸命题的逻辑积构造成公理的话。（弗雷格也许会说，这样一来这个基本命题就不再是直接自明的了。但像弗雷格这样一位锐利的思想家竟然援引自明性作为标准，是奇怪的。）",
    "de": "Es ist klar, dass die Anzahl der „logischen Grundgesetze“ willkürlich ist, denn man könnte die Logik ja aus Einem Grundgesetz ableiten, indem man einfach z. B. aus Freges Grundgesetzen das logische Produkt bildet. (Frege würde vielleicht sagen, dass dieses Grundgesetz nun nicht mehr unmittelbar einleuchte. Aber es ist merkwürdig, dass ein so exakter Denker wie Frege sich auf den Grad des Einleuchtens als Kriterium des logischen Satzes berufen hat.)",
    "enPM": "It is clear that the number of the ‘primitive propositions of logic’ is arbitrary, since one could derive logic from a single primitive proposition, e.g. by simply constructing the logical product of Frege’s primitive propositions. (Frege would perhaps say that we should then no longer have an immediately self-evident primitive proposition. But it is remarkable that a thinker as rigorous as Frege appealed to the degree of self-evidence as the criterion of a logical proposition.)",
    "depth": 5,
    "translated": true
  },
  "6.13": {
    "en": "Logic is not a theory but a reflexion of the world.\nLogic is transcendental.",
    "zh": "逻辑不是一种学说，而是世界的一种镜像。逻辑是超验的。",
    "de": "Die Logik ist keine Lehre, sondern ein Spiegelbild der Welt.\nDie Logik ist transcendental.",
    "enPM": "Logic is not a body of doctrine, but a mirror-image of the world.\nLogic is transcendental.",
    "depth": 3,
    "translated": true
  },
  "6.2": {
    "en": "Mathematics is a logical method.\nThe propositions of mathematics are equations, and therefore pseudo-propositions.",
    "zh": "数学是一种逻辑方法。数学的命题是等式，因此是伪命题。",
    "de": "Die Mathematik ist eine logische Methode.\nDie Sätze der Mathematik sind Gleichungen, also Scheinsätze.",
    "enPM": "Mathematics is a logical method.\nThe propositions of mathematics are equations, and therefore pseudo-propositions.",
    "depth": 2,
    "translated": true
  },
  "6.21": {
    "en": "Mathematical propositions express no thoughts.",
    "zh": "数学命题不表达思想。",
    "de": "Der Satz der Mathematik drückt keinen Gedanken aus.",
    "enPM": "A proposition of mathematics does not express a thought.",
    "depth": 3,
    "translated": true
  },
  "6.211": {
    "en": "In life it is never a mathematical proposition which we need, but we use mathematical propositions only in order to infer from propositions which do not belong to mathematics to others which equally do not belong to mathematics.\n(In philosophy the question \"Why do we really use that word, that proposition?\" constantly leads to valuable results.)",
    "zh": "在生活中，确实没有一个我们所需要的数学命题；我们使用数学命题，只是为了从那些不属于数学的命题推出别的同样也不属于数学的命题来。（在哲学中，「我们到底为什么要用那个词、那个命题」这样一句话，总是导致有价值的洞见。）",
    "de": "Im Leben ist es ja nie der mathematische Satz, den wir brauchen, sondern wir benützen den mathematischen Satz nur, um aus Sätzen, welche nicht der Mathematik angehören, auf andere zu schließen, welche gleichfalls nicht der Mathematik angehören.\n(In der Philosophie führt die Frage: „wozu gebrauchen wir eigentlich jenes Wort, jenen Satz“ immer wieder zu wertvollen Einsichten.)",
    "enPM": "Indeed in real life a mathematical proposition is never what we want. Rather, we make use of mathematical propositions only in inferences from propositions that do not belong to mathematics to others that likewise do not belong to mathematics.\n(In philosophy the question, ‘What do we actually use this word or this proposition for?’ repeatedly leads to valuable insights.)",
    "depth": 4,
    "translated": true
  },
  "6.22": {
    "en": "The logic of the world which the propositions of logic show in tautologies, mathematics shows in equations.",
    "zh": "逻辑命题在重言式中显示的世界逻辑，数学在诸等式中显示它。",
    "de": "Die Logik der Welt, die die Sätze der Logik in den Tautologien zeigen, zeigt die Mathematik in den Gleichungen.",
    "enPM": "The logic of the world, which is shown in tautologies by the propositions of logic, is shown in equations by mathematics.",
    "depth": 3,
    "translated": true
  },
  "6.23": {
    "en": "If two expressions are connected by the sign of equality, this means that they can be substituted for one another. But whether this is the case must show itself in the two expressions themselves.\nIt characterizes the logical form of two expressions, that they can be substituted for one another.",
    "zh": "如果两个表达式用等号联结起来，那意味着它们能够互相替换。但情况是否如此，必须在两个表达式本身中显示出来。这表现了两个表达式可以相互替换这一事实，刻画了它们的逻辑形式的特征。",
    "de": "Wenn zwei Ausdrücke durch das Gleichheitszeichen verbunden werden, so heißt das, sie sind durch einander ersetzbar. Ob dies aber der Fall ist, muss sich an den beiden Ausdrücken selbst zeigen.\nEs charakterisiert die logische Form zweier Ausdrücke, dass sie durch einander ersetzbar sind.",
    "enPM": "If two expressions are combined by means of the sign of equality, that means that they can be substituted for one another. But it must be manifest in the two expressions themselves whether this is the case or not.\nWhen two expressions can be substituted for one another, that characterizes their logical form.",
    "depth": 3,
    "translated": true
  },
  "6.231": {
    "en": "It is a property of affirmation that it can be conceived as double denial.\nIt is a property of \"1+1+1+1\" that it can be conceived as \"(1+1)+(1+1)\".",
    "zh": "肯定可以双重否定来产生，这是肯定的一种性质。「1+1=2」的意义就是：1+1可以替换为2等。",
    "de": "Es ist eine Eigenschaft der Bejahung, dass man sie als doppelte Verneinung auffassen kann.\nEs ist eine Eigenschaft von „1+1+1+1“, dass man es als „(1+1)+(1+1)“ auffassen kann.",
    "enPM": "It is a property of affirmation that it can be construed as double negation.\nIt is a property of ‘1+1+1+1’ that it can be construed as ‘(1+1)+(1+1)’.",
    "depth": 4,
    "translated": true
  },
  "6.232": {
    "en": "Frege says that these expressions have the same meaning but different senses.\nBut what is essential about equation is that it is not necessary in order to show that both expressions, which are connected by the sign of equality, have the same meaning: for this can be perceived from the two expressions themselves.",
    "zh": "弗雷格说，这两个表达式具有同一的意谓，但具有不同的含义。但是对等式来说，具有本质性的一点是：为了显示那两个由等号联结起来的表达式具有相同的意谓，等式并不是必要的，因为这一点可以从两个表达式自身中看出。",
    "de": "Frege sagt, die beiden Ausdrücke haben dieselbe Bedeutung, aber verschiedenen Sinn.\nDas Wesentliche an der Gleichung ist aber, dass sie nicht notwendig ist, um zu zeigen, dass die beiden Ausdrücke, die das Gleichheitszeichen verbindet, dieselbe Bedeutung haben, da sich dies aus den beiden Ausdrücken selbst ersehen lässt.",
    "enPM": "Frege says that the two expressions have the same meaning but different senses.\nBut the essential point about an equation is that it is not necessary in order to show that the two expressions connected by the sign of equality have the same meaning, since this can be seen from the two expressions themselves.",
    "depth": 4,
    "translated": true
  },
  "6.2321": {
    "en": "And, that the propositions of mathematics can be proved means nothing else than that their correctness can be seen without our having to compare what they express with the facts as regards correctness.",
    "zh": "而数学命题能够被证明，这不过意味着：它们的正确性不必通过与事实比较就可看出来，这一点是可以直接看出的。",
    "de": "Und, dass die Sätze der Mathematik bewiesen werden können, heißt ja nichts anderes, als dass ihre Richtigkeit einzusehen ist, ohne dass das, was sie ausdrücken, selbst mit den Tatsachen auf seine Richtigkeit hin verglichen werden muss.",
    "enPM": "And the possibility of proving the propositions of mathematics means simply that their correctness can be perceived without its being necessary that what they express should itself be compared with the facts in order to determine its correctness.",
    "depth": 5,
    "translated": true
  },
  "6.2322": {
    "en": "The identity of the meaning of two expressions cannot be asserted. For in order to be able to assert anything about their meaning, I must know their meaning, and if I know their meaning, I know whether they mean the same or something different.",
    "zh": "两个表达式的意谓相同，这是不能断言的。因为为了能够断言它们的意谓，我必须知道它们的意谓，而通过我知道了它们的意谓，我由此就知道了它们是否意谓着相同的东西还是不同的东西。",
    "de": "Die Identität der Bedeutung zweier Ausdrücke lässt sich nicht behaupten. Denn, um etwas von ihrer Bedeutung behaupten zu können, muss ich ihre Bedeutung kennen: und indem ich ihre Bedeutung kenne, weiß ich, ob sie dasselbe oder verschiedenes bedeuten.",
    "enPM": "It is impossible to assert the identity of meaning of two expressions. For in order to be able to assert anything about their meaning, I must know their meaning, and I cannot know their meaning without knowing whether what they mean is the same or different.",
    "depth": 5,
    "translated": true
  },
  "6.2323": {
    "en": "The equation characterizes only the standpoint from which I consider the two expressions, that is to say the standpoint of their equality of meaning.",
    "zh": "等式仅仅标志着那我观看两个表达式时的一个立场，即，我就是从这一观点去考察它们的意谓，也就是它们的意谓的等同。",
    "de": "Die Gleichung kennzeichnet nur den Standpunkt, von welchem ich die beiden Ausdrücke betrachte, nämlich vom Standpunkte ihrer Bedeutungsgleichheit.",
    "enPM": "An equation merely marks the point of view from which I consider the two expressions: it marks their equivalence in meaning.",
    "depth": 5,
    "translated": true
  },
  "6.233": {
    "en": "To the question whether we need intuition for the solution of mathematical problems it must be answered that language itself here supplies the necessary intuition.",
    "zh": "在解决一个数学问题中，是否需要直觉？对此的回答是：这恰好是语言在这里已经提供了必需的直观的地方。",
    "de": "Die Frage, ob man zur Lösung der mathematischen Probleme die Anschauung brauche, muss dahin beantwortet werden, dass eben die Sprache hier die nötige Anschauung liefert.",
    "enPM": "The question whether intuition is needed for the solution of mathematical problems must be given the answer that in this case language itself provides the necessary intuition.",
    "depth": 4,
    "translated": true
  },
  "6.2331": {
    "en": "The process of calculation brings about just this intuition.\nCalculation is not an experiment.",
    "zh": "运算的过程正好促成这种直观。计算不是一种实验。",
    "de": "Der Vorgang des Rechnens vermittelt eben diese Anschauung.\nDie Rechnung ist kein Experiment.",
    "enPM": "The process of calculating serves to bring about that intuition.\nCalculation is not an experiment.",
    "depth": 5,
    "translated": true
  },
  "6.234": {
    "en": "Mathematics is a method of logic.",
    "zh": "数学是一种逻辑的方法。数学方法的本质性的特征是以等式进行工作。也就是说，正是由于这种方法，每一个数学命题必须自己表明其本身。",
    "de": "Die Mathematik ist eine Methode der Logik.",
    "enPM": "Mathematics is a method of logic.",
    "depth": 4,
    "translated": true
  },
  "6.2341": {
    "en": "The essential of mathematical method is working with equations. On this method depends the fact that every proposition of mathematics must be self-intelligible.",
    "zh": "数学方法的本质是在于用到等式。因为正是由于这种方法，每一个数学命题都必须能够被看作可以不言自明的。这说明了某种东西。",
    "de": "Das Wesentliche der mathematischen Methode ist es, mit Gleichungen zu arbeiten. Auf dieser Methode beruht es nämlich, dass jeder Satz der Mathematik sich von selbst verstehen muss.",
    "enPM": "It is the essential characteristic of mathematical method that it employs equations. For it is because of this method that every proposition of mathematics must go without saying.",
    "depth": 5,
    "translated": true
  },
  "6.24": {
    "en": "The method by which mathematics arrives at its equations is the method of substitution.\nFor equations express the substitutability of two expressions, and we proceed from a number of equations to new equations, replacing expressions by others in accordance with the equations.",
    "zh": "数学用以获得它的等式的方法是代入法。因为等式表达了两个表达式的可替换性；我们按照等式从一定数目的等式中把一些表达式替换为其他的表达式，以此推进到新的等式。",
    "de": "Die Methode der Mathematik, zu ihren Gleichungen zu kommen, ist die Substitutionsmethode.\nDenn die Gleichungen drücken die Ersetzbarkeit zweier Ausdrücke aus und wir schreiten von einer Anzahl von Gleichungen zu neuen Gleichungen vor, indem wir, den Gleichungen entsprechend, Ausdrücke durch andere ersetzen.",
    "enPM": "The method by which mathematics arrives at its equations is the method of substitution.\nFor equations express the substitutability of two expressions and, starting from a number of equations, we advance to new equations by substituting different expressions in accordance with the equations.",
    "depth": 3,
    "translated": true
  },
  "6.241": {
    "en": "Thus the proof of the proposition $2 \\times 2 = 4$ runs:\n$(\\Omega^{\\nu})^(\\mu)'x = \\Omega^{\\nu \\times \\mu}'x$ Def.\n$\\Omega^{2 \\times 2}'x = (\\Omega^{2})^{2}'x = (\\Omega^{2})^{1 + 1}'x = \\Omega^{2}'\\Omega^{2}'x = \\Omega^{1 + 1}'\\Omega^{1 + 1}'x$\n$= (\\Omega'\\Omega)'(\\Omega'\\Omega)'x = \\Omega'\\Omega'\\Omega'\\Omega'x = \\Omega^{1 + 1 + 1 + 1}'x = \\Omega^{4}'x",
    "zh": "于是命题2×2=4的证明是：(Ω^ν)^μ'x=Ω^{ν×μ'}x Def.Ω^{2×2'}x=(Ω^2)^{2'}x=(Ω^2)^{1+1'}x=...=Ω^4'x。",
    "de": "So lautet der Beweis des Satzes 2 × 2=4:\n(Ων)μ’x=Ων× μ’x Def.\nΩ2 × 2’x=(Ω2)2’x=(Ω2)1+1’x=Ω2’Ω2’x\n=Ω1+1’Ω1+1’x=(Ω’Ω)’(Ω’Ω)’ x\n=Ω’Ω’Ω’Ω’x=Ω1+1+1+1’x=Ω4’x.",
    "enPM": "Thus the proof of the proposition 2 × 2=4 runs as follows:\n(Ων)μ’x=Ων× μ’x Def.\nΩ2 × 2’x=(Ω2)2’x=(Ω2)1+1’x=Ω2’Ω2’x\n=Ω1+1’Ω1+1’x=(Ω’Ω)’(Ω’Ω)’ x\n=Ω’Ω’Ω’Ω’x=Ω1+1+1+1’x=Ω4’x.",
    "depth": 4,
    "translated": true
  },
  "6.3": {
    "en": "Logical research means the investigation of all regularity. And outside logic all is accident.",
    "zh": "逻辑的探究就是对一切规律性的探究。而在逻辑之外，一切都是偶然的。",
    "de": "Die Erforschung der Logik bedeutet die Erforschung aller Gesetzmäßigkeit. Und außerhalb der Logik ist alles Zufall.",
    "enPM": "The exploration of logic means the exploration of everything that is subject to law. And outside logic everything is accidental.",
    "depth": 2,
    "translated": true
  },
  "6.31": {
    "en": "The so-called law of induction cannot in any case be a logical law, for it is obviously a significant propositions.---And therefore it cannot be a law a priori either.",
    "zh": "所谓的归纳律无论如何不可能是任何逻辑的规律，因为它显然是一个有含义的命题。——因而它也不可能是一个先天的规律。",
    "de": "Das sogenannte Gesetz der Induktion kann jedenfalls kein logisches Gesetz sein, denn es ist offenbar ein sinnvoller Satz. – Und darum kann es auch kein Gesetz a priori sein.",
    "enPM": "The so-called law of induction cannot possibly be a law of logic, since it is obviously a proposition with sense.—Nor, therefore, can it be an a priori law.",
    "depth": 3,
    "translated": true
  },
  "6.32": {
    "en": "The law of causality is not a law but the form of a law.",
    "zh": "因果律不是规律，而是一种规律的形式。",
    "de": "Das Kausalitätsgesetz ist kein Gesetz, sondern die Form eines Gesetzes.",
    "enPM": "The law of causality is not a law but the form of a law.",
    "depth": 3,
    "translated": true
  },
  "6.321": {
    "en": "\"Law of Causality\" is a class name. And as in mechanics there are, for instance, minimum-laws, such as that of least actions, so in physics there are causal laws, laws of the causality form.",
    "zh": "「因果律」是一个类名。正如在力学中，有一些极小的原理——例如最小作用原理——在物理学中也有因果律，即具有诸规律形式的诸规律。",
    "de": "„Kausalitätsgesetz“, das ist ein Gattungsname. Und wie es in der Mechanik, sagen wir, Minimum-Gesetze gibt – etwa der kleinsten Wirkung – so gibt es in der Physik Kausalitätsgesetze, Gesetze von der Kausalitätsform.",
    "enPM": "‘Law of causality’—that is a general name. And just as in mechanics, for example, there are ‘minimum-principles’, such as the law of least action, so too in physics there are causal laws, laws of the causal form.",
    "depth": 4,
    "translated": true
  },
  "6.3211": {
    "en": "Men had indeed an idea that there must be a \"law of least action\", before they knew exactly how it ran. (Here, as always, the a priori certain proves to be something purely logical.)",
    "zh": "人们在确切地知道「最小作用原理」以前就已猜测到必定有某条「最小作用原理」。（这里，往往是一条新的原理取代一条被误解的先前的原理。）",
    "de": "Man hat ja auch davon eine Ahnung gehabt, dass es ein „Gesetz der kleinsten Wirkung“ geben müsse, ehe man genau wusste, wie es lautete. (Hier, wie immer, stellt sich das a priori Gewisse als etwas rein Logisches heraus.)",
    "enPM": "Indeed people even surmised that there must be a ‘law of least action’ before they knew exactly how it went. (Here, as always, what is certain a priori proves to be something purely logical.)",
    "depth": 5,
    "translated": true
  },
  "6.33": {
    "en": "We do not believe a priori in a law of conservation, but we know a priori the possibility of a logical form.",
    "zh": "我们并非先天地相信一条守恒定律，而是先天地知道一种逻辑形式的可能性。",
    "de": "Wir glauben nicht a priori an ein Erhaltungsgesetz, sondern wir wissen a priori die Möglichkeit einer logischen Form.",
    "enPM": "We do not have an a priori belief in a law of conservation, but rather a priori knowledge of the possibility of a logical form.",
    "depth": 3,
    "translated": true
  },
  "6.34": {
    "en": "All propositions, such as the law of causation, the law of continuity in nature, the law of least expenditure in nature, etc. etc., all these are a priori intuitions of possible forms of the propositions of science.",
    "zh": "所有那些命题，如充足理由律、自然中的连续性原理、自然中的最小耗费原理等等，所有这些都是对科学命题的可能形式的一些先天的洞见。",
    "de": "Alle jene Sätze, wie der Satz vom Grunde, von der Kontinuität in der Natur, vom kleinsten Aufwande in der Natur etc. etc., alle diese sind Einsichten a priori über die mögliche Formgebung der Sätze der Wissenschaft.",
    "enPM": "All such propositions, including the principle of sufficient reason, the laws of continuity in nature and of least effort in nature, etc. etc.—all these are a priori insights about the forms in which the propositions of science can be cast.",
    "depth": 3,
    "translated": true
  },
  "6.341": {
    "en": "Newtonian mechanics, for example, brings the description of the universe to a unified form. Let us imagine a white surface with irregular black spots. We now say: Whatever kind of picture these make I can always get as near as I like to its description, if I cover the surface with a sufficiently fine square network and now say of every square that it is white or black. In this way I shall have brought the description of the surface to a unified form. This form is arbitrary, because I could have applied with equal success a net with a triangular or hexagonal mesh. It can happen that the description would have been simpler with the aid of a triangular mesh; that is to say we might have described the surface more accurately with a triangular, and coarser, than with the finer square mesh, or vice versa, and so on. To the different networks correspond different systems of describing the world. Mechanics determine a form of description by saying: All propositions in the description of the world must be obtained in a given way from a number of given propositions---the mechanical axioms. It thus provides the bricks for building the edifice of science, and says: Whatever building thou wouldst erect, thou shalt construct it in some manner with these bricks and these alone.\n(As with the system of numbers one must be able to write down any arbitrary number, so with the system of mechanics one must be able to write down any arbitrary physical proposition.)",
    "zh": "例如牛顿力学把世界描述统一起来。让我们设想一个有着一些或大或小的黑斑的白色表面。现在我们说：无论这会产生什么样的图形，只要我用一张足够精细的、由正方形组成的网去覆盖这个表面，并且对每一个正方形说它是白的还是黑的，我就总能够任意地接近对这个图形的描述。这样我就会将描述这个表面的形式统一起来。这个形式是任意的，因为我用一张由三角形网眼或六角形网眼组成的网也能够取得同样的结果。也许用三角形网眼的网描述起来会更简单一些。即是说，我们用一种比正方形网更细的三角形网，我们就能够比用正方形网更精确地描述这个表面（或者反之），如此等等。不同的网对应着不同的描述世界的系统。力学告诉我们，用以描述世界的命题，都必须能够从一个已给的诸命题——即力学中的诸公理——中以这种给定的方式得到。这样，它就提供了建筑科学大厦的砖石；（力学）说道：不论你要描述什么大厦，你都必须以某种方式把这些砖石组合起来。（正如我们用数的系统能够写出每一个任意的数目，同样，我们也必能用力的系统写出每一个任意的物理学命题。）",
    "de": "Die Newtonsche Mechanik z. B. bringt die Weltbeschreibung auf eine einheitliche Form. Denken wir uns eine weiße Fläche, auf der unregelmäßige schwarze Flecken wären. Wir sagen nun: Was für ein Bild immer hierdurch entsteht, immer kann ich seiner Beschreibung beliebig nahe kommen, indem ich die Fläche mit einem entsprechend feinen quadratischen Netzwerk bedecke und nun von jedem Quadrat sage, dass es weiß oder schwarz ist. Ich werde auf diese Weise die Beschreibung der Fläche auf eine einheitliche Form gebracht haben. Diese Form ist beliebig, denn ich hätte mit dem gleichen Erfolge ein Netz aus dreieckigen oder sechseckigen Maschen verwenden können. Es kann sein, dass die Beschreibung mit Hilfe eines Dreiecks-Netzes einfacher geworden wäre; das heißt, dass wir die Fläche mit einem gröberen Dreiecks-Netz genauer beschreiben könnten als mit einem feineren quadratischen (oder umgekehrt) usw. Den verschiedenen Netzen entsprechen verschiedene Systeme der Weltbeschreibung. Die Mechanik bestimmt eine Form der Weltbeschreibung, indem sie sagt: Alle Sätze der Weltbeschreibung müssen aus einer Anzahl gegebener Sätze – den mechanischen Axiomen – auf eine gegebene Art und Weise erhalten werden. Hierdurch liefert sie die Bausteine zum Bau des wissenschaftlichen Gebäudes und sagt: Welches Gebäude immer du aufführen willst, jedes musst du irgendwie mit diesen und nur diesen Bausteinen zusammenbringen.\n(Wie man mit dem Zahlensystem jede beliebige Anzahl, so muss man mit dem System der Mechanik jeden beliebigen Satz der Physik hinschreiben können.)",
    "enPM": "Newtonian mechanics, for example, imposes a unified form on the description of the world. Let us imagine a white surface with irregular black spots on it. We then say that whatever kind of picture these make, I can always approximate as closely as I wish to the description of it by covering the surface with a sufficiently fine square mesh, and then saying of every square whether it is black or white. In this way I shall have imposed a unified form on the description of the surface. The form is optional, since I could have achieved the same result by using a net with a triangular or hexagonal mesh. Possibly the use of a triangular mesh would have made the description simpler: that is to say, it might be that we could describe the surface more accurately with a coarse triangular mesh than with a fine square mesh (or conversely), and so on. The different nets correspond to different systems for describing the world. Mechanics determines one form of description of the world by saying that all propositions used in the description of the world must be obtained in a given way from a given set of propositions—the axioms of mechanics. It thus supplies the bricks for building the edifice of science, and it says, ‘Any building that you want to erect, whatever it may be, must somehow be constructed with these bricks, and with these alone.’\n(Just as with the number-system we must be able to write down any number we wish, so with the system of mechanics we must be able to write down any proposition of physics that we wish.)",
    "depth": 4,
    "translated": true
  },
  "6.342": {
    "en": "And now we see the relative position of logic and mechanics. (We could construct the network out of figures of different kinds, as out of triangles and hexagons together.) That a picture like that instanced above can be described by a network of a given form asserts nothing about the picture. (For this holds of every picture of this kind.) But this does characterize the picture, the fact, namely, that it can be completely described by a definite net of definite fineness.\nSo too the fact that it can be described by Newtonian mechanics asserts nothing about the world; but this asserts something, namely, that it can be described in that particular way in which as a matter of fact it is described. The fact, too, that it can be described more simply by one system of mechanics than by another says something about the world.",
    "zh": "现在我们可以看出逻辑和力学的相对位置。（那张网也可能由不同种类的图形，比如三角形和六角形组成的。）一种图形，如上面所说的那样，能够被一种给定形状的网所描述，这对该图形什么也没有说。（因为这对每一个此种类型的图形都成立。）但是，该图形能够被一张具有特定精细度的特定形状的网所描述，这就刻画了该图形的特征。因此，世界能够被牛顿力学描述，这关于世界什么也没有说；但是它能够如实际情况那样被牛顿力学描述，这一点却确实说出了某种东西。——用一种力学比用另一种力学能更简单地描述这个事实，也说出了关于世界的某种东西。",
    "de": "Und nun sehen wir die gegenseitige Stellung von Logik und Mechanik. (Man könnte das Netz auch aus verschiedenartigen Figuren etwa aus Dreiecken und Sechsecken bestehen lassen.) Dass sich ein Bild, wie das vorhin erwähnte, durch ein Netz von gegebener Form beschreiben lässt, sagt über das Bild nichts aus. (Denn dies gilt für jedes Bild dieser Art.) Das aber charakterisiert das Bild, dass es sich durch ein bestimmtes Netz von bestimmter Feinheit vollständig beschreiben lässt.\nSo auch sagt es nichts über die Welt aus, dass sie sich durch die Newtonsche Mechanik beschreiben lässt; wohl aber, dass sie sich so durch jene beschreiben lässt, wie dies eben der Fall ist. Auch das sagt etwas über die Welt, dass sie sich durch die eine Mechanik einfacher beschreiben lässt als durch die andere.",
    "enPM": "And now we can see the relative position of logic and mechanics. (The net might also consist of more than one kind of mesh: e.g. we could use both triangles and hexagons.) The possibility of describing a picture like the one mentioned above with a net of a given form tells us nothing about the picture. (For that is true of all such pictures.) But what does characterize the picture is that it can be described completely by a particular net with a particular size of mesh.\nSimilarly the possibility of describing the world by means of Newtonian mechanics tells us nothing about the world: but what does tell us something about it is the precise way in which it is possible to describe it by these means. We are also told something about the world by the fact that it can be described more simply with one system of mechanics than with another.",
    "depth": 4,
    "translated": true
  },
  "6.343": {
    "en": "Mechanics is an attempt to construct according to a single plan all true propositions which we need for the description of the world.",
    "zh": "力学是通过按照一个单一的计划把一切为描述世界所需要的真的命题都构造出来，从而描述世界。",
    "de": "Die Mechanik ist ein Versuch, alle wahren Sätze, die wir zur Weltbeschreibung brauchen, nach Einem Plane zu konstruieren.",
    "enPM": "Mechanics is an attempt to construct according to a single plan all the true propositions that we need for the description of the world.",
    "depth": 4,
    "translated": true
  },
  "6.3431": {
    "en": "Through the whole apparatus of logic the physical laws still speak of the objects of the world.",
    "zh": "全部逻辑机器通过这些物理规律仍然还是指向对世界的这种描述。物理规律通过全部的逻辑机器而谈论世界中的诸对象。",
    "de": "Durch den ganzen logischen Apparat hindurch sprechen die physikalischen Gesetze doch von den Gegenständen der Welt.",
    "enPM": "The laws of physics, with all their logical apparatus, still speak, however indirectly, about the objects of the world.",
    "depth": 5,
    "translated": true
  },
  "6.3432": {
    "en": "We must not forget that the description of the world by mechanics is always quite general. There is, for example, never any mention of particular material points in it, but always only of some points or other.",
    "zh": "我们不能忘记：力学对世界的描述总是完全一般的。在力学中，譬如，我们从来不是谈论特定的物质质点，而总是谈论某些随意的质点。",
    "de": "Wir dürfen nicht vergessen, dass die Weltbeschreibung durch die Mechanik immer die ganz allgemeine ist. Es ist in ihr z. B. nie von bestimmten materiellen Punkten die Rede, sondern immer nur von irgend welchen.",
    "enPM": "We ought not to forget that any description of the world by means of mechanics will be of the completely general kind. For example, it will never mention particular point-masses: it will only talk about any point-masses whatsoever.",
    "depth": 5,
    "translated": true
  },
  "6.35": {
    "en": "Although the spots in our picture are geometrical figures, geometry can obviously say nothing about their actual form and position. But the network is purely geometrical, and all its properties can be given a priori.\nLaws, like the law of causation, etc., treat of the network and not what the network describes.",
    "zh": "虽然我们图形中的这些斑点是几何图形，几何学显然根本不能谈论它的实际的形式和实况。但这网却是纯粹几何学的，它的所有属性都可以被先天地给出。像充足理由律那样的规律说的是关于网的，而不是关于网所描摹的东西。",
    "de": "Obwohl die Flecke in unserem Bild geometrische Figuren sind, so kann doch selbstverständlich die Geometrie gar nichts über ihre tatsächliche Form und Lage sagen. Das Netz aber ist rein geometrisch, alle seine Eigenschaften können a priori angegeben werden.\nGesetze wie der Satz vom Grunde, etc. handeln vom Netz, nicht von dem, was das Netz beschreibt.",
    "enPM": "Although the spots in our picture are geometrical figures, nevertheless geometry can obviously say nothing at all about their actual form and position. The network, however, is purely geometrical; all its properties can be given a priori.\nLaws like the principle of sufficient reason, etc. are about the net and not about what the net describes.",
    "depth": 3,
    "translated": true
  },
  "6.36": {
    "en": "If there were a law of causality, it might run: \"There are natural laws\".\nBut that can clearly not be said: it shows itself.",
    "zh": "如果有因果律，就可以说「有自然律」。不过，这当然不可说的：它自行显露出来。",
    "de": "Wenn es ein Kausalitätsgesetz gäbe, so könnte es lauten: „Es gibt Naturgesetze“.\nAber freilich kann man das nicht sagen: es zeigt sich.",
    "enPM": "If there were a law of causality, it might be put in the following way: There are laws of nature.\nBut of course that cannot be said: it makes itself manifest.",
    "depth": 3,
    "translated": true
  },
  "6.361": {
    "en": "In the terminology of Hertz we might say: Only uniform connections are thinkable.",
    "zh": "用赫兹的话来说：只有遵从规律的联系才是可思议的。",
    "de": "In der Ausdrucksweise Hertz’s  könnte man sagen: Nur gesetzmäßige Zusammenhänge sind denkbar.",
    "enPM": "One might say, using Hertz’s terminology, that only connexions that are subject to law are thinkable.",
    "depth": 4,
    "translated": true
  },
  "6.3611": {
    "en": "We cannot compare any process with the \"passage of time\"---there is no such thing---but only with another process (say, with the movement of the chronometer).\nHence the description of the temporal sequence of events is only possible if we support ourselves on another process.\nIt is exactly analogous for space. When, for example, we say that neither of two events (which mutually exclude one another) can occur, because there is no cause why the one should occur rather than the other, it is really a matter of our being unable to describe one of the two events unless there is some sort of asymmetry. And if there is such an asymmetry, we can regard this as the cause of the occurrence of the one and of the non-occurrence of the other.",
    "zh": "我们不能将一个过程和时间的进程进行比拟——没有时间的进程，只有它和另一个过程（例如计时器的走动）的比较。因此，对时间的描述只有通过依赖另一个过程才是可能的。对于空间也是完全类似的情况。例如，人们说，两个（互相排斥的）事件中，一个也不可能发生，因为没有任何原因使一个发生而不让另一个发生，实际上只有当人们能描述其中一个事件，如果不侵犯某种不对称性的话，情况才可能是这样。但情况不是如此，既然这样的不对称不存在。康德关于右手和左手不能相互覆盖的问题，如果限于二维空间就已经存在这一问题；它甚至已经在一维空间中存在：即在一条直线上，两个全等的图形a和b如果不离开这个一维空间则不能相互覆盖。（虽然它们实际上是可覆盖的，在其中，允许一个线段在另外一维如在一个平面中移动。）右手和左手实际上是完全全等的。这一点与它们不能被覆盖的事实无关。我们能够在四维空间中想象右手的手套戴在左手上。",
    "de": "Wir können keinen Vorgang mit dem „Ablauf der Zeit“ vergleichen – diesen gibt es nicht –, sondern nur mit einem anderen Vorgang (etwa mit dem Gang des Chronometers).\nDaher ist die Beschreibung des zeitlichen Verlaufs nur so möglich, dass wir uns auf einen anderen Vorgang stützen.\nGanz Analoges gilt für den Raum. Wo man z. B. sagt, es könne keines von zwei Ereignissen (die sich gegenseitig ausschließen) eintreten, weil keine Ursache vorhanden sei, warum das eine eher als das andere eintreten solle, da handelt es sich in Wirklichkeit darum, dass man gar nicht eines der beiden Ereignisse beschreiben kann, wenn nicht irgend eine Asymmetrie vorhanden ist. Und wenn eine solche Asymmetrie vorhanden ist, so können wir diese als Ursache des Eintreffens des einen und Nicht-Eintreffens des anderen auffassen.",
    "enPM": "We cannot compare a process with ‘the passage of time’—there is no such thing—but only with another process (such as the working of a chronometer).\nHence we can describe the lapse of time only by relying on some other process.\nSomething exactly analogous applies to space: e.g. when people say that neither of two events (which exclude one another) can occur, because there is nothing to cause the one to occur rather than the other, it is really a matter of our being unable to describe one of the two events unless there is some sort of asymmetry to be found. And if such an asymmetry is to be found, we can regard it as the cause of the occurrence of the one and the non-occurrence of the other.",
    "depth": 5,
    "translated": true
  },
  "6.36111": {
    "en": "The Kantian problem of the right and left hand which cannot be made to cover one another already exists in the plane, and even in one-dimensional space; where the two congruent figures a and b cannot be made to cover one another without\n- - - O------------ - - ------------O - - -\na                 b\nmoving them out of this space. The right and left hand are in fact completely congruent. And the fact that they cannot be made to cover one another has nothing to do with it.\nA right-hand glove could be put on a left hand if it could be turned round in four-dimensional space.",
    "zh": "康德的关于左右手的问题是已经存于平面中甚至于一维的空间中也能提出的问题：如在下图所示的○— —○和○— —○是互相全等的，在一维空间内不移动其中一者，它们是不能覆盖的。等等。",
    "de": "Das Kant’sche Problem von der rechten und linken Hand, die man nicht zur Deckung bringen kann, besteht schon in der Ebene, ja im eindimensionalen Raum, wo die beiden kongruenten Figuren a und b auch nicht zur Deckung gebracht werden können, ohne aus diesem Raum\n– – – ○————✕ – – ✕————○ – – –a                              b\nherausbewegt zu werden. Rechte und linke Hand sind tatsächlich vollkommen kongruent. Und dass man sie nicht zur Deckung bringen kann, hat damit nichts zu tun.\nDen rechten Handschuh könnte man an die linke Hand ziehen, wenn man ihn im vierdimensionalen Raum umdrehen könnte.",
    "enPM": "Kant’s problem about the right hand and the left hand, which cannot be made to coincide, exists even in two dimensions. Indeed, it exists in one-dimensional space\n– – – ○————✕ – – ✕————○ – – –a                              b\nin which the two congruent figures, a and b, cannot be made to coincide unless they are moved out of this space. The right hand and the left hand are in fact completely congruent. It is quite irrelevant that they cannot be made to coincide.\nA right-hand glove could be put on the left hand, if it could be turned round in four-dimensional space.",
    "depth": 6,
    "translated": true
  },
  "6.362": {
    "en": "What can be described can happen too, and what is excluded by the law of causality cannot be described.",
    "zh": "凡是能够被描述的东西，也就能够发生；而凡是因果律所要排除的东西，它也是不能描述的。",
    "de": "Was sich beschreiben lässt, das kann auch geschehen, und was das Kausalitätsgesetz ausschließen soll, das lässt sich auch nicht beschreiben.",
    "enPM": "What can be described can happen too: and what the law of causality is meant to exclude cannot even be described.",
    "depth": 4,
    "translated": true
  },
  "6.363": {
    "en": "The process of induction is the process of assuming the simplest law that can be made to harmonize with our experience.",
    "zh": "归纳过程在于：我们假定那能够与我们的经验相协调的最简单的规律。",
    "de": "Der Vorgang der Induktion besteht darin, dass wir das einfachste Gesetz annehmen, das mit unseren Erfahrungen in Einklang zu bringen ist.",
    "enPM": "The procedure of induction consists in accepting as true the simplest law that can be reconciled with our experiences.",
    "depth": 4,
    "translated": true
  },
  "6.3631": {
    "en": "This process, however, has no logical foundation but only a psychological one.\nIt is clear that there are no grounds for believing that the simplest course of events will really happen.",
    "zh": "但这个过程的根据不是逻辑的，而只是心理学的。显然，没有理由相信事实上会发生最简单的情况。",
    "de": "Dieser Vorgang hat aber keine logische, sondern nur eine psychologische Begründung.\nEs ist klar, dass kein Grund vorhanden ist, zu glauben, es werde nun auch wirklich der einfachste Fall eintreten.",
    "enPM": "This procedure, however, has no logical justification but only a psychological one.\nIt is clear that there are no grounds for believing that the simplest eventuality will in fact be realized.",
    "depth": 5,
    "translated": true
  },
  "6.36311": {
    "en": "That the sun will rise to-morrow, is an hypothesis; and that means that we do not know whether it will rise.",
    "zh": "明天太阳会升起，这是一个假设；这意味着我们不知道它是否会升起。",
    "de": "Dass die Sonne morgen aufgehen wird, ist eine Hypothese; und das heißt: wir wissen nicht, ob sie aufgehen wird.",
    "enPM": "It is an hypothesis that the sun will rise tomorrow: and this means that we do not know whether it will rise.",
    "depth": 6,
    "translated": true
  },
  "6.37": {
    "en": "A necessity for one thing to happen because another has happened does not exist. There is only logical necessity.",
    "zh": "由于另外某个事件的发生，一个事件就必定发生，这种强制性是不存在的。只有一种逻辑的必然性。",
    "de": "Einen Zwang, nach dem Eines geschehen müsste, weil etwas anderes geschehen ist, gibt es nicht. Es gibt nur eine logische Notwendigkeit.",
    "enPM": "There is no compulsion making one thing happen because another has happened. The only necessity that exists is logical necessity",
    "depth": 3,
    "translated": true
  },
  "6.371": {
    "en": "At the basis of the whole modern view of the world lies the illusion that the so-called laws of nature are the explanations of natural phenomena.",
    "zh": "全部现代的世界观都建立在这样一种幻觉之上：认为所谓的自然律就是对自然现象的解释。",
    "de": "Der ganzen modernen Weltanschauung liegt die Täuschung zugrunde, dass die sogenannten Naturgesetze die Erklärungen der Naturerscheinungen seien.",
    "enPM": "The whole modern conception of the world is founded on the illusion that the so-called laws of nature are the explanations of natural phenomena.",
    "depth": 4,
    "translated": true
  },
  "6.372": {
    "en": "So people stop short at natural laws as something unassailable, as did the ancients at God and Fate.\nAnd they are both right and wrong. but the ancients were clearer, in so far as they recognized one clear conclusion, whereas the modern system makes it appear as though everything were explained.",
    "zh": "所以，他们停留在自然律那里，就如同古代人停留在神和命运那里一样，视之为某种不可释明的东西。两者的体系都是正确的。不过，古代人的体系清楚些，因为他们承认有一个清晰的终点，而新的体系却要表现成好像一切都是已经被解释了的。",
    "de": "So bleiben sie bei den Naturgesetzen als bei etwas Unantastbarem stehen, wie die Älteren bei Gott und dem Schicksal.\nUnd sie haben ja beide Recht, und Unrecht. Die Alten sind allerdings insofern klarer, als sie einen klaren Abschluss anerkennen, während es bei dem neuen System scheinen soll, als sei alles erklärt.",
    "enPM": "Thus people today stop at the laws of nature, treating them as something inviolable, just as God and Fate were treated in past ages.\nAnd in fact both are right and both wrong: though the view of the ancients is clearer in so far as they have a clear and acknowledged terminus, while the modern system tries to make it look as if everything were explained.",
    "depth": 4,
    "translated": true
  },
  "6.373": {
    "en": "The world is independent of my will.",
    "zh": "世界是独立于我的意志的。",
    "de": "Die Welt ist unabhängig von meinem Willen.",
    "enPM": "The world is independent of my will.",
    "depth": 4,
    "translated": true
  },
  "6.374": {
    "en": "Even if everything we wished were to happen, this would only be, so to speak, a favour of fate, for there is no logical connexion between will and world, which would guarantee this, and the assumed physical connexion itself we could not again will.",
    "zh": "即使一切我们所愿望的事情都发生了，这仍可以说只是命运的恩宠而已，因为意志和世界之间没有逻辑的联系能保证这一点，而我们自己毕竟不能意欲那假定的物理联系。",
    "de": "Auch wenn alles, was wir wünschen, geschähe, so wäre dies doch nur, sozusagen, eine Gnade des Schicksals, denn es ist kein logischer Zusammenhang zwischen Willen und Welt, der dies verbürgte, und den angenommenen physikalischen Zusammenhang könnten wir doch nicht selbst wieder wollen.",
    "enPM": "Even if all that we wish for were to happen, still this would only be a favour granted by fate, so to speak: for there is no logical connexion between the will and the world, which would guarantee it, and the supposed physical connexion itself is surely not something that we could will.",
    "depth": 4,
    "translated": true
  },
  "6.375": {
    "en": "As there is only a logical necessity, so there is only a logical impossibility.",
    "zh": "正如只有一种逻辑的必然性一样，也只有一种逻辑的不可能性。",
    "de": "Wie es nur eine logische Notwendigkeit gibt, so gibt es auch nur eine logische Unmöglichkeit.",
    "enPM": "Just as the only necessity that exists is logical necessity, so too the only impossibility that exists is logical impossibility.",
    "depth": 4,
    "translated": true
  },
  "6.3751": {
    "en": "For two colours, e.g. to be at one place in the visual field, is impossible, logically impossible, for it is excluded by the logical structure of colour.\nLet us consider how this contradiction presents itself in physics. Somewhat as follows: That a particle cannot at the same time have two velocities, i.e. that at the same time it cannot be in two places, i.e. that particles in different places at the same time cannot be identical.\nIt is clear that the logical product of two elementary propositions can neither be a tautology nor a contradiction. The assertion that a point in the visual field has two different colours at the same time, is a contradiction.",
    "zh": "例如两个颜色同时在视野中的一个地方，是不可能的，而且是逻辑上的不可能，因为它为颜色的逻辑结构所排斥。让我们考虑一下这种情况在物理学中怎样被排斥的。大致是这样：一个粒子不可能同时具有两种速度；也就是说，它不可能同时处于两个位置；也就是说，一些粒子在同一时刻处于不同的位置不可能是同一的。（很清楚，两个基本命题的逻辑积既不能是重言式也不能是矛盾式。视野中的一个点同时具有两种不同的颜色这个断定是一个矛盾式。）",
    "de": "Dass z. B. zwei Farben zugleich an einem Ort des Gesichtsfeldes sind, ist unmöglich, und zwar logisch unmöglich, denn es ist durch die logische Struktur der Farbe ausgeschlossen.\nDenken wir daran, wie sich dieser Widerspruch in der Physik darstellt: Ungefähr so, dass ein Teilchen nicht zu gleicher Zeit zwei Geschwindigkeiten haben kann; das heißt, dass es nicht zu gleicher Zeit an zwei Orten sein kann; das heißt, dass Teilchen an verschiedenen Orten zu Einer Zeit nicht identisch sein können.\n(Es ist klar, dass das logische Produkt zweier Elementarsätze weder eine Tautologie noch eine Kontradiktion sein kann. Die Aussage, dass ein Punkt des Gesichtsfeldes zu gleicher Zeit zwei verschiedene Farben hat, ist eine Kontradiktion.)",
    "enPM": "For example, the simultaneous presence of two colours at the same place in the visual field is impossible, in fact logically impossible, since it is ruled out by the logical structure of colour.\nLet us think how this contradiction appears in physics: more or less as follows—a particle cannot have two velocities at the same time; that is to say, it cannot be in two places at the same time; that is to say, particles that are in different places at the same time cannot be identical.\n(It is clear that the logical product of two elementary propositions can neither be a tautology nor a contradiction. The statement that a point in the visual field has two different colours at the same time is a contradiction.)",
    "depth": 5,
    "translated": true
  },
  "6.4": {
    "en": "All propositions are of equal value.",
    "zh": "所有命题都是等值的。",
    "de": "Alle Sätze sind gleichwertig.",
    "enPM": "All propositions are of equal value.",
    "depth": 2,
    "translated": true
  },
  "6.41": {
    "en": "The sense of the world must lie outside the world. In the world everything is as it is and happens as it does happen. In it there is no value---and if there were, it would be of no value.\nIf there is a value which is of value, it must lie outside all happening and being-so. For all happening and being-so is accidental.\nWhat makes it non-accidental cannot lie in the world, for otherwise this would again be accidental.\nIt must lie outside the world.",
    "zh": "世界的意义必在世界之外。世界中的一切东西都如其所是，都如所发生的那样发生：在世界之中没有价值存在——如果价值存在的话，它就没有价值。如果价值存在，它必在一切发生的和如是存在的东西之外。因为一切发生的和实是的东西都是偶然的。使其成为非偶然的那种东西不在世界之中，因为否则这种东西就又会是偶然的了。它必在世界之外。",
    "de": "Der Sinn der Welt muss außerhalb ihrer liegen. In der Welt ist alles, wie es ist, und geschieht alles, wie es geschieht; es gibt in ihr keinen Wert – und wenn es ihn gäbe, so hätte er keinen Wert.\nWenn es einen Wert gibt, der Wert hat, so muss er außerhalb alles Geschehens und So-Seins liegen. Denn alles Geschehen und So-Sein ist zufällig.\nWas es nichtzufällig macht, kann nicht in der Welt liegen, denn sonst wäre dies wieder zufällig.\nEs muss außerhalb der Welt liegen.",
    "enPM": "The sense of the world must lie outside the world. In the world everything is as it is, and everything happens as it does happen: in it no value exists—and if it did exist, it would have no value.\nIf there is any value that does have value, it must lie outside the whole sphere of what happens and is the case. For all that happens and is the case is accidental.\nWhat makes it non-accidental cannot lie within the world, since if it did it would itself be accidental.\nIt must lie outside the world.",
    "depth": 3,
    "translated": true
  },
  "6.42": {
    "en": "Hence also there can be no ethical propositions.\nPropositions cannot express anything higher.",
    "zh": "因此，也不可能有任何伦理学的命题。命题不能表达任何更高的东西。",
    "de": "Darum kann es auch keine Sätze der Ethik geben.\nSätze können nichts Höheres ausdrücken.",
    "enPM": "So too it is impossible for there to be propositions of ethics.\nPropositions can express nothing that is higher.",
    "depth": 3,
    "translated": true
  },
  "6.421": {
    "en": "It is clear that ethics cannot be expressed.\nEthics are transcendental.\n(Ethics and aesthetics are one.)",
    "zh": "显然，伦理学是不可说的。伦理学是先验的。（伦理学和美学是同一个东西。）",
    "de": "Es ist klar, dass sich die Ethik nicht aussprechen lässt.\nDie Ethik ist transcendental.\n(Ethik und Ästhetik sind Eins.)",
    "enPM": "It is clear that ethics cannot be put into words.\nEthics is transcendental.\n(Ethics and aesthetics are one and the same.)",
    "depth": 4,
    "translated": true
  },
  "6.422": {
    "en": "The first thought in setting up an ethical law of the form \"thou shalt ...\" is: And what if I do not do it? But it is clear that ethics has nothing to do with punishment and reward in the ordinary sense. This question as to the consequences of an action must therefore be irrelevant. At least these consequences will not be events. For there must be something right in that formulation of the question. There must be some sort of ethical reward and ethical punishment, but this must lie in the action itself.\n(And this is clear also that the reward must be something acceptable, and the punishment something unacceptable.)",
    "zh": "建立一个「你应该……」形式的伦理学规律时，首先想到的是：如果它不被遵从的话，会有什么结果？但这是不可能的。伦理学与奖罚之类通常意义上的东西没有什么关系。所以，这关于行为的后果的问题，必定是不相干的。——至少这些后果不应是些事件。因为在这种提问方式中毕竟有某种正确的东西。固然必须有某一种伦理的奖和伦理的罚，但这些就存于行动本身中。（这一点也很清楚：奖赏必须是某种可接受的东西，处罚必须是某种不可接受的东西。）",
    "de": "Der erste Gedanke bei der Aufstellung eines ethischen Gesetzes von der Form „du sollst . . . .“ ist: Und was dann, wenn ich es nicht tue? Es ist aber klar, dass die Ethik nichts mit Strafe und Lohn im gewöhnlichen Sinne zu tun hat. Also muss diese Frage nach den Folgen einer Handlung belanglos sein. – Zum Mindesten dürfen diese Folgen nicht Ereignisse sein. Denn etwas muss doch an jener Fragestellung richtig sein. Es muss zwar eine Art von ethischem Lohn und ethischer Strafe geben, aber diese müssen in der Handlung selbst liegen.\n(Und das ist auch klar, dass der Lohn etwas Angenehmes, die Strafe etwas Unangenehmes sein muss.)",
    "enPM": "When an ethical law of the form, ‘Thou shalt …’ is laid down, one’s first thought is, ‘And what if I do not do it?’ It is clear, however, that ethics has nothing to do with punishment and reward in the usual sense of the terms. So our question about the consequences of an action must be unimportant.—At least those consequences should not be events. For there must be something right about the question we posed. There must indeed be some kind of ethical reward and ethical punishment, but they must reside in the action itself.\n(And it is also clear that the reward must be something pleasant and the punishment something unpleasant.)",
    "depth": 4,
    "translated": true
  },
  "6.423": {
    "en": "Of the will as the subject of the ethical we cannot speak.\nAnd the will as a phenomenon is only of interest to psychology.",
    "zh": "作为伦理的负荷者的意志，是不可说的。而作为现象的意志则只与心理学有关。",
    "de": "Vom Willen als dem Träger des Ethischen kann nicht gesprochen werden.\nUnd der Wille als Phänomen interessiert nur die Psychologie.",
    "enPM": "It is impossible to speak about the will in so far as it is the subject of ethical attributes.\nAnd the will as a phenomenon is of interest only to psychology.",
    "depth": 4,
    "translated": true
  },
  "6.43": {
    "en": "If good or bad willing changes the world, it can only change the limits of the world, not the facts; not the things that can be expressed in language.\nIn brief, the world must thereby become quite another, it must so to speak wax or wane as a whole.\nThe world of the happy is quite another than that of the unhappy.",
    "zh": "如果善的或恶的意志能改变世界的话，它只能改变世界的界限；而不能改变事实：不能改变那可以用语言表达的东西。简言之，世界必然会由此整个地变成另一个世界。可以说，它必然作为整体而消长。幸福者的世界是完全不同于不幸者的世界的。",
    "de": "Wenn das gute oder böse Wollen die Welt ändert, so kann es nur die Grenzen der Welt ändern, nicht die Tatsachen; nicht das, was durch die Sprache ausgedrückt werden kann.\nKurz, die Welt muss dann dadurch überhaupt eine andere werden. Sie muss sozusagen als Ganzes abnehmen oder zunehmen.\nDie Welt des Glücklichen ist eine andere als die des Unglücklichen.",
    "enPM": "If the good or bad exercise of the will does alter the world, it can alter only the limits of the world, not the facts—not what can be expressed by means of language.\nIn short the effect must be that it becomes an altogether different world. It must, so to speak, wax and wane as a whole.\nThe world of the happy man is a different one from that of the unhappy man.",
    "depth": 3,
    "translated": true
  },
  "6.431": {
    "en": "As in death, too, the world does not change, but ceases.",
    "zh": "死亡也并不是人生的一个事件。人并不体验死亡。如果永恒不是意指无限的时间的延续，而是意指非时间性，那么生活在当下中的人就是永恒地生活着的。我们的生命是无止境的，正如我们的视野是没有界限的一样。",
    "de": "Wie auch beim Tod die Welt sich nicht ändert, sondern aufhört.",
    "enPM": "So too at death the world does not alter, but comes to an end.",
    "depth": 4,
    "translated": true
  },
  "6.4311": {
    "en": "Death is not an event of life. Death is not lived through.\nIf by eternity is understood not endless temporal duration but timelessness, then he lives eternally who lives in the present.\nOur life is endless in the way that our visual field is without limit.",
    "zh": "在死这一点上，世界不是改变，而是终止。",
    "de": "Der Tod ist kein Ereignis des Lebens. Den Tod erlebt man nicht.\nWenn man unter Ewigkeit nicht unendliche Zeitdauer, sondern Unzeitlichkeit versteht, dann lebt der ewig, der in der Gegenwart lebt.\nUnser Leben ist ebenso endlos, wie unser Gesichtsfeld grenzenlos ist.",
    "enPM": "Death is not an event in life: we do not live to experience death.\nIf we take eternity to mean not infinite temporal duration but timelessness, then eternal life belongs to those who live in the present.\nOur life has no end in just the way in which our visual field has no limits.",
    "depth": 5,
    "translated": true
  },
  "6.4312": {
    "en": "The temporal immortality of the human soul, that is to say, its eternal survival also after death, is not only in no way guaranteed, but this assumption in the first place will not do for us what we always tried to make it do. Is a riddle solved by the fact that I survive for ever? Is this eternal life not as enigmatic as our present one? The solution of the riddle of life in space and time lies outside space and time.\n(It is not problems of natural science which have to be solved.)",
    "zh": "死不是生命的一个事件。死不是体验。我们的生命没有尽头，正如我们的视野没有界限一样。",
    "de": "Die zeitliche Unsterblichkeit der Seele des Menschen, das heißt also ihr ewiges Fortleben auch nach dem Tode, ist nicht nur auf keine Weise verbürgt, sondern vor allem leistet diese Annahme gar nicht das, was man immer mit ihr erreichen wollte. Wird denn dadurch ein Rätsel gelöst, dass ich ewig fortlebe? Ist denn dieses ewige Leben dann nicht ebenso rätselhaft wie das gegenwärtige? Die Lösung des Rätsels des Lebens in Raum und Zeit liegt außerhalb von Raum und Zeit.\n(Nicht Probleme der Naturwissenschaft sind ja zu lösen.)",
    "enPM": "Not only is there no guarantee of the temporal immortality of the human soul, that is to say of its eternal survival after death; but, in any case, this assumption completely fails to accomplish the purpose for which it has always been intended. Or is some riddle solved by my surviving for ever? Is not this eternal life itself as much of a riddle as our present life? The solution of the riddle of life in space and time lies outside space and time.\n(It is certainly not the solution of any problems of natural science that is required.)",
    "depth": 5,
    "translated": true
  },
  "6.432": {
    "en": "How the world is, is completely indifferent for what is higher. God does not reveal himself in the world.",
    "zh": "世界是怎样的，这对于更高的东西是完全不相干的。上帝不在世界之内现身。",
    "de": "Wie die Welt ist, ist für das Höhere vollkommen gleichgültig. Gott offenbart sich nicht in der Welt.",
    "enPM": "How things are in the world is a matter of complete indifference for what is higher. God does not reveal himself in the world.",
    "depth": 4,
    "translated": true
  },
  "6.4321": {
    "en": "The facts all belong only to the task and not to its performance.",
    "zh": "事实都只属于任务而不属于解决。",
    "de": "Die Tatsachen gehören alle nur zur Aufgabe, nicht zur Lösung.",
    "enPM": "The facts all contribute only to setting the problem, not to its solution.",
    "depth": 5,
    "translated": true
  },
  "6.44": {
    "en": "Not how the world is, is the mystical, but that it is.",
    "zh": "神秘的不是世界是怎样的，而是世界是这样的。",
    "de": "Nicht wie die Welt ist, ist das Mystische, sondern dass sie ist.",
    "enPM": "It is not how things are in the world that is mystical, but that it exists.",
    "depth": 3,
    "translated": true
  },
  "6.45": {
    "en": "The contemplation of the world sub specie aeterni is its contemplation as a limited whole.\nThe feeling that the world is a limited whole is the mystical feeling.",
    "zh": "从永恒的观点来看世界，就是把世界作为一个有限的整体来看。把世界作为有限的整体的感觉是神秘的感觉。",
    "de": "Die Anschauung der Welt sub specie aeterni ist ihre Anschauung als – begrenztes – Ganzes.\nDas Gefühl der Welt als begrenztes Ganzes ist das mystische.",
    "enPM": "To view the world sub specie aeterni is to view it as a whole—a limited whole.\nFeeling the world as a limited whole—it is this that is mystical.",
    "depth": 3,
    "translated": true
  },
  "6.5": {
    "en": "For an answer which cannot be expressed the question too cannot be expressed.\nThe riddle does not exist.\nIf a question can be put at all, then it can also be answered.",
    "zh": "对于一个不能被表达的答案来说，其问题也不能被表达。不存在谜。如果一个问题确实能被提出，那么它也就能够被回答。",
    "de": "Zu einer Antwort, die man nicht aussprechen kann, kann man auch die Frage nicht aussprechen.\nDas Rätsel gibt es nicht.\nWenn sich eine Frage überhaupt stellen lässt, so kann sie auch beantwortet werden.",
    "enPM": "When the answer cannot be put into words, neither can the question be put into words.\nThe riddle does not exist.\nIf a question can be framed at all, it is also possible to answer it.",
    "depth": 2,
    "translated": true
  },
  "6.51": {
    "en": "Scepticism is not irrefutable, but palpably senseless, if it would doubt where a question cannot be asked.\nFor doubt can only exist where there is a question; a question only where there is an answer, and this only where something can be said.",
    "zh": "怀疑论不是不可反驳的，而是在它于不能提问的地方提出怀疑时，显然是荒谬的。因为只有在存在着问题的地方才可能有怀疑；一个问题仅仅在存在着答案的地方才存在；而答案又仅在于某种东西能被说出来的地方。",
    "de": "Skeptizismus ist nicht unwiderleglich, sondern offenbar unsinnig, wenn er bezweifeln will, wo nicht gefragt werden kann.\nDenn Zweifel kann nur bestehen, wo eine Frage besteht; eine Frage nur, wo eine Antwort besteht, und diese nur, wo etwas gesagt werden kann.",
    "enPM": "Scepticism is not irrefutable, but obviously nonsensical, when it tries to raise doubts where no questions can be asked.\nFor doubt can exist only where a question exists, a question only where an answer exists, and an answer only where something can be said.",
    "depth": 3,
    "translated": true
  },
  "6.52": {
    "en": "We feel that even if all possible scientific questions be answered, the problems of life have still not been touched at all. Of course there is then no question left, and just this is the answer.",
    "zh": "我们感觉到，即使一切可能的科学问题都被解答了，我们的生命问题还完全未曾触及。自然此时当然不再有任何问题了；而恰恰这就是答案。",
    "de": "Wir fühlen, daß selbst, wenn alle möglichen wissenschaftlichen Fragen beantwortet sind, unsere Lebensprobleme noch gar nicht berührt sind. Freilich bleibt dann eben keine Frage mehr; und eben dies ist die Antwort.",
    "enPM": "We feel that even when all possible scientific questions have been answered, the problems of life remain completely untouched. Of course there are then no questions left, and this itself is the answer.",
    "depth": 3,
    "translated": true
  },
  "6.521": {
    "en": "The solution of the problem of life is seen in the vanishing of this problem.\n(Is not this the reason why men to whom after long doubting the sense of life became clear, could not then say wherein this sense consisted?)",
    "zh": "人们在人生问题的消失中看到了它的解决。（这难道不是那些长期怀疑的人——在他们明白了生命的意义却又不能说出这意义在于什么地方时——之所以的原因吗？）的确存在着不可说的东西。它显示自身；它就是那神秘的东西。",
    "de": "Die Lösung des Problems des Lebens merkt man am Verschwinden dieses Problems.\n(Ist nicht dies der Grund, warum Menschen, denen der Sinn des Lebens nach langen Zweifeln klar wurde, warum diese dann nicht sagen konnten, worin dieser Sinn bestand.)",
    "enPM": "The solution of the problem of life is seen in the vanishing of the problem.\n(Is not this the reason why those who have found after a long period of doubt that the sense of life became clear to them have then been unable to say what constituted that sense?)",
    "depth": 4,
    "translated": true
  },
  "6.522": {
    "en": "There is indeed the inexpressible. This shows itself; it is the mystical.",
    "zh": "的确存在着不可说的东西。它显示自身；它就是那神秘的东西。",
    "de": "Es gibt allerdings Unaussprechliches. Dies zeigt sich, es ist das Mystische.",
    "enPM": "There are, indeed, things that cannot be put into words. They make themselves manifest. They are what is mystical.",
    "depth": 4,
    "translated": true
  },
  "6.53": {
    "en": "The right method of philosophy would be this: To say nothing except what can be said, i.e. the propositions of natural science, i.e. something that has nothing to do with philosophy: and then always, when someone else wished to say something metaphysical, to demonstrate to him that he had given no meaning to certain signs in his propositions. This method would be unsatisfying to the other---he would not have the feeling that we were teaching him philosophy---but it would be the only strictly correct method.",
    "zh": "哲学中正确的方也就是：除了能说的，即自然科学的命题——也就是与哲学没有关系的东西——之外，什么也不说；并且每当别人想说某种形而上学的东西时，就给他指出：他对他命题中的某些符号并没有给出任何意谓。虽然这不会令别人满足——他不会感觉到我们是在教他哲学——但这是唯一严格正确的方法。",
    "de": "Die richtige Methode der Philosophie wäre eigentlich die: Nichts zu sagen, als was sich sagen lässt, also Sätze der Naturwissenschaft – also etwas, was mit Philosophie nichts zu tun hat – , und dann immer, wenn ein anderer etwas Metaphysisches sagen wollte, ihm nachzuweisen, dass er gewissen Zeichen in seinen Sätzen keine Bedeutung gegeben hat. Diese Methode wäre für den anderen unbefriedigend – er hätte nicht das Gefühl, dass wir ihn Philosophie lehrten – aber sie wäre die einzig streng richtige.",
    "enPM": "The correct method in philosophy would really be the following: to say nothing except what can be said, i.e. propositions of natural science—i.e. something that has nothing to do with philosophy—and then, whenever someone else wanted to say something metaphysical, to demonstrate to him that he had failed to give a meaning to certain signs in his propositions. Although it would not be satisfying to the other person—he would not have the feeling that we were teaching him philosophy—this method would be the only strictly correct one.",
    "depth": 3,
    "translated": true
  },
  "6.54": {
    "en": "My propositions are elucidatory in this way: he who understands me finally recognizes them as senseless, when he has climbed out through them, on them, over them. (He must so to speak throw away the ladder, after he has climbed up on it.)\nHe must surmount these propositions; then he sees the world rightly.",
    "zh": "我的命题以如下方式起阐释作用：凡是理解我的人，当他已经通过这些命题——攀上它们——越过它们而登高之后，最终会认识到它们是没有任何含义的。（可以说，他必须在登上梯子之后把梯子扔开。）他必须克服这些命题，然后才能正确地看世界。",
    "de": "Meine Sätze erläutern dadurch, dass sie der, welcher mich versteht, am Ende als unsinnig erkennt, wenn er durch sie – auf ihnen – über sie hinausgestiegen ist. (Er muss sozusagen die Leiter wegwerfen, nachdem er auf ihr hinaufgestiegen ist.)\nEr muss diese Sätze überwinden, dann sieht er die Welt richtig.",
    "enPM": "My propositions serve as elucidations in the following way: anyone who understands me eventually recognizes them as nonsensical, when he has used them—as steps—to climb up beyond them. (He must, so to speak, throw away the ladder after he has climbed up it.)\nHe must transcend these propositions, and then he will see the world aright.",
    "depth": 3,
    "translated": true
  }
};

const ROOT_IDS = ["1","2","3","4","5","6","7"];
