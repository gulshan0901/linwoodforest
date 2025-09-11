import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Button,
  Divider,
  useTheme,
  IconButton,
  Link as MuiLink,
  Card,
  CardContent,
  Chip,
  Avatar,
  Link,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Twitter,
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Security,
  Schedule,
  Language,
  Shield,
  Star,
  Verified,
  AccessTime,
  ArrowForward,
  Launch,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Our Team', href: '#team' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#careers' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  const personalInsuranceLinks = [
    { label: 'Home Insurance', href: '#home' },
    { label: 'Auto Insurance', href: '#auto' },
    { label: 'Condo Insurance', href: '#condo' },
    { label: 'Motorcycle Insurance', href: '#motorcycle' },
    { label: 'Flood Insurance', href: '#flood' },
    { label: 'Umbrella Insurance', href: '#umbrella' },
    { label: 'Pet Insurance', href: '#pet' },
  ];

  const businessInsuranceLinks = [
    { label: 'Business Owners Insurance', href: '#bop' },
    { label: 'Commercial Auto Insurance', href: '#commercial-auto' },
    { label: 'General Liability Insurance', href: '#general-liability' },
    { label: 'Worker\'s Compensation', href: '#workers-comp' },
  ];

  const supportLinks = [
    { label: 'Contact Us', href: '#contact' },
    { label: 'Get Quote', href: '#quote' },
    { label: 'Service Center', href: '#service' },
    { label: 'Self Quoting Portal', href: '#portal' },
    { label: 'Heroes Referral Program', href: '#heroes' },
    { label: 'Realtors & Lenders', href: '#realtors' },
    { label: 'Local Vendors', href: '#vendors' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms and Conditions', href: '#terms' },
    { label: 'Term Life Insurance Rater', href: '#rater' },
  ];

  const socialMedia = [
    { icon: Facebook, label: 'Facebook', href: '#', color: '#1877F2' },
    { icon: Twitter, label: 'Twitter', href: '#', color: '#1DA1F2' },
    { icon: Instagram, label: 'Instagram', href: '#', color: '#E4405F' },
    { icon: LinkedIn, label: 'LinkedIn', href: '#', color: '#0A66C2' },
    { icon: Pinterest, label: 'Pinterest', href: '#', color: '#BD081C' },
  ];

  const licensedStates = [
    'Pennsylvania', 'New Jersey', 'Delaware', 
    'Maryland', 'Virginia', 'Washington D.C.'
  ];

  return (
    <Box sx={{ 
      background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
      color: 'white', 
      mt: 'auto'
    }}>
      {/* Main Footer - 4 Column Layout */}
      <Container maxWidth="lg">
        <Box sx={{ py: 6 }}>
          <Grid container spacing={4}>
            {/* Column 1: Company Info */}
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
                      mr: 1.5,
                      fontSize: '1.2rem'
                    }}
                  >
                    🌲
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                      Linwood Forest
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Insurance Group
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3, lineHeight: 1.6 }}>
                  Your trusted insurance advocates in the Lehigh Valley.
                </Typography>
                
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Phone sx={{ fontSize: 18, color: theme.palette.secondary.light }} />
                    <Typography variant="body2">(610) 572-7322</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Email sx={{ fontSize: 18, color: theme.palette.secondary.light }} />
                    <Typography variant="body2">sales@linwoodforest.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <LocationOn sx={{ fontSize: 18, color: theme.palette.secondary.light, mt: 0.2 }} />
                    <Typography variant="body2">
                      3312 7th St. Unit 101<br />
                      Whitehall, PA 18052
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>

            {/* Column 2: Services */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography 
                variant="h6" 
                sx={{ fontWeight: 600, mb: 3, color: theme.palette.secondary.light }}
              >
                Our Services
              </Typography>
              <Stack spacing={1}>
                <MuiLink href="#personal" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: theme.palette.secondary.light }}}>
                  Personal Insurance
                </MuiLink>
                <MuiLink href="#business" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: theme.palette.secondary.light }}}>
                  Business Insurance
                </MuiLink>
                <MuiLink href="#life" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: theme.palette.secondary.light }}}>
                  Life Insurance
                </MuiLink>
                <MuiLink href="#home" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: theme.palette.secondary.light }}}>
                  Home Insurance
                </MuiLink>
                <MuiLink href="#auto" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: theme.palette.secondary.light }}}>
                  Auto Insurance
                </MuiLink>
                <MuiLink href="#commercial" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: theme.palette.secondary.light }}}>
                  Commercial Insurance
                </MuiLink>
              </Stack>
            </Grid>

            {/* Column 3: Quick Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography 
                variant="h6" 
                sx={{ fontWeight: 600, mb: 3, color: theme.palette.secondary.light }}
              >
                Quick Links
              </Typography>
              <Stack spacing={1}>
                <MuiLink href="#about" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: theme.palette.secondary.light }}}>
                  About Us
                </MuiLink>
                <MuiLink href="#team" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: theme.palette.secondary.light }}}>
                  Our Team
                </MuiLink>
                <MuiLink href="#testimonials" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: theme.palette.secondary.light }}}>
                  Testimonials
                </MuiLink>
                <MuiLink href="#contact" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: theme.palette.secondary.light }}}>
                  Contact Us
                </MuiLink>
                <MuiLink href="#quote" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: theme.palette.secondary.light }}}>
                  Get Quote
                </MuiLink>
                <MuiLink href="#blog" sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: theme.palette.secondary.light }}}>
                  Blog
                </MuiLink>
              </Stack>
            </Grid>

            {/* Column 4: Connect & CTA */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography 
                variant="h6" 
                sx={{ fontWeight: 600, mb: 3, color: theme.palette.secondary.light }}
              >
                Connect With Us
              </Typography>
              
              {/* Social Media */}
              <Box sx={{ mb: 3 }}>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {socialMedia.slice(0, 4).map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <IconButton
                        key={index}
                        size="small"
                        sx={{
                          width: 36,
                          height: 36,
                          color: 'white',
                          bgcolor: 'rgba(255,255,255,0.1)',
                          '&:hover': {
                            bgcolor: social.color,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <IconComponent sx={{ fontSize: 18 }} />
                      </IconButton>
                    );
                  })}
                </Stack>
              </Box>

              {/* Credentials */}
              <Stack spacing={1} sx={{ mb: 3 }}>
                <Chip 
                  icon={<Shield />}
                  label="Veteran Owned"
                  size="small"
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    color: 'white',
                    alignSelf: 'flex-start'
                  }}
                />
                <Chip 
                  icon={<Verified />}
                  label="Licensed in 6 States"
                  size="small"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    alignSelf: 'flex-start'
                  }}
                />
              </Stack>
              
              {/* CTA Button */}
              <Button
                variant="contained"
                fullWidth
                startIcon={<Phone />}
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  color: 'white',
                  py: 1.2,
                  mb: 2,
                  '&:hover': {
                    bgcolor: theme.palette.secondary.dark,
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                Get Free Quote
              </Button>
              
              {/* Language */}
              <Button
                startIcon={<Language />}
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.3)',
                  fontSize: '0.75rem',
                  '&:hover': {
                    borderColor: theme.palette.secondary.light,
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                中文 (Chinese)
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)' }} />

        {/* Licensed States - Enhanced */}
        <Box sx={{ py: 4, textAlign: 'center' }}>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              color: theme.palette.secondary.light, 
              fontWeight: 600, 
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1
            }}
          >
            <Verified sx={{ fontSize: 20 }} />
            Licensed & Serving
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: 2,
            maxWidth: 700,
            mx: 'auto'
          }}>
            {licensedStates.map((state, index) => (
              <Chip
                key={index}
                label={state}
                size="small"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  fontWeight: 500,
                  border: '1px solid rgba(255,255,255,0.2)',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.25)',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </Box>
        </Box>

        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)' }} />

        {/* Bottom Footer - Compact */}
        <Box sx={{ py: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                © {currentYear} Linwood Forest Insurance Group LLC. All rights reserved. | Designed By <Link  href='https://www.linkedin.com/in/gulshankumarofficial/' color="inherit" underline="hover" target="_blank">Gulshan</Link>.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                justifyContent={{ md: 'flex-end' }}
                alignItems={{ xs: 'flex-start', md: 'center' }}
              >
                {legalLinks.map((link, index) => (
                  <MuiLink
                    key={index}
                    href={link.href}
                    sx={{
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      fontSize: '0.75rem',
                      '&:hover': {
                        color: theme.palette.secondary.light,
                      },
                    }}
                  >
                    {link.label}
                  </MuiLink>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default Footer;
