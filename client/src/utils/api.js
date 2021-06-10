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
        console.log('hitting api on front end')
        return axios.get("/api/activity/allItineraries");
    }
}