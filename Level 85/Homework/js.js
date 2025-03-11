let one = document.getElementById("gadzooks");
one.style.fontSize = "XX-Large";
let two = document.getElementsByClassName("damn");
two.innerHTML = "za";
let h1 = document.getElementsByTagName("h1");


console.log(two);
for (let i = 0;i<two.length;i++){
    two[i].style.color = "red";
}