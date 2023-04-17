import React from "react";
import { BsChatSquareDots } from "react-icons/bs";
import {
  FaBars,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#galary">Galary</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div>
        <FaFacebookF />
      </div>
    </div>
  );
}

export default NavBar;
