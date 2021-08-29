import "./NavBar.css";

const NavBar = (props) => {
  const { gameStatus, score, topScore } = props;

  return (
    <div className='nav-bar'>
      <div className='logo-container'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/game-logo-img.png'
          alt='logo'
        />
        <h3>Emoji Game</h3>
      </div>
      
      {!gameStatus ? (
        <div className='score-container'>
          <h3>Score: {score}</h3>
          <h3>Top Score: {topScore}</h3>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default NavBar;
