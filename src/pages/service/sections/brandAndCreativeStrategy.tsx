import type { ReactNode } from "react";
import SectionContent from "../../components/sectionContent";
import { FaTags, FaLightbulb, FaChartBar } from "react-icons/fa6";

interface ContentProp {
  id: number;
  icon: ReactNode;
  subheading: string;
  paragraph: string;
}

const data: ContentProp[] = [
  {
    id: 1,
    icon: <FaTags />,
    subheading: "Lorem ipsum dolor",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt corrupti, sequi eos soluta odio fugiat officia rerum, quas eligendi maiores veniam, repellendus nesciunt ipsum obcaecati blanditiis nostrum.",
  },
  {
    id: 2,
    icon: <FaLightbulb />,
    subheading: "Lorem ipsum dolor",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt corrupti, sequi eos soluta odio fugiat officia rerum, quas eligendi maiores veniam, repellendus nesciunt ipsum obcaecati blanditiis nostrum.",
  },
  {
    id: 3,
    icon: <FaChartBar />,
    subheading: "Lorem ipsum dolor",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt corrupti, sequi eos soluta odio fugiat officia rerum, quas eligendi maiores veniam, repellendus nesciunt ipsum obcaecati blanditiis nostrum.",
  },
];

const BrandAndCreativeStrategy = () => {
  return (
    <div className="w-full lg:pb-20 pb-12 px-5 md:px-10 lg:px-15">
      <div className="w-full flex flex-col gap-5 md:justify-center md:items-center items-start lg:text-center">
        <SectionContent
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt corrupti, sequi eos soluta odio fugiat officia rerum, quas eligendi maiores veniam, repellendus nesciunt ipsum obcaecati blanditiis nostrum. Dignissimos, aut quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt corrupti, sequi eos soluta odio fugiat officia rerum, quas eligendi maiores.",
          ]}
          title={
            <>
              Brand And <span className="text-[#ff6600]">Creative</span>{" "}
              Strategy
            </>
          }
          className="md:gap-8 gap-4"
          underline={false}
        />
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 lg:mt-8 mt-5 items-center text-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-5 bg-linear-to-br from-white to-gray-100 flex flex-col items-center justify-center rounded-xl border border-gray-100 hover:shadow-xl hover:border-[#ff6600]/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-5 rounded-full bg-linear-to-br from-orange-50 to-orange-100">
                <div className="text-5xl text-[#ff6600]">{item.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.subheading}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandAndCreativeStrategy;
