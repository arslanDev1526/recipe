import React, { useState } from "react";
import { TabsNavbar } from "./TabsNavbar";
import { TabContent, tabs } from "./tabcontent";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <TabsNavbar handleTabClick={handleTabClick} activeTab={activeTab}>
      <TabContent activeTab={activeTab} />
    </TabsNavbar>
  );
};
