function numbermaker(argh){
let neww = [];
for (let i=0; i < argh.length; i++){
    neww.push(Number(argh[i]));
}
console.log(neww);
}
console.log(numbermaker("22151313154"));