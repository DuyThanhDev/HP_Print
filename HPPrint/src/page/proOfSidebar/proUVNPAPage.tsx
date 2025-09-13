
import React from "react";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const ProUVNPAPage: React.FC = () => {
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
						<h1 className="text-2xl font-bold mb-2">IN UV TRÊN NHỰA PVC, NHỰA ABS, NHỰA PIMA – IN UV HOÀ BÌNH</h1>
						<div className="text-gray-500 text-[16px] mb-2 flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<span className="inline-flex items-center"><i className="far fa-clock mr-1" />Thứ sáu - 24/03/2023 15:18</span>
						</div>
						<div className="prose max-w-none text-base leading-relaxed single-pages-content">
							<p className="font-bold text-[22px] mb-4 ml-1">Nhựa PVC, nhựa ABS, tấm nhựa PVC Pima giả đá</p>
							<p className="mb-4 text-[18px]">Trong cuộc sống thường ngày, nhựa được sử dụng rất nhiều vào tất cả các vật dụng của chúng ta. Đặt tính của nhựa là bền, dẻo, khó hư hỏng và rất dễ tạo hình theo mong muốn.</p>
							<p className="mb-4 text-[18px]">Có vài loại nhựa được sử dụng nhiều trong quảng cáo và trang trí nội thất đó là : Tấm nhựa PVC rạng đông màu trắng, tấm nhựa ABS (loại mới thân thiện với môi trường vì dễ tái chế) và tấm nhựa giả đá Pima PVC.</p>
							<p className="font-bold text-[22px] mb-4">In UV trên nhựa là như thế nào?</p>
							<p className="mb-4 text-[18px]">In UV trên nhựa là hình thức công nghệ in mới bằng tia UV sấy mực khô ngay lập tức và mực UV chuyên biệt để in trên các vật tư là nhựa. Với mực UV chuyên biệt sẽ tạo ra được các màu sắc đa dạng theo từng hình ảnh cần in chuẩn lên đến 99% và kết hợp với việc tia UV sấy mực khô ngay có thể in cùng lúc nhiều lớp mực trắng và màu khác nhau trên cùng một điểm, nên dù vật tư có khác màu thì hình ảnh in ra vẫn đúng như thiết kế ban đầu, đáp ứng rất tốt cho việc nhận diện thương hiệu của các tập đoàn lớn có yêu cầu khắc khe về độ sắc nét và màu sắc.</p>
							<p className="mb-4 text-[18px]">Với in ấn Hoà Bình, đã có kinh nghiệm hơn 5 năm trong lĩnh vực in ấn và in UV sẽ đảm bảo các sản phẩm chất lượng nhất cho quý khách hàng và sẵn sàng làm những sản phẩm có yêu cầu khó và khắc khe của thị trường. Chỉ với <span className="text-red-600">giá in UV 250.000 VNĐ/m2</span> với 1 lớp mực in, <span className="text-red-600">hãy liên hệ ngay : 0901.622.922 Mr Thoan</span> để được báo giá chi tiết và tư vấn chính xác nhất.</p>
							<p className="font-bold text-[22px] mb-4">Các sản phẩm thường được ứng dụng in UV trên nhựa như :</p>
							<ul className="mb-4 list-disc pl-10">
								<li className="text-[18px]">In UV trên thẻ nhựa : in thẻ nhân viên, in thẻ thông cá nhân, in thẻ phòng khách sạn,…</li>
								<li className="text-[18px]">In UV trên tấm nhựa PVC trắng Rạng Đông : In bảng tên sản phẩm, in tem nhãn sản phẩm, in dummy quảng cáo sản phẩm ngoài trời, in catalog sản phẩm, in menu sản phẩm,..</li>
								<li className="text-[18px]">In UV trên nhựa ABS : In bảng tên sản phẩm,</li>
								<li className="text-[18px]">In tấm nhựa PVC Pima giả đá</li>
							</ul>
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
								<a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-mica-nhua-pvc.html" target="_blank" rel="noopener noreferrer">
									<span className="underline text-red-600 font-bold">&gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN NHỰA&nbsp;TẠI ĐÂY &lt;&lt;</span>
									<span> Hoặc link : <span className="text-blue-600">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-mica-nhua-pvc.html</span></span>
								</a>
							</div>
							<p className="italic pt-4 pb-4 text-blue-700"><u className="font-bold">In uv trên nhựa PVC trắng</u> để nhãn treo</p>
							<div className="my-4">
								<img src="/assets/sidebar/uvnpa/npa01.jpg" alt="In uv trên nhựa PVC trắng" className="rounded-lg w-full object-cover" />
							</div>
							<p className="italic pt-4 pb-4 text-blue-700"><u className=" font-bold">In uv trên thẻ nhựa có từ</u> để làm thẻ thang máy, thẻ phòng, thẻ tên</p>
							<div className="my-4">
								<img src="/assets/sidebar/uvnpa/npa02.jpg" alt="In uv trên thẻ nhựa có từ" className="rounded-lg w-full object-cover" />
							</div>
							<div className="my-4">
								<img src="/assets/sidebar/uvnpa/npa03.jpg" alt="In uv trên thẻ nhựa" className="rounded-lg w-full object-cover" />
							</div>
							<p className="italic pt-4 pb-4 text-blue-700"><u className="font-bold">In uv trên nhựa ABS đen nhập khẩu</u> để làm bảng tên quầy sản phẩm cho bách hoá xanh</p>
							<div className="my-4">
								<img src="/assets/sidebar/uvnpa/npa04.jpg" alt="In uv trên nhựa ABS đen nhập khẩu" className="rounded-lg w-full object-cover" />
							</div>
							<div className="my-4">
								<img src="/assets/sidebar/uvnpa/npa05.jpg" alt="In uv trên nhựa ABS đen nhập khẩu 2" className="rounded-lg w-full object-cover" />
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
								<a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-mica-nhua-pvc.html" target="_blank" rel="noopener noreferrer">
									<span className="underline text-red-600 font-bold">&gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN NHỰA&nbsp;TẠI ĐÂY &lt;&lt;</span>
									<span> Hoặc link : <span className="text-blue-600">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-mica-nhua-pvc.html</span></span>
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

export default ProUVNPAPage;
