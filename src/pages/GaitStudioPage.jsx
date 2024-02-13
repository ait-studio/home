import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollTopBtn";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";

function Overview() {
  const { t } = useTranslation();

  return (
    <Box className="overview">
      <Box className="catchphrase">
        <Typography>{t("product-gaitstudio-catchphrase-1")}</Typography>
        <Typography>{t("product-gaitstudio-catchphrase-2")}</Typography>
      </Box>
      <Typography className="name">{t("product-gaitstudio")}</Typography>
      <img
        src="/gait-studio.png"
        alt="gait studio screenshot"
        className="screenshot"
      />
      <Box className="paragraph">
        <Box>
          <Typography sx={{ display: "inline" }} className="bold blue">
            {t("product-gaitstudio-about-1")}
          </Typography>
          <Typography sx={{ display: "inline" }}>
            {t("product-gaitstudio-about-2")}
          </Typography>
        </Box>
        <Typography className="black">
          {t("product-gaitstudio-about-3")}
        </Typography>
      </Box>
      <Box
        className="capsuleButton"
        onClick={() => console.log("download now!")}
      >
        <Typography>{t("product-gaitstudio-button")}</Typography>
      </Box>
    </Box>
  );
}

function About() {
  const { t } = useTranslation();

  const abouts = [
    {
      title: [t("product-gaitstudio-about-1-title-1")],
      content: t("product-gaitstudio-about-1-content"),
      imgSrc: "/gait-studio-collect-data.png",
    },
    {
      title: [t("product-gaitstudio-about-2-title-1")],
      content: t("product-gaitstudio-about-2-content"),
      imgSrc: "/gait-studio-ai-based.png",
    },
    {
      title: [
        t("product-gaitstudio-about-3-title-1"),
        t("product-gaitstudio-about-3-title-2"),
      ],
      content: t("product-gaitstudio-about-3-content"),
      imgSrc: "/gait-studio-real-time.png",
    },
    {
      title: [t("product-gaitstudio-about-4-title-1")],
      content: t("product-gaitstudio-about-4-content"),
      imgSrc: "/gait-studio-anywhere.png",
    },
  ];

  return abouts.map((item, idx) => (
    <Box className="aboutProduct" key={idx}>
      <Box className="titleWrapper">
        {item.title &&
          item.title.map((titleLine, idxTitle) => (
            <Typography className="title" key={idxTitle}>
              {titleLine}
            </Typography>
          ))}
      </Box>
      <Typography className="content paragraph">{item.content}</Typography>
      <img src={item.imgSrc} alt={item.title.join(" ")} />
    </Box>
  ));
}

function Promotion() {
  const { t } = useTranslation();

  return (
    <Box className="promotion">
      <Box className="titleWrapper">
        <Typography className="title">
          {t("product-gaitstudio-summary-1")}
        </Typography>
        <Typography className="title">
          {t("product-gaitstudio-summary-2")}
        </Typography>
      </Box>
      <img
        className="qr"
        src="/gait-studio-qr.png"
        alt="gait studio download qr"
      />
      <Box
        className="downloadButton"
        onClick={() => {
          console.log("app store link!");
        }}
      >
        <img
          src="/gait-studio-download-ios.png"
          alt="gait studio download button"
        />
      </Box>
    </Box>
  );
}

export default function GaitStudioPage() {
  return (
    <Box className="product gaitStudio">
      <Header />
      <Box className="pageContent">
        <Overview />
        <About />
        <Promotion />
      </Box>
      <Footer />
      <ScrollToTopBtn />
    </Box>
  );
}
