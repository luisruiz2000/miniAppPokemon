import React, { useState, useContext } from "react";
import { pokemonContext } from "../../context/servicePokemon.jsx";
import "./Seach.css";

const Search = () => {
  const [search, setSearch] = useState({
    name: "",
    id: "",
  });
  const [error, setError] = useState("");
  const { getPokemon } = useContext(pokemonContext);

  const onChange = (e) => {
    const { value, name } = e.target;

    if (value) {
      setSearch({
        ...search,
        [name]: value.toLowerCase(),
      });
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (search !== "") {
      const data = search.name
        ? getPokemon(search.name)
        : getPokemon(search.id);
      setSearch(data);
    }
    setSearch({ name: "", id: "" });
  };

  return (
    <form className="containerSearch" onSubmit={handleForm}>
      <h2 className="titleApp">App</h2>
      <div className="input-group">
        <input
          type="text"
          name="id"
          autocomplete="off"
          value={search ? search.id : ""}
          className="input"
          onChange={onChange}
        />
        <label className="user-label">ID</label>
      </div>
      <div className="input-group">
        <input
          type="text"
          name="name"
          value={search ? search.name : ""}
          autocomplete="off"
          className="input"
          onChange={onChange}
        />
        <label className="user-label">NOMBRE</label>
      </div>
      <p>{error}</p>
      <div className="btnSearch">
        <button type="submit" className="btn">
          Consultar
        </button>
      </div>
    </form>
  );
};

export default Search;
