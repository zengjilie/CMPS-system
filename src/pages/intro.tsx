import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import styles from "../../theme/page-styles/task.module.scss";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

export default function Consent({ token }: any) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/warmup");
  };
  return (
    <>
      <Head>
        <title>CMPS | Consent</title>
      </Head>

      <div className={styles["task-intro"]}>
        <h4>
          <p>亲爱的同学：</p>
          <br />
          <p>&nbsp; &nbsp; &nbsp; &nbsp; 你好！</p>
          <br />
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp;
            欢迎你参加数学问题解决能力测试。本次测试旨在通过两个任务测试你在数学解决问题方面的创造力。测试时间约为60-70分钟。
          </p>
          <br />
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp;
            请你认真阅读题目并完成作答。完成作答后一定要先点击“提交”然后才可以“点击下一题”进行作答。每个题目都可以多次提交答案，因此你可以随时返回修改之前的答案。
          </p>
          <br />
          <p>北京师范大学创造性数学问题解决能力研究组</p>
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

Consent.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cmpsToken = req.cookies["cmpsToken"];
  if (!cmpsToken) {
    console.log("none");
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
};
