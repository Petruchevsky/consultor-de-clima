import React, { useContext } from 'react'
import useClima from '../hooks/useClima'


function Resultado() {

  const { resultado } = useClima();
  const { name, main, weather } = resultado;
  const { temp, tem_min, temp_max, humidity, feels_like } = main;
  const { icon } = weather[0];
  const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
  

  console.log(resultado)
  console.log(iconUrl)

  return (
    <div className='contenedor clima animate__animated animate__zoomInDown'>
      <h2 className='text-4xl'>{ name }</h2>
      <p className="flex justify-center">
        { (main.temp - 273.15).toFixed(1) + ' °C'} 
        <img className="h-20 mb-5"src={ iconUrl } alt="Icono del Clima" />
      </p>
      <p>Temperatura Mínima: { (main.temp_min - 273.15).toFixed(1) + ' °C' }</p>
      <p>Temperatura Máxima: { (main.temp_max - 273.15).toFixed(1) + ' °C' }</p>
      <p>Sensación Térmica: { (main.feels_like - 273.15).toFixed(1) + ' °C' }</p>
      <p>Humedad Ambiental: { (main.humidity).toFixed(0) + ' %' }</p>
      
    </div>
  )
}

export default Resultado
