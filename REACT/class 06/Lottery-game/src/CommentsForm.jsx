import { useState } from "react"

function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: "5",
    })

    let handleInputChange = (event) => {
        // let fieldName = event.target.name
        // let setField = event.target.value
        // console.log(setField)
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value }
        })
    }

    let handleSubmitbtn = () => {
        console.log(formData)
        event.preventDefault()
        setFormData({
            username: "",
            remarks: "",
            rating: "",
        })
    }


    return (
        <div>
            <h4>Comment Form</h4>
            <form onSubmit={handleSubmitbtn}>
                <label htmlFor="fullName">Enter full name</label>
                <br />
                <br />
                <input type="text" name="username" id="fullName" placeholder="userName" value={formData.username} onChange={handleInputChange} />
                <br />
                <br />
                <label htmlFor="remarks">Enter remarks</label>
                <br />
                <br />
                <textarea name="remarks" type="text" id="remarks" placeholder="add few remarks" value={formData.remarks} onChange={handleInputChange}>Remarks</textarea>
                {/* <br /> */}
                <br />
                <label htmlFor="rating">Enter rating</label>
                <br />
                <br />
                <input type="number" name="rating" id="rating" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} />
                <br />
                <br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}

export default CommentsForm