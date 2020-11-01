import React,{Component} from 'react';
import DetailBar from '../common/detailBar';
import NavbarNew from '../common/navbarnew';

import "../../styles/elementsCss/scanning.css"

class Scanning extends Component{
    render(){
        return(
            <div>
                <NavbarNew/>
                <DetailBar/>
                <div className="scanning-form-main">
                    <h1>Scanning for Thaali Distribution</h1>
                    <div className="scanning-form">
                        <h2>Enter ITS Id:</h2>
                        <input type="text" placeholder="ITS Id" name="its_id"/>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Scanning;