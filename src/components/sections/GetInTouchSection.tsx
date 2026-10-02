import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';

import { siteConfig } from '@/lib/config/site';

import './GetInTouchSection.css';

const contactCards = [
  {
    title: 'Call Us',
    lines: [siteConfig.phone, '(610) 572-7344 (Fax)'],
    icon: LocalPhoneIcon,
    tone: 'blue',
  },
  {
    title: 'Email Us',
    lines: [siteConfig.email, 'Quick response guaranteed'],
    icon: EmailIcon,
    tone: 'green',
  },
  {
    title: 'Visit Us',
    lines: [
      `${siteConfig.address.street}`,
      `${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`,
    ],
    icon: LocationOnIcon,
    tone: 'sky',
  },
  {
    title: 'Business Hours',
    lines: ['Mon - Fri: 9AM - 6PM', 'Sat: 9AM - 2PM'],
    icon: AccessTimeIcon,
    tone: 'orange',
  },
];

export function GetInTouchSection() {
  return (
    <section className="linwood-contact-panel" id="get-in-touch">
      <div className="linwood-contact-panel__heading">
        <Typography component="h2" variant="h2">
          Get in Touch
        </Typography>
        <Typography component="p">
          Ready to protect what matters most? Contact our expert team for a free consultation and
          personalized insurance quote.
        </Typography>
      </div>

      <div className="linwood-contact-panel__layout">
        <div className="linwood-contact-panel__aside">
          <Typography component="h3" variant="h4">
            Let&apos;s Connect
          </Typography>
          <div className="linwood-contact-panel__cards">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <article className="linwood-contact-card" data-tone={card.tone} key={card.title}>
                  <span className="linwood-contact-card__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h4>{card.title}</h4>
                    <strong>{card.lines[0]}</strong>
                    <span>{card.lines[1]}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <form className="linwood-contact-form">
          <Typography component="h3" variant="h4">
            Request Your Free Quote
          </Typography>
          <p>
            Fill out the form below and we&apos;ll get back to you within 24 hours with a
            personalized insurance quote.
          </p>
          <div className="linwood-contact-form__grid">
            <label>
              <span>First Name *</span>
              <input
                autoComplete="given-name"
                name="firstName"
                placeholder="First Name *"
                required
              />
            </label>
            <label>
              <span>Last Name *</span>
              <input
                autoComplete="family-name"
                name="lastName"
                placeholder="Last Name *"
                required
              />
            </label>
            <label>
              <span>Email Address *</span>
              <input
                autoComplete="email"
                name="email"
                placeholder="Email Address *"
                required
                type="email"
              />
            </label>
            <label>
              <span>Phone Number *</span>
              <input
                autoComplete="tel"
                name="phone"
                placeholder="Phone Number *"
                required
                type="tel"
              />
            </label>
          </div>
          <label className="linwood-contact-form__message">
            <span>Tell us about your insurance needs *</span>
            <textarea
              name="message"
              placeholder="Tell us about your insurance needs *"
              required
              rows={5}
            />
          </label>
          <label className="linwood-contact-form__consent">
            <input required type="checkbox" />
            <span>
              By checking this box, you agree to receive text messages from Linwood Forest Insurance
              Group LLC related to conversational purposes. You may reply STOP to opt out at any
              time.
            </span>
          </label>
          <button className="linwood-contact-form__submit" type="submit">
            <SendIcon aria-hidden="true" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
