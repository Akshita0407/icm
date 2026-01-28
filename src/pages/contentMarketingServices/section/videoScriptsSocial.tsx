import clsx, { type ClassValue } from "clsx";
import videoScriptVideo from "../../../assets/videoScripts.mp4";
import socialContentVideo from "../../../assets/socialContent.mp4";
import type { ReactNode } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaVideo,
  FaTiktok,
  FaHashtag,
  FaFilm,
} from "react-icons/fa6";

interface ListProp {
  id: number;
  label: string;
  icon: ReactNode;
}

interface ContentProp {
  id: number;
  heading: string;
  description: string;
  list: ListProp[];
  media: string;
  className?: ClassValue;
}
const data: ContentProp[] = [
  {
    id: 1,
    heading: "Video Scripts ",
    media: videoScriptVideo,
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi perferendis atque fuga officia cumque vel beatae inventore alias laboriosam?",
    list: [
      {
        id: 1,
        icon: <FaYoutube />,
        label:
          "Lorem ipsum, dolor sit amet consectetur debitis illo libero cum.",
      },
      {
        id: 2,
        icon: <FaTiktok />,
        label: "Lorem ipsum, dolor sit  debitis illo libero cum.",
      },
      {
        id: 3,
        icon: <FaFilm />,
        label: "Lorem ipsum, dolor  consectetur debitis illo libero cum.",
      },
      {
        id: 4,
        icon: <FaVideo />,
        label:
          "Lorem ipsum, dolor sit amet consectetur debitis illo libero cum.",
      },
      {
        id: 5,
        icon: <FaHashtag />,
        label: "Lorem ipsum, dolor sit amet consectetur  cum.",
      },
    ],
  },
  {
    id: 2,
    heading: "Social Content",
    media: socialContentVideo,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi perferendis atque fuga officia cumque vel beatae inventore alias laboriosam?",
    className: "lg:flex-row-reverse ",
    list: [
      {
        id: 1,
        icon: <FaInstagram />,
        label: "Lorem ipsum,  consectetur debitis illo libero cum.",
      },
      {
        id: 2,
        icon: <FaLinkedin />,
        label:
          "Lorem ipsum, dolor sit amet consectetur debitis illo libero cum.",
      },
      {
        id: 3,
        icon: <FaTwitter />,
        label: "Lorem ipsum, dolor sit debitis illo libero cum.",
      },
      {
        id: 4,
        icon: <FaFacebook />,
        label: "Lorem ipsum,  consectetur debitis illo libero cum.",
      },
      {
        id: 5,
        icon: <FaHashtag />,
        label:
          "Lorem ipsum, dolor sit amet consectetur debitis illo libero cum.",
      },
    ],
  },
];

const VideoScriptsSocial = () => {
  return (
    <>
      <div className="w-full py-12 px-5 md:px-10 lg:px-16 xl:px-15 lg:py-20 bg-gray-100">
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Video Scripts & Social Content
            </h2>
            <p className="w-full lg:w-[90%] text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              veritatis fugit autem natus, repellat corporis voluptatibus
              debitis illo libero cum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fuga, et. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quibusdam neque temporibus atque nulla impedit
              cum!
            </p>
          </div>
          <div className="w-full flex flex-col min-h-250 justify-between">
            {data.map((c) => (
              <div
                key={c.id}
                className={clsx(
                  "w-full flex flex-col lg:flex-row  items-center gap-8 lg:gap-12 lg:my-5 my-2",
                  c.className,
                )}
              >
                <div className="w-full lg:w-1/2 ">
                  <div className="w-full rounded-xl lg:min-h-100 min-h-80 border border-transparent overflow-hidden">
                    <video
                      src={c.media}
                      loop
                      muted
                      autoPlay
                      playsInline
                      className="w-full h-full lg:min-h-100 rounded-xl min-h-80 object-cover border border-transparent"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 cursor-pointer  flex flex-col gap-5 text-left bg-white p-5  rounded-3xl">
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#ff6600]">
                    {c.heading}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
                    {c.description}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {c.list.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-start gap-3 group"
                      >
                        <div className="lg:w-[10%] flex justify-center itesms-center">
                          <div className="bg-gray-200 group-hover:bg-[#ff6600]/10 cursor-pointer text-xl mt-1 w-8 h-8 p-2 text-gray-600 group-hover:text-[#ff6600] rounded-full flex items-center justify-center group-hover:text-[24px]">
                            {item.icon}
                          </div>
                        </div>
                        <div className="w-[90%]">
                          <span className="text-gray-600 text-sm md:text-base">
                            {item.label}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoScriptsSocial;
