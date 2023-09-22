import React from "react";
import "../../css/global.css";
import Layout from "../../layout";
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import Rules from "../../components/Rules";

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <Intro />
        <Rules />
      </Layout>
    </>
  );
};

export default Home;
