import LegalLayout from "../../components/LegalLayout";
import StickyTermsCondition from "./stickyTermAndCondition";
import ScrollableTermsCondition from "./scrollableTermsCondition";
import image from "../../assets/logo.png";
import { data } from "./stickyData";

const Terms = () => {
  return (
    <LegalLayout
      title="Terms and Conditions"
      lastUpdated="January 08, 2026"
      logo={image}
      navigationData={data}
      StickyComponent={<StickyTermsCondition />}
      ScrollableComponent={<ScrollableTermsCondition />}
    />
  );
};

export default Terms;
