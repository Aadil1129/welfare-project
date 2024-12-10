import React, { useState } from "react";
import Dish from "../../public/images/dish.png";
import Tray from "../../public/images/Groupe_25.png";
import Tv from "../../public/images/Groupe_56.png";
import Bus from "../../public/images/Groupe_123.png";
import Frame from "../../public/images/frame.png";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";

export default function TakeCareEverything() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(value)) {
      setError("");
    }
  };
  const handleSubmit = () => {
    if (email?.length == 0) {
      setError("Field Can't be empty");
      return;
    } else {
      setError("");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    } else {
      setError("");
    }
    if (!error && email) {
      alert("Email is valid! Form submitted.");
    }
  };
  return (
    <div className="takecare-main">
      <div className="takecare-top">
        <div className="takecare-heading">
          galley of type<span style={{ color: "#5CD2DD", fontWeight: "bold" }}>tout</span>
        </div>
        <div className="takecare-desc">
          a galley of type and scrambled it to make atype specimen book.
        </div>
        <div className="takecare-service-flex">
          <div className="takecare-service-first">
            <div className="takecare-service-image-noline">
              <Image src={Tray} alt="tray" />
            </div>
            <div className="takecare-service-heading">Livraison & Reprise</div>
            <div className="takecare-service-desc">Selon vos besoins</div>
          </div>
          <div className="takecare-service-first">
            <div className="takecare-service-image">
              <Image src={Dish} alt="tray" />
            </div>
            <div className="takecare-service-heading">Nettoyage</div>
            <div className="takecare-service-desc">Selon vos besoins</div>
          </div>
          <div className="takecare-service-first">
            <div className="takecare-service-image">
              <Image src={Tv} alt="tray" />
            </div>
            <div className="takecare-service-heading">Commande Illimitée</div>
            <div className="takecare-service-desc">Tout est possible</div>
          </div>
          <div className="takecare-service-first">
            <div className="takecare-service-image-last">
              <Image src={Bus} alt="tray" />
            </div>
            <div className="takecare-service-heading">Transport Enlevent</div>
            <div className="takecare-service-desc">galley of type</div>
          </div>
        </div>
      </div>
      <div className="takecare-frame-box">
        <Image src={Frame} alt="frame" className="takecare-frame" />
        <div className="takecare-frame-detail">
          <div className="takecare-frame-detail-heading">
            Lorem Ipsum is <span style={{ color: "#5CD2DD" }}>10%</span>
          </div>
          <div className="takecare-frame-detail-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make atype specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
          </div>
          <div className="takecare-frame-detail-form">
            <input
              className="takecare-frame-detail-input"
              placeholder="john@doe.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
            />
            <div className="takecare-frame-detail-button" onClick={handleSubmit}>
              Sinscire <IoMdArrowForward />
            </div>
          </div>
          <div className="takecare-frame-detail-error">{error}</div>
        </div>
      </div>
    </div>
  );
}
