import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  Chip,
  Avatar,
  Badge,
  Fade,
  Slide,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close,
  Phone,
  Email,
  Language,
  KeyboardArrowDown,
  Shield,
  LocationOn,
  Schedule,
  RequestQuote,
  Person,
} from '@mui/icons-material';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [personalInsuranceAnchor, setPersonalInsuranceAnchor] = useState<null | HTMLElement>(null);
  const [businessInsuranceAnchor, setBusinessInsuranceAnchor] = useState<null | HTMLElement>(null);
  const [languageAnchor, setLanguageAnchor] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const personalInsuranceItems = [
    { label: 'Home Insurance', icon: '🏠' },
    { label: 'Auto Insurance', icon: '🚗' },
    { label: 'Condo Insurance', icon: '🏢' },
    { label: 'Motorcycle Insurance', icon: '🏍️' },
    { label: 'Flood Insurance', icon: '🌊' },
    { label: 'Umbrella Insurance', icon: '☂️' },
    { label: 'Pet Insurance', icon: '🐕' },
  ];

  const businessInsuranceItems = [
    { label: 'Business Owners Insurance', icon: '🏢' },
    { label: 'Commercial Auto Insurance', icon: '🚛' },
    { label: 'General Liability Insurance', icon: '🛡️' },
    { label: "Worker's Compensation Insurance", icon: '👷' },
  ];

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuClose = () => {
    setPersonalInsuranceAnchor(null);
    setBusinessInsuranceAnchor(null);
    setLanguageAnchor(null);
  };

  const drawer = (
    <Box 
      sx={{ 
        width: 320, 
        height: '100%',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        position: 'relative'
      }}
    >
      {/* Header */}
      <Box sx={{ 
        p: 3, 
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
            🌲 Linwood Forest
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.9 }}>
            Insurance Group
          </Typography>
        </Box>
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{ 
            color: 'white',
            bgcolor: 'rgba(255,255,255,0.1)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
          }}
        >
          <Close />
        </IconButton>
      </Box>

      {/* Contact Info */}
      <Box sx={{ p: 3, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <Typography variant="subtitle2" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
          Contact Us
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
          <Phone sx={{ fontSize: 18, color: 'primary.main' }} />
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            (610) 572-7322
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Email sx={{ fontSize: 18, color: 'primary.main' }} />
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            sales@linwoodforest.com
          </Typography>
        </Box>
      </Box>

      {/* Navigation */}
      <List sx={{ px: 1, py: 2 }}>
        {[
          { label: 'About Us', icon: '🏢' },
          { label: 'Personal Insurance', icon: '🏠' },
          { label: 'Business Insurance', icon: '💼' },
          { label: 'Life Insurance', icon: '❤️' },
          { label: 'Our Team', icon: '👥' },
          { label: 'Blog', icon: '📝' },
          { label: 'Contact', icon: '📞' },
        ].map((item, index) => (
          <ListItem 
            key={index}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              mx: 1,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
                '& .MuiTypography-root': { color: 'white' }
              },
              transition: 'all 0.2s ease'
            }}
            button
          >
            <Box sx={{ mr: 2, fontSize: '1.2rem' }}>{item.icon}</Box>
            <ListItemText 
              primary={item.label} 
              sx={{ 
                '& .MuiTypography-root': {
                  fontWeight: 500,
                  fontSize: '0.95rem'
                }
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Bottom Actions */}
      <Box sx={{ p: 3, mt: 'auto' }}>
        <Button 
          variant="contained" 
          fullWidth 
          startIcon={<RequestQuote />}
          sx={{ 
            mb: 2,
            py: 1.5,
            borderRadius: 3,
            fontWeight: 600,
            fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
            '&:hover': {
              boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
              transform: 'translateY(-1px)'
            }
          }}
        >
          Get Free Quote
        </Button>
        
        <Button 
          variant="outlined" 
          fullWidth
          startIcon={<Language />}
          sx={{
            borderRadius: 3,
            py: 1.2,
            borderColor: 'primary.main',
            color: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'white'
            }
          }}
        >
          中文 (Chinese)
        </Button>
        
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Chip 
            label="Veteran Owned" 
            size="small"
            icon={<Shield />}
            sx={{ 
              bgcolor: 'secondary.main',
              color: 'white',
              fontWeight: 500
            }}
          />
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Top Info Bar */}
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Box 
          sx={{ 
            bgcolor: scrolled ? 'primary.main' : 'primary.dark', 
            color: 'white', 
            py: { xs: 0.5, md: 1 },
            transition: 'all 0.3s ease',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <Container maxWidth="xl">
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: { xs: 1, md: 2 },
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: { xs: 1.5, md: 3 }, 
                flexWrap: 'wrap' 
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7 }}>
                  <Phone sx={{ fontSize: 18, color: 'secondary.light' }} />
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    (610) 572-7322
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7 }}>
                  <Email sx={{ fontSize: 18, color: 'secondary.light' }} />
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    sales@linwoodforest.com
                  </Typography>
                </Box>
                <Box sx={{ 
                  display: { xs: 'none', md: 'flex' }, 
                  alignItems: 'center', 
                  gap: 0.7 
                }}>
                  <LocationOn sx={{ fontSize: 18, color: 'secondary.light' }} />
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Lehigh Valley, PA
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Chip 
                  icon={<Shield />}
                  label="Veteran Owned" 
                  size="small" 
                  sx={{ 
                    bgcolor: 'secondary.main', 
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: 'secondary.dark'
                    }
                  }} 
                />
                <Button
                  size="small"
                  startIcon={<Language />}
                  endIcon={<KeyboardArrowDown />}
                  sx={{ 
                    color: 'white', 
                    minWidth: 'auto',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.1)'
                    },
                    borderRadius: 2
                  }}
                  onClick={(e) => setLanguageAnchor(e.currentTarget)}
                >
                  EN
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Slide>

      {/* Main Navigation */}
      <AppBar 
        position="sticky" 
        elevation={scrolled ? 4 : 1}
        sx={{ 
          bgcolor: 'rgba(255,255,255,0.95)', 
          backdropFilter: 'blur(10px)',
          color: 'text.primary',
          transition: 'all 0.3s ease',
          borderBottom: scrolled ? `2px solid ${theme.palette.primary.main}20` : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar 
            sx={{ 
              justifyContent: 'space-between', 
              py: { xs: 1, md: 1.5 },
              minHeight: { xs: 60, md: 80 }
            }}
          >
            {/* Enhanced Logo */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform 0.2s ease'
              }
            }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  fontSize: '1.5rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                🌲
              </Box>
              <Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 800, 
                    color: 'primary.main',
                    lineHeight: 1.1,
                    fontSize: { xs: '1.3rem', md: '1.5rem' }
                  }}
                >
                  Linwood Forest
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: 'text.secondary',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    fontSize: '0.7rem'
                  }}
                >
                  Insurance Group
                </Typography>
              </Box>
            </Box>

            {/* Enhanced Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 0.5,
                bgcolor: 'rgba(0,0,0,0.02)',
                borderRadius: 3,
                p: 0.5
              }}>
                <Button 
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    borderRadius: 2,
                    px: 2,
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white'
                    }
                  }}
                >
                  About
                </Button>
                
                <Button
                  endIcon={<KeyboardArrowDown />}
                  onClick={(e) => setPersonalInsuranceAnchor(e.currentTarget)}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    borderRadius: 2,
                    px: 2,
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white'
                    }
                  }}
                >
                  Personal
                </Button>
                
                <Button
                  endIcon={<KeyboardArrowDown />}
                  onClick={(e) => setBusinessInsuranceAnchor(e.currentTarget)}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    borderRadius: 2,
                    px: 2,
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white'
                    }
                  }}
                >
                  Business
                </Button>
                
                <Button 
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    borderRadius: 2,
                    px: 2,
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white'
                    }
                  }}
                >
                  Life
                </Button>
                
                <Button 
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    borderRadius: 2,
                    px: 2,
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white'
                    }
                  }}
                >
                  Team
                </Button>
                
                <Button 
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    borderRadius: 2,
                    px: 2,
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white'
                    }
                  }}
                >
                  Contact
                </Button>
              </Box>
            )}

            {/* Enhanced CTA and Mobile Menu */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!isMobile && (
                <Button 
                  variant="contained" 
                  startIcon={<RequestQuote />}
                  sx={{ 
                    borderRadius: 3,
                    px: 3,
                    py: 1.2,
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    '&:hover': {
                      boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                      transform: 'translateY(-1px)'
                    }
                  }}
                >
                  Get Quote
                </Button>
              )}
              
              {isMobile && (
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'primary.dark'
                    },
                    width: 48,
                    height: 48
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Enhanced Dropdown Menus */}
      <Menu
        anchorEl={personalInsuranceAnchor}
        open={Boolean(personalInsuranceAnchor)}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              border: `1px solid ${theme.palette.primary.main}20`,
              minWidth: 280,
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
            }
          }
        }}
      >
        <Box sx={{ p: 2, borderBottom: `1px solid ${theme.palette.primary.main}20` }}>
          <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 600 }}>
            Personal Insurance Products
          </Typography>
        </Box>
        {personalInsuranceItems.map((item, index) => (
          <MenuItem 
            key={item.label} 
            onClick={handleMenuClose}
            sx={{
              py: 1.5,
              px: 2,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
                '& .menu-icon': {
                  transform: 'scale(1.1)'
                }
              },
              transition: 'all 0.2s ease'
            }}
          >
            <Box 
              className="menu-icon"
              sx={{ 
                mr: 2, 
                fontSize: '1.2rem',
                transition: 'transform 0.2s ease'
              }}
            >
              {item.icon}
            </Box>
            <Typography sx={{ fontWeight: 500 }}>
              {item.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>

      <Menu
        anchorEl={businessInsuranceAnchor}
        open={Boolean(businessInsuranceAnchor)}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              border: `1px solid ${theme.palette.secondary.main}20`,
              minWidth: 280,
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
            }
          }
        }}
      >
        <Box sx={{ p: 2, borderBottom: `1px solid ${theme.palette.secondary.main}20` }}>
          <Typography variant="subtitle2" sx={{ color: 'secondary.main', fontWeight: 600 }}>
            Business Insurance Products
          </Typography>
        </Box>
        {businessInsuranceItems.map((item, index) => (
          <MenuItem 
            key={item.label} 
            onClick={handleMenuClose}
            sx={{
              py: 1.5,
              px: 2,
              '&:hover': {
                bgcolor: 'secondary.main',
                color: 'white',
                '& .menu-icon': {
                  transform: 'scale(1.1)'
                }
              },
              transition: 'all 0.2s ease'
            }}
          >
            <Box 
              className="menu-icon"
              sx={{ 
                mr: 2, 
                fontSize: '1.2rem',
                transition: 'transform 0.2s ease'
              }}
            >
              {item.icon}
            </Box>
            <Typography sx={{ fontWeight: 500 }}>
              {item.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>

      <Menu
        anchorEl={languageAnchor}
        open={Boolean(languageAnchor)}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              minWidth: 200,
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
            }
          }
        }}
      >
        <MenuItem 
          onClick={handleMenuClose}
          sx={{
            py: 1.5,
            '&:hover': { bgcolor: 'primary.main', color: 'white' }
          }}
        >
          <Box sx={{ mr: 2, fontSize: '1.2rem' }}>🇺🇸</Box>
          English
        </MenuItem>
        <MenuItem 
          onClick={handleMenuClose}
          sx={{
            py: 1.5,
            '&:hover': { bgcolor: 'primary.main', color: 'white' }
          }}
        >
          <Box sx={{ mr: 2, fontSize: '1.2rem' }}>🇨🇳</Box>
          中文 (Chinese)
        </MenuItem>
      </Menu>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
