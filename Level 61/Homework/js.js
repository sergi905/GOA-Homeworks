function filter(arr){
    // remove the words starting with A or C or H
    for (let i = 0; i<arr.length;i++){
        if (arr[i][0] == "A"|| arr[i][0] == "C" || arr[i][0] == "E"){
            // deletes the index I only 1 time;
            arr.splice(i,1);
        }
        
    }
    console.log(arr);
}
console.log(filter(["Apple","Banana","Chocolate","Duck","England"]));

function sorter(){
    let array = [5,4,2,7,6,8,9,1];
    
    for (let i = 0; i < array.length;i++){
        for (let j = i+1; j<array.length;j++){
            let temp1 = array[i];
            let temp2 = array[j];
            if (array[i]>array[j]){
                array.splice(i,1,temp2);
                array.splice(j,1,temp1)
            }
        }
    }
    console.log(array);
}
console.log(sorter());