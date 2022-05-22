import React from "react";
import "./index.scss";

const PersonalInfo = () => {
  return (
    <div className="personal-info-section">
      <p className="bold-text">Personal Info</p>
      <div className="personal-info-body">
        <div className="inner-body">
          <form>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                placeholder="Le Quoc Tuan"
                type={"email"}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                placeholder="admin@gmail.com"
                type={"email"}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone number</label>
              <div className="input-group">
                <div className="pretend">
                  <span className="input-group-text">+84</span>
                </div>
                <input
                  placeholder="123456789"
                  type={"email"}
                  className="form-control"
                />
              </div>
            </div>
            <div role={"alert"} className="fade alert alert-warning">
              <i class="fa-solid fa-triangle-exclamation"></i>
              Fill your data correctly
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
