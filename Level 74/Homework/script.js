function animal(name, color){
    this.name = name;
    this.color = color;
}
let animal1 =new animal("tiger", "red");
let animal2 = new animal("cat", "white");
let animal3 = new animal("dog","brown");
console.log(animal1.name);


function car(brand,cost){
    this.cost = cost;
    this.brand = brand;
}
let car1 = new car("bmw", "150K");
let car2 = new car("mercedez", "500K");
let car3 = new car("toyota", "100K");

function student(name,gpa){
    this.name = name;
    this.gpa = gpa;
}
let student1 = new student("sergi", 2.3);
let student2 = new student("luka", 2.5);
let student3 = new student("sandro", 2.2);


