// Lecture: Spread Operator

function addFourAges(a, b, c, d){
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12 ,21);

// ES5 
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages) // take array and call the function with array as args

// ES6 
const max3 = addFourAges(...ages); // expand this array on it's elements

const familySmith = [ 'John', 'Jane', 'Mark']
const familyMiller = ['Mary', 'Bob', 'Ann']
const bigFamily = [...familySmith, ...familyMiller]

// another example, using on node list

const h = document.querySelector('h1')
const boxes = document.querySelectorAll('.box')

const all = [h, ...boxes]
// transform the node list to an array and use forEach to change all the elements
Array.from(all).forEach(cur => cur.style.color = 'purple')

// * The spread operator works on array-like objects too. You can use it to convert HTMLCollections and NodeLists into arrays just like 'Array.from'
const item = document.querySelectorAll('.item')

const array = Array.from(items)
const array2 = [...items]