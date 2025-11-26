let resultElement8 = document.getElementById("task8Result");

function summary() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

let result8 = summary(4, 6, 10, 5);
resultElement8.innerHTML = `Сума аргументів = ${result8}`;
