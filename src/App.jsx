import { useState } from "react";
import "./assets/css/App.css";
import Search from "./components/Search/Search";
import Info from "./components/Info/Info";
import StateCompo from "./context/servicePokemon.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <StateCompo>
      <div className="App">
        <Info />
        <Search />
      </div>
    </StateCompo>
  );
}

export default App;
