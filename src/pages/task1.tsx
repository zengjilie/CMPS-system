import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";
import SideProgressBar from "../../components/SideProgressBar/SideProgressBar";

function task1() {
  return (
    <>
      <Head>
        <title>CMPS | Task1</title>
      </Head>
      <Header />
      <SideProgressBar />
      <div>task1</div>
    </>
  );
}

export default task1;
