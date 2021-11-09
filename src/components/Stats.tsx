import { ReactElement } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import timer from "src/utils/timer"

import "../styles/Stats.css"

export default function Stats(): ReactElement {
 const value = useSelector((state: RootState) => state.stats.value)

 //EXECUTING TIMER UTILITY
 timer(15)

 return (
  <>
   <div className="stats">
    {value}
    <div className="timer-title">TIMER</div>
    <div id="timer"></div>
   </div>
  </>
 )
}
