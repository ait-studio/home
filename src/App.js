import { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./fonts/default.css";
import IndexPage from "./pages/IndexPage";
import AboutTeamPage from "./pages/AboutTeamPage";
import AboutSolutionPage from "./pages/AboutSolutionPage";
import IrPage from "./pages/IrPage";

export const ThemeStateContext = createContext(true);
// true means day-mode, false means dark-mode

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<IndexPage />} />
        <Route path="/aboutteam" exact element={<AboutTeamPage />} />
        <Route path="/aboutsolution" exact element={<AboutSolutionPage />} />
        <Route path="/ir" exact element={<IrPage />} />
      </Routes>
    </Router>
  );
}

export default App;
