import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Seat from "../Seat";
import "./index.scss";
const OrderSeat = () => {
  return (
    <div>
      <Col xs={12} lg={8}>
        <p className="bold-text">Choose Your Seat</p>
        <Card className="border-0 p-5 order-seat">
          <Card.Body className="row text-center">
            <Col xs={11} className="">
              <p className="text-link-xs">Screen</p>
              <div className="line-screen"></div>
            </Col>
          </Card.Body>
          <Card.Body>
            <Seat />
          </Card.Body>
        </Card>
      </Col>
      <div className="checkout">
        <Link to="/">
          <button>Change your movie</button>
        </Link>
        <Link to="payment">
          <button>Checkout now</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSeat;
