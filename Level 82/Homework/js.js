// let ms_intake = prompt("input the number of MS");
// let count = 0;
// let interval = setInterval(function(){
//     count++;
//     console.log(count);
    

//     if (count >= ms_intake/1000){
//         clearInterval(interval);
//     }
    
// },1000);
// შექმენით ვებ-საიტი სადაც მომხმარებელი შეიყვანს დროს (0-იდან 10000-ის ჩათვლით), მაგ: 9000 მილი წამი, 
// თქვენი მიზანია მომხმარებლის მიერ შეყვანილ დრომდე საიტზე ყოველ წამს გამოჩნდეს ციფრები (ამ შემთხვევაში 
// 1, 2, 3, 4, 5, 6, 7, 8, 9)
//  ხოლო როცა დრო ამოიწურება გამოჩნდეს მესიჯი "Time's up" , ასევე ქონდეს Start/stop ღილაკები.


let user_input1 = prompt("input your text");
let user_input2 = prompt("input the amount of seconds");
setTimeout(function(){
    document.write(user_input1);
},user_input2*1000);

