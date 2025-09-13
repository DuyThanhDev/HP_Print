import React from "react";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const ProUVDTFPage: React.FC = () => {
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
						<h1 className="text-2xl md:text-3xl font-bold mb-2">In UV DTF là gì? Hiểu rõ về công nghệ in UV trên DTF.</h1>
						<div className="text-gray-500 text-[16px] mb-2 flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							Thứ hai - 03/04/2023 13:40
						</div>
						<div className="prose max-w-none text-base leading-relaxed single-pages-content">
							<p className="text-xl mb-2"> <span className="font-bold">In UV DTF (Direct To Film) là </span>in UV trực tiếp lên tấm phim. Sau đó sẽ cán 1 lớp phim khác có phủ keo. Sau khi thành phẩm chỉ việc lột lớp keo và dán vào bất kỳ bề mặt sản phẩm nào mong muốn.</p>
							<p className="font-bold text-xl mt-6 mb-2">Cách thức in UV trên DTF và sử dụng</p>
							<p className="text-xl pt-4 pb-2">Cũng như các hình thức in UV khác, in UV DTF cũng sử dụng mực chuyên biệt cho máy in UV đến từ các nhà cung cấp Nhật Bản. In cùng nhiều lớp mực trên 1 điểm và làm khô bằng tia UV. Đầu tiên máy sẽ phủ 1 lớp mực bóng (varnish) để tạo độ bóng cho hình ảnh. Tiếp theo là lớp màu sắc của hình ảnh in. Sau đó phủ lớp mực trắng để đảm bảo phần mực sẽ lên đúng màu, sặc sỡ.</p>
							<p className="text-xl pt-2 pb-2">Sau khi hoàn thiện phần in. Sẽ tiến hành cán thêm 1 lớp phim thứ 2 trên bề mặt còn lại. Làm sao cho 2 mặt phim dính sát vào nhau để hình ảnh in được bảo vệ tốt nhất.</p>
							<p className="text-xl pt-2">Bước tiếp theo là chọn bề mặt cần dán hình ảnh đã in. Lột 1 lớp phim và dán. Dùng tay hoặc vật mềm ghì nhẹ nhàng để tăng độ bám dính hình ảnh lên bề mặt vật tư. Lột lớp phim còn lại ra.</p>
							<p className="font-bold text-xl mt-6 mb-2">Ưu điểm của công nghệ in UV DTF</p>
							<ul className="text-xl">
								<li className="pt-4 pb-4">Dễ thi công với số lượng nhỏ so với các loại hình tem dán hoặc cách thức in khác.</li>
								<li className="pb-4">Thực hiện được trên đa dạng các loại chất liệu: gạch, gỗ, sắt, da, simili,….</li>
								<li className="pb-4">Thực hiện in UV trên được các vật liệu cong, xước vẫn được.</li>
								<li>Đảm bảo hình ảnh sắc nét, màu sắc tốt, độ bám cao như công nghệ in UV, bền màu trong thời gian dài so với các loại hình in khác.</li>
							</ul>
							<p className="font-bold text-xl mt-6 mb-2">Nhược điểm in UV DTF</p>
							<ul>
								<li className="text-xl pt-2">Công nghệ in còn mới, ít người biết đến công nghệ này. Thường so sánh với các loại in tem dán decal hoặc tem dán chuyển nhiệt.</li>
							</ul>
							<p className="font-bold text-xl mt-6 mb-2">Ứng dụng của in UV trên DTF</p>
							<ul className="text-xl">
								<li className="pt-4 pb-4">In Sticker dán trên ly, sổ tay, gỗ, ….để làm quà tặng</li>
								<li>In logo công ty để dán lên các vật dụng trang trí hoặc các vật phẩm quà tặng</li>
							</ul>
							<p className="text-2xl mt-6 mb-4">Hỗ trợ xử lý sản phẩm khó về màu sắc, số lượng nhiều. <span className="font-bold text-red-600">Quý khách cứ liên hệ : 0901.622.922</span> để được hỗ trợ tư vấn và báo giá chi tiết.</p>
							<div className="my-4">
								<span className="text-red-600 text-[22px]">IN UV HOÀ BÌNH</span>
								<div className="mt-2 text-[16px]">
									W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
									T : 0901.622.922 - 0909.966.664<br />
									E : inuvhoabinh@gmail.com<br />
									D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
								</div>
							</div>
							<div className="my-4 pt-2 pb-2">
								<img src="/assets/sidebar/uvdtf/dtf01.jpg" alt="in uv dtf 1" className="rounded-lg w-full object-cover" />
							</div>
							<div className="my-4 pt-2 pb-2">
								<img src="/assets/sidebar/uvdtf/dtf02.jpg" alt="in uv dtf 2" className="rounded-lg w-full object-cover" />
							</div>
							<div className="my-4">
								<img src="/assets/sidebar/uvdtf/dtf03.jpg" alt="in uv dtf 3" className="rounded-lg w-full object-cover" />
							</div>
							<div className="my-4">
								<img src="/assets/sidebar/uvdtf/dtf04.jpg" alt="in uv dtf 4" className="rounded-lg w-full object-cover" />
							</div>
							<div className="my-4 pt-2">
								<span className="text-red-600 text-[22px]">IN UV HOÀ BÌNH</span>
								<div className="mt-2 text-[16px]">
									W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
									T : 0901.622.922 - 0977.973.064<br />
									E : inuvhoabinh@gmail.com<br />
									D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
								</div>
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

export default ProUVDTFPage;
