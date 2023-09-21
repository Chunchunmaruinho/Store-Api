import "/Users/gm2academy/Store-Api/storeapi/src/Styles/Options.css";


function Options() {

    return (
        <div className="card-options-div">
            <button type="button" className="optionButton">
                <span className="buttonText">Filtrar y ordenar</span>
                <span className="buttonImg" role="img">
                    <svg>

                    </svg>
                </span>
            </button>

            <select name="optionCards" id="cardsFormat">
                <option value="0">Card</option>
                <option value="1">Table</option>
            </select>
        </div>

    )
}


export { Options }

