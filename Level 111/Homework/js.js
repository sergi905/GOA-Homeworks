let people = ["nick", "beth"];
let ["nicholas", "elisabeth"] = people;

// 

let info = {
    name: "sergi",
    age: 16,
    lastName:"chikhradze";
}

let { name: elon, age: ageofelon, lastname: musk} = info;
console.log(elon);

// 

let bookInfo = {
    title: "the stranger",
    author: "albert camus"
}
let {title: bookName, author: nameOfAuthor} = bookInfo;
console.log(bookName); // "the stranger";

// 

let adress = {
    city: "tbilisi",
    zip: "0103"
}

let {city: nameOfCity, zip: ZipNumber} = adress;
console.log(nameOfCity); //tbilisi;

// 


function name(nameobj){

    nameobj = {
        name: "nino",
        age: "25"
    }
    
    let { name:User, age: Age} = nameobj;
    console.log(nameobj);


}