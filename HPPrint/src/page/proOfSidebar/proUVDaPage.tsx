import React from "react";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const ProUVDaPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeaderUnder />
      <div className="flex flex-1 max-w-7xl mx-auto w-full mt-6 mb-8">
        {/* Sidebar */}
        <div className="hidden md:block mr-10 min-w-[260px]">
          <Sidebar />
        </div>
        {/* Main content */}
        <main className="flex-1">
          <div className="bg-white rounded-lg">
            <h1 className="text-2xl font-bold mb-2">IN UV TRÊN DA, DA SIMILI, DA PU</h1>
            <div className="text-gray-500 text-[16px] mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="inline-flex items-center"><i className="far fa-clock mr-1" />Chủ nhật - 26/03/2023 20:33</span>
            </div>
            <div className="prose max-w-none text-base leading-relaxed single-pages-content">
              <p className="mb-4 text-[18px]">Ở <span className="font-bold text-red-600">in UV Hoà Bình</span> đang là một trong những đơn vị in UV có uy tín ở Hồ Chí Minh về việc in sản phẩm chất lượng, độ sắc nét cao, độ bền và bám mực lâu. Và với công nghệ in UV trên được ứng dụng vào việc in trang trí trên da đang trở nên rất phổ biến và dần thay thế các phương pháp sơn, vẽ trên các loại vật liệu trên da.</p>
              <p className="mb-2 text-[18px]">Có 3 loại da chủ yếu thông dụng :</p>
              <ul className="mb-4 list-disc pl-8">
                <li>Da thật (da thuộc) là da của các loài động vật, được thuộc qua lớp hoá chất để khử mùi và tăng độ bền của loại da và dễ gia công</li>
                <li>Da PU là loại da nhựa nhưng được phủ 1 lớp PU nên sẽ có độ mềm và bền gần như da thật.</li>
                <li>Da Simili là loại da nhựa được kết hợp tấm dệt kim và nhựa PVC được gia công tạo vân bề mặt nhưng da simili cứng hơn rất nhiều so với da thật.</li>
              </ul>
              <p className="font-bold text-lg mb-4">In UV trên da là như thế nào?</p>
              <p className="mb-4 text-[18px]">Cũng như các phương pháp khác in UV trên da là hình thức dùng mực phun trực tiếp trên bề mặt da để tạo ra các hoa văn, hình ảnh kiểu dáng đa dạng. Nhưng khác với các hình thức sơn và vẽ trên da thời gian thực hiện sẽ chậm do nhân công và chờ khô mực rất lâu, độ sắc nét của hình ảnh hoa văn không cao, màu sắc không đạt yêu cầu.</p>
              <p className="mb-4 text-[18px]">Đổi lại in UV áp dụng đầu phun kỹ thuật số sẽ in trực tiếp các hình ảnh, hoa văn lên bề mặt da trực tiếp với tốc độ cực nhanh kết hợp tia UV sấy khô mực ngay lực tức tại điểm in để tiếp tục in 1 lớp mực tiếp theo ngay sau đó. Với công nghệ in UV như vậy in ấn Hoà Bình sẽ tạo ra sản phẩm in trên da có màu sắc đúng chuẩn theo hình ảnh, độ sắc nét cực cao và thời gian thi công nhanh chóng đảm bảo các đơn hàng lớn. Và mực in khô ngay sau khi in có thể tiến hành gia công tạo hình sản phẩm.</p>
              <p className="mb-4 text-[18px]">Với chi phí in chỉ <span className="text-red-600 font-bold">250.000VNĐ/ m2</span> in 1 lớp mực và <span className="text-red-600 font-bold">500.000 VNĐ/m2</span> in có lót màu trắng phía dưới. Hãy liên hệ ngay hotline : <span className="text-red-600 font-bold">0901.622.922 Mr Thoan</span> để được tư vấn và báo giá cho từng sản phẩm.</p>
              <div className="pt-2 pb-2">
                <span className="text-red-600 text-[22px]">IN UV&nbsp;HOÀ BÌNH&nbsp;</span>
                <div className="mt-2 text-[16px]">
                  W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
                  T : 0901.622.922 - 0977.973.064<br />
                  E : inuvhoabinh@gmail.com<br />
                  D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
                </div>
              </div>
              <div className="my-4">
                <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-da-simili.html" target="_blank" rel="noopener noreferrer">
                  <span className="underline text-red-600 font-bold">&gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN DA&nbsp;TẠI ĐÂY &lt;&lt;</span>
                  <span> Hoặc link : <span className="text-blue-600">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-da-simili.html</span></span>
                </a>
              </div>
              <p className="italic pt-4 pb-4 text-blue-700 font-bold"><u>In uv trên da phản quang</u> để làm quả bóng chày xuất khẩu</p>
              <div className="my-4">
                <img src="/image/z4108849506251_11e3ae0f8bc3ce7e4006441676424aaa-2.jpeg" alt="In uv trên da phản quang bóng chày" className="rounded-lg w-full object-cover" />
              </div>
              <p className="italic pt-4 pb-4 text-blue-700 font-bold"><u>In uv trên da</u> để làm mẫu balo mới</p>
              <div className="my-4">
                <img src="/image/z4213735083712_55e7395f19affada606e476471cfe7ff(1).jpg" alt="In uv trên da làm mẫu balo mới" className="rounded-lg w-full object-cover" />
              </div>
              <p className="italic pt-4 pb-4 text-blue-700 font-bold"><u>In uv trên da ảnh</u> để làm mẫu balo mới cho thương hiệu The North Face</p>
              <div className="my-4">
                <img src="/image/z4213735102458_9bbc843f438a52ccdb47646618ca66e0.jpg" alt="In uv trên da ảnh balo The North Face" className="rounded-lg w-full object-cover" />
              </div>
              <p className="italic pt-4 pb-4 text-blue-700 font-bold"><u>In uv trên sổ da</u> để làm quà tặng lưu niệm</p>
              <div className="my-4">
                <img src="/image/z4213735094988_f6a5c61a83913bf43c3964373b1a1040.jpg" alt="In uv trên sổ da quà tặng" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-2 pb-2">
                <span className="text-red-600 text-[22px]">IN UV&nbsp;HOÀ BÌNH&nbsp;</span>
                <div className="mt-2 text-[16px]">
                  W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
                  T : 0901.622.922 - 0977.973.064<br />
                  E : inuvhoabinh@gmail.com<br />
                  D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
                </div>
              </div>
              <div className="my-4">
                <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-da-simili.html" target="_blank" rel="noopener noreferrer">
                  <span className="underline text-red-600 font-bold">&gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN DA&nbsp;TẠI ĐÂY &lt;&lt;</span>
                  <span> Hoặc link : <span className="text-blue-600">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-da-simili.html</span></span>
                </a>
              </div>
            </div>
          </div>
        </main>

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

                        {/* Tin 2 */}
                        <div className="flex-1 bg-white rounded-lg flex flex-col group">
                        <div className="overflow-hidden rounded-lg mb-3">
                            <img src="/assets/cat01/catsp2.jpg" alt="In UV trên mica tại in UV Hoà Bình" className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                        </div>
                        <div className="font-bold text-[22px] mb-1 text-gray-500 group-hover:text-sky-400 transition-colors duration-200">
                            In UV trên mica tại in UV Hoà Bình
                        </div>
                        <div className="flex items-center text-gray-500 text-base mb-2 text-[18px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            21 Apr 2019
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
                        
                    </div>
            </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProUVDaPage;
