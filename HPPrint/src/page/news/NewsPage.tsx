import React from "react";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sibar from "../../components/Sibar";
import Footer from "../../components/Footer";

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeaderUnder />
      <div className="flex flex-1 max-w-7xl mx-auto w-full mt-6 mb-8">
        {/* Sidebar */}
    <div className="hidden md:block mr-10">
      <Sibar />
        </div>

    <div className="max-w-5xl mx-auto py-8 px-4 min-h-[60vh]">
      <h1 className="text-3xl font-bold text-[#f6cb3f] mb-6">Tin Tức</h1>
      <div className="bg-white rounded-lg shadow p-6 text-gray-700">
        <p className="mb-2">Trang tin tức của In Ấn Hoà Bình sẽ cập nhật các thông tin mới nhất về công nghệ in ấn, sản phẩm, ưu đãi và các hoạt động nổi bật.</p>
        <ul className="list-disc pl-6">
          <li>Thông báo các chương trình khuyến mãi hấp dẫn.</li>
          <li>Cập nhật xu hướng in ấn mới nhất.</li>
          <li>Chia sẻ kinh nghiệm, mẹo vặt về in ấn.</li>
          <li>Hình ảnh hoạt động, dự án tiêu biểu của công ty.</li>
        </ul>
        <div className="mt-6 text-gray-400 italic">(Nội dung sẽ được cập nhật liên tục...)</div>
      </div>
    </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
