
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./page/about/AboutPage";
import NewsPage from "./page/news/NewsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
