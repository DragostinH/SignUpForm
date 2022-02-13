import getImagesArray from "./getImagesArray.js";

export default function carousel(imageDiv) {
    let index = 1;

    const images = getImagesArray();
    console.log(images);

    const interval = setInterval(() => {
        startCarousel();
    }, 3000);

    function startCarousel() {
        imageDiv.style.backgroundImage = `url(${images[index++]})`;
        imageDiv.classList.remove('fade');
        void imageDiv.offsetWidth;
        imageDiv.classList.add('fade');
        if (index > images.length - 1) {
            index = 0;
        }
    }

    return { carousel };
}