import * as React from "react";
import MenuBar from "../components/MenuBar";
import Box from "@mui/material/Box";
import Button from "../components/Buttom";
import TextField from "../components/TextField";
import "./searchpage.css";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuBar name="查詢登記" />

      <div className="Textfiled">
        <TextField />
      </div>
      <div className="Button">
        <Button />
      </div>
    </Box>
  );
}
export default App;
