// Lecture: Default Parameters

// ES5

function SmithPerson(firstName, YoB, lastName, nationality){

  if(lastName === undefined){
    lastName = 'Smith'
  }
  if(nationality === undefined){
    nationality = 'american'
  }

  this.firstName = firstName;
  this.YoB = YoB;
  this.lastName = lastName;
  this.nationality = nationality
}

var john = new SmithPerson('John', 1990) //unspecified arguments returns undefined, so we use if to insert default parameters
var emily = new SmithPerson('Emily', 1983, 'Dias', 'Spanish') //default has been overwritten 



// ES6
function SmithPerson(firstName, YoB, lastName = 'Smith', nationality = 'American') 


