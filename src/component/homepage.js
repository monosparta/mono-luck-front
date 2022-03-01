import React from "react";
import "./homepage.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

function Home() {
  return (
    <div className="Table">
      <img src="https://imgur.com/c7OVLhS.png"></img>
      <h1>MonoLuck</h1>
      <h2>鎖櫃登記系統</h2>
      <div class="button">
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
      </div>
    </div>
  );
}

export default Home;
