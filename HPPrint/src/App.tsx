
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./page/about/AboutPage";
import NewsPage from "./page/news/NewsPage";
import ContactPage from "./page/contact/ContactPage";
import Pro01LaserMicaPage from "./page/productLaserMica/pro01LaserMicaPage";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
