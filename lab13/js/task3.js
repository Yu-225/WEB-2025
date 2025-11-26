let resultElement3 = document.getElementById("task3Result");
let inputElement3 = document.getElementById("task3Input");

function greetUser(name) {
    alert(`Привіт, ${name}!`);
}

function task3() {
    let userName = inputElement3.value;
    greetUser(userName);
}
