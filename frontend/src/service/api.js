import axios from 'axios';
import { getHeaderAndParams } from '../Utils/common-util.jsx';

export const getData = async (formData, jsonText, paramsData, headerData) => {
    try {
        const response = await axios({
            method: formData.type.toLowerCase(),
            url: formData.url.trim(), // Trim in case of extra spaces
            data: jsonText ? JSON.parse(jsonText) : {}, // Ensure valid JSON
            headers: getHeaderAndParams(headerData),
            params: getHeaderAndParams(paramsData),
        });

        // console.log("API Response:", response); // Debugging
        return response.data; // Ensure returning correct data
    } catch (error) {
        // console.error("Error while calling getData API:", error);
        return ["error",error];
    }
};
