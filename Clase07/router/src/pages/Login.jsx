import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === "ivanfou@example.com" && password === "admin"){
            navigate("/profile")
        } else {
            alert("Correo o Contraseña incorrectos")
        }
    }

    return(
        <section>
            <h1>Inicio de Sesión</h1>

            <form onSubmit={handleSubmit}>
                <section>
                    <input type="text"
                    placeholder="Correo Electrónico"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </section>
                <section style={{margin: "5%"}}>
                    <input type="password"
                    placeholder="Contraseña"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                </section>
                <button type="submit" style={{background: "blue"}} >Inicio de sesión</button>
            </form>
        </section>
    )
    
}