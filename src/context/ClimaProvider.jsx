import axios from "axios";
import { createContext, useState } from "react";
import Error from "../components/Error";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {

  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)
  const [noResultado, setNoResultado] = useState(false)

  const datosBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const consultarClima = async datos => {
    setNoResultado(false)
    setCargando(true)
    try {
      const { ciudad, pais } = datos;
      const appId = import.meta.env.VITE_API_KEY;
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
      const { data } = await axios(url);
      const { lat, lon } = data[0];
     
      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
      const { data: clima} = await axios(urlClima);
    
      setTimeout(() => {
        setResultado(clima);
        setCargando(false)
      }, 0);

    } catch (error) {
      setNoResultado(<Error />)
    } finally {
      setCargando(false)
      setResultado({})
    }
  }



  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        datosBusqueda,
        consultarClima,
        resultado,
        cargando,
        noResultado,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export { ClimaProvider };
export default ClimaContext;
