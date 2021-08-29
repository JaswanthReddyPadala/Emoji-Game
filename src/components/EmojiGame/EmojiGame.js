import { Component } from "react";
import NavBar from "../NavBar/NavBar.js";
import CardGroup from "../CardGroup/CardGroup.js";
import WinOrLoose from "../WinOrLoose/WinOrLoose.js";
import { v4 as uuidv4 } from "uuid";

import "./EmojiGame.css";

const initialEmojiList = [
  {
    id: uuidv4(),
    emoji:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png",
    description: "face-with-stuck-out-tongue",
  },
  {
    id: uuidv4(),
    emoji:
      "https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png",
    description: "face-with-head-bandage",
  },
  {
    id: uuidv4(),
    emoji: "https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png",
    description: "face-with-hugs",
  },
  {
    id: uuidv4(),
    emoji: "https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png",
    description: "face-with-mask",
  },
  {
    id: uuidv4(),
    emoji:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png",
    description: "face-with-laughing",
  },
  {
    id: uuidv4(),
    emoji:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png",
    description: "face-with-laughing-with-hand-infront-mouth",
  },
  {
    id: uuidv4(),
    emoji: "https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png",
    description: "face-with-silence",
  },
  {
    id: uuidv4(),
    emoji:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png",
    description: "face-with-stuck-out-tongue-and-winking-eye",
  },
  {
    id: uuidv4(),
    emoji:
      "https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png",
    description: "grinning-face-with-sweat",
  },
  {
    id: uuidv4(),
    emoji:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png",
    description: "smiling-face-with-heart-eyes",
  },
  {
    id: uuidv4(),
    emoji: "https://assets.ccbp.in/frontend/react-js/grinning-face-img.png",
    description: "grinning-face",
  },
  {
    id: uuidv4(),
    emoji:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png",
    description: "smiling-face-with-star-eyes",
  },
];

class EmojiGame extends Component {
  state = {
    gameOver: false,
    emojiList: initialEmojiList,
    score: 0,
    topScore: 0,
    userClickList: [],
  };

  addToUserClick = (description) => {
    const userList = this.state.userClickList;
    let found = false;
    userList.forEach((each) => {
      if (each === description) {
        found = true;
      }
    });
    if (found) {
      this.setState((prevState) => {
        if (prevState.score + 1 > prevState.topScore) {
          return {
            userClickList: [],
            gameOver: true,
            topScore: prevState.score,
          };
        } else {
          return { userClickList: [], gameOver: true };
        }
      });
    } else {
      this.setState((prevState) => {
        const shuffledList = this.shuffleArray(prevState.emojiList);
        console.log(shuffledList);
        return {
          userClickList: [...prevState.userClickList, description],
          score: prevState.score + 1,
          emojiList: shuffledList,
        };
      });
    }
  };

  resetFunc = () => {
    this.setState({ gameOver: false, userClickList: [], score: 0 });
  };

  shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr
  }
  
  render() {
    const { gameOver, score, topScore, emojiList } = this.state;
    
    return (
      <div className='emoji-game'>
        <NavBar gameStatus={gameOver} score={score} topScore={topScore} />
        {gameOver ? (
          <WinOrLoose score={score} resetFunc={this.resetFunc} />
          ) : (
            <CardGroup emojiList={emojiList} addToList={this.addToUserClick} />
            )}
    {console.log(this.state.userClickList)}
      </div>
    );
  }
}

export default EmojiGame;
