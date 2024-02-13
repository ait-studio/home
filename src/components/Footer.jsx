import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <Box id="footer" className="pageContent">
      <Box>
        <img
          src="/Black_LOGOTYPE-horizontal_cut.png"
          alt="logo"
          className="logo invert"
        />
        <Typography>{t("contact-to")}</Typography>
        <Typography>{t("location")}</Typography>
      </Box>
      <Box>
        <Box className="flexHor">
          <Typography>{t("privacy-policy")}</Typography>
          <Typography>|</Typography>
          <Typography>{t("terms-of-use")}</Typography>
        </Box>
        <Typography>{t("copyright")}</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
