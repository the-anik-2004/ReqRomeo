import React, { useState,useContext } from 'react';
import { Box, Select, MenuItem, TextField, Button, FormControl, InputLabel } from '@mui/material';
import { DataContext } from '../Context/DataProvider.jsx';

const Form = ({onSendClick}) => {
  const {formData,setFormData}=useContext(DataContext);

  const handleChange=(e)=>{
    setFormData({...formData,type:e.target.value});
  };

  const onUrlChange=(e)=>{
    setFormData({...formData, url:e.target.value});
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
        marginTop: '12px',
      }}
    >
      {/* Select Input with Label */}
      <FormControl sx={{ width: '15%' }}>
        
        <Select
          value={formData.type}
          onChange={(e) => handleChange(e)}
          sx={{
            backgroundColor: 'grey.900',
            color: 'white',
            borderRadius: 1,
            border: '2px solid white',
            boxShadow: 2,
            '& .MuiSelect-select': { color: 'white' },
          }}
          MenuProps={{
            PaperProps: { sx: { backgroundColor: 'grey.900' } },
          }}
        >
          <MenuItem sx={{ color: 'white' }} value="GET">GET</MenuItem>
          <MenuItem sx={{ color: 'white' }} value="POST">POST</MenuItem>
          <MenuItem sx={{ color: 'white' }} value="PUT">PUT</MenuItem>
          <MenuItem sx={{ color: 'white' }} value="DEL">DEL</MenuItem>
        </Select>
      </FormControl>

      {/* Text Field */}
      <TextField
        id="outlined-basic"
        label="Enter URL"
        variant="outlined"
        onChange={(e)=>onUrlChange(e)}
        sx={{
          flex: 1,
          borderRadius: 2,
          input: { color: 'white' },
          label: { color: 'white' },
          '& .MuiInputLabel-root': { color: 'white' },
          '& .MuiInputLabel-root.Mui-focused': { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
            '&:hover fieldset': { borderColor: 'lightgray' },
            '&.Mui-focused fieldset': { borderColor: 'white' },
          },
        }}
      />

      {/* Send Button */}
      <Button
        variant="contained"
        sx={{
          width: '15%',
          height:'55px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#ffd200',
          color: 'black',
          borderRadius: 1,
          border: '2px solid white',
          boxShadow: 2,
          '&:hover': { backgroundColor: '#e6b800' },
        }}
        onClick={()=>onSendClick()}
      >
        Send
      </Button>
    </Box>
  );
};

export default Form;
