import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./fonts/default.css";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";
import AboutPage from "./pages/AboutPage";
import MedistepPage from "./pages/MedistepPage";
import GaitStudioPage from "./pages/GaitStudioPage";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const THEME = createTheme({
  typography: {
    fontFamily: `"Inter", "Pretendard", "Helvetica", "Arial", sans-serif`,
  },
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/news" exact element={<NewsPage />} />
          <Route path="/product/medistep" exact element={<MedistepPage />} />
          <Route
            path="/product/gaitstudio"
            exact
            element={<GaitStudioPage />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
