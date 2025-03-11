import axios from 'axios';
import { getHeaderAndParams } from '../Utils/common-util.jsx';

export const getData=async(formData,jsonText,paramsData,headerData)=>{
    const apiType=formData.type.toLowerCase();
    const apiUrl=formData.url.toLowerCase();
    const apiHeader=getHeaderAndParams(headerData);
    const apiParams=getHeaderAndParams(paramsData);
    try {
       return await axios({
            method:apiType,
            url:apiUrl,
            body:jsonText,
            headers:apiHeader,
            params:apiParams
        })
    } catch (error) {
        console.log("Error while calling getData API",error);
        return ["error",error];
    }
}