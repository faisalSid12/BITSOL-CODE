import React, { useState } from "react";
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


const AddNewUser = () => {
    const [selectedImage, setSelectedImage] = useState();

    const [inputField, setInputField] = useState({
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

    let history = useHistory();

    const backToRoute = () => {
        history.push('/users');
    }
    const inputsHandler = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        inputField.Image = file;
    }

    const submitButton = async () => {
       
        console.log(inputField);
        try {
            var response = await SystemManagementService.AddUser(inputField);
            debugger;
            if (response.data.status === true) {
                    
                Swal.fire(
                    'User!',
                    ''+response.data.message,
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

        const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 50,
        },
        preview: {
            marginTop: 10,
            marginLeft: "100px",
            display: "flex",
            flexDirection: "column",
        },
        image: { maxWidth: "50%", maxHeight: 320 },

    };
    return (
        <div>
            <CardTitle>  Add new User </CardTitle>
         

            <Col md="12">

                <CardBody className="bg-light">
                    <CardTitle className="mb-0">Login Information</CardTitle>
                </CardBody>
                <Card>
                    <CardBody>
                     
                            <Row>
                                <Col md="6">
                                <FormGroup>
                                    <Label>User Name</Label>
                                    <Input type="text"
                                        name="userName"
                                        onChange={inputsHandler}
                                        defaultValue={inputField.userName}
                                    />
                                </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Password</Label>
                                        <Input type="password"
                                           name="password"
                                           onChange={inputsHandler}
                                           defaultValue={inputField.password}
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
                                        defaultValue={inputField.firstName}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Last Name</Label>
                                    <Input type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        onChange={inputsHandler}
                                        defaultValue={inputField.lastName}
                                    />
                                </FormGroup>


                                <FormGroup  >
                                    <Label>E-mail </Label>
                                    <Input type="text"
                                        placeholder="E-mail"
                                        name="email"
                                        onChange={inputsHandler}
                                        defaultValue={inputField.email}
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
                                        defaultValue={inputField.middleName}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Gender
                                    </Label>
                                    <Input type="select"
                                      placeholder="Select Gender"
                                      name="gender"
                                      onChange={inputsHandler}
                                      defaultValue={inputField.gender}
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
                                    <input type="file" accept="image/*" name="Image" onChange={handleFileChange}  />
                                    {/* onChange={(event) => {
                                                    inputField.Image = event.target.files[0];
                                                }} */}
                                    {/* <Webcam/> */}

                                </form>
                            </Col>
                        </Row>
                    </CardBody>


                </Card>
            </Col>


            <div className="d-flex justify-content-center " >
                <button type="submit" className="btn btn-info mr-3" onClick={submitButton} >ADD USER</button>

            </div>
        </div>

    )
}
export default AddNewUser;