import video from "../../../assets/bannerVideo (2).mp4";
import clsx from "clsx";
import { FaCheckCircle } from "react-icons/fa";

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
    label: "Lorem ipsum, dolor sit debi.",
  },
  {
    id: 3,
    label: "Lorem ipsum, dolor consectetur ",
  },
  {
    id: 4,
    label: "Lorem ipsum, dolor sit amet consectetur ",
  },
  {
    id: 5,
    label: "Lorem ipsum, dolor sit amet consectetur cum.",
  },
];

const MarketplaceKeywordStrategy = () => {
  return (
    <>
      <div className={clsx("w-full pb-12 px-5 md:px-10 lg:px-16  lg:pb-20")}>
        <div className="w-full lg:p-10 rounded-3xl overflow-hidden relative lg:min-h-[80vh]  flex items-center">
          <div className="absolute inset-0 z-0">
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-40"
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent z-10" />

          <div className="relative z-20 w-full p-6  flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
            <div className="flex flex-col gap-4 lg:w-1/2">
              <span className="text-[#ff6600] font-semibold text-xs md:text-sm uppercase">
                Strategic Approach
              </span>
              <h1 className="font-extrabold lg:text-5xl md:text-4xl text-3xl leading-tight text-white">
                Marketplace
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ff6600] to-[#ff9900]">
                  {" "}
                  Keyword{" "}
                </span>
                Strategy
              </h1>
              <div className="w-16 h-1 bg-linear-to-r from-[#ff6600] to-transparent"></div>
            </div>

            <div className="lg:w-1/2 flex flex-col lg:gap-8 gap-5">
              <p
                className="lg:text-lg md:text-base text-sm leading-relaxed text-white font-semibold"
                style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident accusamus, voluptates officia sapiente ut quae ab id
                saepe, quibusdam nihil maxime.
              </p>

              <div className="bg-[#f5f1e4] rounded-xl lg:p-6 p-3 shadow-lg">
                <ul className="flex flex-col gap-3">
                  {data.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <div className="w-[10%] flex justify-center itesms-center">
                        <FaCheckCircle className="text-orange-500 text-xl mt-1" />
                      </div>
                      <div className="w-[90%]">
                        {" "}
                        <span className="text-gray-600 text-sm md:text-base">
                          {item.label}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketplaceKeywordStrategy;
