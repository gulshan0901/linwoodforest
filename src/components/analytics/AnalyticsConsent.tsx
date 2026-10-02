'use client';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Script from 'next/script';
import { useEffect, useMemo, useState } from 'react';

import { Button } from '@/components/ui/Button';

import './AnalyticsConsent.css';

const consentStorageKey = 'linwood-analytics-consent';

type ConsentState = 'accepted' | 'declined' | 'pending';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function AnalyticsConsent() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const analyticsEnabled = Boolean(measurementId);
  const [consent, setConsent] = useState<ConsentState>('pending');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!analyticsEnabled) {
      setConsent('declined');
      return;
    }

    const storedConsent = window.localStorage.getItem(consentStorageKey);
    if (storedConsent === 'accepted' || storedConsent === 'declined') {
      setConsent(storedConsent);
    }
  }, [analyticsEnabled]);

  useEffect(() => {
    if (!analyticsEnabled || consent !== 'accepted' || !loaded || !measurementId) {
      return;
    }

    window.dataLayer = window.dataLayer ?? [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      anonymize_ip: true,
      send_page_view: true,
    });
  }, [analyticsEnabled, consent, loaded, measurementId]);

  const scriptUrl = useMemo(() => {
    if (!analyticsEnabled || !measurementId || consent !== 'accepted') {
      return null;
    }

    return `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  }, [analyticsEnabled, consent, measurementId]);

  function saveConsent(nextConsent: ConsentState) {
    window.localStorage.setItem(consentStorageKey, nextConsent);
    setConsent(nextConsent);
  }

  if (!analyticsEnabled) {
    return null;
  }

  return (
    <>
      {scriptUrl ? (
        <Script onLoad={() => setLoaded(true)} src={scriptUrl} strategy="afterInteractive" />
      ) : null}
      {consent === 'pending' ? (
        <Box
          aria-label="Analytics consent"
          className="linwood-analytics-consent"
          component="section"
        >
          <div className="linwood-analytics-consent__copy">
            <Typography component="h2" variant="h6">
              Privacy preferences
            </Typography>
            <Typography className="linwood-analytics-consent__text" component="p">
              We use privacy-conscious analytics to understand site performance and improve the
              launch experience. Analytics loads only if you accept.
            </Typography>
          </div>
          <div className="linwood-analytics-consent__actions">
            <Button
              className="linwood-analytics-consent__button"
              href="#accept-analytics"
              onClick={(event) => {
                event.preventDefault();
                saveConsent('accepted');
              }}
              variant="contained"
            >
              Accept
            </Button>
            <Button
              className="linwood-analytics-consent__button"
              href="#decline-analytics"
              onClick={(event) => {
                event.preventDefault();
                saveConsent('declined');
              }}
              variant="outlined"
            >
              Decline
            </Button>
            <IconButton
              aria-label="Dismiss analytics notice"
              className="linwood-analytics-consent__dismiss"
              onClick={() => saveConsent('declined')}
            >
              <CloseIcon aria-hidden="true" />
            </IconButton>
          </div>
        </Box>
      ) : null}
    </>
  );
}
