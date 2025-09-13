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
					<div className="bg-white rounded-lg p-4 md:p-8">
						<h1 className="text-2xl md:text-3xl font-bold mb-2">In UV DTF là gì? Hiểu rõ về công nghệ in UV trên DTF.</h1>
						<div className="text-gray-500 text-[16px] mb-2 flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							Thứ hai - 03/04/2023 13:40
						</div>
						<div className="prose max-w-none text-base leading-relaxed single-pages-content">
							<p className="font-bold text-lg mb-2">In UV DTF (Direct To Film) là in UV trực tiếp lên tấm phim. Sau đó sẽ cán 1 lớp phim khác có phủ keo. Sau khi thành phẩm chỉ việc lột lớp keo và dán vào bất kỳ bề mặt sản phẩm nào mong muốn.</p>
							<p className="font-bold text-lg mt-6 mb-2">Cách thức in UV trên DTF và sử dụng</p>
							<p>Cũng như các hình thức in UV khác, in UV DTF cũng sử dụng mực chuyên biệt cho máy in UV đến từ các nhà cung cấp Nhật Bản. In cùng nhiều lớp mực trên 1 điểm và làm khô bằng tia UV. Đầu tiên máy sẽ phủ 1 lớp mực bóng (varnish) để tạo độ bóng cho hình ảnh. Tiếp theo là lớp màu sắc của hình ảnh in. Sau đó phủ lớp mực trắng để đảm bảo phần mực sẽ lên đúng màu, sặc sỡ.</p>
							<p>Sau khi hoàn thiện phần in. Sẽ tiến hành cán thêm 1 lớp phim thứ 2 trên bề mặt còn lại. Làm sao cho 2 mặt phim dính sát vào nhau để hình ảnh in được bảo vệ tốt nhất.</p>
							<p>Bước tiếp theo là chọn bề mặt cần dán hình ảnh đã in. Lột 1 lớp phim và dán. Dùng tay hoặc vật mềm ghì nhẹ nhàng để tăng độ bám dính hình ảnh lên bề mặt vật tư. Lột lớp phim còn lại ra.</p>
							<p className="font-bold text-lg mt-6 mb-2">Ưu điểm của công nghệ in UV DTF</p>
							<ul className="list-disc pl-6 mb-2">
								<li>Dễ thi công với số lượng nhỏ so với các loại hình tem dán hoặc cách thức in khác.</li>
								<li>Thực hiện được trên đa dạng các loại chất liệu: gạch, gỗ, sắt, da, simili,….</li>
								<li>Thực hiện in UV trên được các vật liệu cong, xước vẫn được.</li>
								<li>Đảm bảo hình ảnh sắc nét, màu sắc tốt, độ bám cao như công nghệ in UV, bền màu trong thời gian dài so với các loại hình in khác.</li>
							</ul>
							<p className="font-bold text-lg mt-6 mb-2">Nhược điểm in UV DTF</p>
							<ul className="list-disc pl-6 mb-2">
								<li>Công nghệ in còn mới, ít người biết đến công nghệ này. Thường so sánh với các loại in tem dán decal hoặc tem dán chuyển nhiệt.</li>
							</ul>
							<p className="font-bold text-lg mt-6 mb-2">Ứng dụng của in UV trên DTF</p>
							<ul className="list-disc pl-6 mb-2">
								<li>In Sticker dán trên ly, sổ tay, gỗ, ….để làm quà tặng</li>
								<li>In logo công ty để dán lên các vật dụng trang trí hoặc các vật phẩm quà tặng</li>
							</ul>
							<p className="text-[18px] mt-6 mb-2">Hỗ trợ xử lý sản phẩm khó về màu sắc, số lượng nhiều. <span className="font-bold text-red-600">Quý khách cứ liên hệ : 0901.622.922</span> để được hỗ trợ tư vấn và báo giá chi tiết.</p>
							<div className="my-4">
								<span className="text-red-600 text-[22px] font-bold">IN UV HOÀ BÌNH</span>
								<div className="mt-2 text-[16px]">
									W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
									T : 0901.622.922 - 0909.966.664<br />
									E : inuvhoabinh@gmail.com<br />
									D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
								</div>
							</div>
							<div className="my-4">
								<img src="/image/b.jpg" alt="in uv dtf b" className="rounded-lg w-full object-cover" />
							</div>
							<div className="my-4">
								<img src="/image/a(2).jpg" alt="in uv dtf a2" className="rounded-lg w-full object-cover" />
							</div>
							<div className="my-4">
								<img src="/image/z4233963172471_d29fa602be263a274ef286d52241a24e.jpg" alt="in uv dtf 1" className="rounded-lg w-full object-cover" />
							</div>
							<div className="my-4">
								<img src="/image/z4233963182975_1f57de2abb3a8efb84473516f7bb5d6b.jpg" alt="in uv dtf 2" className="rounded-lg w-full object-cover" />
							</div>
							<div className="my-4">
								<span className="text-red-600 text-[22px] font-bold">IN UV HOÀ BÌNH</span>
								<div className="mt-2 text-[16px]">
									W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
									T : 0901.622.922 - 0977.973.064<br />
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

export default ProUVDTFPage;
