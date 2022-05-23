import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { RiHeartsLine } from "react-icons/ri";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="containerNavBar">
        <div className="menu">
          <div
            className="divGoHome"
            onClick={() => {
              navigate("/");
            }}
          >
            <GoHome className="GoHome" />
            <span>
              <GoHome className="GoHome" />
            </span>
          </div>
          {/* <h4>movies app</h4> */}
          <div
            className="divRiHeartsLine"
            onClick={() => {
              navigate("/favorite");
            }}
          >
            <RiHeartsLine className="RiHeartsLine" />
            <span>
              <RiHeartsLine className="RiHeartsLine" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
