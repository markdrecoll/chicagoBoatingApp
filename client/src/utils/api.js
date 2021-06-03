import axios from 'axios';

export default {
    getAllEmps : function(){
        return axios.get("/api/employees");
    }
}