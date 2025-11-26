console.log("");
console.log("==============================");
console.log("Завдання 4");

let input = "Це приклад шифрування Вабі лабі даб даб";
console.log("Вхідний рядок:", input);

let words = [];
let word = "";
for (let i = 0; i <= input.length; i++) {
    let ch = input[i] || " ";
    if (ch !== " ") {
        word += ch;
    } else {
        if (word.length > 0) {
            words.push(word);
            word = "";
        }
    }
}

// Функція перемішування середніх букв
function shuffleMiddle(word) {
    if (word.length <= 3) return word;
    let middle = word.slice(1, -1).split("");
    for (let i = middle.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = middle[i];
        middle[i] = middle[j];
        middle[j] = temp;
    }
    return word[0] + middle.join("") + word[word.length - 1];
}

let result = "";
for (let i = 0; i < words.length; i++) {
    result += shuffleMiddle(words[i]) + " ";
}

console.log("Зашифрований рядок:", result.trim());

console.log("==============================");
