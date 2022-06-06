let video = document.querySelector("video");

let constraint = {
    video : false,  //true
    audio : false   //true
}

navigator.mediaDevices.getUserMedia(constraint)
.then((stream) => {
  video.srcObject = stream
})
