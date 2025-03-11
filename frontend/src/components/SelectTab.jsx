import React, { useState,useContext } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import CreateTable from './CreateTable.jsx';
import CreateJsonText from './CreateJsonText.jsx';
import { DataContext } from '../Context/DataProvider.jsx';

const SelectTab = () => {
  const [value, setValue] = useState(0);

  const {paramsData,setParamsData,setHeaderData,headerData}=useContext(DataContext);
  const handleChange = (event,newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'white', color: 'white' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            '& .MuiTab-root': { color: 'white' },  // Default tab color
            '& .MuiTab-root.Mui-selected': { color: '#ffd200' },  // Selected tab color
            '& .MuiTabs-indicator': { backgroundColor: '#ffd200' } // Underline color
            
          }}
        >
          <Tab label="Params" sx={{textTransform:"capitalize"}} />
          <Tab label="Headers" sx={{textTransform:"capitalize"}}/>
          <Tab label="Body" sx={{textTransform:"capitalize"}}/>
        </Tabs>
      </Box>

      {/* Tab Panels */}
      <Box sx={{ p: 2 }}>
      {value === 0 && (
          <Typography component="div" sx={{ color: 'white' }}>
            <CreateTable text={'Query Params'} data={paramsData} setData={setParamsData} />
          </Typography>
        )}
        {value === 1 && (
          <Typography component="div" sx={{ color: 'white' }}>
            <CreateTable text={'Headers'} data={headerData} setData={setHeaderData}/>
          </Typography>
        )}
        {value === 2 && (
          <Typography component="div" sx={{ color: 'white' }}>
            <CreateJsonText />
          </Typography>
      )}

      </Box>
      
    </>
  );
};

export default SelectTab;
