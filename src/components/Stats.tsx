import { ReactElement } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"

import "../styles/Stats.css"

export default function Stats(): ReactElement {
 const value = useSelector((state: RootState) => state.stats.value)

 

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
