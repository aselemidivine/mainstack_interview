import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Transactions from "../../components/Transactions";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Transactions />
    </>
  );
};

export default Home;
