import Header from "../components/Header";
import Footer from "../components/Footer";
import CardGroup from "../components/CardGroup";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ControlPointIcon from "@mui/icons-material/ControlPoint";

export default function AboutSolutionPage() {
  return (
    <>
      <Header />
      <Box sx={{ ...styles.bodySize, ...styles.background }}>
        <Box sx={{ ...styles.centerize, ...styles.header }}>
          <Typography sx={{ ...styles.headerText }}>Us Solutions</Typography>
        </Box>
        <Box sx={styles.cardWrapper}>
          <Box
            className="card"
            sx={{ ...styles.card, ...styles.glassmorphism }}
          >
            <Typography sx={{ ...styles.cardTitle }}>FMMT</Typography>
            <Typography sx={{ ...styles.cardSubTitle }}>
              Fitness MoMenT, 헬스장의 ICT화
            </Typography>
            <Box sx={{ ...styles.cardThumbnail }}>
              Image for Represent this Item
            </Box>
            <Box
              sx={{ ...styles.moreButton }}
              onClick={() => {
                alert("Modal window activator will come to here");
              }}
            >
              <ControlPointIcon />
            </Box>
          </Box>
          <Box
            className="card"
            sx={{ ...styles.card, ...styles.glassmorphism }}
          >
            <Typography sx={{ ...styles.cardTitle }}>FMMT for Edu</Typography>
            <Typography sx={{ ...styles.cardSubTitle }}>
              FMMT for Education, 교육을 위한 ICT 장비
            </Typography>
            <Box sx={{ ...styles.cardThumbnail }}>
              Image for Represent this Item
            </Box>
            <Box
              sx={{ ...styles.moreButton }}
              onClick={() => {
                alert("Modal window activator will come to here");
              }}
            >
              <ControlPointIcon />
            </Box>
          </Box>
          <Box
            className="card"
            sx={{ ...styles.card, ...styles.glassmorphism }}
          >
            <Typography sx={{ ...styles.cardTitle }}>PD App</Typography>
            <Typography sx={{ ...styles.cardSubTitle }}>
              Parkinson Disease App, 파킨슨 초기 진단장치
            </Typography>
            <Box sx={{ ...styles.cardThumbnail }}>
              Image for Represent this Item
            </Box>
            <Box
              sx={{ ...styles.moreButton }}
              onClick={() => {
                alert("Modal window activator will come to here");
              }}
            >
              <ControlPointIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

const styles = {
  bodySize: {
    width: "100vw",
    height: "calc(100vh - 85.5px)",
    // padding 150px *2, footer 85.5px
    minHeight: "calc(100vh - 391.5px)",
    p: "150px 50px",
    boxSizing: "border-box",
  },
  background: {
    background: "url('/deadlift.avif')",
    backgroundSize: "cover",
  },
  centerize: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: "10%",
    backgroundColor: "#FFF",
    borderRadius: "20px",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 34,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardSubTitle: {
    fontSize: 20,
  },
  card: {
    // width: "max-content",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    m: 1,
    p: 1.5,
  },
  glassmorphism: {
    backdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderRadius: "12px",
    border: "1px solid rgba(209, 213, 219, 0.3)",
  },
  cardWrapper: {
    display: "flex",
    paddingTop: 3,
    justifyContent: "space-between",
  },
  cardThumbnail: {
    width: 400,
    height: 300,
    backgroundColor: "#F00",
    borderRadius: 5,
  },
  moreButton: {
    m: 1,
    mb: 0,
    "&:hover": {
      cursor: "pointer",
    },
  },
};
