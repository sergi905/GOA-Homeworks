function numberinge(num1,num2){
    if (num1 %2 !==0 && num1>num2 && num2 % 2==0){
        return true
    }
    else{
        return false
    }
}
console.log(numberinge(9,4));