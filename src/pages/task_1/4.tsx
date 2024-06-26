import React from "react";
import Layout from "../../../components/Layout";
import styles from "../../../theme/page-styles/task.module.scss";
import { DropdownRowType } from "../../../types";
import { useSelector } from "react-redux";
import DropdownMenuController from "../../../components/DropdownMenuController/DropdownMenuController";
import { GetServerSideProps } from "next";

export default function Task14() {
  const dropdowns: DropdownRowType[] = useSelector(
    (state: any) => state.dropdowns.allDropdowns
  );
  return (
    <div className={styles["task"]}>
      <div className={styles["task-question"]}>
        <h4>问题四</h4>
        <p>请你为小乐想出尽可能多的购票方案，并计算每个方案的价格。</p>
      </div>

      <div className={styles["task-answer"]}>
        <small>{dropdowns.length}/20</small>
        <DropdownMenuController />
      </div>
    </div>
  );
}

Task14.getLayout = function getLayout(page: React.ReactNode) {
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
