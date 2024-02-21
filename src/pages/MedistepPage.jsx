import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollTopBtn";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";

function Overview() {
  const { t } = useTranslation();

  return (
    <Box className="overview">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/medistep-logo.png"
          alt="medistep logo"
          className="name logo"
        />
        <Typography className="name">{t("kiosk").toUpperCase()}</Typography>
      </Box>
      <Box className="catchphrase">
        <Typography>{t("product-medistep-catchphrase")}</Typography>
      </Box>
      <img src="/medistep.png" alt="medistep" />
      <Box className="paragraph">
        <Box>
          <Typography sx={{ display: "inline" }} className="bold blue">
            {t("product-medistep-about-1")}
          </Typography>
          <Typography sx={{ display: "inline" }}>
            {t("product-medistep-about-2")}
          </Typography>
        </Box>
        <Typography className="black">
          {t("product-medistep-about-3")}
        </Typography>
      </Box>
    </Box>
  );
}

function Background() {
  const { t } = useTranslation();

  const problems = [
    [t("product-medistep-problem-1")],
    [t("product-medistep-problem-2-1"), t("product-medistep-problem-2-2")],
    [t("product-medistep-problem-3-1"), t("product-medistep-problem-3-2")],
  ];

  return (
    <Box className="background">
      <Box className="problems">
        {problems.map((problem, idx) => (
          <Box className="problem" key={idx}>
            {problem.map((item, itemNo) => (
              <Typography key={itemNo} className="paragraph">
                {item}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
      <Box className="paragraphWrapper">
        <Typography className="paragraph">
          {t("product-medistep-problem-solution-1")}
        </Typography>
        <Typography className="paragraph blue">
          {t("product-medistep-problem-solution-2")}
        </Typography>
      </Box>
    </Box>
  );
}

function About() {
  const { t } = useTranslation();

  return (
    <Box className="aboutProduct">
      <Typography className="title">
        {t("product-medistep-about-title")}
      </Typography>
      <Typography className="paragraph">
        {t("product-medistep-about-content-1")}
      </Typography>
      <Typography className="paragraph">
        {t("product-medistep-about-content-2")}
      </Typography>
    </Box>
  );
}

function KeyFeatures() {
  const { t } = useTranslation();
  const features = [
    {
      title: t("product-medistep-feature-1-title"),
      content: t("product-medistep-feature-1-content"),
    },
    {
      title: t("product-medistep-feature-2-title"),
      content: t("product-medistep-feature-2-content"),
    },
    {
      title: t("product-medistep-feature-3-title"),
      content: t("product-medistep-feature-3-content"),
    },
    {
      title: t("product-medistep-feature-4-title"),
      content: t("product-medistep-feature-4-content"),
    },
  ];

  return (
    <Box className="keyFeatures">
      <Typography className="title">
        {t("product-medistep-feature-title")}
      </Typography>
      <Box className="content">
        <img src="/medistep-side.png" alt="medistep side" />
        <Box className="feature left top outlined">
          <Typography className="title">{features[0].title}</Typography>
          <Typography className="paragraph">{features[0].content}</Typography>
        </Box>
        <Box className="feature left bottom outlined">
          <Typography className="title">{features[1].title}</Typography>
          <Typography className="paragraph">{features[1].content}</Typography>
        </Box>
        <Box className="feature right top outlined">
          <Typography className="title">{features[2].title}</Typography>
          <Typography className="paragraph">{features[2].content}</Typography>
        </Box>
        <Box className="feature right bottom outlined">
          <Typography className="title">{features[3].title}</Typography>
          <Typography className="paragraph">{features[3].content}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

function ResultSheet() {
  const { t } = useTranslation();

  return (
    <Box className="resultSheet">
      <Typography className="title">
        {t("product-medistep-report-title")}
      </Typography>
      <img src="/medistep-result-sheet.png" alt="medistep result sheet" />
      <Typography className="paragraph">
        {t("product-medistep-report-content")}
      </Typography>
    </Box>
  );
}

function AISensing() {
  const { t } = useTranslation();

  return (
    <Box className="AISensing">
      <Box className="videoWrapper">
        <video controls={false} autoPlay loop muted>
          <source src={"/introduce_AISensing.mp4"} type="video/mp4" />
        </video>
      </Box>
      <Typography className="paragraph">
        {t("product-medistep-ai-sensing-content")}
      </Typography>
    </Box>
  );
}

function TechSpec() {
  const { t } = useTranslation();
  const techSpecs = [
    {
      category: t("product-medistep-spec-display"),
      row: [
        {
          subject: t("product-medistep-spec-display-1-subject"),
          value: t("product-medistep-spec-display-1-value"),
        },
        {
          subject: t("product-medistep-spec-display-2-subject"),
          value: t("product-medistep-spec-display-2-value"),
        },
        {
          subject: t("product-medistep-spec-display-3-subject"),
          value: t("product-medistep-spec-display-3-value"),
        },
        {
          subject: t("product-medistep-spec-display-4-subject"),
          value: t("product-medistep-spec-display-4-value"),
        },
      ],
    },
    {
      category: t("product-medistep-spec-speaker"),
      row: [
        {
          subject: t("product-medistep-spec-speaker-1-subject"),
          value: t("product-medistep-spec-speaker-1-value"),
        },
      ],
    },
    {
      category: t("product-medistep-spec-network"),
      row: [
        {
          subject: t("product-medistep-spec-network-1-subject"),
          value: t("product-medistep-spec-network-1-value"),
        },
      ],
    },
    {
      category: t("product-medistep-spec-system"),
      row: [
        {
          subject: t("product-medistep-spec-system-1-subject"),
          value: t("product-medistep-spec-system-1-value"),
        },
        {
          subject: t("product-medistep-spec-system-2-subject"),
          value: t("product-medistep-spec-system-2-value"),
        },
        {
          subject: t("product-medistep-spec-system-3-subject"),
          value: t("product-medistep-spec-system-3-value"),
        },
        {
          subject: t("product-medistep-spec-system-4-subject"),
          value: t("product-medistep-spec-system-4-value"),
        },
      ],
    },
    {
      category: t("product-medistep-spec-camera"),
      row: [
        {
          subject: t("product-medistep-spec-camera-1-subject"),
          value: t("product-medistep-spec-camera-1-value"),
        },
        {
          subject: t("product-medistep-spec-camera-2-subject"),
          value: t("product-medistep-spec-camera-2-value"),
        },
        {
          subject: t("product-medistep-spec-camera-3-subject"),
          value: t("product-medistep-spec-camera-3-value"),
        },
        {
          subject: t("product-medistep-spec-camera-4-subject"),
          value: t("product-medistep-spec-camera-4-value"),
        },
      ],
    },
    {
      category: t("product-medistep-spec-power"),
      row: [
        {
          subject: t("product-medistep-spec-power-1-subject"),
          value: t("product-medistep-spec-power-1-value"),
        },
        {
          subject: t("product-medistep-spec-power-2-subject"),
          value: t("product-medistep-spec-power-2-value"),
        },
        {
          subject: t("product-medistep-spec-power-3-subject"),
          value: t("product-medistep-spec-power-3-value"),
        },
      ],
    },
    {
      category: t("product-medistep-spec-weight"),
      row: [
        {
          subject: t("product-medistep-spec-weight-1-subject"),
          value: t("product-medistep-spec-weight-1-value"),
        },
      ],
    },
    {
      category: t("product-medistep-spec-color"),
      row: [
        {
          subject: t("product-medistep-spec-color-1-subject"),
          value: t("product-medistep-spec-color-1-value"),
        },
      ],
    },
    {
      category: t("product-medistep-spec-powercable"),
      row: [
        {
          subject: t("product-medistep-spec-powercable-1-subject"),
          value: t("product-medistep-spec-powercable-1-value"),
        },
      ],
    },
    {
      category: t("product-medistep-spec-standard"),
      row: [
        {
          subject: t("product-medistep-spec-standard-1-subject"),
          value: t("product-medistep-spec-standard-1-value"),
        },
      ],
    },
    {
      category: t("product-medistep-spec-conditions"),
      row: [
        {
          subject: t("product-medistep-spec-conditions-1-subject"),
          value: t("product-medistep-spec-conditions-1-value"),
        },
        {
          subject: t("product-medistep-spec-conditions-2-subject"),
          value: t("product-medistep-spec-conditions-2-value"),
        },
      ],
    },
    {
      category: t("product-medistep-spec-basics"),
      row: [
        {
          subject: t("product-medistep-spec-basics-1-subject"),
          value: t("product-medistep-spec-basics-1-value"),
        },
        {
          subject: t("product-medistep-spec-basics-2-subject"),
          value: t("product-medistep-spec-basics-2-value"),
        },
        {
          subject: t("product-medistep-spec-basics-3-subject"),
          value: t("product-medistep-spec-basics-3-value"),
        },
        {
          subject: t("product-medistep-spec-basics-4-subject"),
          value: t("product-medistep-spec-basics-4-value"),
        },
      ],
    },
  ];

  return (
    <Box className="techSpec">
      <Typography className="title">
        {t("product-medistep-spec-title")}
      </Typography>
      <Typography className="headline">{t("kiosk")}</Typography>
      <Box className="table">
        {techSpecs.map((item, idx) => {
          return (
            <Box key={idx} className="category">
              <Typography className="headline">{item.category}</Typography>
              <Box className="items">
                {item.row.map((row, rowIdx) => {
                  return (
                    <Box key={rowIdx} className="itemRow">
                      <Typography className="subject">{row.subject}</Typography>
                      <Typography className="value">{row.value}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default function MedistepPage() {
  return (
    <Box className="product medistep">
      <Header />
      <Box className="pageContent">
        <Overview />
        <Background />
        <About />
        <KeyFeatures />
        <ResultSheet />
        <AISensing />
        <TechSpec />
      </Box>
      <Footer />
      <ScrollToTopBtn />
    </Box>
  );
}
