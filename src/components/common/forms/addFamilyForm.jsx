import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import DetailBar from '../detailBar';
import NavbarNew from '../navbarnew';
import * as BiIcons from "react-icons/bi";
import "../../../styles/elementsCss/addFamilyForm.css";
import { gql, useLazyQuery, useMutation } from '@apollo/client';


// jamaat: $jamaat,

function AddFamilyForm() {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [mobile_no, setMobileNo] = useState('');
    const [its_id, setIts] = useState('');
    const USER_CREATE = gql`
        mutation userCreate($its_id: Float!, $first_name: String, $last_name: String, $address: String, $mobile_no: Float!){
        userCreateOne(record:{
            its_id: $its_id,
            first_name: $first_name,
            last_name: $last_name,
            address: $address
            mobile_no: $mobile_no,
            thaali_size: MEDIUM,
            status: active,
            imgurl: "http://url.com"
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
                <div className="add-family-form">
                    <div className="add-family-form-div1">
                        <input type="text" placeholder="Full Name" name="fullname" onChange={event => setFullName(event.target.value)} />
                        <textarea type="text" placeholder="Address" name="address" onChange={event => setAddress(event.target.value)} />
                        <input type="number" placeholder="Family Members Count" id="" name="familysize" />
                        <input type="text" placeholder="Phone No." id="" name="phonenumber" onChange={event => setMobileNo(event.target.value)} />
                    </div>
                    <div className="add-family-form-div2">
                        <input type="text" placeholder="Sabil" name="sabil" />
                        <input type="text" placeholder="HOF ITS" name="hofits" onChange={event => setIts(event.target.value)} />
                        <input type="email" placeholder="Email Id" name="email" id="" />
                        <button type="submit" onClick={() => userCreate({
                            variables: {
                                its_id: Number(its_id),
                                first_name: fullName.split(' ')[0],
                                last_name: fullName.split(' ')[1],
                                address,
                                mobile_no: Number(mobile_no)
                            }
                        })}>Add Family</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFamilyForm;