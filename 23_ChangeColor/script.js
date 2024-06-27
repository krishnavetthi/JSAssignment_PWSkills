var button = document.getElementById("click");
button.addEventListener("click",event=>{
    const hex = '0123456789ABCDEF'; 
    let color = '#'; 
    for (let i = 0; i < 6; i++) { 
        color += hex[Math.floor(Math.random() * 16)]; 
    } 
    document.body.style.backgroundColor = color;
});