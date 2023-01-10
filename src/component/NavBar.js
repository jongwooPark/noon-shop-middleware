import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const NavBar = (props) => {
  const menuList = ["여성", "Divided", "남성", "신생/유아", "H&M HOME", "Sale"];
  const navigate = useNavigate();

  const { authenticate } = useSelector((state) => state);
  const usedispatch = useDispatch();

  const gotoLogin = () => {
    if (authenticate == true) {
      usedispatch({ type: "LOGOUT" });
    } else navigate("/login");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      navigate(`/?q=${event.target.value}`);
    }
  };
  return (
    <div>
      <div>
        <div className="login-button" onClick={gotoLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate == true ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="nav-section" onClick={() => navigate("/")}>
        <img
          width={100}
          src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" onKeyPress={search} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
