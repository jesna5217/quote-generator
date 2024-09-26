import axios from "axios";

const Base_url="https://dummyjson.com/quotes";
export const getQuote=async()=>{
    const response=await axios.get(`${Base_url}`);
    return response.data;

}