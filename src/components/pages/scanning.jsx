import React, { Component, useState } from 'react';
import DetailBar from '../common/detailBar';
import NavbarNew from '../common/navbarnew';

import "../../styles/elementsCss/scanning.css"
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';

const _ = require("lodash");

function Scanning({eventData}) {
    console.log("Scanning -> eventData", eventData)
    const [roomNo, setRoomNo] = useState('');
    const [building, setBuilding] = useState('');

    const VALIDATE_ITS = gql`
        query Validate($building: String, $roomNo: String) {
        userOne(filter: {
            address:{
                building: $building
                roomNo: $roomNo
            }
        }){
            its_id
            full_name
            thaali_size
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

    if(validatedUserObj.error){
        console.log("Error in VALIDATION",validatedUserObj.error)
        return alert("Error while validating user")
    }

    if( scannedUserObj.error) {
        console.log("Error in SCANNING",scannedUserObj.error)
        return alert("Error while scanning user")
    }
    let data = validatedUserObj.data;

    const validingUser = async () => {
        let updatedRoomNo = roomNo && roomNo.length <= 3 ? "0"+roomNo : roomNo 
        if(!roomNo || !building){
            return alert("Please fill required fields")
        }
        if(roomNo && building){
            if(building == "none")
                return alert("Please select a building")
            return await validate_request({ variables: { roomNo: updatedRoomNo, building: building } })
        }
    }

    const scanUser = async () => {
        await scan_user({ variables: { event_id: eventData._id , user_id: data.userOne._id }})  
        window.location.reload();
    }

    const onBuildingChange = (event) => {
        setBuilding(event.target.value)        
    }

    const onRoomNoChange = async (event) => {
        let roomNo = event.target.value
        let updatedRoomNo = roomNo && roomNo.length <= 3 ? "0"+roomNo : roomNo 
        await setRoomNo(updatedRoomNo)
    }
    return (
        <div>
            <div className="scanning-form-main">
                <h1>Scanning for Thaali Distribution</h1>
                <div className="scanning-form">
                <label for="building">Choose a building:</label>
                    <select id="building" required onChange={(event) => onBuildingChange(event)}>
                        <option value="none" selected>Select Building</option>
                        <option value="2A">2A</option> 
                        <option value="2B">2B</option>
                    </select>

                    <h2>Enter Room No:</h2>
                    <input type="text" placeholder="Room No." name="roomNo"  onChange={(event) => onRoomNoChange(event)} required />
                    {data && data.userOne ? 
                        <>
                            <h5>{`${building}  ${roomNo}`}</h5>
                            <h4>{data.userOne.full_name }</h4> 
                            <b><h5 className={data.userOne.thaali_size || "defaulth4"}>{data.userOne.thaali_size}</h5></b>
                        </>
                    :
                        <button onClick={() => validingUser() }>Validate</button>
                    }
                    {data && data.userOne &&
                        <div className="button-horizontal">
                            <button onClick={() => scanUser()} >Submit</button>
                            <button onClick={() => {window.location.reload()}} >Cancel</button>
                        </div>
                     }
                    {/* {/* {window.location.reload()}} */}
                </div>
            </div>
        </div>
    )
}

export default Scanning;