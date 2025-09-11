import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  Stack,
  Avatar,
} from '@mui/material';
import {
  Home,
  DirectionsCar,
  Business,
  FamilyRestroom,
  ArrowForward,
  CheckCircle,
} from '@mui/icons-material';

const ServicesSection: React.FC = () => {
  const theme = useTheme();

  const services = [
    {
      title: 'Personal Insurance',
      description: 'Protect yourself, your family, and your assets with comprehensive personal insurance coverage.',
      icon: Home,
      color: theme.palette.primary.main,
      features: [
        'Home Insurance',
        'Auto Insurance',
        'Condo Insurance',
        'Motorcycle Insurance',
        'Flood Insurance',
        'Umbrella Insurance',
        'Pet Insurance',
      ],
      highlight: 'Most Popular',
    },
    {
      title: 'Business Insurance',
      description: 'Comprehensive protection for your business ventures with competitive coverage options.',
      icon: Business,
      color: theme.palette.secondary.main,
      features: [
        'Business Owners Insurance',
        'Commercial Auto Insurance',
        'General Liability Insurance',
        "Worker's Compensation",
        'Professional Liability',
        'Cyber Liability',
      ],
      highlight: 'Best Value',
    },
    {
      title: 'Life Insurance',
      description: 'Secure your loved ones\' future and leave a lasting legacy with our life insurance policies.',
      icon: FamilyRestroom,
      color: theme.palette.info.main,
      features: [
        'Term Life Insurance',
        'Whole Life Insurance',
        'Universal Life Insurance',
        'Final Expense Insurance',
        'Disability Insurance',
        'Long-term Care',
      ],
      highlight: 'Peace of Mind',
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
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
            Our Insurance Services
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
            We work directly with top insurance companies to find you the most competitive 
            and comprehensive coverage that fits your unique needs.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Grid item xs={12} md={4} key={service.title}>
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    border: `2px solid transparent`,
                    backgroundImage: `linear-gradient(white, white), linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'content-box, border-box',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 40px ${service.color}20`,
                      backgroundImage: `linear-gradient(white, white), linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                    },
                  }}
                >
                  {/* Highlight Badge */}
                  {service.highlight && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        bgcolor: service.color,
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        zIndex: 1,
                      }}
                    >
                      {service.highlight}
                    </Box>
                  )}

                  <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Icon */}
                    <Box sx={{ mb: 3 }}>
                      <Avatar
                        sx={{
                          width: 64,
                          height: 64,
                          bgcolor: `${service.color}15`,
                          color: service.color,
                          mb: 2,
                        }}
                      >
                        <IconComponent sx={{ fontSize: 32 }} />
                      </Avatar>
                    </Box>

                    {/* Content */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: 'text.primary',
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* Features List */}
                    <Box sx={{ flex: 1, mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: service.color,
                          fontWeight: 600,
                          mb: 2,
                          textTransform: 'uppercase',
                          fontSize: '0.875rem',
                        }}
                      >
                        Coverage Includes:
                      </Typography>
                      <Stack spacing={1}>
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <Box
                            key={featureIndex}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                            }}
                          >
                            <CheckCircle
                              sx={{
                                fontSize: 16,
                                color: service.color,
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{ color: 'text.secondary' }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                        {service.features.length > 4 && (
                          <Typography
                            variant="body2"
                            sx={{
                              color: service.color,
                              fontWeight: 500,
                              pl: 3,
                            }}
                          >
                            + {service.features.length - 4} more coverage options
                          </Typography>
                        )}
                      </Stack>
                    </Box>

                    {/* CTA Button */}
                    <Button
                      variant="outlined"
                      endIcon={<ArrowForward />}
                      sx={{
                        borderColor: service.color,
                        color: service.color,
                        mt: 'auto',
                        '&:hover': {
                          borderColor: service.color,
                          bgcolor: `${service.color}10`,
                        },
                      }}
                      fullWidth
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}
          >
            Ready to find the perfect coverage?
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', mb: 4, maxWidth: '500px', mx: 'auto' }}
          >
            Our experienced agents will help you compare options from 50+ insurance companies 
            to find the best rates and coverage for your specific needs.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Get Free Quote
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Schedule Consultation
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
