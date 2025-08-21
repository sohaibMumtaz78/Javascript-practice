import { useState } from 'react'
import Lottery from './Lottery'
// import TicketNum from './TicketNum'
import Ticket from './Ticket'
import './App.css'
import { sum } from './helper'

function App() {
  let winCondition = (ticket) => {
    return ticket[0] === 0
    // ticket.every((num)=> num=== ticket[0]) condition k first num k bad waly same
    // return sum(ticket) === 15
  }

  return (
    <div>
      {/* <Ticket ticket={[0, 1, 2]}/> */}
      <Lottery n={3} winCondition={winCondition} />
    </div>
  )
}

export default App
