import { useState } from 'react'
import './App.css'
import { getPlanetas } from './PlanetasService'
import planetasService from './PlanetasService';

function App() {

  const [listaPlanetas, setListaPlanetas] = useState([]);

  const puxaPlanetas = () => {

    getPlanetas()

    const tremPlanetas = () => {
      setListaPlanetas(getPlanetas.resposta)

      console.log(listaPlanetas)

      listaPlanetas.map(item, index) => {
        
      };

    };


  };

setTimeout(tremPlanetas, 3000)

};

return (
  <>
    <div>
      <h1>Olá mundo</h1>
    </div>
    <div>
      <button onClick={puxaPlanetas}>Pegar planetas</button>
    </div>
  </>
)
}

export default App
