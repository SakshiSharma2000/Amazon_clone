import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavBar from "./NavBar";
import CartContext from "../ContextApi/CartContext";
import AuthContext from "../ContextApi/AuthContext";
import './Header.css'; // Ensure you have a CSS file for styling

const Header = () => {
  const { productList } = useContext(CartContext);
  const { username } = useContext(AuthContext);

  return (
    <>
      <div className="header-container">
        <div className="header-logoBar flexBox">
          <div className="logo">
            <Link to={'/'}>
               <img className="image" src="./image/amazonlog.png" alt="Amazon Logo" />
            </Link>
          </div>
          <div className="header-addSelector flexBox">
            <div>
              <LocationOnIcon />
            </div>
            <div className="menu-items" style={{ margin: "0" }}>
              <span>Hello {username || 'Select Your Address'}</span>
            </div>
          </div>
        </div>
        <div className="header-searchBar">
          <div className="headerSearchBar flexBox">
            <select id="header-category">
              <option defaultValue="all">
                All Categories
              </option>
              <option value="saab">Saab</option>
              <option value="vw">VW</option>
              <option value="audi">Audi</option>
            </select>
            <input
              className="searchBar"
              type="text"
              placeholder="Search Amazon.in"
            />
            <button className="searchButton">
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="header-menuBar flexBox">
          <div className="menu-items flexBox">
            <div className="flag flexBox">  
              <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/in.svg" alt="India Flag" />
              <span>EN</span>
            </div>
            <div className="downArrow">
              <ArrowDropDownIcon />
            </div>
          </div>
          <div className="menu-items">
            <span>
              Hello, {username ? <span>{username}</span> : <Link to="/signin">Sign in</Link>}
            </span>
          </div>
          <div className="menu-items">
            <span>Returns & Orders</span>
          </div>
          <Link to={"/CartPage"}>
            <div className="menu-items flexBox">
              <div className="bold">
                <AddShoppingCartIcon />
                <span>{productList.length}</span>
              </div>
              <div>
                <p>Cart</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default Header;
