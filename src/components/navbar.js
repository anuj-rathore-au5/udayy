import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Navbar = (props) => {
  const { iframeOne, iframeTwo, isLoggedIn } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("user", null);
    history.push("/login");
    dispatch({
      type: "USER_LOGGED_IN",
      payload: false,
    });
  };

  //   const isLoggedIn = localStorage.getItem("isLoggedIn")==='true';

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      {!isLoggedIn && (
        <a class="navbar-brand" href="#">
          <img
            src="https://www.udayy.com/assets/UdayyLogo.png"
            height="50px"
            width="50px"
          />
        </a>
      )}
      {isLoggedIn && (
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-lg-3 col-md-3 col-sm-12">
              Hello,
              {`${
                localStorage.getItem("user")
                  ? localStorage.getItem("user")
                  : "stranger"
              }`}
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <input
                type="url"
                className="form-control"
                placeholder={"eg:https://airlearn.ai"}
                value={iframeOne}
                onChange={(e) => {
                  dispatch({
                    type: "ADD_IFRAME_ONE_VALUE",
                    payload: e.target.value,
                  });
                }}
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <input
                type="url"
                className="form-control"
                placeholder={"eg:https://airlearn.ai"}
                value={iframeTwo}
                onChange={(e) => {
                  dispatch({
                    type: "ADD_IFRAME_TWO_VALUE",
                    payload: e.target.value,
                  });
                }}
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 justify-content-end d-flex">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
