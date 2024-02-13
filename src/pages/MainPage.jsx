import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollTopBtn";
import Header from "../components/Header";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTranslation } from "react-i18next";

function Cover() {
  const { t } = useTranslation();

  return (
    <Box className="mainCover pageContent">
      <Box className="title">
        <Box className="header flexHor">
          <Typography>{t("ai-trend-leader")}</Typography>
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
          <span>{t("main-cover-1")}</span> <span>{t("main-cover-2")}</span>
        </Typography>
      </Box>
    </Box>
  );
}

function Solution() {
  const { t } = useTranslation();

  return (
    <Box className="mainSolution pageContent">
      <Box className="content">
        <Box className="header">
          <Typography>{t("main-solution-header")}</Typography>
        </Box>
        <Box className="title">
          <Typography>{t("main-solution-title-1")}</Typography>
          <Typography>{t("main-solution-title-2")}</Typography>
        </Box>
        <Box className="paragraph">
          <Typography>
            <span>{t("main-solution-paragraph-1-1")}</span>
            <span>{t("main-solution-paragraph-1-2")}</span>
          </Typography>
          <Typography>
            <span>{t("main-solution-paragraph-2-1")}</span>{" "}
            <span>{t("main-solution-paragraph-2-2")}</span>
          </Typography>
          <Typography>
            <span>{t("main-solution-paragraph-3-1")}</span>{" "}
            <span>{t("main-solution-paragraph-3-2")}</span>
          </Typography>
        </Box>
        <Box className="button">{t("main-solution-button")}</Box>
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
  const { t } = useTranslation();

  return (
    <Box className="mainFeatures pageContent">
      <Grid container justifyContent="center">
        <Grid item sm={12} md={4} xl={4} className="feature">
          <Typography className="title">
            {t("main-features-1-title")}
          </Typography>
          <Box className="text">
            <Typography>{t("main-features-1-text-1")}</Typography>{" "}
            <Typography>{t("main-features-1-text-2")}</Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={4} xl={4} className="feature">
          <Typography className="title">
            {t("main-features-2-title")}
          </Typography>
          <Box className="text">
            <Typography>{t("main-features-2-text-1")}</Typography>{" "}
            <Typography>{t("main-features-2-text-2")}</Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={4} xl={4} className="feature">
          <Typography className="title">
            {t("main-features-3-title")}
          </Typography>
          <Box className="text">
            <Typography>{t("main-features-3-text-1")}</Typography>{" "}
            <Typography>{t("main-features-3-text-2")}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function Contact() {
  const { t } = useTranslation();

  return (
    <Box className="mainContact pageContent">
      <Box className="content">
        <Box className="header">
          <Typography>{t("main-contact-header")}</Typography>
        </Box>
        <Box className="title">
          <Typography>{t("main-contact-title-1")}</Typography>
          <Typography>{t("main-contact-title-2")}</Typography>
        </Box>
        <Box className="btnWrapper flexHor">
          <Box className="button">{t("main-contact-button-1")}</Box>
          <Box className="button">{t("main-contact-button-2")}</Box>
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
  const { t } = useTranslation();

  return (
    <Box className="mainNews pageContent">
      <Typography className="header">{t("news")}</Typography>
      <Typography className="title">{t("main-news-title")}</Typography>
      <Grid container spacing={2} justifyContent="center">
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
          return (
            <Grid item xs={6} sm={6} md={3} xl={3} className="news" key={idx}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <Box className="newsCard">
                  <Box
                    className="thumbnail"
                    sx={{ backgroundImage: `url(${item.imgSrc})` }}
                    // sx={{ backgroundColor: "#F00" }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography className="caption">{item.title}</Typography>
                    <OpenInNewIcon style={{ color: "#000", fontSize: "1em" }} />
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
  const { t } = useTranslation();

  return (
    <Box className="mainPartners pageContent">
      <Typography className="header">{t("main-partners-header")}</Typography>
      <Typography className="title">{t("main-partners-title")}</Typography>
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
