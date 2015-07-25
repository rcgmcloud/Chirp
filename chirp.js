module.exports = chirp;

function chirp(num) {
  if(typeof num !== "number"){
    return 'cock-a-doodle-doo!';
  }
  if(num <= 0){
    return "";
  }
  if(num === 1) {
    return "chirp" + chirp(num-1);
  }
  if(num > 1) {
    return "chirp " + chirp(num-1);
  }

}
