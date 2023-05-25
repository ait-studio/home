import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../components/Header";
import { useState } from "react";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import Footer from "../components/Footer";

export default function MainPage() {
  const [titleWidth, setTitleWidth] = useState(100);
  return (
    <>
      <Header />
      {/* <Box sx={{ width: "100%", height: "75px" }} /> */}
      <Box id="landing" sx={{ ...styles.wrapper, backgroundColor: "#FFF" }}>
        <Box
          // className="oppacityControl"
          sx={{
            pt: "calc(14vh + 75px)",
            mb: "64px",
            // width: `${titleWidth}vw`,
            // backgroundColor: "#F00",
          }}
        >
          <Box sx={styles.titleWrapper}>
            <Box sx={styles.flexRow}>
              <Typography sx={styles.headerLabelStyle}>
                A. I. Trend Leader
              </Typography>
              <Typography sx={styles.headerLabelStyle}>────────</Typography>
            </Box>
            <Box sx={styles.flexRow}>
              <img
                src="/Black_LOGOTYPE-horizontal_cut.png"
                alt="logo"
                style={{ height: "64px", marginBottom: "64px" }}
                // className="oppacityControl"
              />
            </Box>
          </Box>
          <Typography sx={styles.headerDetailFrontStyle}>
            시각딥러닝 전문 기업 에이트스튜디오(주)입니다. 파킨슨 AI 진단
            솔루션, ParkinSense를 만들고 있습니다.
          </Typography>
        </Box>
        <Box sx={{ mb: "12vh" }}>
          <Box
            sx={{
              mb: "16px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Pretendard-Bold",
                fontSize: "16px",
                opacity: 0.25,
              }}
            >
              PARTNERS
            </Typography>
          </Box>
          <img
            src="/SKT ESG KOREA 2023_B.png"
            alt="logo"
            style={{ height: "24px", opacity: 0.4 }}
          />
        </Box>
      </Box>
      <Box
        id="solution"
        sx={{
          ...styles.wrapper,
          backgroundColor: "#F3F3F3",
          pb: "12vh",
        }}
      >
        <Box
          sx={{ p: "7vh 0 7.5vh 0", display: "flex", justifyContent: "center" }}
        >
          <KeyboardDoubleArrowDownOutlinedIcon sx={{ fontSize: 40 }} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              pr: "35px",
            }}
          >
            <Box sx={{ position: "absolute", right: "180px", bottom: 0 }}>
              <img
                className="dropShadowed"
                src="/healthkit_change_mobility.png"
                alt="change mobility"
              />
            </Box>
            <Box>
              <img
                className="dropShadowed"
                src="/pd-app-screen.png"
                alt="pd app screen"
                style={{
                  height: "680px",
                }}
              />
            </Box>

            <Box sx={{ position: "absolute", right: "290px", bottom: "-30px" }}>
              <img
                className="dropShadowed"
                src="/healthkit_icon.png"
                alt="apple healthkit logo"
              />
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1.2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              pl: "35px",
            }}
          >
            <Box>
              <Box sx={{ mt: "10px", mb: "10px" }}>
                <Typography
                  sx={{
                    fontFamily: "Pretendard-Semibold",
                    fontSize: "24px",
                    letterSpacing: 3,
                    color: "#CACACA",
                  }}
                >
                  OUR SOLUTIONS
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Pretendard-ExtraBold",
                  fontSize: "54px",
                  marginBottom: "10px",
                }}
              >
                ParkinSense
              </Typography>
              <Box sx={{ width: "540px" }}>
                <Typography
                  sx={{
                    fontFamily: "Pretendard-Thin",
                    fontSize: "20px",
                    marginBottom: "16px",
                  }}
                >
                  IMU 센서를 넘어 최신 AI 기술로 파킨슨병 초기 운동증상(Motor
                  symptom)을 감지하는 솔루션입니다.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Pretendard-Thin",
                    fontSize: "20px",
                    marginBottom: "16px",
                  }}
                >
                  Apple HealthKit을 통해 이용자의 보행정보를 심리스하게
                  크롤링하며, 이미지/영상 분석 AI을 이용해 동결보행과 안면강직을
                  정량적으로 체크하고, 전문의 검증이 완료된 AI 문진표를 통해
                  자가진단을 돕습니다.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Pretendard-Thin",
                    fontSize: "20px",
                    marginBottom: "16px",
                  }}
                >
                  키오스크용 윈도우 앱, 안드로이드 TV 등 다양한 디바이스와
                  협업할 수 있습니다.
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Pretendard-Bold",
                  color: "#999",
                }}
              >
                솔루션: 모바일 앱, 키오스크
              </Typography>
            </Box>
            <Box sx={{ mb: "5px" }}>
              <img
                src="/pd_walking_video_motion.gif"
                alt="motion AI"
                style={{
                  height: "200px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

const styles = {
  flexRow: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "baseline",
  },
  wrapper: {
    width: "80vw",
    // minHeight: "calc(90vh - 75px)",
    p: "0 10vw",
    // justifyContents: "center",
  },

  headerLabelStyle: {
    fontFamily: "Pretendard-Thin",
    fontSize: "24px",
    paddingBottom: "40px",
    marginRight: "12px",
  },

  headerFontStyle: {
    fontFamily: "Pretendard-Bold",
    fontSize: "76px",
  },

  headerDetailFrontStyle: {
    width: "50vw",
    fontFamily: "Pretendard-Thin",
    fontSize: "20px",
    lineHeight: 1.55,
  },

  headerDetailStyle: {
    fontSize: "40px",
  },

  titleWrapper: {
    // width: "100%",
    height: "20%",
  },
};
