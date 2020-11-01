import React, {Component} from 'react';
import NavbarNew from "../common/navbarnew";
import DetailBar from "../common/detailBar";

class Profile extends Component {
    render(){
        return(
            <div>
            <NavbarNew/>
                <DetailBar/>
            <h1>Profile</h1>
            </div>
        )
    }
}

export default Profile;