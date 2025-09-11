import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
  useTheme,
  Button,
} from '@mui/material';
import {
  Email,
  Phone,
  LinkedIn,
  Person,
} from '@mui/icons-material';

const TeamSection: React.FC = () => {
  const theme = useTheme();

  const teamMembers = [
    {
      name: 'Dave Lin',
      role: 'Principal Agent',
      description: 'Dave is the founder and principal agent with over 10 years of experience in the insurance industry. He specializes in finding the perfect coverage for both personal and business needs.',
      specialties: ['Personal Insurance', 'Business Insurance', 'Risk Assessment'],
      avatar: '👨‍💼',
      email: 'dave@linwoodforest.com',
      phone: '(610) 572-7322',
      isFounder: true,
    },
    {
      name: 'Monique Merino',
      role: 'Associate Agent',
      description: 'Monique brings extensive knowledge in personal insurance and exceptional customer service. She is dedicated to helping clients understand their coverage options.',
      specialties: ['Home Insurance', 'Auto Insurance', 'Customer Relations'],
      avatar: '👩‍💼',
      email: 'monique@linwoodforest.com',
      phone: '(610) 572-7322',
      isFounder: false,
    },
    {
      name: 'Ryan',
      role: 'Account Executive',
      description: 'Ryan specializes in commercial insurance and has helped numerous businesses protect their assets. He is known for his attention to detail and comprehensive coverage solutions.',
      specialties: ['Commercial Insurance', 'Property Management', 'Claims Support'],
      avatar: '👨‍💻',
      email: 'ryan@linwoodforest.com',
      phone: '(610) 572-7322',
      isFounder: false,
    },
    {
      name: 'Madeline Pizarro',
      role: 'Insurance Agent',
      description: 'Madeline is our newest team member who brings fresh perspectives and energy to helping clients with their insurance needs. She excels in explaining complex insurance concepts.',
      specialties: ['Life Insurance', 'Education & Training', 'Client Onboarding'],
      avatar: '👩‍🎓',
      email: 'madeline@linwoodforest.com',
      phone: '(610) 572-7322',
      isFounder: false,
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
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
            Meet Our Expert Team
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
            Our experienced insurance professionals are here to guide you every step of the way. 
            With decades of combined experience, we&apos;re your trusted advocates.
          </Typography>
        </Box>

        {/* Team Grid */}
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} lg={3} key={member.name}>
              <Card
                sx={{
                  height: '100%',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  border: member.isFounder ? `2px solid ${theme.palette.secondary.main}` : '2px solid transparent',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  },
                }}
              >
                {/* Founder Badge */}
                {member.isFounder && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: theme.palette.secondary.main,
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
                    Founder
                  </Box>
                )}

                <CardContent sx={{ p: 2.5, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Avatar */}
                  <Box sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 1.5,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.2rem',
                        border: `3px solid ${theme.palette.background.paper}`,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                      }}
                    >
                      {member.avatar}
                    </Box>
                  </Box>

                  {/* Name & Role */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                      color: 'text.primary',
                      fontSize: '1.1rem'
                    }}
                  >
                    {member.name}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 500,
                      mb: 1.5,
                    }}
                  >
                    {member.role}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 2,
                      lineHeight: 1.5,
                      flex: 1,
                      fontSize: '0.875rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {member.description}
                  </Typography>

                  {/* Specialties */}
                  <Box sx={{ mb: 2 }}>
                    <Stack direction="row" spacing={0.5} justifyContent="center" flexWrap="wrap" gap={0.5}>
                      {member.specialties.slice(0, 2).map((specialty, specialtyIndex) => (
                        <Chip
                          key={specialtyIndex}
                          label={specialty}
                          size="small"
                          sx={{
                            bgcolor: `${theme.palette.primary.main}15`,
                            color: theme.palette.primary.main,
                            fontSize: '0.7rem',
                            height: 20,
                          }}
                        />
                      ))}
                      {member.specialties.length > 2 && (
                        <Chip
                          label={`+${member.specialties.length - 2}`}
                          size="small"
                          sx={{
                            bgcolor: `${theme.palette.secondary.main}15`,
                            color: theme.palette.secondary.main,
                            fontSize: '0.7rem',
                            height: 20,
                          }}
                        />
                      )}
                    </Stack>
                  </Box>

                  {/* Contact */}
                  <Stack spacing={0.5} sx={{ mt: 'auto' }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                      {member.phone}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}
          >
            Ready to work with our team?
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', mb: 4, maxWidth: '500px', mx: 'auto' }}
          >
            Our experienced agents are here to help you find the perfect insurance coverage. 
            Contact us today for a free consultation.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              startIcon={<Phone />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Call (610) 572-7322
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Email />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Email Our Team
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;
