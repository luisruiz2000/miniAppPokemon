import React, { useState, useContext } from "react";
import { pokemonContext } from "../../context/servicePokemon.jsx";
import logo from "../../assets/gallery/logo.jpeg";
import "./Seach.css";

const Search = () => {
  const [search, setSearch] = useState({ name: "", id: "" });

  const [error, setError] = useState({ errorId: "", errorName: "" });

  const { getPokemon } = useContext(pokemonContext);

  const expresiones = {
    name: /^[a-zA-ZÀ-]{0,40}$/,
    id: /^\d{0,100}$/,
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    if (name === "id") {
      if (expresiones.id.test(value)) {
        setSearch({
          ...search,
          [name]: value.toLowerCase(),
        });
      } else {
        setError({ errorId: "Este campo solo permite numeros enteros." });
      }
    }

    if (name === "name") {
      if (expresiones.name.test(value)) {
        setSearch({
          ...search,
          [name]: value.toLowerCase(),
        });
      } else {
        setError({ errorName: "Este campo solo permite letras." });
      }
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (search !== "") {
      search.id ? getPokemon(search.id) : getPokemon(search.name);
    }
    setError({ errorId: "", errorName: "" });
    setSearch({ name: "", id: "" });
  };

  return (
    <form className="containerSearch" onSubmit={handleForm}>
      <img src={logo} className="logo" />
      <div className="input-group">
        <input
          type="text"
          name="id"
          autoComplete="off"
          value={search.id}
          className="input"
          onChange={onChange}
        />
        <label className="user-label">ID</label>
      </div>
      <p className="error">{error.errorId}</p>
      <div className="input-group">
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={search.name}
          className="input"
          onChange={onChange}
        />
        <label className="user-label">NOMBRE</label>
      </div>
      <p className="error">{error.errorName}</p>
      <div className="btnSearch">
        <button type="submit" className="btn">
          Consultar
        </button>
      </div>
    </form>
  );
};

export default Search;
