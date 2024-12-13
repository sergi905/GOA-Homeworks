// function sort_it_out(arr){
//     let n = Array.length;
//     for (let i = 0; i < n - 1; i++){
//         for (let j = 0; j < n - i - 1; j++){
//             if (arr[j] > arr[j + 1]){
//                 let ordered = arr[j];
//                 arr[j] = arr[j + 1];
//                 ordered = arr[j + 1];
//             }
//         }
        
//     }
//     console.log(sort_it_out[3,4,7,2,3,9]);
// }



// function unequalized_logger(arr1, arr2){
//     let n1 = arr1.length;
//     let n2 = arr2.length;
    
//     let clear = [];

//     for (let i = 0; i < n1 - 1; i++){
//         for (let j = 0; j < n1 -1; j++){
//             if (arr1[j] != arr2[j]){
//                 clear.push(arr1[j]);
//             }
            

//         }
//     }
//     console.log(unequalized_logger([2,3,4,1,5,7,2], [2,3,4,33,55,66,77]));
// }

let number_variable = document.getElementById("valueof_p");
let counter = 0

function damateba(){
    counter += 1;
    number_variable.textContent = counter;
}
function gamokleba(){
    counter += -1;
    number_variable.textContent = counter;
}

function reset(){
    counter = counter * 0;
    number_variable.textContent = counter;
}

