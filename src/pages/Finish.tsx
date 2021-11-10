import { ReactElement } from "react"
import "../styles/Finish.css"

import { useSelector } from "react-redux"
import { RootState } from "src/redux/store/store"

export default function Start(): ReactElement {
 const {
  stats: { value },
  seconds: { seconds }
 } = useSelector((state: RootState) => state)
 return (
  <div className="finish-page">
   <div className="finish-page-title">Your Results:</div>
   <div className="finish-page-result">
    {`Within ${seconds} seconds you collected ${value} Yellow baby-sharks.`}
   </div>
  </div>
 )
}
