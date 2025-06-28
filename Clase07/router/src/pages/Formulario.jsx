import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Formulario(){
    const navigate = useNavigate()
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Formulario enviado.........", nombre)
        navigate("/enviado", {state: {nombre, correo}})
    }

    return(
        <section style={{textAlign:"center", marginTop:"10px"}}>
            <h1>Habla con un asesor</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={nombre} placeholder="Nombre:" onChange={(e) => setNombre(e.target.value)}/>
                <input type="text" value={correo} placeholder="Correo electronico" onChange={(e) => setCorreo(e.target.value)}/>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}