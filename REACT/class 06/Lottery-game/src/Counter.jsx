import { useEffect, useState } from "react";

function Counter() {
    let [Countx, setCountx] = useState(0);
    let [County, setCounty] = useState(0);

    let incCrex = () => {
        setCountx((currCount) => currCount + 1)
    }
    let incCrey = () => {
        setCounty((currCount) => currCount + 1)
    }

    useEffect(function printUseState() {
        console.log("this is x-use-effect")
    }, [Countx])

    useEffect(function printUseState() {
        console.log("this is y-use-effect")
    }, [County])


    // useEffect(function printUseState() {
    //     console.log("this is use-effect")
    // })

    return (
        <div>
            <h3>counterx= {Countx}</h3>
            <button onClick={incCrex}>+1</button>
            <h3>countery= {County}</h3>
            <button onClick={incCrey}>+1</button>
        </div>
    )
}
export default Counter;