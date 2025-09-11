
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./page/about/AboutPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
