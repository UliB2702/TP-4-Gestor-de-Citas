import './index.css';


function Tarjetas({onDatos, onEliminarDatos}) {
  console.log(onDatos)  

  const handleEliminar = () =>{
    onEliminarDatos()
  }
  return (
      
    <div className="cita aizquierda">
      <p>Mascota: <span>{onDatos.mascota}</span></p>
      <p>Dueño: <span>{onDatos.propietario}</span></p>
      <p>Fecha: <span>{onDatos.fecha}</span></p>
      <p>Hora: <span>{onDatos.hora}</span></p>
      <p>Sintomas: <span>{onDatos.sintomas}</span></p><button onClick={handleEliminar} className="button elimnar u-full-width">Eliminar ×</button>
    </div>
    )       

}

export default Tarjetas;