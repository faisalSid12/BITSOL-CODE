import { lazy } from "react";
import  {API_BASE_URL, MENU} from '../redux/constants/index';

// const Dashboard = lazy(() => import("../views/dashboard/Dashboard"));
// const AppUsers = lazy(() => import("../views/appUser/AppUsers"));
// const CustomerUsers =lazy(() => import ("../views/customer/Customer"))
// const CustomerDetails =lazy(() => import ("../views/customer/CustomerDetails"))

// const DriverCustomer =lazy(() => import ("../views/drivers/Driver"))
// const DriverDetails =lazy(() => import ("../views/drivers/DriverDetails"))
// const Orders =lazy(() => import ("../views/orders/Orders"))
// const Earnings =lazy(() => import ("../views/earnings/Earnings"))
const Student =lazy(() => import ("../views/student/Student"))

const AddStudent =lazy(() => import ("../views/student/AddStudent"))
const UpdateStudent =lazy(() => import ("../views/student/UpdateStudent"))

// const Roles = lazy(() => import("../views/system-management/roles-management/Roles"));
// const AddRole = lazy(() => import("../views/system-management/roles-management/AddRole"));
// const UpdateRole = lazy(() => import("../views/system-management/roles-management/UpdateRole"));
// const EditGroup = lazy(() => import("../views/system-management/roles-management/EditGroup"));
// const AddNewUser =lazy(() => import ("../views/system-management/users-management/AddNewUser"))
// const UserDetails =lazy(() => import ("../views/system-management/users-management/UserDetails"))
// const UpdateUser =lazy(() => import ("../views/system-management/users-management/UpdateUser"))
// const AssignedGroup =lazy(() => import ("../views/system-management/users-management/AssignedGroup"))
// const Users = lazy(() => import("../views/system-management/users-management/Users"));

 var ThemeRoutes = [
     {
        path: "/student",
        name: "USER",
        icon: "mdi mdi-view-dashboard",
        component:Student,
        isMenu: 1
  },
  {
    path: "/addStudent",
    component: AddStudent,
    isMenu: 0
  },
  {
    path: "/updateStudent/:id",
    component: UpdateStudent,
    isMenu: 0
  },

];

// var ThemeRoutes = [
//   {
//     path: "/dashboard",
//     name: "DASHBOARD",
//     icon: "mdi mdi-view-dashboard",
//     component: Dashboard,
//     isMenu: 1
//   },

//   {
//     path: "/customerUsers",
//     name: "CUSTOMERS ",
//     icon: "fa fa-user",
//     component: CustomerUsers,
//     isMenu: 1
//   },
//   {
//     path: "/driverCustomer",
//     name: "DRIVERS ",
//     icon: "fa fa-car",
//     component: DriverCustomer,
//     isMenu: 1
//   },
//   {
//     path: "/orders",
//     name: "ORDERS ",
//     icon: "fa fa-user",
//     component: Orders,
//     isMenu: 1
//   },
//   {
//     path: "/earnings",
//     name: "EARNINGS ",
//     icon: "fa fa-user",
//     component: Earnings,
//     isMenu: 1
//   },
//   {
//     collapse: true,
//     path: "/form-layouts",
//     name: "SYSTEM CONFIG",
//     state: "formlayoutPages",
//     icon: "mdi mdi-cards-outline",
//     isMenu: 1,
//     child: [
     
//       {
//         path: "/roles",
//         name: "ROLES MANAGEMENT",
//         icon: "mdi mdi-priority-low",
//         component: Roles,
//       },
//       {
//         path: "/users",
//         name: "USERS MANAGEMENT",
//         icon: "mdi mdi-priority-low",
//         component: Users,
//       },
//     ],
//   },

//   {
//     path: "/addRole",
//     component: AddRole,
//     isMenu: 0
//   },
 
//   {
//     path: "/updateRole/:id",
//     component: UpdateRole,
//     isMenu: 0
//   },
//   {
//     path: "/editGroup/:id",
//     component: EditGroup,
//     isMenu: 0
//   },
//   {
//     path: "/addNewUser",
//     component: AddNewUser,
//     isMenu: 0
//   },
//   {
//     path: "/userDetails/:id",
//     component: UserDetails,
//     isMenu: 0
//   },  {
//     path: "/updateUser/:id",
//     component: UpdateUser,
//     isMenu: 0
//   },  {
//     path: "/assignedGroup/:id",
//     component: AssignedGroup,
//     isMenu: 0
//   },
//   {
//     path: "/driverDetails/:id",
//     component: DriverDetails,
//     isMenu: 0
//   },
//   {
//     path: "/customerDetails",
//     component: CustomerDetails,
//     isMenu: 0
//   },
// ];
export default ThemeRoutes;
