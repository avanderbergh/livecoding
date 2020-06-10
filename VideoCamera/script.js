const video = document.querySelector("video");
const oldTimeyButton = document.querySelector("#old-timey-button");
const hueSlider = document.querySelector("#hue-slider");
const effectButton = document.querySelector("#effect-button");

navigator.getUserMedia({video: true, audio: false}
    , stream => {
        video.srcObject = stream;
        video.addEventListener("loadedmetadata", () => video.play())
    }, err => {
        console.error(err);
    });

oldTimeyButton.addEventListener("click", e => {
    setTimeout(() => {
        video.style.filter = "sepia(100%)";
    }, 3000)
});

hueSlider.addEventListener("change", e=> {
    console.log(hueSlider.value);
    video.style.filter = `hue-rotate(${hueSlider.value}deg)`;
});

const changeHue = hue => {
    video.style.filter = `hue-rotate(${hue}deg)`;
    return hue++;
}

effectButton.addEventListener("click", e => {
    changeHue(0);
    while (hue < 360) {
        changeHue()
    }
})
