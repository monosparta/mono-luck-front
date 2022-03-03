import React from "react";
import Box from "@mui/material/Box";
import "./hamburgar.css";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, useTheme } from "@mui/material/styles";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function Hamburgar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [color1, setColor1] = React.useState("#000000");
  const [color2, setColor2] = React.useState("#000000");
  const [drawerText, setDrawerText] = React.useState("首頁");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [selectedIndex, setSelectedIndex] = React.useState("0");

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log(index);
    if (index === "1") {
      setColor1("#02A2EE");
      setColor2("#000000");
    }
    if (index === "2") {
      setColor2("#02A2EE");
      setColor1("#000000");
    }
  };
  console.log("c1:" + color1 + ",c2:" + color2);
  return (
    <div className="Sidebar">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {drawerText}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <List>
            <div className="SidebarImg">
              <img src="https://imgur.com/PJgYdab.png" alt=""></img>
            </div>
            <div className="SidebarText">
              <p className="SidebarTitle">MonoLuck</p>
              <p className="SidebarContent">Monosparta</p>
            </div>
            <Box
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              <List component="nav" aria-label="main mailbox folders">
                <Link to="/Luck" className="link">
                  <ListItemButton
                    selected={selectedIndex === "1"}
                    onClick={(event) => {
                      handleListItemClick(event, "1");
                    }}
                    style={{ color: { color1 } }}
                  >
                    <ListItemIcon>
                      <EditIcon />
                    </ListItemIcon>

                    <ListItemText primary="鎖櫃登記" />
                  </ListItemButton>
                </Link>
                <Link to="/Inquiry" className="link">
                  <ListItemButton
                    selected={selectedIndex === "2"}
                    onClick={(event) => handleListItemClick(event, "2")}
                    style={{ color: { color2 } }}
                  >
                    <ListItemIcon>
                      <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary="查詢登記" />
                  </ListItemButton>
                </Link>
              </List>
            </Box>
          </List>
        </Drawer>
        <Main open={open}></Main>
      </Box>
    </div>
  );
}

export default Hamburgar;
