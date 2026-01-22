import type { ReactNode } from "react";
import clsx from "clsx";
import SectionContent from "./sectionContent";

type Media =
  | { mediaType: "image"; src: string }
  | { mediaType: "video"; src: string };

interface ImageSectionProps {
  title: ReactNode;
  paragraphs: string[];
  media: Media;
  underline?: boolean;
  mediaPosition?: "left" | "right";
  imageShadow?: boolean;
  className?: string;
}

const ImageSection = ({
  title,
  paragraphs,
  media,
  underline,
  mediaPosition = "left",
  imageShadow = false,
  className,
}: ImageSectionProps) => {
  const isMediaRight = mediaPosition === "right";

  return (
    <div
      className={clsx(
        "w-full py-12 px-5 md:px-10 lg:px-15 lg:py-20",
        className,
      )}
    >
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-10 items-center">
        <div
          className={clsx(
            "max-w-xl",
            isMediaRight ? "order-last lg:order-first" : "order-last",
          )}
        >
          <SectionContent
            title={title}
            underline={underline}
            paragraphs={paragraphs}
          />
        </div>

        <div
          className={clsx(
            "relative flex justify-center items-center",
            isMediaRight ? "order-first lg:order-last" : "order-first",
          )}
        >
          {imageShadow && (
            <div className="absolute -top-6 -right-6 w-full h-full bg-linear-to-br from-[#ff6600]/10 to-[#ff6600]/5 rounded-3xl hidden lg:block" />
          )}

          <div className="relative z-10 w-full overflow-hidden rounded-3xl shadow-2xl">
            {media.mediaType === "video" ? (
              <video
                src={media.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover rounded-3xl"
                style={{ minHeight: 300, maxHeight: 600 }}
              />
            ) : (
              <img
                src={media.src}
                alt=""
                className="w-full object-cover rounded-3xl"
                style={{ minHeight: 300, maxHeight: 600 }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
