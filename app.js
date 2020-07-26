var list = document.getElementById("todo-content");
function create_fn() {
    var todo = document.getElementById("todo-input");
    var li = document.createElement("li");
    var liTxt = document.createTextNode(todo.value);
    li.appendChild(liTxt);
    todo.value = "";

    var editBtn = document.createElement("button");
    var editTxt = document.createTextNode("Edit");
    editBtn.setAttribute("onclick", "editTodo(this)");
    editBtn.appendChild(editTxt);
    li.appendChild(editBtn);

    var delBtn = document.createElement("button");
    var delTxt = document.createTextNode("Delete");
    delBtn.setAttribute("onclick", "delTodo(this)");
    delBtn.appendChild(delTxt);
    li.appendChild(delBtn);

    list.appendChild(li);
}

function delTodo(e) {
    e.parentNode.remove();
}

function editTodo(e) {
    var newVal = prompt("Enter New ToDo: ", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = newVal;
}

function delAll () {
    list.innerHTML = "";
}