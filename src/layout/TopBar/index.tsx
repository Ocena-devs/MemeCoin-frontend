import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// @mui
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
} from "@mui/icons-material";
import { ColorModeContext, getColors } from "../Theme/themes";

import { motion } from "framer-motion";
import "./style.css"
import { ConnectButton } from "thirdweb/react";
import { client } from "../../client";

interface HeaderProps {
  setIsSidebarOpen: () => void;
  APP_BAR: string;
  isNonMobile: boolean;
}

const Header: React.FC<HeaderProps> = ({ setIsSidebarOpen, APP_BAR, isNonMobile }) => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isOn, setIsOn] = useState(false);
  const navigate = useNavigate();
  
  if (!colorMode) {
    return null;
  }

  const toggleSwitch = () => {
    colorMode.toggleColorMode();
    setIsOn(!isOn);
  }

  return (
    <AppBar sx={{
      backgroundColor: getColors().yellowAccent[200],
      height: APP_BAR,
      border: "none"
    }}>
      <Toolbar>
        {!isNonMobile && (
          <IconButton
            onClick={() => setIsSidebarOpen()}
            sx={{
              mt: isMobile ? 1 : 2,
              color: getColors().blueAccent[100]
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        <Box
          onClick={() => navigate("/")}
          sx={{ cursor: "pointer", mt: isMobile ? 1 : 2 }}
        >
          <img 
            src={`/thaicoin.png`} 
            alt="logo" 
            style={{ width: "48px" }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        
        {/* Custom styling for ConnectButton */}
        <Box sx={{ 
          '& .tw-connect-wallet': {
            fontSize: isMobile ? '0.75rem !important' : '0.875rem !important',
            padding: isMobile ? '4px 8px !important' : '8px 16px !important',
            minWidth: isMobile ? 'auto !important' : '120px !important',
            height: isMobile ? '32px !important' : '40px !important',
          },
          mt: isMobile ? -0.5 : 0
        }}>
          <ConnectButton client={client} />
        </Box>
        
        <Box sx={{ ml: 2 }}> {/* Added marginLeft to create space */}
          <Stack
            sx={{ mt: isMobile ? -0.5 : 1 }}
            direction="row"
            alignItems="center"
            spacing={{ xs: 0.5, sm: 1 }}
          >
            <div 
              className="switch" 
              data-ison={isOn} 
              onClick={toggleSwitch} 
              style={{
                background: theme.palette.grey[900],
                border: "2px solid",
                borderColor: theme.palette.grey[100],
              }}
            >
              <motion.div 
                className="handle" 
                layout 
                transition={spring} 
                style={{ background: theme.palette.grey[100] }} 
              />
            </div>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export default Header;
