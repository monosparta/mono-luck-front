import React from "react";
import "./registcomplete.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Hamburgar from "./hamburgar";

function Registcomplete() {
  return (
    <div className="Table">
      <Hamburgar />
      
      <img className="Nike" src="https://imgur.com/gczuDrA.png" alt=""></img>
      <h1>登記成功</h1>
      <h2>
        鎖櫃抽選時間為
        <br />
        10:00 a.m 12/12
        <br />
        抽籤資訊將會公告至本系統
      </h2>
      <div class="button">
        <Stack direction="row" spacing={2}>
          <Button variant="contained" style={{ width: 380, height: 36 }}>
            完成
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Registcomplete;
