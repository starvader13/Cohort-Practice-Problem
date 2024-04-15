async function calculateInterest(){
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("time").value;

    const response = await fetch(`http://127.0.0.1:3000/interest?principal=${principal}&rate=${rate}&time=${time}`);
    const result = await response.json();

    const paragraph = document.getElementById("para");
    paragraph.innerHTML = `The interest will be ${result.interest} and the total amount will be ${result.totalAmount}`;
}