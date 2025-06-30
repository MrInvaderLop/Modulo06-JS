/*import React from "react";

export default function citas(){
    return( 
        <>
            <h1>Aquí puedes ver tus citas</h1>
        </>
    )
} */

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./css/Citas.css"

export default function Formulario(){
    const navigate = useNavigate()
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [fecha, setFecha] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

    const id = crypto.randomUUID(); // genera un id único

    const nuevaCita = {id, nombre, fecha};
        navigate(`/cita/${id}`, { state: { cita: nuevaCita } });
    }

    return(
        <section style={{textAlign:"center", marginTop:"10px"}}>
            <h1>Agenda tu cita</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={nombre} placeholder="Nombre:" onChange={(e) => setNombre(e.target.value)}/>
                <input type="number" value={telefono} placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)}/>
                <input type="date" value={fecha} placeholder="Fecha" onChange={(e) => setFecha(e.target.value)}/>
                <button type="submit">Solicitar</button>
            </form>
        </section>
    )
}