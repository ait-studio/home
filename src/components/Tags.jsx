import Box from "@mui/material/Box";

export default function Tags({ items = [], sx }) {
  return (
    <Box>
      {items.map((item, idx) => {
        if (idx < items.length - 1)
          return <Box sx={{ ...styles.tag, ...styles.spacing }}>#{item}</Box>;
        else return <Box sx={styles.tag}>#{item}</Box>;
      })}
    </Box>
  );
}

const styles = {
  tag: {
    display: "inline",
    fontSize: 14,
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",
  },
  spacing: {
    mr: 1,
  },
};
