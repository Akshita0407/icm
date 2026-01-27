import clsx, { type ClassValue } from "clsx";
import { FaCheckCircle } from "react-icons/fa";
import amazonSeo from "../../../assets/amazonSeo.jpg";
import amazonAdvertising from "../../../assets/strategy.jpg";

interface ListProp {
  id: number;
  label: string;
}

interface ContentProp {
  id: number;
  className?: ClassValue;
  subheading: string;
  description: string;
  image: string;
  list: ListProp[];
}

const data: ContentProp[] = [
  {
    id: 1,
    subheading: "Amazon Seo Services  ",
    image: amazonSeo,
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi perferendis atque fuga officia cumque vel beatae inventore alias laboriosam?",
    list: [
      {
        id: 1,
        label:
          "Lorem ipsum, dolor sit amet consectetur debitis illo libero cum.",
      },
      {
        id: 2,
        label: "Lorem ipsum, dolor sit  debitis illo libero cum.",
      },
      {
        id: 3,
        label: "Lorem ipsum, dolor  consectetur debitis illo libero cum.",
      },
      {
        id: 4,
        label:
          "Lorem ipsum, dolor sit amet consectetur debitis illo libero cum.",
      },
      {
        id: 5,
        label: "Lorem ipsum, dolor sit amet consectetur  cum.",
      },
    ],
  },
  {
    id: 2,
    subheading: "Amazon Advertising",
    image: amazonAdvertising,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi perferendis atque fuga officia cumque vel beatae inventore alias laboriosam?",
    className: "lg:flex-row-reverse ",
    list: [
      {
        id: 1,
        label: "Lorem ipsum,  consectetur debitis illo libero cum.",
      },
      {
        id: 2,
        label:
          "Lorem ipsum, dolor sit amet consectetur debitis illo libero cum.",
      },
      {
        id: 3,
        label: "Lorem ipsum, dolor sit debitis illo libero cum.",
      },
      {
        id: 4,
        label: "Lorem ipsum,  consectetur debitis illo libero cum.",
      },
      {
        id: 5,
        label:
          "Lorem ipsum, dolor sit amet consectetur debitis illo libero cum.",
      },
    ],
  },
];

const AmazonSeoAdvertising = () => {
  return (
    <div
      className={clsx(
        "w-full py-12 px-5 md:py-10 lg:px-16  lg:py-20 bg-[#f5f1e4] border border-transparent rounded-3xl",
      )}
    >
      <div className="w-full flex flex-col lg:items-center lg:text-center lg:gap-8 gap-5 ">
        <div className="flex flex-col gap-4 mb-6 lg:mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Amazon SEO & Advertising
          </h2>
          <p className="w-full lg:w-[90%] text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            veritatis fugit autem natus, repellat corporis voluptatibus debitis
            illo libero cum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Fuga, et. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quibusdam neque temporibus atque nulla impedit cum!
          </p>
        </div>

        {data.map((c) => (
          <div
            key={c.id}
            className={clsx(
              "w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 lg:my-5 my-2",
              c.className,
            )}
          >
            <div className="w-full lg:w-1/2 order-1">
              <div className="w-full rounded-xl min-h-80 shadow-md overflow-hidden">
                <img
                  src={c.image}
                  alt={c.subheading}
                  className="w-full h-full min-h-80 object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-2 flex flex-col gap-5 text-left bg-white p-5 shadow-md rounded-3xl">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                {c.subheading}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
                {c.description}
              </p>

              <ul className="flex flex-col gap-3">
                {c.list.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <div className="w-[10%] flex justify-center itesms-center">
                      <FaCheckCircle className="text-orange-500 text-xl mt-1" />
                    </div>
                     <div className="w-[90%]">
                    <span className="text-gray-600 text-sm md:text-base">
                      {item.label}
                    </span></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmazonSeoAdvertising;
