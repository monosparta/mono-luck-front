import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function FullWidthTextField() {
return (
    <Box
    sx={{
    maxWidth: '100%',
    position:'relative',
    top:'60px',
    }}
>
<Button fullWidth variant="contained">完成</Button>
</Box>
);
}

