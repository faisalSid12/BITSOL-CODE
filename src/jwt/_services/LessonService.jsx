import { AuthHeader, HandleResponse } from '../_helpers';
import axios from 'axios';
import {API_BASE_URL} from '../../redux/constants/index';

class LessonService {

      getLessonList(id) {
        if(id == 0)
          return axios.get(API_BASE_URL + 'Lesson/GetAllLesson');
        else
          return axios.get(API_BASE_URL + 'Lesson/GetAllLesson?id='+id);
      }

      AddLesson(object) {
        var bodyFormData = new FormData();
        bodyFormData.append("image", object.featureImagePath);
        bodyFormData.append("videoPath", object.videoPath);
        bodyFormData.append("Title", object.title);
        bodyFormData.append("Description", object.description);
        bodyFormData.append("NewWords", object.newWords);
        bodyFormData.append("Phrases", object.phrases);
        bodyFormData.append("Concepts", object.concepts);
        //bodyFormData.append("isPremium", object.isPremium);
        bodyFormData.append("LevelId", parseInt(object.levelId)); 
        bodyFormData.append("LanguageId", parseInt(object.languageId)); 
        return axios.post(API_BASE_URL +"Lesson/AddLesson",bodyFormData)
      }

      getLanguageList() {
        console.log(API_BASE_URL);
      return axios.get(API_BASE_URL + 'Language/GetAllLanguage');
    }

      getLevelList() {
      return axios.get(API_BASE_URL + 'Level/GetAllLevel');
    }

       getLessonsById(id) {
      return axios.get(API_BASE_URL + `Lesson/GetLessonById?id=${id}`);
    }

    UpdateLevel(object) {
      var bodyFormData = new FormData();
      debugger;
      bodyFormData.append("id", object.id);
      bodyFormData.append("title", object.title);
      bodyFormData.append("languageId", object.languageId);
      bodyFormData.append("levelId", object.levelId);
      bodyFormData.append("description", object.description);
      bodyFormData.append("newWords", object.newWords);
      bodyFormData.append("phrases", object.phrases);
      bodyFormData.append("concepts", object.concepts);
      bodyFormData.append("isPremium", object.isPremium);

        return axios.post(API_BASE_URL +"Lesson/UpdateLesson", bodyFormData)
    }

    DeleteLesson(Id) {
      return axios.post(API_BASE_URL + `Lesson/DeleteLesson?Id=${Id}`);
    }



      
//   UpdateLanguage(object) {

//     return axios.post(API_BASE_URL + 'Language/UpdateLanguage', {
//         name: object.name,
//         image: object.image,

//       isActive: true
//     });
//   }
  
 
   
  }
  
  export default new LessonService();

