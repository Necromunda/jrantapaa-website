function showText() {
    const val = document.getElementById("targetText").value;
    if (val != "") {
        document.getElementById("targetDisplay").innerHTML = val;
        document.getElementById("targetText").value = "";
    }
}