function similarity(a, b) {
    let similar = [];
    for (let i = 0; i<a.length;i++){
        for (let j = 0; j<b.length;j++){
            if (a[i] === b[j]){
                similar.push(a[i]);
            }
        }
        

    } 
    let unified = a.concat(b);
    let unified_better = [];
    for (let i = 0;i<a.length;i++){
         for (let j = i+1;j<b.length;j++){
            if (unified[i] !== unified[j]){
                unified_better.push(unified[i]);
            }
         }
    }
    return similar.length / unified_better.length;
  }
