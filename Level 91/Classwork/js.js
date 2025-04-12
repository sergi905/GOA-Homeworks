function aye(){
let bigdiv = document.getElementById("bigdiv");
let div = document.createElement("div");
let size = 1;
for (let i = 0; i<9;i++){
    if (i%2 == 0){
       size *= 1.25;
        bigdiv.append(div);
    
        if (i%2 == 1){
            size *= 1.25;
            bigdiv.prepend(div);
        }
    }
    return bigdiv.innerHTML
}
}
console.log(aye());