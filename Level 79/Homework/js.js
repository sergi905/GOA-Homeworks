function leap_year(year){
    if (year %4 === 0 && year %100 !== 0 || year %400 === 0){
        return "Yes";
    }
    else{
        return "No";
    }
}
console.log(leap_year(2400));

function numbers(number){
    let empty = 0;
    number = String(number);
    for (let i = 0; i<number.length;i++){
        empty += Number(number[i]);
    }
    return empty;
}
console.log(numbers(231));