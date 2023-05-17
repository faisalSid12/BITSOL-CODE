import React, { useState,useEffect } from "react";
import ReactTable from "react-table-v6";
import { Link } from "react-router-dom";
import "react-table-v6/react-table.css"
import { AiFillEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import SystemManagementService from "../../../jwt/_services/SystemManagementService";
import { Row, Col, Card, CardBody,CardTitle ,Button} from "reactstrap";
import Swal from 'sweetalert2';


const Users = () => {
  const [users, setUsers] = useState();

  async function GetUsersData()
  {
    var response = await SystemManagementService.GetAllUsers();
    var arr = [];
    var i = 1;
    response.data.forEach(item => {
      arr.push({
        no: i,
        id:  item.id,
        full_name: (item.firstName?item.firstName:"") +" "+(item.middleName?item.middleName:"") + " "+(item.lastName?item.lastName:""),
        username: item.userName,
        email: item.email,
        role: item.role? item.role.name:"",
      });
      i++;
    });
    setUsers(arr);
  }

  useEffect(() => {
    GetUsersData();
  }, [])

  async function handleDelete(id) {
    debugger
    var response
    await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        debugger
        response = await SystemManagementService.DeleteUser(id);
        if (response.data.status === true) {
          GetUsersData()
          Swal.fire(
            'Success!',
            response.data.message,
            'success'
          )
        }
        else {
          Swal.fire(
            'Problem!',
            response.data.status,
            'danger'
          )
        }
      }
    })

  }

  return (
    <div>
      <Row>
        <Col md="12">
        <Card>
      
        <CardTitle className="mb-0 p-3 border-bottom bg-light">
         Users
          <Link className="btn btn-info  float-right mr-3" to="/addNewUser">Add</Link>
        </CardTitle>
        <Col md="12" className="text-right">

        </Col>
        <CardBody>
        <ReactTable
            columns={[
              {
                Header: "No.",
                accessor: "no",
              },
              {
                Header: "Name",
                accessor: "full_name",
              },
              {
                Header: "Email",
                accessor: "email",
              },
              {
                Header: "Group",
                accessor: "role",
              },
              {
                Header: "Status",
                accessor: "status",
              },
              {
                Header: "Actions",
                accessor: "actions",
                Cell: row => (
                  <div>
                       <Link to={`/assignedGroup/${users[row.index].id}`}>
                        {<BsLink45Deg color="#06328B" title="Assigned Group" cursor="pointer" fontSize="1.50em"
                        />} </Link>
                      &nbsp;

                      <Link to={`/userDetails/${users[row.index].id}`}>
                        {<AiOutlineEye color="green" title="User Detail" cursor="pointer" fontSize="1.50em"
                        />} </Link>
                      &nbsp;

                      <Link to={`/updateUser/${users[row.index].id}`}>
                        {<AiFillEdit color="#06328B" title="Edit User" cursor="pointer" fontSize="1.50em"
                        />} </Link>
                      &nbsp;

                      {<AiOutlineDelete color="#DB1212" title="Delete User" cursor="pointer" fontSize="1.50em" onClick={() => handleDelete(users[row.index].id)} />}

                    </div>
                  ),

                sortable: false,
                filterable: false
              }
            ]}
            defaultPageSize={10}
            showPaginationBottom={true}
            className="-striped -highlight"
            data={ users}
            filterable
            
          />
        </CardBody>
      </Card>
     
         </Col>
      </Row>
    </div>
  );
};
export default Users;