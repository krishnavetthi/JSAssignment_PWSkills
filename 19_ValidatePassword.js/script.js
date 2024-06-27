var email = document.getElementById("mail");
var password = document.getElementById("pass");
var submit = document.getElementById("button");
const para = document.createElement("p");

submit.addEventListener("click",(event)=>{
    console.log("submit on click")
    event.preventDefault();
    if(email.value.includes('@') && password.value.length>=8){
       console.log("if-loop")
       para.innerText = "Valid email and password!";
       para.style.color = "green";
       document.body.appendChild(para);
    }
    else{
       console.log("else-loop")
       para.innerText = "Invalid email or password!";
       para.style.color = "red";
       document.body.appendChild(para);   
    }
})