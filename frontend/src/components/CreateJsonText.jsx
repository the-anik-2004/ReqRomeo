import React, { useContext } from 'react';
import { Typography, Box, TextareaAutosize } from '@mui/material';
import { DataContext } from '../Context/DataProvider.jsx';

const CreateJsonText = () => {
  const {setJsonText}=useContext(DataContext);

  const onValueChange=(e)=>{
    setJsonText(e.target.value);
  }
  return (
    <Box>
      <Typography as="p" mt={2} mb={2} sx={{ color: 'white' }}>JSON</Typography>
      <TextareaAutosize
        minRows={3}
        placeholder="Enter JSON here..."
        style={{
            width: '100%', 
            padding: 10,  
            background: `url(http://i.imgur.com/2cOaJ.png)`,
            backgroundAttachment: 'local',
            backgroundRepeat: 'no-repeat',
            paddingLeft: 35,
            paddingTop: 10,
            border:"1px solid#fff",
            borderRadius:"4px"
        }}
        onChange={(e)=>onValueChange(e)}
      />
    </Box>
  );
};

export default CreateJsonText;

