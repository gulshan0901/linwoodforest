import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Stack,
  useTheme,
  IconButton,
  Fade,
} from '@mui/material';
import {
  FormatQuote,
  ChevronLeft,
  ChevronRight,
  Star,
} from '@mui/icons-material';

const TestimonialsSection: React.FC = () => {
  const theme = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Roybert Alcarra',
      rating: 5,
      text: 'Very professional and knowledgeable. Dave definitely helped me out by helping me choose the right and best insurance. Thank you!!',
      date: '02/12/20',
      service: 'Personal Insurance',
      avatar: '👨‍💼',
    },
    {
      name: 'Cesar Ramirez',
      rating: 5,
      text: 'Is the best insurance agent I ever met, anyone looking for insurance Dave Lin is your agent',
      date: '16/12/14',
      service: 'Auto Insurance',
      avatar: '👨‍🔧',
    },
    {
      name: 'Dennis Cheng',
      rating: 5,
      text: 'Dave is great! I\'m so glad I found him. We shopped around and he gave us a great rate for our home and his customer service was awesome! We feel very confident with our new home insurance. We\'re actually planning to switch our car insurance over to him as well.',
      date: '08/09/17',
      service: 'Home Insurance',
      avatar: '👨‍👩‍👧‍👦',
    },
    {
      name: 'Emily Diaz',
      rating: 5,
      text: 'Madeline helped me tremendously with my home insurance. She took her time to answer all my questions and provide me with information I didn\'t know I needed. Truly thankful for all her help!',
      date: '01/01/24',
      service: 'Home Insurance',
      avatar: '👩‍💼',
    },
    {
      name: 'Ron Minnhtook',
      rating: 5,
      text: 'Dave gave me great service and I saved a lot in car insurance. Thanks Dave',
      date: '04/05/17',
      service: 'Auto Insurance',
      avatar: '👨‍🦳',
    },
    {
      name: 'Eddie R',
      rating: 5,
      text: 'Dave Lin was very professional and answered all of my questions. I told him what I needed and he came through with quotes for my home and car insurance which were more affordable than I expected.',
      date: '20/01/21',
      service: 'Bundled Insurance',
      avatar: '👨‍💻',
    },
    {
      name: 'Michele Krock',
      rating: 5,
      text: 'As first-time home buyers, Ryan was very helpful when we spoke. He informed us of what we needed to do.',
      date: '31/03/22',
      service: 'Home Insurance',
      avatar: '👩‍🏠',
    },
    {
      name: 'Adam Sherred',
      rating: 5,
      text: 'WOW RYAN ALDIERI IS AMAZING SAVED ME OVER $300 A MONTH ON MY 3 CARS! WILL BE REFERRING FRIENDS AND FAMILY. THANK YOU RYAN',
      date: '29/09/21',
      service: 'Auto Insurance',
      avatar: '🚗',
    },
    {
      name: 'Tyler Z',
      rating: 5,
      text: 'Monique was very friendly to chat with and she was able to get me a great condo insurance quote.',
      date: '04/01/22',
      service: 'Condo Insurance',
      avatar: '🏢',
    },
  ];

  const nextTestimonial = React.useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  }, [testimonials.length]);

  const prevTestimonial = React.useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  }, [testimonials.length]);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial, testimonials.length]);

  const currentTestimonials = testimonials.slice(
    currentTestimonial * 3,
    currentTestimonial * 3 + 3
  );

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', position: 'relative' }}>
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}08 0%, transparent 50%), 
                      radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}08 0%, transparent 50%)`,
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
            What Our Clients Say
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
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our service.
          </Typography>

          {/* Rating Summary */}
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <Rating value={5} readOnly size="large" />
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
              5.0
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Based on {testimonials.length} reviews
            </Typography>
          </Box>
        </Box>

        {/* Navigation Controls */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, gap: 2 }}>
          <IconButton
            onClick={prevTestimonial}
            sx={{
              bgcolor: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              '&:hover': {
                bgcolor: theme.palette.primary.main,
                color: 'white',
              },
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={nextTestimonial}
            sx={{
              bgcolor: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              '&:hover': {
                bgcolor: theme.palette.primary.main,
                color: 'white',
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>

        {/* Testimonials Grid */}
        <Fade in={true} timeout={500}>
          <Grid container spacing={4}>
            {currentTestimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={`${currentTestimonial}-${index}`}>
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Quote Icon */}
                    <Box sx={{ mb: 2 }}>
                      <FormatQuote 
                        sx={{ 
                          fontSize: 40, 
                          color: theme.palette.primary.main,
                          transform: 'rotate(180deg)',
                        }} 
                      />
                    </Box>

                    {/* Rating */}
                    <Box sx={{ mb: 2 }}>
                      <Rating value={testimonial.rating} readOnly size="small" />
                    </Box>

                    {/* Testimonial Text */}
                              <Typography
                                variant="body1"
                                sx={{
                                  color: 'text.primary',
                                  lineHeight: 1.6,
                                  mb: 3,
                                  fontStyle: 'italic',
                                  flex: 1,
                                }}
                              >
                                &ldquo;{testimonial.text}&rdquo;
                              </Typography>

                    {/* Client Info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 'auto' }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                        }}
                      >
                        {testimonial.avatar}
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600, color: 'text.primary' }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: theme.palette.primary.main, fontWeight: 500 }}
                        >
                          {testimonial.service}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: 'text.secondary', display: 'block' }}
                        >
                          {testimonial.date}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Fade>

        {/* Pagination Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
          {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: currentTestimonial === index ? theme.palette.primary.main : 'rgba(0,0,0,0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: theme.palette.primary.light,
                },
              }}
            />
          ))}
        </Box>

        {/* Bottom Stats */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} sm={3}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, mb: 1 }}>
                1000+
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Happy Clients
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.secondary.main, mb: 1 }}>
                98%
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Satisfaction Rate
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.info.main, mb: 1 }}>
                24/7
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Support Available
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.warning.main, mb: 1 }}>
                $2M+
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Claims Processed
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
