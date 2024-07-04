function loadHTML(elementId, fileName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(elementId).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", fileName, true);
    xhttp.send();
}

window.onload = function() {
    loadHTML("header", "header.html");
    loadHTML("footer", "footer.html");
};