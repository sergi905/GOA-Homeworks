let div = document.querySelector("div")
function printinHTMLOfChildren(){
    for (let i = 0;i<div.children.length;i++){
        console.log(div.children[i].innerHTML);
    }
    if (div.children.length === 0){
        console.log("There is no text!");
    }
}

