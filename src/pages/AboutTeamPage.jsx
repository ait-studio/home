import { Box } from "@mui/system";
import Header from "../components/Header";

import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import InsightsIcon from "@mui/icons-material/Insights";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function AboutTeamPage() {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100vw",
          height: "auto",
          minHeight: "100vh",
          backgroundImage: "url('/deadlift.avif')",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            width: "100vw",
            height: "100px",
            pt: "100px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/tmp-favicon.png"
            alt="favicon"
            style={{ height: "100%" }}
          ></img>
        </Box>
        <Box>
          <VerticalTimeline lineColor="black">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(0, 0, 0, 1)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="Get vision"
              iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
              icon={<VideoCameraFrontIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                사용자로부터 영상을 수집
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Private하게 구성된 전용 공간을 사용
              </h4>
              <p>
                전용 공간에 구성된 캠을 통해, 최적의 영상을 사용자로부터 수집
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(125, 125, 125)", color: "#fff" }}
              date="AI processing"
              iconStyle={{ background: "rgb(125,125,125)", color: "#fff" }}
              icon={<SmartToyIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Deep-Learning 인공지능의 영상처리
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                경량 인공지능, 임베디드 시스템, 미리 구성된 모델 데이터
              </h4>
              <p>딥러닝-경량 인공지능을 통해 정량적인 데이터 추출, 분석</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="feedback"
              contentStyle={{ background: "rgb(255, 255, 255)", color: "#000" }}
              iconStyle={{ background: "rgb(255,255,255)", color: "#000" }}
              icon={<InsightsIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                사용자에게 결과 전송
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                시스템을 이용하는 고객에게 분석된 데이터를 가공하여 전송
              </h4>
              <p>
                모바일 디바이스를 통해 각 사용자는 가공되어 가독성 높게 구성된
                데이터와 여러 피드백을 수신
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Box>
      </Box>
    </>
  );
}
