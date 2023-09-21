import "/Users/gm2academy/Store-Api/storeapi/src/Styles/Card.css";
import { Buttons } from "./Buttons.jsx";

function Card({ id, image, title, price, description, category, rating }) {


    return (
        <div className="card">
            <div className="card-image-div">
                <img className="card-image" src={image} alt="" />
            </div>
            <div className="card-title-div">
                <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-info">
                <p className="card-description">{description}</p>
            </div>
            <p className="card-price">${price}</p>
            <div className="card-buttons">
                <Buttons />
            </div>
        </div>
    );
}

export { Card };
