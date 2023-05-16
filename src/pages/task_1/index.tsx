import Head from "next/head";
import React from "react";
import styles from "../../../theme/page-styles/task.module.scss";
import Button from "../../../components/Button/Button";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { RecordType } from "../../../types";
import { addRecord } from "../../../redux/slices/recordSlice";
import { GetServerSideProps } from "next";

export default function Task1Intro() {
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const userid = useSelector((state: any) => state.user.userid);

  const handleClick = () => {
    const record: RecordType = {
      userid: userid,
      taskcode: "A0",
      action: "taskstart",
      section: "system",
      createdat: new Date().toISOString(),
    };
    dispatch(addRecord({ record }));
    router.push("/task_1/1");
  };

  return (
    <>
      <Head>
        <title>CMPS | Task1 Intro</title>
      </Head>
      <div className={styles["task-intro"]}>
        <h4>
          &nbsp; &nbsp; &nbsp; &nbsp;
          五一劳动节是中国的一个重要节日，人们通常会在这个假期里休息或者外出旅游。此外，五一劳动节也是电影市场的一个重要时期，很多电影公司会在这个时候推出新电影，吸引观众前来观看。因此，去看电影已经成为了人们五一劳动节不可或缺的娱乐活动之一。
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;
          小乐计划在五一节两位朋友一起去看电影，请你围绕这一背景完成本次测试。本次测试包含6道题目，请点击下一步按钮进行作答。
        </h4>
        <Button
          className={styles["task-intro-btn"]}
          click={handleClick}
          text="下一步"
          type="primary"
        />
      </div>
    </>
  );
}

Task1Intro.getLayout = function getLayout(page: React.ReactNode) {
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
