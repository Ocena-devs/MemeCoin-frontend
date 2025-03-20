import React from "react";
import { motion } from "framer-motion";
import { 
  Box, 
  Typography, 
  Grid,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  useTheme,
  useMediaQuery
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

// Social Media Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';
import Discord from '@mui/icons-material/Language';

interface SocialLinksPopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  buttonText: string;
  delay?: number;
}

const SocialLinksPopup: React.FC<SocialLinksPopupProps> = ({
  open,
  onClose,
  title = "Connect with Thai.Coin",
  subtitle = "Join our vibrant community across these platforms to stay updated with the latest news and announcements",
  buttonText = "Return to Roadmap",
  delay = 0
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  const socialLinks = [
    { name: "Instagram", icon: <InstagramIcon fontSize="large" />, url: "https://www.instagram.com/coin.thai/", color: "#C13584" },
    { name: "Telegram", icon: <TelegramIcon fontSize="large" />, url: "https://t.me/+SKNPgVqdmRI2MmJl", color: "#0088cc" },
    { name: "Twitter", icon: <TwitterIcon fontSize="large" />, url: "https://twitter.com/thaicoin", color: "#1DA1F2" },
    { name: "Facebook", icon: <FacebookIcon fontSize="large" />, url: "https://facebook.com/thaicoin", color: "#4267B2" },
    { name: "YouTube", icon: <YouTubeIcon fontSize="large" />, url: "https://youtube.com/thaicoin", color: "#FF0000" },
    { name: "Discord", icon: <Discord fontSize="large" />, url: "https://linkedin.com/company/thaicoin", color: "#0077B5" },
    { name: "Reddit", icon: <RedditIcon fontSize="large" />, url: "https://reddit.com/r/thaicoin", color: "#FF4500" },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullScreen={fullScreen}
      PaperProps={{
        sx: {
          borderRadius: 3,
          overflow: 'hidden',
          backgroundImage: isDarkMode 
            ? 'radial-gradient(circle, rgba(30,30,30,1) 0%, rgba(15,15,15,1) 100%)' 
            : 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 100%)',
          position: 'relative',
        }
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255, 215, 0, 0.2)',
          filter: 'blur(60px)',
          top: '-80px',
          right: '-50px',
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'rgba(0, 120, 212, 0.15)',
          filter: 'blur(70px)',
          bottom: '-100px',
          left: '-80px',
          zIndex: 0
        }}
      />

      {/* Dialog title with close button */}
      <DialogTitle 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          pb: 0,
          pt: 3,
          zIndex: 1
        }}
      >
        <Box sx={{ width: '32px' }} /> {/* Empty space for balance */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 800,
              color: isDarkMode ? '#FFF' : '#000',
              fontFamily: '"BakBak One", "Roboto", sans-serif',
              textAlign: 'center'
            }}
          >
            {title}
          </Typography>
        </motion.div>
        <IconButton 
          onClick={onClose}
          sx={{ 
            color: isDarkMode ? '#FFF' : '#000',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
            zIndex: 2
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ zIndex: 1, pt: 2 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: delay + 0.1 }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              color: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
              mb: 3,
              textAlign: 'center'
            }}
          >
            {subtitle}
          </Typography>
        </motion.div>

        {/* Social media grid */}
        <Grid container spacing={2} justifyContent="center">
          {socialLinks.map((link, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: delay + 0.1 * index }}
              >
                <Button
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: link.color,
                    transition: 'all 0.3s ease',
                    height: '100%',
                    border: `1px solid rgba(255,255,255,0.1)`,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-3px)',
                      boxShadow: `0 5px 15px rgba(0,0,0,0.1), 0 0 8px ${link.color}40`,
                    }
                  }}
                >
                  <Box sx={{ mb: 0.5 }}>
                    {link.icon}
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontWeight: 'bold',
                      color: isDarkMode ? '#FFF' : '#000'
                    }}
                  >
                    {link.name}
                  </Typography>
                </Button>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Return button */}
        <Box sx={{ textAlign: 'center', mt: 4, mb: 1 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: delay + 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              onClick={onClose}
              sx={{
                py: 1,
                px: 3,
                borderRadius: 6,
                fontSize: '1rem',
                fontWeight: 'bold',
                backgroundColor: '#FFD700',
                color: '#000',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1), 0 0 15px rgba(255, 215, 0, 0.3)',
                '&:hover': {
                  backgroundColor: '#FFC400',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15), 0 0 20px rgba(255, 215, 0, 0.4)',
                },
              }}
            >
              {buttonText}
            </Button>
          </motion.div>
        </Box>

        {/* Copyright footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: delay + 0.9 }}
        >
          <Typography 
            variant="caption" 
            sx={{ 
              color: isDarkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
              display: 'block',
              textAlign: 'center',
              mt: 2
            }}
          >
            Copyright © {new Date().getFullYear()} Thai.Coin. All rights reserved.
          </Typography>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default SocialLinksPopup;