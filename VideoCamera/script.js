const video = document.querySelector("video");

navigator.getUserMedia({video: true, audio: false}
    , stream => {
        video.srcObject = stream;
        video.addEventListener("loadedmetadata", () => video.play())
    }, err => {
        console.error(err);
    });