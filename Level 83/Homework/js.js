function show_timemane(){
        let now = new Date();
        let time = now.toLocaleTimeString();
        time = time.split(":").join(" ");
        time = time.split("PM").join("");
        for (let i = 0; i<time.length;i++){
        }
        document.getElementById("buttonmane").innerHTML = time;  
}
setInterval(show_timemane, 1000);
show_timemane();


