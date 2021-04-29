var audio = null;
window.AudioContext = window.AudioContext ||
window.webkitAudioContext;
var audioContext = new AudioContext();

//
 
console.log("peakdetector.js running")

//playback  
audiofile = function playback(buffer) {
    var source = audioContext.createBufferSource(); //creates a sound source
    source.buffer = buffer; //tell source what sound to play
    source.connect(context.destination); //source to the destination (speakers)
    source.start(0);
}
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
}
*/