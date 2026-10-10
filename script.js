let current = 0;

let answers =
    new Array(questions.length).fill(null);

let review =
    new Array(questions.length).fill(false);

let examEnded = false;

let timerInterval;

const EXAM_TIME = 60 * 60;

const TOTAL_QUESTIONS = questions.length;

const TOTAL_MARKS =
    questions.reduce(
        (sum, q) => sum + q.marks,
        0
    );


/* =====================================================
   START EXAM
   ===================================================== */

function startExam() {

    clearInterval(timerInterval);

    current = 0;

    answers =
        new Array(questions.length).fill(null);

    review =
        new Array(questions.length).fill(false);

    examEnded = false;

    sessionStorage.setItem(
        "polymerGateExamStartTime",
        Date.now()
    );

    document.getElementById(
        "startScreen"
    ).style.display = "none";

    document.getElementById(
        "examArea"
    ).style.display = "flex";

    document.getElementById(
        "calculatorButton"
    ).disabled = false;

    loadQuestion();

    updatePalette();

    updateTimer();

    timerInterval =
        setInterval(
            updateTimer,
            1000
        );
}


/* =====================================================
   LOAD QUESTION
   ===================================================== */

function loadQuestion() {

    let q = questions[current];

    document.getElementById(
        "questionType"
    ).innerText =
        q.type +
        " — " +
        q.marks +
        " Mark" +
        (q.marks > 1 ? "s" : "");


    let questionHTML =
        "Q" +
        (current + 1) +
        ". [" +
        q.marks +
        (q.marks === 1 ? " Mark" : " Marks") +
        "] " +
        q.question.replace(/\n/g, "<br>");


    if (q.image) {

        questionHTML +=
            '<br><img src="' +
            q.image +
            '" class="question-image" alt="Question illustration">';

    }


    document.getElementById(
        "question"
    ).innerHTML =
        questionHTML;


    let html = "";


    /* ============================
       MSQ
       ============================ */

    if (q.type === "MSQ") {

        q.options.forEach(
            function(opt, i) {

                let checked =
                    Array.isArray(
                        answers[current]
                    ) &&
                    answers[current].includes(i);


                html += `

                    <label>

                        <input
                            type="checkbox"
                            name="option"
                            value="${i}"
                            ${checked ? "checked" : ""}
                        >

                        ${opt}

                    </label>

                `;

            }
        );

    }


    /* ============================
       MCQ
       ============================ */

    else {

        q.options.forEach(
            function(opt, i) {

                let checked =
                    answers[current] === i;


                html += `

                    <label>

                        <input
                            type="radio"
                            name="option"
                            value="${i}"
                            ${checked ? "checked" : ""}
                        >

                        ${opt}

                    </label>

                `;

            }
        );

    }


    document.getElementById(
        "options"
    ).innerHTML =
        html;


    updatePalette();

}


/* =====================================================
   SAVE CURRENT ANSWER
   ===================================================== */

function saveCurrentAnswer() {

    let q =
        questions[current];


    /* ============================
       MCQ
       ============================ */

    if (q.type === "MCQ") {

        let selected =
            document.querySelector(
                'input[name="option"]:checked'
            );


        if (!selected) {

            answers[current] = null;

            return false;

        }


        answers[current] =
            parseInt(
                selected.value
            );

        return true;

    }


    /* ============================
       MSQ
       ============================ */

    if (q.type === "MSQ") {

        let selected =
            document.querySelectorAll(
                'input[name="option"]:checked'
            );


        let selectedAnswers = [];


        selected.forEach(
            function(item) {

                selectedAnswers.push(
                    parseInt(
                        item.value
                    )
                );

            }
        );


        if (
            selectedAnswers.length === 0
        ) {

            answers[current] = null;

            return false;

        }


        answers[current] =
            selectedAnswers.sort(
                (a, b) => a - b
            );

        return true;

    }


    return false;

}


/* =====================================================
   SAVE & NEXT
   ===================================================== */

function saveNext() {

    let answered =
        saveCurrentAnswer();


    if (answered) {

        review[current] = false;

    }


    updatePalette();


    if (
        current <
        questions.length - 1
    ) {

        current++;

        loadQuestion();

    }

}


/* =====================================================
   PREVIOUS
   ===================================================== */

function prevQuestion() {

    saveCurrentAnswer();

    updatePalette();


    if (current > 0) {

        current--;

        loadQuestion();

    }

}


/* =====================================================
   CLEAR RESPONSE
   ===================================================== */

function clearResponse() {

    answers[current] = null;

    review[current] = false;

    loadQuestion();

}


/* =====================================================
   MARK FOR REVIEW
   ===================================================== */

function markReview() {

    saveCurrentAnswer();

    review[current] = true;

    updatePalette();

}


/* =====================================================
   PALETTE
   ===================================================== */

function updatePalette() {

    let palette =
        document.getElementById(
            "palette"
        );


    palette.innerHTML = "";


    for (
        let i = 0;
        i < questions.length;
        i++
    ) {

        let colorClass =
            "not-answered";


        if (review[i]) {

            colorClass =
                "review";

        }

        else if (
            answers[i] !== null
        ) {

            colorClass =
                "answered";

        }


        palette.innerHTML += `

            <button
                class="${colorClass}"
                onclick="jump(${i})">

                ${i + 1}

            </button>

        `;

    }

}


/* =====================================================
   JUMP
   ===================================================== */

function jump(i) {

    saveCurrentAnswer();

    current = i;

    loadQuestion();

}


/* =====================================================
   TIMER
   ===================================================== */

function updateTimer() {

    if (examEnded) {

        return;

    }


    let startTime =
        Number(
            sessionStorage.getItem(
                "polymerGateExamStartTime"
            )
        );


    if (!startTime) {

        return;

    }


    let elapsed =
        Math.floor(
            (
                Date.now() -
                startTime
            ) / 1000
        );


    let remaining =
        EXAM_TIME -
        elapsed;


    if (remaining <= 0) {

        document.getElementById(
            "timer"
        ).innerText =
            "00:00";


        clearInterval(
            timerInterval
        );


        examEnded = true;


        openNameModal(true);

        return;

    }


    let minutes =
        Math.floor(
            remaining / 60
        );


    let seconds =
        remaining % 60;


    document.getElementById(
        "timer"
    ).innerText =

        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");


    if (remaining <= 300) {

        document.querySelector(
            ".timer-box"
        ).classList.add(
            "timer-warning"
        );

    }

}


/* =====================================================
   SUBMIT EXAM
   ===================================================== */

function submitExam() {

    saveCurrentAnswer();

    updatePalette();


    document.getElementById(
        "submitModal"
    ).style.display =
        "flex";

}


/* =====================================================
   CLOSE SUBMIT MODAL
   ===================================================== */

function closeSubmitModal() {

    document.getElementById(
        "submitModal"
    ).style.display =
        "none";

}


/* =====================================================
   CONFIRM SUBMIT
   ===================================================== */

function confirmSubmit() {

    closeSubmitModal();

    openNameModal(false);

}


/* =====================================================
   NAME MODAL
   ===================================================== */

function openNameModal(autoSubmit) {

    saveCurrentAnswer();

    updatePalette();


    document.getElementById(
        "candidateName"
    ).value = "";


    document.getElementById(
        "candidateMobile"
    ).value = "";


    document.getElementById(
        "nameModal"
    ).style.display =
        "flex";


    setTimeout(
        () => {

            document.getElementById(
                "candidateName"
            ).focus();

        },
        100
    );

}


/* =====================================================
   CLOSE NAME MODAL
   ===================================================== */

function closeNameModal() {

    if (examEnded) {

        return;

    }


    document.getElementById(
        "nameModal"
    ).style.display =
        "none";

}


/* =====================================================
   SCORE CALCULATION
   ===================================================== */

function calculateScore() {

    let score = 0;


    for (
        let i = 0;
        i < questions.length;
        i++
    ) {

        let q =
            questions[i];


        /* ============================
           MSQ
           ============================ */

        if (q.type === "MSQ") {

            if (
                !Array.isArray(
                    answers[i]
                )
            ) {

                continue;

            }


            let student =
                answers[i]
                    .slice()
                    .sort(
                        (a, b) => a - b
                    );


            let correct =
                q.correctAnswers
                    .slice()
                    .sort(
                        (a, b) => a - b
                    );


            let isCorrect =
                student.length ===
                correct.length;


            if (isCorrect) {

                for (
                    let j = 0;
                    j < correct.length;
                    j++
                ) {

                    if (
                        student[j] !==
                        correct[j]
                    ) {

                        isCorrect = false;

                        break;

                    }

                }

            }


            if (isCorrect) {

                score += q.marks;

            }


            continue;

        }


        /* ============================
           MCQ
           ============================ */

        if (q.type === "MCQ") {

            if (
                answers[i] === null ||
                answers[i] === undefined
            ) {

                continue;

            }


            if (
                answers[i] ===
                q.answer
            ) {

                score += q.marks;

            }

            else {

                score -=
                    q.marks / 3;

            }

        }

    }


    return Number(
        score.toFixed(2)
    );

}


/* =====================================================
   FINAL SUBMIT
   ===================================================== */

function finalSubmit() {

    let name =
        document.getElementById(
            "candidateName"
        ).value.trim();


    let mobile =
        document.getElementById(
            "candidateMobile"
        ).value.trim();


    if (!name) {

        alert(
            "Please enter your name."
        );

        return;

    }


    if (
        !/^[0-9]{10}$/.test(
            mobile
        )
    ) {

        alert(
            "Please enter a valid 10-digit mobile number."
        );

        return;

    }


    saveCurrentAnswer();


    let score =
        calculateScore();


    /* =================================================
       GOOGLE APPS SCRIPT WEB APP

       test=2 tells Apps Script to use Sheet6.
       Existing test without test=2 continues to use Sheet5.
       ================================================= */

    let url =
        "https://script.google.com/macros/s/AKfycby2vuKQDmRUojEtfP7br6Hwlxca9IVZJsk7cqXXgBzVixzFqctsUSuX3l2e2eFZ-_nnsw/exec";


    /* =================================================
       CANDIDATE NAME
       ================================================= */

    url +=
        "?name=" +
        encodeURIComponent(
            name
        );


    /* =================================================
       MOBILE
       ================================================= */

    url +=
        "&mobile=" +
        encodeURIComponent(
            mobile
        );


    /* =================================================
       SEND Q1-Q26
       ================================================= */

    for (
        let i = 0;
        i < questions.length;
        i++
    ) {

        let answer = "";

        let q =
            questions[i];


        if (
            answers[i] !== null &&
            answers[i] !== undefined
        ) {

            if (
                q.type === "MSQ"
            ) {

                if (
                    Array.isArray(
                        answers[i]
                    )
                ) {

                    answer =
                        answers[i]
                            .map(
                                function(index) {

                                    return String.fromCharCode(
                                        65 + index
                                    );

                                }
                            )
                            .join(",");

                }

            }

            else if (
                q.type === "MCQ"
            ) {

                answer =
                    String.fromCharCode(
                        65 + answers[i]
                    );

            }

        }


        url +=
            "&q" +
            (i + 1) +
            "=" +
            encodeURIComponent(
                answer
            );

    }


    /* =================================================
       FINAL SCORE
       ================================================= */

    url +=
        "&score=" +
        encodeURIComponent(
            score
        );


    /* =================================================
       SEND WITHOUT LEAVING PAGE
       ================================================= */

    let iframe =
        document.createElement(
            "iframe"
        );


    iframe.style.display =
        "none";


    iframe.src =
        url;


    document.body.appendChild(
        iframe
    );


    /* =================================================
       EXAM FINISHED
       ================================================= */

    examEnded = true;


    clearInterval(
        timerInterval
    );


    document.getElementById(
        "nameModal"
    ).style.display =
        "none";


    document.getElementById(
        "resultName"
    ).innerText =
        "Candidate: " +
        name +
        " | Mobile: " +
        mobile;


    document.getElementById(
        "resultScore"
    ).innerText =
        score.toFixed(2) +
        " / " +
        TOTAL_MARKS;


    document.getElementById(
        "resultModal"
    ).style.display =
        "flex";


    sessionStorage.removeItem(
        "polymerGateExamStartTime"
    );

}


/* =====================================================
   RESULT
   ===================================================== */

function closeResultAndReload() {

    location.reload();

}


/* =====================================================
   CALCULATOR
   ===================================================== */

function openCalculator() {

    document.getElementById(
        "calculator"
    ).style.display =
        "block";

}


function closeCalculator() {

    document.getElementById(
        "calculator"
    ).style.display =
        "none";

}


function calcInput(value) {

    document.getElementById(
        "calc-display"
    ).value += value;

}


function calcClear() {

    document.getElementById(
        "calc-display"
    ).value = "";

}


function calcBackspace() {

    let display =
        document.getElementById(
            "calc-display"
        );


    display.value =
        display.value.slice(
            0,
            -1
        );

}


function calculateResult() {

    let display =
        document.getElementById(
            "calc-display"
        );


    let expression =
        display.value;


    try {

        expression =
            expression.replace(
                /\^/g,
                "**"
            );


        expression =
            expression.replace(
                /sqrt\(/g,
                "Math.sqrt("
            );


        let result =
            Function(
                "return " +
                expression
            )();


        display.value =
            result;

    }

    catch (error) {

        display.value =
            "Error";

    }

}
