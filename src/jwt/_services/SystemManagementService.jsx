
import axios from 'axios';
import {API_BASE_URL} from '../../redux/constants/index';

class SystemManagementService {
   
    GetAllUsers() {
      return axios.get(API_BASE_URL + 'SysConfig/GetAllUsers');
    }

    AddUser(object) {
      var bodyFormData = new FormData();
      debugger;
      bodyFormData.append("userName", object.userName);
      bodyFormData.append("password", object.password);
      bodyFormData.append("firstName", object.firstName);
      bodyFormData.append("lastName", object.lastName);
      bodyFormData.append("middleName", object.middleName);
      bodyFormData.append("gender", object.gender);
      bodyFormData.append("email", object.email);
      bodyFormData.append("Image", object.Image);

        return axios.post(API_BASE_URL +"SysConfig/AddUser",bodyFormData)
    }

    GetUserById(id) {
      return axios.get(API_BASE_URL + `SysConfig/GetUserById?Id=${id}`);
    }

    UpdateUser(object) {
      debugger;
        var userObject = {
          id:object.id,
          userName:object.userName,
          firstName:object.firstName,
          lastName:object.lastName,
          middleName:object.middleName,
          gender:object.gender,
          email:object.email,
          Image:object.Image,

        }
        
          return axios.post(API_BASE_URL +"SysConfig/UpdateUser",userObject);
    }


    DeleteUser(Id) {
      return axios.post(API_BASE_URL + `SysConfig/DeleteUser?id=${Id}`);
    }
    AssignRole(id, object) {
       
      return axios.post(API_BASE_URL +"SysConfig/AssignRole",{   
          id: id,
          roleId: object.roleId,  
  
          
 
});
    }
    GetRoles() {
      return axios.get(API_BASE_URL + 'SysConfig/GetAllRoles');
    }

    AddRole(object) {
       
    
        return axios.post(API_BASE_URL +"SysConfig/AddRoles",{    
          id: 1,    
          name: object.name,
          isActive: true,
       
});



    }
    GetRoleById(Id) {
      return axios.get(API_BASE_URL + `SysConfig/GetRoleById?Id=${Id}`);
    }

    UpdateRole(object) {
      console.log(object);
      return axios.post(API_BASE_URL + 'SysConfig/UpdateRole', object);
    }
    DeleteRole(Id) {
      debugger
      return axios.post(API_BASE_URL + `SysConfig/DeleteRole?id=${Id}`);
    }

    // AddFlashCard(object) {
    //     var bodyFormData = new FormData();
    //     debugger;
    //     bodyFormData.append("EnglishWord", object.englishWord);
    //     bodyFormData.append("EnglishAudio", object.englishWordAudio);
    //     bodyFormData.append("EnglishTranslation", object.transaltion);
    //     bodyFormData.append("TranslationAudio", object.TranslationAudio);
    //     bodyFormData.append("LessonId", parseInt(object.lessonId));
    //     bodyFormData.append("LevelId", parseInt(object.levelId));
    //     bodyFormData.append("LanguageId", parseInt(object.languageId));
    //     bodyFormData.append("DifficultLevel", object.difficultLevel);
    //       return axios.post(API_BASE_URL +"FlashCard/AddFlashCard",bodyFormData)
    //   }
  
    // DeleteFlashCard(Id) {
    //   return axios.post(API_BASE_URL + `FlashCard/DeleteFlashCard?id=${Id}`);
    // }
   
  }
  
 export default new SystemManagementService();

