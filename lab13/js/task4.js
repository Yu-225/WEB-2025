let resultElement4 = document.getElementById("task4Result");

function square(num) {
    return num * num;
}

let n = 42;
let result = square(n);

resultElement4.innerHTML = `Квадрат ${n} = ${result}`;
