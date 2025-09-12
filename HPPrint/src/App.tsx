
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./page/about/AboutPage";
import NewsPage from "./page/news/NewsPage";
import ContactPage from "./page/contact/ContactPage";
import Pro01LaserMicaPage from "./page/productLaserMica/pro01LaserMicaPage";
import Pro02LaserMicaPage from "./page/productLaserMica/pro02LaserMicaPage";
import Pro03LaserMicaPage from "./page/productLaserMica/pro03LaserMicaPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/productLaserMica" element={<Pro01LaserMicaPage />} />
          <Route path="/productLaserMica/pro02" element={<Pro02LaserMicaPage />} />
          <Route path="/productLaserMica/pro03" element={<Pro03LaserMicaPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
