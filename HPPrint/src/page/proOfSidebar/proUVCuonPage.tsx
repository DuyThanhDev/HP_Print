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
					<div className="bg-white rounded-lg p-4 md:p-8">
						<h1 className="text-2xl md:text-3xl font-bold mb-2">In UV cuộn là gì? Báo giá in UV cuộn giá tốt Hồ Chí Minh.</h1>
						<div className="text-gray-500 text-[16px] mb-2 flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							Chủ nhật - 26/03/2023 20:43
						</div>
						<div className="prose max-w-none text-base leading-relaxed single-pages-content">
							<p className="font-bold text-red-600 text-lg mb-2">In UV cuộn là gì?</p>
							<p>In UV là hình thức in trực tiếp bằng loại mực đặc biệt dành riêng cho công nghệ UV đến từ Nhật Bản và được sấy khô ngay lập tức bằng tia UV kết hợp trên máy in. Do đặt tính in trực tiếp kết hợp với mực in đến từ các thương hiệu Nhật Bản sẽ giúp màu in được tươi sáng, chất lượng hình ảnh cao. Mực được sấy khô bằng tia UV có thể tạo thành lớp mực dày tạo hiệu ứng cho hình ảnh. Và thời gian sử dụng từ 5 cho đến 10 năm.</p>
							<p className="font-bold text-red-600 text-lg mt-6 mb-2">In UV cuộn được ứng dụng đa dạng trên các chất liệu như :</p>
							<ul className="list-disc pl-6 mb-2">
								<li>In uv cuộn trên bạc 3M, bạt không gân, bạt hiflex.</li>
								<li>In uv cuộn trên pet dẻo làm trần xuyên sáng</li>
								<li>In uv cuộn trên bạc không gân làm bảng hiệu.</li>
								<li>In uv cuộn trên vải canvas.</li>
								<li>In uv cuộn trên decal sữa, decal trong.</li>
								<li>In uv cuộn trên backlit film làm hộp đèn siêu mỏng.</li>
							</ul>
							<p>Được ứng dụng rộng rãi trong ngành quảng cáo để làm các vật phẩm như :</p>
							<ul className="list-disc pl-6 mb-2">
								<li>Biển hiệu đèn không viền xuyên sáng.</li>
								<li>Hộp đèn trưng bày sản phẩm cao cấp.</li>
								<li>Các pa-no, áp phích quảng cáo tuyên truyền có đèn.</li>
								<li>In tranh canvas.</li>
								<li>In giấy dán tường trang trí.</li>
							</ul>
							<p className="font-bold text-red-600 text-lg mt-6 mb-2">Những ưu điểm nên sử dụng công nghệ in uv cuộn.</p>
							<ol className="list-decimal pl-6 mb-2">
								<li>Chất lượng bền màu với thời gian và thời tiết cao (có thể lên đến 10 năm).</li>
								<li>Đảm bảo được màu sắc tươi, sống động và các hoạ tiết nhỏ, chi tiết.</li>
								<li>In số lượng nhanh và nhiều cùng lúc nên chi phí rẻ.</li>
								<li>Đảm bảo được các tiêu chuẩn chất lượng cao đối với các đối tác lớn.</li>
								<li>Nâng cấp về màu sắc, chất lượng so với các công nghệ in bằng mực dầu trước đây.</li>
							</ol>
							<p className="font-bold text-red-600 text-lg mt-6 mb-2">Bảng giá in UV cuộn tại In Ấn Hoà Bình :</p>
							<div className="flex flex-col items-center my-4">
								<img src="https://inanhoabinh.com/wp-content/uploads/2023/02/BA%CC%89NG-GIA%CC%81-IN-UV-CUO%CC%A3%CC%82N-1-1024x962.jpg" alt="Bảng giá in UV cuộn" className="rounded-lg w-full max-w-2xl object-contain" />
								<figcaption className="mt-2 text-center font-bold text-red-600">LIÊN HỆ HOTLINE ĐỂ ĐƯỢC TƯ VẤN VÀ BÁO GIÁ CHI TIẾT – 0901.622.922</figcaption>
							</div>
							<p className="font-bold text-red-600 text-lg mt-6 mb-2">Những lý do nên chọn In Ấn Hoà Bình :</p>
							<ol className="list-decimal pl-6 mb-2">
								<li>Chuyên thực hiện in UV trên mọi chất liệu.</li>
								<li>Có nhiều năm trong nghề in UV, đảm bảo hỗ trợ xử lý các sản phẩm yêu cầu cao.</li>
								<li>Hệ thống máy in chuyên nghiệp, nhiều. Đáp ứng các nhu cầu số lượng lớn thời gian sản xuất nhanh.</li>
								<li>Giá cả tốt dành cho các đối tác lâu năm.</li>
							</ol>
							<div className="my-4">
								<span className="text-red-600 text-[22px] font-bold">IN UV HOÀ BÌNH</span>
								<div className="mt-2 text-[16px]">
									W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
									T : 0898.622.922 - 0977.973.064<br />
									E : inuvhoabinh@gmail.com<br />
									D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
								</div>
							</div>
							<p className="font-bold text-blue-700 text-lg mt-6 mb-2"><u>In uv cuộn trên bạt không gân</u> để làm đèn xuyên sáng cho chuỗi cửa hàng Vinmart</p>
							<div className="my-4">
								<img src="/image/in-uv-cuon-4.jpeg" alt="in uv cuon bat khong gan" className="rounded-lg w-full object-cover" />
							</div>
							<p className="font-bold text-blue-700 text-lg mt-6 mb-2"><u>In uv cuộn trên canvas kim tuyến</u> để làm tranh canvas đóng khung trang trí</p>
							<div className="my-4">
								<img src="/image/in-uv-cuon-2.jpeg" alt="in uv cuon canvas kim tuyen" className="rounded-lg w-full object-cover" />
							</div>
							<p className="font-bold text-blue-700 text-lg mt-6 mb-2"><u>In uv cuộn trên decal</u> để làm tem, nhãn dán cho các quán, cửa hàng</p>
							<div className="my-4">
								<img src="/image/in-decal-3.jpeg" alt="in uv cuon decal" className="rounded-lg w-full object-cover" />
							</div>
							<div className="my-4">
								<span className="text-red-600 text-[22px] font-bold">IN UV HOÀ BÌNH</span>
								<div className="mt-2 text-[16px]">
									W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
									T : 0898.622.922 - 0977.973.064<br />
									E : inuvhoabinh@gmail.com<br />
									D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default ProUVCuonPage;
