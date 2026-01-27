import video from "../../../assets/launch.mp4";

interface ListProp {
  id: number;
  title: string;
  description: string;
}

const data: ListProp[] = [
  {
    id: 1,
    title: "Pre-Launch Research",
    description: "Market demand, competitor analysis, and keyword validation.",
  },
  {
    id: 2,
    title: "Launch Optimization",
    description: "SEO-ready pages, listings, and structured metadata.",
  },
  {
    id: 3,
    title: "Go-Live Strategy",
    description: "Publishing, indexing, and tracking configuration.",
  },
  {
    id: 4,
    title: "Post-Launch Growth",
    description: "Monitoring performance and continuous optimization.",
  },
];

const ProductLaunchServices = () => {
  return (
    <div className="w-full pb-12 px-5 md:px-10 lg:px-16 lg:pb-20">
      <div className="w-full grid lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="w-full shadow-md flex flex-col rounded p-5 lg:order-first order-last">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Product <span className="text-[#ff6600]">Launch</span> Services
          </h2>

          <p className="mt-2 w-full lg:w-[90%] text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            obcaecati unde impedit assumenda perferendis illum unde.
          </p>

          <ul className="relative mt-5 flex flex-col gap-8 ">
            <div className="absolute left-8 top-0 h-full w-1 bg-linear-to-b from-[#ff6600]/10 via-[#ff6600] to-[#ff6600]/10 md:flex hidden" />

            {data.map((item) => (
              <li
                key={item.id}
                className="relative z-10 flex md:flex-row flex-col md:items-start items-center gap-6 cursor-pointer"
              >
                <div className="md:w-[20%] w-full">
                  <div className="flex items-center justify-center w-20 h-10  rounded-full bg-[#ff6600] text-white font-bold">
                    Step {item.id}
                  </div>
                </div>
                <div className="md:w-[80%] w-full">
                  {" "}
                  <div className="bg-white rounded-lg shadow-sm px-3 py-2 w-full">
                    <h4 className="font-semibold text-base text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full shadow-md rounded overflow-hidden order-first lg:order-last">
          <div className="w-full lg:max-h-160 max-h-100 rounded">
            {" "}
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full lg:max-h-160 max-h-100 object-cover rounded "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLaunchServices;
