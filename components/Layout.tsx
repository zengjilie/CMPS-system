import React from "react";
import Header from "./Header/Header";
import SideControllers from "./SideControllers/SideControllers";
import SideProgressBar from "./SideProgressBar/SideProgressBar";
import styles from "./Layout.module.scss";
import { useRouter } from "next/router";

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const path = router.pathname.split("/").at(-1);
  // console.log(path);

  if (path && parseInt(path)) {
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
  } else {
    return (
      <>
        <Header />
        <div className={styles.container2}>
          <main>{children}</main>
        </div>
      </>
    );
  }
}

export default Layout;
