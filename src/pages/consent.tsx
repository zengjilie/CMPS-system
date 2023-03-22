import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import SideProgressBar from "../../components/SideProgressBar/SideProgressBar";
import SideControllers from "../../components/SideControllers/SideControllers";
import Layout from "../../components/Layout";

export default function Consent({ token }: any) {
  //use layout
  return (
    <>
      <Head>
        <title>CMPS | Consent</title>
      </Head>
      <div>consent</div>
    </>
  );
}

Consent.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps({ req, res }: any) {
  return { props: { token: req.cookies.cmpsToken || "none" } };
}
