import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ScrollToTop from "../Tools/ScrollToTop";

function Footer(props) {
  return (
    <Box
      id="footer"
      sx={{ p: "5vh 10vw", backgroundColor: "#000", color: "#FFF" }}
    >
      <Box className="titleWrapper">
        <Box
          sx={{
            margin: "25px 0 10px 0",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          <Box
            className="title"
            onClick={() => {
              ScrollToTop();
            }}
          >
            <img
              src="/Black_LOGOTYPE-horizontal_cut.png"
              alt="logo"
              style={{
                width: "200px",
                filter: "invert(100%)",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>

        <Typography
          sx={{
            fontFamily: "Pretendard-Bold",
            color: "#bbb",
            p: "10px 0 5px 0",
            fontSize: "14px",
          }}
        >
          {/* 서울시 성동구 성수일로 20 동일빌딩 3층 | 사업자등록번호: 144-81-38601 */}
          서울시 성동구 성수일로 20 동일빌딩 3층 | E-mail: amazing601@gmail.com
        </Typography>

        <Typography
          sx={{
            fontFamily: "Inter-Medium",
            p: "0 0 25px 0",
            fontSize: "16px",
          }}
        >
          Copyright © AIT STUDIO Inc. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
