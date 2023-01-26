import React, { useState, useContext } from "react";
import { pokemonContext } from "../../context/servicePokemon.jsx";
import "./Seach.css";

const Search = () => {
  const [search, setSearch] = useState({
    id: "",
    name: "",
  });

  const [error, setError] = useState({
    errorId: "",
    errorName: "",
  });
  const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    id: /^\d{0,100}$/, // 7 a 14 numeros.
  };
  const { getPokemon } = useContext(pokemonContext);

  const onChange = (e) => {
    // const { value, name } = e.target;
    const value = e.target.value;
    const name = e.target.name;
    if (name === "id") {
      if (expresiones.id.test(value)) {
        console.log("entro expresion");
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
      const data = search.id ? getPokemon(search.id) : getPokemon(search.name);
      setSearch(data);
    }
    setSearch({ id: "", name: "" });
    setError({ errorId: "", errorName: "" });
  };

  return (
    <form className="containerSearch" onSubmit={handleForm}>
      <h2 className="titleApp">App</h2>
      <div className="input-group">
        <input
          type="text"
          name="id"
          autocomplete="off"
          value={search.id ? search.id : ""}
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
          autocomplete="off"
          value={search.name ? search.name : ""}
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
