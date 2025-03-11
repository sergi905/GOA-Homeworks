let classes = document.getElementsByClassName("classname");
let tags = document.getElementsByTagName("div");

tags[0].innerHTML = "This is the first Div";
tags[2].innerHTML = "<b>WOW</b>";
tags[2].style.fontFamily = "tahoma";

for (let i = 0;i<classes.length;i++){
    classes[i].style.BackgroundColor = "red";
}
for (let i = 0; i<10;i++){
    let id = document.getElementById(`idname${i}`);
    id.style.color = "red";
    // id.style.backgroundColor = "cyan"
    id.style.margin = "5px"
    id.style.width = "500px";
    id.style.height = "200px";
}