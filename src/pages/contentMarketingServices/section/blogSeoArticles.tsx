import clsx, { type ClassValue } from "clsx";
import image from "../../../assets/strategy.jpg"

interface ContentCardProps {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  featured?: boolean;
  className?: ClassValue;
}

const data: ContentCardProps[] = [
  {
    id: 1,
    tag: "Lorem",
    title: "Quasi error consequuntur quibusdam",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi error consequuntur quibusdam nihil quaerat eveniet cupiditate",
    image: image,
    ctaText: "Read More",
    featured: true,
  },
  {
    id: 2,
    tag: "Lorem ",
    title: "Quasi error consequuntur quibusdam",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi error consequuntur quibusdam nihil quaerat eveniet cupiditate.",
    image: image,
    ctaText: "Read More",
  },
  {
    id: 3,
    tag: "SEO",
    title: "Quasi error consequuntur quibusdam",
    description:
      "DLorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi error consequuntur quibusdam nihil quaerat eveniet cupiditatew.",
    image: image,
    ctaText: "Read More",
  },
  {
    id: 4,
    tag: "Lorem ",
    title: "Quasi error consequuntur quibusdam",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi error consequuntur quibusdam nihil quaerat eveniet cupiditate",
    image: image,
    ctaText: "Read More",
  },
  {
    id: 5,
    tag: "Lorem",
    title: "Quasi error consequuntur quibusdam",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi error consequuntur quibusdam nihil quaerat eveniet cupiditate",
    image: image,
    ctaText: "Read More",
  },
];

const BlogSeoArticles = () => {
  return (
    <div className="w-full py-12 px-5 md:px-10 lg:px-16 xl:px-16 lg:py-20 bg-gray-50">
      <div className="w-full  shadow-lg border-gray-100 border rounded-xl flex flex-col bg-white lg:gap-10 gap-6 p-6 lg:p-10">
        <div className="flex flex-col gap-4 mb-6 lg:mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Blog & SEO Articles
          </h2>
          <p className="w-full lg:w-[90%] text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            error consequuntur quibusdam nihil quaerat eveniet cupiditate
            nesciunt quo omnis vel?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((post) => (
            <div
              key={post.id}
              className={clsx(
                "group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-xl",
                post.featured && "md:col-span-2",
              )}
            >
              <div className="flex flex-col ">
                <div className="min-h-55 relative overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full max-h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <span className=" px-3 py-1 text-xs font-medium bg-orange-100 text-orange-600 rounded-full w-fit mb-3">
                    {post.tag}
                  </span>

                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm lg:text-base mb-4 flex-1 line-clamp-3">
                    {post.description}
                  </p>

                  <button className="text-orange-600 font-medium text-sm justify-start flex hover:underline underline-offset-2 cursor-pointer">
                    {post.ctaText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSeoArticles;
