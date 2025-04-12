function slicer_machine(){
    let ting = "hello!";
    let prompter = prompt("enter the starting number of index");
    if (prompter > ting.length-1){
        return "please try a number lower than " + ting.length;
    }
    else {
        let answer = ting.slice(prompter,)
        return answer;
    }
}
console.log(slicer_machine());


function sentence_receiver(){
    let sentence = "molten metal boiled in bubble";
    let splitted_sentence = sentence.split(" ");

    for (let i = 0;i<splitted_sentence.length;i++){
        splitted_sentence[i] = splitted_sentence[i].split("").reverse().join("");
    }
    return splitted_sentence.join(" ");
}
console.log(sentence_receiver());

