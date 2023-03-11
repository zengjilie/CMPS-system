import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import SideProgressBar from "../../components/SideNav/SideProgressBar";

function Consent() {
  return (
    <>
      <Head>
        <title>CMPS | Consent</title>
      </Head>
      <Header />
      <SideProgressBar />
    </>
  );
}

export default Consent;
