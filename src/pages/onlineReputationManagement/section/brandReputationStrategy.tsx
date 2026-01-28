import type { ReactNode } from "react";
import video from "../../../assets/brandReputation.mp4";
import { FaShieldHalved, FaEye, FaBullhorn } from "react-icons/fa6";

interface ContentProp {
  id: number;
  icon: ReactNode;
  content: string;
}

const data: ContentProp[] = [
  {
    id: 1,
    icon: <FaShieldHalved />,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni",
  },

  {
    id: 2,
    icon: <FaEye />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnidolor unde",
  },
  {
    id: 3,
    icon: <FaBullhorn />,
    content: "Lorem ipsum dolor sit amet consectetur",
  },
];

const BrandReputationStrategy = () => {
  return (
    <>
      <div className="w-full py-12 px-5 md:px-10 lg:px-16 xl:px-16 lg:py-20">
        <div className="w-full flex flex-col lg:gap-8 gap-5 items-center justify-center text-center">
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                Brand Reputation Strategy
              </h2>
              <h3 className="text-sm md:text-xl font-medium text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                dolor unde
              </h3>
            </div>

            <div className="w-full h-px bg-gray-300" />

            <p className="w-full lg:w-[90%]  text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, odio
              incidunt quaerat, alias vitae nisi laborum tempore ab nulla maxime
              quia assumenda facilis explicabo nam reprehenderit corporis illo
              error, reiciendis officiis? Alias illo maiores, non fuga expedita
              reprehenderit labore voluptas natus reiciendis minus quia
              veritatis dignissimos ad debitis est amet.
            </p>
          </div>

          <div className="w-full lg:w-[70%] max-h-96 mt-4">
            <video
              src={video}
              loop
              muted
              playsInline
              autoPlay
              className="w-full h-full max-h-96 object-cover rounded-lg"
            />
          </div>

          <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center gap-4 p-6 border border-[#ff6600]/10 rounded-xl hover:scale-105 hover:bg-[#ff6600]/10 cursor-pointer"
              >
                <div className="text-4xl text-[#ff6600]">{item.icon}</div>
                <p className="text-gray-700 text-sm md:text-base text-center leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          <p className="w-full lg:w-[90%]  text-gray-700 text-sm md:text-lg leading-relaxed mt-8">
            Your brand reputation directly impacts customer trust, conversion
            rates, and long-term revenue. Our strategic approach combines
            proactive monitoring, crisis prevention, and positive content
            amplification to ensure your brand stays protected and positions you
            as an industry leader.
          </p>
        </div>
      </div>
    </>
  );
};

export default BrandReputationStrategy;
