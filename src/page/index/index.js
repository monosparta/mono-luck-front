import React from "react";
import "./index.css";
import Hamburgar from "../../component/hamburgar";
import { Button, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  return (
    <div>
      <Hamburgar />
      <div className="Homepage">
        <div className="Logo">
          <img src="https://imgur.com/c7OVLhS.png" alt="mono"></img>
        </div>
        <div className="Text">
          <div className="Title1">
            <p>MonoLuck</p>
          </div>
          <div className="Title2">
            <p>鎖櫃登記系統</p>
          </div>
        </div>

        <div className="button">
          <Stack spacing={1}>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" style={{ width: 380, height: 36 }}>
                <EditIcon />
                鎖櫃登記
              </Button>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" style={{ width: 380, height: 36 }}>
                <SearchIcon />
                登記查詢
              </Button>
            </Stack>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default App;
