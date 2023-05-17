import React, { useState ,useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Form,
    FormGroup,
    Input,
    Label,


} from 'reactstrap';
import "react-table-v6/react-table.css";
import { useHistory } from 'react-router';
import SystemManagementService from "../../../jwt/_services/SystemManagementService";
import Swal from 'sweetalert2';
import { useParams } from "react-router";

const UpdateUser = () => {

    // const [inputField, setInputField] = useState({

    //     userName: '',
    //     password: '',
    //     firstName:'',
    //     lastName:'',
    //     middleName:'',
    //     gender:'',
    //     email:'',
    //     Image:[],
    //     isActive: true
    // });
    const { id } = useParams();

    let history = useHistory();

    const [users, setUsers] = useState({
        userName: '',
        password: '',
        firstName:'',
        lastName:'',
        middleName:'',
        gender:'',
        email:'',
        Image:[],
        isActive: true
    });

    async function fetchGetUserApi() {
        var response = await SystemManagementService.GetUserById(id);
        setUsers(response.data);
  debugger
        console.log("users", response.data);
      }
      useEffect(() => {
        fetchGetUserApi()
      }, [])
    const backToRoute = () => {
        history.push('/users');
    }
    const inputsHandler = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        users.Image = file;
    }

    const submitButton = async () => {
       
        console.log(users);
        try {
            var response = await SystemManagementService.UpdateUser(users);
            debugger;
            if (response.data.status === true) {
                    
                Swal.fire(
                    'User!',
                    ''+response.data.status,
                    'success'
                )
               
                backToRoute();
            }
        }
        catch (err) {
            debugger;
            console.log("error", err);
        }
    };

       
    return (
        <div>
            <CardTitle>  UPDATE User </CardTitle>
         

            <Col md="12">

                <CardBody className="bg-light">
                    <CardTitle className="mb-0">Login Information</CardTitle>
                </CardBody>
                <Card>
                    <CardBody>
                     
                            <Row>
                                <Col md="12">
                                <FormGroup>
                                    <Label>User Name</Label>
                                    <Input type="text"
                                        name="userName"
                                        onChange={inputsHandler}
                                        defaultValue={users.userName}
                                    />
                                </FormGroup>
                                </Col>
                               
                            </Row>
                        
                    </CardBody>
                </Card>
                <CardBody className="bg-light">
                    <CardTitle className="mb-0"> Basic Info</CardTitle>
                </CardBody>
                <Card>
                    <CardBody>
                        <Row>
                            <Col md="4">
                                <FormGroup>
                                    <Label>First Name</Label>
                                    <Input type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        onChange={inputsHandler}
                                        defaultValue={users.firstName}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Last Name</Label>
                                    <Input type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        onChange={inputsHandler}
                                        defaultValue={users.lastName}
                                    />
                                </FormGroup>


                                <FormGroup  >
                                    <Label>E-mail </Label>
                                    <Input type="text"
                                        placeholder="E-mail"
                                        name="email"
                                        onChange={inputsHandler}
                                        defaultValue={users.email}
                                    />
                                </FormGroup>


                            </Col>

                            <Col md="4">
                                <FormGroup>
                                    <Label>Middle Name</Label>
                                    <Input type="text"
                                        placeholder="First Name"
                                        name="middleName"
                                        onChange={inputsHandler}
                                        defaultValue={users.middleName}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Gender
                                    </Label>
                                    <Input type="select"
                                      placeholder="Select Gender"
                                      name="gender"
                                      onChange={inputsHandler}
                                      defaultValue={users.gender}
                                    >
                                        <option>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Input>
                                </FormGroup>

                            </Col>
                            <Col md="4">
                                <form>
                                    <div className="form-group border mt-3">
                                        <br /><br /> <br /><br /><br /><br /><br /><br />
                                    </div>
                                    <input type="file" accept="image/*" name="Image" onChange={handleFileChange}   />
                                    {/* <Webcam/> */}
                                    {/* onChange={(event) => {
                                                    users.Image = event.target.files[0];
                                                }} */}
                                </form>
                            </Col>
                        </Row>
                    </CardBody>


                </Card>
            </Col>


            <div className="d-flex justify-content-center " >
                <button type="submit" className="btn btn-info mr-3" onClick={submitButton} >UPDATE USER</button>

            </div>
        </div>

    )
}
export default UpdateUser;