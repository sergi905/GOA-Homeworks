let sergi = {
    age: 13,
    Name: "sergi",
    last_name: "chikhradze",
    height: 196,
    weight: 96
}
console.log(sergi.age);

let asd = {
    rigi_0: [2,4,6,8,10],
    rigi_1: [1,3,5,7,9]
}
for (let i = 0; i<asd.rigi_0.length; i++){
    for (let j = 0; j<asd.rigi_1.length; j++){
        console.log("1."+ asd.rigi_0[i] + "; 2." + asd.rigi_1[j])
    }

}
function argument_takermane(){
    let argh = {
        quanity: 2,
        element: "car"
    }
    let sum = Array(argh.quanity).fill(argh.element);
    console.log(sum);
}
argument_takermane();