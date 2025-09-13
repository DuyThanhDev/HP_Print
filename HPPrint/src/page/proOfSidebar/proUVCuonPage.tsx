import React from "react";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const ProUVCuonPage: React.FC = () => {
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
						<h1 className="text-2xl md:text-3xl font-bold mb-2">In UV cuộn là gì? Báo giá in UV cuộn giá tốt Hồ Chí Minh.</h1>
						<div className="text-gray-500 text-[16px] mb-2 flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							Chủ nhật - 26/03/2023 20:43
						</div>
						<div className="prose max-w-none text-base leading-relaxed single-pages-content">
							<p className="font-bold text-red-600 text-2xl mb-3 mt-3">In UV cuộn là gì?</p>
							<p>In UV là hình thức in trực tiếp bằng loại mực đặc biệt dành riêng cho công nghệ UV đến từ Nhật Bản và được sấy khô ngay lập tức bằng tia UV kết hợp trên máy in. Do đặt tính in trực tiếp kết hợp với mực in đến từ các thương hiệu Nhật Bản sẽ giúp màu in được tươi sáng, chất lượng hình ảnh cao. Mực được sấy khô bằng tia UV có thể tạo thành lớp mực dày tạo hiệu ứng cho hình ảnh. Và thời gian sử dụng từ 5 cho đến 10 năm.</p>
							<p className="font-bold text-red-600 text-2xl mt-6 pb-2">In UV cuộn được ứng dụng đa dạng trên các chất liệu như :</p>
							<ul>
								<li className="pt-2 pb-2">+ In uv cuộn trên bạc 3M, bạt không gân, bạt hiflex.</li>
								<li className="pt-2 pb-2">+ In uv cuộn trên pet dẻo làm trần xuyên sáng</li>
								<li className="pt-2 pb-2">+ In uv cuộn trên bạc không gân làm bảng hiệu.</li>
								<li className="pt-2 pb-2">+ In uv cuộn trên vải canvas.</li>
								<li className="pt-2 pb-2">+ In uv cuộn trên decal sữa, decal trong.</li>
								<li className="pt-2 pb-2">+ In uv cuộn trên backlit film làm hộp đèn siêu mỏng.</li>
							</ul>
							<p className="pt-2 pb-2">Được ứng dụng rộng rãi trong ngành quảng cáo để làm các vật phẩm như :</p>
							<ul>
								<li className="pt-2 pb-2">+ Biển hiệu đèn không viền xuyên sáng.</li>
								<li className="pt-2 pb-2">+ Hộp đèn trưng bày sản phẩm cao cấp.</li>
								<li className="pt-2 pb-2">+ Các pa-no, áp phích quảng cáo tuyên truyền có đèn.</li>
								<li className="pt-2 pb-2">+ In tranh canvas.</li>
								<li className="pt-2 pb-2">+ In giấy dán tường trang trí.</li>
							</ul>
							<p className="font-bold text-red-600 text-2xl mt-2 mb-2">Những ưu điểm nên sử dụng công nghệ in uv cuộn.</p>
							<ol className="list-decimal pl-10 mb-2 pt-4">
								<li>Chất lượng bền màu với thời gian và thời tiết cao (có thể lên đến 10 năm).</li>
								<li>Đảm bảo được màu sắc tươi, sống động và các hoạ tiết nhỏ, chi tiết.</li>
								<li>In số lượng nhanh và nhiều cùng lúc nên chi phí rẻ.</li>
								<li>Đảm bảo được các tiêu chuẩn chất lượng cao đối với các đối tác lớn.</li>
								<li>Nâng cấp về màu sắc, chất lượng so với các công nghệ in bằng mực dầu trước đây.</li>
							</ol>
							<p className="font-bold text-red-600 text-2xl mt-6 mb-2">Bảng giá in UV cuộn tại In Ấn Hoà Bình :</p>
							<div className="flex flex-col items-center my-4">
								<div className="my-4">
									<img src="/assets/sidebar/uvcuon/cuon01.jpg" className="rounded-lg w-full object-cover" />
								</div>
								<figcaption className="mt-2 text-center font-bold text-red-600">LIÊN HỆ HOTLINE ĐỂ ĐƯỢC TƯ VẤN VÀ BÁO GIÁ CHI TIẾT – 0901.622.922</figcaption>
							</div>
							<p className="font-bold text-red-600 text-2xl mt-6 mb-2">Những lý do nên chọn In Ấn Hoà Bình :</p>
							<ol className="list-decimal pl-10 mb-2 mt-6">
								<li>Chuyên thực hiện in UV trên mọi chất liệu.</li>
								<li>Có nhiều năm trong nghề in UV, đảm bảo hỗ trợ xử lý các sản phẩm yêu cầu cao.</li>
								<li>Hệ thống máy in chuyên nghiệp, nhiều. Đáp ứng các nhu cầu số lượng lớn thời gian sản xuất nhanh.</li>
								<li>Giá cả tốt dành cho các đối tác lâu năm.</li>
							</ol>
							<div className="my-4">
								<span className="text-red-600 text-[22px]">IN UV HOÀ BÌNH</span>
								<div className="mt-2 text-[16px]">
									W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
									T : 0898.622.922 - 0977.973.064<br />
									E : inuvhoabinh@gmail.com<br />
									D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
								</div>
							</div>
							<p className="text-blue-700 text-lg mt-6 mb-2"><u className="font-bold">In uv cuộn trên bạt không gân</u> để làm đèn xuyên sáng cho chuỗi cửa hàng Vinmart</p>
							<div className="my-4 pt-2 pb-2">
								<img src="/assets/sidebar/uvcuon/cuon02.jpeg" alt="in uv cuon bat khong gan" className="rounded-lg w-full object-cover" />
							</div>
							<p className="text-blue-700 text-lg mt-6 mb-2"><u className="font-bold">In uv cuộn trên canvas kim tuyến</u> để làm tranh canvas đóng khung trang trí</p>
							<div className="my-4 pt-4 pb-2">
								<img src="/assets/sidebar/uvcuon/cuon03.jpeg" alt="in uv cuon canvas kim tuyen" className="rounded-lg w-full object-cover" />
							</div>
							<p className="text-blue-700 text-lg mt-6 mb-2"><u className="font-bold">In uv cuộn trên decal</u> để làm tem, nhãn dán cho các quán, cửa hàng</p>
							<div className="my-4 pt-4 pb-2">
								<img src="/assets/sidebar/uvcuon/cuon04.jpeg" alt="in uv cuon decal" className="rounded-lg w-full object-cover" />
							</div>
							<div className="my-4 pt-2 pb-2">
								<span className="text-red-600 text-[22px]">IN UV HOÀ BÌNH</span>
								<div className="mt-2 text-[16px]">
									W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
									T : 0898.622.922 - 0977.973.064<br />
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

export default ProUVCuonPage;
