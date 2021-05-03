import React from "react";
import "typeface-roboto";
import CityInfo from "./CytiInfo";

export default {
  title: "CityInfo",
  component: CityInfo,
};

export const CityExample = () => (
  <CityInfo city={"Lima"} country={"Perú"}></CityInfo>
);
