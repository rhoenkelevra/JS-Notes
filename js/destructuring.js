/*
  Destructuring

  # Gives an easy way to extract data from an array or obj

*/

// ES5

var john = ['John', 26];
var name = john[0];
var age = john[1];


// ES6
// creates two const variables with the following names
const [name, age] = ['John', 26 ]

const obj = {
  firstName = 'Mike',
  lastName = 'Star'
}

const {firstName, lastName } = obj // Now those properties are available outside of the object as variables - ie. firsName(variable) = obj.firstName 
const {firstName: a, lastName: b} = obj;
// does the same as above but gives the variable another name ie. a = obj.firstName 

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age]
}
const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2)
console.log(retirement)

// Destructuring function arguments
// If the argument is an array or obj
const scores = [100, 99, 98]
const firstThree = ([first, second, third]) => {
  return {
    first: first,
    second: second,
    third: third
  }
}

console.log(firstThree(scores))
// {
//   first: 100,
//   second: 99,
//   third: 98
// }

// Default Parameters

const course = { name: 'Learn Javascript'}
const {description = 'Best JS course ever!'} = course
console.log(description) // 'Best JS course ever!'