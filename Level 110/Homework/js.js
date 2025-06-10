let div = document.getElementById("divOne");

let isCircle = false;
function ChangeBorder(){
    if (isCircle){
    div.style.borderRadius = "0%";
    isCircle = false;
    }
    else{
        div.style.borderRadius = "50%";
        isCircle = true;
    }
}

setInterval(ChangeBorder,5000);