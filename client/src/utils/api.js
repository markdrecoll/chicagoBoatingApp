import axios from 'axios';

export default {
    getAllWeather : function(){
        return axios.get("/api/weather");
    },
    saveActivity: function(activity) {
        return axios.post("/api/activity", {date: activity.date, text: activity.text});
    },
    getRegularWeather : function(){
        return axios.get("");
    },
    getItinery: function(){
        return axios.get("/api/activity/allItineraries");
    },
    setHarborForUser: function(harbor) {
        return axios.put("/api/harbor", 
        {
            harbor: harbor,
        })

    }
}