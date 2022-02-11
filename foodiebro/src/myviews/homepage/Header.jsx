import React, { useEffect } from "react";
import "./Header.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {} from "react-router-dom";
function Header() {
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);
    return userInfo;
  });
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <>
      <div className="header1">
        <div className="brand-box">
        </div>

        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main"><div class="section-header"> <h2>FOODIE-BRO</h2></div></span>
            <br/><br/><br/>
			<span className="heading-primary-sub">
      <div class="section-header"> <p>"You don't need a silver fork to eat good food."</p></div>
            </span>
          </h1>
          <a href="#" className="btn btn-white btn-animated">
            Discover our FOOD
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
