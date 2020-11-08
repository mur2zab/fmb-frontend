import React, { Component, useState } from 'react';
import DetailBar from '../common/detailBar';
import NavbarNew from '../common/navbarnew';

import "../../styles/elementsCss/scanning.css"
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';

function Scanning({eventData}) {
    console.log("Scanning -> eventData", eventData)
    const [its_id, setIts] = useState('');

    const VALIDATE_ITS = gql`
        query Validate($its_id: Float!) {
        userOne(filter: {
            its_id: $its_id,
        }){
            its_id
            full_name
            _id
        }
    }`

    const SCANNING_USER = gql`
    mutation scanUser($event_id: String, $user_id: String) {
        userUpdateScanStatusTaken(record :{
            event_id: $event_id,
            attending: true,
            user_id: $user_id
        }){
            status
        }
    }
`



    let [validate_request ,validatedUserObj] = useLazyQuery(VALIDATE_ITS);
    let [scan_user ,scannedUserObj] = useMutation(SCANNING_USER);
    
    if (validatedUserObj.loading || scannedUserObj.loading) return <p>Loading...</p>;
    console.log("Scanning -> validatedUserObj", validatedUserObj.data)

    if(validatedUserObj.error || scannedUserObj.error) {
        console.log(validatedUserObj.error,scannedUserObj.error)
        return alert("Error occured while validating or scanning")
    }
    let data = validatedUserObj.data
    console.log(eventData)


    return (
        <div>
            <div className="scanning-form-main">
                <h1>Scanning for Thaali Distribution</h1>
                <div className="scanning-form">
                    <h2>Enter ITS Id:</h2>
                    <input type="text" placeholder="ITS Id" name="its_id" onChange={(event) => setIts(event.target.value)} />
                    {data ? <h4>{data.userOne.full_name }</h4> :
                        <button onClick={() => validate_request({ variables: { its_id: Number(its_id) } })}>Validate</button>
                    }
                    {data && <button onClick={() => scan_user({ variables: { event_id: eventData._id , user_id: data.userOne._id }})} >Submit</button>}
                    {/* {/* {window.location.reload()}} */}
                </div>
            </div>
        </div>
    )
}

export default Scanning;