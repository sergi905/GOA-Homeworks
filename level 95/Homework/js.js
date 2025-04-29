// let button = document.querySelector("button");
// button.innerHTML = "Click";
// button.addEventListener("click", function(){
//     let newDiv = document.createElement("div");
//     newDiv.innerHTML = "road blocks";
//     document.body.appendChild(newDiv);
// });


// let square = document.createElement("div");
// square.style.backgroundColor = "red";
// square.style.width = "50px";
// square.style.height = "50px";
// square.style.borderRadius = "0%"
// document.body.appendChild(square);

// square.addEventListener("click", function(){
//     let radius = 0;
// let interval = setInterval(function(){
//     if (radius >= 50){
//         clearInterval(interval);
//     }
//     else{
//         radius += 1;
//         square.style.borderRadius = radius + "%";
//     }
// }, 20);
//     setTimeout(function(){
//         let interval2 = setInterval(function(){
//             if (radius <= 0){
//                 clearInterval(interval2);
//             }
//             else{
//                 radius -= 1;
//                 square.style.borderRadius = radius + "%";
//             }
//         }, 20);
//     },2000);
// });




// let divmane = document.createElement("div");
// divmane.style.backgroundColor = "cyan";
// divmane.style.width = "50px";
// divmane.style.height = "50px";
// divmane.style.position = "absolute";
// divmane.style.transition = "transform 0.5s"
// document.body.appendChild(divmane);

// let answer = prompt("input seconds");
// let answerNumberInMS = Number(answer) * 1000;

// let steps = [
//     "translate(100px, 0px)",
//     "translate(100px, 100px)",
//     "translate(0px,100px)",
//     "translate(0px, 0px)"
// ];
// let stepTime = answerNumberInMS /steps.length;
// let i = 0;

// let intervalOfaKind = setInterval(function (){
//     divmane.style.transform = steps[i]
//     i++;
//     if (i>=steps.length){
//         clearInterval(intervalOfaKind);
//     }  
// }, stepTime);




let answerPlease = prompt("input any string");

let divm = document.createElement("div");
divm.style.fontFamily = "carlito";
document.body.appendChild(divm);
let j = 0;
let timer = setInterval(function (){
    
    if (j+1>answerPlease.length){
        clearInterval(timer);
    }
    else{
        divm.innerHTML += answerPlease[j];
        j++;
    }
    
}, 60);




