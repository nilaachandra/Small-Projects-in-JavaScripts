const page1Content = document.querySelector(".page1-content");
const cursor = document.querySelector(".cursor");

page1Content.addEventListener("mousemove",function(mouse){
    cursor.style.left = mouse.x + "px";
    cursor.style.top = mouse.y + "px";
})