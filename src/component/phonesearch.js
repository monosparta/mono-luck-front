import React from "react";
import "./phonesearch.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Hamburgar from "./hamburgar";


function Phonesearch() {
  return (
    <div className="Table">
       <Hamburgar />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "38ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-helperText"
          label="手機號碼"
          helperText="請輸入您的手機號碼"
        />
      </Box>
      <div class="Done">
        <Stack direction="row" spacing={2}>
          <Button variant="contained" style={{ width: 350, height: 40 }}>
            完成
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Phonesearch;
