import * as React from "react";
import MenuBar from "../components/MenuBar";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function SearchPageWait() {
  let history = useNavigate();
  const handleclick = (e) => {
    history("/");
  };
  return (
    <div>
      <MenuBar name="查詢登記" />
      <Typography variant="body2" component="div">
        <div>目前鎖櫃尚在登記中，</div>
        <div>請在 12/12 AM 10 回來本系統查看中籤資訊</div>
      </Typography>
      <Button variant="contained" onClick={handleclick}>
        完成
      </Button>
    </div>
  );
}

export default SearchPageWait;
