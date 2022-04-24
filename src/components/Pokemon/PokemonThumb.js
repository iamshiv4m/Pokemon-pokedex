import React from "react";
import Pokebal from "../../assests/Pokebal.png";

const PokemonThumb = ({ id, image, name, type }) => {
  const style = type + " pokemon-card";
  return (
    <div className={style}>
      <div className="number">
        <small>
          #0<span>{id}</span>
        </small>
      </div>
      <img src={image ? image : Pokebal} alt={name} />
      <div className="detail-wrapper">
        <h2>{name}</h2>
        <small>Type: {type}</small>
      </div>
    </div>
  );
};

export default PokemonThumb;
