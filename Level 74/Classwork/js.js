function person(name, age, height, id){
    this.name = name;
    this.age = age;
    this.height = height;
    this.personal_id = id;
}
let person_1 = new person("sergi", 16, 196, "nan");
let person_2 = new person("luka", 16, 178, "nan");


function machine_mane(brand, year_of_release, engine, horse_power,color,owner){
    this.brand = brand;
    this.year_of_release = year_of_release;
    this.engine = engine;
    this.horse_power = horse_power;
    this.color = color;
    
}
let car_1 = new machine_mane(bmw, 2015, "dunno", "dunno", "black", person_1.name);
let car_2 = new machine_mane(mercedez, 2013, "dunno", "dunno", "white", person_2.name);
let car_3 = new machine_mane(toyota, 2016, "dunno", "dunno", "grey", person_1.name);