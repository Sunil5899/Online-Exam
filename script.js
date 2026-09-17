const GOOGLE_SHEET_URL =
"https://script.google.com/macros/s/AKfycbxlvEXafmFDBBKA8UlWbOYbDrIDS-FRl1mfHERWxa5XTKChWZeUUrgKZogZyeBSTA/exec";


function showLogin() {
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("registerBox").style.display = "none";
}


function showRegister() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registerBox").style.display = "block";
}


async function register() {

    const name = document.getElementById("regName").value.trim();
    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value;

    const message = document.getElementById("registerMessage");

    if (!name || !username || !password) {
        message.innerText = "Please fill all fields.";
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

        const result = await response.json();

        if (result.status === "success") {

            message.innerText = "Registration successful!";

            document.getElementById("regName").value = "";
            document.getElementById("regUsername").value = "";
            document.getElementById("regPassword").value = "";

        } else {

            message.innerText = result.message;
        }

    } catch (error) {

        message.innerText = "Registration failed.";
        console.error(error);
    }
}


async function login() {

    const username =
        document.getElementById("loginUsername").value.trim();

    const password =
        document.getElementById("loginPassword").value;

    const message =
        document.getElementById("loginMessage");

    if (!username || !password) {
        message.innerText = "Please enter username and password.";
        return;
    }

    message.innerText = "Checking...";

    try {

        const response = await fetch(
            GOOGLE_SHEET_URL +
            "?action=login" +
            "&username=" + encodeURIComponent(username) +
            "&password=" + encodeURIComponent(password)
        );

        const result = await response.json();

        if (result.status === "success") {

            message.innerText =
                "Welcome " + result.name;

        } else {

            message.innerText = result.message;
        }

    } catch (error) {

        message.innerText = "Login failed.";
        console.error(error);
    }
}