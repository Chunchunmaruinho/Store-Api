import "../Styles/Options.css";


function Options({cardsFormat, onViewChange}) {
    const hanldeViewChange= (e)=>{
        onViewChange(e.target.value);
    };


    return (
        <div className="card-options-div">
            <button type="button" className="optionButton">
                <span className="buttonText">Filtrar y ordenar</span>
                <span className="buttonImg" role="img">
                    <svg>

                    </svg>
                </span>
            </button>
            <div>
             <label htmlFor="cardsFormat">Layout</label>
            <select id="cardsFormat" value={cardsFormat} onChange={hanldeViewChange} >
                <option value="cards">Card</option>
                <option value="table">Table</option>
            </select>
            </div>
        </div>

    )
}


export { Options }

