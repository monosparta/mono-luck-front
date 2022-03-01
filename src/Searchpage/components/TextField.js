import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField() {
return (
    <Box
    sx={{
    display: "flex",
    position:'relative',
    top:'20px',
    alignItems: "center",
    "& > :not(style)": { m: 1 }
    }}
>
    <TextField
    helperText="請輸入您的手機號碼"
    id="demo-helper-text-aligned"
    label="手機號碼"
    fullWidth
    />
</Box>
);
}