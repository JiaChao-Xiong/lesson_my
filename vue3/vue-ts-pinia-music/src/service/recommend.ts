import axios from "./config";

export const getBanners = () => 
    axios.get('/banner')