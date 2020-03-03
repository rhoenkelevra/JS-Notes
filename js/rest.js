// Lecture: Rest Parameters

// It's the opposite of spread => Takes an array and transform it into a single value

// ES5
function isFullAge5(){
  // Arguments are like-arrays, so to use as an array we have to use the slice.call trick
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function(cu){
    console.log((2020 - cur) >= 18);
  })
 } ;


isFullAge5(1990, 1999, 2010, 1965)


// ES6
function isFullAge6(...years){
  // now the Argument became an array
  years.forEach(cur => (2020 - cur) >= 18)
}
isFullAge6(1990, 1999, 2010, 1965)