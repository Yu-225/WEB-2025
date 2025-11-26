console.log("");
console.log("==============================");
console.log("Завдання 4");

let fruits = ["apple", "pineapple", "mango", "melon", "grape"];
let citrus = ["orange", "lemon", "lime"];

// 1. Вивести масив fruits
console.log("Фрукти: ", fruits.join(" "));
console.log(fruits);

// 2. Вивести масив citrus
console.log("Цитруси :", citrus.join(" "));

// 3. Об’єднаний масив fruits + citrus
let combined = fruits.concat(citrus);
console.log("Фрукти + цитруси: ", combined.join(" "));

// 4. Після mango вставити pear, cherry, plum, raspberry, strawberry
let fruitsInserted = fruits.slice();
let indexMango = fruitsInserted.indexOf("mango");

if (indexMango !== -1) {
    fruitsInserted.splice(
        indexMango + 1,
        0,
        "pear",
        "cherry",
        "plum",
        "raspberry",
        "strawberry"
    );
}
console.log("Нові фрукти :", fruitsInserted.join(" "));

// 5. Видалити останні 3 елементи
let fruitsRemoved = fruits.slice();
fruitsRemoved.splice(-3);
console.log("Фрукти без 3 останніх елементів: ", fruitsRemoved.join(" "));

// 6. Відсортувати в алфавітному порядку
let alphabetical = fruits.slice().sort();
console.log("В алфавітному порядку: ", alphabetical.join(" "));

// 7. У зворотному алфавітному порядку
let reverseAlphabetical = fruits.slice().sort().reverse();
console.log("У зворотному алфавітному: ", reverseAlphabetical.join(" "));

// 8. Відсортувати за довжиною слів
let byLength = fruits.slice().sort((a, b) => a.length - b.length);
console.log("Відсортовано по довжині: ", byLength.join(" "));

console.log("==============================");
