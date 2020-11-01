import React from 'react';
import "../../../../src/styles/elementsCss/thaliMenuCard.css";
import * as CgIcons from "react-icons/cg";

function ThaliMenuCard({date,course1,course2,roti,rice,salawat}) {

        return(
            <div className="thali-card-main-style">
                <div className="thali-card-date-row">
                    <h1>Thali Menu:  </h1>
                    <h2>{date}</h2>
                </div>
                <h4>{course1}</h4>
                <h4>{course2}</h4>
                <h4>{roti}</h4>
                <h4>{rice}</h4>
                <h4>{salawat}</h4>
            </div>
        )
    }


export default ThaliMenuCard;