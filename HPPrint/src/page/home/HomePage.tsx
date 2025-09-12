import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const productsHomeList = [
  {
    title: "IN UV TRÊN INOX LÀM TEM, NHÃN INOX",
    img: "/assets/home/home01.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN UV TRÊN GỖ LÀ TRANH TRANG TRÍ TRONG CÁC TRƯỜNG MẪU GIÁO",
    img: "/assets/home/home02.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN BẢNG TÊN CÔNG TY TRÊN INOX BÓNG CHO NGÂN HÀNG AGRIBANK",
    img: "/assets/home/home03.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN STICKER GRABFOOD CHO CÁC NHÀ HÀNG VÀ QUÁN ĂN",
    img: "/assets/home/home04.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN UV LÊN MICA LÀM HỘP ĐÈN CHO CÁC HÃNG BEER LỚN",
    img: "/assets/home/home05.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN BẢNG MICA ĐỂ BÀN CHO NGÂN HÀNG VIETCOMBANK",
    img: "/assets/home/home06.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN BẢNG MICA CHO IN HÀNG NHANH",
    img: "/assets/home/home07.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN BẢNG LOGO CHO GRAB MOCA",
    img: "/assets/home/home08.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN UV TRÊN KÍNH CƯỜNG LỰC LÀM KÍNH ỐP BẾP TRANG TRÍ",
    img: "/assets/home/home09.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "UV TRÊN INOX LÀM KỶ NIỆM CHƯƠNG",
    img: "/assets/home/home10.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN BẢNG TÊN CÔNG TY TRÊN INOX VÀNG GƯƠNG",
    img: "/assets/home/home11.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "THIỆP CƯỚI MICA TRONG SUỐT",
    img: "/assets/home/home12.jpg", // Đường dẫn ảnh mẫu
  },
];

const pageLinks = [
  "/productCuon/canvas",
  "/productCuon/decal",
  "/productCuon/hiflex",
];

const HomePage: React.FC = () => {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Danh sách sản phẩm */}
            {productsHomeList.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => navigate(pageLinks[idx % pageLinks.length])}
                tabIndex={0}
                role="button"
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate(pageLinks[idx % pageLinks.length]); }}
              >
                <div className="w-full aspect-square bg-gray-200 rounded mb-4 overflow-hidden flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-105">
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

export default HomePage;
