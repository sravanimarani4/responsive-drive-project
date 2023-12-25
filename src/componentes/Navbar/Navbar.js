import React, { useState } from "react";
import styles from "./Navbar.module.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import Logo from "../images/logo.png";

function Navbar() {
  const [navstate, setNavState] = useState(false);
  return (
    <header className={styles.navbar}>
      <img src={Logo} alt="" />
      <nav>
        <ul
          className={
            navstate ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <li>
            <a href="/">Learn More</a>
          </li>
          <li>
            <a href="/">Log In</a>
          </li>
          <li>
            <a href="/">Sign Up</a>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{ marginTop: "6px" }} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: "6px" }} />
          </li>
        </ul>
      </nav>
      <div onClick={() => setNavState(!navstate)} className={styles.mobile_btn}>
        {navstate ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
}

export default Navbar;
