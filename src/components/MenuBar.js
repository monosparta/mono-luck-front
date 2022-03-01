import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Avatar from '../pic/Avatar.png';
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "@mui/material/Drawer";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
function MenuBar(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
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
        <img src={Avatar} alt="Avatar" loading="lazy" />
        <Typography variant="h6" component="div">
          MonoLuck
        </Typography>
        <Typography variant="body2" component="div">
          Monosparta
        </Typography>
        <ListItem disablePadding>
          <Link href="/registerPage" underline="none">
            <ListItemButton>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="鎖櫃登記" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/searchPage" underline="none">
            <ListItemButton>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="查詢登記" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <AppBar class="bar">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <MenuIcon onClick={toggleDrawer(anchor, true)} />
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </IconButton>
        <Typography variant="h6">{props.name}</Typography>
      </Toolbar>
    </AppBar>
  );
}
export default MenuBar;
