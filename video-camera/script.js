const video = document.querySelector("video");
const oldTimeyButton = document.querySelector("#old-timey-button");
const hueSlider = document.querySelector("#hue-slider");
const effectButton = document.querySelector("#effect-button");

navigator.getUserMedia({ video: true, audio: false }
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

hueSlider.addEventListener("change", e => {
    console.log(hueSlider.value);
    video.style.filter = `hue-rotate(${hueSlider.value}deg)`;
});

let myEffect = null;
effectButton.addEventListener("click", e => {
    if (myEffect) {
        clearInterval(myEffect);
        myEffect = null;
    } else {
        let hue = 0
        myEffect = setInterval(() => {
            video.style.filter = `hue-rotate(${hue++}deg)`;
            hue = hue >= 360 ? 0 : hue;
        }, 100)
    }
})
