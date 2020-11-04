import React from 'react';
import "../../../../src/styles/elementsCss/card.css";

function UserTableData({Name,ITS_NO,PhoneNo,ThaliSize}){
    return(
        <tr className="table-data">
            
            <th>{Name}</th>
            <th>{ITS_NO}</th> 
            <th>{PhoneNo}</th>
            <th>{ThaliSize}</th>
        </tr>
    )
}

export default UserTableData;