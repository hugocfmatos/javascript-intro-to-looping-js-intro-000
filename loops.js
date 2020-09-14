function forLoop(array) {
  for (let i=0; i<25; i++) {
    if (i===1) {
<<<<<<< HEAD
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
=======
      array[i]="I am 1 strange loop."
    } else {
      array[i]=`I am ${i} strange loops.`
>>>>>>> 4abcd1bd383a8124253bef55738cd6275c46d1df
    }
  }
  return array
}


function whileLoop(n) {
  while (n>0) {
    console.log(n);
    n=n-1;
  }
  return "done"
}


let i = 0;
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  do{
    console.log('I run once regardless.');
  } while (incrementVariable() < num+1)
}
