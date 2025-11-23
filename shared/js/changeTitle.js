import { sleep } from "../shared/js/sleep.js";

async function changeTitle(titleFull) {
    let typingSymbol = "▎";
    let titleText = "";
    const delay = 150;

    for (let i = 0; i < titleFull.length; i++) {
        titleText += typingSymbol;
        await sleep(delay);
        document.title = titleText;

        titleText = titleText.replace(typingSymbol, titleFull[i]);
        await sleep(delay);
        document.title = titleText;

        console.log(titleText);
    }
}
