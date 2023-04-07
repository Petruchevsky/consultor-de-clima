import React from 'react'
import Formulario from './Formulario'
import Resultado from './Resultado'
import useClima from '../hooks/useClima'
import Spinner from './Spinner';

function AppClima() {

  const { resultado, cargando, noResultado } = useClima();

  return (
    <div>
      <main className='dos-columnas'> 
        <Formulario />
        { 
          cargando ? <div className='flex items-center'><Spinner /></div> : resultado?.name ? <Resultado /> : noResultado ? <p>{noResultado}</p> : null
        }
      </main>
    </div>
  )
}

export default AppClima
