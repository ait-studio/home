import Header from "../components/Header";
import Footer from "../components/Footer";
import CardGroup from "../components/CardGroup";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function AboutSolutionPage() {
  const mockupCards = [
    {
      type: "헬스장에 적용된 인공지능",
      title: "똑똑한 헬스장, 합리적인 시스템",
      tag: ["헬스", "보디빌딩", "Pose Model", "Skeleton Structure"],
      content: [
        "모션을 인식하고, 관절과 관절 사이를 강체(Rigid body)로 취급해 표현하는 스켈레톤 구조를 얻으려면, 기존에는 고가의 모션캡처 수트와 장비들이 필요했습니다",
        "그러나 우리 AIT studio는 심도 카메라도, 모션캡처 장비도 없이 영상으로부터 스켈레톤 구조를 추출하는 딥러닝-경량 인공지능 기반의 플랫폼을 제공합니다",
        "당신의 헬스장을 스마트 헬스장으로 업그레이드하세요",
        "",
        "사용자는 촬영되고 분석된 운동 영상을 손쉽게 받아볼 수 있고, 트레이너는 운동 피드백이라는 원래 역할에 집중할 수 있습니다",
      ],
    },
  ];
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "calc(100vw - 100px)",
          height: "auto",
          minHeight: "calc(100vh - 391.5px)",
          p: "150px 50px",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "50px", mb: "50px" }}>
          # our solutions
        </Typography>
        <Divider />
        <CardGroup cards={mockupCards} number_of_cards_in_a_row={1} />
      </Box>
      <Footer />
    </>
  );
}
