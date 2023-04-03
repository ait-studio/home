import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../components/Header";
import { useState } from "react";

export default function MainPage() {
  const [titleWidth, setTitleWidth] = useState(50);
  return (
    <>
      <Header />
      <Box sx={styles.wrapper}>
        {/* Box for title */}
        <Box
          sx={{
            pl: "100vw",
            pt: "20vh",
            transform: `translate(-${titleWidth}vw, 0)`,
            width: `${titleWidth}vw`,
          }}
        >
          <Box sx={styles.titleWrapper}>
            <Typography variant="h1" sx={styles.headerFontStyle}>
              AIT
            </Typography>
            <Typography variant="h1" sx={styles.headerFontStyle}>
              studio
            </Typography>
          </Box>
          <Typography variant="h2" sx={styles.headerDetailFrontStyle}>
            시각딥러닝 전문기업,
            <br />
            (주)AIT Studio 입니다
          </Typography>
        </Box>
        <Typography variant="h2" sx={styles.headerDetailStyle}></Typography>
      </Box>
    </>
  );
}

const styles = {
  wrapper: {
    width: "100vw",
    height: "100vh",
    background:
      "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url('deadlift.avif')",
    backgroundSize: "cover",
  },

  headerFontStyle: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: "200px",
    paddingRight: "10vw",
    textAlign: "right",
    lineHeight: -2,
  },

  headerDetailFrontStyle: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: "32px",
    paddingRight: "10vw",
    textAlign: "right",
  },

  headerDetailStyle: {
    fontSzie: "40px",
  },

  titleWrapper: {
    width: "100%",
    height: "20%",
  },
};
