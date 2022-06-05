let video = document.querySelector("video");

let constraint = {
    video : true,
    audio : false
}

navigator.mediaDevices.getUserMedia(constraint)
.then((stream) => 
{
    video.srcObject = stream
})