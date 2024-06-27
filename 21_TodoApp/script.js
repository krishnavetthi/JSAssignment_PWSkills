var todo_input = document.getElementById("todo");
var add_button = document.getElementById("add");


var list = document.createElement("ul");
document.body.appendChild(list);


add_button.addEventListener("click",event => {
    var list_item = document.createElement("li");
    list_item.innerHTML = todo_input.value;
    list.appendChild(list_item);
})
