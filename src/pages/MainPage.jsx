import { useRef, useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollTopBtn";
import Header from "../components/Header";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function Cover() {
  return (
    <Box className="mainCover pageContent">
      <Box className="title">
        <Box className="header flexHor">
          <Typography>A. I. Trend Leader</Typography>
          <Box className="divider" />
        </Box>
        <img
          src="/Black_LOGOTYPE-horizontal_cut.png"
          alt="AIT studio logo"
          // className="oppacityControl"
          className="aitLogo invert"
        />
      </Box>
      <Box className="caption">
        <Typography>
          <span>시니어와 함께 걷는 기업, 에이트스튜디오(주)입니다.</span>{" "}
          <span>AI 카메라 기반, 시니어의 건강분석 솔루션을 개발합니다.</span>
        </Typography>
      </Box>
    </Box>
  );
}

function Solution() {
  return (
    <Box className="mainSolution pageContent">
      <Box className="content">
        <Box className="header">
          <Typography>Our Solution</Typography>
        </Box>
        <Box className="title">
          <Typography>걸음을 보면</Typography>
          <Typography>뇌건강이 보입니다</Typography>
        </Box>
        <Box className="paragraph">
          <Typography>
            <span>컴퓨터비전 AI 기술로 보행분석을 혁신합니다.</span>
            <span>
              몸에 붙이는 센서나 값비싼 압력 발판 센서 기반이 아닌 AI 카메라를
              기반으로 제품 가격을 대폭 낮췄습니다.
            </span>
          </Typography>
          <Typography>
            <span>동작인식(Pose Estimation) AI 기술 기반으로</span>{" "}
            <span>
              보행속도, 보폭, 상체굽음, 양팔스윙, 보행비대칭를 측정합니다.
            </span>
          </Typography>
          <Typography>
            <span>AI 분석 자동화 기술을 통해 전문가의 도움 없이</span>{" "}
            <span>스스로 자신의 보행을 분석할 수 있습니다.</span>
          </Typography>
        </Box>
        <Box className="button">메디스텝 제품소개 보기</Box>
      </Box>
      <img
        src="/img_kiosk.png"
        alt="Medistep Kiosk"
        // className="oppacityControl"
        className="kiosk"
      />
    </Box>
  );
}

function Features() {
  return (
    <Box className="mainFeatures pageContent">
      <Grid container justifyContent="center">
        <Grid item sm={12} md={4} xl={4} className="feature">
          <Typography className="title">가격 80% 절감</Typography>
          <Box className="text">
            <Typography>AI 기술로 센서를 대체해</Typography>{" "}
            <Typography>기존 보행분석 장비 대비</Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={4} xl={4} className="feature">
          <Typography className="title">검사비 무료</Typography>
          <Box className="text">
            <Typography>AI 자동 해석기술로 전문가를 대체해</Typography>{" "}
            <Typography>통상 13만원 검사료 100% 절감</Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={4} xl={4} className="feature">
          <Typography className="title">높은 확장성</Typography>
          <Box className="text">
            <Typography>고성능 디바이스 기반으로 연구실,</Typography>{" "}
            <Typography>노인시설 등 다양한 곳에서 활용가능</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function Contact() {
  return (
    <Box className="mainContact pageContent">
      <Box className="content">
        <Box className="header">
          <Typography>Contact us</Typography>
        </Box>
        <Box className="title">
          <Typography>2024년 1분기 출시</Typography>
          <Typography>할인된 가격에 만나보세요</Typography>
        </Box>
        <Box className="flexHor">
          <Box className="button">제품 정보 상세보기</Box>
          <Box className="button">구매 문의하기</Box>
        </Box>
      </Box>
      <Box className="videoWrapper">
        <video controls={true} autoPlay={false} loop={true}>
          <source src={"./ait_promotion.mp4"} type="video/mp4" />
        </video>
      </Box>
    </Box>
  );
}

function News() {
  return (
    <Box className="mainNews pageContent">
      <Typography className="header">News</Typography>
      <Typography className="title">회사현황</Typography>
      <Grid container spacing={3.5} justifyContent="center">
        {[
          {
            imgSrc: "/news_1.jpeg",
            link: "https://www.mk.co.kr/news/it/10880891",
            title: "에이트스튜디오, AI로 노인의 퇴행성 질환 진단",
          },
          {
            imgSrc: "/news_2.jpeg",
            link: "https://www.sedaily.com/NewsView/29W2K8YK2U",
            title: "SBA, 오픈이노베이션 데모데이 ‘IMPACT DIVE 2023’ 개최",
          },
          {
            imgSrc: "/news_3.png",
            link: "https://www.aitimes.com/news/articleView.html?idxno=154454",
            title: "에이트스튜디오, 파킨슨병 진단하는 모바일 앱 출시한다",
          },
          {
            imgSrc: "/news_4.png",
            link: "https://www.aitimes.com/news/articleView.html?idxno=152026",
            title:
              "[AI&빅데이터쇼] 에이트스튜디오, 파킨슨병 자가진단하는 AI 앱 소개",
          },
        ].map((item, idx) => {
          console.log(item.imgSrc);
          return (
            <Grid item sm={6} md={3} xl={3} className="news" key={idx}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <Box className="newsCard">
                  <Box
                    className="thumbnail"
                    sx={{ backgroundImage: `url(${item.imgSrc})` }}
                  />
                  <Box sx={{ display: "flex" }}>
                    <Typography className="caption">{item.title}</Typography>
                    <OpenInNewIcon style={{ color: "#000" }} />
                  </Box>
                </Box>
              </a>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

function Partners() {
  return (
    <Box className="mainPartners pageContent">
      <Typography className="header">PARTNERS</Typography>
      <Typography className="title">파트너와 함께합니다</Typography>
      <Box className="logoWrapper">
        <Box>
          <img src="/logo_sk.png" alt="SK telecom" />
        </Box>
        <Box>
          <img
            src="/logo_esg2023.png"
            alt="ESG Korea 2023 Powered by SK telecom"
          />
        </Box>
        <Box>
          <img src="/logo_snuh.png" alt="SNUH" />
        </Box>
        <Box>
          <img src="/logo_nest.png" alt="Start-up NEST" />
        </Box>
        <Box>
          <img src="/logo_hondream.png" alt="H OnDream" />
        </Box>
      </Box>
    </Box>
  );
}

export default function MainPage() {
  return (
    <Box>
      <Header />
      <Cover />
      <Solution />
      <Features />
      <Contact />
      <News />
      <Partners />
      <Footer />
      <ScrollToTopBtn />
    </Box>
  );
}
