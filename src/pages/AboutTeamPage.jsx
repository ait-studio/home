import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../App.css";

const detailStyle = {
  color: "#FFF",
  mt: "30px",
  fontSize: "30px",
  fontWeight: "bold",
};

export default function AboutTeamPage() {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          height: "calc(100vh - 91.5px)",
          backgroundImage: "url('/deadlift.avif')",
          backgroundSize: "cover",
        }}
      >
        <Box
          className="animatedBox"
          sx={{
            width: "100%",
            height: "calc(100% - 400px)",
            m: "200px 100px",
            p: "50px 0px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            className="oppacityControl"
            variant="h1"
            sx={{ color: "#FFF", fontFamily: "cursive", fontSize: "100px" }}
          >
            Who Are We?
          </Typography>
          <Typography sx={detailStyle} className="oppacityControl">
            컴퓨터비전 기술을 활용한 심리스한 영상 촬영으로 생활의 문제를
            해결하는 기업 에이트(AIT) 입니다.
          </Typography>
          <Typography sx={detailStyle} className="oppacityControl">
            현재는 AI카메라 기반의 키오스크 및 앱을 개발하고 있습니다.
          </Typography>
          <img
            src="/ait_logo.png"
            alt="logo"
            style={{ height: "150px" }}
            className="oppacityControl"
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
