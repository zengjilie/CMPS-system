import React, { useState } from "react";
import styles from "../../theme/page-styles/warmup.module.scss";
import Layout from "../../components/Layout";
import Button from "../../components/Button/Button";
import { useRouter } from "next/router";

export default function Warmup() {
  const router = useRouter();
  const [imageId, setImageId] = useState(0);

  return (
    <div className={styles["warmup"]}>
      <h2 className={styles["warmup-header"]}>热身练习</h2>
      <p className={styles["warmup-text"]}>请完成以下所有热身</p>
      <img
        src={`/image/${imageId}`}
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
          text={imageId === 6 ? "完成作答" : "下一步"}
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
