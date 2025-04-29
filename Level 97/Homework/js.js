let age = document.getElementById("age");
let submit = document.getElementById("submit_button");
submit.addEventListener("click", function(){
    if (Number(age.value)>18){
        document.body.style.backgroundColor = "green";
    }
    else{
        document.body.style.backgroundColor = "red";
    }
})

let color = document.getElementById("color");
let all_colors = ["green", "blue", "yellow", "red", "cyan",
    "orange", "white", "black"
]
color.addEventListener("ended", function(){
    for (let i = 0; i<all_colors.length;i++){
        if (color.value.toLowerCase == all_colors[i]){
            document.body.style.backgroundColor = color.value;
        }
        else {
            return "pleaes input a correct color";
        }
    }
});


let theme = document.getElementById("theme");
let counter = 0;
theme.addEventListener("click", function(){
    counter += 1;
    if (counter %2 == 0){
        document.body.style.backgroundColor = "gray";
    }
    else{
        document.body.style.backgroundColor = "white";
    }
});



let numbers = document.getElementsByClassName("numbers");
let field = document.getElementById("field");
let buttons = document.getElementsByClassName("buttonmane");
for (let i = 0; i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
      field.value += buttons[i].textContent;  
    })
};
buttons[9].style.opacity = 0;

let equal = document.getElementById("equal");
equal.addEventListener("click", function(){
    if (field[1] == "+"){
        console.log( Number(field[0]) + Number(field[2]));
    }
    if (field[1] == "-"){
        console.log( Number(field[0]) - Number(field[2]));
    }
    if (field[1] == "*"){
        console.log( Number(field[0]) * Number(field[2]));
    }
    if (field[1] == "/"){
        console.log(Number(field[0]) / Number(field[2]));
    }
    else{
        console.log( "please make an equation between 1 digit numbers;");
    }
})