function calculateSum(){
    let firstValue = parseInt(document.getElementById("firstValue").value);
    let secondValue = parseInt(document.getElementById("secondValue").value);

    let paragraph = document.getElementById("para");
    paragraph.innerHTML = String(firstValue + secondValue);
}