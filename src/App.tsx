import { BrowserRouter, Route, Routes } from "react-router-dom";
import TermsAndCondition from "./terms";
import PrivacyPolicy from "./privacyPolicy";
import Service from "./pages/service";
import SeoVisibilityServices from "./pages/seoAndVisibilityServices";
import EcommerceGrowthServices from "./pages/ecommerceGrowthServices";
import ContentMarketingServices from "./pages/contentMarketingServices";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<TermsAndCondition />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/service" element={<Service />} />
          <Route path="/seoVisibility" element={<SeoVisibilityServices />} />
          <Route
            path="/ecommerce-growth"
            element={<EcommerceGrowthServices />}
          />
          <Route
            path="/content-marketing"
            element={<ContentMarketingServices />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
