var modal = document.getElementById("myModal"),
btn = document.getElementById("myBtn"),
close = document.getElementsByClassName("closee")[0],
hamburger = document.getElementsByClassName("open")[0];

heroo = document.getElementsByClassName("hero");


btn.onclick = function() {
    modal.style.display = "block", 
    closee.style.display = "block",
    hamburger.style.display = "none" 
    
},


close.onclick = function() {
    hamburger.style.display = "block", modal.style.display = "none", close.style.display = "none"
}