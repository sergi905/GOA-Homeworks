let people = [
{
    name: "sergi",
    age: 16,
    height: 196,
    gender: "male"
}
,
{
    name: "luka",
    age: 16,
    height: 178,
    gender: "male"
}
,
{
    name: "ana",
    age: 14,
    height: 176,
    gender: "female"
}
,
{
    name: "daria",
    age: 23,
    height: 180,
    gender: "female"
}
]
function ayemane(){
    for (let i = 0; i < people.length; i++){
        let particular_person = people[i];
        console.log("name: " + particular_person.name + " age: " + particular_person.age + " height: " + particular_person.height + " gender: " + particular_person.gender);
    }
}
console.log(ayemane());

