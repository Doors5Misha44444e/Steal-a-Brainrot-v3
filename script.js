document.addEventListener("DOMContentLoaded", () => {
   
    const questions = [
        {
            question: "Скільки є рідкостей в [🎁] Steal a Brainrot?",
            answers: ["3", "4", "32", "10"],
            correct: 3
        },
        {
            question: "Скільки брейротів в [🎁] Steal a Brainrot?",
            answers: ["5", "666", "490", "217"],
            correct: 3
        },
        {
            question: "Який найрідкіший брейрот в [🎁] Steal a Brainrot?",
            answers: ["Orcaledon", "Graipuss Medussi", "Strawberry Elephant", "Meowl"],
            correct: 2
        },
        {
            question: "Яка найвища вдача в [🎁] Steal a Brainrot?",
            answers: ["2Х", "9Х", "67Х", "12Х"],
            correct: 3
        },
        {
            question: "Який найрідкісніший брейнрот у Secret Lucky Block?",
            answers: ["La Secret Combinasion", "Esok Sekolah", "Torrtuginni Dragonfrutini", "Los 67"],
            correct: 0
        },
        {
            question: "Який не вигаданий брейрот в [🎁] Steal a Brainrot?",
            answers: ["Thunder Brain", "Mega Meowl", "Reinito Sleighito", "Skibidi Toilet"],
            correct: 2
        },
           {
            question: "Який  брейрот найбільше заробляє в [🎁] Steal a Brainrot?",
            answers: ["Cooki and Milki", "Los 25", "Reinito Sleighito", "La Ginger Sekolah"],
            correct: 0
        },
           {
            question: "Який  брейрот найкрасивіший в [🎁] Steal a Brainrot?",
            answers: ["Cooki and Milki", "Festive 67", "Reinito Sleighito", "Gingerat Gerat"],
            correct: 1
        },
             {
            question: "Який  брейрот початковий в [🎁] Steal a Brainrot?",
            answers: ["Skibidi Toilet", "Noobini Pizzanini", "Piccione Macchina", "Ketchuru and Musturu"],
            correct: 1
        },
        
             {
            question: "Який найкращий лаки блок в [🎁] Steal a Brainrot?",
            answers: ["Premium Festive Lucky Block", "Brainrot God Lucky Block", "Los Taco Blocks", "Festive Lucky Block"],
            correct: 0
        },
    ];

    const questionText = document.getElementById("question-text");
    const answersContainer = document.getElementById("answers-container");
    const modal = document.getElementById("start-modal");
    const startBtn = document.getElementById("start-btn");
    const exitBtn = document.getElementById("exit-btn");
    const quizScreen = document.getElementById("quiz-screen");
    const timerEl = document.getElementById("timer");

    let index = 0;
    let score = 0;
    let timeLeft = 60;
    let timer;

    startBtn.onclick = () => {
        modal.style.display = "none";
        quizScreen.style.display = "block";
        showQuestion();
    };

    exitBtn.onclick = () => {
        modal.innerHTML = "<h2 style='color:white'>Тест завершено</h2>";
    };

    function startTimer() {
        clearInterval(timer);
        timeLeft = 10;
        timerEl.textContent = `⏱️ Час: ${timeLeft}`;

        timer = setInterval(() => {
            timeLeft--;
            timerEl.textContent = `⏱️ Час: ${timeLeft}`;

            if (timeLeft <= 0) {
                clearInterval(timer);
                index++;
                if (index < questions.length) {
                    showQuestion();
                } else {
                    showResult();
                }
            }
        }, 1000);
    }

    function showQuestion() {
        answersContainer.innerHTML = "";
        questionText.textContent = questions[index].question;

        questions[index].answers.forEach((answer, i) => {
            const btn = document.createElement("button");
            btn.className = "answer-btn";
            btn.textContent = answer;
            btn.onclick = () => checkAnswer(i);
            answersContainer.appendChild(btn);
        });

        startTimer(); 
    }

    function checkAnswer(i) {
        clearInterval(timer);

        if (i === questions[index].correct) {
            score++;
        }

        index++;

        if (index < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        clearInterval(timer);
        timerEl.textContent = "⏱️ Готово";

        questionText.textContent = `Результат: ${score} з ${questions.length}`;
        answersContainer.innerHTML = "";

        const restartBtn = document.createElement("button");
        restartBtn.textContent = "Почати знову";
        restartBtn.className = "answer-btn";
        restartBtn.onclick = () => {
            index = 0;
            score = 0;
            showQuestion();
        };

        answersContainer.appendChild(restartBtn);
    }
});






