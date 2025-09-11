import Head from 'next/head';
import { Box } from '@mui/material';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Linwood Forest Insurance Group - Lehigh Valley, PA Insurance</title>
        <meta 
          name="description" 
          content="Trusted insurance agency in Lehigh Valley, PA. Get competitive rates on home, auto, business, and life insurance. Veteran-owned, serving PA, NJ, DE, MD, VA, and DC. Call (610) 572-7322 for your free quote." 
        />
        <meta name="keywords" content="insurance, Lehigh Valley, Pennsylvania, auto insurance, home insurance, business insurance, life insurance, veteran owned" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Linwood Forest Insurance Group - Your Insurance, Our Priority" />
        <meta property="og:description" content="Trusted insurance advocates in Lehigh Valley. Competitive rates, personalized service, and expert guidance for all your insurance needs." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://linwoodforest.com" />
      </Head>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flex: 1 }}>
          <HeroSection />
          <ServicesSection />
          <StatsSection />
          <TeamSection />
          <TestimonialsSection />
          <ContactSection />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
