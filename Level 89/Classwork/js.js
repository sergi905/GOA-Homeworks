function countLettersAndDigits(input) {
    let sum = 0;
    for (let i = 0;i<input.length;i++){
      if (/[a-zA-Z0-9]/.test(input[i])){
        sum += 1
      }
      
    }
    return sum;
  }

  function calculator(a, b, sign) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "unknown value";
    }
  
    if (sign === "+") {
      return a + b;
    } else if (sign === "-") {
      return a - b;
    } else if (sign === "*") {
      return a * b;
    } else if (sign === "/") {
      return a/b;
    } else {
      return "unknown value";
    }
  }