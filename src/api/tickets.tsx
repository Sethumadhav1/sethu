import axios from 'axios';
const API_URL = import.meta.env.VITE_BACKEND_URL;
import qs from 'qs';
 
export const getTickets = async (params) => {
  try {
    const response = await axios.get(API_URL+"/tickets", { params,paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }), },);
    return response.data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
}