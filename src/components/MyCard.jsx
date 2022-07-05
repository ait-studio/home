import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const tagStyle = {
  marginRight: "10px",
  padding: "0px 5px",
  fontSize: "16px",
  borderRadius: "10px",
  backgroundColor: "#BBB",
};
const contentStyle = { minHeight: "10px" };

export default function MyCard({ type, title, tag, content }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {type}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {tag.map((item) => {
            return (
              <>
                <span style={tagStyle}>{item}</span>
              </>
            );
          })}
        </Typography>
        <Typography variant="body2" sx={{ ...contentStyle }}>
          {content.map((item) => {
            return (
              <>
                <Box sx={contentStyle}>{item}</Box>
              </>
            );
          })}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">더 알아보기</Button>
      </CardActions>
    </Card>
  );
}
