import image from "../../../assets/searchStrategy.png";
import SectionContent from "../../components/sectionContent";

interface ContentProp {
  id: number;
  heading: string;
  paragraph: string;
}

const data: ContentProp[] = [
  {
    id: 1,
    heading: "Lorem ipsum dolor",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id enim quae quia quibusdam nobis eligendi.",
  },
  {
    id: 2,
    heading: "Lorem ipsum dolor",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id enim quae quia quibusdam nobis eligendi.",
  },
  {
    id: 3,
    heading: "Lorem ipsum dolor",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id enim quae quia quibusdam nobis eligendi.",
  },
  {
    id: 4,
    heading: "Lorem ipsum dolor",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id enim quae quia quibusdam nobis eligendi.",
  },
];

const SearchStrategy = () => {
  return (
    <div className="w-full lg:pb-20 pb-12 px-5 md:px-10 lg:px-20">
      <div className="w-full flex flex-col lg:gap-12 gap-8">
        <SectionContent
          title="Search Strategy"
            underline={true}
          paragraphs={[
            `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Provident id enim quae quia quibusdam nobis eligendi.
     Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Eum soluta, quo facere quia repudiandae sint illum,
     provident quidem aspernatur, vel beatae itaque repellat.`,
          ]}
        />

        <div className="w-full flex lg:flex-row flex-col lg:gap-12 gap-8 items-start">
          <div className="lg:w-[40%] w-full">
            <div className="w-full h-fit">
              <img
                src={image}
                alt="search-strategy"
                className="w-full h-full lg:max-h-120 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
          <div className="lg:w-[60%] w-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 bg-[#ff6600]/10 rounded-full flex items-center justify-center mb-3">
                    <span className="text-[#ff6600] font-bold text-lg">
                      {item.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#222] mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchStrategy;
