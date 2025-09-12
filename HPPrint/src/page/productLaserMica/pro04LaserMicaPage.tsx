import React from "react";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const Pro04LaserMicaPage: React.FC = () => {
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
              In UV trực tiếp lên kim loại : Sắt, Inox, Nhôm, thép,
            </h1>
            <div className="flex items-center text-gray-500 text-base mb-4 meta-list">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Thứ sáu - 24/03/2023 14:51
            </div>
            <div className="single-pages-content text-gray-800 space-y-4">
              <p className="mb-4 text-justify">
                <span className="text-[18px]">Tương tự như các công nghệ in UV định hình lên các vật liệu khác. <span className="text-red-600 italic">In UV trên kim loại</span> cũng là hình thức in trực tiếp lên bề mặt các các loại ( có bề mặt bằng phẳng) bằng mực in đến từ Nhật Bản và sử dụng công nghệ chiếu tia UV tức thì để giữ được độ bám mực, bền màu và hình ảnh sắc nét chân thực.</span>
              </p>
              <p className="mb-4 text-justify">
                <span className="text-[18px]">Khác với các công nghệ cũ như : in decal dán, in lụa kéo, sơn trực tiếp. Thì in UV sẽ thực hiện được các yêu cầu về hình ảnh nhiều màu sắc cùng lúc, nhiều chi tiết nhỏ, phức tạp. Độ bám và bền màu có thể lên đến 5 năm. Chính vì đó đáp ứng được các yêu cầu của thị trường và được tất cả mọi người sử dụng để thực hiện các yêu cầu hình ảnh khó trên các sản phẩm mà như việc in sơn không thực hiện đượcc. Hoặc việc phun mực và bám mực trực tiếp vào vật liệu sẽ làm tốt hơn về độ bám cũng như màu sắc so với việc in decal rồi dán lên như cũ.</span>
              </p>
              <p className="mb-4 text-justify">
                <span className="text-[18px]"><span className="text-red-600">Với giá in UV trên kim loại chỉ khoảng 250.000 VNĐ/m2</span> với 1 lớp mực. Sẽ tuỳ vào kích thước và độ nặng của vật tư để được báo giá chi tiết từng sản phẩm : <span className="text-red-600 font-bold">0901.622.922 Mr Thoan</span></span>
              </p>
              <p className="mb-4 text-[22px] font-bold">Ứng dụng trong rất nhiều vật liệu có bề mặt kim loại như :</p>
              <ul className="mb-4 ml-12 list-disc text-justify">
                <li className="text-[18px]">In UV trên sắt : Hộp sắt, hộp điều khiển bảng điện,…</li>
                <li className="text-[18px]">In UV trên inox : Bảng số nhà, bảng tên phòng, bảng chỉ dẫn, bảng nội quy, bảng hướng dẫn sử dụng,…</li>
                <li className="text-[18px]">in UV trên Alu : Bảng chỉ dẫn, bảng ghi chú, bảng tolet, bảng cấm hút thuốc, bảng tên phòng,…</li>
                <li className="text-[18px]">In UV trên nhôm : Tem nhôm, nhãn nhôm,….</li>
                <li className="text-[18px]">In UV trên thép : Bảng hướng dẫn sử dụng, bảng mô tả sản phẩm,…</li>
              </ul>
              <p className="mb-4 text-justify">
                <span className="text-[18px]">Các ứng dụng bằng các vật liệu kim loại trên như : Bảng số nhà, bảng tên phòng bàn, bảng chức danh, bảng điều khiển các thiết bị điện, bảng tên cá nhân, bảng hướng dẫn sử dụng, bảng báo, …</span>
              </p>
              <div className="my-4">
                <span className="text-red-600 text-[22px]">IN UV HOÀ BÌNH</span>
                <div className="mt-2 text-[18px]">
                  W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
                  T : 0901.622.922 - 0977.973.064<br />
                  E : inuvhoabinh@gmail.com<br />
                  D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
                </div>
              </div>
              <div className="my-4">
                <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-inox-alu-nhom-sat-kim-loai.html" className="text-red-600 underline font-bold">
                  BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN KIM LOẠI TẠI ĐÂY 
                </a>
                <a className="ml-2">Hoặc link : </a><a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-inox-alu-nhom-sat-kim-loai.html" className="text-blue-700 underline">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-inox-alu-nhom-sat-kim-loai.html</a>
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên inox xước</span> làm bảng mô tả công trình xây dựng để ngoài trời.
              </div>
              <div className="my-4">
              <img src="/assets/cat04/cat0001.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên inox bóng chấn cạnh</span> làm tên phòng giao dịch cho BIDV Hóc Môn
              </div>
              <div className="my-4">
              <img src="/assets/cat04/cat0002.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên alu xước</span> làm bảng tiêu lệnh phòng cháy chữa cháy.
              </div>
              <div className="my-4">
              <img src="/assets/cat04/cat0003.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên inox</span> làm hướng dẫn lối thoát hiểm trong toà nhà.
              </div>
              <div className="my-4">
              <img src="/assets/cat04/cat0004.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên inox gương</span> làm bảng chức danh
              </div>
              <div className="my-4">
              <img src="/assets/cat04/cat0005.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên inox</span> làm tem nhãn cho các thương hiệu, nhãn hàng.
              </div>
              <div className="my-4">
              <img src="/assets/cat04/cat0006.jpg" className="rounded-lg w-full object-cover" />
              </div>
            </div>
            <div className="pt-6">
                <span className="text-red-600 text-[22px]">IN UV&nbsp;HOÀ BÌNH&nbsp;</span>
                <div className="mt-2 text-[16px]">
                  W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
                  T : 0901.622.922 - 0977.973.064<br />
                  E : inuvhoabinh@gmail.com<br />
                  D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
                </div>
              </div>
              <div className="my-4">
                <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-inox-alu-nhom-sat-kim-loai.html" className="text-red-600 underline font-bold">
                  BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN KIM LOẠI TẠI ĐÂY
                </a>
                <a className="ml-2">Hoặc link : </a><a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-inox-alu-nhom-sat-kim-loai.html" className="text-blue-700 underline">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-inox-alu-nhom-sat-kim-loai.html</a>
              </div>
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

        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Pro04LaserMicaPage;
