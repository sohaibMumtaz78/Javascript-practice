import { useState } from "react";

function Counter(){
        // let count = 0;
        // function inCount(){
        //     count += 1;
        //     console.log(count )
        // }
    // let arr = useState(0)
    // console.log(arr)

    let [count, setCountVariable] =  useState(0)
    let inCount =()=>{
        setCountVariable((currCount)=>{
            return currCount + 1;
        });
        setCountVariable((currCount)=>{
            return currCount + 1;
        });
        setCountVariable((currCount)=>{
            return currCount + 1;
        });
        console.log(setCountVariable);
    }

    return(
        <div>
            <h1>Count = {count}</h1>
            <button onClick={inCount}>Increase Count</button>
        </div>
    )
}

export default Counter;