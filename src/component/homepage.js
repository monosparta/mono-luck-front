import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Homepage() {
  return (
    <div className="Table">
      <h1>MonoLuck</h1>
      <h2>鎖櫃登記系統</h2>
      <div class="button">
        <Stack direction="row" spacing={2}>
          <Button variant="contained" style={{ width: 350, height: 40 }}>
            鎖櫃登記
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" style={{ width: 350, height: 40 }}>
            登記查詢
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Homepage;
