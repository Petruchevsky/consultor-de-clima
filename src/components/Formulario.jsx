import React, { useState } from "react";
import useClima from "../hooks/useClima";
import Alerta from "./Alerta";

function Formulario() {

  const [alerta, setAlerta] = useState('');
  const { busqueda, datosBusqueda, consultarClima } = useClima();
  const { ciudad, pais } = busqueda;

  const handleSubmit = e => {
    e.preventDefault();
    if(Object.values(busqueda).includes('')) {
      setAlerta(<Alerta/>);
      return
    }
    setAlerta('');
    consultarClima(busqueda);
  }

  return (
    <div className="contenedor animate__animated animate__zoomInDown">

      {alerta && <p>{ alerta }</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="cuidad">Ciudad</label>
          <input 
            type="text" 
            id="ciudad" 
            name="ciudad"
            onChange={datosBusqueda}
            value={ ciudad } />
        </div>

        <div className="campo">
          <label htmlFor="pais">País</label>
          <select 
            name="pais" 
            id="pais"
            onChange={datosBusqueda}
            value={ pais }>
            <option value="">Seleccione un País</option>
            <option value="DE">Alemania</option>
            <option value="AR">Argentina</option>
            <option value="CL">Chile</option>
            <option value="CN">China</option>
            <option value="CO">Colombia</option>
            <option value="ES">España</option>
            <option value="US">Estados Unidos</option>
            <option value="FR">Francia</option>
            <option value="GB">Inglaterra</option>
            <option value="JP">Japon</option>
            <option value="MX">México</option>
            <option value="RU">Rusia</option>
            <option value="PE">Perú</option>
          </select>
        </div>

        <input 
          type="submit"
          value="Consultar Clima" 
        />
      </form>
    </div>
  );
}

export default Formulario;
