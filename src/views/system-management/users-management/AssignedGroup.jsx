import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    FormGroup,
    Input,
    Label,
    Form
} from 'reactstrap';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import SystemManagementService from '../../../jwt/_services/SystemManagementService';
const AssignedGroup = () => {

    const {id} = useParams();

    const [roleList, setRoleList] = useState([]);
    let history = useHistory();


    // Get Langauge Api
    async function GetROleApi() {
        var response = await SystemManagementService.GetRoles()
        setRoleList(response.data);
        console.log("roleList", response.data);
    }

    useEffect(() => {
        GetROleApi()
    }, [])

    const backToRoute = () => {
        history.push('/users');
    }



    const [inputField, setInputField] = useState(
        {
            id: '',
            roleId:'',
     
        });

    const inputsHandler = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }

    const submitButton = async () => {

        console.log(id);

        debugger
        try {
            var response = await SystemManagementService.AssignRole(id, inputField);
            if (response.data.status === true) {
                Swal.fire(
                    'Assigned!',
                    '' + response.data.status,
                    'success'
                )
                backToRoute();

            }

        }
        catch (err) {
            console.log("error", err);
        }
    };
    return (
        <>
                <div>
                    <Card>

                        <CardTitle className="mb-0 p-3 border-bottom bg-light">
                            ASSIGNED GROUP
                        </CardTitle>
                        <br />
                        <Form>

                            <CardBody className="ml-5 mr-5">
                              
                                <Row>
                                    <Col md="2">
                                        <p>Roles</p>
                                    </Col>
                                    <Col md="10">
                                        <FormGroup>
                                            <Input type="select" name="roleId"
                                                onChange={inputsHandler}
                                                defaultValue={inputField.roleId}
                                            >
                                                <option value="">Select Role</option>
                                                {
                                                    roleList.map((item, index) => {
                                                        return <option key={index} value={item.id}>{item.name}</option>
                                                    })
                                                }
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <div className="d-flex justify-content-center pt-5 mb-5">
                                    <button type="button" className="btn btn-secondary pl-5 pr-5 mg-5" onClick={submitButton} >ASSIGNED  </button>

                                </div>
                            </CardBody>
                        </Form>

                    </Card>
                </div>
            
        </>
    )
}
export default AssignedGroup;
