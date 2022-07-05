import Grid from "@mui/material/Grid";

import RoomIcon from "@mui/icons-material/Room";

const footerWrapperStyle = {
  p: "30px",
  backgroundColor: "#DDD",
  color: "#666",
  fontStyle: "italic",
  fontFamily: "cursive",
};

export default function Footer() {
  return (
    <Grid container sx={footerWrapperStyle}>
      <Grid item xs={6} sx={{ textAlign: "left" }}>
        <RoomIcon />
        Location | 상상플래닛 707호, 서울시 성동구 뚝섬로 13길 38 (성수동 2가)
      </Grid>
      <Grid item xs={6} sx={{ textAlign: "right" }}>
        대표자 박신기 | amazing601@google.com
      </Grid>
    </Grid>
  );
}
