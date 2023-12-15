import { useRef, useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollTopBtn";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import EastIcon from "@mui/icons-material/East";

function Background() {
  const references = [
    {
      title: "치매 연관성",
      type: "논문",
      subTitle:
        "Gait Speed and Decline in Gait Speed as Predictors of Incident Dementia",
      link: "https://pubmed.ncbi.nlm.nih.gov/27302701/",
    },
    {
      title: "치매 연관성",
      type: "뉴스",
      subTitle: "걸음걸이를 살피면 치매 가능성 알 수 있다?",
      link: "https://m.health.chosun.com/svc/news_view.html?contid=2021042001947",
    },
    {
      title: "노화 연관성",
      type: "뉴스",
      subTitle: "빨리 걸으면 노화 느려진다.",
      link: "https://m.dongascience.com/news.php?idx=53798",
    },
    {
      title: "파킨슨병",
      type: "논문",
      subTitle:
        "Gait speed in Parkinson disease correlates with cholinergic degeneration",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3806920/",
    },
    {
      title: "근감소증",
      type: "논문",
      subTitle:
        "Measuring Sarcopenia Severity in Older Adults and the Value of Effective Interventions",
      link: "https://pubmed.ncbi.nlm.nih.gov/30498834/",
    },

    {
      title: "근감소증",
      type: "뉴스",
      subTitle: "부모님과 걸을 때 '이것' 유심히 살펴 보세요",
      link: "https://mobile.hidoc.co.kr/healthstory/news/C0000783225",
    },
  ];

  const colorMap = {
    논문: "#009A9A",
    뉴스: "#0094FF",
  };

  return (
    <Box className="sectionWrapper background">
      <Box className="title">
        <Typography>배경</Typography>
      </Box>
      <Box className="content">
        <Box className="inlineInMobile">
          <Typography>
            시니어의 뇌, 신경계, 근골격계 문제는 걸음에서 나타납니다.
          </Typography>{" "}
          <Typography>
            많은 연구자들이 걸음과 퇴행성질환 사이의 연관성을 밝혀냈습니다.
          </Typography>
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
          <Typography>
            그런데 일상 생활에서 걸음속도, 보폭, 보행비대칭 등을 어떻게 측정할
            수 있을까요?
          </Typography>
          <Typography>
            AIT STUDIO는 혁신적인 AI카메라를 베이스로, 간편한 보행측정 도구
            메디스텝을 개발했습니다.
          </Typography>
          <Typography>
            몸에 붙이는 IMU센서, 압력 발판센서를 쓰면 통상 13만원의 검사료가
            발생합니다. 전문가가 데이터를 해석해야 하기 때문이죠. 반면
            메디스텝은{" "}
            <Typography
              sx={{ display: "inline", fontWeight: "700", color: "#0094FF" }}
            >
              AI 측정부터 AI 해석까지 인공지능이 전과정을 자동화
            </Typography>
            합니다.
          </Typography>
          <Typography>
            전국민이 무료로 보행건강을 측정하는 그날까지. 에이트스튜디오㈜의
            메디스텝(MediStep)이 함께합니다.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

function Mission() {
  return (
    <Box className="sectionWrapper missions">
      <Box className="title">
        <Typography>미션/비전</Typography>
      </Box>
      <Box className="content">
        <Grid container spacing={2} className="gridContainer">
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box className="mission">
              <Typography>
                시니어의 동적 바이오마커인 걸음 분석의 글로벌 탑티어.
              </Typography>{" "}
              <Typography>Gait analysis Global Top tier</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box className="mission inlineInMobile">
              <Typography>
                사람의 눈을 대신하는 AI 기술로 우리 모두의 부양부담을 줄입니다.
              </Typography>{" "}
              <Typography>
                시니어와 함께 걷는 기업 ─ 에이트스튜디오㈜
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function History() {
  const history = [
    {
      year: 2022,
      event: [
        { month: 7, name: "에이트스튜디오㈜ 설립. Founded AIT STUDIO." },
        { month: 11, name: "벤처기업인증." },
      ],
    },
    {
      year: 2023,
      event: [
        { name: "SKT ESG KOREA 2023 참여" },
        { name: "현대 H온드림 참여" },
        { name: "KDB 스타트업 2023 참여" },
        { name: "분당서울대병원 K-바이오 헬스케어 사업" },
        { name: "광주테크노파크 치매 코호트 멀티모달 사업" },
        { name: "신용보증기금 Start up NEST 14기" },
        { name: "서울창업허브 성수 ─ SKT 대기업 오픈이노베이션 PoC 사업" },
        { name: "서울창업허브 성수 입주" },
      ],
    },
  ];

  return (
    <Box className="sectionWrapper history">
      <Box className="title">
        <Typography>연혁</Typography>
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
  const peoples = [
    {
      name: "박신기",
      resume: [
        "-현대모비스 9년",
        "-서울대 데이터사이언스대학원 AIoT랩(휴학)",
        "-KAIST 기계학사",
      ],
    },
    {
      name: "명하준",
      resume: ["에이트스튜디오", "수석개발자"],
    },
    {
      name: "주희민",
      resume: ["에이트스튜디오", "개발자"],
    },
    {
      name: "정찬우",
      resume: ["에이트스튜디오", "임베디드 개발자"],
    },
  ];

  return (
    <Box className="sectionWrapper peoples">
      <Box className="title">
        <Typography>함께하는 사람들</Typography>
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
  return (
    <Box className="aboutPage">
      <Header />
      <PageTitle text="에이트스튜디오 소개" />
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
