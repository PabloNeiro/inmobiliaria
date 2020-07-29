import React, { useState } from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import InmueblesGrid from "./components/inmueblesGrid.js";
import Filters from "./components/filters";
import FilterContext from "./contex/FilterContext";

function App() {
  const [stock, setStock] = useState({
    rooms: "",
    baths: "",
    park: "",
    houses: "",
  });

  return (
    <FilterContext.Provider
      value={{
        stock: stock,
        setStock: setStock,
      }}
    >
      <Filters />
      <InmueblesGrid />
    </FilterContext.Provider>
  );
}

export default App;
