import "../styles/Button.css"
import { useDispatch } from "react-redux"
import { addSeconds, changeIsStarted } from "src/redux/reducers/secReducer"
import { Link } from "react-router-dom"

type Props = {
 children: string
}

const Button: React.FC<Props> = ({ children }) => {
 const seconds = parseInt(children)
 const dispatch = useDispatch()

 const setTimerHandler = () => {
  dispatch(addSeconds(seconds))
  dispatch(changeIsStarted(true))
 }

 return (
  <Link
   onClick={() => setTimerHandler()}
   className="button-6"
   to={"/DragElements"}
  >{`${seconds} seconds`}</Link>
 )
}

export default Button
