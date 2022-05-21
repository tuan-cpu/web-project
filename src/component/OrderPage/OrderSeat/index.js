import React from "react";
import { Card } from "react-bootstrap";
import Seat from "../Seat";
import "./index.scss";
const OrderSeat = () => {
  return (
    <div>
      <Card className="order-seat">
        <p className="text-link-xs">Screen</p>
        <div className="line-screen"></div>
        <Card.Body>
          <Seat />
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderSeat;
