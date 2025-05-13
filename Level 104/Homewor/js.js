function solve(a,b){
  let sum = "";
  for (let i = 0; i<a.length;i++){
    if (!b.includes(a[i])){
      sum += a[i];
    }
  }
  for ( let i = 0; i<b.length;i++){
     if (!a.includes(b[i])){
      sum += b[i];
  }
  }
  return sum;
}


