import { useRef, useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import Grid from "@mui/material/Grid";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Zoom,
  Autoplay,
  EffectFade,
  Mousewheel,
  Pagination,
  Navigation,
} from "swiper";
import "swiper/css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainPage() {
  const [titleWidth, setTitleWidth] = useState(100);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

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
            <Box sx={{ ...styles.flexRow, alignItems: "flex-end" }}>
              <Typography sx={styles.headerLabelStyle}>
                A. I. Trend Leader
              </Typography>
              <Typography sx={styles.headerLabelStyle}>────────</Typography>
            </Box>
            <Box sx={styles.flexRow}>
              <img
                src="/Black_LOGOTYPE-horizontal_cut.png"
                alt="logo"
                // className="oppacityControl"
                className="aitLogo"
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
          pb: "30px",
          p: "0 15vw",
          overflow: "scroll",
        }}
      >
        <Box
          sx={{ p: "7vh 0 7.5vh 0", display: "flex", justifyContent: "center" }}
        >
          <KeyboardDoubleArrowDownOutlinedIcon sx={{ fontSize: 40 }} />
        </Box>
        <Grid
          container
          spacing={8}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-end",
          }}
        >
          <Grid
            item
            sm={12}
            md={5.5}
            lg={5.5}
            xl={5.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              mb: "50px",
              // marginRight: "50px",
              // paddingLeft: "180px",
              // height: "680px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                }}
              >
                <img
                  className="dropShadowed"
                  src="/healthkit_change_mobility.png"
                  alt="change mobility"
                  style={{ width: "80%", maxWidth: "300px" }}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  // backgroundColor: "#F00",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  paddingLeft: "20%",
                  boxSizing: "border-box",
                }}
              >
                <img
                  className="dropShadowed"
                  src="/pd-app-screen.png"
                  alt="pd app screen"
                  style={{
                    // position: "absolute",
                    // bottom: 0,
                    // right: 0,
                    width: "100%",
                    // height: "100%",
                    maxWidth: "360px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-40px",
                  left: "10%",
                  width: "100%",
                }}
              >
                <img
                  className="dropShadowed"
                  src="/healthkit_icon.png"
                  alt="apple healthkit logo"
                  style={{ width: "50%", maxWidth: "200px" }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={6.5}
            lg={6.5}
            xl={6.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              mb: "50px",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: "70vw" }}>
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
                  wordWrap: "break-word",
                }}
              >
                ParkinSense
              </Typography>
              <Box>
                <Typography sx={styles.solutionContent}>
                  IMU 센서를 넘어 최신 AI 기술로 파킨슨병 초기 운동증상(Motor
                  symptom)을 감지하는 솔루션입니다.
                </Typography>
                <Typography sx={styles.solutionContent}>
                  Apple HealthKit을 통해 이용자의 보행정보를 심리스하게
                  크롤링하며, 이미지/영상 분석 AI을 이용해 동결보행과 안면강직을
                  정량적으로 체크하고, 전문의 검증이 완료된 AI 문진표를 통해
                  자가진단을 돕습니다.
                </Typography>
                <Typography sx={styles.solutionContent}>
                  키오스크용 윈도우 앱, 안드로이드 TV 등 다양한 디바이스와
                  협업할 수 있습니다.
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Pretendard-Bold",
                  color: "#999",
                  marginBottom: "40px",
                }}
              >
                솔루션: 모바일 앱, 키오스크
              </Typography>
            </Box>
            <Box sx={{ mb: "5px" }}>
              <img
                className="pdGIF"
                src="/pd_walking_video_motion.gif"
                alt="motion AI"
                style={{
                  width: "50%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          900: {
            slidesPerView: 2,
          },
        }}
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={"/IRSlide_capture_01.jpeg"} className="IRSwiperSlide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/IRSlide_capture_02.jpeg"} className="IRSwiperSlide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/IRSlide_capture_03.jpeg"} className="IRSwiperSlide" />
        </SwiperSlide>
      </Swiper>
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
    // width: "80vw",
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
    // width: "50vw",
    fontFamily: "Pretendard-Thin",
    fontSize: "20px",
    lineHeight: 1.55,
  },

  headerDetailStyle: {
    fontSize: "40px",
  },
  titleWrapper: {
    height: "20%",
  },
  solutionContent: {
    fontFamily: "Pretendard-ExtraLight",
    fontSize: "20px",
    marginBottom: "16px",
  },
};
