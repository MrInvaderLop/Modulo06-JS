import { useState, useEffect } from "react";
import TweetList from "../components/TweetList";
import TweetForm from "../components/TweetForm";
import { useNavigate } from "react-router-dom";
import "./styles/Home.css";

const Home = ({ user, logout }) => {
    const navigate = useNavigate();

    const [tweets, setTweets] = useState([]);
    const [likedTweets, setLikedTweets] = useState([]);

    useEffect(() => {
        const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
        setTweets(storedTweets);

        const storedLikedTweets = JSON.parse(localStorage.getItem("likedTweets")) || [];
        setLikedTweets(storedLikedTweets);
    }, []);

    useEffect(() => {
        localStorage.setItem("tweets", JSON.stringify(tweets));
    }, [tweets]);

    useEffect(() => {
        localStorage.setItem("likedTweets", JSON.stringify(likedTweets));
    }, [likedTweets]);

    const addTweet = (text) => {
        const newTweet = {
            id: Date.now(),
            text,
            likes: 0,
        };
        setTweets([newTweet, ...tweets]);
    };

    const likeTweet = (id) => {
        if (likedTweets.includes(id)) {
            alert("Ya diste like a este tweet.");
            return;
        }

    setTweets(
        tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
        )
    );

    setLikedTweets([...likedTweets, id]);
    };

    return (
    <div className="home-container">
        <header className="home-header">
            <h1>Twitter</h1>
            {user && (
                <div className="home-user">
                    <p>Hola, {user.username}!</p>
                    <button onClick={() => navigate("/profile")}>Ver perfil</button>
                    <button onClick={logout}>Cerrar sesión</button>
                </div>
            )}
        </header>

        <main className="home-main">
            <TweetForm onAddTweet={addTweet} />
            <TweetList tweets={tweets} onLike={likeTweet} />
        </main>
    </div>
    );
};

export default Home;

/* Falta:
Añadir el vínculo a la pagina Profile
Añadir CSS a todas las páginas para que se asemeje a X
Hacer que solo se pueda dar un like
Y enviar...

Veamos que ya tenemos:
Verificacion para que solo los registrados accedan a la página Home
Toda la lógica*/ 
