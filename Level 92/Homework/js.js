let user_input_age_mane = prompt("input age mane");
let answer1 = (user_input_age_mane > 18) ? "adult" : user_input_age_mane + " is not older than 18";
let div = document.querySelector("div");
div.style.fontFamily = "Carlito"
div.innerHTML = answer1;

function two_numbers(num1,num2){
    let answer = (num1 > num2) ? "${num1/num2} მეტია": (num1 = num2) ? "Equal";
}


function fakeBin(x){
    x = x.split("");
    for (let i = 0; i<x.length;i++){  
      x[i] = (x[i]<5) ? 0 : 1;
    }
    x = x.join("")
    return x
  }


function fakeBin(x){
    let res = "";
    for (let i = 0; i<x.length;i++){
        res += (x[i]<5) ? "0" : "1";
    }
    return res
}