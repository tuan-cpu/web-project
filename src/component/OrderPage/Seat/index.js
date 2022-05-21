import React from "react";
import "./index.scss";

const Seat = () => {
  const seatNum = [];
  for (let i = 1; i < 15; i++) {
    if (i === 8) {
      seatNum.push(<div className="px-3"></div>);
    }
    seatNum.push(<td className="pl-3">{i}</td>);
  }

  const seat = [];
  for (let i = 1; i < 15; i++) {
    if (i === 8) {
      seat.push(<div className="px-3"></div>);
    }
    seat.push(
      <td>
        <input
          type="checkbox"
          value={`A${i}`}
          name={`A${i}`}
          // onChange={}
        />
      </td>
    );
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>A</td>
            {seat}
          </tr>
          <tr>
            <td>B</td>
            {seat}
          </tr>
          <tr>
            <td>C</td>
            {seat}
          </tr>
          <tr>
            <td>D</td>
            {seat}
          </tr>
          <tr>
            <td>E</td>
            {seat}
          </tr>
          <tr>
            <td>F</td>
            {seat}
          </tr>
          <tr>
            <td>G</td>
            {seat}
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td></td>
            {seatNum}
          </tr>
        </tbody>
      </table>
      <p className="text-link-lg pt-4">Seating key</p>
      <div className="seat-key">
        <div>
          <div className="availableBox" />
          Available
        </div>
        <div>
          <div className="selectBox" />
          Selected
        </div>
        <div>
          <div className="soldBox" />
          Sold
        </div>
        <div>
          <div className="loveBox" />
          Love nest
        </div>
      </div>
    </div>
  );
};

export default Seat;
