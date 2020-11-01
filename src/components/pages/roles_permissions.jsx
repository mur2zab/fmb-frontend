import React, {Component} from 'react';
import NavbarNew from "../common/navbarnew";
import DetailBar from "../common/detailBar";

class RolesPermissions extends Component {
    render(){
        return(
            <div>
            <NavbarNew/>
                <DetailBar/>
            <h1>Roles And Permissions</h1></div>
        )
    }
}

export default RolesPermissions;
