import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=500&nat=US";

const API = {
    populate: function () {
        return axios.get(BASEURL);
    } 
};



export default API;
