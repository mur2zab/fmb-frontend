import React, { Component, useState } from "react";
//import smallGirl from "../img/kettle-bg.jpg";
import "../../../src/styles/home.css";
import Card from "../common/elements/card";
import ThaliMenuCard from "../common/elements/thaliMenuCard";
import NavbarNew from "../common/navbarnew";
import DetailBar from "../common/detailBar";
import { useHistory } from 'react-router-dom';
import {gql, useQuery} from "@apollo/client"
import Scanning from "./scanning";



function Dashboard() {
  const history = useHistory();
  if (!localStorage.getItem("token")) {
    history.push('/login')
  }

  const fetchUsers = gql`
  query {
  userCount(filter:{status:active})
}
`

// const FetchActualCount = gql`
// query {
//   fmb_event(filter: { date: "dateHere" }) {
//     date
//     menu {
//       dish1
//       dish2
//       roti
//       chawal
//     }
//     statistics {
//       actual_count
//     }
//   }
// }
// `
const { loading, error, data } = useQuery(fetchUsers);

if (loading) return <p>Loading...</p>;
if (error) return <p>error.......</p>

  return (
    <div className="home">
      <NavbarNew />
      <DetailBar />
      <div className="basic-data-card-row">
        <Card cardName={"Daily Thaali Count:"} cardCount={0} />
        <Card cardName={"Total User Count:"} cardCount={data ? data.userCount : 0} />
        {/* <Card cardName={"Notified Users:"} cardCount={25} /> */}
      </div>
      <div>
        <Scanning />
      </div>
      {/* <div className="big-data-card-row">
        <ThaliMenuCard date={'1/11/20'} course1={'Malvi Ghost'} course2={"Masoor Dal"} roti={"Roti"} salawat={"Gajar Halvo"} />
        <ThaliMenuCard date={'2/11/20'} course1={'Biryani'} salawat={"Dudi Halvo"} />
      </div> */}
    </div>
  );
}

export default Dashboard;
