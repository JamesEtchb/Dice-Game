export default function Player1 ({oneNum, setOneNum}) {
    
    let diceses = [
    "https://opengameart.org/sites/default/files/side_1_pip.png",
    "https://opengameart.org/sites/default/files/side_2_pips.png",
    "https://opengameart.org/sites/default/files/side_3_pips.png",
    "https://opengameart.org/sites/default/files/side_4_pips.png",
    "https://opengameart.org/sites/default/files/side_5_pips.png",
    "https://opengameart.org/sites/default/files/side_6_pips.png"]


    const firstRandomNum = Math.floor(Math.random() * 6) + 1
    const firstDiceImage = diceses[firstRandomNum-1]
    oneNum = setOneNum(firstRandomNum)

    return (
        <div className='dice-area'>
        <p>Player 1</p>
        <img src={firstDiceImage} />
      </div>
    )
}