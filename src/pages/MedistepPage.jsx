import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollTopBtn";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import EastIcon from "@mui/icons-material/East";
import { useTranslation } from "react-i18next";

export default function MedistepPage() {
  const { t } = useTranslation();

  return (
    <Box className="product medistep">
      <Header />
      <PageTitle text={t("about-ait-studio")} />
      <Box className="pageContent"></Box>
      <Footer />
      <ScrollToTopBtn />
    </Box>
  );
}
