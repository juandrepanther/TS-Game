import  { ReactElement } from 'react'
import Button from 'src/components/Button'
import '../styles/Start.css'


export default function Start(): ReactElement {
    return (
        <div className='start-page'>
            <div className="start-page-title">Choose Timer value</div>
            <div className="btn-wrapper">
                <Button>10</Button>
                <Button>20</Button>
                <Button>30</Button>
            </div>
        </div>
    )
}
