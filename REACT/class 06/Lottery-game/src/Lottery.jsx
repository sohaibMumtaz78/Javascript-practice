import { useState } from "react";
import { genTicket, sum } from "./helper";
// import './Lottery.css'
import Ticket from "./Ticket";
import Button from "./Button";



function Lottery({n = 3, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let winTicket = winCondition(ticket);
    let buyTicket = () => {
        setTicket(genTicket(n))
    }
    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket} />
            {/* <div className="ticket">
            </div> */}
            {/* <br /> */}
            <Button action={buyTicket}/>
            <h3>{winTicket && "Congratulation, you won!"}</h3>
        </div>

    )
}

export default Lottery;