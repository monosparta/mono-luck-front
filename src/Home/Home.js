import * as React from 'react';
import AppBar from './component/AppBar'
import Box from '@mui/material/Box';
import IconButton from './component/IconButton';
import Monologo from './component/monologo.png';
import Text1 from './component/Text1';
import Text2 from './component/Text2';
import './Home.css';

function Home(){
    return(
        <Box sx={{ flexGrow: 1}}>
        <div className='Appbar'><AppBar/></div>
        <div className='Logo'><img src={Monologo} alt ="Monologo"/></div>
        <div className='Bigbox'>
        <div className='Text1'><Text1/></div>
        <div className='Text2'><Text2/></div>
        </div>
        <div className='Botton'><IconButton/></div>        
        </Box>
    );
}

export default Home;