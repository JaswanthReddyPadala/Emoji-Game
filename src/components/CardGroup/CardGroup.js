import "./CardGroup.css";

const CardGroup = (props) => {
  const { emojiList, addToList } = props;
    const handleClick = (event) => {
        console.log(event.target.alt);
        addToList(event.target.alt);
    }
  return (
    <div className='card-group'>
      {emojiList.map((eachEmoji) => {
        return (
          <div className='card-item' key={eachEmoji.id} onClick={handleClick}
          >
            <img
              src={eachEmoji.emoji}
              alt={eachEmoji.description}
              id={eachEmoji.id}
            ></img>
          </div>
        );
      })}
    </div>
  );
};

export default CardGroup;
