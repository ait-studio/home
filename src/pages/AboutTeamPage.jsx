import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../App.css";
import Tags from "../components/Tags";

const detailStyle = {
  color: "#000",
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
          height: "calc(100vh - 85.5px)",
          // backgroundImage: "url('/deadlift.avif')",
          backgroundImage: "url('/pd_walking_motion.gif')",
          backgroundColor: "#000",
          backgroundSize: "contain",
        }}
      >
        <Box
          className="animatedBox"
          sx={{
            width: "100%",
            height: "calc(100% - 400px)",
            m: "200px 100px",
            p: "50px 0px",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Typography
            sx={{ fontSize: 32, color: "rgb(69, 69, 69)", fontWeight: "bold" }}
          >
            헬스장의 ICT화로 PT비용을 80% 낮추는
          </Typography>
          <Box>
            <Typography
              sx={{
                display: "inline",
                fontSize: 40,
                mr: 1,
                color: "rgb(81, 114, 88)",
                fontWeight: "bold",
              }}
            >
              스마트 헬스장
            </Typography>
            <Typography
              sx={{
                display: "inline",
                fontSize: 40,
                color: "rgb(69, 69, 69)",
                fontWeight: "bold",
              }}
            >
              플랫폼
            </Typography>
          </Box> */}

          <img
            src="/Color_LOGOTYPE-main.png"
            alt="logo"
            style={{ height: "100px" }}
            className="oppacityControl"
          />

          <Typography
            sx={{
              fontSize: 18,
              mb: -1,
              color: "rgb(255, 255, 255)",
              fontWeight: "bold",
            }}
          >
            컴퓨터비전 AI 전문
          </Typography>
          <Typography
            sx={{
              fontSize: 24,
              mb: 1,
              color: "rgb(255, 255, 255)",
              fontWeight: "bold",
            }}
          >
            에이트스튜디오(주)
          </Typography>
          <Tags
            items={[
              "ESG",
              "AI헬스케어",
              "TDA(위상데이터분석)",
              "시각딥러닝",
              "SaaS",
            ]}
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
