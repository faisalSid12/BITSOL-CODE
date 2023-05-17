import React, { useState,useEffect } from "react";
import ReactTable from "react-table-v6";
import { Row, Col, Card, CardBody,CardTitle ,Button} from "reactstrap";
import { Link } from "react-router-dom";
// import AllergiesService from "../../../../jwt/_services/AllergiesService";
import "react-table-v6/react-table.css"
import { AiFillEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";



const AppUsers = () => {
//   const [allergiesList,setallergiesList] = useState();
 
//   useEffect(() => {
//    async function fetchGetAllergiesApi() {
//     var response = await AllergiesService.getAllergiesList()
//     setallergiesList(response.data);
//      console.log("allergiesList",response.data);
//    }
//    fetchGetAllergiesApi()
//  }, [])  


  return (
    <div>
      <Row>
        <Col md="12">
        <Card>
      
        <CardTitle className="mb-0 p-3 border-bottom bg-light">
         APP USERS
          {/* <Link className="btn btn-info  float-right mr-3" to="/allergiesForm">Add</Link> */}
        </CardTitle>
        <Col md="12" className="text-right">

        
        
        </Col>
        <CardBody>
        <ReactTable
            columns={[
              {
                Header: "Tittle",
                accessor: "medicalCondition",
              },
              {
                Header: "Videos",
                accessor: "duration",
              },
         
              {
                Header: "Actions",
                accessor: "actions",
                Cell: row => (
                    <div>
                       {<AiFillEdit color="#06328B" title="Edit Patient" cursor="pointer" fontSize="1.50em" />} 
                        &nbsp;
                        &nbsp;
                      {<AiOutlineDelete color="#DB1212" title="Delete Patient" cursor="pointer" fontSize="1.50em"  />}
                      &nbsp;
                      &nbsp;
                        {<AiOutlineEye color="green" title="View Patient" cursor="pointer" fontSize="1.50em" />}
                    </div>
                  ),
                
                sortable: false,
                filterable: false,
              }
            ]}
            defaultPageSize={10}
            showPaginationBottom={true}
            className="-striped -highlight"
            // data={ allergiesList}
            filterable
            
          />
        </CardBody>
      </Card>
     
         </Col>
      </Row>
    </div>
  );
};
export default AppUsers;