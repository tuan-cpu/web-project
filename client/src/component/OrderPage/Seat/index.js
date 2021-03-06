import { React, useEffect } from "react";
import "./index.scss";
import { fetchAsyncSeats, getAllSeats } from "../../../feature/seats/seatSlices";
import { useDispatch, useSelector} from "react-redux";

const Seat = (props) => {
  var schedule = localStorage.getItem('schedule_id');
  const dispatch = useDispatch();
  const soldSeat = useSelector(getAllSeats);
  useEffect(()=>{
    dispatch(fetchAsyncSeats(schedule));
  },[dispatch,schedule])
  const { selected, setSelected } = props;
  const seatNum = [];
  useEffect(() => {
    localStorage.setItem("seats", selected);
    localStorage.setItem("seat_count", selected.length);
  }, [selected]);
  for (let i = 1; i < 15; i++) {
    if (i === 8) {
      seatNum.push(<div className="px-3"></div>);
    }
    seatNum.push(<td className="pl-3">{i}</td>);
  }
  const seatA = [];
  for (let i = 1; i < 15; i++) {
    if (i === 8) {
      seatA.push(<div className="px-3"></div>);
    }
    if(soldSeat.includes(`A${i}`)){
      seatA.push(
        <td>
          <input type='checkbox' disabled={true}/>
        </td>
      )
    }
    else seatA.push(
      <td>
        <input
          type="checkbox"
          value={`A${i}`}
          name={`A${i}`}
          onChange={() => {
            if (!selected.includes(`A${i}`))
              setSelected([...selected, `A${i}`]);
            else {
              var temp_array = selected.filter((value) => {
                return value !== `A${i}`;
              });
              setSelected(temp_array);
            }
          }}
          key={`A${i}`}
        />
      </td>
    );
  }
  const seatB = [];
  for (let i = 1; i < 15; i++) {
    if (i === 8) {
      seatB.push(<div className="px-3"></div>);
    }
    if(soldSeat.includes(`B${i}`)){
      seatB.push(
        <td>
          <input type='checkbox' disabled={true}/>
        </td>
      )
    }
    else seatB.push(
      <td>
        <input
          type="checkbox"
          value={`B${i}`}
          name={`B${i}`}
          onChange={() => {
            if (!selected.includes(`B${i}`))
              setSelected([...selected, `B${i}`]);
            else {
              var temp_array = selected.filter((value) => {
                return value !== `B${i}`;
              });
              setSelected(temp_array);
            }
          }}
          key={`B${i}`}
        />
      </td>
    );
  }
  const seatC = [];
  for (let i = 1; i < 15; i++) {
    if (i === 8) {
      seatC.push(<div className="px-3"></div>);
    }
    if(soldSeat.includes(`C${i}`)){
      seatC.push(
        <td>
          <input type='checkbox' disabled={true}/>
        </td>
      )
    }
    else seatC.push(
      <td>
        <input
          type="checkbox"
          value={`C${i}`}
          name={`C${i}`}
          onChange={() => {
            if (!selected.includes(`C${i}`))
              setSelected([...selected, `C${i}`]);
            else {
              var temp_array = selected.filter((value) => {
                return value !== `C${i}`;
              });
              setSelected(temp_array);
            }
          }}
          key={`C${i}`}
        />
      </td>
    );
  }
  const seatD = [];
  for (let i = 1; i < 15; i++) {
    if (i === 8) {
      seatD.push(<div className="px-3"></div>);
    }
    if(soldSeat.includes(`D${i}`)){
      seatD.push(
        <td>
          <input type='checkbox' disabled={true}/>
        </td>
      )
    }
    else seatD.push(
      <td>
        <input
          type="checkbox"
          value={`D${i}`}
          name={`D${i}`}
          onChange={() => {
            if (!selected.includes(`D${i}`))
              setSelected([...selected, `D${i}`]);
            else {
              var temp_array = selected.filter((value) => {
                return value !== `D${i}`;
              });
              setSelected(temp_array);
            }
          }}
          key={`D${i}`}
        />
      </td>
    );
  }
  const seatE = [];
  for (let i = 1; i < 15; i++) {
    if (i === 8) {
      seatE.push(<div className="px-3"></div>);
    }
    if(soldSeat.includes(`E${i}`)){
      seatE.push(
        <td>
          <input type='checkbox' disabled={true}/>
        </td>
      )
    }
    else seatE.push(
      <td>
        <input
          type="checkbox"
          value={`E${i}`}
          name={`E${i}`}
          onChange={() => {
            if (!selected.includes(`E${i}`))
              setSelected([...selected, `E${i}`]);
            else {
              var temp_array = selected.filter((value) => {
                return value !== `E${i}`;
              });
              setSelected(temp_array);
            }
          }}
          key={`E${i}`}
        />
      </td>
    );
  }
  const seatF = [];
  for (let i = 1; i < 15; i++) {
    if (i === 8) {
      seatF.push(<div className="px-3"></div>);
    }
    if(soldSeat.includes(`F${i}`)){
      seatF.push(
        <td>
          <input type='checkbox' disabled={true}/>
        </td>
      )
    }
    else seatF.push(
      <td>
        <input
          type="checkbox"
          value={`F${i}`}
          name={`F${i}`}
          onChange={() => {
            if (!selected.includes(`F${i}`))
              setSelected([...selected, `F${i}`]);
            else {
              var temp_array = selected.filter((value) => {
                return value !== `F${i}`;
              });
              setSelected(temp_array);
            }
          }}
          key={`F${i}`}
        />
      </td>
    );
  }
  const seatG = [];
  for (let i = 1; i < 15; i++) {
    if (i === 8) {
      seatG.push(<div className="px-3"></div>);
    }
    if(soldSeat.includes(`G${i}`)){
      seatG.push(
        <td>
          <input type='checkbox' disabled={true}/>
        </td>
      )
    }
    else seatG.push(
      <td>
        <input
          type="checkbox"
          value={`G${i}`}
          name={`G${i}`}
          onChange={() => {
            if (!selected.includes(`G${i}`))
              setSelected([...selected, `G${i}`]);
            else {
              var temp_array = selected.filter((value) => {
                return value !== `G${i}`;
              });
              setSelected(temp_array);
            }
          }}
          key={`G${i}`}
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
            {seatA}
          </tr>
          <tr>
            <td>B</td>
            {seatB}
          </tr>
          <tr>
            <td>C</td>
            {seatC}
          </tr>
          <tr>
            <td>D</td>
            {seatD}
          </tr>
          <tr>
            <td>E</td>
            {seatE}
          </tr>
          <tr>
            <td>F</td>
            {seatF}
          </tr>
          <tr>
            <td>G</td>
            {seatG}
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
        <div className="seat-key-element">
          <div className="availableBox" />
          Available
        </div>
        <div className="seat-key-element">
          <div className="selectBox" />
          Selected
        </div>
        <div className="seat-key-element">
          <div className="soldBox" />
          Sold
        </div>
      </div>
      <p className="text-link-lg pt-4">Seat Price</p>
      <div className="seat-key">
        <div className="seat-key-element">
          <div className="availableBox" />
          Normal(A-B): 100k
        </div>
        <div className="seat-key-element">
          <div className="vipBox" />
          Vip(B-F): 120k
        </div>
        <div className="seat-key-element">
          <div className="loveBox" />
          Love nest(G): 180k
        </div>
      </div>
    </div>
  );
};

export default Seat;
