import '/Users/gm2academy/storeapi/src/Styles/Card.css'
import {Buttons} from './Buttons.jsx'

function Card(){



    return(
        <div className="card">
            <div className="card-image"><img src="" alt="" /></div>
            <div className="card-info">
                <h3 className='card-title'>title</h3>
                <p className='card-description'>description</p>
                <p className="card-price">price</p>
            </div>
            <div className='card-buttons'><Buttons/></div>
        </div>
    )
}


export {Card}