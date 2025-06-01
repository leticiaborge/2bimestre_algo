// Perguntas do quiz
const questions = {
    facil: [
        {
            q: "Qual desses animais vive no fundo do mar?",
            a: ["Tubarão", "Gato", "Águia", "Elefante"],
            c: 0
        },
        {
            q: "O que cobre a maior parte do planeta Terra?",
            a: ["Oceanos", "Florestas", "Desertos", "Montanhas"],
            c: 0
        },
        {
            q: "Como se chama o animal conhecido por mudar de cor no mar?",
            a: ["Polvo", "Golfinho", "Cavalo-marinho", "Tubarão"],
            c: 0
        },
        {
            q: "Qual desses NÃO é um peixe?",
            a: ["Baleia", "Salmão", "Sardinha", "Atum"],
            c: 0
        },
        {
            q: "Como se chama o local mais profundo dos oceanos?",
            a: ["Fossa das Marianas", "Everest Submarino", "Caverna Azul", "Recife de Coral"],
            c: 0
        },
        {
            q: "O que é um coral?",
            a: ["Animal", "Planta", "Pedra", "Inseto"],
            c: 0
        },
        {
            q: "Qual animal é famoso por soltar tinta quando ameaçado?",
            a: ["Lula", "Tubarão", "Camarão", "Estrela-do-mar"],
            c: 0
        },
        {
            q: "O que o cavalo-marinho macho faz de especial?",
            a: ["Dá à luz os filhotes", "Nada muito rápido", "Tem veneno", "Canta"],
            c: 0
        },
        {
            q: "Qual desses animais tem concha?",
            a: ["Caramujo-marinho", "Golfinho", "Tubarão", "Orca"],
            c: 0
        },
        {
            q: "A água do mar é:",
            a: ["Salgada", "Doce", "Ácida", "Morna"],
            c: 0
        }
    ],
    dificil: [
        {
            q: "Qual é o maior animal já registrado no oceano?",
            a: ["Baleia-azul", "Tubarão-branco", "Lula-gigante", "Cachalote"],
            c: 0
        },
        {
            q: "O que é bioluminescência?",
            a: [
                "Capacidade de emitir luz",
                "Respirar debaixo d'água",
                "Mudar de cor",
                "Crescer rapidamente"
            ],
            c: 0
        },
        {
            q: "Qual peixe é conhecido por seu 'anzol' luminoso no topo da cabeça?",
            a: [
                "Peixe-pescador",
                "Peixe-palhaço",
                "Peixe-espada",
                "Peixe-leão"
            ],
            c: 0
        },
        {
            q: "Qual a profundidade aproximada da Fossa das Marianas?",
            a: [
                "11.000 metros",
                "5.000 metros",
                "1.000 metros",
                "30.000 metros"
            ],
            c: 0
        },
        {
            q: "Como as esponjas-do-mar se alimentam?",
            a: [
                "Filtrando partículas da água",
                "Caçando peixes",
                "Fazendo fotossíntese",
                "Comendo algas"
            ],
            c: 0
        },
        {
            q: "Qual animal marinho pode viver mais de 200 anos?",
            a: [
                "Tubarão-da-Groenlândia",
                "Polvo",
                "Baleia-jubarte",
                "Estrela-do-mar"
            ],
            c: 0
        },
        {
            q: "O que significa 'maré vermelha'?",
            a: [
                "Proliferação de algas tóxicas",
                "Chegada de tubarões",
                "Tempestade no mar",
                "Água muito quente"
            ],
            c: 0
        },
        {
            q: "Quantos braços tem uma lula comum?",
            a: [
                "10",
                "8",
                "12",
                "6"
            ],
            c: 0
        },
        {
            q: "Qual desses não é um crustáceo?",
            a: [
                "Polvo",
                "Caranguejo",
                "Lagosta",
                "Camarão"
            ],
            c: 0
        },
        {
            q: "O que é um plâncton?",
            a: [
                "Organismo microscópico",
                "Tipo de peixe",
                "Rocha marinha",
                "Alga gigante"
            ],
            c: 0
        },
        {
            q: "Qual animal do mar pode causar um choque elétrico?",
            a: [
                "Enguia-elétrica",
                "Orca",
                "Lula-gigante",
                "Cavalo-marinho"
            ],
            c: 0
        },
        {
            q: "Qual desses animais é famoso por construir recifes?",
            a: [
                "Coral",
                "Tartaruga",
                "Baleia",
                "Polvo"
            ],
            c: 0
        },
        {
            q: "O que são hidrotermais?",
            a: [
                "Fontes quentes no fundo do mar",
                "Peixes bioluminescentes",
                "Plantas aquáticas",
                "Correntes oceânicas"
            ],
            c: 0
        },
        {
            q: "Qual destes animais pode soltar seus braços e regenerar?",
            a: [
                "Estrela-do-mar",
                "Salmão",
                "Baleia",
                "Camarão"
            ],
            c: 0
        },
        {
            q: "O que é o fitoplâncton?",
            a: [
                "Planta microscópica do mar",
                "Peixe transparente",
                "Coral jovem",
                "Lula bebê"
            ],
            c: 0
        },
        {
            q: "Qual animal marinho é chamado de 'unicórnio do mar'?",
            a: [
                "Narval",
                "Beluga",
                "Baleia-azul",
                "Peixe-agulha"
            ],
            c: 0
        },
        {
            q: "Qual é a função do 'barbatanas' nos peixes?",
            a: [
                "Nadar e equilibrar o corpo",
                "Respirar",
                "Proteger de predadores",
                "Fazer sons"
            ],
            c: 0
        },
        {
            q: "Por que o peixe-palhaço vive entre anêmonas?",
            a: [
                "Proteção contra predadores",
                "Alimentação",
                "Reprodução",
                "Para dormir"
            ],
            c: 0
        },
        {
            q: "Como se locomove a água-viva?",
            a: [
                "Contrações do corpo",
                "Nadadeiras",
                "Caminhando",
                "Planando com barbatanas"
            ],
            c: 0
        },
        {
            q: "Qual animal marinho pode abrir ostras usando pedras?",
            a: [
                "Lontra-marinha",
                "Golfinho",
                "Tubarão",
                "Caravela-portuguesa"
            ],
            c: 0
        }
    ]
};

// Mensagens aleatórias para feedback
const feedbacks = [
    "Muito bem, continue assim!",
    "Ótima escolha!",
    "Você está indo muito bem!",
    "Arrasou! Próxima pergunta.",
    "Mergulhando nas respostas certas!",
    "Siga em frente, explorador(a) marítimo(a)!",
    "Resposta correta!",
    "Maravilha!",
    "Show! Vamos para a próxima."
];
const feedbacksErr = [
    "Oops! Não foi dessa vez.",
    "Quase! Tente a próxima.",
    "Resposta errada, mas não desista!",
    "Continue tentando!",
    "Não desanime, o fundo do mar é cheio de surpresas!",
    "Errou, mas continue nadando!"
];

// Elementos
const menu = document.getElementById('menu');
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const finalMessage = document.getElementById('final-message');
const restartBtn = document.getElementById('restart');

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let totalQuestions = 0;
let modo = "facil";

// Função para embaralhar perguntas e respostas
function shuffle(array) {
    let arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Iniciar quiz
document.getElementById('btn-facil').onclick = () => startQuiz('facil');
document.getElementById('btn-dificil').onclick = () => startQuiz('dificil');
restartBtn.onclick = () => {
    result.classList.add('hide');
    menu.classList.remove('hide');
    feedbackEl.textContent = '';
};

function startQuiz(level) {
    modo = level;
    currentQuestions = shuffle(questions[level]);
    currentIndex = 0;
    score = 0;
    totalQuestions = (level === 'facil') ? 10 : 20;
    if (currentQuestions.length > totalQuestions)
        currentQuestions = currentQuestions.slice(0, totalQuestions);
    menu.classList.add('hide');
    result.classList.add('hide');
    quiz.classList.remove('hide');
    showQuestion();
    updateProgress();
}

function showQuestion() {
    const q = currentQuestions[currentIndex];
    questionEl.textContent = q.q;
    // Embaralhar respostas mantendo índice da correta
    let respostas = q.a.map((res, idx) => ({res, idx}));
    respostas = shuffle(respostas);
    answersEl.innerHTML = '';
    respostas.forEach((obj, i) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = obj.res;
        btn.onclick = () => selectAnswer(obj.idx === q.c, btn);
        answersEl.appendChild(btn);
    });
    feedbackEl.textContent = '';
}

function selectAnswer(isCorrect, btn) {
    Array.from(answersEl.children).forEach(b => b.disabled = true);
    btn.classList.add('selected');
    setTimeout(() => {
        if (isCorrect) {
            score++;
            feedbackEl.textContent = feedbacks[Math.floor(Math.random() * feedbacks.length)];
        } else {
            feedbackEl.textContent = feedbacksErr[Math.floor(Math.random() * feedbacksErr.length)];
        }
        setTimeout(() => {
            currentIndex++;
            if (currentIndex < totalQuestions) {
                showQuestion();
                updateProgress();
            } else {
                showResult();
            }
        }, 900);
    }, 200);
}

function updateProgress() {
    progressBar.style.width = ((currentIndex) / totalQuestions * 100) + "%";
    progressText.textContent = `Pergunta ${currentIndex + 1} de ${totalQuestions}`;
}

function showResult() {
    quiz.classList.add('hide');
    result.classList.remove('hide');
    finalMessage.textContent = score <= totalQuestions / 2
        ? "Você pode explorar mais o fundo do mar!"
        : (score === totalQuestions
            ? "Incrível! Você é um(a) mestre do oceano!"
            : "Muito bem! Mandou muito bem no fundo do mar!");
    scoreEl.textContent = `Você acertou ${score} de ${totalQuestions} perguntas.`;
}

// Bolhas animadas
function createBubbles() {
    const bubbleContainer = document.querySelector('.bubbles');
    for (let i = 0; i < 22; i++) {
        let bubble = document.createElement('div');
        bubble.className = 'bubble';
        let size = Math.random() * 22 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${5 + Math.random() * 5}s`;
        bubble.style.opacity = 0.12 + Math.random() * 0.5;
        bubble.style.setProperty('--move-x', `${(Math.random() - 0.5) * 45}px`);
        bubbleContainer.appendChild(bubble);
    }
}
createBubbles();