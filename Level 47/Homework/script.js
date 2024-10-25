console.dir(document)
function changer(minute){

    return minute * 60;
}

const seconds = changer(3.14);
console.log(seconds);

    
function SumTimesThird(num1,num2,num3){
    let firstsum = num1 + num2;
    return firstsum * num3;
}
const fullsum = SumTimesThird(2,5,4);
console.log(fullsum)

function Comparison(num4,num5){
    num4 > num5;
}
const done = Comparison(4,5);
console.log(done);


function elementLog(element){
    console.log("element: " + element);
}
const resultat = elementLog(document.getElementById("ting"))
    
function task5 (idd, txt,){
    document.getElementById(idd).textContent = txt;
}
task5("ting","gamarjoba")
