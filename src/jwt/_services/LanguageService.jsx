import { AuthHeader, HandleResponse } from '../_helpers';
import axios from 'axios';
import {API_BASE_URL} from '../../redux/constants/index';

class LanguageService {
   
    getLanguageList() {
        console.log(API_BASE_URL);
      return axios.get(API_BASE_URL + 'Language/GetAllLanguage');
    }


    AddLanguage(object) {
        var bodyFormData = new FormData();
        debugger;
        bodyFormData.append("name", object.name);
        bodyFormData.append("image", object.image);
          return axios.post(API_BASE_URL +"Language/AddLanguage",bodyFormData)
      }



      
  UpdateLanguage(object) {

    var bodyFormData = new FormData();
    bodyFormData.append("id", object.id);
    bodyFormData.append("name", object.name);
    bodyFormData.append("image", object.image);
    return axios.post(API_BASE_URL +"Language/UpdateLanguage",bodyFormData);
  }
  
  getLanguageById(id) {
    return axios.get(API_BASE_URL + `Language/GetLanguageById?id=${id}`);
  }
  
    DeleteLanguage(Id) {
      return axios.post(API_BASE_URL + `Language/DeleteLanguage?id=${Id}`);
    }
   
  }
  
 export default new LanguageService();

