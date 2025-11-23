function task2Script() {
    let result;

    const numArray = document
        .getElementById("task2Textarea")
        .value.split(",")
        .map(Number);

    const resultElement = document.getElementById("task2Result");

    let min = numArray[0];

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < min) {
            min = numArray[i];
        }
    }

    resultElement.innerText = "Результат: " + min;
}
