import React, { Component, useState } from "react";
import styled from "styled-components";
import EditProfile from "./editProfile";
import { Container, Tab, TabBar, TabContent } from "./style";
import { useTheme } from "../../hooks/useTheme";

const Settings = () => {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const { isSideNavOpen, isMobile, isTablet } = useTheme();
  return (
    <Container
      $isOpen={isSideNavOpen}
      $isMobileScreen={isMobile!}
      $isTablet={isTablet!}
    >
      <TabBar>
        <Tab
          onClick={() => setActiveTab("profile")}
          active={activeTab === "profile"}
          role="tab"
          aria-selected={activeTab === "profile"}
        >
          Edit Profile
        </Tab>
        <Tab
          onClick={() => setActiveTab("preferences")}
          active={activeTab === "preferences"}
          role="tab"
          aria-selected={activeTab === "preferences"}
        >
          Preferences
        </Tab>
        <Tab
          onClick={() => setActiveTab("security")}
          active={activeTab === "security"}
          role="tab"
          aria-selected={activeTab === "security"}
        >
          Security
        </Tab>
      </TabBar>
      <TabContent>
        {activeTab === "profile" && <EditProfile />}
        {activeTab === "preferences" && <div>Preferences Content</div>}
        {activeTab === "security" && <div>Security Content</div>}
      </TabContent>
    </Container>
  );
};

export default Settings;
