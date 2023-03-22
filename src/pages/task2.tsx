import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

function task2() {
  return (
    <>
      <Head>
        <title>CMPS | Task2</title>
      </Head>
      <div>task 2</div>
    </>
  );
}

task2.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default task2;
