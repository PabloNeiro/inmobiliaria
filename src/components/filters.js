import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import FilterContext from "../contex/FilterContext";

function Filters() {
  const filter = useContext(FilterContext);

  const filterRooms = (event) => {
    filter.setStock({ ...filter.stock, rooms: event.target.value });
    console.log(event.target.value);
  };
  const filterBath = (event) => {
    filter.setStock({ ...filter.stock, baths: event.target.value });
    console.log(event.target.value);
  };
  const filterPark = (event) => {
    filter.setStock({ ...filter.stock, park: event.target.value });
    console.log(event.target.value);
  };

  const filterHouse = (event) => {
    filter.setStock({ ...filter.stock, houses: event.target.value });
    console.log(event.target.value);
  };

  return (
    <Container>
      <Row className="my-4">
        <Col xs="4">
          <div className="text-center mt-3">
            <img className="img-fluid" src="inmo.jpg" alt="logo"></img>
          </div>
        </Col>
        <Col xs="7 ml-5 mt-4">
          <Row>
            <Col xs="12">
              <h5 className="mb-4 ml-4">
                Encuentra aquí el inmueble que buscas:
              </h5>
            </Col>
            <Col xs="5">
              <label>
                <b>Número de habitaciones:</b>
              </label>
              <select onChange={filterRooms} className="custom-select mb-3">
                <option selected>Habitaciones</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>

              <label>
                <b>Número de baños:</b>
              </label>
              <select onChange={filterBath} className="custom-select">
                <option selected>Baños</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </Col>
            <Col xs="5">
              <label>
                <b>Plazas de garaje:</b>
              </label>
              <select onChange={filterPark} className="custom-select mb-3">
                <option selected>Plazas</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>

              <label>
                <b>Tipo de inmueble:</b>
              </label>
              <select onChange={filterHouse} className="custom-select">
                <option selected>Inmueble</option>
                <option value="Oficina">Oficina</option>
                <option value="Condominio horizontal">
                  Condominio horizontal
                </option>
                <option value="Terreno">Terreno</option>
                <option value="Departamento">Departamento</option>
                <option value="Casa">Casa</option>
              </select>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Filters;
