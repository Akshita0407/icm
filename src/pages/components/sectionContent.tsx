import type { ReactNode } from "react";

interface Content {
  title: ReactNode;
  paragraphs: string[];
  className?: string;
  underline?: boolean;
}

const SectionContent = ({
  title,
  paragraphs,
  className,
  underline,
}: Content) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h1
        className={`text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#222]  `}
      >
        {title}
      </h1>

      {underline && <div className={`w-20 h-1 bg-[#ff6600] mb-4`}></div>}

      {paragraphs.map((text, index) => (
        <p
          key={index}
          className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg"
        >
          {text}
        </p>
      ))}
    </div>
  );
};
export default SectionContent;


