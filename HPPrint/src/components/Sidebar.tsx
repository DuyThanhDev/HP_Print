import { useNavigate } from "react-router-dom";

const items = [
  { label: "IN UV PHẲNG LÀ GÌ?", link: "/proUVPhang" },
  { label: "IN UV MICA", link: "/productLaserMica/pro03" },
  { label: "IN UV TRÊN KÍNH", link: "/productLaserMica/pro02" },
  { label: "IN UV INOX, SẮT, NHÔM, ALUMIUM", link: "/productLaserMica/pro04" },
  { label: "IN UV TRÊN NHỰA PVC,ABS", link: "/proUVNPA" },
  { label: "IN UV TRÊN FORMEX, PIMA, FOAM", link: "/productMatPhang/formex" },
  { label: "IN UV TRÊN GỖ", link: "/productMatPhang/go" },
  { label: "CẮT LASER MICA", link: "/productLaserMica" },
  { label: "IN UV TRÊN DA, SIMILI", link: "/productMatPhang/da-simili" },
  { label: "IN UV CUỘN LÀ GÌ", link: "/proUVCuon" },
  { label: "IN UV TEM DÁN DTF", link: "/proUVDTF" },
];

function Sidebar() {
  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="border border-gray-300 w-76 sticky top-8 h-fit">
      <div className="bg-[#f4c73c] text-white font-bold text-lg px-4 py-2 border-b border-gray-300">
        HÒA BÌNH CHUYÊN
      </div>
      <ul className="bg-white">
        {items.map((item) => (
          <li
            key={item.label}
            className="px-4 py-2 text-gray-700 font-semibold text-base border-b border-gray-200 last:border-b-0 hover:bg-gray-50 cursor-pointer"
            onClick={() => handleNavigate(item.link)}
            tabIndex={0}
            role="button"
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') handleNavigate(item.link);
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;