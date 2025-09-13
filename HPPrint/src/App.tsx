
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./page/about/AboutPage";
import NewsPage from "./page/news/NewsPage";
import ContactPage from "./page/contact/ContactPage";
import Pro01LaserMicaPage from "./page/productLaserMica/pro01LaserMicaPage";
import Pro02LaserMicaPage from "./page/productLaserMica/pro02LaserMicaPage";
import Pro03LaserMicaPage from "./page/productLaserMica/pro03LaserMicaPage";
import Pro04LaserMicaPage from "./page/productLaserMica/pro04LaserMicaPage";
import ProInCuonPage from "./page/productCuon/proInCuonPage";
import ProInMatPhangPage from "./page/productMatPhang/proInMatPhangPage";
import ProductsPage from "./page/products/ProductsPage";
import HomePage from "./page/home/HomePage";
import ProUVPhangPage from "./page/proOfSidebar/proUVPhangPage";
import ProUVCuonPage from "./page/proOfSidebar/proUVCuonPage";
import ProUVDTFPage from "./page/proOfSidebar/proUVDTFPage";

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
          <Route path="/productLaserMica/pro04" element={<Pro04LaserMicaPage />} />
          <Route path="/productCuon" element={<ProInCuonPage />} />
          <Route path="/productMatPhang" element={<ProInMatPhangPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/proUVPhang" element={<ProUVPhangPage />} />
          <Route path="/proUVCuon" element={<ProUVCuonPage />} />
          <Route path="/proUVDTF" element={<ProUVDTFPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
