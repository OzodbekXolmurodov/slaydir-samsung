import React from "react";
import "./Header.scss";
import rasim from "../../assets/Без названия.png";
import rasim2 from "../../assets/Frame 551.svg";
const Header = () => {
  return (
    <>
      <div className="header conteaner">
        <img className="header__logo" src={rasim} alt="" />
        <ul className="header__ul">
          <li className="header__li">Shop</li>
          <li className="header__li">Al</li>
          <li className="header__li">Mobeli</li>
          <li className="header__li">TV & Audio</li>
          <li className="header__li">Appliances</li>
          <li className="header__li">Camputer</li>
          <li className="header__li">Dispolay</li>
          <li className="header__li">Accisuar</li>
          <li className="header__li">SmartHtings</li>
        </ul>
        <div className="header__div-main">
          <p className="header__li">Explore</p>
          <p className="header__li">Support</p>
          <p className="header__li">For Business</p>
          <div>
            <img className="header__img" src={rasim2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
