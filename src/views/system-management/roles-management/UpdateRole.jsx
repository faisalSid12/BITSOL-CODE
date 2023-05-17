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
} from 'reactstrap';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { useHistory } from 'react-router';
import SystemManagementService from '../../../jwt/_services/SystemManagementService';
import { useParams } from "react-router";

const UpdateRole = (props) => {

    const { id } = useParams();

    const [nodes, setNodes] = useState([]);
    const [permissions, setPermissions] = useState({
        checked: [],
        expanded: [],
    });
    const [role, setRole] = useState("");

    const onCheck = (e) => {
        console.log("Check", e);
        setPermissions({ ...permissions, "checked": e });
    }

    const onExpand = (e) => {
        setPermissions({ ...permissions, "expanded": e });
    }

    useEffect(() => {
        async function GetRoleById() {
            debugger;
            let response = await SystemManagementService.GetRoleById(id);
            console.log(response.data);
            setRole(response.data.role);
            setNodes(response.data.menus);
            setPermissions({ ...permissions, "checked": response.data.selected });
        }
        GetRoleById();
    }, [])

    let history = useHistory();
    const backToRoute = () => {
        history.push('/roles');
    }
    
    const submitButton = async () => {

        try {  
            var response = await SystemManagementService.UpdateRole({
                Id: id,
                Name: role,
                Menus: permissions.checked 
            });

            if (response.data.status === true) {
                console.log(response);
                backToRoute();
            }
        }
        catch (err) {
            console.log("error");
        }
    };


    return (
        <div>
            <Card>

                <CardTitle className="mb-0 p-3 border-bottom bg-light">
                    Add/Revoke Roles
                </CardTitle>


                <CardBody className="ml-1 mr-1">
                    <Row>
                        <Col md="12">
                        <FormGroup>
                            <Label>Group</Label>
                            <Input type="text" name="title" disabled={true}
                                onChange={(e) => setRole(e.target.value)}
                                value={role} >
                            </Input>
                        </FormGroup>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="12">
                        <FormGroup>
                            <Label>Roles</Label>
                            <CheckboxTree
                                nodes={nodes}
                                iconsClass="fa5"
                                checked={permissions.checked}
                                expanded={permissions.expanded}
                                onCheck={onCheck}
                                onExpand={onExpand}
                                checkModel="all"
                                icons={{
                                    parentClose: "",
                                    parentOpen: "",
                                    leaf: "",
                                }}
                            />
                        </FormGroup>
                        </Col>
                    </Row>
                    
                    <div className="d-flex justify-content-center pt-4 mb-2">
                        <button type="button" className="btn btn-primary pl-5 pr-5 mg-5" onClick={submitButton} >UPDATE </button>

                    </div>
                </CardBody>


            </Card>
        </div>

    )
}
export default UpdateRole;
