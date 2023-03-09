import React, { useState } from "react";
import styles from "./Header.module.scss";
import Clock from "../Icon/Clock";

function Header() {
  const [time, setTime] = useState("00:00:00");
  //Get user first name from redux
  const fullname = "曾及洌";
  const firstname = fullname[0];

  return (
    <header className={styles.header}>
      <h2>创造力数学问题解决</h2>
      <div className={styles["header-time"]}>
        <Clock width="44" height="auto" />
        <h4>{time}</h4>
      </div>
      <div className={styles["header-avatar"]}>
        <h3 className={styles["header-name"]}>{firstname}</h3>
      </div>
    </header>
  );
}

export default Header;
