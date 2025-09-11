const items = [
	"IN UV PHẲNG LÀ GÌ?",
	"IN UV MICA",
	"IN UV TRÊN KÍNH",
	"IN UV INOX, SẮT, NHÔM, ALUMIUM",
	"IN UV TRÊN NHỰA PVC,ABS",
	"IN UV TRÊN FORMEX, PIMA, FOAM",
	"IN UV TRÊN GỖ",
	"CẮT LASER MICA",
	"IN UV TRÊN DA, SIMILI",
	"IN UV CUỘN LÀ GÌ",
	"IN UV TEM DÁN DTF",
];

function Sibar() {
	return (
		<div className="border border-gray-300 w-76 sticky top-8 h-fit">
			<div className="bg-[#f4c73c] text-white font-bold text-lg px-4 py-2 border-b border-gray-300">
				HÒA BÌNH CHUYÊN
			</div>
			<ul className="bg-white">
				{items.map((item) => (
					<li
						key={item}
						className="px-4 py-2 text-gray-700 font-semibold text-base border-b border-gray-200 last:border-b-0 hover:bg-gray-50 cursor-pointer"
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Sibar;
