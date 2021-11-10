import "./styles/App.css"

//TIMER IMPORTS
import timer from "./utils/timer"
import { useSelector } from "react-redux"
import { RootState } from "./redux/store/store"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Start from "./pages/Start"
import Game from "./pages/Game"
import Finish from "./pages/Finish"

function App() {
 //EXECUTING TIMER UTILITY
 const { seconds, isStarted } = useSelector((state: RootState) => state.seconds)

 isStarted && timer(seconds)

 return (
  <BrowserRouter>
   <div className="app-container">
    <Routes>
     <Route path="/DragElements" element={<Game />} />
     <Route path="/TS-Game" element={<Start />} />
     <Route path="/TS-Game-Finish" element={<Finish />} />
    </Routes>
   </div>
  </BrowserRouter>
 )
}

export default App
