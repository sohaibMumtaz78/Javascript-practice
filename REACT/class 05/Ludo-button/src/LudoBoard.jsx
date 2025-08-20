import { useState } from "react"

function LudoBoard() {
    let [moves, setMoves] = useState({ Blue: 0, Yellow: 0, Red: 0, Green: 0 })


    let updateBlue = () => {
        setMoves((prevValue) => {
            return { ...prevValue, Blue: prevValue.Blue + 1 }
        })
    }

    let updateYellow = () => {
        setMoves((prevValue) => {
            return { ...prevValue, Yellow: prevValue.Yellow + 1 }
        })
    }

    let updateRed = () => {
        setMoves((prevValue) => {
            return { ...prevValue, Red: prevValue.Red + 1 }
        })
    }

    let updateGreen = () => {
        setMoves((prevValue) => {
            return {...prevValue,Green: prevValue.Green +1}
    })
}

return (
    <div>
        <h1>Game Begins</h1>
        <div className="">
            <p>Blue moves = {moves.Blue} </p>
            <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
            <p>Yellow moves = {moves.Yellow}</p>
            <button style={{ backgroundColor: "#D4CD00" }} onClick={updateYellow}>+1</button>
            <p>Red moves = {moves.Red}</p>
            <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
            <p>Green moves = {moves.Green}</p>
            <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>
        </div>
    </div>
)
}

export default LudoBoard