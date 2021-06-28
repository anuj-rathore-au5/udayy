import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const LoginPage = (props) => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      dispatch({
        type: "USER_LOGGED_IN",
        payload: true,
      });
      history.push("/mainPage");
    }
  }, []);

  const handleLogin = () => {
    if (userName == "" || pass == "") {
      alert("All Fields Required");
      return;
    }
    dispatch({
        type: "USER_LOGGED_IN",
        payload: true,
      });
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("user", userName);
    history.push("/mainPage");
    
  };

  return (
    <div style={{ width: "100%", height: "100vh" }} className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-4 offset-lg-4 offset-md-2 mt-4 bg-danger p-4">
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              autoFocus
            />
            <input
              type="password"
              placeholder="password"
              className="form-control  mt-2"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <button
              type="button"
              className="btn btn-primary mt-4 w-100"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
