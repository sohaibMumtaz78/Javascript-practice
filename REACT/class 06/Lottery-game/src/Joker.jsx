import { useEffect, useState } from "react";

function Joker() {
    let [joke, setJoke] = useState({})

    // const URL = "https://official-joke-api.appspot.com/random_joke"
    // const URL = "https://api.allorigins.win/raw?url=https://official-joke-api.appspot.com/random_joke";


    let getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonn = await response.json()
        // console.log(jsonn)
        setJoke({ setup: jsonn.setup, punchline: jsonn.punchline })
    }

    useEffect(() => {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonn = await response.json()
            console.log(jsonn)
            setJoke({ setup: jsonn.setup, punchline: jsonn.punchline })
        }
        getFirstJoke()
    },[]
    )
    return (
        <div>
            <h1>Joker</h1>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}

export default Joker