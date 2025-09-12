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
              <div className="my-4 flex flex-wrap items-center">
                <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-inox-alu-nhom-sat-kim-loai.html" className="text-red-600 underline font-bold italic">&gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN KIM LOẠI TẠI ĐÂY &lt;&lt;</a>
                <span className="ml-2">Hoặc link :</span> <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-inox-alu-nhom-sat-kim-loai.html" className="text-blue-700 underline ml-1">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-inox-alu-nhom-sat-kim-loai.html</a>
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên inox xước</span> làm bảng mô tả công trình xây dựng để ngoài trời.
              </div>
              <div className="my-4">
                <img src="https://inanhoabinh.com/wp-content/uploads/2022/12/z3833155574306_662f52d4158b58aabd4a953e9efa20d7-1024x484.jpg" alt="In uv trên inox xước" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên inox bóng chấn cạnh</span> làm tên phòng giao dịch cho BIDV Hóc Môn
              </div>
              <div className="my-4">
                <img src="https://inanhoabinh.com/wp-content/uploads/2022/12/z3833155547330_3acf220423d833d6d1f51b986c0f189e-1024x576.jpg" alt="In uv trên inox bóng chấn cạnh" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên alu xước</span> làm bảng tiêu lệnh phòng cháy chữa cháy.
              </div>
              <div className="my-4">
                <img src="https://inanhoabinh.com/wp-content/uploads/2021/02/in-uv-tieu-lenh-chua-chay-1-1024x768.jpg" alt="In uv trên alu xước" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên inox</span> làm hướng dẫn lối thoát hiểm trong toà nhà.
              </div>
              <div className="my-4">
                <img src="/image/z4208027966078_55d1b3aabf4de2724ab87474128bc264.jpg" alt="In uv trên inox" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên inox gương</span> làm bảng chức danh
              </div>
              <div className="my-4">
                <img src="/image/z4208027985852_d52d969b91c6b1dd4561e76cb8d0693f.jpg" alt="In uv trên inox gương" className="rounded-lg w-full object-cover" />
              </div>
              <div className="pt-4 pb-4 text-[18px] text-blue-800">
                <span className="text-blue-700 font-bold underline">In uv trên inox</span> làm tem nhãn cho các thương hiệu, nhãn hàng.
              </div>
              <div className="my-4">
                <img src="/image/z4208027961823_2b6c2d07083759f1915f4eaa291dc82c.jpg" alt="In uv trên inox" className="rounded-lg w-full object-cover" />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Pro04LaserMicaPage;
