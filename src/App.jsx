import { useEffect, useState } from 'react'
import './App.css'
import getPlanetas from './api/services/PlanetasService'
import { planetasGetSlice } from './api/slices/PlanetasSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const [listaPlanetas, setListaPlanetas] = useState([])

  const dispatch = useDispatch()

  const { resposta, sucesso, erro, carregando } = useSelector((state) => state.get);

  const PegaPlanetas = () => {
    
      dispatch(planetasGetSlice())    
    
  }   

  // useEffect(() => {
  //   if (sucesso) {
  //     setListaPlanetas(resposta);
  //   }
  // }, [resposta, sucesso])
  
  // useEffect(() => {
  //   console.log(listaPlanetas)
  // }, [listaPlanetas])

return (
  <>
    <div>
      <h1>Olá guerras nas estrelas</h1>
    </div>
    <div>
      <button onClick={PegaPlanetas}>Pegar planetas</button>
    </div>
  </>
)
}

export default App
