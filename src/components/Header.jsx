import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import ScrollToTop from "../Tools/ScrollToTop";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import LanguageSwitchButton from "./LanguageSwitchButton";

function Header(props) {
  const { t } = useTranslation();

  const navItems = [
    {
      Text: t("about-us"),
      subPage: [
        {
          text: t("ait-studio"),
          link: "/about",
        },
      ],
    },
    {
      Text: t("product"),
      subPage: [
        {
          text: t("medistep").toUpperCase(),
          link: "/product/medistep",
        },
        {
          text: t("gait-studio").toUpperCase(),
          link: "/product/gaitstudio",
        },
      ],
    },
    {
      Text: t("news-center"),
      subPage: [
        {
          text: t("news"),
          link: "/news",
        },
      ],
    },
  ];

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
      sx={{ textAlign: "center", padding: "1rem" }}
      className="header"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <Box
          onClick={() => {
            navigate("/");
            ScrollToTop();
          }}
        >
          <img
            src="/Black_LOGOTYPE-main_cut.png"
            alt="logo"
            style={{ width: "auto", height: "1.25rem", marginLeft: "0rem" }}
          />
        </Box>

        <IconButton onClick={handleDrawerToggle} style={{ padding: 0 }}>
          <CloseIcon style={{ fontSize: "2rem", color: "#000" }} />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.Text}
            disablePadding
            sx={{
              flexDirection: "column",
              justifyContent: "flex-start",
              marginBottom: "1.5rem",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                textAlign: "left",
                fontSize: "1.25rem",
                fontFamily: "Inter",
                fontWeight: "500",
              }}
            >
              {item.Text}
            </Typography>
            <Box sx={{ width: "100%", margin: "0.75rem 0" }}>
              {item.subPage.map((subPage) => (
                <ListItemButton
                  key={subPage.text}
                  sx={{
                    width: "100%",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0",
                    margin: "0.25rem 0",
                  }}
                  onClick={() => {
                    ScrollToTop();
                    navigate(subPage.link);
                  }}
                >
                  <ListItemText
                    style={{
                      textAlign: "left",
                      fontSize: "1rem",
                      fontFamily: "Inter",
                    }}
                    primary={subPage.text}
                  />
                  <ArrowForwardIosIcon
                    style={{ fontSize: "1rem", color: "#939393" }}
                  />
                </ListItemButton>
              ))}
            </Box>

            <Box sx={{ width: "100%", borderBottom: "1px solid #d9d9d9" }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box id="header" className="no-scroll" sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          background: "#FFF",
          "& .MuiToolbar-gutters": {
            paddingLeft: 0,
            paddingRight: 0,
          },
          justifyContent: "center",
          boxShadow: "none",
          borderBottom: "1px #DDD solid",
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
            sx={{ display: { sm: "none" }, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex" }}>
            <Button
              disableRipple
              sx={{
                height: "80%",
                "&:hover": {
                  backgroundColor: "#FFF",
                },
              }}
              onClick={() => {
                ScrollToTop();
                navigate("/");
              }}
              className="logoBtn"
            >
              <img
                className="logo"
                src="/Black_LOGOTYPE-main_cut.png"
                alt="logo"
              />
            </Button>
            <LanguageSwitchButton />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => {
              return item.subPage.length === 1 ? (
                <Button
                  disableRipple
                  className="navButton"
                  sx={{
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
                    ScrollToTop();
                    navigate(item.subPage[0].link);
                  }}
                >
                  {item.Text}
                </Button>
              ) : (
                <Box className="dropdown" sx={{ position: "relative" }}>
                  <Box
                    className="navButton"
                    onClick={() => {
                      ScrollToTop();
                      navigate(item.subPage[0].link);
                    }}
                  >
                    <Typography>{item.Text}</Typography>
                  </Box>
                  <Box className="items">
                    {item.subPage.map((subPage, idx) => {
                      return (
                        <Box
                          key={idx}
                          className="subPage"
                          onClick={() => {
                            ScrollToTop();
                            navigate(subPage.link);
                          }}
                        >
                          {subPage.text}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
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
              // width: drawerWidth,
              width: "100%",
              minHeight: "75vh",
              height: "max-content",
              paddingBottom: "50px",
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
