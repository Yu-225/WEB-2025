console.log("");
console.log("==============================");
console.log("Завдання 2");

let str2 =
    "Завдяки довершеним та надійним продуктам та послугам, талановитим працівникам і серйозному ставленню до зберігання даних та бізнесу.";
console.log("Початковий рядок:", str2);

// Кількість слів довжиною > 5
let countLong = 0;
for (let word of str2.split(" ")) {
    if (word.length > 5) {
        countLong++;
    }
}

console.log("Кількість слів довші за 5:", countLong);

// Видалити пробіли між першим і другим словом
modified = "";
let isFirstSpace = true;
for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];
    if (isFirstSpace && ch === " ") {
        modified += "";
        isFirstSpace = false;
    } else {
        modified += ch;
    }
}

console.log(
    "Рядок після видалення пробілів між першим і другим словом:",
    modified
);

console.log("==============================");
