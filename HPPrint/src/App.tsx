
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderUnder from "./components/HeaderUnder";
import Sibar from "./components/Sibar";

function App() {
  return (
    <>
      <Header />
      <HeaderUnder current="GIỚI THIỆU" />
      {/* Nội dung trang About sẽ ở đây */}
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Trang Giới Thiệu</h1>
        <p className="mt-4 text-gray-600">Nội dung giới thiệu công ty...</p>
      </div>
      <Sibar />
      <Footer />
    </>
  );
}

export default App;
