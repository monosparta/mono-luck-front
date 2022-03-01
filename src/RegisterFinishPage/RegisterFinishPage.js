import * as React from "react";
import MenuBar from "../components/MenuBar";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';


function RegisterFinishPage() {
    let history = useNavigate();
    const handleclick = (e) => {
      history("/");
     
    };
  return (
    <div>
      <MenuBar name="登記成功" />
      <CheckCircleOutlineIcon />
      <Typography variant="h4" component="div">
        登記成功
      </Typography>
      <Typography variant="body2" component="div">
        <div>鎖櫃抽選時間為</div>
        <div>10:00 a.m.</div>
        <div>12/12 中籤資訊將會公告至本系統。</div>
      </Typography>
      <Button variant="contained" onClick={handleclick}>完成</Button>
    </div>
  );
}

export default RegisterFinishPage;
