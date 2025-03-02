import { images } from "./images.js";

const titles = [...images.keys()];
let imageNumber = 0;
const title = () => titles[imageNumber];
const titleOutput = document.getElementById("title") as HTMLHeadingElement;
const imageOutput = document.getElementById("image") as HTMLImageElement;

const refreshImage = () => {
    if (titleOutput) titleOutput.textContent = title();
    imageOutput.setAttribute("src", images.get(title()) ?? "");
};

refreshImage();

const changeImage = (n: number) => {
    imageNumber = (imageNumber + n) % titles.length;
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