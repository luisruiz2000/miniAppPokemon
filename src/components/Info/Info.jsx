import React, { useContext } from "react";
import { pokemonContext } from "../../context/servicePokemon.jsx";
import img from "../../assets/gif.gif";
import "./Info.css";

const Info = () => {
  const { search } = useContext(pokemonContext);

  return (
    <div className="containerInfo">
      <img src={search.img ? search.img : img} className="img" />
      <h2>{search.name}</h2>
      <div className="information">
        {search.type ? (
          <span className="textInfo">
            <b>Tipo: </b>
            {search.type}
          </span>
        ) : (
          ""
        )}
        {search.height ? (
          <span className="textInfo">
            <b>Altura: </b>
            {search.height}
          </span>
        ) : (
          ""
        )}
        {search.weight ? (
          <span className="textInfo">
            <b>Peso: </b>
            {search.weight}
          </span>
        ) : (
          ""
        )}

        {search.base_experience ? (
          <span className="textInfo">
            <b>Experencia: </b>
            {search.base_experience}
          </span>
        ) : (
          ""
        )}

        {search.abilities ? (
          <span className="textInfo">
            <b>Habilidad: </b>
            {search.abilities}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Info;
