import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollTopBtn";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { useTranslation } from "react-i18next";
import DownloadIcon from "@mui/icons-material/Download";
import { useCallback } from "react";

function PRcenter() {
  const { t } = useTranslation();

  const downloadFile = useCallback((filename) => {
    // using Java Script method to get PDF file
    fetch(filename).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = filename;
        alink.click();
      });
    });
  }, []);

  return (
    <Box className="sectionWrapper prCenter">
      {/* <Box className="title">
        <Typography>{t("about-prCenter-title")}</Typography>
      </Box> */}
      <Box className="content">
        <Box className="section mwc2024">
          <Box className="title">
            <Typography>{t("about-prCenter-mwc2024-title")}</Typography>
          </Box>
          <Grid container>
            <Grid item className="videoWrapper" xs={12}>
              <video controls={true} autoPlay={false} loop={true} muted>
                <source src="/mwc2024_liveSketch.mp4" type="video/mp4" />
              </video>
              <Typography>{t("about-prCenter-mwc2024-video-title")}</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box className="section prMaterials">
          <Box className="title">
            <Typography>{t("about-prCenter-prMaterials-title")}</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item className="videoWrapper" xs={12} sm={6}>
              <video controls={true} autoPlay={false} loop={true}>
                <source
                  src={t("about-prCenter-prMaterials-about-medistep-src")}
                  type="video/mp4"
                />
              </video>
              <Typography>About Medistep</Typography>
            </Grid>
            <Grid item className="videoWrapper" xs={12} sm={6}>
              <video controls={true} autoPlay={false} loop={true}>
                <source src={"usage_gaitStudio.mp4"} type="video/mp4" />
              </video>
              <Typography>Gait Studio demo</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box className="section brochure">
          <Box className="title">
            <Typography>{t("about-prCenter-brochure-title")}</Typography>
          </Box>
          <Box className="container">
            <Divider />
            <Box className="buttonWrapper">
              <Typography>
                {t("about-prCenter-brochure-medistep-button-en")}
              </Typography>
              <Box
                className="button"
                onClick={() => {
                  downloadFile("AIT_Studio_brochure_Medistep_en.pdf");
                }}
              >
                {t("download")}
              </Box>
            </Box>
            <Divider />
            <Box className="buttonWrapper">
              <Typography>
                {t("about-prCenter-brochure-gaitstudio-button-en")}
              </Typography>
              <Box
                className="button"
                onClick={() => {
                  downloadFile("AIT_Studio_brochure_Gait_studio_en.pdf");
                }}
              >
                {t("download")}
              </Box>
            </Box>
            <Divider />
          </Box>
        </Box>
        <Box className="section IR">
          <Box className="title">
            <Typography>{t("about-prCenter-IR-title")}</Typography>
          </Box>
          <Box className="container">
            <Divider />
            <Box className="buttonWrapper">
              <Typography>{t("about-prCenter-IR-button-ko")}</Typography>
              <Box
                className="button"
                onClick={() => {
                  downloadFile("AIT_Studio_IR_ko.pdf");
                }}
              >
                {t("download")}
              </Box>
            </Box>
            <Divider />
            <Box className="buttonWrapper">
              <Typography>{t("about-prCenter-IR-button-en")}</Typography>
              <Box
                className="button"
                onClick={() => {
                  downloadFile("AIT_Studio_IR_en.pdf");
                }}
              >
                {t("download")}
              </Box>
            </Box>
            <Divider />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function IRPage() {
  const { t } = useTranslation();

  return (
    <Box className="newsPage">
      <Header />
      <PageTitle text={t("about-prCenter-title")} />
      <Box className="pageContent">
        <PRcenter />
      </Box>
      <Footer />
      <ScrollToTopBtn />
    </Box>
  );
}
