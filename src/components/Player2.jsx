export default function Player2 ({secondNum,setSecondNum}) {
    
    let diceses = [
    "https://opengameart.org/sites/default/files/side_1_pip.png",
    "https://opengameart.org/sites/default/files/side_2_pips.png",
    "https://opengameart.org/sites/default/files/side_3_pips.png",
    "https://opengameart.org/sites/default/files/side_4_pips.png",
    "https://opengameart.org/sites/default/files/side_5_pips.png",
    "https://opengameart.org/sites/default/files/side_6_pips.png"]



    const secondRandomNum = Math.floor(Math.random() * 6) + 1
    const secondDiceImage = diceses[secondRandomNum-1]
    secondNum = setSecondNum(secondRandomNum)


    return (
        <div className='dice-area'>
        <p>Player 2</p>
        <img src={secondDiceImage} />
      </div>
    )
}