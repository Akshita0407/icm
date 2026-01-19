import LegalLayout from "../../components/LegalLayout";
import image from "../../assets/logo.png";
import StickyPrivacyPolicy from "./stickyPrivacyPolicy";
import ScrollablePrivacyPolicy from "./scrollablePrivacyPolicy";
import { data } from "./stickyData";

const Privacy = () => {
  return (
    <div>
      <LegalLayout
        ScrollableComponent={<ScrollablePrivacyPolicy />}
        StickyComponent={<StickyPrivacyPolicy />}
        lastUpdated="January 07, 2026"
        logo={image}
        navigationData={data}
        title="PRIVACY POLICY
"
      />
    </div>
  );
};

export default Privacy;
