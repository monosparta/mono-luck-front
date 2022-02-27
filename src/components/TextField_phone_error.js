import TextField from "@mui/material/TextField";
function TextField_phone_error(props) {
    return (
      <TextField
        error
        id="filled-error-helper-text"
        label="Error"
        helperText="非暢遊會員,無法登記鎖櫃!"
        variant="filled"
      />
    );
  }
  export default TextField_phone_error;