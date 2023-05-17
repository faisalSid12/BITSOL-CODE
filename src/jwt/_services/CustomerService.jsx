
import axios from 'axios';
import {API_BASE_URL} from '../../redux/constants/index';

class CustomerService {

  getUserList() {
    console.log(API_BASE_URL);
  return axios.get(API_BASE_URL + 'Language/GetAllLanguage');
}


AddUser(object) {
    var bodyFormData = new FormData();
    debugger;
    bodyFormData.append("name", object.name);
    bodyFormData.append("image", object.image);
      return axios.post(API_BASE_URL +"Language/AddLanguage",bodyFormData)
  }



  
UpdateUser(object) {

var bodyFormData = new FormData();
bodyFormData.append("id", object.id);
bodyFormData.append("name", object.name);
bodyFormData.append("image", object.image);
return axios.post(API_BASE_URL +"Language/UpdateLanguage",bodyFormData);
}

getUserById(id) {
return axios.get(API_BASE_URL + `Language/GetLanguageById?id=${id}`);
}

DeleteUser(Id) {
  return axios.post(API_BASE_URL + `Language/DeleteLanguage?id=${Id}`);
}

   
  }



  // https://192.168.10.9:45456/swagger/index.html
  
 export default new CustomerService();

