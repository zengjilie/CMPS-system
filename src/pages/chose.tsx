import { useRouter } from "next/router";
import styles from "../../theme/page-styles/warmup.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { RecordType } from "../../types";
import { addRecord } from "../../redux/slices/recordSlice";
import Layout from "../../components/Layout";
import { GetServerSideProps } from "next";
import Button from "../../components/Button/Button";

export default function Chose() {
  const router = useRouter();
  const userid = useSelector((state: any) => state.user.userid);
  const dispatch = useDispatch<Dispatch<any>>();

  const handleNext = (task: string) => {
    const record: RecordType = {
      userid: userid,
      taskcode: "",
      action: "systemstart",
      section: "system",
      createdat: new Date().toISOString(),
    };

    if (task === "A") {
      record.taskcode = "A0";
      router.push("/task_1");
    }
    if (task === "B") {
      record.taskcode = "B0";
      router.push("/task_2");
    }

    dispatch(addRecord({ record }));
  };

  return (
    <div className={styles["warmup"]}>
      <h2 className={styles["warmup-header"]}>
        请任意选择一个题目作答，选择以后不能更改。
      </h2>
      <p className={styles["warmup-text"]}></p>
      <div
        className={styles["warmup-buttons"]}
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <div
          style={{
            flex: "1",
            backgroundImage: "url('./images/movie.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Button
            text="看电影"
            click={() => handleNext("A")}
            type="primary"
            size="lg"
          />
        </div>

        <div
          style={{
            flex: "1",
            backgroundImage: "url('./images/campe.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Button
            text="去露营"
            click={() => handleNext("B")}
            type="primary"
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}

Chose.getLayout = function getLayout(page: React.ReactNode) {
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
