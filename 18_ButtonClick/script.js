var heading = document.getElementById("heading");
var button = document.getElementById("changebutton");
heading.innertext = "PW Skills";
button.addEventListener("click", function(event){
    event.preventDefault();
    if(heading.textContent == "The most affordable learning platform")
        heading.textContent = "PW Skills";
    else
        heading.textContent = "The most affordable learning platform"
})