import image from "../../../assets/magGlass.jpg";
import { FaCheckCircle } from "react-icons/fa";

interface ContentProp {
  id: number;
  content: string;
}

const data: ContentProp[] = [
  {
    id: 1,
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 2,
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 3,
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 4,
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 5,
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
];

const KeywordResearchAudits = () => {
  return (
    <div className="w-full pb-12 px-5 md:px-10 lg:px-16 xl:px-16 lg:pb-20">
      <div className="w-full flex flex-col lg:gap-8 gap-5">
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
              Keyword Research & SEO Audits
            </h2>
            <h3 className="text-sm md:text-xl font-medium text-gray-700">
              Lorem ipsum dolor sit amet, consectetur.
            </h3>
          </div>

          <div className="w-full h-px bg-gray-300" />

          <p className="w-full lg:w-[90%] text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam, nam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Qui a eveniet maxime non laudantium delectus. Fugiat sunt
            aliquid inventore mollitia.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-5 lg:mt-5 mt-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-15 gap-5 items-center">
            <div className="w-full">
              <div className="w-full max-h-100 ">
                <img
                  src={image}
                  alt="Keyword research and SEO audit "
                  className="w-full h-full max-h-100 object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="w-full">
              <ul className="flex flex-col lg:gap-6 gap-3">
                {data.map((item) => (
                  <li
                    key={item.id}
                    className="group flex  gap-4 md:p-3 p-2 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="mt-1 text-orange-500">
                      <FaCheckCircle className="text-xl" />
                    </div>
                    <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                      {item.content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordResearchAudits;
