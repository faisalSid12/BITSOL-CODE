import React, { useState, useEffect } from "react";
import ReactTable from "react-table-v6";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "react-table-v6/react-table.css"
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { BsKeyFill } from "react-icons/bs";
import SystemManagementService from "../../../jwt/_services/SystemManagementService";
import Swal from 'sweetalert2';



const Roles = () => {

  const [roles, setRoles] = useState([]);


  async function GetRolesData() {
    var response = await SystemManagementService.GetRoles();
    debugger;
    var arr = [];
    var i = 1;
    response.data.forEach(item => {
      arr.push({
        no: i,
        id: item.id,
        name: item.name,
        memberCount: item.memberCount
      });
      i++;
    });
    debugger;
    setRoles(arr);
  }

  useEffect(() => {
    GetRolesData();
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
        response = await SystemManagementService.DeleteRole(id);
        if (response.data.status === true) {
          GetRolesData()
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
              Manage Groups
              <Link className="btn btn-info  float-right mr-3" to="/addRole">Add</Link>
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
                    accessor: "name",
                  },
                  {
                    Header: "Member Count",
                    accessor: "memberCount",
                  },
                  {
                    Header: "Status",
                    accessor: "#",
                  },
                  // {
                  //   Header: "Actions",
                  //   accessor: "actions",
                  //   Cell: row => (
                  //       <div>
                  //            <Link  to={{
                  //             pathname: `/updateRole/${roles[row.index].id}`,
                  //           }}> {<AiFillEdit color="#06328B" title="Edit Patient" cursor="pointer" fontSize="1.50em" />}  </Link>
                  //           &nbsp;
                  //           &nbsp;
                  //         {<AiOutlineDelete color="#DB1212" title="Delete Patient" cursor="pointer" fontSize="1.50em"  />}
                  //       </div>
                  //     ),

                  //   sortable: false,
                  //   filterable: false,
                  // },
                  {
                    Header: "Actions",
                    accessor: "actions",
                    Cell: row => (

                      <div>

                        <Link to={`/updateRole/${roles[row.index].id}`}>
                          {<BsKeyFill color="rgb(148 62 62)" title="Update Group" cursor="pointer" fontSize="1.50em"
                          />} </Link>
                        &nbsp;
                        <Link to={`/editGroup/${roles[row.index].id}`}>
                          {<AiFillEdit color="#06328B" title="Edit Group" cursor="pointer" fontSize="1.50em"
                          />} </Link>
                        &nbsp;

                        {<AiOutlineDelete color="#DB1212" title="Delete Group" cursor="pointer" fontSize="1.50em" onClick={() => handleDelete(roles[row.index].id)} />}

                      </div>
                    ),

                    sortable: false,
                    filterable: false
                  }
                ]}
                defaultPageSize={10}
                showPaginationBottom={true}
                className="-striped -highlight"
                data={roles}
                filterable

              />
            </CardBody>
          </Card>

        </Col>
      </Row>
    </div>
  );
};
export default Roles;