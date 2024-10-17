// 1) შევქმნათ ფუნქცია რომელიც ორ გადმოცემულ რიცხვს ამატებს, ამრავლებს, აკლებს ( 3 )
// 2) შევქმნათ ფუნქცუა რომელიც გადმოცემული სტრინგის პირველ ასოს აბრუნებს
// 3) შევქმნათ ფუნქცია რომელიც შეყვანილი რიცხვის კვადრატს დააბრუნებს
// 4) შევქმნათ ფუნქცუა რომელიც გადაცემულ htmlის ელემენტს ფერს შეუცვლის წითლად
// 5) შევქმნათ ფუნქცია რომელიც ფადაცემულ html ელემენტს ტექსტს შეუცვლის.


console.dir(document)

function yeah (number, second){


    sum = number + 3;
    sumofsecond = second + 3;

    return sum;
    return sumofsecond;

}

let resultat = yeah(2,3)
console.log(resultat)

function squared (tobesquared){
    tobesquared = tobesquared * tobesquared;
    return tobesquared;
}
let wwwww = squared(5);
console.log(wwwww);

function changecolor (){
    console.dir(document);
    document.body.style.backgroundColor = "black";
}
changecolor()

function changetext(){
    console.dir(document);
    document.getElementById(phaha).textContent = "changed";
}
changetext()




