const parentDiv = document.getElementById("parent");
const childDiv = document.getElementById("child")

parentDiv.addEventListener("click", () => {
    console.log("This is parent element")
})

childDiv.addEventListener("click", () => {
    console.log("This is child element")
})






const parentDiv1 = document.getElementById("parent1");
const childDiv1 = document.getElementById("child1");
const grandchildDiv = document.getElementById("grandchild");

parentDiv1.addEventListener("click", () => {
    console.log("This is first(parent) element")
})

childDiv1.addEventListener("click", () => {
    console.log("This is second(child) element")
})

grandchildDiv.addEventListener("click", () => {
    console.log("This is grandchild element")
})






const clickBtn = document.getElementById("clickBtn")

clickBtn.addEventListener("click", () => {
    console.log("This is a button")
})

document.body.addEventListener("click", () => {
    console.log("This is a body")
})



const button1 = document.getElementById("btn1")
const button2 = document.getElementById("btn2")
const button3 = document.getElementById("btn3")

button1.addEventListener("click" , () => {
    console.log("Button 1")
})

button2.addEventListener("click", () => {
    console.log("Button 2")
})

button3.addEventListener("click", () => {
    console.log("Button 3")
})





const firstDiv = document.getElementById("first_div");
const secondDiv = document.getElementById("second_div");

firstDiv.addEventListener("click" , () => {
    console.log("this is first div")
}, true)

secondDiv.addEventListener("click", () => {
    console.log("this is second div")
}, true)





const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");


div1.addEventListener("click", () => {
    console.log("Div 1")
}, true)

div2.addEventListener("click", () => {
    console.log("Div 2")
})



const elem1 = document.getElementById("a")  ;
const elem2 = document.getElementById("b");
const elem3 = document.getElementById("c");

elem1.addEventListener("click", () => {
    console.log("a")
}, true)

elem2.addEventListener("click", () => {
    console.log("b")
}, true)

elem3.addEventListener("click", () => {
    console.log("c")
}, true)



const div = document.getElementById("div");

div.addEventListener("click", () => {
    console.log("Capturing")
}, true)

div.addEventListener("click", () => {
    console.log("Bubbling")
})


const element = document.getElementById("element");
const button = document.getElementById("Btn");

element.addEventListener("click", () => {
    console.log("parent, capturing")
}, true)

button.addEventListener("click", () => {
    console.log("Button, bubbling")
})