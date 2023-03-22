import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

function task1() {
  return (
    <>
      <Head>
        <title>CMPS | Task1</title>
      </Head>
      <div>task 1</div>
    </>
  );
}

task1.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default task1;
