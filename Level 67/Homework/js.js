function summer(word){
    for (let i = 0; i < word.length; i+=2){
        for (let j = i + 1; j < word.length; j+=2){
            if (word.length %2 ==0){
                console.log(parseInt(word[i]) + parseInt(word[j]));
            }
            else if (word.length %2 ==1){
                console.log(parseInt(word[i]) + parseInt(word[j]) );
            }
            
        }
        
    }
}
console.log(summer("9454"));