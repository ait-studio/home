import Header from "../components/Header";
import Footer from "../components/Footer";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import BuildIcon from "@mui/icons-material/Build";

export default function IrPage() {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100vw",
          height: "calc(100vh - 91.5px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BuildIcon sx={{ fontSize: "3rem", color: "#555" }} />
        <Typography sx={{ color: "#555" }}>
          Sorry. This page is fixing now.
        </Typography>
      </Box>
      <Footer />
    </>
  );
}
