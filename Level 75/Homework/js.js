function car_full(brand,model,year,engineVolume){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineVolume = engineVolume;

    this.func = function(){
        console.log("this car was released in: " + year );
    }
}
let car_full_1 = new car_full("Toyota","Prius", "2018", "1.8L");
car_full_1.func()

console.log("// ///////////////////////////////////////");

function book(title,author,pages,year){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.everyday_dose = this.pages/7;
    
    
    this.everyday = function(){
        console.log("if you would like to read this book in a span of 7 days, you would have to read " + this.pages/7 + " pages everyday.");
    }
}

let book_1 = new book("harry potter", "JK Rowling", 223,1997);

// call the method
book_1.everyday();

console.log("// ///////////////////////////////////////");

function sportsman(name,age,sport,TrainingHours){
    this.name = name;
    this.age = age;
    this.sport = sport;
    this.TrainingHours = TrainingHours;
    this.hoursneeded = function(){
        if (TrainingHours >= 6){
            console.log("we will see a 20% growth in " + name + "'s performance because he trains more than 6 hours per week")
            }
        else {
            console.log("unfortunately we will not see a 20% growth in performance");
        }
    }
}
let sportsman_1 = new sportsman("leBron James", "40", "basketball", "9");
sportsman_1.hoursneeded();

