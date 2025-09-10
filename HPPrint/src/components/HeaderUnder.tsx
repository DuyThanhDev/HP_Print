
import React from "react";

interface HeaderUnderProps {
	current: string; // Tên trang hiện tại
}


const HeaderUnder: React.FC<HeaderUnderProps> = ({ current }) => {
	return (
		<div className="w-full bg-gradient-to-r from-teal-700 via-blue-900 to-yellow-700 py-4 px-4">
			<div className="max-w-7xl mx-auto flex items-center space-x-2 justify-end">
				<a href="/" className="text-gray-300 text-xs md:text-sm hover:underline">TRANG CHỦ</a>
				<span className="text-gray-400 text-xs md:text-sm">&#8250;</span>
				<span className="text-white text-xs md:text-sm font-semibold">{current}</span>
			</div>
		</div>
	);
};

export default HeaderUnder;
