import Player1 from './components/Player1';
import Player2 from './components/Player2';
import Winner from './components/Winner';
import { useState } from 'react'
import './App.css';

function App() {
  
  const [oneNum, setOneNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)



  return (
    <>

      <Winner player1={oneNum} player2={secondNum} />

      <Player1 plop={setOneNum} />

      <Player2 plop={setSecondNum}/>

    </>
  );
}

export default App;
