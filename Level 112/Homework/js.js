class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    intro(){
        console.log("hello my name is " + this.name + " and im " + this.age + " years old");
    }

}

const person1 = new person("Nick", 15);
person1.intro();

// 

class calculator {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(){
        console.log(this.a + this.b)
    }
    subtract() {
        console.log(this.a - this.b);
    }
     multiply (){
        console.log(this.a * this.b);
     }
     divide(){
        if (this.b == 0){
            return "cant divide by 0";
        }
        else{
            return this.a / this.b;
        }
     }


}
let calculator1 = new calculator(2,0);
calculator1.divide();

//

class book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    fullName(){
        console.log(this.title + " by " + this.author);
    }

}


//

class animal{
    constructor(name){
        this.name = name;
    }

    makeSound(){
        console.log("woof");
    }
}

class dog{
        constructor(name) {
        this.animal = new animal(name);
    
    }


        bark(){
            console.log(this.animal.name + "says " + this.animal.makeSound());
        }
    }

let dog1 = new dog("roy");
dog1.bark();

// 

class user{
    constructor(username){
        this.username = username;
    }
    login(){
        console.log(this.username)
    }
}

class Admin {
    constructor(username){
        this.user = new user(username);
    }
    deleteUser(){
        console.log(this.user.username + " is deleted");
    }
}