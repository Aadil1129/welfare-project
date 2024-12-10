import React from "react";
import Image from "next/image";
import Logo from "../../public/images/Group.png";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-first-flex">
        <div className="header-container-image">
          <Image src={Logo} alt="main image" />
          <div className="header-container-title">
            we<span style={{ color: "#57C8CE" }}>frame</span>teck
          </div>
        </div>
        <div className="footer-tabs">
          <div className="footer-tab-heading">INFOS PRATIQUES</div>
          <div className="footer-tab-desc" style={{ marginTop: "0.3rem" }}>
            À propos
          </div>
          <div className="footer-tab-desc">Livraisons & Reprises</div>
          <div className="footer-tab-desc">Mode d’emploi</div>
          <div className="footer-tab-desc">F.A.Q</div>
        </div>
        <div className="footer-tabs">
          <div className="footer-tab-heading">LÉGAL</div>
          <div className="footer-tab-desc" style={{ marginTop: "0.3rem" }}>
            Mentions légales
          </div>
          <div className="footer-tab-desc">CGU</div>
          <div className="footer-tab-desc">CGV</div>
          <div className="footer-tab-desc">Politique de confidentialité</div>
        </div>
        <div className="footer-tabs">
          <div className="footer-tab-heading">MON COMPTE</div>
          <div className="footer-tab-desc" style={{ marginTop: "0.3rem" }}>
            Accéder à mon compte
          </div>
          <div className="footer-tab-desc">Ma liste d’envie</div>
          <div className="footer-tab-desc">Créer un compte</div>
          <div className="footer-tab-desc">Mot de passe oublié</div>
        </div>
      </div>
      <div className="footer-social-box">
        <div className="footer-social-heading">NOUS SUIVRE</div>
        <div className="footer-social-flex">
          <div className="footer-socials">
            <FaTwitter className="footer-social-icon" />
          </div>
          <div className="footer-socials">
            <FaInstagram className="footer-social-icon" />
          </div>
          <div className="footer-socials">
            <FaLinkedinIn className="footer-social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
