import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import { Statevalue } from "./StateContex";

function Header() {
  const [{ cart }, dispatch] = Statevalue();
  return (
    <div className="header__nav">
      <Link to="/">
        <img src="img/amazonpay-logo-rgb-clr.svg" alt="" />
      </Link>

      <div className="header__search">
        <input
          type="text"
          placeholder="Search Product of Your Wish"
          className="header__input"
        />
        <SearchIcon className="header__iconserach" />
      </div>
      <div className="header__cart">
        <div className="header__info">
          <small className="header__firstline">Hello</small>
          <strong className="header__secondline">Sign in</strong>
        </div>
        <div className="header__info">
          <small className="header__firstline">Return</small>
          <strong className="header__secondline">Order</strong>
        </div>
        <div className="header__info">
          <small className="header__firstline">Your</small>
          <strong className="header__secondline">Prime</strong>
        </div>
        <div className="header__basket">
          <Link to="/cart">
            <LocalMallIcon />
            <b>{cart?.length}</b>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
