import React from "react";
import WarmupModal from "../../components/WarmupModal/WarmupModal";
import styles from "../../theme/page-styles/warmup.module.scss";
import Layout from "../../components/Layout";

export default function Warmup() {
  return (
    <div className={styles["warmup"]}>
      <h3>请完成以下热身练习</h3>
      <WarmupModal />
    </div>
  );
}

Warmup.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
