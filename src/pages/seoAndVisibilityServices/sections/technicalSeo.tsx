import type { ReactNode } from "react";
import Button from "../../components/button";
import video from "../../../assets/technicalSeo.mp4";
import { FaRocket, FaMobile, FaSitemap, FaShieldAlt } from "react-icons/fa";

interface ContentProp {
  id: number;
  icon: ReactNode;
  label: string;
}

const data: ContentProp[] = [
  { id: 1, icon: <FaRocket />, label: "Lorem ipsum dolor" },
  { id: 2, icon: <FaMobile />, label: "Lorem ipsum dolor" },
  { id: 3, icon: <FaShieldAlt />, label: "Lorem ipsum dolor" },
  { id: 4, icon: <FaSitemap />, label: "Lorem ipsum dolor" },
];

const TechnicalSeo = () => {
  return (
    <div className="w-full py-12 px-5 md:px-10 lg:px-16 xl:px-15 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="w-full flex flex-col gap-4 lg:order-first order-last">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
              Technical SEO
            </h2>
            <h3 className="text-sm md:text-xl font-medium text-gray-700">
              Lorem ipsum dolor sit amet, consectetur.
            </h3>
          </div>

          <div className="w-full h-px bg-gray-300" />

          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam, nam.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            {data.map((item) => (
              <div
                key={item.id}
                className="group p-4 bg-white flex items-center gap-3 rounded-xl border border-gray-200 hover:border-[#ff6600] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="md:text-2xl text:xl text-gray-600 group-hover:text-[#ff6600] transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className=" text-sm md:text-lg font-semibold text-gray-600">
                  {item.label}
                </h4>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-2">
            <Button buttonText="LEARN MORE" />
          </div>
        </div>
        <div className="w-full order-first lg:order-last">
          <div className="relative w-full aspect-video lg:min-h-100 rounded-2xl overflow-hidden shadow-xl">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSeo;
