import React, { Component, useState } from 'react';
import DetailBar from '../common/detailBar';
import NavbarNew from '../common/navbarnew';

import "../../styles/elementsCss/scanning.css"
import {  gql, useLazyQuery } from '@apollo/client';

function Scanning() {
    const VALIDATE_ITS = gql`
        query Validate($its_id: Float!) {
        userOne(filter: {
            its_id: $its_id,
        }){
            its_id
            first_name
            last_name
        }
    }`

    const [validate_request, { loading, data }] = useLazyQuery(VALIDATE_ITS);
    const [its_id, setIts] = useState('');
    if (loading) return <p>Loading...</p>;
    console.log("Scanning -> data", data)
    return (
        <div>
            {/* <NavbarNew/>
                <DetailBar/> */}
            <div className="scanning-form-main">
                <h1>Scanning for Thaali Distribution</h1>
                <div className="scanning-form">
                    <h2>Enter ITS Id:</h2>
                    <input type="text" placeholder="ITS Id" name="its_id" onChange={(event) => setIts(event.target.value)}/>
                    {data && data.userOne ? <h4>{data.userOne.first_name +" "+ data.userOne.last_name}</h4> : 
                        <button onClick={() => validate_request({ variables: { its_id: Number(its_id) } })}>Validate</button>
                    }
                    { data && data.userOne && <button type="button">Submit</button> }
                </div>
            </div>
        </div>
    )
}

export default Scanning;