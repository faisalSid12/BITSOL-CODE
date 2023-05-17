
import axios from 'axios';
import {API_BASE_URL} from '../../redux/constants/index';

class DriverService {
   
    GetDrivers() {
      return axios.get(API_BASE_URL + 'Driver/GetAllDrivers');
    }
   
    GetDriverById(id) {
        return axios.get(API_BASE_URL + `DriverDetails/GetDriverDetailById?Id=${id}`);
      }


      ApproveDriver(id , status) {
        var bodyFormData = new FormData();
        debugger;
        bodyFormData.append("DriverId", id);
           bodyFormData.append("Status", status);

  
          return axios.post(API_BASE_URL +"Driver/ApproveReject",bodyFormData)
      }
  
      UpdateStatus(id , status) {
        var bodyFormData = new FormData();
        debugger;
        bodyFormData.append("DriverId", id);
           bodyFormData.append("Status", status?1:0);

  
          return axios.post(API_BASE_URL +"Driver/UpdateStatus",bodyFormData)
      }

    DeleteDriver(Id) {
        return axios.post(API_BASE_URL + `Driver/DeleteDriver?id=${Id}`);
      }
   
  }
  
 export default new DriverService();

