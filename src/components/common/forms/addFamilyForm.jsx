import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import DetailBar from '../detailBar';
import NavbarNew from '../navbarnew';
import * as BiIcons from "react-icons/bi";
import "../../../styles/elementsCss/addFamilyForm.css";
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { filter } from 'lodash';
const jwt = require("jsonwebtoken");
const Tabletop = require("tabletop");
const _ = require("lodash")


function decodeJamaatFromJWT(){
    let token = localStorage.getItem("token");
    const decoded = jwt.verify(token, "fmbchunabhatti" );
    console.log("decodeJamaatFromJWT -> decoded", decoded.jamaat)
    return decoded.jamaat;

}


function fetchDataFromSpreadSheet(){
    let arr = [
        "https://docs.google.com/spreadsheets/d/1bJfowuw20p4-bcFW56RuWDmVMRfazJzPu1hrNwpHi_E/edit?usp=sharing",
        "https://docs.google.com/spreadsheets/d/1URI78uekJ43fpj9UtKMfcUY9NQWRn-ptiRWU1Eg9E2A/edit?usp=sharing"
    ];

    let finalData = []
    let allP = arr.map((eachUrl) => {
        return Tabletop.init( {
            key: eachUrl,
            simpleSheet: true }
          ).then(function(data, tabletop) { 
            finalData= [...finalData,...data]
          })
    })

    return Promise.all(allP).then(() =>{
        console.log("//////////",finalData);
        return finalData
    })
}

function AddFamilyForm() {
    const jamaat = decodeJamaatFromJWT()
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [mobile_no, setMobileNo] = useState('');
    const [its_id, setIts] = useState('');
    const [excelData, setExcelData] = useState([])
    const [filteredData, setFilteredData] = useState('')
    const USER_CREATE = gql`
        mutation userCreate($its_id: Float!, $full_name: String!, $mobile_no: Float!, $jamaat: MongoID, $imgurl: String, $building: String, $roomNo: String, $familyCount: Float){
        userCreateOne(record:{
            its_id: $its_id,
            full_name: $full_name,
            address:{
                building: $building,
                roomNo: $roomNo
            },
            familyCount: $familyCount,
            mobile_no: $mobile_no,
            thaali_size: MEDIUM,
            status: active,
            imgurl: $imgurl,
            jamaat: $jamaat
        }){
            record{
            its_id
            _id
            }
        }
    }
    `
    const [userCreate, { loading, data }] = useMutation(USER_CREATE);
    console.log("AddFamilyForm -> USER_CREATE", USER_CREATE)

    if (loading) return <p>Loading...</p>;
    if (data) {
        console.log(data)
    } 
    
    if(!excelData.length){
        fetchDataFromSpreadSheet().then((data) =>{
           setExcelData(data)
        })
    }

    const filterData = (event) => {
        setIts(event.target.value)

       let filteredData =  _.filter(excelData, (eachData) => {
           return eachData.HOF == event.target.value
        })

        if(filteredData.length){
            let data = filteredData[0];
            let flatDetails = data["FLAT NO."].split('/')
            let building = flatDetails[0];
            let flatNo = flatDetails[1].split('-')[0];
            data = {
                ...data,
                building,
                flatNo
            }
            console.log("filterData -> filteredData", data)
            setFilteredData(data)
        }
    }

    console.log("==============================",fullName,mobile_no)

    // const [familyCount, ] = useState('');

    return (
        <div className="add-family-form-main">
            <NavbarNew />
            <DetailBar />
            <Link to="/users" className="back-to-previous">
                <BiIcons.BiArrowBack />
                <h6>Back To Families</h6>
            </Link>
            <div className="add-family-main-form">
                <h1>User Registration</h1>
                { excelData.length ?
                    <div className="add-family-form">
                        <div className="add-family-form-div1">
                            <input type="text" placeholder="HOF ITS" name="hofits" value={its_id} onChange={event => filterData(event) }/>
                            { filteredData && 
                            <>
                                <input type="text" placeholder="Full Name" name="fullname" value={filteredData["NAME"]} onChange={event => setFullName(event.target.value)} />
                                <input type="number" placeholder="Family Members Count" defaultValue={filteredData.TOT || ""} id="" name="familysize" />
                                <input type="text" placeholder="Phone No." id="" name="phonenumber" value={filteredData["MOBILE NO."]} onChange={event => setMobileNo(event.target.value)} />
                            </>
                            }
                        </div>
                        { filteredData && 

                        <div className="add-family-form-div2">
                            <input type="text" placeholder="Sabil" name="sabil" />
                            <input type="text" placeholder="Building" defaultValue={filteredData.building} name="building" />
                            <input type="text" placeholder="FLAT No" defaultValue={filteredData.flatNo} name="flatNo" />
                            <input type="email" placeholder="Email Id" name="email" id="" />
                            <button type="submit" onClick={() => userCreate({
                                variables: {
                                    its_id: Number(its_id),
                                    full_name: filteredData["NAME"] ,
                                    building: filteredData.building,
                                    roomNo: filteredData.flatNo,
                                    familyCount: Number(filteredData.TOT) || 1,
                                    mobile_no: mobile_no ? Number(mobile_no) : Number(filteredData["MOBILE NO."]),
                                    jamaat,
                                    imgurl: "http://"+its_id+".com"
                                }
                            })}>Add Family</button>
                        </div>
                        }
                    </div>
                    :<h4>Loading....</h4>
                }
            </div>
        </div>
    )
}

export default AddFamilyForm;