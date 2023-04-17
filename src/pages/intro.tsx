import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Calculator from "../../components/Calculator/Calculator";
import { useDispatch } from "react-redux";
import { hideCalc, showCalc } from "../../redux/slices/calculatorSlice";
import { showEqua } from "../../redux/slices/equationSlice";
import Equation from "../../components/Equation/Equation";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import styles from "../../theme/page-styles/task.module.scss";
import { useRouter } from "next/router";

export default function Consent({ token }: any) {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");
  const equaRef = useRef<HTMLTextAreaElement>(null);

  const router = useRouter();
  const handleClick = () => {
    router.push("/task1");
  };
  return (
    <>
      <Head>
        <title>CMPS | Consent</title>
      </Head>

      <div className={styles["task-intro"]}>
        <h4>
          亲爱的同学：
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; 你好！
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;
          欢迎你参加数学问题解决能力测试。本次测试旨在测试你在数学解决问题方面的创造力。测试时间为60-70（45-60）分钟。
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;
          请你认真阅读题目并完成作答目。完成作答后一定要先点击“提交”然后才可以“点击下一题”进行作答。每个题目都可以多次提交答案，因此你可以随时返回修改之前的答案。作答过程中有问题请联系老师。
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

export async function getServerSideProps({ req, res }: any) {
  return { props: { token: req.cookies.cmpsToken || "none" } };
}
