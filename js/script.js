var modal = document.getElementById("myModal"),
btn = document.getElementById("myBtn"),
closee = document.getElementsByClassName("closee")[0],
hamburger = document.getElementsByClassName("open")[0];

heroo = document.getElementsByClassName("hero");


btn.onclick = function() {
    modal.style.display = "block", 
    closee.style.display = "block",
    hamburger.style.display = "none" 
    
},

// button.onclick = function() {
//     heroo.style.backgroundImage  = "linear-gradient(180deg, #2D314D 0%, rgba(45, 49, 77, 0.0001) 100%);",
// }

closee.onclick = function() {
    hamburger.style.display = "block", modal.style.display = "none", closee.style.display = "none"
}