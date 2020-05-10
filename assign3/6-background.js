// Enter your code here

document.body.addEventListener("load", changeColor());

var timeout;
function changeColor() {
    var interval = document.getElementById("interval").value;
    timeout = setInterval(
        function () {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            document.body.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";;
        }, interval * 1000);
}

function startstop_toggle() {
    event.preventDefault();
    var button = document.getElementById("submit");
    if (button.value == "Stop") {
        button.value = "Start";
        button.className="btn btn-primary";
        document.getElementById("interval").disabled = false;
        clearInterval(timeout);
    } else {
        button.value = "Stop";
        button.className="btn btn-danger";
        document.getElementById("interval").disabled = true;
        clearInterval(timeout);
        changeColor();
    }
}
