import React from "react";
import "./inquiry.css";
import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function App() {
  return (
    <div>
      <div className="Inquiry">
        <div className="searchArea">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "38ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
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
      </div>
    </div>
  );
}

export default App;
