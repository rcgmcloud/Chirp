module.exports = chirp;

function chirp(num, word) {
  var speak = "chirp";

  if(typeof num !== "number"){
    return 'cock-a-doodle-doo!';
  }

  if(word !== undefined &&
   typeof word === 'string') {
    speak = word;
  }

  if(num <= 0){
    return "";
  }
  if(num === 1) {
    return speak + chirp(num-1, word);
  }
  if(num > 1) {
    return speak + " " + chirp(num-1, word);
  }

}
