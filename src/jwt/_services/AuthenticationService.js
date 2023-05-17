import { BehaviorSubject } from 'rxjs';
import { lazy } from "react";
import axios from "axios";
import  {API_BASE_URL, MENU} from '../../redux/constants/index';

import { HandleResponse } from '../_helpers';
import Dashboard from '../../views/dashboard/Dashboard';

//const CurrentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const AuthenticationService = {
    login,
    logout,
};

async function  login(username, password) {
    return await axios.post(API_BASE_URL +"Admin/Login", {
        email: username,
        password:password,
        rememberme:true
      })
      .then( response =>{
        debugger;
        if(response.data.status == true)
        {
          response.data.data.forEach(element => {
            
            if(element.child != null)
            {
              var item = {
                collapse: true,
                path: element.path,
                name: element.name,
                icon: element.icon,
                state: element.id,
                component: lazy(() => import(element.component)),
                isMenu: element.isMenu,
                child: []
              };
              element.child.forEach(element => {
                item.child.push({
                    path: element.path,
                    name: element.name,
                    icon: element.icon,
                    component: lazy(() => import(element.component)),
                    isMenu: element.isMenu
                });
              });
              MENU.push(item);
            }
            else
            {
              MENU.push({
                path: element.path,
                name: element.name,
                icon: element.icon,
                state: element.id,
                component: lazy(() => import(element.component)),
                isMenu: element.isMenu
              });
            }
          });
          
          console.log(MENU);
          localStorage.setItem("nkenne_menu", JSON.stringify(MENU));
          localStorage.setItem("nkenne_user", JSON.stringify(response.data));
          return response.data;
        }
        else{
          alert(response.data.message);
        }
      });
  }



function logout() {
    // remove user from local storage to log user out
    localStorage.setItem(null);
    debugger;
    //CurrentUserSubject.next(null);
}
