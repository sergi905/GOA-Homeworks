function twoSum(numbers, target) {
    for (let i = 0; i<numbers.length;i++){
        for (let j = i+1; j<numbers.length;j++){
            if (numbers[i]+numbers[j] == target){
                let indexnumbers = [];
                indexnumbers.push(i,j);
                return indexnumbers;
            }
        }
        
    }
    
}
console.log(twoSum([1,2,3,4], 6));