import React, { useEffect, useState } from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncAuth, getUser } from "../../../feature/auths/authSlice";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [valid, setValid] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  useEffect(()=>{
    dispatch(fetchAsyncAuth(localStorage.getItem("user_token")))
  },[dispatch,localStorage.getItem("user_token")]);
  useEffect(() => {
    // if (name !== "" && email !== "" && phone !== "") {
    //   setValid(true);
    //   localStorage.setItem("customer_name", name);
    //   localStorage.setItem("customer_email", email);
    //   localStorage.setItem("customer_phone", phone);
    // } else {
    //   setValid(false);
    //   localStorage.removeItem("customer_name");
    //   localStorage.removeItem("customer_email");
    //   localStorage.removeItem("customer_phone");
    // }
    // setName(user?.name);
    // setPhone(user?.phoneNumber?.substring(1));
    // setEmail(user?.email);
    console.log(user);
  }, [user]);
  return (
    <div className="personal-info-section">
      <p className="bold-text">Personal Info</p>
      <div className="personal-info-body">
        <div className="inner-body">
          <form>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                placeholder="Full name ..."
                type={"text"}
                className="form-control"
                value={name}
                onInput={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                placeholder="Email..."
                type={"email"}
                className="form-control"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
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
                  type={"text"}
                  className="form-control"
                  value={phone}
                  onInput={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </form>
          {!valid ? (
            <div role={"alert"} className="fade alert alert-warning">
              <i className="fa-solid fa-triangle-exclamation"></i>
              Fill your data correctly
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
