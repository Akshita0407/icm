import type { ReactNode } from "react";
import SectionContent from "./sectionContent";

interface ImageSectionProps {
  title: ReactNode;
  paragraphs: string[];
  style?: string;
  image?: string;
  video?: string;
  underline?: boolean;
  imagePosition?: "left" | "right";
  imagebg?: boolean;
}

const ImageSection = ({
  title,
  paragraphs,
  image,
  video,
  underline,
  imagePosition,
  imagebg,
  style,
}: ImageSectionProps) => {
  const isImageRight = imagePosition === "right";

  return (
    <div className={`w-full lg:py-20 py-12 px-5 md:px-10 lg:px-15 ${style}`}>
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-10 items-center">
        <div
          className={`max-w-xl  ${
            isImageRight ? "order-last lg:order-first" : "order-last"
          } `}
        >
          <SectionContent
            title={title}
            underline={underline}
            paragraphs={paragraphs}
          />
        </div>

        <div
          className={`relative flex justify-center items-center ${
            isImageRight ? "order-first lg:order-last" : "order-first"
          }`}
        >
          {imagebg && (
            <div className="absolute -top-6 -right-6 w-full h-full bg-linear-to-br from-[#ff6600]/10 to-[#ff6600]/5 rounded-3xl hidden lg:block"></div>
          )}

          <div className="relative z-10 w-full overflow-hidden rounded-3xl shadow-2xl">
            {video ? (
              <>
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full object-cover rounded-3xl"
                  style={{ maxHeight: "400px" }}
                />
              </>
            ) : (
              <img
                src={image}
                alt={"image"}
                className="w-full object-cover rounded-3xl"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
