
let number1 = prompt("please input a number");
let number1int = parseInt(number1, 10);
let number2 = prompt("please input a number");
let number2int = parseInt(number2, 10);

if (number1) if (number2){
    let sum = (number1int + number2int);
    document.body.children[1].textContent = sum + " is the plus calculation";

    let minus = (number1int - number2int);
    document.body.children[2].textContent = minus + " is the minus calculation";

    let division = (number1int / number2int);
    document.body.children[3].textContent = division + " is the division calculation";

    let timing = (number1int * number2int);
    document.body.children[4].textContent = timing + " is the timing calculation";

    }


else{
    document.write("you didnt enter anything");
}
console.dir(document);
document.body.style.fontFamily = "Arial"