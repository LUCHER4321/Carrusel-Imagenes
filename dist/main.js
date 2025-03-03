import { images } from "./images.js";
const titles = [...images.keys()];
let imageNumber = 0;
const rest = (n, m) => {
    let i = n;
    while (i < 0) {
        i += m;
    }
    return i % m;
};
const title = () => titles[rest(imageNumber, titles.length)];
const image = () => images.get(title());
const titleOutput = document.getElementById("title");
const imageOutput = document.getElementById("image");
const refreshImage = () => {
    var _a;
    console.log("imageNumber:", imageNumber);
    console.log("title():", title());
    console.log("image():", image());
    if (titleOutput)
        titleOutput.textContent = title();
    imageOutput.setAttribute("src", (_a = image()) !== null && _a !== void 0 ? _a : "");
};
refreshImage();
const changeImage = (n) => {
    imageNumber = rest((imageNumber + n), titles.length);
    refreshImage();
};
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
previousButton.addEventListener("click", () => {
    changeImage(-1);
});
nextButton.addEventListener("click", () => {
    changeImage(1);
});
