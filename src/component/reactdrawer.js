import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Reactdrawer() {
  const [state, setState] = React.useState({});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown") {
      return;
    }
    setState({ [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        {["鎖櫃登記", "查詢登記"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <EditIcon /> : <SearchIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {["left"].map((anchor) => (
              <React.Fragment key="left">
                <Button onClick={toggleDrawer("left", true)}>123</Button>
                <Drawer
                  anchor="left"
                  open={state["left"]}
                  onClose={toggleDrawer("left", false)}
                >
                  <div className="SidebarImg">
                    <img src="https://imgur.com/PJgYdab.png" alt=""></img>
                  </div>
                  <div className="SidebarText">
                    <p className="SidebarTitle">MonoLuck</p>
                    <p className="SidebarContent">Monosparta</p>
                  </div>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Reactdrawer;
