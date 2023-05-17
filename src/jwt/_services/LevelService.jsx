import { AuthHeader, HandleResponse } from '../_helpers';
import axios from 'axios';
import {API_BASE_URL} from '../../redux/constants/index';

class LevelService {

    getList(id) {
      if(id == 0)
        return axios.get(API_BASE_URL + 'Level/GetAllLevel');
      else
        return axios.get(API_BASE_URL + 'Level/GetAllLevel?id='+id);
    }
    
    getLanguageList() {
      console.log(API_BASE_URL);
    return axios.get(API_BASE_URL + 'Language/GetAllLanguage');
  }
    
    AddLevel(object) {
      var levelObj={
        title:object.title,
        languageId: parseInt(object.languageId),
      } 
      return axios.post(API_BASE_URL +"Level/AddLevel",levelObj)
    }

    getLevelById(id) {
      return axios.get(API_BASE_URL + `Level/GetLevelById?id=${id}`);
    }

    UpdateLevel(object) {
      return axios.post(API_BASE_URL + 'Level/UpdateLevel', object);
    }

    DeleteLevel( Id) {
      return axios.post(API_BASE_URL + `Level/DeleteLevel?id=${Id}`);
    }

  }
  
 export default new LevelService();

