import React from "react";
import "../page/luck/luck";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const ChipListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

function Lucknumber() {
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const [devices, setDevices] = React.useState(() => ["0", "2", "5"]);

  const handleDevices = (event, newDevices) => {
    if (newDevices.length <= 3) {
      setDevices(newDevices);
    }
  };

  const [chipData, setChipData] = React.useState([{ key: 0, label: "00" }]);
  const [chipData1, setChipData1] = React.useState([{ key: 2, label: "02" }]);
  const [chipData2, setChipData2] = React.useState([{ key: 5, label: "05" }]);

  console.log(chipData);
  console.log(`choose number  ||: ` + devices[0] + devices[1] + devices[2]);
  return (
    <div className="Table">
      <div className="content">
        <div className="toggleBtn">
          <div className="Btn">
            <ToggleButtonGroup value={devices} onChange={handleDevices}>
              <ToggleButton
                value="0"
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
                value="1"
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
                value="2"
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
                value="3"
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
                value="4"
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
                value="5"
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
                value="6"
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
                value="7"
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
                value="8"
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
                value="9"
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
                    <ChipListItem key={data.key}>
                      <Chip
                        style={{ height: "32px", width: "61px" }}
                        icon={icon}
                        label={devices[0]}
                        onDelete={
                          data.label === "React"
                            ? undefined
                            : handleDelete(data)
                        }
                      />
                    </ChipListItem>
                  );
                })}
                {chipData1.map((data) => {
                  let icon;

                  if (data.label === "React") {
                    icon = <TagFacesIcon />;
                  }

                  return (
                    <ChipListItem key={data.key}>
                      <Chip
                        style={{ height: "32px", width: "61px" }}
                        icon={icon}
                        label={devices[1]}
                        onDelete={
                          data.label === "React"
                            ? undefined
                            : handleDelete(data)
                        }
                      />
                    </ChipListItem>
                  );
                })}
                {chipData2.map((data) => {
                  let icon;

                  if (data.label === "React") {
                    icon = <TagFacesIcon />;
                  }

                  return (
                    <ChipListItem key={data.key}>
                      <Chip
                        style={{ height: "32px", width: "61px" }}
                        icon={icon}
                        label={devices[2]}
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
      </div>
    </div>
  );
}

export default Lucknumber;
