import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const proCuonList = [
  {
    title: "IN UV TRÊN CANVAS",
    img: "/assets/cuon/cuon01.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN UV TRÊN DECAL",
    img: "/assets/cuon/cuon02.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN UV TRÊN BẠT KHÔNG GÂN, BẠT HIFLEX",
    img: "/assets/cuon/cuon03.jpg", // Đường dẫn ảnh mẫu
  },
];

const pageLinks = [
  "/productCuon/canvas",
  "/productCuon/decal",
  "/productCuon/hiflex",
];

const ProInCuonPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeaderUnder />
      <div className="flex flex-1 max-w-7xl mx-auto w-full mt-6 mb-8">
        {/* Sidebar */}
        <div className="hidden md:block mr-10">
          <Sidebar />
        </div>
        {/* Main content */}
        <main className="flex-1">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Danh sách sản phẩm */}
            {proCuonList.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center w-full md:w-1/3 cursor-pointer group"
                onClick={() => navigate(pageLinks[idx])}
                tabIndex={0}
                role="button"
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate(pageLinks[idx]); }}
              >
                <div className="w-full aspect-square bg-gray-200 rounded mb-4 overflow-hidden flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-105">
                  {/* Ảnh sản phẩm sẽ gắn sau */}
                  {item.img ? (
                    <img
                      src={item.img}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-gray-400">Ảnh sản phẩm</span>
                  )}
                </div>
                <div className="text-[16px] font-bold text-center text-gray-700 uppercase tracking-wide transition-colors duration-200 group-hover:text-sky-500">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ProInCuonPage;
