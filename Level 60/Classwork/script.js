console.dir(document);


function checkcolor(){
    let userinput = confirm("black or white screen, press OK for Black");
    console.log(userinput);
    if (userinput){
        let blackener = document.body.style.backgroundColor = "black";
        console.log(blackener);
    }
    
    
    else if (userinput == false){
        let whitener = document.body.style.backgroundColor = "white";
        console.log(whitener);

    }
    
}

function checktext(){
    let bigtextquestion = confirm("Big or Small text, press OK for Big");
    console.log(bigtextquestion);
    if (bigtextquestion){
        let text_enlargement = document.body.style.fontSize = "Larger";
        console.log(text_enlargement);
    }
    // tu patara teqsti gvinda da tetri foto gvinda
    else if (bigtextquestion == false){ 
       
    }

}





checkcolor();
checktext();

