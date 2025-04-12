// function ayemane(){
//     let InputNumber = prompt("input a number from 1 to 8");
//     let index = Number(InputNumber) - 1;
//     let ChildrenList = document.body.firstElementChild.children;
//     if (index >= 0 && index < ChildrenList.length){
//         ChildrenList[index].style.backgroundColor = "red";
//     }
//     else{
//         document.body.children[1].querySelector("h1").innerHTML = "please input a number between 1-" + ChildrenList.length;
//         document.body.children[1].querySelector("h1").style.fontFamily = "carlito";
        
//     }
// }
// ayemane();



// function aaaa(){
//     let list = document.body.children[2];
    
//     let input = prompt("input a number from 1-3");
//     let index1 = Number(input) - 1;
//     if (index1 >= 0 && index1 < list.children.length){
//         if (list.children[index1].children.length == 0){
//             console.log("no children");
//         }
//         else{
//             console.log( "has " + list.children[index1].children.length + " children");
//         }
//     }
// }
// aaaa();

function ayemane1(){
    let divs = document.body.children[2];

    for (let i = 0;i<divs.length;i++){
        if (i%2===0){
            divs.children[i].style.backgroundColor = "red";
        }
        else{
            divs.children[i].style.backgroundColor = "blue";
        }
    }
}


