// script.js
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


let btn = document.getElementById("clickbtn");
let hiddenContent = document.getElementById("hiddenCont");

btn.addEventListener("click", function(event) {
    event.stopPropagation();
    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
    } else {
        hiddenContent.style.display = "none";
    }
});
document.addEventListener("click", function() {
    if (hiddenContent.style.display === "block") {
        hiddenContent.style.display = "none";
    }
});
hiddenContent.addEventListener("click", function(event) {
    event.stopPropagation();
});















































// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Form submitted!');
// });

