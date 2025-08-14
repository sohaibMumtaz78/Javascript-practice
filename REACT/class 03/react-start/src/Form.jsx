function handleOnSubmit(event){
    event.preventDefault();
    console.log("Form was submit")
}

function Form(){
    return (
        <form>
            <input type="text" name="" id="" placeholder="write something"/>
            <button onClick={handleOnSubmit}>Submit</button>
        </form>
    )
}


export default Form