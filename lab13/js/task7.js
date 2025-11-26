const double = function (n) {
    return n * 2;
};

let resultElement7 = document.getElementById("task7Result");

for (let i = 2; i <= 16; i += 3) {
    resultElement7.innerHTML += `<p>${i}**2 = ${double(i)}</p>`;
}
