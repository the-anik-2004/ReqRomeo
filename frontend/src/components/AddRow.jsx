import React, { useState } from 'react';
import { TableRow, TableCell, Checkbox, TextField } from '@mui/material';

const AddRow = ({ addRows, rowId, data, setData }) => {
    const [checkBox, setCheckBox] = useState(false);

    const handleChange = () => {
        setCheckBox(prev => !prev);

        setData(prevData => {
            let existingEntry = prevData.find(entry => entry.id === rowId);
            if (!existingEntry) {
                existingEntry = { id: rowId, key: '', value: '', check: false };
            }

            const updatedEntry = { ...existingEntry, check: !checkBox };
            const newData = prevData.filter(entry => entry.id !== rowId);
            return [...newData, updatedEntry];
        });

        addRows(prev => (!checkBox ? [...prev, rowId] : prev.filter(id => id !== rowId)));
        console.log(data)
    };

    const onTextChange = (e) => {
        const { name, value } = e.target;

        setData(prevData => {
            let existingEntry = prevData.find(entry => entry.id === rowId);
            if (!existingEntry) {
                existingEntry = { id: rowId, key: '', value: '', check: checkBox };
            }

            const updatedEntry = { ...existingEntry, [name]: value };
            const newData = prevData.filter(entry => entry.id !== rowId);
            return [...newData, updatedEntry];
        });
    };

    return (
        <TableRow>
            <TableCell sx={{ color: 'white', padding: '7px 4px', borderCollapse: 'collapse', border: "1px solid gray" }} align="center">
                <Checkbox
                    checked={checkBox}
                    size='large'
                    sx={{ color: "lightgray" }}
                    onChange={handleChange}
                />
            </TableCell>
            <TableCell sx={{ color: 'white', padding: '7px 4px', borderCollapse: 'collapse', border: "1px solid gray" }} align="left">
                <TextField
                    variant="outlined"
                    sx={{
                        input: { color: "white" },
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "transparent" },
                            "&:hover fieldset": { borderColor: "black" },
                            "&.Mui-focused fieldset": { borderColor: "black" }
                        },
                        "& .MuiInputLabel-root": { color: "white" },
                        "& .MuiInputBase-input::placeholder": { color: "white", opacity: 1 }
                    }}
                    name="key"
                    onChange={onTextChange}
                />
            </TableCell>
            <TableCell sx={{ color: 'white', padding: '7px 4px', borderCollapse: 'collapse', border: "1px solid gray" }} align="left">
                <TextField
                    variant="outlined"
                    sx={{
                        input: { color: "white" },
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "transparent" },
                            "&:hover fieldset": { borderColor: "black" },
                            "&.Mui-focused fieldset": { borderColor: "black" }
                        },
                        "& .MuiInputLabel-root": { color: "white" },
                        "& .MuiInputBase-input::placeholder": { color: "white", opacity: 1 }
                    }}
                    name="value"
                    onChange={onTextChange}
                />
            </TableCell>
        </TableRow>
    );
};

export default AddRow;
