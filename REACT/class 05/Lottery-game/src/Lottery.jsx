import { useState } from "react";
import { genTicket, sum } from "./helper";
import './Lottery.css'



function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3));
    let winTicket = sum(ticket) === 15;
    let buyTicket=()=>{
        setTicket(genTicket(3))
    }
    return (
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={buyTicket}>Buy new ticket</button>
            <h3>{winTicket && "Congratulation, you won!"}</h3>
        </div>

    )
}

export default Lottery;