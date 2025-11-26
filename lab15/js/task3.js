console.log("");
console.log("==============================");
console.log("Завдання 3");

let alphabet = "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя";
let input3 = "привіт, як справи?";
let result3 = "";

for (let i = 0; i < input3.length; i++) {
    let ch = input3[i];
    let lowerCh = ch.toLowerCase();
    let index = alphabet.indexOf(lowerCh);

    if (index !== -1) {
        let nextIndex = (index + 1) % alphabet.length;
        let newChar = alphabet[nextIndex];

        if (ch === ch.toUpperCase()) {
            newChar = newChar.toUpperCase();
        }

        result3 += newChar;
    } else {
        result3 += ch;
    }
}

console.log("Вхідний рядок:", input3);
console.log("Зашифрований рядок:", result3);

console.log("==============================");
