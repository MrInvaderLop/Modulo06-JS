const Tweet = ({tweet, onLike}) => {
    return (
        <div className="tweet">
            <p>{tweet.text}</p>
            <button className="like-button" onClick={() => onLike(tweet.id)}>♥ {tweet.likes}</button>
        </div>
    );
};

export default Tweet;