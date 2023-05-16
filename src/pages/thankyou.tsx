import React from "react";
import Layout from "../../components/Layout";
import styles from "../../theme/page-styles/task.module.scss";
import Celebrate from "../../components/Icon/Celebrate";
import { GetServerSideProps } from "next";

export default function ThankYou() {
  return (
    <div className={styles["task-thankyou"]}>
      <h3>谢谢作答</h3>
      <br />
      <Celebrate width={300} />
    </div>
  );
}

ThankYou.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cmpsToken = req.cookies["cmpsToken"];
  if (!cmpsToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
};
