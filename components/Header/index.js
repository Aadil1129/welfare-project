import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/group.png";
import { CiSearch } from "react-icons/ci";
import { BsLightbulb } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="header-container">
      <div className="header-container-display">
        <div className="header-container-first-flex">
          <div className="header-container-image">
            <Image src={Logo} alt="main image" />
            <div className="header-container-title">
              we<span style={{ color: "#57C8CE" }}>frame</span>teck
            </div>
          </div>
          <div
            className={
              isFocus ? "header-container-input-section-focus" : "header-container-input-section"
            }
          >
            <input
              type="text"
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              placeholder="Rechercher un produit"
              className="header-container-input"
            />
            <div
              className={
                isFocus
                  ? "header-container-search-icon-box-focus"
                  : "header-container-search-icon-box"
              }
            >
              <CiSearch
                className={
                  isFocus ? "header-container-search-icon-focus" : "header-container-search-icon"
                }
              />
            </div>
          </div>
        </div>
        <div className="header-container-second-flex">
          <div className="header-container-second-button">
            <BsLightbulb className="header-container-second-icon" />
            <div className="header-container-second-title">Inspirations</div>
          </div>
          <div className="header-container-second-button">
            <CiHeart style={{ fontSize: "1.6rem" }} className="header-container-second-icon" />
            <div className="header-container-second-title">Mes favoris</div>
            <div className="header-container-second-total">24</div>
          </div>

          <div className="header-container-panier-button">
            <MdOutlineShoppingCart className="header-container-panier-icon" />
            <div className="header-container-panier-text">Panier</div>
          </div>
          <VscCircleLargeFilled className="header-container-profile-icon" />
          <div className="header-container-fr-button">
            <div className="header-container-fr-title">FR</div>
            <MdKeyboardArrowDown className="header-container-fr-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
