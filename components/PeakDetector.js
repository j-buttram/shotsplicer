var audio = null;
window.AudioContext = window.AudioContext ||
window.webkitAudioContext;
var audioContext = new AudioContext();

 
console.log("peak detector script running")

function loadSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer'; 

  //decode async
  request.onload = function() {
    audioContext.decodeAudioData(request.response,
      function(buffer) {
        audio = buffer;
        console.log("audio buffer is loaded")
      }, onError);
    }
    request.send();
}

//playback  
object.onsubmit = function() {
  
  
  function playback(buffer) {
    var source = audioContext.createBufferSource(); //creates a sound source
    source.buffer = buffer; //tell source what sound to play
    source.connect(context.destination); //source to the destination (speakers)
    source.start(0);


  }
}





object.onsubmit = function(){
  import submitFile from "/app.js"
  console.log("submitted and file should be transferred to PeakDetector")
}

function getPeaksAtThreshold(data, threshold) {
  var peaksArray = [data];
  var length = data.length;
  for(var i = 0; i < length;) {
    if (data[i] > threshold) {
      peaksArray.push(i);
      // Skip forward ~ 1/4s to get past this peak.
      i += 10000;
    }
    i++;
  }
  return peaksArray;
}