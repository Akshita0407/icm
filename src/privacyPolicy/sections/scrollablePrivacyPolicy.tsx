import PrivacyNotice from "./PrivacyNotice";
import PrivacyArticles from "./privacyArticles";
const ScrollablePrivacyPolicy = () => {
  return (
    <>
      <div className="w-full flex flex-col lg:text-[16px] text-[14px] lg:gap-8 gap-5 p-2 text-[#212121]">
        <PrivacyNotice />
        <PrivacyArticles />
      </div>
    </>
  );
};

export default ScrollablePrivacyPolicy;
