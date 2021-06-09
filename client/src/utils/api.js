import axios from 'axios';

export default {
    getAllWeather : function(){
        return axios.get("/api/weather");
    },
    saveActivity: function(activity) {
        return axios.post("/api/activity", {data:activity});
    }
    // getRegularWeather : function(){
    //     return axios.get("");
    // }
}