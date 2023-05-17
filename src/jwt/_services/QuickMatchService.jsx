
import axios from 'axios';
import {API_BASE_URL} from '../../redux/constants/index';

class QuickMatchService {
   
    getLanguageList() {
      return axios.get(API_BASE_URL + 'Language/GetAllLanguage');
    }

    getLessonList() {
      return axios.get(API_BASE_URL + 'Lesson/GetAllLesson');
    }

    getLevelList() {
      return axios.get(API_BASE_URL + 'Level/GetAllLevel');
    }

    getQuickMatchList(id) {
      if(id == 0)
        return axios.get(API_BASE_URL + 'QuickMatch/GetAllQuickMatchByAdmin');
      else
        return axios.get(API_BASE_URL + 'QuickMatch/GetAllQuickMatchByAdmin?id='+id);
    }


    AddQuickMatch(object) {
        debugger;
        var quickMatchObject = {

          question:object.question,
          lessonId:parseInt(object.lessonId),
          levelId:parseInt(object.levelId),
          languageId:parseInt(object.languageId),
          difficultyLanguage:object.difficultLevel,
          skillId:1,
          QuickMatchAnswers:object.answers
        }
        // bodyFormData.append("EnglishWord", object.englishWord);
        // bodyFormData.append("EnglishAudio", object.englishWordAudio);
        // bodyFormData.append("EnglishTranslation", object.transaltion);
        // bodyFormData.append("TranslationAudio", object.TranslationAudio);
        
          return axios.post(API_BASE_URL +"QuickMatch/AddQuick",quickMatchObject);
      }


      getQuickList(id) {
        return axios.get(API_BASE_URL + `QuickMatch/GetQuickById?id=${id}`);
      }
      
   
  
  
    DeleteQuickMatch(Id) {
      return axios.post(API_BASE_URL + `QuickMatch/DeleteQuick?id=${Id}`);
    }
   
  }
  
 export default new QuickMatchService();

