var list = document.getElementById("courselist");
var listItems = list.getElementsByTagName('li');

const button = document.createElement("button");
button.textContent="Add Item";
document.body.appendChild(button);

const newlist = ["DAA","ML","AWS","Azure","Selenium","Spring","HTML","CSS"];

button.addEventListener("click",(event)=>{
    var item = newlist.shift()
    const newlistItem = document.createElement("li");
    if(newlist.length>0)
        {newlistItem.innerText=item;
            list.appendChild(newlistItem);
        }
    else{
        const msg = document.createElement("p");
        msg.innerText="All items have been added";
        document.body.appendChild(msg);
    }
})