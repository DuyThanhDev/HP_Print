import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sibar from "../../components/Sibar";
import Footer from "../../components/Footer";

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeaderUnder current="GIỚI THIỆU" />
      <div className="flex flex-1 max-w-7xl mx-auto w-full mt-6 mb-8">
        {/* Sidebar */}
    <div className="hidden md:block mr-10">
      <Sibar />
    </div>
        {/* Main content */}
        <main className="flex-1">
          <div className="box-single-pages">
            <h1 className="text-3xl font-bold mb-3 mt-2">GIỚI THIỆU</h1>
            <div className="meta-list text-gray-500 text-sm mb-4">
            <span className="date-post text-base flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
                Thứ bảy - 09/03/2019 09:32
            </span>
            </div>

            <div className="single-pages-content space-y-4">
                <p className="text-[16px] text-gray-800 text-justify">
                  Công ty TNHH MTV thiết kế và in ấn HÒA BÌNH được thành lập năm 2016, hoạt động chủ yếu trong lĩnh vực in ấn. Là một doanh nghiệp trẻ tâm huyết với nghề và có ý chí học hỏi lớn, công ty đã cập nhật nhiều công nghệ in mới trên thế giới đang phát triển ở Việt Nam, điển hình là công nghệ in UV. Để đáp ứng được nhiều yêu cầu khắc khe về chất lượng sản phẩm, thời gian hoàn thiện đối bảng quảng cáo lớn bằng mica, tiêu lệnh hướng dẫn trên inox, aluminum cao cấp, kính ốp tường, bếp,.....
                </p>

                <p className="text-[18px] text-gray-800 text-justify mt-1">MÁY MÓC THIẾT BỊ :</p>
              <p className="text-[16px] text-gray-800 text-justify">
                <span className="font-bold text-red-600">1. Máy in UV</span> khổ lớn - Đáp ứng được nhu cầu về vật liệu lớn và thời gian hoàn thành cực kỳ nhanh.
              </p>
            <div className="my-4">
              <img src="/assets/uv1.jpg" alt="may in uv tổng hợp" className="rounded-lg w-full object-cover" />
            </div>
              <p className="text-[16px] text-gray-800 text-justify">
                <span>2. Hệ thống <span className="text-red-600">máy in và máy ép chuyển nhiệt</span></span> số lượng lớn - đáp ứng yêu cầu số lượng lớn và thời gian nhanh.
              </p>
            <div className="my-4">
              <img src="/assets/cn1.jpg" alt="may in uv tổng hợp" className="rounded-lg w-full object-cover" />
            </div>

              <p className="text-[18px] text-gray-800 text-justify font-bold">PHƯƠNG CHÂM HOẠT ĐỘNG :</p>
              <p className="text-[16px] text-gray-800 text-justify">Với việc đặt chất lượng sản phẩm lên hàng đầu, công ty luôn chọn những loại mực chất lượng cao và quy trình in ấn khắt khe để đạt tới yêu cầu cao nhất của quý khách hàng.</p>
              <p className="text-[16px] text-gray-800 text-justify">Cộng thêm luôn tìm kiếm những công nghệ in mới và áp dụng đầu tư ngay lặp tức. Góp phần tạo dựng nên thương hiệu và sản phẩm cho khách hàng luôn mới mẻ, chất lượng cao và sang trọng.</p>
              <p className="text-[16px] text-gray-800 text-justify">Xưởng in cũng chú trọng đến thị hiếu khách hàng là yêu cầu ngay lặp tức, nên công ty luôn in và giao mẫu cho khách hàng trong 24h.</p>
              <p className="text-[16px] text-blue-400 text-justify">Chất lượng cao - khẳng định thương hiệu.</p>
              <p className="text-[20px] text-red-600 font-sans">IN UV HOÀ BÌNH - IN ẤN HOÀ BÌNH</p>
              <div className="text-[16px] text-gray-800 font-sans">
                W : <a href="https://inuvhoabinh.com/" className="text-blue-400 underline">https://inuvhoabinh.com/</a> - <a href="https://inanhoabinh.com/" className="text-blue-400 underline">https://inanhoabinh.com/</a><br />
                T : 0909.966.664<br />
                E : inanhoabinh@gmail.com<br />
                D : 32/88 Phan Sào Nam, Phường 11, Quận Tân Bình, TP. Hồ Chí Minh<br /><br />
                (Đối diện công viên Bàu Cát, Hẻm 143 Đồng Đen, P11, Tân Bình)
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
