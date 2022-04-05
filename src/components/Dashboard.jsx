import React from "react";
import Clock from "./Clock";
import BGImage from "./slider";

export default function Dashboard() {
  const class_name = "launch-board";
  return (
    <div className="dashboard">
      <BGImage src={"hero.png"}>
        <Clock class_name={class_name} />
      </BGImage>
    </div>
  );
}
