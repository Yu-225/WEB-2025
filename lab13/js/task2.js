let task2Result = document.getElementById("task2Result");
let d = new Date();

let h = String(d.getHours()).padStart(2, "0");
let m = String(d.getMinutes()).padStart(2, "0");
let s = String(d.getSeconds()).padStart(2, "0");

task2Result.innerHTML = `Поточний час: ${h}:${m}:${s}`;
