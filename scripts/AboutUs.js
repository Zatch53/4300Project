window.onload = function() {
    document.getElementById("logBtn_AU").addEventListener("click", goToLogPage_AU);
    document.getElementById("homeBtn_AU").addEventListener("click", goToHomePage_AU);
    document.getElementById("dataBtn_AU").addEventListener("click", goToDataPage_AU);
}

function goToLogPage_AU() {
    window.location.href = "../html/LogSleep.html"; //temp link - REPLACE WITH LINK TO LOG PAGE
}

function goToHomePage_AU() {
    window.location.href = "../html/home.html"; //temp link - REPLACE WITH LINK TO HOME PAGE
}

function goToDataPage_AU() {
    window.location.href = "../html/NightData.html";
}
