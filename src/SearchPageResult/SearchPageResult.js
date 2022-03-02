import * as React from "react";
import MenuBar from "../components/MenuBar";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function SearchPageResult() {
  let history = useNavigate();
  const handleclick = (e) => {
    history("/");
  };
  return (
    <div>
      <MenuBar name="查詢登記" />
      <Typography variant="body2" component="div">
        <div>您抽中的鎖櫃為 - 19 號(2090)</div>
        <div>請向工作人員索取使用登記表簽名</div>
      </Typography>
      <Button variant="contained" onClick={handleclick}>
        完成
      </Button>
    </div>
  );
}

export default SearchPageResult;
