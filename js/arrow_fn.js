// Arrow Functions

/*
  They are anonymous functions with their own special syntax that accept a fixed number of arguments, and operate in the context of their enclosing scope- ie. the function or other code where they are defined



  Arrow Functions have lexical scoping - 'this' refers to it's current surrounding scope and no further
  @ arrow functions can't be used with the 'new' keyword. They can't be used as constructors. Normal functions support the 'new' via the property and internal method[[Construct]]. new (() => {}) throws an error

*/


// Syntax 
const zeroArgs = () => {/* do something */}
const zeroWithUnderscore = _ => {/* do something */}

const oneArg = arg1 => { /* do something */ }
const oneArgWithParenthesis = (arg1) => { /* do something */ }

const twoOrMoreArgs = (arg1, arg2) => { /* do something */ }

// If there is only one line of code and no parenthesis the return can be omitted 
const noReturn = (num1, num2) => num1 + num2 





// ES5 

// Create an object literal, and put a event listener on a green box as method
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function(){ // this method has access to the object 'this'

    // * to correct this behavior, we can create an variable an attach it to 'this'
    var self = this; // some call this var [that, _this, self]

    document.querySelector('.green-box').addEventListener('click', function(){ 
      // ! this function has fallen out of scope, even if it is within another method, so the 'this' refers to the window obj
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str) // self.position , self.color will fix it 
    });
  }
}
box5.clickMe(); // 'This is box number undefined and its is undefined'

// ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function(){ 

    document.querySelector('.green-box').addEventListener('click', () => { 
      // Using arrow function, because it is lexical scope, so it shares the scope of the outer method 
      const str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);

    });
  }
}
box6.clickMe();

// ES6 => Second Case
const box6 = {
  color: 'green',
  position: 1,
  clickMe: () => {  // arrow function here will share the surround lexical scope, which is the global scope. So it will return undefined

    document.querySelector('.green-box').addEventListener('click', () => { 
      // Using arrow function, because it is lexical scope, so it shares the scope of the outer method 
      const str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);

    });
  }
}
box6.clickMe();

// One more Example

// ES5
function Person(name){
  this.name = name;
}
Person.prototype.myFriends5 = 
  function(friends){
    var arr = friends.map(function(el)
    {
      // Again this function falls outside of the method scope, so 'this' refers to the global object
      return this.name + ' is friends with ' + el
    }.bind(this)); // ! the bind method on the function will manually attach the 'this' value from the outer method 
    console.log(arr);
  }

  var friends = ['Bob', 'Jane', 'Mark'];
  new Person('John').myFriends5(friends); //name is undefined

  // ES6
function Person(name){
  this.name = name;
}
Person.prototype.myFriends6 = 
  function(friends){
    var arr = friends.map((el) => `${this.name} is friends with ${el}`);
    console.log(arr);
  }

  new 
  Person('Mike').myFriends6(friends);