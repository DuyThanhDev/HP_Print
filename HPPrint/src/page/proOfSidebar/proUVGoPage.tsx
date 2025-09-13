import React from "react";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const ProUVGoPage: React.FC = () => {
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
            <h1 className="text-2xl font-bold mb-2">IN UV TRÊN GỖ, VÁN MDF</h1>
            <div className="text-gray-500 text-[16px] mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="inline-flex items-center"><i className="far fa-clock mr-1" />Chủ nhật - 26/03/2023 20:01</span>
            </div>
            <div className="prose max-w-none text-base leading-relaxed single-pages-content">
              <p className="mb-4 text-[18px]">Hiện nay, kỹ thuật <span className="font-bold text-red-600">in UV trên gỗ</span> đang vô cùng được ưa chuộng và thu hút nhiều doanh nghiệp bởi mang đến nhiều lợi ích nổi trội hơn so với những kỹ thuật in ấn thông thường. Nhờ công nghệ in UV, bạn sẽ có một sự chọn lựa in ấn với những sản phẩm chất lượng, đẹp, độ bền cao. Vậy bạn đã biết gì về công nghệ in UV trên gỗ này? Cùng <span className="font-bold text-red-600">in UV Hoà Bình</span> ngay những chia sẻ dưới đây để có cho mình thông tin hữu ích nhé!</p>
              <h2 className="text-xl font-bold mt-6 mb-2">Bạn hiểu thế nào về in UV trên gỗ?</h2>
              <p className="mb-4 text-[18px]"><span className="font-bold">In UV trên gỗ</span> được biết là công nghệ dùng tia UV để làm khô mực nhanh chóng, in trực tiếp ở trên bề mặt của gỗ bằng mực UV riêng biệt cho công nghệ in UV và kết hợp các đầu phun kỹ thuật số cao cấp mang tới sản phẩm chất lượng tốt, bền màu và giá trị thẩm mỹ cao. Với khổ máy in lớn : 1,2 mét x 2,4 mét rất phù hợp với việc in các tấm gỗ có kích thước lớn.</p>
              <p className="mb-4 text-[18px]">Hãy liên hệ ngay hotline : <span className="text-red-600 font-bold text-lg">0901.622.922</span> để được tư vấn và báo giá chi tiết.</p>
              <p className="mb-4 text-[18px]">Ngoài in UV trên gỗ, công nghệ này còn in được trên những vật liệu như kính, đá , inox, mica, nhựa, gạch men,…</p>
              <div className="my-4">
                <img src="https://inhoabinh.com.vn/wp-content/uploads/2022/12/z3833150530479_52e3ef93e5dcb9157ee92fb18c07dc93-1024x768.jpg" alt="In UV trên gỗ" className="rounded-lg w-full object-cover" />
              </div>
              <p className="mb-2 font-bold text-[18px]">In UV trên gỗ cho phép tạo ra độ bóng cao, màu sắc rực rỡ, một loạt các lớp phủ và in ấn sắc nét và có hình thức hoàn thiện đẹp mắt. Đó là bởi vì mực UV có xu hướng nằm trên bề mặt in, thay vì bị hấp thụ vào nó. Kết quả cuối cùng là sắc nét hơn và rõ ràng hơn</p>
              <h3 className="text-lg font-bold text-blue-700 mt-6 mb-2">Độ bền thành phẩm cao</h3>
              <p className="mb-4 text-[18px]">Mực sau khi được in trên bề mặt gỗ đã được xử lý qua tia UV vì vậy bám rất chặt ở trên bề mặt vật liệu gỗ. Sản phẩm in UV trên gỗ có độ bền cao lên tới 10 năm, tuỳ thuộc theo địa điểm đặt ngoài trời hay trong nhà.</p>
              <h3 className="text-lg font-bold text-blue-700 mt-6 mb-2">Mực khô nhanh chóng</h3>
              <p className="mb-4 text-[18px]">Với in UV, mực khô ngay khi lấy ra khỏi máy ép. Không còn phải đợi mực khô, không phải đợi để làm các bản kiểm chứng, vì vậy sau khi in quý khách hàng có thể lấy ngay được.</p>
              <div className="my-4">
                <img src="/image/z4213618710180_506cd87b69845129845ac4959194d137.jpg" alt="In UV trên gỗ - mực khô nhanh" className="rounded-lg w-full object-cover" />
              </div>
              <h2 className="text-xl font-bold mt-6 mb-2">Ứng dụng công nghệ in UV trên gỗ</h2>
              <p className="mb-2 text-[18px]">Gỗ là vật liệu vô cùng quen thuộc từ xưa đến nay, mang một vẻ đẹp rất sang trọng và thích hợp trong nhiều kiến trúc, không gian sống khác nhau. Sự kết hợp <span className="font-bold">in UV trên gỗ</span> cùng đã đem tới những sản phẩm trang trí với tính ứng dụng cao ở cuộc sống chẳng hạn như:</p>
              <ul className="mb-4 list-disc pl-8">
                <li>In biển chỉ dẫn gỗ.</li>
                <li>In hộp đựng bằng gỗ.</li>
                <li>In trên bề mặt của đàn ghita.</li>
                <li>In phần ốp lưng của điện thoại bằng gỗ.</li>
                <li>In quà lưu niệm, móc chìa khóa.</li>
                <li>In ở tủ bàn học, bề mặt của bàn, tủ đựng quần áo.</li>
                <li>Trang trí nội thất trong nhà ở</li>
              </ul>
              <h3 className="text-lg font-bold mt-6 mb-2">Xác định quy cách, kích thước cần in UV ở trên gỗ</h3>
              <p className="mb-4 text-[18px]">Trước khi <span className="font-bold">in UV trên gỗ</span> bạn cần xác định được kích thước của sản phẩm, loại gỗ để in và quy cách in UV thế nào?</p>
              <h3 className="text-lg font-bold mt-6 mb-2">Chuẩn bị file để in</h3>
              <p className="mb-4 text-[18px]">Nhằm đảm bảo cho sản phẩm khi in UV trên gỗ sau khi hoàn thành đạt chất lượng tốt nhất thì việc kiểm tra file in là rất cần thiết. Việc này sẽ giúp sản phẩm của bạn có được độ bền màu và độ sắc nét cao.</p>
              <div className="my-4">
                <img src="https://inhoabinh.com.vn/wp-content/uploads/2022/12/z3833150528876_0463bf0931c2d212746d6892610a7507-576x1024.jpg" alt="Xác định quy cách, kích thước cần in UV ở trên gỗ" className="rounded-lg w-full object-cover" />
                <div className="text-center text-gray-500 text-sm mt-2">Xác định quy cách, kích thước cần in UV ở trên gỗ</div>
              </div>
              <h3 className="text-lg font-bold mt-6 mb-2">Vệ sinh phần bề mặt vật liệu gỗ</h3>
              <p className="mb-4 text-[18px]">Vì mực in UV khi in sẽ trực tiếp bám trên bề mặt của vật liệu nên không thể bỏ qua công đoạn vệ sinh phần bề mặt tấm gỗ. Điều này sẽ giúp mực bám trên bề mặt được tốt, sản phẩm sau khi in không bị mất đi tính thẩm mỹ hay bị nhoè màu.</p>
              <div className="my-4">
                <img src="https://inhoabinh.com.vn/wp-content/uploads/2022/12/z3833150531757_7659b88d29bf23601cb21b271a863643-1024x576.jpg" alt="Vệ sinh phần bề mặt vật liệu gỗ" className="rounded-lg w-full object-cover" />
                <div className="text-center text-gray-500 text-sm mt-2">Vệ sinh phần bề mặt vật liệu gỗ</div>
              </div>
              <h3 className="text-lg font-bold mt-6 mb-2">Tiến hành in UV</h3>
              <p className="mb-4 text-[18px]">Khi đã hoàn thành việc vệ sinh bề mặt gỗ thì sẽ tiến hành vận hành máy in theo kích thước, hình ảnh bạn yêu cầu, đảm bảo quá trình in cho ra sản phẩm chất lượng được tốt và không có lỗi gì.</p>
              <h2 className="text-xl font-bold mt-6 mb-2">Những lưu ý khi đặt in UV trên gỗ</h2>
              <p className="mb-2 text-[18px]">Để có được chất lượng thành phẩm tốt khi <span className="font-bold">in UV trên gỗ</span> bạn cần tham khảo những lưu ý sau đây trước khi đặt in:</p>
              <ul className="mb-4 list-disc pl-8">
                <li>Chỉ số DPI, độ phân giải của hình ảnh thích hợp để in trên gỗ.</li>
                <li>Với đơn đặt hàng in UV trên gỗ quan trọng thì bạn cần thực hiện in thử, kiểm tra về màu sắc trước khi tiến hành in UV hàng loạt.</li>
                <li>Về mức chi phí in UV sẽ được tính theo m2, ngoài ra với từng loại, số lượng riêng thì sẽ có mức giá thích hợp.</li>
              </ul>
              <p className="mb-4 text-[18px]">Hy vọng qua chia sẻ trên bạn đã nắm được thông tin tổng quan về <span className="font-bold">in UV trên gỗ</span>. Nếu bạn còn có băn khoăn, thắc mắc cần được tư vấn hãy liên hệ đến hotline : <span className="text-red-600 font-bold">0901.622.922</span> Mr Thoan của chúng tôi để được hỗ trợ tốt nhất nhé!</p>
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
                <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-go.html" target="_blank" rel="noopener noreferrer">
                  <span className="underline text-red-600 font-bold">&gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN GỖ&nbsp;TẠI ĐÂY &lt;&lt;</span>
                  <span> Hoặc link : <span className="text-blue-600">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-go.html</span></span>
                </a>
              </div>
              <p className="italic pt-4 pb-4 text-blue-700 font-bold"><u>In uv trên gỗ</u> để làm lịch tranh sơn mài cho ngân hàng HD Bank</p>
              <div className="my-4">
                <img src="/image/z4213618705597_02ef681bf75012c2dc28168cc06642d9.jpg" alt="In uv trên gỗ làm lịch tranh sơn mài" className="rounded-lg w-full object-cover" />
              </div>
              <p className="italic pt-4 pb-4 text-blue-700 font-bold"><u>In uv trên gỗ</u> để làm hộp quà tặng cao cấp</p>
              <div className="my-4">
                <img src="/image/z4213618707941_57203cbfe2c4b24a55964a714f9e50c7.jpg" alt="In uv trên gỗ làm hộp quà tặng cao cấp" className="rounded-lg w-full object-cover" />
              </div>
              <p className="italic pt-4 pb-4 text-blue-700 font-bold"><u>In uv trên gỗ</u> để làm bảng hướng dẫn resort</p>
              <div className="my-4">
                <img src="/image/z4213615442102_a9e8e5a5220994f3a80f9e3716847852.jpg" alt="In uv trên gỗ làm bảng hướng dẫn resort" className="rounded-lg w-full object-cover" />
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
                <a href="https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-go.html" target="_blank" rel="noopener noreferrer">
                  <span className="underline text-red-600 font-bold">&gt;&gt;BẤM XEM THÊM CÁC SẢN PHẨM IN UV TRÊN GỖ&nbsp;TẠI ĐÂY &lt;&lt;</span>
                  <span> Hoặc link : <span className="text-blue-600">https://www.inuvhoabinh.com/danh-muc-san-pham/chat-lieu-go.html</span></span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ProUVGoPage;
