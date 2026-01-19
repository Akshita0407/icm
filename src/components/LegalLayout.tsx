import { useState } from "react";
import { GoArrowRight } from "react-icons/go";

interface Item {
  id: string;
  label: string;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  logo: string;
  navigationData: Item[];
  StickyComponent: React.ReactNode;
  ScrollableComponent: React.ReactNode;
}

const LegalLayout = ({
  title,
  lastUpdated,
  logo,
  navigationData,
  StickyComponent,
  ScrollableComponent,
}: LegalLayoutProps) => {
  const [selectedSection, setSelectedSection] = useState("");

  const handleSectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sectionId = e.target.value;
    setSelectedSection(sectionId);

    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset - 130;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col p-4 md:p-15 items-center bg-[#f3f3f3]">
      <div className="w-full flex flex-col lg:gap-15 gap-5">
        <div className="w-full flex lg:flex-row flex-col justify-between my-5">
          <div className="lg:w-[25%] w-full flex items-center gap-3">
            <div className="w-10 h-10">
              <img
                src={logo}
                alt="logo"
                className="object-contain w-full h-full"
              />
            </div>
            <h2 className="lg:text-3xl text-xl font-medium">Legal</h2>
          </div>

          <div className="lg:w-[65%] w-full flex flex-col gap-2 text-[#212121]">
            <h1 className="lg:text-[65px] text-2xl font-bold">{title}</h1>
            <h2 className="lg:text-xl text-sm font-semibold ml-2">
              Last updated {lastUpdated}
            </h2>

            <div className="lg:hidden mt-3 px-2">
              <div className="relative">
                <select
                  value={selectedSection}
                  onChange={handleSectionChange}
                  className="w-full px-2 py-2 pr-7 bg-white border border-gray-300 rounded-md text-xs text-gray-700 appearance-none cursor-pointer focus:ring-1 focus:ring-[#f57b2a]"
                >
                  <option value="" disabled>
                    Navigate to:
                  </option>
                  {navigationData.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>

                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <GoArrowRight
                    className="text-gray-500 rotate-90"
                    fontSize={12}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex lg:flex-row gap-[5%]">
          <div className="w-[30%] hidden lg:flex sticky top-22 self-start">
            <div className="w-full max-h-[90vh] overflow-y-auto bg-white rounded-lg ">
              {StickyComponent}
            </div>
          </div>

          <div className="lg:w-[65%] w-full">{ScrollableComponent}</div>
        </div>
      </div>
    </div>
  );
};

export default LegalLayout;
