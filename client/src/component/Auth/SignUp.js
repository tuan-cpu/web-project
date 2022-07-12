import React, { useState, useEffect } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postAsyncRegister, getRegisterState } from "../../feature/auths/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isRegistering = useSelector(getRegisterState);
  const [name,setName] = useState("");
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [data,setData] = useState({});
  useEffect(() => {
    setData({
      email: email,
      name: name,
      username: username,
      password: password
    })
  }, [email,name,username,password]);
  return (
    <div className="sign-in-section">
      <div className="login-body">
        <div className="inner-body">
          <p className="bold-text-extra">Sign Up</p>
          <form>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                placeholder="Full name"
                type={"email"}
                className="form-control"
                onInput={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input
                placeholder="Username"
                type={"email"}
                className="form-control"
                onInput={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                placeholder="email"
                type={"email"}
                className="form-control"
                onInput={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                placeholder="password"
                type={"password"}
                className="form-control"
                onInput={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <div className="checkout">
            <button onClick={() => navigate(-1)}>Cancel</button>
            <button onClick={()=>{
              dispatch(postAsyncRegister(data));
            }}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
