import React from 'react';

function UserTableData({Name,ITS_NO,PhoneNo,ThaliSize}){
    return(
        <tr  style={{border: "3px solid #2ACB60", margin:'15px', padding:'15px'}}>
            
            <th style={{border: "3px solid #2ACB60", margin:'15px', padding:'15px'}}>{Name}</th>
            <th style={{border: "3px solid #2ACB60", margin:'15px', padding:'15px'}}>{ITS_NO}</th> 
            <th style={{border: "3px solid #2ACB60", margin:'15px', padding:'15px'}}>{PhoneNo}</th>
            <th style={{border: "3px solid #2ACB60", margin:'15px', padding:'15px'}}>{ThaliSize}</th>
        </tr>
    )
}

export default UserTableData;