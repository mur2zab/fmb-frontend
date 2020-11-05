import React, { Component, useState } from "react";
import "../../../src/styles/home.css";
import Card from "../common/elements/card";
//import ThaliMenuCard from "../common/elements/thaliMenuCard";
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

  const FETCH_USERS = gql`
  query {
  userCount(filter:{status:active})
}
`

const FETCH_EVENT = gql`
query fetchEvent($date: Date){
    fmb_event(filter: {
        date: $date
      }){
        _id
    }
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

let d = new Date()
let day = d.getDate() < 9 ? '0' + d.getDate() : d.getDate(); 
let date = d.getFullYear() +'-'+ ( d.getMonth() + 1 ) +'-'+ day; 
const usersObj = useQuery(FETCH_USERS);
console.log("date", date)
const eventObj = useQuery(FETCH_EVENT,{variables: {date: date}});

if (usersObj.loading || eventObj.loading) return <p>Loading...</p>;
if (usersObj.error ) return <p>error.......</p>

if(eventObj.error){
  console.log("eventObj.error", eventObj.error)
  return alert("Event not found")
}

console.log(usersObj.data, eventObj.data)

  return (
    <div className="home">
      <NavbarNew />
      <DetailBar />
      <div className="basic-data-card-row">
        <Card cardName={"Daily Thaali Count:"} cardCount={0} />
        <Card cardName={"Total User Count:"} cardCount={usersObj.data ? usersObj.data.userCount : 0} />
        {/* <Card cardName={"Notified Users:"} cardCount={25} /> */}
      </div>
      <div>
        <Scanning eventData={eventObj.data && eventObj.data.fmb_event}/>
      </div>
      {/* <div className="big-data-card-row">
        <ThaliMenuCard date={'1/11/20'} course1={'Malvi Ghost'} course2={"Masoor Dal"} roti={"Roti"} salawat={"Gajar Halvo"} />
        <ThaliMenuCard date={'2/11/20'} course1={'Biryani'} salawat={"Dudi Halvo"} />
      </div> */}
    </div>
  );
}

export default Dashboard;
