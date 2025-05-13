function solve(a,b){
    let result = ""
    for (let i = 0; i<a.length;i++){
      let difference = true;
      for (let j = 0; j<b.length;j++){
        if (a[i] === b[j]){
          difference = false;
          break;
        }
        
      }
      if (difference == true){
        result += a[i];
      }
    }
    
    
    for (let i = 0; i < b.length; i++) {
      let isDifferent = true;
      for (let j = 0; j < a.length; j++) {
        if (b[i] === a[j]) {
          isDifferent = false;
          break;
        }
      }
      if (isDifferent) {
        result += b[i];
      }
    }
  
    return result;
    
  };


  function swapValues(arr) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }