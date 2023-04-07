import AppClima from "./components/AppClima"
import { ClimaProvider } from "./context/ClimaProvider"


function App() {
  

  return (
    <ClimaProvider >
      <header className="animate__animated animate__zoomInDown">
        <h1>Consultor de Clima</h1>
        <p className="text-white text-base text-center tracking-wider font-semibold">Sitio desarrollado por Moisés Berdichevsky (MEBA)
          <br />Powered by React & Context API
        </p>
      </header>
      <AppClima />
    </ClimaProvider>
  )
}

export default App
