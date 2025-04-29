function oddCount(n){
    return Math.floor(n / 2);
}

function smallEnough(a, limit){
for (let i = 0; i<a.length;i++){
    if(a[i] > limit){
    return false;
    }
}
return true;
}

function openOrSenior(data){
    let output = []
    for (let i = 0; i<data.length;i++){
        if (data[i][0]>= 55 && data[i][1]>7){
          output.push("Senior");
        }
      else{
        output.push("Open");
      }
    }
    return output;
  }

function fakeBin(x){
  let result = "";
  for (let i = 0; i<x.length;i++){
    if (x[i]<5){
      result += "0";
    }
    else{
      result += "1";
    }
  }
  return result;
}