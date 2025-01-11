let two_d = [[1],[2],[3],[4]];
let twos = [];
function flattener(){
    for (let i=0;i<two_d.length;i++){
        for (let j =0; j<two_d[i].length;j++){
            if (two_d[i][j] % 2 === 0){
                twos.push(two_d[i][j]);
                }
        }
    }
    console.log(twos);
}
console.log(flattener());