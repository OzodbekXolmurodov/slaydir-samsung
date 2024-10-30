import React from "react";
import "./Pags.scss";

const Pags = ({ tatle, items, clasNamE, image, tatle2, post, btn }) => {
  const categryItms = items?.map((item, inx) => (
    <li className="pags__li" key={inx}>
      {item}
    </li>
  ));

  return (
    <div className="conteaner">
      <div className={clasNamE}>
        <h2 className="pags__h2">{tatle}</h2>
        <ul className="pags__ul">{categryItms}</ul>
        <img className="pags__img" src={image} alt="" />
        <h3 className="pags__h3">{tatle2}</h3>
        <p className="pags__post">{post}</p>
        <button className="pags__btn">{btn}</button>
      </div>
    </div>
  );
};

export default Pags;
