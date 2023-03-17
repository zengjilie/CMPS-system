import React, { useState } from "react";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";

function Header() {
  const [time, setTime] = useState("00:00:00");
  const { fullname } = useSelector((state: any) => state.user);

  //Get user first name from redux
  const firstname = fullname[0];

  return (
    <header className={styles.header}>
      <h2>创造力数学问题解决</h2>
      <div className={styles["header-avatar"]}>
        <h3 className={styles["header-name"]}>{firstname}</h3>
      </div>
    </header>
  );
}

export default Header;
