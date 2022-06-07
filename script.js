let video = document.querySelector("video");
let recordBtnCont = document.querySelector(".record-btn-cont")
let captBtnCont = document.querySelector(".capture-btn-cont")
let recordBtn = document.querySelector(".record-btn")
let captBtn = document.querySelector(".capture-btn")
let recorder;
let recordFlag = false;

let constraint = {
    video : false,  //true
    audio : true   //true
}

navigator.mediaDevices.getUserMedia(constraint)
.then((stream) => {
  video.srcObject = stream;

   recorder = new MediaRecorder(stream);

  recorder.addEventListener("start", (e) => {
    chunks = [];
  })

 recorder.addEventListener("dataavailable", (e) => {
   chunks.push(e);
 })


 
 recorder.addEventListener("stop", (e) => {
  //download the video 
})


})


recordBtnCont.addEventListener("click" , (e) => {
    if(!recorder) return;

    recordFlag = !recordFlag;

    if(recordFlag)
    {
      recorder.start();
      recordBtn.classList.add("anim-rec");
    }

    else
    {
      recorder.stop();
      recordBtn.classList.remove("anim-rec");
    }

  
})