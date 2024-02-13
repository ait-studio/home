import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LanguageIcon from "@mui/icons-material/Language";

import i18n from "../locales/i18n";

export default function LanguageSwitchButton() {
  const languageItems = ["ko", "en"];
  return (
    <Box className="languageSwitchButton">
      <LanguageIcon className="icon" />
      <Box className="buttonWrapper">
        {languageItems
          .sort(function (a, b) {
            if (i18n.language === a && i18n.language !== b) {
              return -1;
            }
            if (i18n.language !== a && i18n.language === b) {
              return 1;
            }
            return a - b;
          })
          .map((item, idx) => (
            <Box
              className={
                i18n.language === item
                  ? "toggleButton selected"
                  : "toggleButton"
              }
              key={idx}
              onClick={() => {
                i18n.changeLanguage(item);
              }}
            >
              <Typography>{item}</Typography>
              <Divider orientation="vertical" flexItem />
            </Box>
          ))}
      </Box>
    </Box>
  );
}
