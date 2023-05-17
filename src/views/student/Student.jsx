import React, { useState, useEffect } from "react";
import ReactTable from "react-table-v6";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "react-table-v6/react-table.css"
import { AiFillEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import Swal from 'sweetalert2';
import Spinner from '../spinner/Spinner';
import Switch from "react-bootstrap-switch";
import "react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.min.css";
import CustomerService from "../../jwt/_services/CustomerService";
import {dataTablesData} from '../student/Data';
const Student = () => {

 
  const [customers, setCustomers] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchGetCustomerApi() {
    var response = await CustomerService.GetStudents()
    setCustomers(response.data);
    console.log("Student", response.data);
  }
  useEffect(() => {
  //  fetchGetCustomerApi()
  }, [])

  async function handleDelete(id) {
    console.log(id);
    var response
    setLoading(true);
    await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      // if (result.isConfirmed) {
      //   response = await LanguageService.DeleteLanguage(id);
      //   if (response.data.status === true) {
      //     fetchGetLanguageApi()
      //     Swal.fire(
      //       'Deleted!',
      //       'Your file has been deleted.',
      //       'success'
      //     )
      //     setLoading(false);
      //   }
      //   else {
      //     Swal.fire(
      //       'Deleted!',
      //       'Internal server error',
      //       'danger'
      //     )
      //     setLoading(false);
      //   }
      // }
    })

  }

 

  return (
    <>
{
        loading ? <Spinner />:
      <div>
        <Row>
          <Col md="12">
            <Card>

              <CardTitle className="mb-0 p-3 border-bottom bg-light">
                USER 
                <Link className="btn btn-secondary  float-right mr-3" to="/addStudent">ADD USER</Link>
              </CardTitle>




              <Col md="12" className="text-right">
              </Col>



              <CardBody>
                <ReactTable
                  columns={[
                    {
                      Header: "ID",
                      accessor: "id",
                    },

                    {
                      Header: "First Name",
                      accessor: "firstname",
                    },
                    {
                      Header: "Last Name",
                      accessor: "lastname",
                    },
                    
                    {
                      Header: "Address",
                      accessor: "address",
                    },
                    {
                      Header: "Image",
                      accessor: "imagePath",
                      Cell: (row) => (
                        <img
                          src={'https://mdbootstrap.com/img/new/slides/041.jpg'}
                          alt='Image'
                          width={40}
                        />
                      )
                    },
                    
                    {
                      Header: "Action",
                      accessor: "actions",
                      Cell: row => (

                        <div>
                          <Link to={`/updateStudent/${dataTablesData[row.index].id}`}>
                            {<AiOutlineEye color="green" title="Edit Language" cursor="pointer" fontSize="1.50em"
                            />} </Link>
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          &nbsp;
                              &nbsp;
                              {<AiOutlineDelete color="#DB1212" title="Delete Language" cursor="pointer" fontSize="1.50em" onClick={() => handleDelete(1)} />}
                              &nbsp;
                        </div>
                      ),

                      sortable: false,
                      filterable: false,
                    }
                  ]}
                  defaultPageSize={10}
                  showPaginationBottom={true}
                  className="-striped -highlight"
                  data={dataTablesData}
                  filterable
                />
              </CardBody>   
            </Card>

          </Col>
        </Row>
      </div>

}
    </>
  );

};


export default Student;