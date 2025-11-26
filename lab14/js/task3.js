console.log("");
console.log("==============================");
console.log("Завдання 3");

let t3arr = [];
for (let i = 0; i < 15; i++) {
    t3arr[i] = Math.floor(Math.random() * 100) - 40;
}
console.log("Масив:", t3arr.join(" "));

let positiveOddIndex = t3arr.filter(
    (value, index) => index % 2 === 1 && value > 0
);

let average =
    positiveOddIndex.length > 0
        ? positiveOddIndex.reduce((sum, x) => sum + x, 0) /
          positiveOddIndex.length
        : 0;

console.log("Додатні на непарних місцях:", positiveOddIndex.join(" "));
console.log("Середнє арифметичне:", average);

let B = 20;
let smallerCount = t3arr.filter((x) => x < B).length;

console.log(`Кількість чисел менших за ${B}:`, smallerCount);

console.log("==============================");
