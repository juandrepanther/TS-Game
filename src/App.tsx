import "./styles/App.css"

import Board from "./components/Board"
import Stats from "./components/Stats"
import { Basket } from "./components/Basket"
import timer from "./utils/timer"

function App() {
 //EXECUTING TIMER UTILITY
 timer(15)

 return (
  <div className="app-container">
   <Board />
   <Basket />
   <Stats />
  </div>
 )
}

export default App
