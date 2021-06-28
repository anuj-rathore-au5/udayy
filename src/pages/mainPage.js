import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const MainPage = (props) => {
  const { iframeOne, iframeTwo, isLoggedIn } = useSelector((state) => state);
  const history = useHistory();
  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/login');
    }
  }, [isLoggedIn]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div className="container-fluid h-100">
        <div className="row" style={{ height: "100%" }}>
          <div className="col-sm-12 col-md-6 col-lg-6 view">
            <iframe src={iframeOne} height="100%" width="100%" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 view">
            <iframe src={iframeTwo} height="100%" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
