let resultElement = document.getElementById("task1Result");

let today = new Date();
let hours = today.getHours();
let minute = today.getMinutes();

const days = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
    "Неділя",
];

let out = `<p style="font-size:${10 * hours}px; color: hsl(${
    6 * minute
}, 100%, 50%)">${days[today.getDay() - 1]}</p>`;

// console.log(out);

resultElement.innerHTML = out;
