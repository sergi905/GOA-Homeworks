function ascend_distinguisher(arr){
    let Ascending = true;
    let Descending = true;
    
    for (let i = 0; i<arr.length-1; i++){
        if (arr[i]<arr[i+1]){
            Descending = false;
        }
        else if (arr[i]>arr[i+1]){
            Ascending = false;
        }

    }

    if (Ascending){
        console.log("it is ascending");
    }
    else if (Descending){
        console.log("it is descending");
    }
    else {
        console.log("no");
    }
}
console.log(ascend_distinguisher([1, 2, 3, 4, 5, 6, 7, 8]));