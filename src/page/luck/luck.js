import React from "react";
import "./luck.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Hamburgar from "../../component/hamburgar";

const ChipListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };


function Luck() {
  const CssTextField = styled(TextField)({
    "& .MuiFormHelperText-root": {
      "&.Mui-focused": {
        color: "#1976d2",
      },
    },
    "& label.Mui-focused": {
      color: "#1976d2",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#1976d2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1976d2",
      },
    },
  });

  const [devices, setDevices] = React.useState(() => ["00", "02", "05"]);
  const [chipData, setChipData] = React.useState([]);
  const handleDevices = (event, newDevices) => {
    if (newDevices.length <= 3) {
      setDevices(newDevices);
      setChipData(newDevices);
      console.log(newDevices);
    }
    if (newDevices.length > 3) {
      newDevices.shift();
      setDevices(newDevices);
      setChipData(newDevices);
      console.log(newDevices);
    }
  };
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
    devices.forEach(function (item, index, arr) {
      if (item === chipToDelete) {
        arr.splice(index, 1);
      }
    });
    console.log(chipToDelete);
  };
  const [FiledValue, setFiledValue] = React.useState("");

  const handleTextField = (event) => {
    setFiledValue(event.target.value);
  };
  console.log(FiledValue);
  return (
    <div className="Tableluck">
        <Hamburgar />
      <div className="content">
        <div className="directions">
          <p>請點擊欲租借的鎖櫃編號，可選三項，須至少輸入一項</p>
        </div>

        <div className="toggleBtn">
          <div className="Btn">
            <ToggleButtonGroup value={devices} onChange={handleDevices}>
              <ToggleButton
                value="00"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                00
              </ToggleButton>
              <ToggleButton
                value="01"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                01
              </ToggleButton>
              <ToggleButton
                disabled="True"
                style={{
                  width: 48,
                  height: 48,
                  background: "#E5E5E5",
                  border: "1px solid #E0E0E0",
                }}
              ></ToggleButton>
              <ToggleButton
                disabled="True"
                style={{
                  width: 48,
                  height: 48,
                  background: "#E5E5E5",
                  border: "1px solid #E0E0E0",
                }}
              ></ToggleButton>
              <ToggleButton
                disabled="True"
                style={{
                  width: 48,
                  height: 48,
                  background: "#E5E5E5",
                  border: "1px solid #E0E0E0",
                }}
              ></ToggleButton>
              <ToggleButton
                disabled="True"
                style={{
                  width: 48,
                  height: 48,
                  background: "#E5E5E5",
                  border: "1px solid #E0E0E0",
                }}
              ></ToggleButton>
              <ToggleButton
                value="02"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                02
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="Btn">
            <ToggleButtonGroup value={devices} onChange={handleDevices}>
              <ToggleButton
                value="03"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                03
              </ToggleButton>
              <ToggleButton
                value="04"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                04
              </ToggleButton>
              <ToggleButton
                disabled="True"
                style={{
                  width: 48,
                  height: 48,
                  background: "#E5E5E5",
                  border: "1px solid #E0E0E0",
                }}
              ></ToggleButton>
              <ToggleButton
                disabled="True"
                style={{
                  width: 48,
                  height: 48,
                  background: "#E5E5E5",
                  border: "1px solid #E0E0E0",
                }}
              ></ToggleButton>
              <ToggleButton
                disabled="True"
                style={{
                  width: 48,
                  height: 48,
                  background: "#E5E5E5",
                  border: "1px solid #E0E0E0",
                }}
              ></ToggleButton>
              <ToggleButton
                disabled="True"
                style={{
                  width: 48,
                  height: 48,
                  background: "#E5E5E5",
                  border: "1px solid #E0E0E0",
                }}
              ></ToggleButton>
              <ToggleButton
                value="05"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                05
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="Btn">
            <ToggleButtonGroup value={devices} onChange={handleDevices}>
              <ToggleButton
                value="06"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                06
              </ToggleButton>
              <ToggleButton
                value="07"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                07
              </ToggleButton>
              <ToggleButton
                value="08"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                08
              </ToggleButton>
              <ToggleButton
                value="09"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                09
              </ToggleButton>
              <ToggleButton
                value="10"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                10
              </ToggleButton>
              <ToggleButton
                value="11"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                11
              </ToggleButton>
              <ToggleButton
                value="12"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                12
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="Btn">
            <ToggleButtonGroup value={devices} onChange={handleDevices}>
              <ToggleButton
                value="13"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                13
              </ToggleButton>
              <ToggleButton
                value="14"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                14
              </ToggleButton>
              <ToggleButton
                value="15"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                15
              </ToggleButton>
              <ToggleButton
                value="16"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                16
              </ToggleButton>
              <ToggleButton
                value="17"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                17
              </ToggleButton>
              <ToggleButton
                value="18"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                18
              </ToggleButton>
              <ToggleButton
                value="19"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                19
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="Btn">
            <ToggleButtonGroup value={devices} onChange={handleDevices}>
              <ToggleButton
                value="20"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                20
              </ToggleButton>
              <ToggleButton
                value="21"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                21
              </ToggleButton>
              <ToggleButton
                value="22"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                22
              </ToggleButton>
              <ToggleButton
                value="23"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                23
              </ToggleButton>
              <ToggleButton
                value="24"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                24
              </ToggleButton>
              <ToggleButton
                value="25"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                25
              </ToggleButton>
              <ToggleButton
                value="26"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                26
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="Btn">
            <ToggleButtonGroup value={devices} onChange={handleDevices}>
              <ToggleButton
                value="27"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                27
              </ToggleButton>
              <ToggleButton
                value="28"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                28
              </ToggleButton>
              <ToggleButton
                value="29"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                29
              </ToggleButton>
              <ToggleButton
                value="30"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                30
              </ToggleButton>
              <ToggleButton
                value="31"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                31
              </ToggleButton>
              <ToggleButton
                value="32"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                32
              </ToggleButton>
              <ToggleButton
                value="33"
                color="primary"
                style={{
                  width: 48,
                  height: 48,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                33
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>

        <div className="chip">
          <div className="choosenum">
            <div className="num">
              <p>選擇鎖櫃:</p>

              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "nowrap",
                  listStyle: "none",
                  boxShadow: 0,
                  p: 0.5,
                  m: 0,
                }}
                component="ul"
              >
                {chipData.map((data) => {
                  let icon;

                  if (data.label === "React") {
                    icon = <TagFacesIcon />;
                  }
                  return (
                    <ChipListItem key={data}>
                      <Chip
                        style={{ height: "32px", width: "61px" }}
                        icon={icon}
                        label={data}
                        onDelete={
                          data.label === "React"
                            ? undefined
                            : handleDelete(data)
                        }
                      />
                    </ChipListItem>
                  );
                })}
              </Paper>
            </div>
          </div>
        </div>

        <form>
          <div className="textfield">
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
                helperText="請輸入您的手機號碼"
                onChange={handleTextField}
              />
            </Box>
          </div>

          <div className="agree">
            <div className="agreeItem">
              <div>
                <Checkbox {...label} />
              </div>
              <p>我已閱讀且同意遵守　</p>
              <a
                href="https://monospace.guide/books/manual/page/31fef"
                target="_blank"
                rel="noreferrer noopener"
              >
                新制會員物品管理規範
              </a>
            </div>
          </div>

          <div className="btn">
            <div className="sendBtn">
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  type="submit"
                  style={{ width: 350, height: 40 }}
                >
                  <p>送出</p>
                </Button>
              </Stack>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Luck;
