import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

// I will use...
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";

const drawerWidth = 240;
const navItems = [
  {
    Text: "Home",
    Link: "/",
  },
  {
    Text: "회사소개",
    Link: "/aboutteam",
  },
  {
    Text: "제품소개",
    Link: "/aboutsolution",
  },
  {
    Text: "IR",
    Link: "/ir",
  },
];

function Header(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      className="header"
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        AIT studio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.Text} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                navigate(item.Link);
              }}
            >
              <ListItemText primary={item.Text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          height: "75px",
          background: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src="/ait_logo.png"
            alt="logo"
            style={{ height: "70%", paddingRight: "10px" }}
          />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                className="hover-underline-animation"
                key={item.Text}
                sx={{
                  color: "#fff",
                  fontSize: "1.5em",
                  fontWeight: "bold",
                  m: "0px 30px",
                }}
                onClick={() => {
                  navigate(item.Link);
                }}
              >
                {item.Text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
