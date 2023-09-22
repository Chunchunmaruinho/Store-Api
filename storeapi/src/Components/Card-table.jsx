import "../Styles/Card-table.css"


function CardTable({ image, title, description, price }) {


    return (
        <div className="card-table">
            <div className="card-table-title-div">
                <h3 className="card-table-title">{title}</h3>
            </div>
            <div className="card-table-description-div">
                <p className="card-table-description">{description}</p>
            </div>
            <div className="card-table-price-div">
                <p className="card-table-price">${price}</p>
            </div>
            <div className="card-table-image-div">
                <img className="card-table-image" src={image} alt="" />
            </div>
        </div>
    );
}


export { CardTable }

