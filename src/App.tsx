import { BrowserRouter, Route, Routes } from "react-router-dom";
import TermsAndCondition from "./terms";
import PrivacyPolicy from "./privacyPolicy";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<TermsAndCondition />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
