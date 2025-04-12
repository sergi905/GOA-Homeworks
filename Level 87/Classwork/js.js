// function typeValidation(variable, type) {
//     if (typeof variable == type){
//         return true;
//     }
//     else {
//         return false
//     }

// }
// function elevatorDistance(array) {
//     let count = 0;
//     for (let i = 0;i<array.length;i++){
//         let sum = array[i] - array[i+1];
//         let moduled_sum = Math.abs(sum);
//         count += moduled_sum;
//     }
//     return count;
// }



// let arr1 = [1,2,3,4,5,6,7,8,9,10]
// arr1.array.forEach(function(el){
//     console.log(el*2);
// });




function dog_function(){
    let imgurl = '<img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*">';

    document.body.innerHTML = imgurl;
}
function cat_function(){
    let imgurl1 = '<img src="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg">'; 
     document.body.innerHTML = imgurl1;
}


let dog = document.getElementById("dog");
let cat = document.getElementById("cat");
dog.addEventListener("click",dog_function);
cat.addEventListener("click",cat_function);