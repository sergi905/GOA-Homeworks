let asaki = Number(document.getElementById("age").value);
let saxeli = document.getElementById("name").value;
let gvari = document.getElementById("lastname").value;
let greet = "welcome in, " + saxeli + " " + gvari;
let disagree = "cannot continue"
let full = document.getElementById("forresult").textContent = disagree;

document.write(greet);

if (saxeli < 18) {
    document.write(full);
}