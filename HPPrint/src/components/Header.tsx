

import { useLocation, Link } from "react-router-dom";

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
	const location = useLocation();
	return (
		<header className="w-full">
			<nav className="bg-[#f6cb3f] w-full">
				<ul className="flex flex-wrap justify-center items-center gap-8 py-4">
					{menuItems.map((item) => {
						const isActive = location.pathname === item.href;
						return (
							<li key={item.label} className="flex flex-col items-center group">
								<Link
									to={item.href}
									className="text-white font-bold text-sm md:text-base tracking-wide transition-all duration-200"
								>
									{item.label}
								</Link>
								{/* Hiệu ứng 3 dấu chấm */}
												<div
													className={`h-5 flex items-center mt-1 transition-opacity duration-200 ${
														isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
													}`}
												>
													<span className="inline-block w-1 h-1 bg-white mx-0.5"></span>
													<span className="inline-block w-1 h-1 bg-white mx-0.5"></span>
													<span className="inline-block w-1 h-1 bg-white mx-0.5"></span>
												</div>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
