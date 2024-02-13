import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./fonts/default.css";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";
import AboutPage from "./pages/AboutPage";
import MedistepPage from "./pages/MedistepPage";
import GaitStudioPage from "./pages/GaitStudioPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route path="/news" exact element={<NewsPage />} />
        <Route path="/product/medistep" exact element={<MedistepPage />} />
        <Route path="/product/gaitstudio" exact element={<GaitStudioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
