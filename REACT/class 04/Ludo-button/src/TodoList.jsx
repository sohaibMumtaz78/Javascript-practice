import { useState } from "react";

function TodoList() {
    let [todos, setTodos] = useState(["Sample Task"])
    let [newlist , setNewlist] = useState("")

    let addList = () =>{
        // console.log("list added")
        setTodos([...todos, newlist])
        setNewlist("")
    }

    let updateTodolist= (event)=>{
        // console.log(event.target.value)
        setNewlist(event.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="Enter Task" value={newlist}  onChange={updateTodolist}/>
            <button style={{ marginLeft: "10px" }} onClick={addList}>Add Task</button>
            <br />
            <br />
            <br />
            <hr />
            <h4>Task List</h4>
            <ul>
                {
                    todos.map((todo) =>{
                       return <li>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;