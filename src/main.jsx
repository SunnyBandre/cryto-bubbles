import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./layouts/Root.jsx";

import ErrorPage from "./error-page.jsx";

import Landing from "./pages/Landing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // element: <Home />,
        element: <Landing />,
      },
      // {
      //   path: "pricing-model",
      //   element: <PricingModel />,
      // },
      // {
      //   path: "account-comparison",
      //   element: <AccountComparison />,
      // },
      // {
      //   path: "metals",
      //   element: <Metals />,
      // },
      // {
      //   path: "energy",
      //   element: <Energy />,
      // },
      // {
      //   path: "indices",
      //   element: <Indices />,
      // },
      // {
      //   path: "cfd",
      //   element: <CFD />,
      // },
      // {
      //   path: "about",
      //   element: <AboutFastone />,
      // },
      // {
      //   path: "why-choose-us",
      //   element: <WhyChooseUS />,
      // },
      // {
      //   path: "contact",
      //   element: <ContactUs />,
      // },
      // {
      //   path: "regulation",
      //   element: <Regulations />,
      // },
      // {
      //   path: "kyc-aml",
      //   element: <KycAml />,
      // },
      // {
      //   path: "legal",
      //   element: <Legal />,
      // },
      // {
      //   path: "legal/risk-warning",
      //   element: <RiskWarning />,
      // },
      // {
      //   path: "legal/security-statement-and-privacy-policy",
      //   element: <SecurityAndPrivacyPolicy />,
      // },
      // {
      //   path: "legal/additional-risk-disclosure",
      //   element: <AdditionalRiskDisclosure />,
      // },
      // {
      //   path: "legal/regulatory-disclaimers",
      //   element: <RegulatoryDisclaimers />,
      // },
      // {
      //   path: "legal/terms-and-conditions",
      //   element: <LegalTerms />,
      // },

      // {
      //   path: "data-protection",
      //   element: <DataProtection />,
      // },
      // {
      //   path: "complaints",
      //   element: <Complaints />,
      // },
      // {
      //   path: "introducing-broker",
      //   element: <IntroducingBroker />,
      // },
      // {
      //   path: "affiliate",
      //   element: <Affiliate />,
      // },
      // {
      //   path: "influencer",
      //   element: <Influencer />,
      // },
      // {
      //   path: "desktop/metatrader4",
      //   element: <DesktopMetaTrader4 />,
      // },
      // {
      //   path: "metatrader4",
      //   element: <MetaTrader4 />,
      // },
      // { path: "metatrader5", element: <MetaTrader5 /> },
      // {
      //   path: "desktop/metatrader5",
      //   element: <DesktopMetaTrader5 />,
      // },
      // {
      //   path: "mobile/metatrader4",
      //   element: <MobileMetaTrader4 />,
      // },
      // {
      //   path: "mobile/metatrader5",
      //   element: <MobileMetaTrader5 />,
      // },
      // {
      //   path: "web/metatrader4",
      //   element: <WebMetaTrader4 />,
      // },
      // {
      //   path: "web/metatrader5",
      //   element: <WebMetaTrader4 />,
      // },
      // {
      //   path: "market-updates",
      //   element: <MarketUpdates />,
      // },
      // {
      //   path: "update-news-manually",
      //   element: <UpdateNewsButton />,
      // },
      // {
      //   path: "faqs",
      //   element: <Faqs />,
      // },
      // {
      //   path: "deposits-and-withdrawls",
      //   element: <DepositsWithdrawls />,
      // },
      // {
      //   path: "app-coming-soon",
      //   element: <AppComingSoon />,
      // },
      // {
      //   path: "crypto-bubbles",
      //   element: <CryptoBubbles />,
      // },
      // { path: "test", element: <TestCompont /> },
    ],
  },
  {
    path: "/landing",
    element: <Landing />,
  },
  // {
  //   path: "/",
  //   element: <Landing />,
  // },
  // {
  //   path: "/currencies",
  //   element: <RootNoTicker />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Currencies />,
  //     },
  //     {
  //       path: "fix-test",
  //       element: <FixTest />,
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
