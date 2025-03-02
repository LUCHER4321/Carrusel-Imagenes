import { images } from "./images.js";

const titles = [...images.keys()];
let imageNumber = 0;
const rest = (n: number, m: number) => {
    let i = n;
    while (i < 0) {
        i += m;
    }
    return i % m;
}
const title = () => titles[rest(imageNumber, titles.length)];
const image = () => images.get(title());
const titleOutput = document.getElementById("title") as HTMLHeadingElement;
const imageOutput = document.getElementById("image") as HTMLImageElement;

const refreshImage = () => {
    console.log("imageNumber:", imageNumber);
    console.log("title():", title());
    console.log("image():", image());
    if (titleOutput) titleOutput.textContent = title();
    imageOutput.setAttribute("src", image() ?? "");
};

refreshImage();

const changeImage = (n: number) => {
    imageNumber = rest((imageNumber + n), titles.length);
    refreshImage();
};

const previousButton = document.getElementById("previous") as HTMLButtonElement;
const nextButton = document.getElementById("next") as HTMLButtonElement;

previousButton.addEventListener("click", () => {
    changeImage(-1);
});

nextButton.addEventListener("click", () => {
    changeImage(1);
});