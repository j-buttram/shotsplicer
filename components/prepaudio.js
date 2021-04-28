var audio = null;
window.AudioContext = window.AudioContext ||
window.webkitAudioContext;
var audioContext = new AudioContext();


const form = document.getElementById('filesubmitform');


//1. load audio from express server. app.js loads the file to express folder /uploads
//2. decode and buffer
//3. export for use in peak detector

console.log("prepaudio.js running")

filesubmitform.onsubmit = function() {
    //import submitFile from "/app.js"
    console.log("submitted and file should be transferred to PeakDetector");
}

  
function loadSound(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer'; 
  
    //*decode async
    request.onload = function() {
      audioContext.decodeAudioData(request.response,
        function(buffer) {
          audio = buffer;
          console.log("audio buffer is loaded")
        }, onError);
      }
      request.send();
  }
