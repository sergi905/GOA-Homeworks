let user_input = prompt("input a text without symbols:");
if (/[^a-zA-Z0-9\s]/.test(user_input)){
    console.log("error")
}
else {
    console.log("valid")
}