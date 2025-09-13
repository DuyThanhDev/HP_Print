import React from "react";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const ProUVPhangPage: React.FC = () => {
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
						<h1 className="text-2xl md:text-3xl font-bold mb-2">In UV là gì? Bạn đang cần tư vấn về công nghệ hoặc báo giá : <a href="tel:0901622922" className="font-bold hover:underline">0901.622.922 GỌI NGAY</a></h1>
						<div className="text-gray-500 text-[16px] mb-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
							<span className="inline-flex items-center"><i className="far fa-clock mr-1" />Thứ sáu - 01/03/2019 21:14</span>
						</div>
						<div className="prose max-w-none text-base leading-relaxed single-pages-content">
							<p><strong>In UV</strong> trên mọi chất liệu là như thế nào ? <strong>Tại sao nên chọn in UV.</strong></p>
							<p className="pt-4 pb-4">Với tất cả các nguyên vật liệu chịu nhiệt độ của đèn sấy của <em><strong>tia UV</strong></em> là đều có thể in trực tiếp các file ảnh, thiết kế theo yêu cầu của khách hàng.&nbsp;</p>
							<p><strong>Độ bám màu + hình ảnh sắc nét + màu sắc chuẩn : </strong>Với tiêu chuẩn châu Âu thân thiện môi trường đòi hỏi <em><strong>máy in UV</strong></em> phải sử dụng mực chất lượng cao, tạo nên sản phẩm có màu sắc đẹp theo yêu cầu của khách hàng. Và công nghệ phủ trắng có thể che lắp màu của nguyên vật tư, để giữ nguyên màu bản gốc. Với chất liệu mực cao cấp 1 sản phẩm từ máy in UV tạo ra có thể sử dụng đến 10 năm.</p>
							<p className="pt-4 pb-4"><strong>Công nghệ in UV </strong>với chức năng mới sấy khô lớp mực ngay lập tức, nên sẽ tạo được nhiều lớp mực để tạo ra 1 sản phẩm có hiệu ứng chiều sâu 3D như 1 bức tranh chạm gỗ, giả ngọc,.....</p>
							<p>Thêm 1 tính năng không thể kể tới là khi dùng <em><strong>công nghệ in UV</strong></em> sẽ có thể dùng varnish&nbsp;phủ bóng 1 số điểm tạo cảm giác hiệu ứng, hoặc phủ bóng toàn bộ bức tranh để tạo vẻ sáng trong và bền màu.&nbsp;</p>
							<p className="pt-4 pb-4"><strong>NÊN CHỌN IN UV </strong>vì với chất lượng in như thế nhưng giá thành cực kỳ thấp so với các cách thi công khác, bởi</p>
							<p><strong>in ấn Hoà Bình</strong>&nbsp;:&nbsp;</p>
							<ul className="mb-4">
								<li className="pt-2 pb-2"><span className="text-red-600">1. Máy in khổ lớn</span> : gia công trực tiếp tất cả các mặt hàng đáp ứng số lượng lớn và nhanh.</li>
								<li className="pt-2 pb-2"><span className="text-red-600">2. Giá cả tốt nhất</span> thị trường, cạnh tranh với các phương thức khác.&nbsp;</li>
								<li className="pt-2 pb-2"><span className="text-red-600">3. Chất lượng</span> in đảm bảo tuyệt đối, lấy uy tín làm kim chỉ nam.</li>
								<li className="pt-2 pb-2"><span className="text-red-600">4. Hỗ trợ</span> chỉnh sửa file thiết kế và test mẫu.</li>
							</ul>
							<p><strong><span className="text-red-600">Liên hệ ngay : 0901.622.922</span></strong>&nbsp;để được báo giá chi tiết hoặc : 122 Lê Niệm, phường Phú Thạnh, quận Tân Phú, TP Hồ Chí Minh</p>
							<p className="italic pt-4 pb-4">Máy in UV khổ lớn tại in ấn Hoà Bình</p>
							<div className="my-4">
                                <img src="/assets/sidebar/uvphang/phang01.jpg" className="rounded-lg w-full object-cover" />
                            </div>
							<p className="italic pt-4 pb-4">Máy in UV khổ lớn tại in ấn Hoà Bình</p>
							<p className="italic pb-4"><span className="font-bold">IN uv phẳng</span> với chất liệu mặt phẳng như kính, mica, alu (aluminum), tấm nhựa PVC, tấm fromex, gạch men, gỗ, thạch cao, ốp điện thoại, chai lọ thuỷ tinh,.... Tất cả những vật liệu có bề mặt phẳng và chịu được nhiệt nhẹ.</p>
							<div className="my-4">
                                <img src="/assets/sidebar/uvphang/phang02.jpg" className="rounded-lg w-full object-cover" />
                            </div>
							<p className="pt-4 pb-4"><strong>in trên Mica</strong> đen - in gia công cho <strong>hệ thống rạp chiếu phim CGV tại xưởng in Hoà Bình</strong></p>
							<div className="my-4">
                                <img src="/assets/sidebar/uvphang/phang03.jpg" className="rounded-lg w-full object-cover" />
                            </div>
							<p className="pt-4 pb-4"><strong>in trên kính cường lực</strong> - in gia công cho các xưởng kính trang trí nhà cửa.</p>
							<div className="my-4">
                                <img src="/assets/sidebar/uvphang/phang04.jpg" className="rounded-lg w-full object-cover" />
                            </div>
							<p className="pt-4 pb-4">Xưởng in UV Hoà Bình thi công bảng tên thương hiệu Giao Hàng Nhanh ở Hồ Chí Minh</p>
							<div className="my-4">
                                <img src="/assets/sidebar/uvphang/phang05.jpg" className="rounded-lg w-full object-cover" />
                            </div>
							<p className="pt-4 pb-4"><strong>in tiêu lệnh trên aluminum</strong></p>
							<div className="my-4">
                                <img src="/assets/sidebar/uvphang/phang06.jpg" className="rounded-lg w-full object-cover" />
                            </div> 
							<p><strong>in hướng dẫn, bảng hiệu trên inox cho ngân hàng Agribank</strong></p>
							<div className="pt-4 pb-4">
                                <span className="text-red-600 text-[22px]">IN UV&nbsp;HOÀ BÌNH&nbsp;</span>
                                <div className="mt-2 text-[16px]">
                                W : <a href="https://inuvhoabinh.com/" className="text-blue-500 underline">https://inuvhoabinh.com/</a><br />
                                T : 0901.622.922 - 0977.973.064<br />
                                E : inuvhoabinh@gmail.com<br />
                                D : 122 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
                                </div>
                            </div>
							<div className="my-4">
								<a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-mica-nhua-pvc.html" target="_blank" rel="noopener noreferrer"><span className="underline text-red-600 font-bold">&gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN MICA TẠI ĐÂY &lt;&lt;</span><span> Hoặc link : <span className="text-blue-600">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-mica-nhua-pvc.html</span></span></a>
							</div>
							<div className="my-4">
								<a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-kinh.html" target="_blank" rel="noopener noreferrer"> <span className="underline text-red-600 font-bold">&gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN KÍNH TẠI ĐÂY&lt;&lt;</span><span> Hoặc link : <span className="text-blue-600">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-kinh.html</span></span></a>
							</div>
							<div className="my-4">
								<a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-inox-alu-nhom-sat-kim-loai.html" target="_blank" rel="noopener noreferrer"><span className="underline text-red-600 font-bold">&gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN KIM LOẠI TẠI ĐÂY&lt;&lt;</span><span> Hoặc link : <span className="text-blue-600">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-inox-alu-nhom-sat-kim-loai.html</span></span></a>
							</div>
							<div className="my-4">
								<a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-mica-nhua-pvc.html" target="_blank" rel="noopener noreferrer"><span className="underline text-red-600 font-bold">&gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN NHỰA TẠI ĐÂY&lt;&lt;</span><span> Hoặc link : <span className="text-blue-600">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-mica-nhua-pvc.html</span></span></a>
							</div>
							<div className="my-4">
								<a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-foam-formex-pima.html" target="_blank" rel="noopener noreferrer"><span className="underline text-red-600 font-bold">&gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN FORMEX TẠI ĐÂY&lt;&lt;</span><span> Hoặc link : <span className="text-blue-600">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-foam-formex-pima.html</span></span></a>
							</div>
							<div className="my-4">
								<a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-go.html" target="_blank" rel="noopener noreferrer"><span className="underline text-red-600 font-bold">&gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN GỖ TẠI ĐÂY&lt;&lt;</span><span> Hoặc link : <span className="text-blue-600">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-go.html​</span></span></a>
							</div>
							<div className="my-4">
								<a href="https://www.youtube.com/channel/UCRUf4QXwfEMy99EQqTr62nQ" target="_blank" rel="noopener noreferrer">Xem thêm nhiều video tại : <span className="text-blue-600">https://www.youtube.com/channel/UCRUf4QXwfEMy99EQqTr62nQ</span></a>
							</div>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default ProUVPhangPage;
