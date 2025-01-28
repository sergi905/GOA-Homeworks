function bank(money,user){
    this.money = money;
    this.user = user;

    this.money_takein = function(additional_money){
        this.money += additional_money;
        console.log(this.money + "$ is your balance");
    }
    this.money_takeout = function(diminished_money){
        this.money -= diminished_money;
        console.log(this.money + "$ is your balance");
    }
    

}

let bank1 = new bank(500, "tanxa");
bank1.money_takein(500);
bank1.money_takein(500);

// ////////////////////////////////////////////////////////
function animal_mane0(name_of_animal, color_of_animal,weight_of_animal){
    this.name = name_of_animal;
    this.color = color_of_animal;
    this.weight = weight_of_animal;
    this.func = function(){
        console.log("o!!!");
    }
    
}
let animal_mane1 = new animal_mane0("cat", "black", "5KG");