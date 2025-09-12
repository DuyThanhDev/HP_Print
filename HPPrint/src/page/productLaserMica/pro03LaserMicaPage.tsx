
import React from "react";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const Pro03LaserMicaPage: React.FC = () => {
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
          <div className="box-single-pages">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              In UV trên mica tại in UV Hoà Bình
            </h1>
            <div className="flex items-center text-gray-500 text-base mb-4 meta-list">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Chủ nhật - 21/04/2019 14:59
            </div>
            <div className="single-pages-content text-[17px] text-gray-800 space-y-4">
              <p className="text-lg font-bold italic">IN UV TRÊN MICA Ở IN UV HOÀ BÌNH</p>
              <p>Những ứng dụng của in UV trên Mica :</p>
              <ul className="list-decimal ml-6">
                <li><u>In UV mica</u> làm bảng hiệu, hộp đèn hút nổi, bảng quảng cáo</li>
                <li><u>In UV trên mica</u> làm bảng tên công ty, bảng tên phòng ban, bảng số nhà,...</li>
                <li>In thiệp cưới mica cao cấp, in ảnh cưới trên mica</li>
                <li><u>In uv trên mica</u> làm bảng chỉ dẫn, bảng tiêu lệnh,...</li>
                <li><u>In UV trên mica</u> ứng dụng trong quảng cáo làm stick dán, các công cụ POSM,...</li>
              </ul>
              <p className="text-lg font-bold mt-4">Những lý do nên chọn công nghệ <span className="text-red-600 underline">in UV trên Mica</span> tại <span className="text-red-600 underline">in UV Hoà Bình</span></p>
              <ul className="list-disc ml-6">
                <li>Có nhiều máy khổ lớn 1,2m x 2,4m đáp ứng được các khổ vật liệu lớn, full khổ của tấm Mica.</li>
                <li>Tốc độ in hàng nhanh, đáp ứng được tiến độ các đơn lớn</li>
                <li>Sử dụng công nghệ in mực tiên tiến của công nghệ in UV mới nhất.</li>
                <li>Có sẵn mica và máy cắt Laser xử lý nhanh được các đơn hàng khó.</li>
                <li>Bảo hành mực in lên đến 5 năm, sử dụng các loại mực chính hãng từ nhà máy,</li>
                <li>Hỗ trợ test mẫu, đổ màu theo yêu cầu khắc khe của thị trường.</li>
                <li>Có khâu kiểm tra chất lượng đảm bảo hàng hoá thành phẩm luôn tuyệt đối.</li>
                <li>Giá in <span className="text-red-600 font-bold">chỉ từ 250.000 VNĐ/m2</span> , liên hệ Hotline để được tư vấn về công nghệ và báo giá : <span className="text-red-600 font-bold">0901.622.922</span> Mr Thoan</li>
              </ul>
              <div className="mt-4">
                <span className="text-red-600 font-bold">IN UV HOÀ BÌNH</span>
                <div className="mt-2 text-[16px]">
                  W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
                  T : 0901.622.922 - 0977.973.064<br />
                  E : inuvhoabinh@gmail.com<br />
                  D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
                </div>
              </div>
              <div className="my-4">
                <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-mica-nhua-pvc.html" className="text-red-600 underline font-bold">
                  &gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN MICA TẠI ĐÂY &lt;&lt;
                </a>
                <span className="ml-2">Hoặc link : <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-mica-nhua-pvc.html" className="text-blue-700 underline">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-mica-nhua-pvc.html</a></span>
              </div>
              <div className="mt-4 text-base">
                <span className="text-blue-700 font-bold underline">In uv trên mica màu</span> để làm kệ để menu cho hệ thống rạp chiếu phim CGV
              </div>
              <img src="/image/f78876eab9fa5ba402eb%284%29.jpg" alt="" className="w-full my-2 rounded" />
              <div className="mt-4 text-base">
                <span className="text-blue-700 font-bold underline">In uv trên mica sữa</span> để làm stick dán quảng cáo cho Grab
              </div>
              <img src="/image/z4207549284185_45e32fb84af9a9aa58a3cc8a17921e15%281%29.jpg" alt="" className="w-full my-2 rounded" />
              <div className="mt-4 text-base">
                <span className="text-blue-700 font-bold underline">In uv trên mica sữa</span> để làm stick dán quảng cáo cho GrabFood
              </div>
              <img src="/image/z4207549286801_19c1b4ec5189837a167b6ca0bad14aeb%281%29.jpg" alt="" className="w-full my-2 rounded" />
              <div className="mt-4 text-base">
                <span className="text-blue-700 font-bold underline">In uv ngược trên mica trong</span> để làm bảng hướng dẫn cho Giao Hàng nhanh
              </div>
              <img src="/image/64666922_623416694806870_6802652447908036608_o%282%29.jpeg" alt="" className="w-full my-2 rounded" />
              <div className="mt-4 text-base">
                <span className="text-blue-700 font-bold underline">In uv trên mica sữa</span> để làm chân đế menu cho bảo hiểm Dai-ichi life
              </div>
              <img src="/image/z4207549297990_93bf0338cc860875c1af6623d44e321e.jpg" alt="" className="w-full my-2 rounded" />
              <div className="mt-4 text-base">
                <span className="text-blue-700 font-bold underline">In uv ngược trên mica trong</span> để làm ảnh cưới trang trí treo tường
              </div>
              <img src="/image/z4207549291995_081a45c88265e57f630b84e2dba8a644%281%29.jpg" alt="" className="w-full my-2 rounded" />
              <div className="mt-4 text-base">
                <span className="text-blue-700 font-bold underline">In uv trên mica</span> để làm bảng điều khiển điện
              </div>
              <img src="/image/DSCF0104%281%29.JPG" alt="" className="w-full my-2 rounded" />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Pro03LaserMicaPage;