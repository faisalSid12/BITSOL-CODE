import React, { useState, useEffect } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router';
import SystemManagementService from '../../../jwt/_services/SystemManagementService';
import Swal from 'sweetalert2';

const AddRole = () => {

    const [inputField, setInputField] = useState({
        id:'',
        userId:'',
        name:''
    });

    let history = useHistory();

    const backToRoute = () => {

        history.push('roles');
    }
    const inputsHandler = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }

    const submitButton = async () => {

        console.log(inputField);
        try {
            var response = await SystemManagementService.AddRole(inputField);
            if (response.data.status === true) {
                
                Swal.fire(
                    'Roles!',
                    ''+response.data.status,
                    'success'
                )
               
                backToRoute();
            //     {
            //         console.log(response);
            //         toast.success("Patient Created Successfully !", {
            //           position: toast.POSITION.TOP_RIGHT,
            //           autoClose:2000,
            //           theme: "dark",
            //           onClose: () => backToRoute()
            //         });   
            //   }
                
            }

        }
        catch (err) {
            console.log("error", response.data);
        }
    };

    return (
        <>
           
            
                    <CardTitle >
                    Add GROUP
                    </CardTitle>
                    <Card>
                    <CardBody>
                     
                            <Row>
                                <Col md="10">
                                    <FormGroup>
                                        <Label>Name</Label>
                                        <Input type="text"
                                            name="name"
                                            onChange={inputsHandler}
                                            value={inputField.name} 
                                            />
                                    </FormGroup>
                                </Col>
                            

                            </Row>


                

                    </CardBody>


                    <CardBody className="border-top d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary" onClick={submitButton} >ADD GROUP </button>
                    </CardBody>
                    <ToastContainer /> 
                </Card>

           
        </>
    )
}


export default AddRole
