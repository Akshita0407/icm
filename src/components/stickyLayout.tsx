import { GoArrowRight } from "react-icons/go";

interface Item {
  id: string;
  label: string;
}

interface StickySectionProps {
  title?: string;
  data: Item[];
  offset?: number;
}

const StickySection = ({
  title = "Navigate to:",
  data,
  offset = 130,
}: StickySectionProps) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="
        flex flex-col p-5
     
      "
    >
      <h2 className="text-2xl font-bold my-4">{title}</h2>

      <div className="text-sm flex gap-3 flex-col">
        {data.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="text-left"
          >
            <div className="bg-[#f3f3f3] p-2 rounded hover:scale-[1.02] transition flex gap-3 group items-center">
              <div className="w-8 h-8 bg-white rounded flex justify-center items-center group-hover:bg-[#f57b2a] ">
                <GoArrowRight
                  className="text-black group-hover:text-white"
                  fontSize={20}
                />
              </div>
              <div className="text-[12px] font-semibold text-[#333] ">
                {item.label}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StickySection;
