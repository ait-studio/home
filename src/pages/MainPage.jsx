import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollTopBtn";
import Header from "../components/Header";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../Tools/ScrollToTop";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import { newsList } from "./NewsPage";

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
          src="/White_LOGOTYPE-horizontal_cut.png"
          alt="AIT studio logo"
          // className="oppacityControl"
          className="aitLogo"
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
  const navigate = useNavigate();

  return (
    <Box className="mainSolution pageContent">
      <Box className="content">
        <Box className="header outlined">
          <Typography>{t("main-solution-header")}</Typography>
        </Box>
        <Box className="title outlined">
          <Typography>{t("main-solution-title-1")}</Typography>
          <Typography>{t("main-solution-title-2")}</Typography>
        </Box>
        <Box className="paragraph outlined">
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
        <Box
          className="button"
          onClick={() => {
            ScrollToTop();
            navigate("/product/medistep");
          }}
        >
          {t("main-solution-button")}
        </Box>
      </Box>
      <img
        // src="/img_kiosk.png"
        src="/medistep.png"
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
    <Box className="mainFeatures pageContent no-scroll">
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
  const navigate = useNavigate();

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
          <Box
            className="button"
            onClick={() => {
              ScrollToTop();
              navigate("/product/medistep");
            }}
          >
            {t("main-contact-button-1")}
          </Box>
          <a
            href="mailto:amazing@aitstudio.co.kr"
            target="_blank"
            rel="noreferrer"
          >
            <Box className="button">{t("main-contact-button-2")}</Box>
          </a>
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
        {newsList.slice(0, 4).map((item, idx) => {
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

  const partners = [
    {
      imgSrc: "/logo_sk.png",
      alt: "SK telecom",
      id: "SK-telecom",
    },
    {
      imgSrc: "/logo_esg2023.png",
      alt: "ESG Korea 2023 Powered by SK telecom",
      id: "ESG-Korea-2023",
    },
    {
      imgSrc: "/logo_snuh.png",
      alt: "SNUH",
      id: "SNUH",
    },
    {
      imgSrc: "/logo_nest.png",
      alt: "Start-up NEST",
      id: "start-up-NEST",
    },
    {
      imgSrc: "/logo_hondream.png",
      alt: "H OnDream",
      id: "H-OnDream",
    },
    {
      imgSrc: "/logo_gwangju_technopark.png",
      alt: "Gwanju Technopark",
      id: "gwanju-technopark",
    },
    {
      imgSrc: "/logo_korea_linc.png",
      alt: "Korea University Sejong Campus LINC",
      id: "korea-univ-sejong-linc",
    },
    {
      imgSrc: "/logo_lge.png",
      alt: "LG Electronics",
      id: "lg-elec",
    },
    {
      imgSrc: "/logo_mysc.png",
      alt: "mysc",
      id: "mysc",
    },
    {
      imgSrc: "/logo_sba.png",
      alt: "Seoul Business Agency",
      id: "sba",
    },
  ];

  return (
    <Box className="mainPartners pageContent">
      <Typography className="header">{t("main-partners-header")}</Typography>
      <Typography className="title">{t("main-partners-title")}</Typography>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={80}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          loop={true}
          modules={[Autoplay]}
          className="logoWrapper"
        >
          {partners.map((logo, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Box>
                  <img src={logo.imgSrc} alt={logo.alt} id={logo.id} />
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
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
