let LastName = "saganelidze";
let person = {
    age: 16,
    FirstName: "sergi",
    LastName: "chikhradze",
    height: 196,
    weight: 96,
    FullName: function(){
        return this.FirstName + " " + this.LastName;
    }
};
person.bmi = function(){
    let heightMeters = height/100;
    return this.weight / (heightMeters**2);
}