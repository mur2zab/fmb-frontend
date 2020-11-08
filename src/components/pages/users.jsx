import React, { Component } from "react";
import NavbarNew from "../common/navbarnew";
import DetailBar from "../common/detailBar";
//import MultiStepForm from "../common/multiStepForm/MultiStepForm";
import "../../styles/elementsCss/card.css";
import AddFamilyButton from "../common/elements/addFamily";
import UserTableData from "../common/elements/userTableData";
import { UserData } from "../../uidata/UserData";
import { gql, useQuery } from "@apollo/client"
import { useHistory } from 'react-router-dom';


function Users() {


 const history = useHistory();
 if (!localStorage.getItem("token")) {
   history.push('/login')
 }
  
  const fetchUsers = gql`
    query{
      userMany{
        its_id
        mobile_no
        thaali_size
        full_name
      }
    }
  `

  const { loading, error, data } = useQuery(fetchUsers);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error.......</p>

  
  return (
    <div className="home">
      <NavbarNew />
      <DetailBar />
      <AddFamilyButton />
      <div>
        <table className="table-family">
          <thead>
            <tr className="table-headers"><th>Name</th>
              <th >ITS_NO</th>
              <th >Phone No.</th>
              <th >Thali Size</th></tr>
          </thead>
          <tbody>
            
            {data && data.userMany.map((item, index) => {
            console.log("Users -> item", item)
              return (
                <UserTableData key={index} Name={item.full_name} ITS_NO={item.its_id} PhoneNo={item.mobile_no} ThaliSize={item.thaali_size} />
              )
            })}
            </tbody>
        </table>
      </div>

    </div>
  );
}

export default Users;
