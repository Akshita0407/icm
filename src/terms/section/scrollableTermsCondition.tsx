import LegalTerms from "./legalTerms";
import Articles from "./articles";

const ScrollableTermsCondition = () => {
  return (
    <>
      <div className="w-full flex flex-col lg:text-[16px] text-[14px] lg:gap-8 gap-5 p-2 text-[#212121]">
        <h2 className="lg:text-3xl text-xl font-bold">
          AGREEMENT TO OUR LEGAL TERMS
        </h2>
        <LegalTerms />
        <Articles />
      </div>
    </>
  );
};

export default ScrollableTermsCondition;
