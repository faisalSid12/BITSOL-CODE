import React, { useState } from 'react';
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
import { useHistory } from 'react-router';
import CustomerService from "../../jwt/_services/CustomerService";
import Swal from 'sweetalert2';
import Spinner from '../spinner/Spinner';

const AddStudent = () => {
    debugger
    const [inputField, setInputField] = useState({firstname: "",lastname: "",address: "",image: ""});
    const [loading,setLoading]= useState(false);
    let history = useHistory();

    const backToRoute = () => {
        history.push('/student');
    }
    
    const inputsHandler = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file)
        setInputField({
            image:file,
            name:inputField.name
        })
       
       
      };

    const submitButton = async () => {
       
        console.log(inputField);
        alert('Submit sucess fully')
        try {
            setLoading(true);
           // var response = await LanguageService.AddLanguage(inputField);
           var response =null; 
           debugger;
            if (response.data.status === true) {
                
                Swal.fire(
                    'Language!',
                    ''+response.data.message,
                    'success'
                )
               
                backToRoute();
                setLoading(false);
            }
        }
        catch (err) {
            debugger;
            console.log("error", err);
            setLoading(false);
        }
    };
    return (
        <>
        {loading ? <Spinner/>:
        
        <div>
            
            <Card>
                <CardTitle className="mb-0 p-3 border-bottom bg-light">
                    ADD USER
                </CardTitle>
                <CardBody className="ml-5 mr-5">
                    <Row>
                        <Col md="2">
                            FIRST NAME*
                        </Col>
                        <Col md="10">
                            <FormGroup>
                                <Input type="text"
                                    name="firstname"
                                    onChange={inputsHandler}
                                    value={inputField.firstname}
                                    required
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="2">
                            LAST NAME*
                        </Col>
                        <Col md="10">
                            <FormGroup>
                                <Input type="text"
                                    name="lastname"
                                    onChange={inputsHandler}
                                    value={inputField.lastname}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="2">
                            ADDRESS*
                        </Col>
                        <Col md="10">
                            <FormGroup>
                                <Input type="text"
                                    name="address"
                                    onChange={inputsHandler}
                                    value={inputField.address}
                                />
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col md="6">
                         <Label>   Image (supported types: jpg, png, jpeg, svg)</Label>
                        </Col>
                        <Col md="12">
                        <FormGroup>

                                <div className="form-group border p-1">
                                <Input type="file"accept="image/png, image/jpg, image/jpeg, image/svg"
                                    name="image"
                                    onChange={handleFileChange}
                                    defaultValue={inputField.image}

                                />

                                </div>


                                </FormGroup>
                        </Col>

                    </Row>
                    <div className="d-flex justify-content-center pt-5 mb-5">
                        <button type="button" className="btn btn-secondary pl-5 pr-5 mg-5" onClick={submitButton} >ADD </button>

                    </div>
                </CardBody>


            </Card>
        </div>
        }
        </>
    )
}
export default AddStudent;
