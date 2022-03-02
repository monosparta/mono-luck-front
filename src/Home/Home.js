import * as React from "react";
import MenuBar from "../components/MenuBar";
import Button from '@mui/material/Button';
import Monologo from "../pic/monologo.png";
import Text1 from "../components/Text1";
import Text2 from "../components/Text2";
import "./Home.css";
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


function Home() {
  return (
    <div class="box">
      <div className="Menubar">
        <MenuBar name="首頁" />
      </div>
      <div className="Logo">
        <img src={Monologo} alt="Monologo" />
      </div>
        <div className="Text1"><Text1 /></div>
        <div className="Text2"><Text2 /></div>
      <div className="Botton">
        <Stack  spacing={1}>
          <Link href="/registerPage" underline="none"><Button variant="contained" fullWidth startIcon={<EditIcon />} >
          鎖櫃登記
          </Button></Link>
          <Link href="/searchPage" underline="none"><Button variant="outlined" fullWidth startIcon={<SearchOutlinedIcon />}>
          登記查詢
          </Button></Link>
        </Stack>
      </div>
    </div>
  );
}

export default Home;
