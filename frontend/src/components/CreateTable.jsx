import React,{useState} from 'react';
import { 
  Box, Typography, TableContainer, Table, TableHead, TableCell, 
  TableRow, TableBody 
} from '@mui/material';
import AddRow from './AddRow.jsx';



const CreateTable = ({ text, data, setData }) => {


  const [rows,addRows]=useState([0]);

  return (
    <Box>
      <Typography component="div" mt={2} mb={2} sx={{ color: 'white' }}>{text}</Typography>


      <TableContainer>
        <Table sx={{ minWidth: "100%",border:'1px solid gray' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' ,padding:'7px 4px', borderCollapse:'collapse', border:"1px solid gray" }} align="left"></TableCell>
              <TableCell sx={{ color: 'white' ,padding:'7px 4px', borderCollapse:'collapse', border:"1px solid gray" }} align="left">KEY</TableCell>
              <TableCell sx={{ color: 'white' ,padding:'7px 4px', borderCollapse:'collapse', border:"1px solid gray" }} align="left">VALUE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {
                rows.map((row,index)=>(
                  <AddRow 
                    key={index}
                    addRows={addRows} 
                    rowId={index} 
                    data={data}
                    setData={setData}
                  />
                ))
              }
           </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CreateTable;
