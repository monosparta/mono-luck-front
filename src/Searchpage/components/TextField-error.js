import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ValidationTextFields() {
return (
    <Box
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    >
    <div>
        <TextField
        error
        id="outlined-error-helper-text"
        label="手機號碼"
        defaultValue=""
        helperText="非暢遊會員，無法登記鎖櫃!"
        fullWidth
        />
    </div>
    
    </Box>
);
}
