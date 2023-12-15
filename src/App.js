import { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { createTheme } from "@mui/material/styles";
// import { ThemeProvider } from "@mui/material/styles";

import "./fonts/default.css";
// import IndexPage from "./pages/IndexPage";
// import AboutTeamPage from "./pages/AboutTeamPage";
// import AboutSolutionPage from "./pages/AboutSolutionPage";
// import IrPage from "./pages/IrPage";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";
import AboutPage from "./pages/AboutPage";

// const THEME = createTheme({
//   typography: {
//     fontFamily: `"Inter", "Pretendard", "Arial", sans-serif`,
//     // fontSize: 14,
//     // fontWeightLight: 300,
//     // fontWeightRegular: 400,
//     // fontWeightMedium: 500,
//   },
//   palette: {
//     primary: {
//       // light: '#0587ff',
//       // main: "#0587ff",
//       // dark: '#002884',
//       // contrastText: '#fff',
//     },
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={THEME}>
    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route path="/news" exact element={<NewsPage />} />
        {/* <Route path="/aboutteam" exact element={<AboutTeamPage />} /> */}
        {/* <Route path="/aboutsolution" exact element={<AboutSolutionPage />} /> */}
        {/* <Route path="/ir" exact element={<IrPage />} /> */}
      </Routes>
    </Router>
    // </ThemeProvider>
  );
}

export default App;
