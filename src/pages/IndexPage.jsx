import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../components/Header";

const headerFontStyle = {
  color: "#FFF",
  fontWeight: "bold",
  fontSize: "200px",
  paddingRight: "10vw",
  textAlign: "right",
};

const headerDetailFrontStyle = {
  color: "#FFF",
  fontWeight: "bold",
  fontSize: "40px",
  paddingRight: "10vw",
  textAlign: "right",
};

const headerDetailStyle = {
  fontSzie: "40px",
};

export default function MainPage() {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url('deadlift.avif')",
          backgroundSize: "cover",
        }}
      >
        {/* Box for title */}
        <Box
          sx={{
            pl: "100vw",
            pt: "40vh",
            transform: "translate(-40vw, 0)",
            width: "40vw",
          }}
        >
          <Typography variant="h1" sx={headerFontStyle}>
            AIT
          </Typography>
          <Typography variant="h2" sx={headerDetailFrontStyle}>
            your smart gym, AIT
          </Typography>
        </Box>
        <Typography variant="h2" sx={headerDetailStyle}></Typography>
      </Box>
    </>
  );
}
