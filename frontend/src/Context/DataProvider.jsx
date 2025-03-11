import React,{createContext, useState} from 'react'

export const DataContext=createContext(null);

const DataProvider = ({children}) => {

    const [formData,setFormData]=useState({
        url:'',
        type:'GET'
    });

    const [paramsData,setParamsData]=useState([]);
    const [headerData,setHeaderData]=useState([]);
    const [jsonText,setJsonText]=useState('');

    

  return (
    <DataContext.Provider 
        value={{
            formData,paramsData,headerData,
            setFormData,setParamsData,setHeaderData,jsonText,setJsonText
        }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;
