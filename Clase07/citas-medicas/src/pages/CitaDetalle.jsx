import { useParams, useLocation } from 'react-router-dom';
import "./css/CitaDetalle.css"

function CitaDetalle() {
  const { id } = useParams();
  const location = useLocation();
  const cita = location.state?.cita;

  return (
    <div className='detalles'>
      <h2>DETALLES DE LA CITA</h2>
      <p className='id'><b>ID de la cita:</b> {id}</p>
      {cita ? (
        <div>
          <p><b>Nombre:</b> {cita.nombre}</p>
          <p><b>Fecha:</b> {cita.fecha}</p>
        </div>
      ) : (
        <p>No se encontraron más detalles.</p>
      )}
      <p className='msj'>Nuestros colaboradores verificarán su solicitud y se comunicarán pronto.</p>
    </div>
  );
}

export default CitaDetalle;