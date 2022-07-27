import React, { useState } from "react";
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";

function Home() {
  const revenueInfo = {
    title: "Revenue",
    firstFigure: 2140,
    secondFigure: -10,
  };
  const cost = { title: "Cost", firstFigure: 2275, secondFigure: 440 };

  return (
    <div className="home">
      <div className="featured">
        <FeaturedInfo content={revenueInfo} />
        <FeaturedInfo content={cost} />
        <FeaturedInfo content={cost} />
      </div>
      <Chart />
    </div>
  );
}

export default Home;
