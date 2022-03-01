import * as React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function IconLabelButtons() {
return (
    <Stack  spacing={1}>
    <Button variant="contained" startIcon={<EditIcon />}>
        鎖櫃登記
    </Button>
    <Button variant="outlined" startIcon={<SearchOutlinedIcon />}>
        登記查詢
    </Button>
    </Stack>
);
}