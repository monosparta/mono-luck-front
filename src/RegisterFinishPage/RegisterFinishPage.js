import * as React from "react";
import MenuBar from "../components/MenuBar";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import './RegisterFinishPage.css';



function RegisterFinishPage() {
    let history = useNavigate();
    const handleclick = (e) => {
      history("/");
    };
  return (
      <div className="bigbox">
      <MenuBar name="登記成功" />
      <div className="icon">
      <CheckCircleIcon  fontSize="large"/>
      </div>
      <div className="text1">
      <Typography variant="h4" component="div" >
        登記成功
      </Typography>
      </div>
      <div className="textbox">
      <Typography variant="body2" component="div">
        <div className="text2">鎖櫃抽選時間為</div>
        <div className="text3">10:00 a.m.</div>
        <div className="text4">12/12 中籤資訊將會公告至本系統。</div>
      </Typography>
      </div>
      <div className="finishbutton">
      <Button variant="contained" onClick={handleclick} fullWidth>完成</Button>
      </div>
    </div>
  );
}

export default RegisterFinishPage;