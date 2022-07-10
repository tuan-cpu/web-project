import React,{ useState, useEffect } from "react";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postAsyncLogin,getUser } from "../../feature/auths/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    localStorage.setItem("user_token",user.token);
    navigate('/');
  }, [user]);
  return (
    <div className="sign-in-section">
      <div className="login-body">
        <div className="inner-body">
          <p className="bold-text-extra">Sign In</p>
          <form>
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
              <label className="form-label">Password</label>
              <input
                placeholder="Password"
                type={"password"}
                className="form-control"
                onInput={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <div className="checkout">
            <button onClick={() => navigate(-1)}>Cancel</button>
            <button onClick={()=>{
              dispatch(postAsyncLogin({username,password}));
            }}>Sign In</button>
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
