let keyValues = [['name', 'age'],['sergi', '16']];
let keys = keyValues[0];
let values = keyValues[1];


function ayemaneshie(){
    this.obj = {};
    for (let i = 0;i<keyValues.length;i++){
            this.obj[keys[i]] = values[i];
        }
        console.log(this.obj);     
}
console.log(ayemaneshie);
