import React from "react";
import Moment from "react-moment";
import moment from "moment";
import "./styles.css";

const OrderHistory = (props) => {
  const { user } = props;
  let renderTicket = "";
  let date = moment();
  renderTicket =
    user ? (
      user.transactionHistory?.map((ticket, index) => {
        console.log(moment(date._d).isAfter(moment(ticket.schedule.timeStart)));
        return(
          <div className="eachOrder" key={index}>
            <div>
              <div className="row">
                <div className="left-part-order">
                  <Moment format="MMMM DD YYYY">
                    {ticket.schedule.timeStart}
                  </Moment>
                  <br/>
                  <Moment format="hh:mm">
                    {ticket.schedule.timeStart}
                  </Moment>
                  <p className="filmTitle blackText">
                    {ticket.schedule.movie.title}
                  </p>
                </div>
                <div className="right-part-order">
                  <p>{ticket.schedule.cinema.name}</p>
                </div>
              </div>
              <div>
                <hr />
              </div>
  
              <div className="d-flex justify-content-between align-items-center">
                {moment(date._d).isBefore(moment(ticket.schedule.timeStart)) ? (
                  <button className="ticket-btn ticketInUse">
                    Valid Ticket
                  </button>
                ) : (
                  <button className="ticket-btn ticketused">Invalid Ticket</button>
                )}
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div>{""}</div>
    );
  return (
    <div class="col-sm-8">
      {renderTicket}
    </div>
  );
};

export default OrderHistory;
