import clsx from "clsx";
import Button from "../../components/button";
import magnifyingGlass from "../../../assets/magGlass.jpg";
import html from "../../../assets/html.jpg";
import social from "../../../assets/social.jpg";

interface ContentProp {
  id: number;
  bgImage: string;
  title: string;
  description: string;
}

const data: ContentProp[] = [
  {
    id: 1,
    bgImage: magnifyingGlass,
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quam neque similique nobis temporibus beatae vel...",
  },
  {
    id: 2,
    bgImage: html,
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quam neque similique nobis temporibus beatae vel...",
  },
  {
    id: 3,
    bgImage: social,
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quam neque similique nobis temporibus beatae vel...",
  },
];

const OnOffPage = () => {
  return (
    <>
      <div
        className={clsx(
          "w-full pb-12 px-5 md:px-10 lg:px-16 xl:px-20 lg:pb-20",
        )}
      >
        <div className="w-full flex flex-col lg:gap-8 gap-5 justify-center items-center ">
          <div className="flex flex-col gap-4 mb-5 lg:mb-8 lg:justify-center lg:items-center lg:text-center  ">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 lg:mb-4 mb-2">
              On-page & Off-page SEO
            </h2>
            <p className="w-full lg:w-[90%] text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              veritatis fugit autem natus, repellat corporis voluptatibus
              debitis illo libero cum, rerum vitae ducimus a blanditiis
              molestiae officiis asperiores quod distinction.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((c) => (
              <div
                key={c.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-74 cursor-pointer"
              >
                <div className="absolute inset-0  transition-transform duration-500 group-hover:scale-110">
                  <img
                    src={c.bgImage}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/50  duration-300"></div>

                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gray-900 mb-3 transition-colors duration-300">
                    {c.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200 group-hover:text-gray-700 leading-relaxed transition-colors duration-300">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button buttonText="LEARN MORE" />
        </div>
      </div>
    </>
  );
};

export default OnOffPage;
