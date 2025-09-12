import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const Pro01LaserMicaPage: React.FC = () => {
  const navigate = useNavigate();
  const handleClickTin1 = () => {
    navigate("/productLaserMica/pro02");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleClickTin2 = () => {
    navigate("/productLaserMica/pro03");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleClickTin3 = () => {
    navigate("/productLaserMica/pro04");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
            <div className="single-pages-content space-y-6 text-[17px] text-gray-800">
              <h1 className="text-2xl md:text-3xl font-bold text-justify mb-2">Những lý do nên chọn cắt mica với công nghệ LASER CO2 ở IN HOÀ BÌNH??</h1>
              <div className="flex items-center text-gray-500 text-base mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Thứ năm - 13/08/2020 22:12
              </div>
              
              <p className="text-[22px] font-bold text-justify">
                BẠN ĐANG CẦN " CẮT " " KHẮC " LASER - Hãy <span className="text-red-600 text-[20px] font-bold">liên hệ ngay : 0837.622.922</span> <span className="font-normal">Để được tư vấn và báo giá tốt nhất.</span>
              </p>
              <p className="text-[22px] font-bold text-justify">NHỮNG LÝ DO NÊN CHỌN MÁY LASER HOÀ BÌNH :</p>
              <ul className="space-y-4">
                <li className="text-[20px] text-justify"><span className="text-yellow-600 font-bold">1.</span> Giá cắt và khắc rẻ - Gọi ngay để được báo giá chính xác theo nhu cầu.</li>
                <li className="text-[20px] text-justify"><span className="text-yellow-600 font-bold">2.</span> Thi công nhanh, cắt những đơn lẻ - Giải quyết <span className="text-blue-600 font-bold">nhanh 2h</span> cho khách hàng cần gấp.</li>
                <li className="text-[20px] text-justify"><span className="text-yellow-600 font-bold">3.</span> <span className="text-blue-600 font-bold">Khổ máy lớn : 1,3 mét x 2,5 mét</span> - Đáp ứng được xử lý vật tư lớn.</li>
                <li className="text-[20px] text-justify"><span className="text-yellow-600 font-bold">4.</span> Sử dụng tia cắt Laser CO - <span className="text-blue-600 font-bold">Cắt được vật tư dày 20mm</span> nhưng vẫn giữ được độ láng mịn của đường cắt.</li>
                <li className="text-[20px] text-justify"><span className="text-yellow-600 font-bold">5.</span> Có <span className="text-blue-600 font-bold">đầu Camera</span> - đảm bảo được <span className="text-blue-600 font-bold">độ chính xác dưới &lt; 0.01mm.</span></li>
                <li className="text-[20px] text-justify"><span className="text-yellow-600 font-bold">6.</span> Tốc độ <span className="text-blue-600 font-bold">cắt nhanh</span> : 600mm/s và tốc độ <span className="text-blue-600 font-bold">khắc nhanh</span> : 1000mm/s - Đáp ứng được những đơn hàng lớn cần tốc độ.</li>
                <li className="text-[20px] text-justify"><span className="text-yellow-600 font-bold">7.</span> Có <span className="text-blue-600 font-bold">máy in UV phẳng</span> - Xử lý được trọng vẹn 1 sản phẩm cùng 1 nơi, đỡ vận chuyển.</li>
              </ul>
              <p className="text-[22px] font-bold">IN UV HOÀ BÌNH - CẮT LASER HOÀ BÌNH</p>
              <p className="text-[20px] text-justify">Với máy cắt laser khổ lớn, đội ngũ tư vấn nhiệt tình. Sẵn sàng hỗ trợ xử lý file và tư vấn cho khách hàng để có sản phẩm hoàn thiện nhất. Kết hợp với công nghệ in UV, sẽ thực hiện được nhiều công đoạn cùng 1 nơi cho quý khách hàng.</p>
              <p className="text-[20px]">Hãy <span className="text-red-600 font-bold">liên hệ ngay : 0837.622.922</span> Để được tư vấn và báo giá tốt nhất.</p>
              <div className="my-4">
              <img src="/assets/cat01/cat1.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <p className="text-[22px] font-bold">NHỮNG SẢN PHẨM MÀ MÁY LASER - XƯỞNG HOÀ BÌNH THỰC HIỆN ĐƯỢC :</p>
              <ul className="text-[20px]">
                <li className="mb-3">- Cắt Mica : độ dày từ 1,5mm - 20mm. Khổ lớn nhất 1,2 mét x2,4 mét.</li>
                <li className="mb-3">- Cắt chữ Mica và in theo màu file đảm bảo chuẩn 100%.</li>
                <li className="mb-3">- Cắt Mica mọi hình dáng theo file có sẵn.</li>
                <li className="mb-3">- Khắc hình, chữ lên gỗ.</li>
                <li className="mb-3">- Cắt vải theo khổ máy.</li>
                <li className="mb-3">- Khắc chữ và hình lên da.</li>
                <li className="mb-3">- Cắt da theo khổ.</li>
              </ul>
              <p className="text-[20px]">Hãy <span className="text-red-600 font-bold">liên hệ ngay : 0837.622.922</span> Để được tư vấn và báo giá tốt nhất và nhanh nhất.</p>
              <p className="text-[20px] mt-6">Một số hình ảnh tham khảo :</p>
              <p className="text-[20px]">CHỮ NỔI MICA MÀU - BẢNG TÊN CÔNG TY</p>
                            <div className="my-4">
              <img src="/assets/cat01/cat2.jpg" className="rounded-lg w-full object-cover" />
              </div>
                            <div className="my-4">
              <img src="/assets/cat01/cat3.jpg" className="rounded-lg w-full object-cover" />
              </div>
                            <div className="my-4">
              <img src="/assets/cat01/cat4.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <p className="text-[20px]">KHẮC MICA THÀNH PHẨM - QUÀ LƯU NIỆM</p>
                            <div className="my-4">
              <img src="/assets/cat01/cat5.jpg" className="rounded-lg w-full object-cover" />
              </div>
                            <div className="my-4">
              <img src="/assets/cat01/cat6.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <p className="text-[20px]">CẮT VẬT PHẨM MICA THEO HÌNH DẠNG CÓ SẴN</p>
                            <div className="my-4">
              <img src="/assets/cat01/cat7.jpg" className="rounded-lg w-full object-cover" />
              </div>
              <p className="text-[20px]">Hãy <span className="text-red-600 text-[20px]">liên hệ ngay : 0837.622.922</span> Để được tư vấn và báo giá tốt nhất và nhanh nhất.</p>
              <div className="text-[22px] text-red-600 font-sans mt-6">IN UV HOÀ BÌNH - IN ẤN HOÀ BÌNH</div>
              <div className="text-[18px] text-gray-800 font-sans mt-2">
                W : <a href="https://inuvhoabinh.com/" className="text-blue-400 underline">https://inuvhoabinh.com/</a> - <a href="https://inanhoabinh.com/" className="text-blue-400 underline">https://inanhoabinh.com/</a><br />
                T : 0901.622.922 - 0977.973.064<br />
                E : inuvhoabinh@gmail.com<br />
                D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh<br />
                <span className="block mt-2">Xem thêm nhiều video tại : <a href="https://www.youtube.com/channel/UCRUf4QXwfEMy99EQqTr62nQ" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">https://www.youtube.com/channel/UCRUf4QXwfEMy99EQqTr62nQ</a></span>
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
              onClick={handleClickTin1}
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
            <div className="flex-1 bg-white rounded-lg flex flex-col group cursor-pointer"
              onClick={handleClickTin2}
            >
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
            {/* Tin 3 */}
            <div className="flex-1 bg-white rounded-lg flex flex-col group cursor-pointer"
              onClick={handleClickTin3}
            >
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
          </div>
        </section>

      </main>
    </div>
    <Footer />
  </div>
  );
};

export default Pro01LaserMicaPage;
