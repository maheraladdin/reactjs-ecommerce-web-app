import axios from "axios";

/**
 * @description - Base URL for API calls
 * @type {axios.AxiosInstance}
 */
const baseURL = axios.create({baseURL: process.env.REACT_APP_API_URL});

export default baseURL;