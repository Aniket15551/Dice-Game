import { useState } from 'react'

import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

function App() {
  const [isGameStarted, setisGamestarted] = useState(false);
   
     const  toggleGamePlay = () => {
         setisGamestarted( (prev) => !prev );
     };
   
  return (
   <div>
      <> { isGameStarted ? <GamePlay/> : <StartGame toggle = {toggleGamePlay} /> } </>
   </div>
  )
}

export default App
