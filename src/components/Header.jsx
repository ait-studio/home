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

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";
import ScrollToTop from "../Tools/ScrollToTop";
import { Link } from "react-scroll";

/* for mobile view */
const drawerWidth = 240;
const navItems = [
  // {
  //   Text: "Home",
  //   link: "/",
  //   scroll_id: "landing",
  // },
  // {
  //   Text: "TEAM",
  //   link: "/aboutteam",
  // },
  {
    Text: "회사소개",
    link: "/",
  },
  {
    Text: "서비스",
    link: "/",
  },
  {
    Text: "홍보센터",
    link: "/",
    // scroll_id: "solution",
  },
  {
    Text: "협력·문의",
    link: "/",
    // scroll_id: "footer",
  },
];

function Header(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /* for mobile view */
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      className="header"
    >
      <Typography
        variant="h6"
        sx={{ my: 2, fontFamily: "Pretendard-ExtraBold" }}
      >
        AIT STUDIO
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.Text} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                navigate(item.link, {
                  state: { scroll_id: item.scroll_id },
                });
                // navigate(item.link);
                // ScrollToTop();
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
          height: "100px",
          background: "#FFF",
          "& .MuiToolbar-gutters": {
            paddingLeft: 0,
            paddingRight: 0,
          },
          justifyContent: "center",
        }}
        className="pageContent"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          id="back-to-top-anchor"
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#FFF" }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            disableRipple
            sx={{
              height: "80%",
              "&:hover": {
                backgroundColor: "#FFF",
              },
            }}
            onClick={() => {
              navigate("/");
              ScrollToTop();
            }}
          >
            <img
              src="/Black_LOGOTYPE-main_cut.png"
              alt="logo"
              style={{ width: "80px", height: "29px" }}
            />
          </Button>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.scroll_id} spy={true} offset={-75} key={item.Text}>
                <Button
                  disableRipple
                  className="hover-underline-animation"
                  sx={{
                    color: "#444",
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "32px",
                    ml: "100px",
                    textTransform: "none",
                    "&:hover": {
                      boxShadow: "none",
                      backgroundColor: "#FFF",
                      // color: "rgb(163,74,61)",
                    },
                    "&:active": {
                      boxShadow: "none",
                      backgroundColor: "#FFF",
                    },
                  }}
                  onClick={() => {
                    navigate(item.link, {
                      state: { scroll_id: item.scroll_id },
                    });
                  }}
                >
                  {item.Text}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* for mobile view */}
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
