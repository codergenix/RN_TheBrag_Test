//const API_URL = "http://192.168.1.10:9000";   //-- local pc ip my pc
// const API_URL = "http://172.104.124.76:8000/api/";  //--- development server api
const API_URL = "https://saasbe.customcompounding.com.au/";  //--- production server api

const API_ENDPOINT = API_URL + 'v1/';
const API_HEADER = { headers: { 'x-auth-token': `null`, 'Accept': 'application/json', 'Content-Type': 'application/json' } }
let TOKEN = 'NCC_token';




//============
const CONFIG = { API_ENDPOINT, API_HEADER, TOKEN, };
export default CONFIG;