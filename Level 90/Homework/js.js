function openOrSenior(data){
    let new_array = [];
    for (let i = 0; i<data.length;i++){
          if (data[i][0]>=55 && data[i][1]>7){
            new_array.push("Senior");
          }
          else {
            new_array.push("Open");
          }
    }
    return new_array;
}


function driver(data) {
    let name = data[0];
    let mid_name = data[1];
    let last_name = data[2];
    let date = data[3].split("-");
    let month = date[1];
    let day = date[0];
    let year = date[2];
    let gender = data[data.length - 1];
    let arbitrary = "9";

   
    while (last_name.length<5){
        last_name += "9";
    }
    if (mid_name.length == 0){
        mid_name += "9";
    }



    if (month == "Jan"){
        month = month.replace("Jan", "01");
    }
    if (month == "Feb"){
        month = month.replace("Feb", "02");
    }
    if (month == "Mar"){
        month = month.replace("Mar", "03");
    }
    if (month == "Apr"){
        month = month.replace("Apr", "04");
    }
    if (month == "May"){
        month = month.replace("May", "05");
    }
    if (month == "Jun"){
        month = month.replace("Jun", "06");
    }
    if (month == "Jul"){
        month = month.replace("Jul", "07");
    }
    if (month == "Aug"){
        month = month.replace("Aug", "08");
    }
    if (month == "September"){
        month = month.replace("September", "09");
    }
    if (month == "Oct"){
        month = month.replace("Oct", "10");
    }
    if (month == "Nov"){
        month = month.replace("Nov", "11");
    }
    if (month == "Dec"){
        month = month.replace("Dec", "12");
    }
    
     


  if (gender == "F"){
              month = (Number(month) + 5).toString();
           if (month.length === 1) {
                month = "0" + month; 
             }
          }

    
    let license_plate = [];
    
    license_plate.push(last_name.slice(0,5).toUpperCase(),year[2],month,day,year[3],name[0],mid_name[0],arbitrary,"AA");
    license_plate = license_plate.join("");
  
    
    return license_plate;
}

function calculator(a,b,sign){
  
    if (sign == "+" && typeof a == "number" && typeof b == "number"){
      return a+b;
    }
    if (sign == "-" && typeof a == "number" && typeof b == "number"){
      return a-b;
    }
    if (sign == "/" && typeof a == "number" && typeof b == "number" ){
      return a/b;
    }
    if (sign == "*" && typeof a == "number" && typeof b == "number"){
      return a*b;
    }
    else {
      return "unknown value";
    }
  }