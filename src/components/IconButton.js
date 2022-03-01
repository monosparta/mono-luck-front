import * as React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Link from '@mui/material/Link';

export default function IconLabelButtons() {
return (
    <Stack  spacing={1}>
    <Link href="/registerPage" underline="none" ><Button variant="contained" fullWidth startIcon={<EditIcon />}>
        鎖櫃登記
    </Button></Link>
    <Link href="/searchPage" underline="none"><Button variant="outlined" fullWidth startIcon={<SearchOutlinedIcon />}>
        登記查詢
    </Button></Link>
    </Stack>
);
}