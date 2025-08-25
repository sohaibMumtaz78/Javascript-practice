import { useState } from "react"

function Form() {
    // let [fullName, setFullName] = useState("");
    // let [userName, setUserName] = useState("");
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: "",
    });

    // let handleFullName = (event) => {
    //     // console.log(event.target.value)
    //     setFullName(event.target.value)
    // }

    // let handleUserName = (event) => {
    //     // console.log(event.target.value)
    //     setUserName(event.target.value)
    // }

    let handleInputChange = (event) => {
        let fieldName = event.target.name
        let newValue = event.target.value
        // let setPasswoed = event.target.password
        // setFormData = event.target.value
        // setFormData(newValue)
        // console.log(newValue)
        // setFormData(event.target.value)

        setFormData((currData) => {
            // currData[fieldName] = newValue
            return { ...currData, [fieldName]: newValue }
        })
    }

    let handleSubmitbtn = () => {
        event.preventDefault()
        console.log(formData)
        setFormData({
            fullName: "",
            userName: "",
            password:"",
        })
    }

    return (
        <form onSubmit={handleSubmitbtn}>
            <label htmlFor="fullName">Enter Your Full Name</label>
            <br />
            <input type="text" name="fullName" id="fullName" placeholder="Enter name" value={formData.fullName} onChange={handleInputChange} />
            <br />
            <br />
            <label htmlFor="userName">Enter user Name</label>
            <br />
            <input type="text" name="userName" id="userName" placeholder="Enter user name" value={formData.userName} onChange={handleInputChange} />
            <br />
            <br /><label htmlFor="password">Enter password</label>
            <br />
            <input type="password" name="password" id="password" placeholder="Enter password" value={formData.password} onChange={handleInputChange} />
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}

export default Form