import React from "react";
import { Container, Row, Col, CarouselIndicators } from "reactstrap";

class Inmuebles extends React.Component {
  render() {
    const value = this.props.home;
    return (
      <Container>
        <Row className="home">
          <Col xs="4">
            <div className="my-3">{<img src={value.photos} alt="logo" />}</div>
            <b>Tipo: </b>
            {value.type.name}
            <div>
              <b>Número de habitaciones:</b> {value.room_amount}
            </div>
            <div>
              <b>Número de baños: </b>
              {value.bathroom_amount}
            </div>
            <div>
              <b>Plazas de parking: </b>
              {value.parking_lot_amount}
            </div>
          </Col>
          <Col xs="7" className="my-3">
            <Row className="description">
              {" "}
              <div>
                <b>Descripción del inmueble: </b>
                <div>{value.description}</div>
              </div>{" "}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Inmuebles;
