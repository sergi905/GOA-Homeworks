// function stringToArray(string){
//     array_answer = string.split(" ");
//     return array_answer;
//   }
// console.log(stringToArray("1 2 3 4 5"));

// a and not b or b and not ------ false

// b and c and a or b ---- true


// a and not c or b and not A or b and not C false
const areaOrPerimeter = function(l , w) {
  if (l == w){
      return l * w;
  }
  else {
      return (l + w) * 2;
  }
}
console.log(areaOrPerimeter(6,6));