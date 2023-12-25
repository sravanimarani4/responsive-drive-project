import React from "react";
import styles from "./Footer.module.css";
import Logo from "../images/logo_dark.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <img src={Logo} alt="/" />
        <button>Search A Car</button>
      </div>
    </div>
  );
}

export default Footer;
