console.log("");
console.log("==============================");
console.log("Завдання 1");

let Treag = [];
for (let n = 1; n <= 10; n++) {
    Treag.push((n * (n + 1)) / 2);
}
console.log("Treag:", Treag.join("  "));

let kvd = [];
for (let i = 1; i <= 10; i++) {
    kvd.push(i * i);
}
console.log("kvd:", kvd.join("  "));

let rez = Treag.concat(kvd);
console.log("rez:", rez.join("  "));

rez.sort((a, b) => b - a);
console.log("rez sorted:", rez.join("  "));

console.log("==============================");
