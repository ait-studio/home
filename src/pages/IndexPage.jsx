import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../components/Header";

const headerFontStyle = {
  fontWeight: "bold",
  fontSize: "200px",
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
        <Typography
          variant="h1"
          sx={{
            color: "#FFF",
            pl: "100vw",
            pt: "100vh",
            transform: "translate(-30vw, -50vh)",
            ...headerFontStyle,
          }}
        >
          AIT
        </Typography>
        <Typography variant="h2" sx={headerDetailStyle}></Typography>
      </Box>
    </>
  );
}
