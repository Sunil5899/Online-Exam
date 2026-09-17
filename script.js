const GOOGLE_SHEET_URL =
"https://script.google.com/macros/s/AKfycbxlvEXafmFDBBKA8UlWbOYbDrIDS-FRl1mfHERWxa5XTKChWZeUUrgKZogZyeBSTA/exec";

/* =========================
ALL SUBJECT QUESTIONS
6 SUBJECTS × 20 = 120
========================= */

const questions = {

Computer: [
{question:"CPU का पूरा नाम क्या है?",options:["Central Processing Unit","Computer Personal Unit","Central Program Utility","Control Processing Unit"],answer:0},
{question:"कंप्यूटर का दिमाग किसे कहा जाता है?",options:["Monitor","CPU","Keyboard","Mouse"],answer:1},
{question:"RAM का पूरा नाम क्या है?",options:["Read Access Memory","Random Access Memory","Run Access Memory","Rapid Access Machine"],answer:1},
{question:"इनमें से कौन Input Device है?",options:["Monitor","Printer","Keyboard","Speaker"],answer:2},
{question:"इनमें से कौन Output Device है?",options:["Keyboard","Mouse","Scanner","Monitor"],answer:3},
{question:"1 KB में कितने Bytes होते हैं?",options:["100","512","1024","2048"],answer:2},
{question:"Windows क्या है?",options:["Operating System","Browser","Antivirus","Programming Language"],answer:0},
{question:"MS Word का उपयोग किसके लिए होता है?",options:["Document बनाने के लिए","Video Editing","Music","Game"],answer:0},
{question:"MS Excel में Formula किस चिन्ह से शुरू होता है?",options:["+","=","#","@"],answer:1},
{question:"Website खोलने के लिए किसका उपयोग होता है?",options:["Web Browser","Calculator","Paint","Notepad"],answer:0},
{question:"Google Chrome क्या है?",options:["Operating System","Web Browser","Antivirus","Printer"],answer:1},
{question:"ई-मेल का उपयोग किसके लिए होता है?",options:["Electronic संदेश भेजने के लिए","Photo Print","Computer बंद करने","File Delete"],answer:0},
{question:"Ctrl + C का उपयोग किसके लिए होता है?",options:["Cut","Copy","Close","Clear"],answer:1},
{question:"Ctrl + V का उपयोग किसके लिए होता है?",options:["Paste","Copy","Save","Print"],answer:0},
{question:"Ctrl + S का उपयोग किसके लिए होता है?",options:["Search","Save","Select","Send"],answer:1},
{question:"स्थायी रूप से Data रखने के लिए किसका उपयोग होता है?",options:["RAM","Hard Disk","Cache","Register"],answer:1},
{question:"USB का पूरा नाम क्या है?",options:["Universal Serial Bus","United System Bus","Universal System Board","User Serial Board"],answer:0},
{question:"Computer Virus क्या है?",options:["हानिकारक Program","Hardware","Printer","Keyboard"],answer:0},
{question:"PDF का पूरा नाम क्या है?",options:["Portable Document Format","Personal Data File","Public Document File","Print Data Format"],answer:0},
{question:"Delete की गई File सामान्यतः कहाँ जाती है?",options:["Control Panel","Recycle Bin","Desktop","Taskbar"],answer:1}
],

Mathematics: [
{question:"5 + 7 = ?",options:["10","11","12","13"],answer:2},
{question:"15 × 4 = ?",options:["50","60","70","80"],answer:1},
{question:"100 ÷ 5 = ?",options:["10","15","20","25"],answer:2},
{question:"25 का 20% कितना है?",options:["4","5","6","10"],answer:1},
{question:"12 का वर्ग कितना है?",options:["124","144","154","164"],answer:1},
{question:"√81 = ?",options:["7","8","9","10"],answer:2},
{question:"1 किलोमीटर में कितने मीटर होते हैं?",options:["100","500","1000","1500"],answer:2},
{question:"एक दर्जन में कितनी वस्तुएँ होती हैं?",options:["10","12","15","20"],answer:1},
{question:"3/4 का दशमलव रूप क्या है?",options:["0.25","0.50","0.75","1.25"],answer:2},
{question:"50 का 10% कितना है?",options:["5","10","15","20"],answer:0},
{question:"यदि x + 5 = 12, तो x = ?",options:["5","6","7","8"],answer:2},
{question:"2, 4, 6, 8 के बाद कौन-सी संख्या आएगी?",options:["9","10","11","12"],answer:1},
{question:"एक त्रिभुज के कोणों का योग कितना होता है?",options:["90°","180°","270°","360°"],answer:1},
{question:"आयत का क्षेत्रफल किससे निकाला जाता है?",options:["लंबाई × चौड़ाई","2 × लंबाई","लंबाई + चौड़ाई","लंबाई ÷ चौड़ाई"],answer:0},
{question:"1000 ग्राम बराबर है?",options:["1 किलोग्राम","10 किलोग्राम","100 किलोग्राम","500 ग्राम"],answer:0},
{question:"₹500 का 10% कितना है?",options:["₹25","₹40","₹50","₹100"],answer:2},
{question:"9 × 9 = ?",options:["72","81","90","99"],answer:1},
{question:"144 ÷ 12 = ?",options:["10","11","12","14"],answer:2},
{question:"सबसे छोटी अभाज्य संख्या कौन-सी है?",options:["0","1","2","3"],answer:2},
{question:"2 घंटे में कितने मिनट होते हैं?",options:["60","90","120","180"],answer:2}
],

Hindi: [
{question:"हिंदी वर्णमाला में स्वर कितने माने जाते हैं?",options:["10","11","13","15"],answer:2},
{question:"'राम' कौन-सी संज्ञा है?",options:["व्यक्तिवाचक","जातिवाचक","भाववाचक","समूहवाचक"],answer:0},
{question:"'लड़का' का स्त्रीलिंग क्या है?",options:["लड़की","लड़के","लड़कियाँ","नारी"],answer:0},
{question:"'दिन' का विलोम शब्द क्या है?",options:["सुबह","रात","दोपहर","शाम"],answer:1},
{question:"'जल' का पर्यायवाची क्या है?",options:["अग्नि","पानी","वायु","धरती"],answer:1},
{question:"'सुंदर' का विलोम क्या है?",options:["अच्छा","कुरूप","सरल","मीठा"],answer:1},
{question:"'गाय घास खाती है' में क्रिया कौन-सी है?",options:["गाय","घास","खाती है","है"],answer:2},
{question:"'मैं स्कूल जाता हूँ' में सर्वनाम कौन-सा है?",options:["स्कूल","जाता","मैं","हूँ"],answer:2},
{question:"'ईमानदार' शब्द में कौन-सा प्रत्यय है?",options:["ई","मान","दार","आर"],answer:2},
{question:"'राजा' का स्त्रीलिंग क्या है?",options:["राजी","रानी","राजनी","राजकुमारी"],answer:1},
{question:"'आकाश' का पर्यायवाची क्या है?",options:["नभ","जल","पवन","पृथ्वी"],answer:0},
{question:"'सत्य' का विलोम क्या है?",options:["असत्य","धर्म","न्याय","सही"],answer:0},
{question:"'नाक कटना' मुहावरे का अर्थ क्या है?",options:["चोट लगना","अपमान होना","बीमार होना","खुश होना"],answer:1},
{question:"'आँखों का तारा' का अर्थ क्या है?",options:["बहुत प्रिय","बहुत दूर","बहुत बड़ा","बहुत तेज"],answer:0},
{question:"हिंदी दिवस कब मनाया जाता है?",options:["15 अगस्त","14 सितंबर","26 जनवरी","2 अक्टूबर"],answer:1},
{question:"'कमल' कौन-सी संज्ञा है?",options:["व्यक्तिवाचक","जातिवाचक","भाववाचक","समूहवाचक"],answer:1},
{question:"'बच्चे खेल रहे हैं' में कर्ता कौन है?",options:["खेल","रहे हैं","बच्चे","हैं"],answer:2},
{question:"'धीरे-धीरे' कौन-सा क्रिया-विशेषण है?",options:["रीतिवाचक","कालवाचक","स्थानवाचक","परिमाणवाचक"],answer:0},
{question:"'और' कौन-सा अव्यय है?",options:["समुच्चयबोधक","संबंधबोधक","विस्मयादिबोधक","क्रियाविशेषण"],answer:0},
{question:"'वाह!' कौन-सा अव्यय है?",options:["समुच्चयबोधक","विस्मयादिबोधक","संबंधबोधक","निपात"],answer:1}
],

English: [
{question:"What is the plural of 'Book'?",options:["Bookes","Books","Bookies","Book"],answer:1},
{question:"Choose the correct article: ___ apple.",options:["A","An","The","No article"],answer:1},
{question:"What is the opposite of 'Hot'?",options:["Warm","Cold","Heat","Fire"],answer:1},
{question:"What is the past tense of 'Go'?",options:["Goed","Gone","Went","Going"],answer:2},
{question:"Choose the correct spelling.",options:["Beautifull","Beautiful","Beutiful","Beautifol"],answer:1},
{question:"'He is playing.' What is the verb?",options:["He","is","playing","the"],answer:2},
{question:"What is the plural of 'Child'?",options:["Childs","Children","Childes","Childrens"],answer:1},
{question:"Opposite of 'Big' is:",options:["Large","Small","Tall","Long"],answer:1},
{question:"Synonym of 'Happy' is:",options:["Sad","Angry","Glad","Weak"],answer:2},
{question:"Choose the correct sentence.",options:["He go school.","He goes to school.","He going school.","He gone school."],answer:1},
{question:"Past tense of 'Eat' is:",options:["Eated","Ate","Eating","Eaten"],answer:1},
{question:"Which is a pronoun?",options:["Ram","Book","He","School"],answer:2},
{question:"Which is a noun?",options:["Run","Beautiful","Teacher","Quickly"],answer:2},
{question:"Which is an adjective?",options:["Beautiful","Run","Slowly","School"],answer:0},
{question:"Fill in the blank: I ___ a student.",options:["am","is","are","be"],answer:0},
{question:"Fill in the blank: They ___ playing.",options:["is","am","are","be"],answer:2},
{question:"What is the opposite of 'Early'?",options:["Fast","Late","Quick","Soon"],answer:1},
{question:"What is the synonym of 'Big'?",options:["Small","Tiny","Large","Short"],answer:2},
{question:"Which word is a verb?",options:["Run","Table","Blue","Happy"],answer:0},
{question:"How many days are there in a week?",options:["5","6","7","8"],answer:2}
],

Reasoning: [
{question:"श्रृंखला: 2, 4, 6, 8, ?",options:["9","10","11","12"],answer:1},
{question:"श्रृंखला: 5, 10, 15, 20, ?",options:["22","24","25","30"],answer:2},
{question:"यदि CAT को DBU लिखा जाए, तो DOG को क्या लिखेंगे?",options:["EPH","EOG","DPH","FOH"],answer:0},
{question:"A, B का भाई है और B, C की बहन है। A का C से क्या संबंध है?",options:["भाई","बहन","पिता","माता"],answer:0},
{question:"एक व्यक्ति उत्तर की ओर 10 मीटर जाता है। फिर दाएँ मुड़ता है। वह किस दिशा में है?",options:["पूर्व","पश्चिम","उत्तर","दक्षिण"],answer:0},
{question:"यदि आज सोमवार है, तो 3 दिन बाद कौन-सा दिन होगा?",options:["बुधवार","गुरुवार","शुक्रवार","शनिवार"],answer:1},
{question:"विषम संख्या चुनिए:",options:["2","4","7","8"],answer:2},
{question:"विषम शब्द चुनिए:",options:["सेब","आम","केला","आलू"],answer:3},
{question:"3, 6, 12, 24, ?",options:["36","42","48","50"],answer:2},
{question:"यदि सभी गुलाब फूल हैं और कुछ फूल लाल हैं, तो निश्चित रूप से क्या सही है?",options:["सभी गुलाब लाल हैं","गुलाब फूल हैं","कोई फूल लाल नहीं","सभी लाल गुलाब हैं"],answer:1},
{question:"एक घड़ी में 3 बजे घंटे और मिनट की सुई के बीच कोण कितना होता है?",options:["30°","60°","90°","180°"],answer:2},
{question:"यदि A=1, B=2, C=3, तो D=?",options:["2","3","4","5"],answer:2},
{question:"राम मोहन से लंबा है और मोहन सोहन से लंबा है। सबसे लंबा कौन है?",options:["राम","मोहन","सोहन","कहा नहीं जा सकता"],answer:0},
{question:"श्रृंखला: 1, 4, 9, 16, ?",options:["20","25","30","36"],answer:1},
{question:"यदि SOUTH को NORTH का विपरीत माना जाए, तो EAST का विपरीत क्या है?",options:["WEST","NORTH","SOUTH","UP"],answer:0},
{question:"एक वर्ष में कितने महीने होते हैं?",options:["10","11","12","13"],answer:2},
{question:"यदि कल रविवार था, तो आज कौन-सा दिन है?",options:["शनिवार","रविवार","सोमवार","मंगलवार"],answer:2},
{question:"2, 6, 12, 20, ?",options:["28","30","32","36"],answer:1},
{question:"यदि PEN को QFO लिखा जाए, तो CAT को क्या लिखेंगे?",options:["DBU","DCU","CBT","EBU"],answer:0},
{question:"एक कतार में राहुल ऊपर से 5वाँ और नीचे से 6वाँ है। कुल कितने लोग हैं?",options:["9","10","11","12"],answer:1}
],

"General Knowledge": [
{question:"भारत की राजधानी क्या है?",options:["मुंबई","नई दिल्ली","कोलकाता","चेन्नई"],answer:1},
{question:"भारत का राष्ट्रीय पशु कौन है?",options:["सिंह","बाघ","हाथी","हिरण"],answer:1},
{question:"भारत का राष्ट्रीय पक्षी कौन है?",options:["तोता","मोर","कबूतर","हंस"],answer:1},
{question:"भारत का राष्ट्रीय फूल कौन है?",options:["गुलाब","कमल","गेंदा","चमेली"],answer:1},
{question:"भारत का संविधान कब लागू हुआ?",options:["15 अगस्त 1947","26 जनवरी 1950","26 नवंबर 1949","2 अक्टूबर 1950"],answer:1},
{question:"भारत का स्वतंत्रता दिवस कब मनाया जाता है?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","14 नवंबर"],answer:1},
{question:"गणतंत्र दिवस कब मनाया जाता है?",options:["15 अगस्त","26 जनवरी","2 अक्टूबर","14 सितंबर"],answer:1},
{question:"भारत के राष्ट्रपिता के रूप में किसे जाना जाता है?",options:["जवाहरलाल नेहरू","महात्मा गांधी","सुभाष चंद्र बोस","सरदार पटेल"],answer:1},
{question:"भारत की मुद्रा क्या है?",options:["डॉलर","रुपया","पाउंड","येन"],answer:1},
{question:"भारत में कितने राज्य हैं? (2026)",options:["26","27","28","29"],answer:2},
{question:"भारत का सबसे बड़ा राज्य क्षेत्रफल के आधार पर कौन-सा है?",options:["मध्य प्रदेश","राजस्थान","उत्तर प्रदेश","महाराष्ट्र"],answer:1},
{question:"भारत की सबसे लंबी नदी कौन-सी मानी जाती है?",options:["यमुना","गंगा","गोदावरी","नर्मदा"],answer:1},
{question:"सूर्य के सबसे निकट कौन-सा ग्रह है?",options:["पृथ्वी","शुक्र","बुध","मंगल"],answer:2},
{question:"पृथ्वी का उपग्रह कौन है?",options:["सूर्य","चंद्रमा","मंगल","शुक्र"],answer:1},
{question:"जल का रासायनिक सूत्र क्या है?",options:["CO2","H2O","O2","NaCl"],answer:1},
{question:"मानव शरीर में रक्त को पंप करने वाला अंग कौन-सा है?",options:["फेफड़ा","हृदय","यकृत","गुर्दा"],answer:1},
{question:"भारत का राष्ट्रीय खेल आधिकारिक रूप से कौन-सा है?",options:["हॉकी","क्रिकेट","कबड्डी","कोई आधिकारिक राष्ट्रीय खेल नहीं"],answer:3},
{question:"संयुक्त राष्ट्र संघ का मुख्यालय कहाँ है?",options:["लंदन","न्यूयॉर्क","पेरिस","दिल्ली"],answer:1},
{question:"मध्य प्रदेश की राजधानी क्या है?",options:["इंदौर","भोपाल","ग्वालियर","जबलपुर"],answer:1},
{question:"छत्तीसगढ़ की राजधानी क्या है?",options:["बिलासपुर","दुर्ग","रायपुर","जगदलपुर"],answer:2}
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

if (!questions[subject]) {

    alert("Questions are not available for this subject.");

    return;
}

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
SUBMIT EXAM + SAVE RESULT
========================= */

async function submitExam() {

clearInterval(timerID);

const list =
    questions[currentSubject];

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

    "Subject: " +
    currentSubject +

    "\n" +

    "Score: " +
    score +
    " / " +
    list.length +

    "\n\n" +

    "Percentage: " +
    percentage.toFixed(2) +
    "%"

);


/* SAVE RESULT TO GOOGLE SHEET */

try {

    const response =
        await fetch(GOOGLE_SHEET_URL, {

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


    const result =
        await response.json();


    if (result.status === "success") {

        console.log(
            "Result saved to Google Sheet"
        );

    } else {

        console.log(
            "Result save failed:",
            result.message
        );

    }


} catch (error) {

    console.log(
        "Result save error:",
        error
    );

}

}
