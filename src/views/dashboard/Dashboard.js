import React from "react";
import { Card, CardBody, Row, Col, FormGroup, Input, Label, CardTitle } from "reactstrap";
import Chart from 'react-c3-component';
import { FaBriefcaseMedical ,FaMicroscope} from 'react-icons/fa';
import { BsFillPersonFill} from 'react-icons/bs';
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css"
import { FaUserFriends} from 'react-icons/fa';
import { FaUserSlash} from 'react-icons/fa';
import { HiUserAdd} from 'react-icons/hi';

const Dashboard = () => {

  

    function filterCaseInsensitive(filter, row) {
        debugger;
        const id = filter.pivotId || filter.id;
        return (
            row[id] !== undefined && row[id] != null ?
                String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
            :
                true
        );
      }
  
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Wizard Page                                                            */
        /*--------------------------------------------------------------------------------*/
        <Row>
            <Col md="12">
                <Row>
                    <Col md={3} style={{paddingRight:"0px"}}>
                        <Card>
                            <CardBody>
                                <CardTitle className="text-uppercase">Total Customers</CardTitle>
                                <div className="d-flex align-items-center">
                                    <h2 className="mb-0 display-6"><FaUserFriends className="text-primary "/></h2>
                                    <div className="ml-auto">
                                        <h2 className="mb-0 display-7"><span className="font-weight-normal">+23</span></h2>
                                    </div>
                                </div>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col md={3} style={{paddingRight:"0px"}}>
                        <Card>
                            <CardBody>
                                <CardTitle className="text-uppercase">Total Drivers</CardTitle>
                                <div className="d-flex align-items-center">
                                    <h2 className="mb-0 display-6">< FaUserFriends className="text-primary" /></h2>
                                    <div className="ml-auto">
                                        <h2 className="mb-0 display-7"><span className="font-weight-normal">+169</span></h2>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <CardBody>
                                <CardTitle className="text-uppercase">Approve </CardTitle >
                                <div className="d-flex align-items-center">
                                    <h2 className="mb-0 display-6"><HiUserAdd className="text-success" /></h2>
                                    <div className="ml-auto">
                                        <h2 className="mb-0 display-7"><span className="font-weight-normal">+311</span></h2>
                                    </div>
                                </div>
                            </CardBody>

                        </Card>

                    </Col>
                    <Col md={3}>
                        <Card>
                            <CardBody>
                                <CardTitle className="text-uppercase">Rejected</CardTitle >
                                <div className="d-flex align-items-center">
                                    <h2 className="mb-0 display-6"><FaUserSlash className="text-danger" /></h2>
                                    <div className="ml-auto">
                                        <h2 className="mb-0 display-7"><span className="font-weight-normal">+311</span></h2>
                                    </div>
                                </div>
                            </CardBody>

                        </Card>

                    </Col>
                </Row>

                <Row>

                    <Col md="12">
                     <Card>
                                
                  <CardTitle className="mb-0 p-3 border-bottom bg-light">
                   RECENT ORDERS 
                  </CardTitle>
                  <Col md="12" className="text-right">
                  </Col>
                  <CardBody>
                    <ReactTable
                      columns={[
                        {
                          Header: "ID",
                          accessor: "no",
                        },
                        // {
                        //   Header: "Image",
                        //   accessor: "imagePath",
                        //   Cell: (row) => (
                        //     <img
                        //     //   src={BASE_URL + "images/Languages/" + language[row.index].imagePath}
                        //       alt='Image'
                        //       width={40}
                        //     />
                        //   )
                        // },
                        {
                          Header: "Customers",
                          accessor: "name",
                        },
                        {
                            Header: "Drivers",
                            accessor: "name",
                          },
                          {
                            Header: "Product",
                            accessor: "name",
                          },
                          {
                            Header: "Phone Number",
                            accessor: "name",
                          },
                    
                        {
                          Header: "Action",
                          accessor: "actions",
                          Cell: row => (

                            <div>
                              {/* <Link to={`/updateLanguage/${[row.index].id}`}>
                                {<AiFillEdit color="#06328B" title="Edit Language" cursor="pointer" fontSize="1.50em"
                                />} </Link>
                              &nbsp;
                              &nbsp;
                              {<AiOutlineDelete color="#DB1212" title="Delete Language" cursor="pointer" fontSize="1.50em"  />} */}
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
                    //   data={language}
                      filterable
                      defaultFilterMethod={(filter, row) => filterCaseInsensitive(filter, row)}

                    />
                  </CardBody>
                  </Card>   
                    </Col>
                    
                    <Col md="12">
                          <Card >
                              <CardBody>
                                {/* <ReactECharts option={option1} style={{ height: 350 }} /> */}
                              </CardBody>
                          </Card>
                      </Col>

                </Row>
            </Col>
           


        </Row>
    );
};

export default Dashboard;
