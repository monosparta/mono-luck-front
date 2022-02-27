import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
function MenuBar(props) {
  return ( 
      <AppBar class="bar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{props.name}</Typography>
        </Toolbar>
      </AppBar>
  );
}
export default MenuBar;
