import './index.css';

const Formulario = ({ onAgregarTarjeta}) => {


    const handleSubmit = (e) => {
        e.preventDefault();
        const datos = new FormData(e.target)
        const nuevaCita = {
            mascota: datos.get("mascota"),
            propietario: datos.get("propietario"),
            fecha: datos.get("fecha"),
            hora: datos.get("hora"),
            sintomas: datos.get("sintomas"),
        }
        onAgregarTarjeta(nuevaCita)
    }

return (
    <div> <div className="one-half column">
    <h2>Crear mi Cita</h2>
    <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width"placeholder="Nombre Mascota"
             /><label>Nombre Dueño</label><input type="text" name="propietario" className="u-full-width"
             placeholder="Nombre dueño de la mascota" /><label>Fecha</label><input type="date" name="fecha"
             className="u-full-width" /><label>hora</label><input type="time" name="hora" className="u-full-width"
             /><label>Sintomas</label><textarea name="sintomas" className="u-full-width"></textarea><button type="submit"
              className="u-full-width button-primary">Agregar Cita</button></form>
  </div>
 </div>
);

}

export default Formulario;