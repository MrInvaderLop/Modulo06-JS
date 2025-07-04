//Este componente mostrará una lista de tweets

import Tweet from "./Tweet";

const TweetList = ({tweets, onLike}) => {
    return (
        <div className="tweet-form">
            {tweets.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} onLike={onLike} />
            ))}
        </div>
    );
};

export default TweetList;