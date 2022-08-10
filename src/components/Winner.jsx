import { useState } from "react"

export default function Winner ({oneNum, secondNum}) {

    const [winner, setWinner] = useState('Who shall the winner be')


    if (oneNum > secondNum){
        setWinner('Player 1 Wins!')
    } else if (oneNum < secondNum) {
        setWinner('Player 2 Wins!')
    } else {
        setWinner('Players Tied')
    }

    return (
        <div className='wrapper'>
        <h1>Winner: {winner}</h1>
        </div>
    )
}