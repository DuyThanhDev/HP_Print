import React from "react";
import Header from "../../components/Header";
import HeaderUnder from "../../components/HeaderUnder";
import Footer from "../../components/Footer";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeaderUnder />
      {/* Google Map */}
      <div className="w-full bg-white rounded-lg shadow overflow-hidden border border-gray-200 mt-8 max-w-7xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.626964893964!2d106.6136870758696!3d10.84112018931637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b2e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2zMTIyIEzDqiBOaeG7h20sIFRow6BuaCBQaMO6LCBUw6JuIFBow7osIEjDoCBO4buZaSwgVMOibiBI4buNYyBNaW5oIDcwMDAw!5e0!3m2!1svi!2s!4v1694412345678!5m2!1svi!2s"
          width="100%"
          height="600"
          style={{ border: 0, display: 'block' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bản đồ In UV Hoà Bình"
        ></iframe>
      </div>
      <div className="flex flex-1 max-w-7xl mx-auto w-full mt-6 mb-8">
        {/* Main content */}
        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-2 md:px-0">
            {/* Thông tin liên hệ */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">THÔNG TIN LIÊN HỆ</h2>
              <div className="font-bold text-xl md:text-2xl mb-6">CÔNG TY TNHH IN HOÀ BÌNH</div>
              <div className="mb-4 text-base md:text-lg">Địa chỉ: 400 Tân Hòa Đông , P. Bình Trị Đông , Q. Bình Tân , TP.HCM</div>
              <div className="mb-4 text-base md:text-lg">Điện Thoại: 0901.622.922 - 0973.73.73.44</div>
              <div className="mb-4 text-base md:text-lg">Email : inuvhoabinh@gmail.com</div>
              <div className="mb-4 text-base md:text-lg">Website: <a href="http://www.inuvhoabinh.com" className="underline text-blue-800" target="_blank" rel="noopener noreferrer">www.inuvhoabinh.com</a></div>
            </div>
            {/* Form liên hệ */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">GỬI TIN NHẮN</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Họ và tên" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                <input type="text" placeholder="Điện thoại" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                <input type="text" placeholder="Địa chỉ" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                <input type="text" placeholder="Chủ đề" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                <textarea placeholder="Nội dung" className="w-full border border-gray-300 rounded px-4 py-3 min-h-[90px] focus:outline-none focus:ring-2 focus:ring-blue-300" />
                <div className="flex justify-end pt-2">
                  <button type="submit" className="bg-sky-400 hover:bg-sky-500 text-white font-bold py-3 px-8 rounded transition-all">GỬI LIÊN HỆ</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
