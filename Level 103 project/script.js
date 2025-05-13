let theme = document.getElementById("theme");
let text = document.getElementsByClassName("text");
let counter = 0;
theme.addEventListener("click", function(){
    counter += 1;
    if (counter %2 == 0){
        document.body.style.backgroundColor = "#1c1c1d";
        text.backgroundColor = "#2b2b2d";
    }
    else{
        document.body.style.backgroundColor = "white";
        text.style.backgroundColor = "#fdffd4";
    }
});