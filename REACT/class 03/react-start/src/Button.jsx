function handleClick(event) {
    console.log("Hello World")
    console.log(event)
}

function handleMouseOver() {
    console.log("Print Parah")
}


function handleDbl(){
    console.log("Double Parah")
}


function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            {/* <p onClick={handleMouseOver}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> */}
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button onDoubleClick={handleDbl}>Double Click me!</button>
        </div>
    )
}

export default Button;