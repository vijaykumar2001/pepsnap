let video = document.querySelector("video");
let recordBtnCont = document.querySelector(".record-btn-cont")
let captBtnCont = document.querySelector(".capture-btn-cont")
let recordBtn = document.querySelector(".record-btn")
let captBtn = document.querySelector(".capture-btn")
let timer = document.querySelector(".timer")
let recorder;
let recordFlag = false;

let constraint = {
    video : true,  //true
    audio : false   //true
}

navigator.mediaDevices.getUserMedia(constraint)
.then((stream) => {
  video.srcObject = stream;

   recorder = new MediaRecorder(stream);

  recorder.addEventListener("start", (e) => {
    chunks = [];
  })

 recorder.addEventListener("dataavailable", (e) => {
   chunks.push(e.data);
 })

 
 recorder.addEventListener("stop", (e) => {
  //download the video 
  let blob = new Blob(chunks, {type: "video/mp4"})
  let videoURL = URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.href = videoURL
  a.download = "recordvideo.mp4"
  a.click();
  recordBtnCont.appendChild(a);
})


})


recordBtnCont.addEventListener("click" , (e) => {
    if(!recorder) return;

    recordFlag = !recordFlag;

    if(recordFlag)
    {
      recorder.start();
      recordBtn.classList.add("anim-rec");
      startTimer();
    }

    else
    {
      recorder.stop();
      recordBtn.classList.remove("anim-rec");
      stopTimer();
    }

  
})

let counter =0;
let timerID;
function startTimer() {
 timer.style.display = "block"
  function displayTimer(){
     let totalSeconds = counter;
     let hours = Number.parseInt(totalSeconds / 3600);
     totalSeconds = totalSeconds % 3600;

     let minutes = Number.parseInt(totalSeconds / 60);
     totalSeconds = totalSeconds % 60;

     let seconds = totalSeconds;


   hours = (hours < 10 ) ? `0${hours}` : hours;
   minutes = (minutes < 10 ) ? `0${minutes}` : minutes;
   seconds = (seconds < 10 ) ? `0${seconds}` : seconds;

   timer.innerText = `${hours}:${minutes}:${seconds}`
   counter++;
   
  }


  timerID = setInterval(displayTimer, 1000)

}

function stopTimer() {
  clearInterval(timerID);
  timer.innerText = "00:00:00"
  timer.style.display = "none";
  
}