function solution(str, ending) {
    for (let i = 0; i < ending.length; i++) {
      if (str[str.length - ending.length + i] !== ending[i]) {
        return false;
      }
    }
  
    return true;
  }
function evenOrOdd(str) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0;i<str.length;i++){
        if (Number(str[i]) % 2 == 0){
        sumEven += Number(str[i]);
        }
        if (Number(str[i]) % 2 == 1){
        sumOdd += Number(str[i]);
        }
    }
    if (sumOdd > sumEven){
        return "Odd is greater than Even";
    }
    if (sumEven > sumOdd){
        return "Even is greater than Odd";
    }
    else{
        return "Even and Odd are the same";
    }
}

function elevatorDistance(array) {
    let sum = 0;
    for (let i = 0; i<array.length - 1;i++){
      if (array[i+1] - array[i] < 0){
        sum -= array[i+1] - array[i];
      }
      else{
        sum += array[i+1] - array[i];
      }
    }
  return sum;
}

function battle(x, y) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     let powerX = 0;
     let powerY = 0;
     
     for (let i = 0; i<x.length;i++){
       for (let j = 0; j<alphabet.length;j++){
         if ( x[i] == alphabet[j]){
           powerX += j + 1;
         }
       }
     }
         
     for (let i = 0; i<y.length;i++){
       for (let j = 0; j<alphabet.length;j++){
         if ( y[i] == alphabet[j]){
           powerY += j + 1;
         }
       }
     }
         
       if (powerX > powerY) {
         return x;
     }  
       else if (powerY > powerX){
         return y;
     }
       else {
         return "Tie!";
     }
       
       
   
   }


