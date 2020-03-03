// Lecture: Arrays es6

// in the HTML there is 3 boxes: green, blue and orange
const boxes = document.querySelectorAll('.box') // returns a node list

// es5 
// Trick to use array methods on a node list
var boxesArr5 = Array.prototype.slice.call(boxes); 
boxes.forEach( function(cur) {
  cur.style.backgroundColor = 'blue'
});

// ES6

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur =>
  cur.style.backgroundColor = 'blue'
  );

// or
Array.from(boxes).forEach(cur =>
  cur.style.backgroundColor = 'blue'
  );

// Loops

//ES5 
for(var i = 0; i < boxesArr5.lenght; i++){
  if(boxesArr5[i].className === 'box blue'){
    continue; // skip this iteration of the loop
  }
  boxesArr5[i].textContent = 'I changed to blue';
}

// ES6
for (const element of boxesArr6) {
  if(element.className.includes('blue')){ // include method
    continue;
  }
  element.textContent = 'I changed to blue';
}

// Find Elements Methods
// ES5
var ages = [12, 17, 8 ,21 , 14, 11]
var fullAge = ages.map(function(cur){
  return cur >= 18;
})
console.log(fullAge.indexOf(true)) // get the index of the true 
console.log(ages[full.indexOf(true)]); // get the value of the true 

//ES6

// findIndex => finds the index of an item
ages.findIndex(cur => cur >= 18) 

// find => finds the value of an item
ages.find(cur => cur >= 18) 

// filter - returns an array that contains a subset of the original
ages.filter(cur => cur > 18)

// map => creates a new array with results of the elements modified by function
ages.map(cur => cur * 2)

// forEach => executes a provided function once for each element(mutates the original array). Better to use not to change the original array, but just to do something with it, like console.log
ages.forEach(cur => cur * 2)

// reduce => apply a function to each element to reduce the array to a single value
ages.reduce((acc, cur) => acc + cur )