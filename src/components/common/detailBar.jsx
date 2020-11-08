import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from 'react-icons';
import "../../../src/styles/detailBar.css";
import {  gql, useQuery } from '@apollo/client';


function DetailBar() {
    const USER_DETAILS_FETCH = gql`
    query{
        userOne(filter: {its_id: 78611053 } ){
          its_id
          full_name
        }
    }
  `
    const { loading, error, data } = useQuery(USER_DETAILS_FETCH);

    if (loading) return <p>Loading...</p>;
    if (error) return <p> {JSON.stringify(error)} Error While Fetching...</p>;

    return (
        <>
        { data && data.userOne &&
            <IconContext.Provider value={{ color: '#2ACB60' }}>
                <div className="detailbar-item-text detailbar-menu-items">
                    <div className="detailbar-data">
                        <FaIcons.FaUser />
                        <p>{data.userOne.full_name}</p>
                    </div>
                    <div className="detailbar-data">
                        <FaIcons.FaUserEdit />
                        <p>Member</p>
                    </div>
                    <div className="detailbar-data">
                        <FaIcons.FaIdCard />
                        <p>{data.userOne.its_id}</p>
                    </div>
                </div>
            </IconContext.Provider>
        }
        </>
    )
}

export default DetailBar;