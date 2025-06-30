import React from "react";
import './css/home.css'

export default function Home(){
    return( 
        <>
            <h1>Hospital San José</h1>
            <h2>Gestor de citas</h2>

            <section class="info">
                <div>
                    <h3>¿Quienes somos?</h3>
                    <p>En Hospital San José brindamos atención médica integral con calidez, 
                        tecnología avanzada y especialistas comprometidos con tu bienestar, salud y recuperación, cuidando siempre tu vida con profesionalismo y humanidad.</p>
                </div>
                <div>
                    <h3>Contáctanos</h3>
                    <ul>
                        <li><b>Ubicación:</b> Av. Reforma #1234, Col. Centro, Ciudad de México, CP 06000</li>
                        <li><b>Telefono:</b> (55) 1234-5678</li>
                        <li><b>Correo:</b> contacto@hospital.mx</li>
                    </ul>
                </div>
            </section>
        </>
    )
} 