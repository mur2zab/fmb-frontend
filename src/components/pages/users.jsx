import React, { Component } from "react";
import NavbarNew from "../common/navbarnew";
import DetailBar from "../common/detailBar";
//import MultiStepForm from "../common/multiStepForm/MultiStepForm";
import AddFamilyButton from "../common/elements/addFamily";
import UserTableData from "../common/elements/userTableData";
import {UserData} from "../../uidata/UserData";
import {gql} from "@apollo/client"

const users = gql`
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

class Users extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <NavbarNew/>
        <DetailBar/>
        <AddFamilyButton/>
        <div>
          <table style={{width:"95%",backgroundColor:"#fff", border: "5px solid #2ACB60", borderCollapse: "collapse", margin:'15px'}}>
            <thead>
              <tr><th style={{border: "3px solid #2ACB60", margin:'15px', padding:'15px'}}>Name</th>
              <th style={{border: "3px solid #2ACB60", margin:'15px', padding:'15px'}}>Email</th>
              <th style={{border: "3px solid #2ACB60", margin:'15px', padding:'15px'}}>Phone No.</th>
              <th style={{border: "3px solid #2ACB60", margin:'15px', padding:'15px'}}>Thali Size</th></tr>
            </thead>
            <tbody>
            {UserData.map((item,index) => {
                        return(
                            <UserTableData key={index} Name={item.name} Email={item.email} PhoneNo={item.phone} ThaliSize={item.thalisize} />
                        )
                    })}
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

export default Users;
