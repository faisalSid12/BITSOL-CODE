import React, { useState, useEffect } from "react";

import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import SystemManagementService from "../../../jwt/_services/SystemManagementService";
import { useParams } from "react-router";
import { BASE_URL } from '../../../redux/constants/index';

const UserDetails = () => {
  const { id } = useParams();

  const [users, setUsers] = useState("");

  async function fetchGetUserApi() {
    var response = await SystemManagementService.GetUserById(id);
    setUsers(response.data);
    debugger
    console.log("users", response.data);
  }
  useEffect(() => {
    fetchGetUserApi()
  }, [])

  return (
    <>
      <Card>
        <CardTitle className="mb-0 p-2 border-bottom bg-light"> USER DETAILS</CardTitle>

        <CardBody>
          <div>
            {/* <BasicInfo></BasicInfo> */}
            <Row>
              <Col sm="12">

                <div className="container mt-2 ml-0">
                  <div className="row">
                    <div className="col-md-3">
                      <h5 >User Name :&nbsp;&nbsp;&nbsp;&nbsp; <b className="p-2">{users.userName}</b> </h5>
                      <h5 className="mt-3">First Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b className="p-2">{users.firstName}</b> </h5>
                      <h5 className="mt-3" >Middle Name :<b className="p-2">{users.middleName}</b> </h5>
                      <h5 className="mt-3" >Last Name :<b className="p-2">{users.lastName}</b> </h5>
                      <h5 className="mt-3" >Gender :<b className="p-2">{users.gender}</b> </h5>

                    </div>
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-4" >
                      {/* <img src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png" className="w-50 h-75 float-right" style={{ marginRight: 80, marginTop: 20 }} /> */}
                      <img 
                              src={BASE_URL + users.image}
                              alt='image'
                              width={90}
                            />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default UserDetails
