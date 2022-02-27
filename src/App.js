import * as React from "react";
import "./App.css";
import MenuBar from "./components/MenuBar"
import Link from "@mui/material/Link";
import TextField_phone from "./components/TextField_phone";
import ToggleBtn from "./components/ToggleBtn";
import Divider from "@mui/material/Divider";
import TextField_phone_error from "./components/TextField_phone_error";
import Box from '@mui/material/Box';
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";



function App() {
  const [formats, setFormats] = React.useState("0");
  
    const handleFormat = (event, newFormats) => {
      setFormats(newFormats);
    };
  return (
    <Box sx={{ flexGrow: 1 }}>
    <MenuBar name="鎖櫃登記"/>
      <div class="input_num_text">請點擊欲租借的鎖櫃編號，可選三項，須至少輸入一項</div>
      <div>
      <ToggleButtonGroup value={formats} onChange={handleFormat}>
        <ToggleBtn/>
      </ToggleButtonGroup>
      </div>
      <div>選擇鎖櫃:</div>
      <div>
        <Divider variant="middle" />
      </div>
      <div>
        <TextField_phone  label="手機號碼" helpertext="請輸入您的手機號碼"/>
      </div>
      <div>
        <CheckRole />
      </div>
      <div>
        <LinkRole />
      </div>
      <div>
        <FinishBtn />
      </div>
      </Box>
  );
}
function CheckRole() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return <Checkbox {...label} />;
}
function FinishBtn() {
  return (
    <Button variant="contained" >
      送出
    </Button>
  );
}
function LinkRole() {
  return (
    <div>
      我已閱讀且同意遵守
      <Link href="https://monospace.guide/books/manual/page/31fef">
        新制會員物品管理規範
      </Link>
    </div>
  );
}
export default App;

