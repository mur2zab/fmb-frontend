import React from 'react';
import "../../../../src/styles/elementsCss/card.css";

function Card({cardName,cardCount}) {

        return(
            <div className="card-main-style">
                <h5 className="card-main-name">{cardName}</h5>
                <h1 className="card-main-count">{cardCount}</h1>
            </div>
        )
    }


export default Card;