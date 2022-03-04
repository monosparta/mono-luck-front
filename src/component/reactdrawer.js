import React from "react";
import Box from "@mui/material/Box";
import { Link, useLocation, useEffect } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, useTheme } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

export default function TemporaryDrawer() {
  const [drawerText, setDrawerText] = React.useState("首頁");
  const [state, setState] = React.useState({
    left: false,
    bottom: false,
  });

  const titleMap = [
    { path: "/", title: "首頁" },
    { path: "/Luck", title: "鎖櫃登記" },
    { path: "/Complete", title: "登記成功" },
    { path: "/Inquiry", title: "查詢登記" },
    { path: "/Noyetopen", title: "查詢登記" },
  ];

  let curLoc = useLocation();
  React.useEffect(() => {
    const curTitle = titleMap.find((item) => item.path === curLoc.pathname);
    if (curTitle && curTitle.title) {
      setDrawerText(curTitle.title);
      document.title = curTitle.title;
    }
  }, [curLoc]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* <div className="SidebarImg">
              <img src="https://imgur.com/PJgYdab.png" alt=""></img>
            </div>
            <div className="SidebarText">
              <p className="SidebarTitle">MonoLuck</p>
              <p className="SidebarContent">Monosparta</p>
            </div> */}

        <ListItem button key="鎖櫃登記">
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="鎖櫃登記" />
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="查詢登記" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="appbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense" style={{ padding: "0" }}>
            {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} > */}
            <Button
              onClick={toggleDrawer("left", true)}
              style={{ color: "#fff" }}
            >
              <MenuIcon />
            </Button>
            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
            {/* </IconButton> */}
            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
