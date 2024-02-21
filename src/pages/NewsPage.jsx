import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollTopBtn";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTranslation } from "react-i18next";

export const newsList = [
  {
    imgSrc: "/news_23_03_02.png",
    link: "https://www.veritas-a.com/news/articleView.html?idxno=448646",
    title:
      "고려대 세종캠 LINC3.0사업단 스마트시티즌 위한 헬스케어 솔루션 관련 포럼 개최",
  },
  {
    imgSrc: "/news_23_06_27.png",
    link: "https://www.aitimes.com/news/articleView.html?idxno=152026",
    title: "[AI&빅데이터쇼] 에이트스튜디오, 파킨슨병 자가진단하는 AI 앱 소개",
  },
  {
    imgSrc: "/news_23_10_22.png",
    link: "https://www.aitimes.com/news/articleView.html?idxno=154454",
    title: "에이트스튜디오, 파킨슨병 진단하는 모바일 앱 출시한다",
  },
  {
    imgSrc: "/news_23_10_23.jpeg",
    link: "https://www.sedaily.com/NewsView/29W2K8YK2U",
    title: "SBA, 오픈이노베이션 데모데이 ‘IMPACT DIVE 2023’ 개최",
  },
  {
    imgSrc: "/news_23_11_20.jpeg",
    link: "https://www.seoul.go.kr/seoul/mediahub_view.do?articleNo=2009588",
    title:
      "돌봄로봇부터 AI안부전화까지, 세상 가장 따뜻한 최신 기술을 한자리에!",
  },
  {
    imgSrc: "/news_23_11_22.jpeg",
    link: "https://www.mk.co.kr/news/it/10880891",
    title: "에이트스튜디오, AI로 노인의 퇴행성 질환 진단",
  },
  {
    imgSrc: "/news_23_11_27.jpeg",
    link: "https://blog.naver.com/ks_enter/223275924839",
    title:
      "고려대 세종캠퍼스, 스마트시티 지능형 헬스케어 연구 센터 성과 교류회 및 12개 헬스케어 기업과 산학 MOU 체결",
  },
  {
    imgSrc: "/news_23_12_08.jpg",
    link: "https://www.etnews.com/20231206000020",
    title: "[ESG 스타트-UP in 성수 22] 에이트스튜디오",
  },
].reverse();

function News() {
  return (
    <Box className="news pageContent">
      <Grid container spacing={2}>
        {newsList.map((item, idx) => (
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
