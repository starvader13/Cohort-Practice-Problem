function increaseCounter(){
    const currentCounter = document.getElementById("counter").innerHTML;
    const count = currentCounter.split(" ")[1];
    const updatedCounter = parseInt(count) + 1;
    document.getElementById("counter").innerHTML = "Counter " + updatedCounter;
}