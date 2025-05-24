let numbers = [1,2,3,4,5];
let new_numbers = numbers.map(function(x){
    return x * 2
})
numbers.forEach(function(i){
    return i * 2;
}
)

let sum = numbers.reduce((total, current)=>
    total += current, 10;
)





let even = numbers.filter(
    function(x){
        x % 2 === 0;
    })


let languages = ["Goa", "novatori", "step", "step"];

languages.map(function(i){
    if (languages[i][0] === languages[i][0].toUpperCase()){
        languages[i] = "Good";
    }
    else{
        languages[i] = "Bad";
    }
});

let numbers1  = [11, 3, 1, 5, 6, 2, 0, 13];
let filtered = numbers.filter(function(x){
    x > 5;
})


let str = "machineEspionage";
str.reduce((newstr, current ) => newstr += current, "");



