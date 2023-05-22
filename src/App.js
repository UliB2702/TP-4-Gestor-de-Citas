import { useState } from "react";
import Formulario from "./Formulario";
import Tarjetas from "./Tarjetas";

const App = () => {
    const [tarjetas, setTarjetas] = useState([]);

    const agregarTarjeta = (contenido) => {
        const nuevaTarjeta = {
            id: new Date().getTime(),
            contenido: contenido,
        };
        setTarjetas([...tarjetas, nuevaTarjeta])
    };
    const elimnarTarjeta = (id) => {
        const nuevasTarjetas = tarjetas.filter((tarjeta) => tarjeta.id !== id)
        setTarjetas(nuevasTarjetas);
    }
    return (
        <div> 
            
         <Formulario onAgregarTarjeta={agregarTarjeta}/>
         <div className="one-half column">
         <h1 className="text-center mb-4">Aplicacion Tarjetas</h1>
        {tarjetas.map((tarjeta) => (
        <Tarjetas 
        key={tarjeta.id}
        onDatos={tarjeta.contenido} 
        onEliminarDatos={() => elimnarTarjeta(tarjeta.id)}
        />
        ))}
        </div>
        </div>
    )
}

export default App;