let resultElement5 = document.getElementById("task5Result");

function addImage(
    imageUrl = "https://www.stickersplt.com.ua/wp-content/uploads/2025/03/Без-назви-1_0005_Group-of-2-Objects-324x324.png",
    altText = "Зображення за замовчуванням"
) {
    let img = document.createElement("img");
    img.src = imageUrl;
    img.alt = altText;
    img.style.maxWidth = "300px";
    resultElement5.innerHTML = "";
    resultElement5.appendChild(img);
}

function task5() {
    const imageUrlInput = document.getElementById("imageUrlInput").value;

    if (imageUrlInput === "") {
        addImage();
    } else {
        addImage(imageUrlInput);
    }
}
