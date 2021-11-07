const isEven = function(num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);


//SIMPLIER WAY - DON'T NEED TO ASSIGN NEW VARIABLES TO THE RETURNS. 
//JUST USE FUNCTION DIRECTLY
const isEven = function(num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));