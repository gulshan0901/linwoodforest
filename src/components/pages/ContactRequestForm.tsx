'use client';

import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
import Script from 'next/script';

import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

import './ContactRequestForm.css';

type ContactRequestFormProps = {
  formType: 'contact' | 'quote';
  locale: Locale;
};

type RecaptchaApi = {
  ready: (callback: () => void) => void;
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      'expired-callback': () => void;
      'error-callback': () => void;
    },
  ) => number;
  reset: (widgetId?: number) => void;
};

declare global {
  interface Window {
    grecaptcha?: RecaptchaApi;
  }
}

const recaptchaSiteKey =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '6LeD0NsUAAAAAKUFFPdV2JItKUccSYeWEmP_N2dm';

const text = {
  en: {
    contactTitle: 'Service Request',
    quoteTitle: 'Request a Quote',
    contactIntro: 'Complete the form below and one of our insurance experts will be in touch.',
    quoteIntro:
      'Tell us what you are looking to insure and one of our insurance experts will be in touch.',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone Number',
    contactDetails: 'Service Request Details',
    quoteDetails: 'Quote Request Details',
    consent:
      'By checking this box, you agree to receive text messages from Linwood Forest Insurance Group LLC related to conversational purposes. You may reply STOP to opt out at any time. Reply HELP to (610) 572-7322 for assistance. Messages and data rates may apply. Message frequency may vary.',
    learnMore: 'Learn more on our',
    privacy: 'Privacy Policy',
    and: 'and',
    terms: 'Terms and conditions',
    page: 'page.',
    submit: 'Send request',
    submitting: 'Sending…',
    success: 'Thank you. Your request has been submitted.',
    error: 'We could not submit your request. Please try again or call (610) 572-7322.',
    captchaRequired: 'Complete the CAPTCHA verification before submitting.',
    captchaError: 'CAPTCHA could not load. Refresh the page or call (610) 572-7322.',
  },
  zh: {
    contactTitle: '服务请求',
    quoteTitle: '申请保险报价',
    contactIntro: '请填写以下表格，我们的保险专家会与您联系。',
    quoteIntro: '请告诉我们您希望投保的内容，我们的保险专家会与您联系。',
    firstName: '名字',
    lastName: '姓氏',
    email: '电子邮箱',
    phone: '电话号码',
    contactDetails: '服务请求详情',
    quoteDetails: '报价请求详情',
    consent:
      '勾选此框即表示您同意接收 Linwood Forest Insurance Group LLC 与当前沟通相关的短信。您可随时回复 STOP 取消订阅。回复 HELP 或致电 (610) 572-7322 获取帮助。可能产生短信和数据费用。消息频率可能有所不同。',
    learnMore: '了解更多，请参阅我们的',
    privacy: '隐私政策',
    and: '和',
    terms: '条款与条件',
    page: '。',
    submit: '发送请求',
    submitting: '正在发送…',
    success: '谢谢，您的请求已提交。',
    error: '无法提交您的请求。请重试或致电 (610) 572-7322。',
    captchaRequired: '提交前请完成 CAPTCHA 验证。',
    captchaError: 'CAPTCHA 无法加载。请刷新页面或致电 (610) 572-7322。',
  },
} as const;

export function ContactRequestForm({ formType, locale }: ContactRequestFormProps) {
  const labels = text[locale];
  const captchaContainer = useRef<HTMLDivElement>(null);
  const captchaWidgetId = useRef<number | null>(null);
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const renderCaptcha = useCallback(() => {
    if (!captchaContainer.current || !window.grecaptcha || captchaWidgetId.current !== null) {
      return;
    }

    window.grecaptcha.ready(() => {
      if (!captchaContainer.current || !window.grecaptcha || captchaWidgetId.current !== null) {
        return;
      }

      captchaWidgetId.current = window.grecaptcha.render(captchaContainer.current, {
        sitekey: recaptchaSiteKey,
        callback: setCaptchaToken,
        'expired-callback': () => setCaptchaToken(''),
        'error-callback': () => {
          setCaptchaToken('');
          setCaptchaError(true);
        },
      });
    });
  }, []);

  useEffect(() => {
    renderCaptcha();
  }, [renderCaptcha]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') {
      return;
    }
    if (formType === 'contact' && !captchaToken) {
      setStatus('error');
      return;
    }

    const formData = new FormData(event.currentTarget);
    const formElement = event.currentTarget;
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType,
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          smsConsent: formData.get('smsConsent') === 'on',
          recaptchaToken: captchaToken || undefined,
          website: formData.get('website'),
        }),
      });
      if (!response.ok) {
        setStatus('error');
        return;
      }

      setStatus('success');
      formElement.reset();
      setCaptchaToken('');
      if (formType === 'contact' && captchaWidgetId.current !== null) {
        window.grecaptcha?.reset(captchaWidgetId.current);
      }
    } catch {
      setStatus('error');
    }
  }

  const formId = `linwood-${formType}-request-form`;

  return (
    <section aria-labelledby={`${formId}-title`} className="linwood-request-form-section">
      {formType === 'contact' ? (
        <>
          <Script
            onError={() => setCaptchaError(true)}
            onReady={renderCaptcha}
            src="https://www.google.com/recaptcha/api.js?render=explicit"
            strategy="afterInteractive"
          />
        </>
      ) : null}
      <div className="linwood-request-form">
        <h2 id={`${formId}-title`}>
          {formType === 'contact' ? labels.contactTitle : labels.quoteTitle}
        </h2>
        <p className="linwood-request-form__intro">
          {formType === 'contact' ? labels.contactIntro : labels.quoteIntro}
        </p>
        <form className="linwood-request-form__fields" id={formId} onSubmit={handleSubmit}>
          <label className="linwood-request-form__honeypot" htmlFor={`${formId}-website`}>
            Leave this field empty
            <input
              autoComplete="off"
              id={`${formId}-website`}
              name="website"
              tabIndex={-1}
              type="text"
            />
          </label>
          <label className="linwood-request-form__sr-only" htmlFor={`${formId}-first-name`}>
            {labels.firstName}
          </label>
          <input
            autoComplete="given-name"
            id={`${formId}-first-name`}
            maxLength={80}
            name="firstName"
            placeholder={labels.firstName}
            required
          />
          <label className="linwood-request-form__sr-only" htmlFor={`${formId}-last-name`}>
            {labels.lastName}
          </label>
          <input
            autoComplete="family-name"
            id={`${formId}-last-name`}
            maxLength={80}
            name="lastName"
            placeholder={labels.lastName}
            required
          />
          <label className="linwood-request-form__sr-only" htmlFor={`${formId}-email`}>
            {labels.email}
          </label>
          <input
            autoComplete="email"
            id={`${formId}-email`}
            maxLength={254}
            name="email"
            placeholder={labels.email}
            required
            type="email"
          />
          <label className="linwood-request-form__sr-only" htmlFor={`${formId}-phone`}>
            {labels.phone}
          </label>
          <input
            autoComplete="tel"
            id={`${formId}-phone`}
            maxLength={30}
            name="phone"
            placeholder={labels.phone}
            required
            type="tel"
          />
          <label className="linwood-request-form__sr-only" htmlFor={`${formId}-message`}>
            {formType === 'contact' ? labels.contactDetails : labels.quoteDetails}
          </label>
          <textarea
            id={`${formId}-message`}
            maxLength={2000}
            name="message"
            placeholder={formType === 'contact' ? labels.contactDetails : labels.quoteDetails}
            required
            rows={6}
          />
          <label className="linwood-request-form__consent" htmlFor={`${formId}-sms-consent`}>
            <input id={`${formId}-sms-consent`} name="smsConsent" type="checkbox" />
            <span>
              {labels.consent} {labels.learnMore}{' '}
              <Link href="/privacy-policy">{labels.privacy}</Link> {labels.and}{' '}
              <Link href="/privacy-policy-for-sms-communications">{labels.terms}</Link>{' '}
              {labels.page}
            </span>
          </label>
          {formType === 'contact' ? (
            <div
              aria-label="CAPTCHA verification"
              className="linwood-request-form__captcha"
              ref={captchaContainer}
            />
          ) : null}
          {formType === 'contact' && captchaError ? (
            <p
              className="linwood-request-form__status linwood-request-form__status--error"
              role="alert"
            >
              {labels.captchaError}
            </p>
          ) : null}
          {status === 'success' ? (
            <p
              className="linwood-request-form__status linwood-request-form__status--success"
              role="status"
            >
              {labels.success}
            </p>
          ) : null}
          {status === 'error' && !(formType === 'contact' && captchaError) ? (
            <p
              className="linwood-request-form__status linwood-request-form__status--error"
              role="alert"
            >
              {formType === 'contact' && !captchaToken
                ? captchaError
                  ? labels.captchaError
                  : labels.captchaRequired
                : labels.error}
            </p>
          ) : null}
          <button
            className="linwood-request-form__submit"
            disabled={status === 'sending'}
            type="submit"
          >
            {status === 'sending' ? labels.submitting : labels.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
