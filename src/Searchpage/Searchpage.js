import * as React from "react";
import MenuBar from "../components/MenuBar";
import {Box,Button,TextField} from "@mui/material";
import "./searchpage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  let history = useNavigate();

  const [helperTextCorrect, sethelperTextError] =
    useState("請輸入您的手機號碼");
  const [numerror, setnumerror] = useState(false);
  const [num, setnum] = useState("");

  const handleChangePhone = (e) => {
    setnum(e.target.value);
  };
  const handleSubmit = (e) => {
    setnumerror(false);
    console.log(num);
    sethelperTextError("請輸入您的手機號碼");
    e.preventDefault();
    if (num == "") {
      sethelperTextError("非暢遊會員,無法登記鎖櫃!");
      setnumerror(true);
    } else {
      history("/SearchPageWait");
    }
  };
  return (
    <div className="box">
      <MenuBar name="查詢登記" />
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="phoneenter">
          <TextField
            id="outlined-password-input"
            label="手機號碼"
            onChange={(e) => handleChangePhone(e)}
            helperText={helperTextCorrect}
            error={numerror}
            fullWidth
          />
        </div>
        <div className="finishbutton">
          <Button fullWidth variant="contained" type="submit">
            完成
          </Button></div>
      </form>
    </div>
  );
}
export default SearchPage;