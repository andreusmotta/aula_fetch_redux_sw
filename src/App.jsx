import { useEffect, useState } from 'react'
import './App.css'
import getPlanetas from './api/services/PlanetasService'
import { planetasGetSlice } from './api/slices/PlanetasSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const dispatch = useDispatch()

  const { response, success, error, loading } = useSelector((state) => state.get);

  const PegaPlanetas = () => {    
    // getPlanetas();

    useEffect(() => {
      dispatch(planetasGetSlice)
    }, [])
  } 

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
