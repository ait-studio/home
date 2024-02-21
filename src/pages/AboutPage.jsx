import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollTopBtn";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import EastIcon from "@mui/icons-material/East";
import { useTranslation } from "react-i18next";

function Background() {
  const { t } = useTranslation();

  const references = [
    {
      title: t("about-background-ref-1-title"),
      type: t("paper"),
      subTitle: t("about-background-ref-1-subTitle"),
      link: "https://pubmed.ncbi.nlm.nih.gov/27302701/",
    },
    {
      title: t("about-background-ref-2-title"),
      type: t("news"),
      subTitle: t("about-background-ref-2-subTitle"),
      link: "https://m.health.chosun.com/svc/news_view.html?contid=2021042001947",
    },
    {
      title: t("about-background-ref-3-title"),
      type: t("news"),
      subTitle: t("about-background-ref-3-subTitle"),
      link: "https://m.dongascience.com/news.php?idx=53798",
    },
    {
      title: t("about-background-ref-4-title"),
      type: t("paper"),
      subTitle: t("about-background-ref-4-subTitle"),
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3806920/",
    },
    {
      title: t("about-background-ref-5-title"),
      type: t("paper"),
      subTitle: t("about-background-ref-5-subTitle"),
      link: "https://pubmed.ncbi.nlm.nih.gov/30498834/",
    },

    {
      title: t("about-background-ref-6-title"),
      type: t("news"),
      subTitle: t("about-background-ref-6-subTitle"),
      link: "https://mobile.hidoc.co.kr/healthstory/news/C0000783225",
    },
  ];

  const colorMap = {
    //ko
    논문: "#009A9A",
    뉴스: "#0094FF",
    //en
    Papers: "#009A9A",
    News: "#0094FF",
  };

  return (
    <Box className="sectionWrapper background">
      <Box className="title">
        <Typography>{t("about-background-title")}</Typography>
      </Box>
      <Box className="content">
        <Box className="inlineInMobile">
          <Typography>{t("about-background-content-1")}</Typography>{" "}
          <Typography>{t("about-background-content-2")}</Typography>
        </Box>
        <Box>
          <Grid container spacing={2} className="gridContainer">
            {references.map((item, idx) => (
              <Grid item xs={12} sm={12} md={12} lg={4} xl={4} key={idx}>
                <Box className="referenceCard">
                  <Box>
                    <Typography className="title">{item.title}</Typography>
                    <Typography>
                      <Typography
                        className="type"
                        sx={{
                          color: colorMap[item.type],
                        }}
                      >
                        {item.type}
                      </Typography>{" "}
                      {`─ ${item.subTitle}`}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <Box className="linkBtn">
                        <EastIcon />
                      </Box>
                    </a>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box className="paragraph">
          <Typography>{t("about-background-paragraph-1")}</Typography>
          <Typography>{t("about-background-paragraph-2")}</Typography>
          <Typography>
            {t("about-background-paragraph-3")}{" "}
            <Typography
              sx={{ display: "inline", fontWeight: "700", color: "#0094FF" }}
            >
              {t("about-background-paragraph-4")}
            </Typography>
            {t("about-background-paragraph-5")}
          </Typography>
          <Typography>{t("about-background-paragraph-6")}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

function Mission() {
  const { t } = useTranslation();

  return (
    <Box className="sectionWrapper missions">
      <Box className="title">
        <Typography>{t("about-mission-title")}</Typography>
      </Box>
      <Box className="content">
        <Grid container spacing={2} className="gridContainer">
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box className="mission">
              <Typography>{t("about-mission-paragraph-1-1")}</Typography>{" "}
              <Typography>{t("about-mission-paragraph-1-2")}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box className="mission inlineInMobile">
              <Typography>{t("about-mission-paragraph-2-1")}</Typography>{" "}
              <Typography>{t("about-mission-paragraph-2-2")}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function History() {
  const { t } = useTranslation();

  const history = [
    {
      year: 2022,
      event: [
        { month: 7, name: t("about-history-2022-1") },
        { month: 11, name: t("about-history-2022-2") },
      ],
    },
    {
      year: 2023,
      event: [
        { name: t("about-history-2023-1") },
        { name: t("about-history-2023-2") },
        { name: t("about-history-2023-3") },
        { name: t("about-history-2023-4") },
        { name: t("about-history-2023-5") },
        { name: t("about-history-2023-6") },
        { name: t("about-history-2023-7") },
        { name: t("about-history-2023-8") },
      ],
    },
  ];

  return (
    <Box className="sectionWrapper history">
      <Box className="title">
        <Typography>{t("about-history-title")}</Typography>
      </Box>
      <Box className="content">
        {history.map((timeline) => (
          <Box className="timeline" key={timeline.year}>
            <Typography className="year">{timeline.year}</Typography>
            <Box className="eventWrapper">
              {timeline.event.map((event, idx) => (
                <Box className="event" key={idx}>
                  {event.month && (
                    <Box sx={{ paddingRight: "1rem" }}>
                      <Typography className="month">
                        {String(event.month).padStart(2, "0")}
                      </Typography>
                    </Box>
                  )}
                  <Typography className="name">{event.name}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function Peoples() {
  const { t } = useTranslation();

  const peoples = [
    {
      name: t("about-peoples-1-name"),
      resume: [
        t("about-peoples-1-resume-1"),
        t("about-peoples-1-resume-2"),
        t("about-peoples-1-resume-3"),
      ],
    },
    {
      name: t("about-peoples-2-name"),
      resume: [t("about-peoples-2-resume-1"), t("about-peoples-2-resume-2")],
    },
    {
      name: t("about-peoples-3-name"),
      resume: [t("about-peoples-3-resume-1"), t("about-peoples-3-resume-2")],
    },
    {
      name: t("about-peoples-4-name"),
      resume: [t("about-peoples-4-resume-1"), t("about-peoples-4-resume-2")],
    },
    {
      name: t("about-peoples-5-name"),
      resume: [t("about-peoples-5-resume-1"), t("about-peoples-5-resume-2")],
    },
  ];

  return (
    <Box className="sectionWrapper peoples">
      <Box className="title">
        <Typography>{t("about-peoples-title")}</Typography>
      </Box>
      <Box className="content">
        <Grid container spacing={2} className="gridContainer">
          {peoples.map((people, number) => (
            <Grid item xs={12} sm={12} md={12} lg={3} xl={3} key={number}>
              <Box className="people">
                <Typography className="name">{people.name}</Typography>
                <Box className={number ? "inlineInMobile" : ""}>
                  {people.resume.map((item, idx) => (
                    <>
                      <Typography className="resume" key={idx}>
                        {item}
                      </Typography>{" "}
                    </>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Box className="aboutPage">
      <Header />
      <PageTitle text={t("about-ait-studio")} />
      <Box className="pageContent">
        <Background />
        <Mission />
        <History />
        <Peoples />
      </Box>
      <Footer />
      <ScrollToTopBtn />
    </Box>
  );
}
