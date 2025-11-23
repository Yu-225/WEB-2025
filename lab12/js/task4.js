function task4For() {
    let resultElement = document.getElementById("task4ResultFor");
    let inputNumber = parseInt(document.getElementById("task4InputFor").value);
    let result = 1;

    for (let i = 1; i <= inputNumber; i++) {
        result *= i;
    }

    resultElement.textContent = "Результат for: " + result;
}

async function task4While() {
    let time = parseInt(document.getElementById("task4InputWhile").value);
    let resultElement = document.getElementById("task4ResultWhile");

    while (time > 0) {
        await sleep(1000);
        time -= 1;
        resultElement.textContent = "Результат while: " + time;
        console.log(time);
    }
}

function task4DoWhile() {
    let threshold = parseInt(
        document.getElementById("task4InputDoWhile").value
    );
    let resultElement = document.getElementById("task4ResultDoWhile");

    let attempts = 0;
    let randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts++;
        console.log("Спроба " + attempts + ": " + randomNumber);
    } while (randomNumber <= threshold);

    resultElement.textContent =
        "Випало число " +
        randomNumber +
        ". Порогове значення: " +
        threshold +
        ". Кількість спроб: " +
        attempts;
}
