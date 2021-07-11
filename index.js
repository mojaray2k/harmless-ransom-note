function harmlessRansomNote(noteText, magazineText){

}

// Constant runtime
// Big ) Notation: "0 (1)"
function log(array) {
  console.log(array[0]);
  console.log(array[1]);
}
log([1,2,3,4]);
log([1,2,3,4,5,6,7,8,9,10]);

// Linear runtime
// Big ) Notation: "0 (n)"
function logAll(array){
  for (var i = 0; i < array.length; i++) {
    console.log([i])
  }
}

logAll([1,2,3,4]);
logAll([1,2,3,4,5,6]);
logAll([1,2,3,4,5,6,7]);

// Exponential runtime
// Big ) Notation: "0 (n^2)"

function addAndLog(array){
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++){
      console.log(array[i] + array[j]);
    }
  }
}

addAndLog(['A', 'B', 'C'])
addAndLog(['A', 'B', 'C', 'D'])
addAndLog(['A', 'B', 'C', 'D', 'E'])
