import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css"
import xlogo from "./img/1.jpg"

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
            if (username.trim() === "" || password.trim() === "") {
            alert("Por favor, ingresa usuario y contraseña");
        return;
        }
        onLogin(username, password);
        navigate("/");
    };

    return (
    <div className="login-container">
        <div className="login-left">
            <img src={xlogo} alt="Twitter" />
        </div>
        <div className="login-right">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Iniciar sesión</h2>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    </div>
    );
};

export default Login;
