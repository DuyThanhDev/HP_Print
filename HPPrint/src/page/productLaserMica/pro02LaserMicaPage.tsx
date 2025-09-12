import React from "react";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const Pro02LaserMicaPage: React.FC = () => {
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
              IN UV TRÊN KÍNH CƯỜNG LỰC. NHỮNG LÝ DO NÊN CHỌN IN UV TRÊN KÍNH CƯỜNG LỰC.
            </h1>
            <div className="flex items-center text-gray-500 text-base mb-4 meta-list">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Thứ tư - 17/04/2019 13:47
            </div>
            <div className="single-pages-content text-[17px] text-gray-800 space-y-4">
              <p>
                <strong>
                  Những lý do nên chọn in trực tiếp lên kính?{" "}
                  <span className="text-red-600 italic underline">in uv trên kính</span> là như thế nào?
                </strong>
              </p>
              <p>
                <span className="text-red-600 underline font-bold">In UV&nbsp;Hoà Bình</span> sử dụng công nghệ in UV, in trực tiếp file lên bề mặt kính theo yêu cầu. Sẽ tạo được độ sắc nét cho sản phẩm và màu sắc tuyệt đối.
              </p>
              <p>Những nhược điểm của các cách làm trước đây như :</p>
              <ul>
                <li>- Dán decal lên bề mặt kính sẽ dễ không tạo được sự chân thật cho sản phẩm. Mất đi sự sang trọng.</li>
                <li>- Vẽ trực tiếp lên bề mặt kính thì sản phẩm được tạo ra không có sự sắc nét. Và đặc biệt là dễ tróc.</li>
              </ul>
              <p>
                Giờ đây khi công nghệ in UV ra đời, những tấm kính cửa sẽ được trang trí lộng lẫy hơn, những tấm kính chắn phòng tắm sẽ được in hoạ tiết 3D sống động. Những vách kệ bếp không còn đơn điệu 1 màu, những bức tường được trang trí sang trọng và bắt mắt.&nbsp;
              </p>
              <p>
                Với công nghệ in UV này, thì sản phẩm có được những ưu điểm rất lớn nên được rất nhiều khách hàng lựa chọn.
              </p>
              <ul className="ml-2">
                <li>- In trực tiếp file hình lên bề mặt kính tạo độ nét tuyệt đối và chất lượng màu 99% tương ứng.</li>
                <li>- Sử dụng mực in UV và công nghệ in khép kín có thể tạo hiệu ứng 3D cho hình ảnh và độ bền mực lên đến 5 năm.</li>
                <li>- Dễ dàng thi công và thực hiện sản phẩm trong thời gian ngắn.</li>
                <li>- Cho hình ảnh sống động chân thật.</li>
                <li>- Tạo ra những bức tranh sang trọng trang trí trong ngôi nhà bạn.</li>
              </ul>
              <div>
                <span className="text-red-600 text-[22px]">IN UV&nbsp;HOÀ BÌNH&nbsp;</span>
                <div className="mt-2 text-[18px]">
                  W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
                  T : 0901.622.922 - 0977.973.064<br />
                  E : inuvhoabinh@gmail.com<br />
                  D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
                </div>
              </div>
              <div className="my-4">
                <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-kinh.html" className="text-red-600 underline font-bold">
                  &gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN KÍNH&nbsp;TẠI ĐÂY &lt;&lt;
                </a>
                <span className="ml-2">Hoặc link : <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-kinh.html" className="text-blue-700 underline">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-kinh.html</a></span>
              </div>
              <div className="text-blue-700">
                <em className="text-blue-700 font-bold underline">In uv trên kính</em> để vách ốp bếp trang trí
              </div>
              <div className="my-4">
              <img src="/assets/cat02/cat01.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="my-4">
              <img src="/assets/cat02/cat02.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="my-4">
              <img src="/assets/cat02/cat03.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="text-blue-700 pt-2 pb-2">
                <em className="text-blue-700 font-bold underline">In uv trên kính</em> để thớt cắt thức ăn
              </div>
              <div className="my-4">
              <img src="/assets/cat02/cat04.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="text-blue-700 pt-2 pb-2">
                <em className="text-blue-700 font-bold underline">In uv trên kính</em> để làm mặt bàn tròn trang trí
              </div>
              <div className="my-4">
              <img src="/assets/cat02/cat05.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="text-blue-700 pt-2 pb-2">
                <em className="text-blue-700 font-bold underline">In uv trên kính</em> để làm tranh ảnh trang trí nhà cửa
              </div>
              <div className="my-4">
              <img src="/assets/cat02/cat06.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <div className="my-4">
              <img src="/assets/cat02/cat07.jpg" className="rounded-lg w-full object-cover" />
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
                  &gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN KÍNH&nbsp;TẠI ĐÂY &lt;&lt;
                </a>
                <span className="ml-2">Hoặc link : <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-kinh.html" className="text-blue-700 underline">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-kinh.html</a></span>
              </div>
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
export default Pro02LaserMicaPage;