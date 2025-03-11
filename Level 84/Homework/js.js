// function findMultiples(integer, limit) {
//     let arr = [];
//     for (let i = 1; i * integer <= limit; i++) {
//         arr.push(integer * i);
//     }
//     return arr;
// }

// function countPositivesSumNegatives(input) {
//     if (!input || input.length == 0){
//       return [];
//     }
//       let negative = 0;
//       let positive = 0;
    
//       for (let i = 0;i<input.length;i++){
//         if (input[i]<0){
//           negative += input[i];
//         }
//         else if (input[i]>0){
//           positive += 1;
//         }
        
//       }
//       let overall = [positive,negative];
//       return overall;
//     }



// function sameCase(a, b){

//   if (!/[a-zA-Z]/.test(a)|| !/[a-zA-Z]/.test(b)){
//     return -1;
    
//   }
//     else if (a === a.toUpperCase() && b === b.toUpperCase() ||
//   a === a.toLowerCase() && b === b.toLowerCase()){
//     return 1;
//   }
//   else if (a === a.toUpperCase() && b === b.toLowerCase() ||
//     a === a.toLowerCase() && b === b.toUpperCase()){
//     return 0; 
// }
// }


function accum(s) {
  let letters = [];
	for (let i = 0; i<s.length;i++){
    letters.push(s[i].toUpperCase().repeat(i+1));
    
  }
  return letters;
}
console.log(accum(["abcd"]));