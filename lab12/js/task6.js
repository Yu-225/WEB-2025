function task6Script() {
    let secret = Math.floor(Math.random() * 10) + 1;
    let guess = null;

    while (guess != secret) {
        guess = Number(prompt("Вгадай число від 1 до 10:"));

        if (guess > secret) {
            alert("Менше!");
        } else if (guess < secret) {
            alert("Більше!");
        } else {
            alert("Правильно! Число було: " + secret);
        }
    }
}
