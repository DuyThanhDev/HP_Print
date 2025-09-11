import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sibar from "../../components/Sibar";
import Footer from "../../components/Footer";

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeaderUnder current="GIỚI THIỆU" />
      <div className="flex flex-1 max-w-6xl mx-auto w-full mt-6 mb-8">
        {/* Sidebar */}
        <div className="hidden md:block mr-8">
          <Sibar />
        </div>
        {/* Main content */}
        <main className="flex-1">
          <div className="box-single-pages">
            <h1 className="text-2xl font-bold mb-2 mt-2">GIỚI THIỆU</h1>
            <div className="meta-list text-gray-500 text-sm mb-4">
              <span className="date-post"><i className="far fa-clock"></i> Thứ bảy - 09/03/2019 09:32</span>
            </div>
            <div className="single-pages-content space-y-4">
              <p className="text-[16px] text-gray-800 text-justify font-serif">Công ty TNHH MTV thiết kế và in ấn HÒA BÌNH được thành lập năm 2016, hoạt động chủ yếu trong lĩnh vực in ấn. Là một doanh nghiệp trẻ tâm huyết với nghề và có ý chí học hỏi lớn, công ty đã cập nhật nhiều công nghệ in mới trên thế giới đang phát triển ở Việt Nam, điển hình là công nghệ in UV. Để đáp ứng được nhiều yêu cầu khắc khe về chất lượng sản phẩm, thời gian hoàn thiện đối bảng quảng cáo lớn bằng mica, tiêu lệnh hướng dẫn trên inox, aluminum cao cấp, kính ốp tường, bếp,.....</p>
              <p className="text-[16px] text-gray-800 text-justify font-serif font-bold">MÁY MÓC THIẾT BỊ :</p>
              <p className="text-[16px] text-gray-800 text-justify font-serif">
                <span className="font-bold text-red-600">1. Máy in UV</span> khổ lớn - Đáp ứng được nhu cầu về vật liệu lớn và thời gian hoàn thành cực kỳ nhanh.
              </p>
              <img src="/image/1111(1).jpg" alt="may in uv" className="rounded shadow mb-4 w-full" />
              <p className="text-[16px] text-gray-800 text-justify font-serif">
                <span className="font-bold">2. Hệ thống <span className="text-red-600">máy in và máy ép chuyển nhiệt</span></span> số lượng lớn - đáp ứng yêu cầu số lượng lớn và thời gian nhanh.
              </p>
              <img src="/image/222.jpg" alt="may ep chuyen nhiet" className="rounded shadow mb-4 w-full" />
              <p className="text-[16px] text-gray-800 text-justify font-serif font-bold">PHƯƠNG CHÂM HOẠT ĐỘNG :</p>
              <p className="text-[16px] text-gray-800 text-justify font-serif">Với việc đặt chất lượng sản phẩm lên hàng đầu, công ty luôn chọn những loại mực chất lượng cao và quy trình in ấn khắt khe để đạt tới yêu cầu cao nhất của quý khách hàng.</p>
              <p className="text-[16px] text-gray-800 text-justify font-serif">Cộng thêm luôn tìm kiếm những công nghệ in mới và áp dụng đầu tư ngay lặp tức. Góp phần tạo dựng nên thương hiệu và sản phẩm cho khách hàng luôn mới mẻ, chất lượng cao và sang trọng.</p>
              <p className="text-[16px] text-gray-800 text-justify font-serif">Xưởng in cũng chú trọng đến thị hiếu khách hàng là yêu cầu ngay lặp tức, nên công ty luôn in và giao mẫu cho khách hàng trong 24h.</p>
              <p className="text-[16px] text-blue-500 text-justify font-serif font-bold">Chất lượng cao - khẳng định thương hiệu.</p>
              <p className="text-[20px] text-red-600 font-bold font-sans">IN UV HOÀ BÌNH - IN ẤN HOÀ BÌNH</p>
              <div className="text-[16px] text-gray-800 font-sans">
                W : <a href="https://inuvhoabinh.com/" className="text-blue-600 underline">https://inuvhoabinh.com/</a> - <a href="https://inanhoabinh.com/" className="text-blue-600 underline">https://inanhoabinh.com/</a><br />
                T : 0909.966.664<br />
                E : inanhoabinh@gmail.com<br />
                D : 32/88 Phan Sào Nam, Phường 11, Quận Tân Bình, TP. Hồ Chí Minh<br />
                (Đối diện công viên Bàu Cát, Hẻm 143 Đồng Đen, P11, Tân Bình)
              </div>
            </div>
          </div>
          {/* Dòng vàng cuối */}
          <div className="w-full text-center text-[#f4c73c] text-2xl font-bold py-4">
            www.inuvhoabinh.com - 0901.622.922
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
