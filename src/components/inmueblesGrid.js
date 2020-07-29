import React, { useEffect, useState, useContext } from "react";
import getHome from "./api.js";
import FilterContext from "../contex/FilterContext";
import Inmuebles from "./inmuebles";
import NoResult from "./NoResult.js";

function InmueblesGrid() {
  const { stock } = useContext(FilterContext);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    async function getData() {
      const housesApi = await getHome();
      setHouses(housesApi);
    }
    getData();
  }, []);

  function checkEstate(estate) {
    const checkRooms =
      parseInt(stock.rooms) === estate.room_amount || stock.rooms === "";
    const checkBaths =
      parseInt(stock.baths) === estate.bathroom_amount || stock.baths === "";
    const checkPark =
      parseInt(stock.park) === estate.parking_lot_amount || stock.park === "";
    const checkHouse = stock.houses === estate.type.name || stock.houses === "";

    return checkRooms && checkBaths && checkPark && checkHouse;
  }

  const resultFilter = houses.filter((oneHouse) => checkEstate(oneHouse));

  return (
    <>
      {houses.length > 0 ? (
        resultFilter.length === 0 ? (
          <NoResult />
        ) : (
          resultFilter.map((value) => {
            return <Inmuebles home={value} />;
          })
        )
      ) : (
        <h2 className="text-center">... cargando ...</h2>
      )}
    </>
  );
}

export default InmueblesGrid;
