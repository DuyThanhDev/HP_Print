
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
            <div className="flex items-center text-gray-500 text-base mb-2 meta-list">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Chủ nhật - 21/04/2019 14:59
            </div>
            <div className="single-pages-content text-[18px] text-gray-800 space-y-2">
              <p className="text-lg font-bold italic text-[20px]">IN UV TRÊN MICA Ở IN UV HOÀ BÌNH</p>
              <p>Những ứng dụng của in UV trên Mica :</p>
              <ul className="list-decimal ml-4">
                <li className="pt-4"><u>In UV mica</u> làm bảng hiệu, hộp đèn hút nổi, bảng quảng cáo</li>
                <li className="pt-4"><u>In UV trên mica</u> làm bảng tên công ty, bảng tên phòng ban, bảng số nhà,...</li>
                <li className="pt-4">In thiệp cưới mica cao cấp, in ảnh cưới trên mica</li>
                <li className="pt-4"><u>In uv trên mica</u> làm bảng chỉ dẫn, bảng tiêu lệnh,...</li>
                <li className="pt-4"><u>In UV trên mica</u> ứng dụng trong quảng cáo làm stick dán, các công cụ POSM,...</li>
              </ul>
              <p className="text-[20px] pt-4">Những lý do nên chọn công nghệ <span className="text-red-600 underline font-bold">in UV trên Mica</span> tại <span className="text-red-600 underline font-bold">in UV Hoà Bình</span></p>
              <ul>
                <li className="pt-4">- Có nhiều máy khổ lớn 1,2m x 2,4m đáp ứng được các khổ vật liệu lớn, full khổ của tấm Mica.</li>
                <li className="pt-4">- Tốc độ in hàng nhanh, đáp ứng được tiến độ các đơn lớn</li>
                <li className="pt-4">- Sử dụng công nghệ in mực tiên tiến của công nghệ in UV mới nhất.</li>
                <li className="pt-4">- Có sẵn mica và máy cắt Laser xử lý nhanh được các đơn hàng khó.</li>
                <li className="pt-4">- Bảo hành mực in lên đến 5 năm, sử dụng các loại mực chính hãng từ nhà máy,</li>
                <li className="pt-4">- Hỗ trợ test mẫu, đổ màu theo yêu cầu khắc khe của thị trường.</li>
                <li className="pt-4">- Có khâu kiểm tra chất lượng đảm bảo hàng hoá thành phẩm luôn tuyệt đối.</li>
                <li className="pt-4">Giá in <span className="text-red-600">chỉ từ 250.000 VNĐ/m2</span> , liên hệ Hotline để được tư vấn về công nghệ và báo giá : <span className="text-red-600 font-bold">0901.622.922</span> Mr Thoan</li>
              </ul>
              <div>
                <span className="text-red-600 text-[22px]">IN UV&nbsp;HOÀ BÌNH&nbsp;</span>
                <div className="mt-2 text-[16px]">
                  W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
                  T : 0901.622.922 - 0977.973.064<br />
                  E : inuvhoabinh@gmail.com<br />
                  D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
                </div>
              </div>
              <div className="my-4">
                <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-kinh.html" className="text-red-600 underline font-bold">
                  BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN KÍNH TẠI ĐÂY 
                </a>
                <a className="ml-2">Hoặc link : </a><a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-mica-nhua-pvc.html" className="text-blue-700 underline">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-mica-nhua-pvc.html</a>
              </div>

              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên mica màu</span> để làm kệ để menu cho hệ thống rạp chiếu phim CGV
              </div>
              <div className="my-4">
              <img src="/assets/cat03/cat001.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên mica sữa</span> để làm stick dán quảng cáo cho Grab
              </div>
                <div className="my-4">
                    <img src="/assets/cat03/cat002.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên mica sữa</span> để làm stick dán quảng cáo cho GrabFood
              </div>
              <div className="my-4">
              <img src="/assets/cat03/cat003.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv ngược trên mica trong</span> để làm bảng hướng dẫn cho Giao Hàng nhanh
              </div>
              <div className="my-4">
              <img src="/assets/cat03/cat004.jpeg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên mica sữa</span> để làm chân đế menu cho bảo hiểm Dai-ichi life
              </div>
              <div className="my-4">
              <img src="/assets/cat03/cat005.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv ngược trên mica trong</span> để làm ảnh cưới trang trí treo tường
              </div>
              <div className="my-4">
              <img src="/assets/cat03/cat006.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên mica</span> để làm bảng điều khiển điện
              </div>
              <div className="my-4">
              <img src="/assets/cat03/cat007.jpg" className="rounded-lg w-full object-cover" />
              </div>
            </div>
          </div>

          <div>
                <span className="text-red-600 text-[22px]">IN UV&nbsp;HOÀ BÌNH&nbsp;</span>
                <div className="mt-2 text-[16px]">
                  W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
                  T : 0901.622.922 - 0977.973.064<br />
                  E : inuvhoabinh@gmail.com<br />
                  D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
                </div>
              </div>
              <div className="my-4">
                <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-kinh.html" className="text-red-600 underline font-bold">
                  BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN KÍNH TẠI ĐÂY 
                </a>
                <a className="ml-2">Hoặc link : </a><a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-mica-nhua-pvc.html" className="text-blue-700 underline">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-mica-nhua-pvc.html</a>
              </div>

        {/* BẢN TIN LIÊN QUAN */}
        <section className="max-w-7xl mx-auto w-full mt-8">
          <h3 className="text-xl md:text-1xl font-bold text-gray-600 mb-2">BẢN TIN LIÊN QUAN</h3>
          <div className="w-full h-1 flex mb-4">
            <div className="w-36 h-0.5 bg-sky-400 rounded-l-full"></div>
            <div className="flex-1 h-0.5 bg-gray-200 rounded-r-full"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Tin 1 */}
            <div
              className="flex-1 bg-white rounded-lg flex flex-col group cursor-pointer"
            //   onClick={handleClickTin1}
            >
              <div className="overflow-hidden rounded-lg mb-3">
                <img src="/assets/cat01/catsp1.jpg" alt="In UV trên kính cường lực" className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
              </div>
              <div className="font-bold text-[22px] mb-1 text-gray-500 group-hover:text-sky-400 transition-colors duration-200">
                In UV trên kính cường lực.<br/>Những lý do nên chọn in UV trên kính cường lực.
              </div>
              <div className="flex items-center text-gray-500 text-base mb-2 text-[18px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                17 Apr 2019
              </div>
              <button className="border border-gray-400 rounded-full px-6 py-1 text-base text-gray-600 hover:text-sky-400 hover:border-sky-300 transition-colors duration-200 w-max mt-2">Xem thêm</button>
            </div>

            {/* Tin 0 */}
            <div
              className="flex-1 bg-white rounded-lg flex flex-col group cursor-pointer"
              // onClick={handleClickTin1}
            >
              <div className="overflow-hidden rounded-lg mb-3">
                <img src="/assets/cat01/catsp0.jpg" alt="In UV trên kính cường lực" className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
              </div>
              <div className="font-bold text-[22px] mb-1 text-gray-500 group-hover:text-sky-400 transition-colors duration-200">
                Những lý do nên chọn cắt mica với công nghệ LASER CO2 ở IN HOÀ BÌNH??
              </div>
              <div className="flex items-center text-gray-500 text-base mb-2 text-[18px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                17 Apr 2019
              </div>
              <button className="border border-gray-400 rounded-full px-6 py-1 text-base text-gray-600 hover:text-sky-400 hover:border-sky-300 transition-colors duration-200 w-max mt-2">Xem thêm</button>
            </div>
            
            {/* Tin 3 */}
            <div className="flex-1 bg-white rounded-lg flex flex-col group">
              <div className="overflow-hidden rounded-lg mb-3">
                <img src="/assets/cat01/catsp3.jpg" alt="In UV trực tiếp lên kim loại" className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
              </div>
              <div className="font-bold text-[22px] mb-1 text-gray-500 group-hover:text-sky-400 transition-colors duration-200">
                In UV trực tiếp lên kim loại : Sắt, Inox, Nhôm, thép,
              </div>
              <div className="flex items-center text-gray-500 text-base mb-2 text-[18px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                24 Mar 2023
              </div>
              <button className="border border-gray-400 rounded-full px-6 py-1 text-base text-gray-600 hover:text-sky-400 hover:border-sky-300 transition-colors duration-200 w-max mt-2">Xem thêm</button>
            </div>
          </div>
        </section>
    
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Pro03LaserMicaPage;