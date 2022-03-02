import * as React from "react";
import MenuBar from "../components/MenuBar";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import './SearchPageWait.css'

function SearchPageWait() {
  let history = useNavigate();
  const handleclick = (e) => {
    history("/");
  };
  return (
    <div className="bigbox">
      <MenuBar name="查詢登記"/>
      <div className="content" >
      <Typography variant="body2" component="div">
        <div className="waiting">目前鎖櫃尚在登記中，</div>
        <div className="date">請在 12/12 AM 10 回來本系統查看中籤資訊</div>
      </Typography>
      <div className="button">
      <Button variant="contained" fullWidth onClick={handleclick}>
        完成
      </Button></div></div>
    </div>
  );
}

export default SearchPageWait;
