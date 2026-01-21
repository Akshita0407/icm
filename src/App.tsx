import { BrowserRouter, Route, Routes } from "react-router-dom";
import TermsAndCondition from "./terms";
import PrivacyPolicy from "./privacyPolicy";
import Service from "./pages/service";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<TermsAndCondition />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
