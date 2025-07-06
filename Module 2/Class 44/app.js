// console.log("Hello World");

var liparent = document.getElementById("liparent");

function createNote(){
    var input =document.getElementById("input");
// console.log(input)
    if(!input.value){
        alert("Input Value")
        return;
    }


var liElement =document.createElement("li");
liElement.innerHTML =input.value;

var editbtn = document.createElement("button");
editbtn.innerHTML = "Edit";
editbtn.innerHTML = "Edit";
editbtn.setAttribute("onclick" , "edittodo(this)")

var deletebtn = document.createElement("button");
deletebtn.innerHTML = "Delete";
deletebtn.setAttribute("onclick" , "deletetodo(this)");

liElement.append(editbtn);
liElement.append(deletebtn);

liparent.append(liElement);
input.value = "";

}

function edittodo(editbtn){
    var editvalue  = prompt(
        "Enter Value",
    editbtn.previousSibling.textContent);

    if(!editvalue){
        prompt("Enter value please")
        return;
    }

    editbtn.previousSibling.textContent = editvalue;
}

function deletetodo(deletebtn){
    deletebtn.parentNode.remove();  
}

function DeleteAll(){
    liparent.innerHTML = "";
}