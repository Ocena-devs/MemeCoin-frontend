import { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";

import Header from "./TopBar";

import "./global.css";
import MiniDrawer from "./Navigation";
import navConfig from "./navConfig";

// home page tabs
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import { getColors } from "./Theme/themes";

export default function DashboardLayout() {
  const isNonMobile = useMediaQuery("(min-width: 768px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [, setShowOutlet] = useState<boolean>(false);
  const APP_BAR = "64px";
  
  const handleSideBarState = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleContentClick = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };
  
  // Handle clicking outside to close sidebar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Determine if the click was outside the sidebar
      const sidebar = document.querySelector('.MuiDrawer-root');
      const headerMenu = document.querySelector('header');
      
      if (sidebar && 
          !sidebar.contains(event.target as Node) && 
          headerMenu && 
          !headerMenu.contains(event.target as Node) && 
          isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    }
    
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);
  
  return (
    <>
      <Header
        APP_BAR={APP_BAR}
        isNonMobile={isNonMobile}
        setIsSidebarOpen={handleSideBarState}
      />
      <MiniDrawer
        APP_BAR={APP_BAR}
        setShowOutlet={setShowOutlet}
        isNonMobile={isNonMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={handleSideBarState}
        navConfig={navConfig}
      />
      <Box
        onClick={handleContentClick}
        sx={{
          mt: 8,
          pl: isNonMobile ? 8 : 0,
          background: `linear-gradient(135deg, ${getColors().yellowAccent[500]} 0%,${getColors().yellowAccent[800]} 50%, ${getColors().yellowAccent[300]} 100%)`,
        }}
      >
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}