// Este componente permitirá a los usuarios publicar nuevos tweets

import {useState} from "react";

const TweetForm = ({onAddTweet}) => {
    const [text,setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAddTweet(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="tweet-form">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}
            placeholder="¿Qué estás pensando"></input>

            <button type="submit">Tweetear</button>
        </form>
    );
};

export default TweetForm