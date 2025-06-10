const users = [
  { firstName: "Ana", lastName: "Kiknadze" },
  { firstName: "Giorgi", lastName: "Maisuradze" },
  { firstName: "Nino", lastName: "Kalandadze" }
];

function fullname(element){
    return {fulllName: element.firstName + " " + element.lastName};
}
const usersFullnames = users.map(fullname);
// 2
const students = [
  { name: "Nika", score: 85 },
  { name: "Lika", score: 92 },
  { name: "Saba", score: 88 },
  { name: "Tako", score: 95 }
];
function filterer(student){
    return student.score > 90;
}
let filtered = students.filter(filterer);

// 3

const cart = [
  { name: "Laptop", price: 1200, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
  { name: "Keyboard", price: 80, quantity: 1 }
];

function cartPrice(accumulator,current){
    return accumulator += current.price * current.quantity;
}
let total = cart.reduce(cartPrice,0);