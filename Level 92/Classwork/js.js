let number_mane = 6;
let answer = (number_mane % 2 === 0) ? "two" : number_mane;
console.log(answer);


let another_number = 20;
let answer1 = (another_number % 2 === 0) ? another_number*8 : another_number*9;
console.log(answer1);

function checkNumber(num){
    let answer2 = (num > 0) ? "positive" : "Negative";
    return answer2;
}
checkNumber(20);

function random_element_selectormane(arr){
    let indexNumber = Math.floor(Math.random() * arr.length-1);
    return arr[indexNumber];
}
random_element_selectormane([0,2,3,10]);


