import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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
      <Grid
        item
        xs={6}
        sx={{ textAlign: "left", display: "flex", alignItems: "center" }}
      >
        <RoomIcon />
        <Typography sx={{ ml: 1 }}>
          Location | 서울특별시 성동구 성수일로 20, 동일빌딩 3층
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ textAlign: "right" }}>
        대표자 박신기 | amazing601@snu.ac.kr
      </Grid>
    </Grid>
  );
}
