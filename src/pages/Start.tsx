import { ReactElement } from "react"
import Button from "src/components/Button"
import "../styles/Start.css"

export default function Start(): ReactElement {
 return (
  <div className="start-page">
   <div className="start-page-title">Choose Timer value</div>
   <div className="btn-wrapper">
    <Button option="setTimer">10</Button>
    <Button option="setTimer">20</Button>
    <Button option="setTimer">30</Button>
   </div>
  </div>
 )
}
