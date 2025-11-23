function task5Script() {
    let resultElem = document.getElementById("task5Result");

    let user = {
        name: "Юрій",
        age: 22,
        group: "ПП-23",
    };

    let info = "Властивості об’єкта JSON:\n";

    for (let key in user) {
        info += key + ": " + user[key] + "\n";
    }

    console.log(info);
    resultElem.textContent = info;
}
