const powers = n => {
    let result = [];
    let power = 0;
    while (n > 0) {
      if (n % 2 === 1) {
        result.push(2 ** power);
      }
      n = Math.floor(n / 2);
      power++;
    }
    return result;
  };

function nthChar(words){
let newWord = "";
for (let i = 0; i<words.length;i++){
    newWord += words[i][i];
}
return newWord;
}
function missingNo(nums) {
    let list = [];
    for (let i = 0; i <= 100; i++) {
    list.push(i);
  }
      for (let i = 0; i <= 100; i++) {
        if (!nums.includes(list[i])){
          return list[i];
      }
    }
  }

  function betweenExtremes(numbers) {
    for (let i = 0; i<numbers.length;i++){
      for (let j = 0; j<numbers.length - 1 - i;j++){
        if (numbers[j] > numbers[j+1]){
        let ting = numbers[j];
        numbers[j] = numbers[j+1];
        numbers[j+1] = ting;
      }
    }
    }
   return numbers[numbers.length - 1] - numbers[0];
}