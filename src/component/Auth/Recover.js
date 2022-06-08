import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const Recover = () => {
  const navigate = useNavigate();
  return (
    <div className="sign-in-section">
      <div className="login-body">
        <div className="inner-body">
          <p className="bold-text-extra">Recover</p>
          <form>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                placeholder="Email"
                type={"email"}
                className="form-control"
              />
            </div>
          </form>
          <div className="checkout">
            <button onClick={() => navigate(-1)}>Cancel</button>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recover;
