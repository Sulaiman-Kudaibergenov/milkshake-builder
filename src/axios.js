import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://milkshake-builder.firebaseio.com";

export default instance;
