import './index.css';

const Formulario = ({ onAgregarTarjeta}) => {
    var fechaMinima = new Date();
    var dia = fechaMinima.getDate();
    var mes = fechaMinima.getMonth() + 1;
    var año = fechaMinima.getFullYear();
    var fecha1
    if(mes > 0 && mes < 10)
    {
        fecha1 = String( año + "-0" + mes + "-" + dia)

    }
    else if(mes > 0 && mes < 10)
    {
        fecha1 = String( año + "-" + mes + "-" + dia)

    }
    else if(mes === 13)
    {
        fecha1 = String( año + "-01-" + dia)
    }
    console.log(fecha1)

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
        <label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width"placeholder="Nombre Mascota" required
             /><label>Nombre Dueño</label><input type="text" name="propietario" className="u-full-width"
             placeholder="Nombre dueño de la mascota" required /><label>Fecha</label><input type="date" name="fecha"
             className="u-full-width" required min="2023-05-29" max="2080-12-31"/><label>Hora</label><input type="time" name="hora" className="u-full-width" required max="19:00:00" min="08:00:00"
             /><label>Sintomas</label><textarea name="sintomas" className="u-full-width" required></textarea><button type="submit"
              className="u-full-width button-primary">Agregar Cita</button></form>
  </div>
 </div>
);

}

export default Formulario;