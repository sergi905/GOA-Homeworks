function bonusTime(salary, bonus){
    if (bonus == true){
        salary = salary * 10;
        return "£" + salary + bonus;
    }
    else {
        return "£" +  salary;
    }
}
console.log(bonusTime(500,5.5));


var number=function(array){
    for (let i = 0; i<array.length;i++){
        
            array[i] = i+1 + ": " + array[i];
    }
    return array;
}
console.log(number(["a","b","c"]));

function sumMix(x){
    let sum = 0;
    for (let i = 0; i<x.length;i++){ 
        sum = sum + Number(x[i]);
    }
    return sum;
}
console.log(sumMix([2,3,4,5,"5",7]));


function minMax(arr){
  arr = arr.sort();
  let smallest_highest = [];
    smallest_highest.push(arr[0],arr.at(-1));
    
    return smallest_highest;

  }