import * as React from 'react';
import AppBar from './components/AppBar'
import Box from '@mui/material/Box';
import Button from './components/Buttom';
import TextField from './components/TextField';
import './searchpage.css'


function App() {
return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar />
    <div className='Textfiled'>
        <TextField/>
    </div>
    <div className='Button'>
        <Button/>
    </div>
    </Box>
);
}
export default App;