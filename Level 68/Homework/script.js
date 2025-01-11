function needed_text(text){
    let question = prompt("input the text: " + text);
    while (question !== text){
        question = prompt("input the text: " + text);
    }
    if (question == text) {
        console.log("nice job");    
    }
}
console.log(needed_text("roblox"));





// 22222222222222222222





// 333333333333333

function password_checker(correct_password){
    let prompt_question = prompt("input the password to access: ");
    while (prompt_question !== correct_password ){
        prompt_question = prompt("input the password to access: ");
    }
    if (prompt_question == correct_password ){
        console.log("you now have access");
    }
}
password_checker("12345678");


