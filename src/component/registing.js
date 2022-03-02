import React from "react";
import "./registing.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Hamburgar from "./hamburgar";


function Registing() {
  return (
    <div className="Table">
      <Hamburgar />
      <h2>
        目前鎖櫃尚在登記中，
        <br />
        請在12/12 AM 10 回來本系統查看中籤資訊
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

export default Registing;
