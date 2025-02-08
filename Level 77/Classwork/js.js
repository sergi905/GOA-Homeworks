function getGrade (s1, s2, s3) {
    let average = (s1+s2+s3)/3;
    if (90 <= average && average<= 100){
        return "A";
    }
    else if (80 <= average && average<= 90){
        return "B";
    }
    else if  (70 <= average && average<= 90){
        return "C";
    }   
    else if  (60 <= average && average<= 70){
       return "D";
    }   
    else if  (0 <= average && average< 60){
        return "F";
    }
}
console.log(getGrade(91,90,89));

/////////////////////////////////////////////////////////

function points(games) {
    let points = 0;
    for (let i =0; i<games.length;i++){
        if (games[i][0]>games[i][2]){
            points += 3;
            }
        if (games[i][0]=games[i][2]){
            points += 1;
            }
    }
    
console.log(points);
}
console.log(points([
    "2:3","1:2","2:3","2:1","3:1","4:1","2:3","0:1","1:0","2:0"
]))

function ayemane(arr){
    for (let i = 0; i<arr.length;i++){
        console.log(arr[i]);
    }
}
console.log(ayemane([2,3,4,5,]));