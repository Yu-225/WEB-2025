function task1Script() {
    const lang = prompt("Введіть мову (ua, en)", "ua");
    const img = document.getElementById("catImage");

    if (lang === "ua") {
        const age = prompt("Введіть ваш вік", "0");
        if (age < 18) {
            alert("Ви занадто молоді для перегляду вмісту");
            img.hidden = true;
        } else {
            alert("Ласкаво просимо");
            img.hidden = false;
        }
    } else if (lang === "en") {
        const age = prompt("Enter your age", "0");
        if (age < 18) {
            alert("You are too young to view content");
            img.hidden = true;
        } else {
            alert("Welcome");
            img.hidden = false;
        }
    } else {
        alert("Невідома мова | Unknown language");
        img.hidden = true;
    }
}
