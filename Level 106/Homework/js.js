let names = ["nick", "sergi", "giorgi","elene", "luka"];
let longer_names = [];
names.forEach(
    function(each_name){
        if (each_name.length > 5){
            longer_names.push(each_name);
        }
    }
    
);
console.log(longer_names);

// 2

let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNumbers = [];
numbers.forEach(each_number => {
    if (each_number % 2 == 0){
        evenNumbers.push(each_number);
    }
});
console.log(evenNumbers);

// 3

let obj = {
    car: 10,
    pc: 11,
    bread: 2,
    ship: 12
}
for (let key in obj){
    if (obj[key] > 10){
        console.log(key);
    }
}

// 4

let obj1 = {
    history: 45,
    math: 60,
    geography: 70,
    russian: 65,
    english: 70
}
let FailedCount = 0;
for (let key in obj1){
    if (obj1[key] < 51){
        FailedCount ++
    }
}
console.log("total number of failed subjects is " + FailedCount);