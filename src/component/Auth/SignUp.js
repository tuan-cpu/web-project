import React from "react";
import "./index.scss";

const SignUp = () => {
  return (
    <div className="sign-in-section">
      <div className="login-body">
        <div className="inner-body">
          <p className="bold-text-extra">Sign Up</p>
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
              <label className="form-label">Password</label>
              <input
                placeholder="Password"
                type={"password"}
                className="form-control"
              />
            </div>
          </form>
          <div className="checkout">
            <button>Cancel</button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
