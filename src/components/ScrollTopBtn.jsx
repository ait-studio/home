import { Box } from "@mui/system";

import ScrollToTop from "../Tools/ScrollToTop";

export default function ScrollToTopBtn() {
  return (
    <Box
      id="scrollToTopBtn"
      onClick={() => {
        ScrollToTop();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M20 10L29 18.8682M20 10L11 18.8682M20 10V29.7071"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
