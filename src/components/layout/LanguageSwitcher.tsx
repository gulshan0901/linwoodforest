'use client';

import { useLocale } from 'next-intl';

import { usePathname } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

import './LanguageSwitcher.css';

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    window.location.assign(`/${nextLocale}${pathname === '/' ? '' : pathname}`);
  }

  return (
    <select
      aria-label="Change language"
      className="linwood-language-switcher"
      onChange={handleChange}
      value={locale}
    >
      <option value="en">EN</option>
      <option value="zh">中文</option>
    </select>
  );
}
