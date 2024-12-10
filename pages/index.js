import React, { useState } from "react";
import Header from "../components/Header";
import HeaderTabs from "../components/Header/headerTabs";
import HomeComponents from "../components/HomeComponents";
import ArticlesSimilairs from "../components/ArticlesSimilairs";
import InterestedProduct from "../components/InterestedPoduct";
import TakeCareEverything from "../components/TakeCareEverything";
import Footer from "../components/Footer";
export default function Home() {
  const [tabsValue, setTabsValue] = useState("Art de la table");
  return (
    <div>
      <div className="fix-header">
        <Header />
        <HeaderTabs tabsValue={tabsValue} setTabsValue={setTabsValue} />
      </div>
      <HomeComponents tabsValue={tabsValue} />
      <ArticlesSimilairs />
      <InterestedProduct />
      <TakeCareEverything />
      <Footer />
    </div>
  );
}
