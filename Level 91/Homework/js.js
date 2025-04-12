// let container = document.getElementById("container");
// function cycler(){
//     for (let i = 0;i<10;i++){
//         let new_div = document.createElement("div");
//         new_div.style.width = "100px";
//         new_div.style.height = "100px";
        
//         if (i%2 !== 0){
//             new_div.style.backgroundColor = "Blue";
//             container.prepend(new_div);
//         }
//         if (i%2 == 0){
//             new_div.style.backgroundColor = "Red";
//             container.append(new_div);
//         }
//     };
// }
// console.log(cycler());


// function number_addition(){
//     let userInput = prompt("please input a number");
//     let containerOne = document.getElementById("containerOne");;
//   
//     if (Number(userInput) > 20){
//         containerOne.append(userInput);
//     }
//     else{
//         containerOne.prepend(userInput);
//     }
    

// }
// console.log(number_addition());

// function number_addition_one(){
//     let containerTwo = document.getElementById("containerTwo");
//     let user_input = prompt("please input a number");
//     let red_square = document.createElement("div");
//     red_square.style.width = "50px";
//     red_square.style.height = "50px";
//     if (user_input[user_input.length-1] === "1"){
//         red_square.style.backgroundColor = "red";
//         containerTwo.append(red_square);
//     }
//     if (user_input[user_input.length-1] === "2"){
//         red_square.style.backgroundColor = "green";
//         containerTwo.append(red_square);
//     }
//     if (user_input[user_input.length-1] === "3"){
//         red_square.style.backgroundColor = "blue";
//         containerTwo.append(red_square);
//     }
// }
// number_addition_one()

function number_addition_two(){
    let circle = document.createElement("div");
    circle.style.border = "2px solid black";
    circle.style.width = "50px";
    circle.style.height = "50px";

    let containerThree = document.getElementById("containerThree");
    let user_inputOne = prompt("please input a number");
    if (typeof )
    if (Number(user_inputOne) %2 == 0){
        circle.style.borderRadius = "50%";
        circle.style.backgroundColor = "blue";
        containerThree.append(circle);
    }
    else {
        circle.style.backgroundColor = "red";
        containerThree.prepend(circle);
    } 
}
number_addition_two()




