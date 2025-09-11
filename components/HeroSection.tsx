import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Phone,
  RequestQuote,
  Security,
  Verified,
  LocationOn,
} from '@mui/icons-material';

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Verified sx={{ color: theme.palette.secondary.main, fontSize: 20 }} />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: theme.palette.secondary.light,
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  Veteran Owned • Licensed in 6 States
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                Your Insurance,{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Our Priority
                </Box>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontWeight: 400,
                  lineHeight: 1.4,
                  maxWidth: '600px',
                }}
              >
                We are your advocates in the Lehigh Valley, providing competitive insurance 
                coverage that protects what matters most to you and your business.
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                <LocationOn sx={{ fontSize: 18, color: theme.palette.secondary.light }} />
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                  Serving Pennsylvania, New Jersey, Delaware, Maryland, Virginia & Washington D.C.
                </Typography>
              </Box>

              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                sx={{ mt: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<RequestQuote />}
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    color: 'white',
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    '&:hover': {
                      bgcolor: theme.palette.secondary.dark,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get Free Quote
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Phone />}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: theme.palette.secondary.light,
                      bgcolor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  (610) 572-7322
                </Button>
              </Stack>

              {/* Trust Indicators */}
              <Box sx={{ mt: 4 }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.7)', 
                    mb: 2,
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    fontSize: '0.875rem',
                  }}
                >
                  Trusted By Thousands
                </Typography>
                <Stack direction="row" spacing={4} alignItems="center" flexWrap="wrap">
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.secondary.light }}>
                      6
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Licensed States
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.secondary.light }}>
                      50+
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Insurance Companies
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.secondary.light }}>
                      1000+
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Happy Clients
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: { xs: 4, md: 0 },
              }}
            >
              {/* Decorative Elements */}
              <Box
                sx={{
                  width: { xs: 280, md: 350 },
                  height: { xs: 280, md: 350 },
                  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    border: '2px solid rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                  },
                }}
              >
                <Security 
                  sx={{ 
                    fontSize: { xs: 120, md: 150 }, 
                    color: 'white',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                  }} 
                />
                
                {/* Floating Elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: -30,
                    bgcolor: 'white',
                    color: theme.palette.primary.main,
                    borderRadius: 2,
                    p: 2,
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    animation: 'float 3s ease-in-out infinite',
                    '@keyframes float': {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-10px)' },
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                    $2M+
                  </Typography>
                  <Typography variant="body2">
                    Claims Paid
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 30,
                    left: -40,
                    bgcolor: 'white',
                    color: theme.palette.primary.main,
                    borderRadius: 2,
                    p: 2,
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    animation: 'float 3s ease-in-out infinite 1.5s',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                    24/7
                  </Typography>
                  <Typography variant="body2">
                    Support
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
