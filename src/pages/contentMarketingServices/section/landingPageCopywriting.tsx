import { IoArrowForward } from "react-icons/io5";

interface ListProp {
  id: number;
  label: string;
}
const data: ListProp[] = [
  {
    id: 1,
    label: "Lorem ipsum, dolor sit amet consectem.",
  },
  {
    id: 2,
    label: "Lorem ipsum, dolor sit debi Lorem ipsum, dolor consectetur.",
  },
  {
    id: 3,
    label: "Lorem ipsum, dolor consectetur Lorem ipsum, dolor consectetur",
  },
  {
    id: 4,
    label:
      "Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor consectetur",
  },
  {
    id: 5,
    label: "Lorem ipsum, dolor sit amet consectetur cum.",
  },
];
const LandingPageCopywriting = () => {
  return (
    <>
      <div className="w-full pb-12 px-5 md:px-10 lg:px-16 xl:px-15 lg:pb-20">
        <div className="flex flex-col gap-4 mb-6 lg:mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Landing Page Copywriting
          </h2>
          <p className="w-full lg:w-[90%] text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            veritatis fugit autem natus, repellat corporis voluptatibus debitis
            illo libero cum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Fuga, et. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quibusdam neque temporibus atque nulla impedit cum!
          </p>
          <ul className="flex flex-col gap-3">
            {data.map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <div className="w-[5%] flex justify-center itesms-center">
                  <div className="w-6 h-6 aspect-square hover:bg-[#ff6600] bg-[#ff6600]/10 flex justify-center items-center">
                    <IoArrowForward className="hover:text-white font-bold text-xl text-[#ff6600]" />
                  </div>
                </div>
                <div className="w-[90%]">
                  <span className="text-gray-600 text-sm md:text-base">
                    {item.label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LandingPageCopywriting;
