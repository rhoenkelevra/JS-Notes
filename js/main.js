var myStr = 'hello beautiful world';
var strArr = myStr.split(' ');
console.log(typeof strArr, strArr);


for(i = 0; i <= strArr.length - 1; i++){
  if(strArr[i].length >= 5){
    
    var reversedArr = strArr[i].split('').reverse().join('');
    
    // ? why is returning only the first element?
  };
}

var newArr = [];
newArr.push(reversedArr)
console.log(newArr);
