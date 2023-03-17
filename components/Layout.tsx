import React from "react";
import Header from "./Header/Header";
import SideControllers from "./SideControllers/SideControllers";
import SideProgressBar from "./SideProgressBar/SideProgressBar";
import styles from "./Layout.module.scss";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <SideProgressBar />
        <main>{children}</main>
        <SideControllers />
      </div>
    </>
  );
}

export default Layout;
