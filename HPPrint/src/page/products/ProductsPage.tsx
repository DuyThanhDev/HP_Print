import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const productsList = [
  {
    title: "IN UV MICA",
    img: "/assets/matphang/phang01.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN UV TRÊN KÍNH",
    img: "/assets/matphang/phang02.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN UV TRÊN SẮT, NHÔM, INOX, ALU",
    img: "/assets/matphang/phang03.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN UV TRÊN NHỰA ABS, PVC",
    img: "/assets/matphang/phang04.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN UV TRÊN DA, SIMILI",
    img: "/assets/matphang/phang05.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN UV TRÊN FORMEX, FOAM, PIMA",
    img: "/assets/matphang/phang06.jpg", // Đường dẫn ảnh mẫu
  },
  {
    title: "IN UV TRÊN GỖ, VÁN MDF",
    img: "/assets/matphang/phang07.jpg", // Đường dẫn ảnh mẫu
  },
];

const pageLinks = [
  "/productCuon/canvas",
  "/productCuon/decal",
  "/productCuon/hiflex",
];

const ProductsPage: React.FC = () => {
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
            {productsList.map((item, idx) => (
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

export default ProductsPage;
