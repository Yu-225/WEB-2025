console.log("");
console.log("==============================");
console.log("Завдання 2");

let t2arr = [];
for (let i = 0; i < 15; i++) {
    t2arr[i] = Math.floor(Math.random() * 100);
}
console.log("Початковий масив:", t2arr.join(" "));

let minValue = t2arr[0];
let minIndex = 0;

for (let i = 1; i < t2arr.length; i++) {
    if (t2arr[i] < minValue) {
        minValue = t2arr[i];
        minIndex = i;
    }
}

console.log("Мінімальний елемент:", minValue, "за індексом", minIndex);

let sumFirstLast = t2arr[0] + t2arr[t2arr.length - 1];
t2arr[minIndex] = sumFirstLast;

console.log("Оновлений масив:", t2arr.join(" "));

console.log("==============================");
