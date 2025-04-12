function form_saver(){
let age = document.getElementById("age").value;
let first_name = document.getElementById("name").value;
let last_name = document.getElementById("lastname").value;
let gender = "None";


let radio_buttons = document.getElementsByClassName("radios");
for (let i = 0; i<radio_buttons.length;i++){
    if (radio_buttons[i].checked){
        gender = radio_buttons[i];
        break
    }
}

if (!first_name || !last_name || !age || !gender) {
    alert("Please fill in all fields.");
    return;
}


    let all_info = {
        FirstName: first_name,
        LastName:last_name,
        Gender: gender,
        Age: age        
    };

    setTimeout(function() {
        console.log(all_info);
    }, 2000);

   window.location.href = "./adminpanel.html";
   
    
   
}
