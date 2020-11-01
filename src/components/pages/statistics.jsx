import React, {Component} from 'react';
import NavbarNew from "../common/navbarnew";
import DetailBar from "../common/detailBar";

class Statistics extends Component {
    render(){
        return(
            <div>
                <NavbarNew/>
                <DetailBar/>
                <h1>Statistics</h1>
            </div>
            
        )
    }
}

export default Statistics;