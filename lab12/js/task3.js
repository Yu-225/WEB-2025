function task3Script() {
    const resultElement = document.getElementById("task3Result");
    const dayNum = parseInt(document.getElementById("task3Input").value);
    let dayText;

    switch (dayNum) {
        case 1:
            dayText = "Понеділок";
            break;
        case 2:
            dayText = "Вівторок";
            break;
        case 3:
            dayText = "Середа";
            break;
        case 4:
            dayText = "Четвер";
            break;
        case 5:
            dayText = "П'ятниця";
            break;
        case 6:
            dayText = "Субота";
            break;
        case 7:
            dayText = "Неділя";
            break;
        default:
            dayText = "Некоректний номер дня";
    }

    resultElement.innerText = "Результат: " + dayText;
}
