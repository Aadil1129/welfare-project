import React from "react";
import CommonCard from "../CommonComponents/card";
import CardArray from "../CommonComponents/cardArray";

export default function InterestedProduct() {
  const ThreeCardShaw = CardArray.slice(0, 3);
  return (
    <div className="interested-main">
      <div className="interested-top">
        <div className="interested-top-heading">Ces produits pourraient vous intéresser</div>
        <div className="interested-top-collection">Voir toute la collection</div>
      </div>
      <div className="interested-card">
        {ThreeCardShaw?.map((value, index) => (
          <CommonCard key={index} cardData={value} type="interested" />
        ))}
      </div>
    </div>
  );
}
