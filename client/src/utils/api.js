import axios from 'axios';

// export default {
//     getAllEmps : function(){
//         return axios.get("/api/employees");
//     }
// }

export default {
    getAllWeather : function(){
        return axios.get("/api/weather");
    }
    // getRegularWeather : function(){
    //     return axios.get("");
    // }
}