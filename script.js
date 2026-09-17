const GOOGLE_SHEET_URL =
"https://script.google.com/macros/s/AKfycbxlvEXafmFDBBKA8UlWbOYbDrIDS-FRl1mfHERWxa5XTKChWZeUUrgKZogZyeBSTA/exec";


/* =========================
   SUBJECT QUESTIONS
========================= */

const questions = {

    Computer: [
        {
            question: "CPU का पूरा नाम क्या है?",
            options: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Program Utility",
                "Control Processing Unit"
            ],
            answer: 0
        },
        {
            question: "कंप्यूटर का दिमाग किसे कहा जाता है?",
            options: [
                "Monitor",
                "CPU",
                "Keyboard",
                "Mouse"
            ],
            answer: 1
        },
        {
            question: "RAM का पूरा नाम क्या है?",
            options: [
                "Read Access Memory",
                "Random Access Memory",
                "Run Access Memory",
                "Rapid Access Machine"
            ],
            answer: 1
        },
        {
            question: "इनमें से कौन Input Device है?",
            options: [
                "Monitor",
                "Printer",
                "Keyboard",
                "Speaker"
            ],
            answer: 2
        },
        {
            question: "इनमें से कौन Output Device है?",
            options: [
                "Keyboard",
                "Mouse",
                "Scanner",
                "Monitor"
            ],
            answer: 3
        },
        {
            question: "1 KB में कितने Bytes होते हैं?",
            options: [
                "100 Bytes",
                "512 Bytes",
                "1024 Bytes",
                "2048 Bytes"
            ],
            answer: 2
        },
        {
            question: "Windows क्या है?",
            options: [
                "Operating System",
                "Browser",
                "Antivirus",
                "Programming Language"
            ],
            answer: 0
        },
        {
            question: "MS Word का उपयोग मुख्य रूप से किसके लिए किया जाता है?",
            options: [
                "Document बनाने के लिए",
                "Video Editing",
                "Music सुनने के लिए",
                "Game खेलने के लिए"
            ],
            answer: 0
        },
        {
            question: "MS Excel में Formula किस चिन्ह से शुरू होता है?",
            options: [
                "+",
                "=",
                "#",
                "@"
            ],
            answer: 1
        },
        {
            question: "Internet पर Website खोलने के लिए किसका उपयोग किया जाता है?",
            options: [
                "Web Browser",
                "Calculator",
                "Paint",
                "Notepad"
            ],
            answer: 0
        },
        {
            question: "Google Chrome क्या है?",
            options: [
                "Operating System",
                "Web Browser",
                "Antivirus",
                "Printer"
            ],
            answer: 1
        },
        {
            question: "ई-मेल का उपयोग किसके लिए किया जाता है?",
            options: [
                "Electronic संदेश भेजने के लिए",
                "Photo Print करने के लिए",
                "Computer बंद करने के लिए",
                "File Delete करने के लिए"
            ],
            answer: 0
        },
        {
            question: "Ctrl + C का उपयोग किसके लिए होता है?",
            options: [
                "Cut",
                "Copy",
                "Close",
                "Clear"
            ],
            answer: 1
        },
        {
            question: "Ctrl + V का उपयोग किसके लिए होता है?",
            options: [
                "Paste",
                "Copy",
                "Save",
                "Print"
            ],
            answer: 0
        },
        {
            question: "Ctrl + S का उपयोग किसके लिए होता है?",
            options: [
                "Search",
                "Save",
                "Select",
                "Send"
            ],
            answer: 1
        },
        {
            question: "कंप्यूटर में स्थायी रूप से Data रखने के लिए किसका उपयोग होता है?",
            options: [
                "RAM",
                "Hard Disk",
                "Cache",
                "Register"
            ],
            answer: 1
        },
        {
            question: "USB का पूरा नाम क्या है?",
            options: [
                "Universal Serial Bus",
                "United System Bus",
                "Universal System Board",
                "User Serial Board"
            ],
            answer: 0
        },
        {
            question: "Computer Virus क्या है?",
            options: [
                "एक प्रकार का हानिकारक Program",
                "एक Hardware",
                "एक Printer",
                "एक Keyboard"
            ],
            answer: 0
        },
        {
            question: "PDF का पूरा नाम क्या है?",
            options: [
                "Portable Document Format",
                "Personal Data File",
                "Public Document File",
                "Print Data Format"
            ],
            answer: 0
        },
        {
            question: "कंप्यूटर में Delete की गई File सामान्यतः कहाँ जाती है?",
            options: [
                "Control Panel",
                "Recycle Bin",
                "Desktop",
                "Taskbar"
            ],
            answer: 1
        }
    ]

};


/* =========================
   VARIABLES
========================= */

let currentSubject = "";
let currentQuestion = 0;
let answers = [];
let timerID = null;
let seconds = 1200;
let loggedInName = "";
let loggedInUsername = "";

/* =========================
   LOGIN / REGISTER
========================= */

function showLogin() {

    document.getElementById("loginBox").style.display = "block";
    document.getElementById("registerBox").style.display = "none";

}


function showRegister() {

    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registerBox").style.display = "block";

}


/* =========================
   REGISTER
========================= */

async function register() {

    const name =
        document.getElementById("regName").value.trim();

    const username =
        document.getElementById("regUsername").value.trim();

    const password =
        document.getElementById("regPassword").value;

    const message =
        document.getElementById("registerMessage");


    if (!name || !username || !password) {

        message.innerText =
            "Please fill all fields.";

        return;
    }


    message.innerText = "Registering...";


    try {

        const response = await fetch(GOOGLE_SHEET_URL, {

            method: "POST",

            body: JSON.stringify({

                action: "register",
                name: name,
                username: username,
                password: password

            })

        });


        const result =
            await response.json();


        if (result.status === "success") {

            message.innerText =
                "Registration successful!";

            document.getElementById("regName").value = "";
            document.getElementById("regUsername").value = "";
            document.getElementById("regPassword").value = "";

        } else {

            message.innerText =
                result.message;
        }


    } catch (error) {

        message.innerText =
            "Registration failed.";

        console.error(error);

    }

}


/* =========================
   LOGIN
========================= */

async function login() {

    const username =
        document.getElementById("loginUsername").value.trim();

    const password =
        document.getElementById("loginPassword").value;

    const message =
        document.getElementById("loginMessage");


    if (!username || !password) {

        message.innerText =
            "Please enter username and password.";

        return;
    }


    message.innerText = "Checking...";


    try {

        const response = await fetch(

            GOOGLE_SHEET_URL +
            "?action=login" +
            "&username=" +
            encodeURIComponent(username) +
            "&password=" +
            encodeURIComponent(password)

        );


        const result =
            await response.json();


        if (result.status === "success") {
           loggedInName = result.name;
loggedInUsername = result.username;

            document.getElementById("authBox").style.display =
                "none";
           
            document.getElementById("subjectBox").style.display =
                "block";

            document.getElementById("welcomeName").innerText =
                "Welcome " + result.name;

        } else {

            message.innerText =
                result.message;
        }


    } catch (error) {

        message.innerText =
            "Login failed.";

        console.error(error);

    }

}


/* =========================
   START EXAM
========================= */

function startExam(subject) {

    currentSubject = subject;

    currentQuestion = 0;

    answers = [];

    seconds = 1200;


    document.getElementById("subjectBox").style.display =
        "none";

    document.getElementById("examBox").style.display =
        "block";


    document.getElementById("examSubject").innerText =
        subject + " Exam";


    startTimer();

    renderQuestion();

}


/* =========================
   SHOW QUESTION
========================= */

function renderQuestion() {

    const list =
        questions[currentSubject];


    const q =
        list[currentQuestion];


    document.getElementById("questionNumber").innerText =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        list.length;


    document.getElementById("questionText").innerText =
        q.question;


    const optionsBox =
        document.getElementById("options");


    optionsBox.innerHTML = "";


    q.options.forEach((option, index) => {

        const button =
            document.createElement("button");


        button.className = "option";

        button.innerText =
            option;


        button.onclick = function () {

            answers[currentQuestion] =
                index;

            renderQuestion();

        };


        if (answers[currentQuestion] === index) {

            button.style.background =
                "#bfdbfe";

        }


        optionsBox.appendChild(button);

    });

}


/* =========================
   NEXT QUESTION
========================= */

function nextQuestion() {

    const list =
        questions[currentSubject];


    if (currentQuestion < list.length - 1) {

        currentQuestion++;

        renderQuestion();

    } else {

        alert("This is the last question.");

    }

}


/* =========================
   PREVIOUS QUESTION
========================= */

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        renderQuestion();

    }

}


/* =========================
   TIMER
========================= */

function startTimer() {

    clearInterval(timerID);


    updateTimer();


    timerID = setInterval(function () {

        seconds--;


        updateTimer();


        if (seconds <= 0) {

            clearInterval(timerID);

            alert("Time is over!");

            submitExam();

        }

    }, 1000);

}


function updateTimer() {

    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        seconds % 60;


    document.getElementById("timer").innerText =

        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0");

}


/* =========================
   SUBMIT EXAM
========================= */

async function submitExam() {

    clearInterval(timerID);

    const list = questions[currentSubject];

    let score = 0;

    list.forEach((q, index) => {

        if (answers[index] === q.answer) {
            score++;
        }

    });

    const percentage =
        (score / list.length) * 100;

    alert(
        "Exam Submitted!\n\n" +
        "Subject: " + currentSubject + "\n" +
        "Score: " + score + " / " + list.length + "\n\n" +
        "Percentage: " + percentage.toFixed(2) + "%"
    );


    /* SAVE RESULT TO GOOGLE SHEET */

    try {

        const response = await fetch(GOOGLE_SHEET_URL, {

            method: "POST",

            body: JSON.stringify({

                action: "result",

                name: loggedInName,

                username: loggedInUsername,

                subject: currentSubject,

                score: score,

                total: list.length,

                percentage: percentage.toFixed(2)

            })

        });


        const result = await response.json();

        if (result.status === "success") {

            console.log("Result saved to Google Sheet");

        } else {

            console.log("Result save failed:", result.message);

        }

    } catch (error) {

        console.log("Result save error:", error);

    }

}
    });


    const percentage =
        (score / list.length) * 100;


    alert(

        "Exam Submitted!\n\n" +

        "Subject: " + currentSubject + "\n" +

        "Score: " +
        score +
        " / " +
        list.length +
        "\n\n" +

        "Percentage: " +
        percentage.toFixed(2) +
        "%"

    );

}
