import StickySection from "../../components/stickyLayout";
import { data } from "./stickyData";

const StickyPrivacyPolicy = () => {
  return (
    <>
      <div className="sticky top-22 self-start  hidden lg:flex">
        <div className=" w-full max-h-[90vh] overflow-y-auto bg-white rounded-lg [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <StickySection data={data} />
        </div>
      </div>
    </>
  );
};

export default StickyPrivacyPolicy;
