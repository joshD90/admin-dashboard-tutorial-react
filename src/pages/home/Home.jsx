import React, { useState } from "react";
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";

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
      <Chart data={userData} title="User Analytics" grid dataKey="activeUser" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}

export default Home;
