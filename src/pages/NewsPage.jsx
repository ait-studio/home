import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollTopBtn";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTranslation } from "react-i18next";

function News() {
  return (
    <Box className="news pageContent">
      <Grid container spacing={2}>
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
        ].map((item, idx) => (
          <Grid item xs={6} md={4} xl={4} key={idx}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <Box className="newsCard">
                <Box
                  className="thumbnail"
                  sx={{ backgroundImage: `url(${item.imgSrc})` }}
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
        ))}
      </Grid>
    </Box>
  );
}
export default function NewsPage() {
  const { t } = useTranslation();

  return (
    <Box className="newsPage">
      <Header />
      <PageTitle text={t("news")} />
      <News />
      <Footer />
      <ScrollToTopBtn />
    </Box>
  );
}
