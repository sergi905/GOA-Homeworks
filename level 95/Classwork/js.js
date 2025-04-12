let div = document.getElementById("div");
div.style.backgroundColor = "red";
div.style.width = "50px";
div.style.height = "50px";
div.style.backgroundColor = "red";
div.style.opacity = 0;


function animation(){
    let thisOpacity = 0;
        let ting = setInterval(function() {
            
            if (thisOpacity >= 1){
                clearInterval(ting);
            }
            else{
                thisOpacity += 0.1;
                div.style.opacity = thisOpacity;
            }
        },100);
}
animation();