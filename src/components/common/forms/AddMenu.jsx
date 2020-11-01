import React from 'react';
import DetailBar from '../detailBar';
import NavbarNew from '../navbarnew';
import "../../../styles/elementsCss/calendar.css";

function AddMenu(){
    return(
        <div>
        <NavbarNew/>
        <DetailBar/>
        <div className="add-family-main-form">
        <h1>User Registration</h1>
            <div className="add-family-form">
                <div className="add-family-form-div1">
                    <input type="text" placeholder="Course 1" name="course1" />
                    <input type="text" placeholder="Course 2" name="course2"/>
                    <span style={{display:"flex",justifyContent:"flex-start"}}><input type="checkbox" style={{marginLeft:"5px",marginBottom:"10px",color:"#2ACB60"}} name="roti" value="roti" /><label style={{marginLeft:"5px",marginBottom:"10px",}} for="roti">Roti</label></span>
                    <span style={{display:"flex",justifyContent:"flex-start"}}><input type="checkbox" style={{marginLeft:"5px",marginBottom:"10px",color:"#2ACB60"}} name="rice" value="rice" /><label style={{marginLeft:"5px",marginBottom:"10px",}} for="rice">Rice</label></span>
                    
                </div>
                <div className="add-family-form-div2">
                    <input type="text" placeholder="Salavat" name="salavat"/>
                    
                    <button type="submit">Add Family</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AddMenu;