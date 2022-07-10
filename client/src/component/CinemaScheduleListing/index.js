import React from "react";
import "./index.scss";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import nameMap from "../../common/cinema/cinemaName";
const CinemaScheduleListing = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  let renderSchedule = "";
  renderSchedule =
    data.availableSchedule.length > 0 ? (
      data.availableSchedule.map((schedule, index) => {
        return (
          <div
            className="single-schedule"
            onClick={() => {
              localStorage.setItem("schedule_id", schedule._id);
              localStorage.setItem("date",schedule.timeStart);
              localStorage.setItem("cinema_name",schedule.cinemaName)
              navigate("/order");
            }}
          >
            <p className="bold-big">{schedule.cinemaName}</p>
            <p className="bold-medium">
              <Moment format="DD/MM/YYYY">{schedule.timeStart}</Moment>
            </p>
            <p>
              <Moment format="hh:mm">{schedule.timeStart}</Moment>-
              <Moment format="hh:mm">{schedule.timeEnd}</Moment>
            </p>
          </div>
        );
      })
    ) : (
      <div>{data.error}</div>
    );

  return (
    <div className="schedule-page">
      <p className="bold">Available Schedule</p>
      <div className="schedule-container">{renderSchedule}</div>
    </div>
  );
};

export default CinemaScheduleListing;
