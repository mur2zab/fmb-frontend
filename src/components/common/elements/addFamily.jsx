import React from 'react';
import * as BsIcons from "react-icons/bs";
import {IconContext} from 'react-icons';
import "../../../styles/elementsCss/addFamilyButton.css";
import { Link } from 'react-router-dom';
function AddFamilyButton(){
    return(
        <Link to="/add-family" className="add-family-button-link">        
            <div className='add-family-button'>
                <IconContext.Provider value={{color:'#2ACB60'}}>
                <BsIcons.BsFillPeopleFill className='add-family-button-icon'/>
                <h1>Add Family</h1>
                </IconContext.Provider>
            </div>
        </Link>

    )
}

export default AddFamilyButton;