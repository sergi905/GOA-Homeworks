

function name_lister(){
    let new_list = [];
    let list_of_names = [ ["Stefan", "Raj","Marie"],
  ["Alexa",  "Amy",    "Edward"],
  ["Liz",    "Claire", "Juan"],
  ["Dee",    "Luke",   "Katie"] ];
    for (let i = 0;i<list_of_names.length;i += 2){
        for (let j = 1;j<list_of_names.length;j+= 2){
            new_list.push(list_of_names[i]);
            new_list.push(list_of_names[j].sort().reverse());
            
}
    }
    console.log(new_list);
}
console.log(name_lister());
