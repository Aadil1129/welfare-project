import * as React from "react";

export default function HeaderTabs({ tabsValue, setTabsValue }) {
  const TabsValueArray = [
    "Art de la table",
    "Mobilier",
    "Nappage",
    "Matériel de salle",
    "Cuisine",
    "Barbecue",
    "Tente",
    "Chauffage",
    "Podium - Piste de danse",
    "Son et lumière",
    "Packs",
    "Consommables",
  ];

  return (
    <div className="tabs-main">
      <div className="tabs-container">
        {TabsValueArray?.map((tabsLabel, index) => (
          <div
            key={index}
            className={tabsValue === tabsLabel ? "tabs-selected" : "tabs-value"}
            onClick={() => setTabsValue(tabsLabel)}
          >
            {tabsLabel}
          </div>
        ))}
      </div>
    </div>
  );
}
