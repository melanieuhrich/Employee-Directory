import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=5";

const API = {
    populate: function() {
        return axios.get(BASEURL);
    }
};

export default API;