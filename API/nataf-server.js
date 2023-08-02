import axios from "axios";
var localhost = "http://10.100.102.103:4000/";

export default axios.create({
  baseURL: localhost,
});
