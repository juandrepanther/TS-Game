import "./styles/App.css"

import Board from "./components/Board"
import Stats from "./components/Stats"
import { Basket } from "./components/Basket"

//TIMER IMPORTS
import timer from "./utils/timer"
import {useSelector } from "react-redux"
import { RootState } from "./redux/store/store"

function App() {
 //EXECUTING TIMER UTILITY
 const seconds = useSelector((state: RootState) => state.seconds.seconds)

 timer(seconds)

 return (
  <div className="app-container">
   <Board />
   <Basket />
   <Stats />
  </div>
 )
}

export default App
