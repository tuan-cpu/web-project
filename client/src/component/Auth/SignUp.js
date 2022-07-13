import React, { useState, useEffect } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAsyncRegister } from "../../feature/auths/authSlice";
import movieApi from "../../common/api/movieApi";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");
  const [data,setData] = useState({});
  const [submit,setSubmit] = useState(false);
  const [status,setStatus] = useState(401);
  useEffect(() => {
    setData({
      email: email,
      name: name,
      username: username,
      password: password,
      phoneNumber: phone
    })
  }, [email,name,username,password,phone]);
  useEffect(()=>{
    const signup = async() =>{
        const res = await movieApi.post("users/register", {
          email: data.email,
          name: data.name,
          password: data.password,
          username: data.username,
          phoneNumber: data.phoneNumber
        });
        setStatus(res.status);
    }
    if(data !== null){
      signup();
    }
  },[submit])
  useEffect(()=>{
    if(status === 201){
      navigate('/signin');
    }
  },[status])
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
            <div className="form-group">
              <label className="form-label">Phone number</label>
              <input
                placeholder="phone number"
                type={"email"}
                className="form-control"
                onInput={(e) => setPhone(e.target.value)}
              />
            </div>
          </form>
          <div className="checkout">
            <button onClick={() => navigate(-1)}>Cancel</button>
            <button onClick={()=>{
              setSubmit(true);
            }}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
