import React, { useEffect, useState } from "react";
import { SidebarData } from "./SidebarData";
import { NavLink, useLocation } from "react-router-dom";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarToggle,
  MenuItemLabel,
} from "./Sidebar.styles";
import CollapsibleSvg from "../svgs/CollapsibleSvg";
import TaskLogoSvg from "../svgs/TaskLogoSvg";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false); // Collapse on smaller screens
      } else {
        setIsOpen(true); // Expand on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarContainer $isOpen={isOpen}>
      <SidebarHeader $isOpen={isOpen}>
        <SidebarToggle onClick={toggleSidebar}>
          <TaskLogoSvg />
        </SidebarToggle>
        <p>Soar Task</p>
      </SidebarHeader>

      <SidebarMenu>
        {SidebarData.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <SidebarMenuItem $active={location.pathname === item.path}>
              {item.icon && item.icon(location.pathname === item.path)}
              <MenuItemLabel
                $active={location.pathname === item.path}
                $isOpen={isOpen}
              >
                {item.title}
              </MenuItemLabel>
            </SidebarMenuItem>
          </NavLink>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
