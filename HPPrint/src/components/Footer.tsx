import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white pt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Thông tin */}
        <div>
          <h2 className="text-2xl font-bold text-[#f6cb3f] mb-4">Thông Tin</h2>
          <div className="font-bold text-lg mb-2">CÔNG TY IN ẤN HOÀ BÌNH</div>
          <div className="text-gray-800 text-sm mb-2">
            Địa chỉ: 400 Tân Hòa Đông , P. Bình Trị Đông , Q. Bình Tân , TP.HCM
          </div>
          <div className="text-gray-800 text-sm mb-2">
            Điện Thoại: 0901.622.922 - 0977.973.064
          </div>
          <div className="text-gray-800 text-sm mb-2">
            Email : inuvhoabinh@gmail.com
          </div>
          <div className="text-gray-800 text-sm">
            Facebook : <a href="https://www.facebook.com/inuvhoabinh/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.facebook.com/inuvhoabinh/</a>
          </div>
        </div>
        {/* Fanpage */}
        <div>
          <h2 className="text-2xl font-bold text-[#f6cb3f] mb-4">Fanpage</h2>
          <div className="w-full flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Finuvhoabinh&tabs&width=340&height=180&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="180"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen={true}
              title="Fanpage In UV Hoà Bình"
            ></iframe>
          </div>
        </div>
        {/* Bản đồ địa chỉ */}
        <div>
          <h2 className="text-2xl font-bold text-[#f6cb3f] mb-4">Bản Đồ Địa Chỉ</h2>
          <div className="w-full flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.626964893964!2d106.6136870758696!3d10.84112018931637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b2e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2zNDAwIFTDom4gSMOyYSDEkMO0bmcsIFAuIELDrG5oIFRyw6kgxJDhu5NuZywgUXXhuq1uIELDrG5oIFTDom4sIFRow6BuaCBwaOG7kSBIQ00!5e0!3m2!1svi!2s!4v1694412345678!5m2!1svi!2s"
              width="340"
              height="180"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ In UV Hoà Bình"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Footer dưới */}
      <div className="w-full bg-gradient-to-r from-teal-700 via-blue-900 to-yellow-700 py-4 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="text-white text-sm mb-2 md:mb-0">
            In Ấn Hoà Bình © 2018. <span className="text-blue-200">All Rights Reserved</span>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-white font-semibold">
            <span>• TRANG CHỦ</span>
            <span>• GIỚI THIỆU</span>
            <span>• SẢN PHẨM</span>
            <span>• IN UV MẶT PHẲNG</span>
            <span>• IN UV CUỘN</span>
            <span>• CẮT LASER MICA</span>
            <span>• TIN TỨC</span>
            <span>• LIÊN HỆ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
