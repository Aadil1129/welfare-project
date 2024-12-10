import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import Image from "next/image";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { LuEuro } from "react-icons/lu";

export default function CommonCard({ cardData, index, type }) {
  const [isHovered, setIsHovered] = useState(false);
  const [cardCount, setCardCount] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  const countIncreaseHandler = () => {
    let plusCount = cardCount + 1;
    setCardCount(plusCount);
  };
  const countDecreaseHandler = () => {
    if (cardCount == 0) {
      return;
    }
    let minusCount = cardCount - 1;
    setCardCount(minusCount);
  };
  const toggleHeart = () => {
    setIsSelected(!isSelected);
  };
  const addMachineHandler = () => {
    if (cardCount == 0) {
      return;
    }
    if (cardCount > 10) {
      alert("Out of Stock");
      return;
    }
    alert("Successfully Added");
    setCardCount(0);
  };

  return (
    <div
      className="card-container"
      key={index}
      style={{ width: type === "interested" ? "100%" : "auto" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-detail">
        <div className="card-top">
          <div onClick={toggleHeart}>
            {isSelected ? (
              <IoMdHeart
                className="card-like"
                style={{ color: "rgb(224, 55, 139)", cursor: "pointer" }}
              />
            ) : (
              <CiHeart className="card-like" style={{ cursor: "pointer" }} />
            )}
          </div>
          <div className="card-heading">{cardData?.name}</div>
        </div>
        <div className={isHovered ? "card-image-box-hover" : "card-image-box"}>
          <Image src={cardData?.image} alt="cardimage" className="card-image" />
        </div>
        {isHovered && (
          <div style={{ padding: "10px" }}>
            <div className="card-popup">
              <div className="card-popup-heading">QTE</div>
              <div className="card-popup-control">
                <FaMinus className="table-additem-minus" onClick={countDecreaseHandler} />
                <input
                  type="number"
                  value={cardCount}
                  onChange={(e) => setCardCount(e.target.value)}
                  className="table-additem-count"
                  style={{ backgroundColor: "#f5f5f5" }}
                />
                <FaPlus className="table-additem-plus" onClick={countIncreaseHandler} />
              </div>

              <div className="card-popup-button" onClick={addMachineHandler}>
                Ajouter
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="card-about">
        <div className="card-about-detail">
          <div className="card-about-title">{cardData?.title}</div>
          <div className="card-about-total">
            {cardData?.total_price}
            <LuEuro style={{ fontSize: "1rem" }} />
          </div>
        </div>
        <div className="card-pricing">
          <div className="card-about-per-piece">
            {cardData?.per_piece_price}€/Pièce ·{" "}
            <span style={{ fontSize: "12px" }}>RÉF : VABGN5</span>
          </div>
          <div className="card-about-total-piece">{cardData?.total_piece} pieces</div>
        </div>
      </div>
    </div>
  );
}
