import React, { useState } from "react";
import styles from "../../theme/page-styles/warmup.module.scss";
import Layout from "../../components/Layout";
import Button from "../../components/Button/Button";
import { useRouter } from "next/router";
import Delete from "../../components/Icon/Delete";
import { RecordType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { addRecord } from "../../redux/slices/recordSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { GetServerSideProps } from "next";

export default function Warmup() {
  const router = useRouter();
  const [imageId, setImageId] = useState(0);
  const userid = useSelector((state: any) => state.user.userid);
  const dispatch = useDispatch<Dispatch<any>>();

  const handleNext = () => {
    const record: RecordType = {
      userid: userid,
      taskcode: "A0",
      action: "systemstart",
      section: "system",
      createdat: new Date().toISOString(),
    };

    dispatch(addRecord({ record }));

    router.push("/task_1");
  };
  return (
    <div className={styles["warmup"]}>
      <h2 className={styles["warmup-header"]}>系统简介</h2>
      <p className={styles["warmup-text"]}>
        {imageId === 0 &&
          "答题进度条，深灰色代表该题已经完成, 紫色代表当前题目, 浅灰代表该题尚未完成"}
        {imageId === 1 &&
          "答题进度条包含“提交”和“下一题”两个按键。回答问题后“提交”键变成紫色可以点击，点击提交答案后”下一题“键变成紫色可以点击。"}
        {imageId === 2 && "多选题，单次点击选项以选中该选项，双次点击取消选中"}
        {imageId === 3 && "文本作答框有字数限制。"}
        {imageId === 4 && "信息区，聊天记录可以上下滚动查看。"}
        {imageId === 5 && "信息中心，点击左侧的导航栏可以查看不同的信息。"}
        {imageId === 6 && (
          <>
            笔记：点击“增加笔记”可以增加一条笔记，点击右侧 “
            <Delete width={20} height={20} />“ 可以删除此条笔记。
          </>
        )}
        {imageId === 7 && (
          <>
            点击下拉菜单完成作答，点击“增加行”来增加方案，点击 “
            <Delete width={20} height={20} />” 来删除方案。
          </>
        )}
        {imageId === 8 && "计算器功能用于数学运算。"}
        {imageId === 9 && "插入符号按钮用于插入常用的数学符号。"}
      </p>
      <img
        src={`/images/${imageId}.png`}
        alt="image"
        className={styles["warmup-image"]}
      />

      <div className={styles["warmup-buttons"]}>
        <Button
          text="上一步"
          click={() => setImageId(imageId - 1)}
          type={imageId === 0 ? "inactive" : "primary"}
        />
        <Button
          text={imageId === 9 ? "结束热身" : "下一步"}
          click={() => (imageId === 9 ? handleNext() : setImageId(imageId + 1))}
          type="primary"
        />
      </div>
    </div>
  );
}

Warmup.getLayout = function getLayout(page: React.ReactNode) {
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
