import React from "react";
import "./inquiry.css";
import { Button, Stack, styled } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const CssTextField = styled(TextField)({
  "& .MuiFormHelperText-root": {
    "&.Mui-focused": {
      //提示文字
      color: "#1976d2",
    },
  },
  "& label.Mui-focused": {
    //上排文字
    color: "#1976d2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "grey",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1976d2", //FIELD 框
    },
  },
});

function App() {
  const navigate = useNavigate();
  const [error, setError] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [helperText, setHelperText] = React.useState("請輸入您的手機號碼");

  const handleClick = () => {
    if (phone !== "" && phone.length === 10 && !isNaN(phone)) {
      navigate("/Noyetopen");
    }
    if (phone === "" || phone.length !== 10) {
      setError(true);
      setHelperText("非暢遊會員,無法登記鎖櫃!");
    }
  };

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
            <CssTextField
              id="outlined-helperText"
              label="手機號碼"
              error={error}
              helperText={helperText}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value.replace(/[^\d.]/g, ""));
              }}
            />
          </Box>
          <div class="Done">
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                style={{ width: 350, height: 40 }}
                onClick={handleClick}
              >
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
