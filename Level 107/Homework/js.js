// let ting = [1,"2",3,"4",5];
// ting.map(function(i){
//     if (typeof i == "string"){
//         return "true";
//     }
//     else{
//          return "false";
//     }
// });


// let grades = [71,62,73,55];
// let filteredGrades = grades.filter(function(j){
//     j > 70;
// });


let arr  = [1,1,2,3,4,5];
let target = 1;
let newarr = arr.reduce(function(newstr, current){
    if ( current === target){
        return newstr += 1;
    }
    else{
        return newstr;
    }
},0);
console.log(newarr);


let sum = arr.reduce(function(accumulator, current){
    return accumulator + current;
},0);

let average = sum / arr.length;

console.log(average.toFixed(1));