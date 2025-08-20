import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample-Task", id: uuidv4(), isDone: false }])
    let [newlist, setNewlist] = useState("")

    let addList = () => {
        // console.log("list added")
        // setTodos([...todos, newlist])
        setTodos((prevTask) => {
            return ([...prevTask, { task: newlist, id: uuidv4() }])
        })
        setNewlist("")
    }
    let updateTodolist = (event) => {
        // console.log(event.target.value)
        setNewlist(event.target.value)
    }

    let deleteTodolist = (id) => {
        // console.log("Lis deleted" , id )
        // let copy= todos.filter((todos)=> todos.id != id)
        // console.log(copy)
        setTodos(todos.filter((todos) => todos.id != id))

    }

    let upperCase = () => {
        setTodos((preValue) =>
            preValue.map((todo) => {
                // console.log(todo)
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                }
            }))
        // console.log(newArr)  
    }

    let signleUpperCase = (id) => {
        setTodos((preValue) =>
            preValue.map((todo) => {
                // console.log(todo)
                if (todo.id == id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase()
                    }
                }
                else {
                    return todo
                }
            }))
        // console.log(newArr)  
    }

    let markIsDone = (id) => {
        // console.log("done")
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
        )
    }

    
    let markAllAsDone = () => {
        setTodos((preValue) =>
            preValue.map((todo) => {
                // console.log(todo)
                return {
                    ...todo,
                    // task: todo.task.toUpperCase()
                    isDone : true
                }
            }))
        // console.log(newArr)  
    }

    return (
        <div>
            <input type="text" placeholder="Enter Task" value={newlist} onChange={updateTodolist} />
            <button style={{ marginLeft: "10px" }} onClick={addList}>Add Task</button>
            <br />
            <br />
            <br />
            <hr />
            <h4>Task List</h4>
            <ul>
                {
                    todos.map((todo) => {
                        return <li key={todo.id} style={{ textDecoration: todo.isDone ? "line-through" : "none", }}>
                            <span>{todo.task}</span>
                            <button style={{ backgroundColor: "Red", marginLeft: "10px", marginTop: "10px" }} onClick={() => deleteTodolist(todo.id)}>delete</button>
                            <button style={{ backgroundColor: "Red", marginLeft: "10px", marginTop: "10px" }} onClick={() => signleUpperCase(todo.id)}>UpperCase</button>
                            <button style={{ backgroundColor: "Red", marginLeft: "10px", marginTop: "10px" }} onClick={() => markIsDone(todo.id)}>Mark as done</button>
                            {/* <button onClick={signleUpperCase}>UpperCase All</button> */}

                        </li>
                    })
                }
            </ul>
            <br />
            <button onClick={upperCase}>UpperCase All</button>
            <button onClick={markAllAsDone}>Mark all as done</button>
            {/* <button onClick={markAllAsDone} style={isDone ? {textDecoration: "line=through"}: ""}>Mark all as done</button> */}
        </div>
    )
}

export default TodoList;