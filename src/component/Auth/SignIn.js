import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="sign-in-section">
      <div className="login-body">
        <div className="inner-body">
          <p className="bold-text-extra">Sign In</p>
          <form>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                placeholder="Email"
                type={"email"}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                placeholder="Password"
                type={'password'}
                className="form-control"
              />
            </div>
          </form>
          <div className="checkout">
            <button>Cancel</button>
            <button>Sign In</button>
          </div>
          <Link to="/signup">
            <p className="link-text">Don't have an account?Click here</p>
          </Link>
          <Link to="/recover">
            <p className="link-text">Have trouble?Click here</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
