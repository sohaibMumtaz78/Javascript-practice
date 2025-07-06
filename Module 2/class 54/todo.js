// console.log("todoapp")

function addTask() {
    // console.log("addTask")
    var taskInput = document.getElementById("taskInput")
    // console.log("taskInput", taskInput)

    var userObj = JSON.parse(localStorage.getItem("userlogin"))
    // console.log("userObj" , userObj)
    var todoObj = {
        todo: taskInput.value,
        email: userObj.email,
    }

    // console.log("todoObj", todoObj)

    var tododata = localStorage.getItem("todos")
    // console.log("tododata" , tododata)


    if (tododata === null) {
        var arr = [todoObj]
        localStorage.setItem("todos", JSON.stringify(arr))
    } else {
        var todoArr = JSON.parse(tododata)
        todoArr.push(todoObj),
            console.log("todoArr", todoArr)
        localStorage.setItem("todos", JSON.stringify(todoArr))

    }
    renderUI()
}


function renderUI() {
    // console.log("renderUi")
    var todoData = JSON.parse(localStorage.getItem("todos"))
    // console.log("todoData", todoData)

    var parent = document.getElementById("taskList")
    // console.log("parent",parent)
    parent.innerHTML = ""

    for (var i = 0; i < todoData.length; i++) {
        // console.log(todoData[i].todo)
        parent.innerHTML += `<li>
            <h2>${todoData[i].todo}</h2>
            <div class="listbtn">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </li>`

    }
}