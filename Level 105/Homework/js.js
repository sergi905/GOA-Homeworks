let outter = document.getElementById("outter");
let inner = document.getElementById("inner");
let button = document.getElementById("btn");
outter.style.backgroundColor = "purple";
inner.style.backgroundColor = "green";

outter.addEventListener("click", function(event){
    console.log("outter div clicked");
});
inner.addEventListener("click", function(event){
    console.log("inner div clicked");
});
button.addEventListener("click", function(event){
    console.log("button clicked");
    event.stopPropagation();
})

// let - used for a changeable variable
// const - user for a variable to NOT be changed
// var - an old-fashioned method of declaring. obsolete