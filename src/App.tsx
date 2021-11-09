import "./styles/App.css"

import Board from "./components/Board"
import Stats from "./components/Stats"
import { Basket } from "./components/Basket"

function App() {
 return (
  <div className="app-container">
   <Board />
   <Basket />
   <Stats />
  </div>
 )
}

export default App

