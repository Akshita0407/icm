import clsx from "clsx";
import video from "../../../assets/localAndGlobalSeo.mp4";

interface CardContent {
  id: number;
  title: string;
  description: string;
}

const cardData: CardContent[] = [
  {
    id: 1,
    title: "Storefront",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore quod laboriosam nesciunt sequi at recusandae explicabo aliquid nobis molestias. obcaecati unde impedit assumenda perferendis illum fuga incidunt accusamus, voluptatibus quibusdam dolore nesciunt alias necessitatibus. Pariatur minima nisi libero ducimus maxime!",
  },
  {
    id: 2,
    title: "A+ Content",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore quod laboriosam nesciunt sequi at recusandae explicabo aliquid nobis molestias.obcaecati unde impedit assumenda perferendis illum fuga incidunt accusamus, voluptatibus quibusdam dolore nesciunt alia necessitatibus. Pariatur minima nisi libero ducimus maxime!",
  },
];

const StorefontAContent = () => {
  return (
    <div
      className={clsx("w-full py-12 px-5 md:px-10 lg:px-16 xl:px-16 lg:py-20")}
    >
      <div className="w-full flex flex-col gap-10">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Storefront & A+ Content
          </h2>
          <p className="w-full lg:w-[90%] text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            obcaecati unde impedit assumenda perferendis illum fuga incidunt
            accusamus, voluptatibus quibusdam dolore nesciunt alias
            necessitatibus. Pariatur minima nisi libero ducimus maxime!
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="w-full flex flex-col gap-5 lg:order-first order-last">
            {cardData.map((item) => (
              <div
                key={item.id}
                className="w-full flex flex-col gap-4 bg-[#f5f1e4] p-6 shadow-md rounded-3xl transition-all duration-300 hover:bg-gray-50 min-h-70"
              >
                <h3 className="text-2xl md:text-4xl font-bold text-[#ff6600]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="relative w-full  lg:max-h-140 max-h-80 order-first lg:order-last rounded-2xl overflow-hidden shadow-xl hover:shadow-lg  cursor-pointer">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full max-h-140
               object-cover hover:shadow-lg hover:scale-[1.02] ease-in-out cursor-pointer duration-300"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorefontAContent;
