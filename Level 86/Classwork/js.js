function smallestInteger(matrix) {
    for (let i = 0; i<matrix.length;i++){
        for (let j = 0; j<matrix.length;j++){
            if (matrix[i][j] !== i){
                return i;
            }
        
        }
    }
    
    
  }


let fonter = document.querySelectorAll(".ABCDEF");
for (let i =0;i<fonter.length;i++){
    fonter[i].style.fontSize = "3px";
}