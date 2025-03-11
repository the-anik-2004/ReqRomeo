import React, { useContext, useState } from 'react';
import Header from './Header.jsx';
import Form from './Form.jsx';
import SelectTab from './SelectTab.jsx';
import Response from './Response.jsx';
import ErrorScreen from './ErrorScreen.jsx';
import { DataContext } from '../Context/DataProvider.jsx';
import { checkParams } from '../Utils/common-util.jsx';
import SnackBar from './SnackBar.jsx';
import { getData } from '../service/api.js';

const Home = () => {
  const {formData,jsonText,paramsData,headerData}=useContext(DataContext);
  const [error,setError]=useState(false);
  const [errorMsg,setErrorMsg]=useState('');
  const [errorRes,setErrorRes]=useState(false);
  const [apiRes,setApiRes]=useState({});
  const [errorResObj, setErrorResObj] = useState(null); 
  

  const onSendClick=async()=>{
    if(!checkParams(formData,jsonText,paramsData,headerData,setErrorMsg)){
       setError(true);
      return false;
      }

      let response = await getData(formData,jsonText,paramsData,headerData);
      if(response[0]==='error'){
        setErrorResObj(response[1]);
        setErrorRes(true);
        return;
      }else{
        setErrorRes(false);
        setApiRes(response);
        setErrorResObj(null);
      }

  }


  return (
    <div className='px-1 lg:px-36'>
      <Header/>
      <Form onSendClick={onSendClick}/>
      <SelectTab/>
     
      {errorRes ? <ErrorScreen errorResObj={errorResObj||""} /> :<Response data={apiRes}/> }
      
      {errorMsg &&  <SnackBar error={error} setError={setError} errorMsg={errorMsg}/>}
    </div>
  )
}

export default Home;
