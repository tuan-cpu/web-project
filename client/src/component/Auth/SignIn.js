import React,{ useState, useEffect } from "react";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import movieApi from "../../common/api/movieApi";

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin,setIsLogin] = useState(false);
  const [user,setUser] = useState({});
  const [status, setStatus] = useState(401);
  useEffect(() => {
    const login = async()=>{
      const res = await movieApi.post("users/login", {
        username: username,
        password: password,
      });
      setUser(res.data);
      setStatus(res.status);
    }
    if(username!==null && password!==null){
      login();
    }
  }, [isLogin]);
  useEffect(() => {
    const auth = async () => {
      const res = await movieApi.get("user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
      });
      setStatus(res.status);
    };
    auth();
  }, [localStorage.getItem("user_token")]);
  useEffect(()=>{
    if(user !== undefined && user !== null){
      localStorage.setItem("user_token",user.token);
      if(status === 200){
        alert("Log in successful");
        navigate(-1);
      }
    }
  },[user,status])
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
              setIsLogin(true);
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
