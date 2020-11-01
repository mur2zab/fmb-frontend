import React, { Component } from "react";
import NavbarNew from "../common/navbarnew";
import DetailBar from "../common/detailBar";
//import MultiStepForm from "../common/multiStepForm/MultiStepForm";
import AddFamilyButton from "../common/elements/addFamily";
import UserTableData from "../common/elements/userTableData";
import { UserData } from "../../uidata/UserData";
import { gql, useQuery } from "@apollo/client"

function Users() {
  const fetchUsers = gql`
    query{
      userMany{
        its_id
        mobile_no
        thaali_size
        first_name
        last_name
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
        <table style={{ width: "95%", backgroundColor: "#fff", border: "5px solid #2ACB60", borderCollapse: "collapse", margin: '15px' }}>
          <thead>
            <tr><th style={{ border: "3px solid #2ACB60", margin: '15px', padding: '15px' }}>Name</th>
              <th style={{ border: "3px solid #2ACB60", margin: '15px', padding: '15px' }}>ITS_NO</th>
              <th style={{ border: "3px solid #2ACB60", margin: '15px', padding: '15px' }}>Phone No.</th>
              <th style={{ border: "3px solid #2ACB60", margin: '15px', padding: '15px' }}>Thali Size</th></tr>
          </thead>
          <tbody>
            {data && data.userMany.map((item, index) => {
            console.log("Users -> item", item)
              return (
                <UserTableData key={index} Name={item.first_name +' '+ item.last_name} ITS_NO={item.its_id} PhoneNo={item.mobile_no} ThaliSize={item.thaali_size} />
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Users;
