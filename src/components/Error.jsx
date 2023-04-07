import React from 'react'

function Error() {
  return (
    <div className='text-white text-center contenedor flex flex-col items-center animate__animated animate__zoomInDown bg-gradient-to-br from-red-700 to-black'>
      <h1 className='font-bold text-3xl mb-5'>¡Lo Sentimos!</h1>
      <p className='mb-3'>Pero, los resultados de tu búsqueda
         no han arrojado ningún Resultado...</p>
         <img 
            src="/public/img/emo-dolor-llorando-bg-white.jpg" 
            alt="Imagen de Carita Triste.jpg"
            className='rounded-full w-32' />
    </div>
  )
}

export default Error
