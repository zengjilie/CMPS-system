import React from "react";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import Link from "next/link";

function Header() {
  const { fullname } = useSelector((state: any) => state.user.userInfo);

  //Get user first name from redux
  const firstname = fullname[0];

  return (
    <header className={styles.header}>
      <h2>数学测试系统</h2>
      <Link href={"/settings"}>
        <div className={styles["header-avatar"]}>
          <h3 className={styles["header-name"]}>{firstname}</h3>
        </div>
      </Link>
    </header>
  );
}

export default Header;
