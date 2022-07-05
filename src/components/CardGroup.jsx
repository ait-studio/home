import MyCard from "./MyCard";

import Grid from "@mui/material/Grid";

export default function CardGroup({
  cards = [],
  number_of_cards_in_a_row = 3,
}) {
  return (
    <Grid container columnSpacing={10} rowSpacing={10} sx={{ p: "50px" }}>
      {cards.map((item) => {
        return (
          <>
            <Grid item xs={12 / number_of_cards_in_a_row}>
              <MyCard
                type={item?.type}
                title={item?.title}
                tag={item?.tag}
                content={item?.content}
              ></MyCard>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
}
