import React from "react";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const ProUVFPFPage: React.FC = () => {
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
            <h1 className="text-2xl font-bold mb-2">IN UV TRỰC TIẾP TRÊN TẤM FORMEX/PIMA/FORMAT/PVC FOAM.</h1>
            <div className="text-gray-500 text-[16px] mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="inline-flex items-center"><i className="far fa-clock mr-1" />Chủ nhật - 26/03/2023 19:47</span>
            </div>
            <div className="prose max-w-none text-base leading-relaxed single-pages-content">
              <p className="font-bold text-[22px] mb-4 ml-1">In UV trên tấm Foam, tấm Formex, tấm Format, Tấm PVC Pima</p>
              <p className="mb-4 text-[20px]">Thông thường trước đây các vật phẩm được tạo thành vật liệu trên sẽ được in hình ảnh bằng các in trên decal rồi dán hoặc ép lên. Nhưng với cách làm trên thì chất lượng hình ảnh sẽ không được sắc nét và độ bám cũng như độ bền không được thời gian lâu hoặc rất nhanh nếu ở ngoài trời.</p>
              <p className="mb-4 text-[20px]">Hiện nay công nghệ in UV được áp dụng rộng rãi để in lên tấm Formex/tấm Format/tấm Foam/tấm Pima bằng mực chuyên biệt dành cho công nghệ in UV đến từ Nhật Bản và hệ thống đầu phun kỹ thuật số kết hợp tia UV chiếu trực tiếp xuyên suốt sẽ in được tất cả các hình ảnh khó về độ màu sắc, độ sắc nét của hình ảnh và đặc biệt là độ bám màu chặt và sát vào bề mặt vật liệu.</p>
              <p className="mb-4 text-[20px]">Với <span className="text-red-600 font-bold">chi phí in 250.000 VNĐ/m2</span> với hình ảnh in 1 lớp mực kết hợp với chi phí vật liệu giá thành thấp, việc kết hợp vật liệu là tấm Foam/tấm Pima/ tấm Formex/tấm Format với in UV được ứng dụng rộng rãi trong lĩnh vực quảng cáo, trang trí nội thất,……..</p>
              <p className="mb-4 text-[20px]"> <span className="text-yellow-500 font-bold">In ấn Hoà Bình</span> với hơn 5 năm trong lĩnh vực in UV có hệ thống máy in lớn ( khổ 1,2×2,4m) và số lượng. Liên tục cập nhật các công nghệ in UV mới. Sẽ đảm bảo phục vụ quý khách hàng các sản phẩm chất lượng cao, tiến độ nhanh để phù hợp với các thương hiệu lớn đến từ các đối tác doanh nghiệp, tập đoàn lớn trong và ngoài nước.</p>
              <p className="mb-4 text-[20px]">Hỗ trợ xử lý sản phẩm khó về màu sắc, số lượng nhiều. <span className="text-red-600 font-bold">Quý khách cứ liên hệ : 0901.622.922</span> để được hỗ trợ tư vấn và báo giá chi tiết.</p>
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
                <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-foam-formex-pima.html" target="_blank" rel="noopener noreferrer">
                  <span className="underline text-red-600 font-bold">&gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN FORMEX TẠI ĐÂY &lt;&lt;</span>
                  <span> Hoặc link : <span className="text-blue-600">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-foam-formex-pima.html</span></span>
                </a>
              </div>
              <p className="italic pt-4 pb-4 text-blue-700"><u className="font-bold">In uv trên formex mềm</u> để làm tiêu lệnh phòng chống dịch CV19</p>
              <div className="my-4">
                <img src="/assets/sidebar/uvfpf/fpf01.jpg" alt="In uv trên formex mềm tiêu lệnh phòng chống dịch" className="rounded-lg w-full object-cover" />
              </div>
              <p className="italic pt-4 pb-4 text-blue-700"><u className="font-bold">In uv trên formex mềm</u> để làm tên phòng cho công ty</p>
              <div className="my-4">
                <img src="/assets/sidebar/uvfpf/fpf02.jpg" alt="In uv trên formex mềm tên phòng công ty" className="rounded-lg w-full object-cover" />
              </div>
              <p className="italic pt-4 pb-4 text-blue-700"><u className="font-bold">In uv trên formex mềm</u> để làm dummy quảng cáo cho thương hiệu Grabfood</p>
              <div className="my-4">
                <img src="/assets/sidebar/uvfpf/fpf03.jpg" alt="In uv trên formex mềm dummy Grabfood" className="rounded-lg w-full object-cover" />
              </div>
              <p className="italic pt-4 pb-4 text-blue-700"><u className="font-bold">In uv trên formex mềm</u> để làm quảng cáo, poster dán</p>
              <div className="my-4">
                <img src="/assets/sidebar/uvfpf/fpf04.jpg" alt="In uv trên formex mềm poster dán" className="rounded-lg w-full object-cover" />
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
                <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-foam-formex-pima.html" target="_blank" rel="noopener noreferrer">
                  <span className="underline text-red-600 font-bold">&gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN FORMEX TẠI ĐÂY &lt;&lt;</span>
                  <span> Hoặc link : <span className="text-blue-600">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-foam-formex-pima.html</span></span>
                </a>
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

export default ProUVFPFPage;
