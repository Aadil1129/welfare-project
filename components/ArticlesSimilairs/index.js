import React from "react";
import Carousel from "./carousel";

export default function ArticlesSimilairs() {
  return (
    <div className="article-main">
      <div className="article-top">
        <div className="article-top-heading">Articles similaires</div>
        <div className="article-top-collection">Voir toute la collection</div>
      </div>
      <div className="carousel-container">
        <Carousel />
      </div>
    </div>
  );
}
