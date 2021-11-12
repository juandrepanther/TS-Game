import { ReactElement } from 'react'
import { Basket } from 'src/components/Basket'
import Board from 'src/components/Board'
import Stats from 'src/components/Stats'




export default function Game(): ReactElement {
    return (
        <>
          <Board />
          <Basket />
          <Stats />  
        </>
    )
}
