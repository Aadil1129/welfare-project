import React, { useState } from "react";
import CheeseMachine from "../../public/images/cheese.png";
import TableImage from "../../public/images/table.png";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { GiThermometerScale } from "react-icons/gi";
import { LuCircleOff } from "react-icons/lu";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import TableListArray from "./tableListArray";

export default function TableSection() {
  const [cardCount, setCardCount] = useState(1);
  const [cardIndex, setCardIndex] = useState(0);
  const [imageToShaw, setImageToShaw] = useState(CheeseMachine);
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
  const selectedMachinTypeHandler = (id, image) => {
    setImageToShaw(image);
    setCardIndex(id);
  };

  const toggleHeart = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div className="table-section-main">
      <div className="table-image-box">
        <Image src={imageToShaw} className="table-cheese-image" alt="cheese machine" />
        <div className="table-table-image-box">
          {TableListArray?.map((value, index) => (
            <Image
              key={index}
              src={value?.image}
              className={
                cardIndex === value?.id ? "table-table-image-selected" : "table-table-image"
              }
              alt="table info machine"
              style={{ opacity: cardIndex == value?.id ? 1 : 0.6 }}
              onClick={() => selectedMachinTypeHandler(value?.id, value?.image_shaw)}
            />
          ))}
        </div>
      </div>
      <div className="table-details-box">
        <div>
          <div className="table-details-first">
            <div className="table-head">Cheese – appareil à raclette 1/2 roue</div>
            <div onClick={toggleHeart}>
              {isSelected ? (
                <IoMdHeart
                  className="table-icon"
                  style={{ color: "rgb(224, 55, 139)", cursor: "pointer" }}
                />
              ) : (
                <CiHeart className="table-icon" style={{ color: "inherit", cursor: "pointer" }} />
              )}
            </div>
          </div>
          <div className="table-details-price">
            39,50€ <span style={{ color: "#9C9C9C", fontSize: "1rem" }}>/pièce</span>
          </div>
          <div className="table-details-cm">
            <div className="table-details-cm-left">
              <div className="table-scale-box">
                <GiThermometerScale className="table-scale-icon" />
                <div className="table-scale-cm">
                  <span>20</span>
                  <span style={{ fontSize: "12px" }}>cm</span>
                </div>
              </div>
              <div className="table-scale-box">
                <LuCircleOff className="table-scale-icon" />
                <div className="table-scale-cm">
                  <span>50</span>
                  <span style={{ fontSize: "12px" }}>cm</span>
                </div>
              </div>
            </div>
            <div className="table-circle-ref">RÉF : VABGN5</div>
          </div>
          <div>
            <div className="table-bottom-text">
              Location appareil à raclette - Raclette traditionnelle 1/2 roue
            </div>
            <div className="table-bottom-text">Réglable en hauteur</div>
            <div className="table-bottom-text">Appareil à raclette professionnel</div>
            <div className="table-bottom-text">
              Boîtier de chauffe horizontal réglable en hauteur
            </div>
            <div style={{ marginTop: "2rem" }}>
              <div className="table-bottom-text">220V</div>
              <div className="table-bottom-text">900W</div>
            </div>
          </div>
        </div>
        <div className="table-additem-box">
          <div className="table-additem-control">
            <FaMinus className="table-additem-minus" onClick={countDecreaseHandler} />
            <input
              type="number"
              value={cardCount}
              onChange={(e) => setCardCount(e.target.value)}
              className="table-additem-count"
            />
            <FaPlus className="table-additem-plus" onClick={countIncreaseHandler} />
          </div>
          <div
            className={cardCount === 0 ? "table-additem-submit-zero" : "table-additem-submit"}
            onClick={addMachineHandler}
          >
            Ajouter au panier
          </div>
        </div>
      </div>
    </div>
  );
}
