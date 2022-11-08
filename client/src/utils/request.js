import axios from 'axios';

const  http = axios.create({
    baseURL : "http://localhost:7000/" 
})

//https://mindx-dn-hoaqua.herokuapp.com/
export default http