

let number_variable = document.getElementById("valueof_p");
let counter = 0
let skips_number = document.getElementById("number_of_skips");

function damateba(){

    counter += parseInt(skips_number.value);
    number_variable.textContent = counter;
}
function gamokleba(){
    counter += parseInt(skips_number.value * -1);
    number_variable.textContent = counter;
}

function reset(){
    counter = 0;
    number_variable.textContent = counter;
}

