import React from "react";
import TableSection from "./tableSection";
import MachineDescription from "./machineDescriptoin";

export default function HomeComponents({ tabsValue }) {
  return (
    <div className="home-components-main">
      <div className="home-components-box">
        <div className="home-title-box">
          <div className="home-title-label">Home</div>
          <div className="home-title-dot"></div>
          <div className="home-title-title">{tabsValue}</div>
        </div>
        <TableSection />
        <MachineDescription />
      </div>
    </div>
  );
}
