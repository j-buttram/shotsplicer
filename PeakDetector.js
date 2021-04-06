var audio = null;
window.AudioContext = window.AudioContext ||
window.webkitAudioContext;
var audioContext = new AudioContext();

 
console.log("js script running")

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
function playback(buffer) {
  var source = audioContext.createBufferSource(); //creates a sound source
  source.buffer = buffer; //tell source what sound to play
  source.connect(context.destination); //source to the destination (speakers)
  source.start(0);
}

//define url and run load function on mouseclick
var url = ""
window.addEventListener("mousedown", playback);

//run playback on mouse button


/*
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
}*/