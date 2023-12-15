import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box id="footer" className="pageContent">
      <Box>
        <img
          src="/Black_LOGOTYPE-horizontal_cut.png"
          alt="logo"
          className="logo invert"
        />
        <Typography>문의: amazing@aitstudio.co.kr</Typography>
        <Typography>서울시 성동구 성수일로 20 동일빌딩 3층</Typography>
      </Box>
      <Box>
        <Box className="flexHor">
          <Typography>개인정보처리방침</Typography>
          <Typography>|</Typography>
          <Typography>이용약관</Typography>
        </Box>
        <Typography>copyright AIT STUDIO Inc. All right reserved.</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
