var isSquare = function(n){
    // checks if a square root of given number is integer/full number;
    //  implying the original number is a square number
    if (Number.isInteger(Math.sqrt(n))){
      return true;
    }
    else{
      return false; // fix me
    }
    
  }

function descendingOrder(n){
n = String(n);
arr = n.split("");
for (let i = 0; i<arr.length;i++){
    for (let j = 0; j<arr.length - i -1; j++){
    if (Number(arr[j]) < Number(arr[j + 1])){
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
    }
    }
}
return Number(arr.join(""));
}



function XO(str) {
    let letterX = "x";
    let letterO = "o";
    let xcounter = 0;
    let ocounter = 0;
    for (let i = 0; i<str.length;i++){
      if (str[i] == letterX || str[i] == letterX.toUpperCase()){
        xcounter ++
      }
      if (str[i] == letterO|| str[i] == letterO.toUpperCase()){
        ocounter ++
      }
    }
    if (xcounter == ocounter){
      return true;
    }
    else{
      return false
    }
}
const sharePrice = (invested, changes) => {
    for (let i = 0; i<changes.length;i++){
      let change_in_number = invested * (changes[i] / 100);
      invested += change_in_number;
    }
    return invested.toFixed(2);
  }
    
  