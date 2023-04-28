import React, { useState } from "react";
import styles from "../../theme/page-styles/warmup.module.scss";
import Layout from "../../components/Layout";
import Button from "../../components/Button/Button";
import { useRouter } from "next/router";

export default function Warmup() {
  const router = useRouter();
  const [imageId, setImageId] = useState(0);
  const warmupText = [
    "答题进度条，蓝色代表该题已经完成; 灰色代表当前题目; 浅灰代表该题尚未完成",
    "答题进度条包含“提交”和“下一题”两个按键。回答问题后“提交”键变成蓝色可以点击，点击提交答案后”下一题“键变成蓝色可以点击。",
    "多选题，单次点击选项以选中该选项，双次点击取消选中",
    "文字输入区， 请观察字数限制，不要超过字数作答。",
    "信息区，有“聊天记录”和“信息中心”两个页面。聊天记录可以上下滚动查看。",
    "信息中心，点击左侧的导航栏可以查看不同的信息。",
    "笔记中心，点击“增加笔记”可以增加笔记，点击“删除”可以删除笔记。",
    "下拉菜单，点击“增加行”来增加方案，点击“删除”来删除方案。",
    "在回答第六题时，可以使用网页提供的计算器进行计算。",
    "在回答第六题时，可以在填写计算过程的时候插入数学符号。",
  ];
  return (
    <div className={styles["warmup"]}>
      <h2 className={styles["warmup-header"]}>系统简介</h2>
      <p className={styles["warmup-text"]}>{warmupText[imageId]}</p>
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
          text={imageId === 6 ? "结束热身" : "下一步"}
          click={() =>
            imageId === 6 ? router.push("/task_1") : setImageId(imageId + 1)
          }
          type="primary"
        />
      </div>
    </div>
  );
}

Warmup.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
