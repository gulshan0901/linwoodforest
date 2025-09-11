import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  useTheme,
  FormControlLabel,
  Checkbox,
  Divider,
  Alert,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Send,
  CheckCircle,
  Business,
  Person,
} from '@mui/icons-material';

const ContactSection: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      primary: '(610) 572-7322',
      secondary: '(610) 572-7344 (Fax)',
      color: theme.palette.primary.main,
    },
    {
      icon: Email,
      title: 'Email Us',
      primary: 'sales@linwoodforest.com',
      secondary: 'Quick response guaranteed',
      color: theme.palette.secondary.main,
    },
    {
      icon: LocationOn,
      title: 'Visit Us',
      primary: '3312 7th St. Unit 101',
      secondary: 'Whitehall, PA 18052',
      color: theme.palette.info.main,
    },
    {
      icon: AccessTime,
      title: 'Business Hours',
      primary: 'Mon - Fri: 9AM - 6PM',
      secondary: 'Sat: 9AM - 2PM',
      color: theme.palette.warning.main,
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
            Get in Touch
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
            Ready to protect what matters most? Contact our expert team for a free consultation 
            and personalized insurance quote.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} lg={5}>
            <Stack spacing={3}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
              >
                Let's Connect
              </Typography>
              
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card
                    key={index}
                    sx={{
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 2,
                            bgcolor: `${info.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <IconComponent sx={{ fontSize: 24, color: info.color }} />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, mb: 0.5, color: 'text.primary' }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ color: 'text.primary', mb: 0.5 }}
                          >
                            {info.primary}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                          >
                            {info.secondary}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Additional Info */}
              {/* <Box sx={{ mt: 4, p: 3, bgcolor: 'background.default', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                  Why Choose Linwood Forest?
                </Typography>
                <Stack spacing={1}>
                  {[
                    'Licensed in 6 states',
                    '50+ insurance companies',
                    'Veteran-owned business',
                    'Personalized service',
                    'Competitive rates',
                    '24/7 claims support',
                  ].map((benefit, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircle sx={{ fontSize: 16, color: theme.palette.secondary.main }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {benefit}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box> */}
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} lg={7}>
            <Card
              sx={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                border: `2px solid ${theme.palette.primary.main}10`,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}
                >
                  Request Your Free Quote
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', mb: 4 }}
                >
                  Fill out the form below and we'll get back to you within 24 hours with a 
                  personalized insurance quote.
                </Typography>

                {submitSuccess && (
                  <Alert 
                    severity="success" 
                    sx={{ mb: 3 }}
                    icon={<CheckCircle />}
                  >
                    Thank you! Your message has been sent. We'll contact you within 24 hours.
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    {/* Name Fields */}
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="First Name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>

                    {/* Contact Fields */}
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>

                    {/* Message */}
                    <TextField
                      fullWidth
                      label="Tell us about your insurance needs"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      multiline
                      rows={4}
                      required
                      variant="outlined"
                    />

                    {/* Consent */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="consent"
                          checked={formData.consent}
                          onChange={handleInputChange}
                          required
                        />
                      }
                      label={
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          By checking this box, you agree to receive text messages from Linwood Forest 
                          Insurance Group LLC related to conversational purposes. You may reply STOP to 
                          opt out at any time.
                        </Typography>
                      }
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={isSubmitting ? null : <Send />}
                      disabled={isSubmitting || !formData.consent}
                      sx={{
                        py: 1.5,
                        px: 4,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Stack>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Map Placeholder */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, mb: 4, textAlign: 'center', color: 'text.primary' }}
          >
            Find Our Office
          </Typography>
          <Card
            sx={{
              height: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'grey.100',
              backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
            }}
          >
            <Stack alignItems="center" spacing={2}>
              <LocationOn sx={{ fontSize: 64, color: theme.palette.primary.main }} />
              <Typography variant="h6" sx={{ color: 'text.primary', textAlign: 'center' }}>
                3312 7th St. Unit 101<br />
                Whitehall, PA 18052
              </Typography>
              <Button
                variant="outlined"
                onClick={() => window.open('https://maps.google.com/?q=3312+7th+St+Unit+101+Whitehall+PA+18052', '_blank')}
              >
                View on Google Maps
              </Button>
            </Stack>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
