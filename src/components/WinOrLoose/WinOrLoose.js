import React from 'react'
import './WinOrLoose.css';

function WinOrLoose(props) {
    const {score, resetFunc } = props;
    const playAgain = () => {
        resetFunc();
    }

    return (
        <div className="win-or-loose">
            <div className="win-or-loose_content">
                <h1>{score===12 ? "You Won" : "You Lost"}</h1>

                <div className="score-content">
                    <h2>Score</h2>
                    <h3>{score}/12</h3>
                    <button onClick={playAgain}>Play Again</button>
                </div>
            </div>   
            <div className="win-or-loose_image">
                <img src={score===12 ? "https://assets.ccbp.in/frontend/react-js/won-game-img.png" : "https://assets.ccbp.in/frontend/react-js/lose-game-img.png"} alt="final"/>
            </div>
        </div>
    )
}

export default WinOrLoose
