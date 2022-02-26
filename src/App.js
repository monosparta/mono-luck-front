import React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { slide as Menu } from 'react-burger-menu'
import Luck from './page/luck/luck';
import Index from './page/index/index';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function App() {

  return (
    <div>
      <Luck />
    </div>
    
  );
}

export default App;