let number_check = document.getElementById("number");
let letter_check = document.getElementById("letter");
function log_buncha_stuff(){
        if (letter_check.checked){
        setInterval(function(){
            let all_letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
            let random_index = Math.floor(Math.random() * all_letters.length);
            document.write(all_letters[random_index]);
        }, 1000);
        }
        
        else if (number_check.checked){
        setInterval(function(){
            let random_times_hundred = Math.random();
            document.write(Math.floor(random_times_hundred * 100) + ", ");
            document.getElementById("");
        }, 1000);
    }
    else{
        document.write('nun');
    }
        
}

    
    