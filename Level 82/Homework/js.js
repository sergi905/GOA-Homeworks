let ms_intake = prompt("input the number of MS");
let count = 0;
let interval = setInterval(function(){
    count++;
    console.log(count);
    

    if (count >= ms_intake){
        clearInterval(interval);
    }
    
},1000);


let user_input1 = prompt("input your text");
let user_input2 = prompt("input the amount of seconds");
setTimeout(function(){
    document.write(user_input1);
},user_input2*1000);

