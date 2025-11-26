function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    if (y === 0) {
        return "Помилка: Ділення на нуль!";
    }
    return x / y;
}

const operations = {
    add: add,
    sub: sub,
    mul: mul,
    div: div,
};

function task6() {
    let resultElement6 = document.getElementById("task6Result");
    let task6num1 = parseFloat(document.getElementById("task6num1").value);
    let task6num2 = parseFloat(document.getElementById("task6num2").value);
    let task6operation = document.getElementById("task6operation").value;
    let selectedOperation = operations[task6operation];

    // console.log(selectedOperation);

    let result = calculate(task6num1, task6num2, selectedOperation);

    resultElement6.innerHTML = "Результат: " + result;
}
