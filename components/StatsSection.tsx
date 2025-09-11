import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import {
  LocationOn,
  Business,
  People,
  Savings,
  TrendingUp,
  Star,
  Security,
  Support,
} from '@mui/icons-material';

interface CountUpProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
  inView: boolean;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration, suffix = '', prefix = '', inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);

  return <span>{prefix}{count}{suffix}</span>;
};

const StatsSection: React.FC = () => {
  const theme = useTheme();
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: LocationOn,
      value: 6,
      suffix: '',
      label: 'Licensed States',
  description: 'We serve clients across Pennsylvania, New Jersey, Delaware, Maryland, Virginia, and Washington D.C.',
      color: theme.palette.primary.main,
    },
    {
      icon: Business,
      value: 50,
      suffix: '+',
      label: 'Insurance Companies',
      description: 'Partnerships with top-rated carriers ensure we find you the best coverage at competitive rates.',
      color: theme.palette.secondary.main,
    },
    {
      icon: People,
      value: 1000,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Thousands of satisfied customers trust us to protect what matters most to them.',
      color: theme.palette.info.main,
    },
    {
      icon: Savings,
      value: 2,
      suffix: 'M',
      prefix: '$',
      label: 'Claims Paid',
  description: 'We&apos;ve helped our clients recover millions in claims when they needed it most.',
      color: theme.palette.success.main,
    },
    {
      icon: Star,
      value: 5,
      suffix: '/5',
      label: 'Average Rating',
      description: 'Our commitment to excellence is reflected in consistently outstanding client reviews.',
      color: theme.palette.warning.main,
    },
    {
      icon: TrendingUp,
      value: 98,
      suffix: '%',
      label: 'Client Retention',
      description: 'Our personalized service keeps clients coming back year after year.',
      color: theme.palette.error.main,
    },
    {
      icon: Security,
      value: 15,
      suffix: '+',
      label: 'Years Experience',
      description: 'Decades of combined experience in the insurance industry guide our expertise.',
      color: theme.palette.primary.dark,
    },
    {
      icon: Support,
      value: 24,
      suffix: '/7',
      label: 'Support Available',
  description: 'Round-the-clock claims support ensures you&apos;re never alone when you need help.',
      color: theme.palette.secondary.dark,
    },
  ];

  return (
    <Box 
      ref={sectionRef}
      sx={{ 
        py: { xs: 8, md: 12 }, 
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 25% 25%, ${theme.palette.primary.main}05 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, ${theme.palette.secondary.main}05 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Track Record
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Numbers that reflect our commitment to excellence and the trust our clients place in us.
          </Typography>
        </Box>

        {/* Stats Grid */}
        <Grid container spacing={3}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: `2px solid transparent`,
                    background: 'white',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 40px ${stat.color}20`,
                      borderColor: `${stat.color}30`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 3,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}05)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          inset: -2,
                          borderRadius: '50%',
                          background: `conic-gradient(from 0deg, ${stat.color}30, transparent, ${stat.color}30)`,
                          zIndex: -1,
                        },
                      }}
                    >
                      <IconComponent 
                        sx={{ 
                          fontSize: 40, 
                          color: stat.color,
                        }} 
                      />
                    </Box>

                    {/* Number */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 'bold',
                        color: stat.color,
                        mb: 1,
                        fontFamily: 'monospace',
                      }}
                    >
                      <CountUp
                        end={stat.value}
                        duration={2000}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                        inView={inView}
                      />
                    </Typography>

                    {/* Label */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 2,
                      }}
                    >
                      {stat.label}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.5,
                      }}
                    >
                      {stat.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: 'text.primary',
            }}
          >
            Ready to join our family of satisfied clients?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Experience the Linwood Forest difference. Our track record speaks for itself, 
            and we&apos;re ready to put our expertise to work for you.
          </Typography>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
            sx={{ maxWidth: 400, mx: 'auto' }}
          >
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                border: `2px solid ${theme.palette.primary.main}20`,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                Get Started Today
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Free quotes • No obligations • Expert guidance
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 'bold', 
                  color: theme.palette.primary.main,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                📞 (610) 572-7322
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default StatsSection;
