
import React from "react";

interface MenuItem {
	label: string;
	href: string;
}

const menuItems: MenuItem[] = [
	{ label: "TRANG CHỦ", href: "/" },
	{ label: "GIỚI THIỆU", href: "/about" },
	{ label: "SẢN PHẨM", href: "/products" },
	{ label: "IN UV MẶT PHẲNG", href: "/productMatPhang" },
	{ label: "IN UV CUỘN", href: "/productCuon" },
	{ label: "CẮT LASER MICA", href: "/productLaserMica" },
	{ label: "TIN TỨC", href: "/news" },
	{ label: "LIÊN HỆ", href: "/contact" },
];


const Header: React.FC = () => {
	return (
		<header className="w-full">
			<nav className="bg-[#f6cb3f] w-full">
				<ul className="flex flex-wrap justify-center items-center gap-8 py-6">
					{menuItems.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="text-white font-bold text-sm md:text-base tracking-wide hover:underline transition-all duration-200"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
