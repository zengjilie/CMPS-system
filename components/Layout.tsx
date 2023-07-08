import React, { useEffect } from "react";
import Header from "./Header/Header";
import SideControllers from "./SideControllers/SideControllers";
import SideProgressBar from "./SideProgressBar/SideProgressBar";
import styles from "./Layout.module.scss";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const path = router.pathname.split("/").at(-1);

  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      event.preventDefault();
      event.returnValue = ""; // Chrome requires a returnValue to be set
    };

    const handleBackButton = () => {
      alert("使用后退键将被视作违规1次！");
    };

    if (path !== "settings") {
      window.addEventListener("beforeunload", handleBeforeUnload);
      window.addEventListener("popstate", handleBackButton);
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  if (path && parseInt(path)) {
    return (
      <>
        <Header />
        <div className={styles.container}>
          <SideProgressBar />
          <main>{children}</main>
          <SideControllers />
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div className={styles.container2}>
          <main>{children}</main>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </>
    );
  }
}

export default Layout;
