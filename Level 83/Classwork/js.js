function updateLight(current) {
    let arr = ["red","yellow","green"];
    for (let i = 0; i<arr.length;i++){
        if (current == arr[i]){
            console.log(arr[i+1]);
        }
        if (current == arr[2]){
            console.log(arr[0]);
        }
    }
  }


  function setAlarm(employed, vacation){
    if (employed == true && vacation == false){
        return true;
    }
    else {
        return false;
    }
  }