import React from "react";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const proCuonList = [
  {
    title: "IN UV TRÊN CANVAS",
    img: "", // Thay ảnh sau
  },
  {
    title: "IN UV TRÊN DECAL",
    img: "", // Thay ảnh sau
  },
  {
    title: "IN UV TRÊN BẠT KHÔNG GÂN, BẠT HIFLEX",
    img: "", // Thay ảnh sau
  },
];

const ProInCuonPage: React.FC = () => {
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
              <div key={idx} className="flex flex-col items-center w-full md:w-1/3">
                <div className="w-full aspect-square bg-gray-200 rounded mb-4 overflow-hidden flex items-center justify-center">
                  {/* Ảnh sản phẩm sẽ gắn sau */}
                  {item.img ? (
                    <img src={item.img} alt={item.title} className="object-cover w-full h-full" />
                  ) : (
                    <span className="text-gray-400">Ảnh sản phẩm</span>
                  )}
                </div>
                <div className="text-[16px] font-bold text-center text-gray-700 uppercase tracking-wide">
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
