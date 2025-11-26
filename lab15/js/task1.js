console.log("");
console.log("==============================");
console.log("Завдання 1");

let str1 = "A1CG123ACUB4E6KG1FAC123";
console.log("Початковий рядок:", str1);

// Вставка цифр
let modified = "";
for (let i = 0; i < str1.length; i++) {
    let ch = str1[i];
    modified += ch;
    if (!isNaN(ch) && ch !== " ") {
        modified += ch;
    }
}

console.log("Рядок після вставки цифр:", modified);

// Підрахунок пар "AC"
let countAC = 0;
for (let i = 0; i < modified.length - 1; i++) {
    if (modified[i] === "A" && modified[i + 1] === "C") {
        countAC++;
    }
}

console.log("Кількість пар 'AC':", countAC);

console.log("==============================");
