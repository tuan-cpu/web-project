import React, { Component } from "react";
import { Button, Card, Image } from "react-bootstrap";
// import cineone from "../../assets/images/cineone.png";
// import ebv from "../../assets/images/ebv.png";
import "./styles.css";


const OrderHistory = () => {

    return (
      <div class="col-sm-8">
        <div className="eachOrder" >
          <div>
            <div className="row">
              <div className="left-part-order">
                <p className="greyText">
                  Tuesday, 07 July 2020 - 04:30pm
                </p>
                <p className="filmTitle blackText">Spider-Man: Homecoming</p>
              </div>
              <div className="right-part-order">
                <img src="https://eu-trademark.s3.amazonaws.com/018324999" ></img>
              </div>
            </div>
            <div>
                <hr/>
            </div>
                
            <div className="d-flex justify-content-between align-items-center">
              
              <button className="ticket-btn ticketInUse">Ticket in active</button>
              {/* <select
                defaultValue="Show Details"
                className="text-md text-color-muted border-0 pr-3"
              >
                <option>Show Details</option>
                <option>Jakarta</option>
                <option>Bandung</option>
                <option>Surabaya</option>
              </select> */}
            </div>
          </div>
        </div>

        <div className="eachOrder" >
          <div>
            <div className="row">
              <div className="left-part-order">
                <p className="greyText">
                  Tuesday, 07 July 2020 - 04:30pm
                </p>
                <p className="filmTitle blackText">Avengers: End Game</p>
              </div>
              <div className="right-part-order">
                <img src="https://eu-trademark.s3.amazonaws.com/018324999" ></img>
              </div>
            </div>
            <div>
                <hr/>
            </div>
                
            <div className="d-flex justify-content-between align-items-center">
              
              <button className="ticket-btn ticketused">Ticket used</button>
              {/* <select
                defaultValue="Show Details"
                className="text-md text-color-muted border-0 pr-3"
              >
                <option>Show Details</option>
                <option>Jakarta</option>
                <option>Bandung</option>
                <option>Surabaya</option>
              </select> */}
            </div>
          </div>
        </div>
        {/* <Card className="mt-4 eachOrder">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-xs text-color-muted mb-1 greyText">
                  Monday, 14 June 2020 - 02:00pm
                </p>
                <p className="text-display-xs mb-0 blackText">Avengers: End Game</p>
              </div>
              <div>
                <Image src="https://eu-trademark.s3.amazonaws.com/018324999" height={21} />
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="secondary col-3 ticket-btn">Ticket used</Button>
              <select
                defaultValue="Show Details"
                className="text-md text-color-muted border-0 pr-3"
              >
                <option>Show Details</option>
                <option>Jakarta</option>
                <option>Bandung</option>
                <option>Surabaya</option>
              </select>
            </div>
          </Card.Body>
        </Card>
        <Card className="mt-4 eachOrder">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-xs text-color-muted mb-1 greyText">
                  Monday, 10 March 2020 - 04:00pm
                </p>
                <p className="text-display-xs mb-0 blackText">Thor: Ragnarok</p>
              </div>
              <div>
                <Image src="https://eu-trademark.s3.amazonaws.com/018324999" height={21} />
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="secondary col-3 ticket-btn">Ticket used</Button>
              <select
                defaultValue="Show Details"
                className="text-md text-color-muted border-0 pr-3"
              >
                <option>Show Details</option>
                <option>Jakarta</option>
                <option>Bandung</option>
                <option>Surabaya</option>
              </select>
            </div>
          </Card.Body>
        </Card> */}
      </div>
    );
  
}

export default OrderHistory;
