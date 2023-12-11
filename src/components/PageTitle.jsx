import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function PageTitle({ text }) {
  return (
    <Box className="pageTitle">
      <Typography>{text}</Typography>
      <Box className="divider" />
    </Box>
  );
}
