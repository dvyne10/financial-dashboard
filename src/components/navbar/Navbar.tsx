import React, { Component } from "react";
import {
  NavbarContainer,
  NavbarSubContainer,
  NavbarToggle,
  NavElement,
  NavItem,
} from "./Navbar.styles";
import CollapsibleSvg from "../svgs/CollapsibleSvg";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import ProfilePic from "../ProfilePic";
import AccountSvg from "../svgs/AccountSvg";
import { theme } from "../../styles";
import Search from "../Search";
import CircleWithIcon from "../CircleWithIcon";
import SettingClear from "../svgs/SettingsSvgClear";
import NotificationSvg from "../svgs/NotificationSvg";

const Navbar = () => {
  const location = useLocation();
  const { setIsSideNavOpen, isSideNavOpen, isMobile,isTablet } = useTheme();

  return (
    <>
      <NavbarContainer>
        <NavItem>
          <NavbarToggle
            style={{
              display: isMobile ? "block" : "none",
            }}
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
          >
            <CollapsibleSvg />
          </NavbarToggle>
          <NavElement>
            {location.pathname.replace("/", "").charAt(0).toUpperCase() +
              location.pathname.replace("/", "").slice(1)}
          </NavElement>
          <NavbarSubContainer>
            <Search style={{ display: isMobile || isTablet ? "none" : "flex" }} />
            <CircleWithIcon style={{ display: isMobile || isTablet ? "none" : "flex" }}>
              <SettingClear />
            </CircleWithIcon>
            <CircleWithIcon style={{ display: isMobile || isTablet ? "none" : "flex" }}>
              <NotificationSvg />
            </CircleWithIcon>
            <ProfilePic>
              <AccountSvg />
            </ProfilePic>
          </NavbarSubContainer>
        </NavItem>
        <NavItem
          style={{
            display: isMobile || isTablet ? "block" : "none",
          }}
        >
          <Search />
        </NavItem>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
