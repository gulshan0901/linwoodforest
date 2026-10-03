'use client';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { usePathname, Link } from '@/i18n/navigation';
import type { NavItem } from '@/types/site';
import { useEffect, useRef, useState } from 'react';

type DesktopNavItem = Omit<NavItem, 'children'> & {
  children?: DesktopNavItem[];
  icon?: string;
  submenuTitle?: string;
  submenuTone?: 'personal' | 'business';
};

type DesktopNavProps = {
  items: DesktopNavItem[];
};

export function DesktopNav({ items }: DesktopNavProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (!openMenu) {
      return;
    }

    const closeOnPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
      }
    };

    document.addEventListener('pointerdown', closeOnPointerDown);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('pointerdown', closeOnPointerDown);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [openMenu]);

  const closeMenu = () => setOpenMenu(null);

  return (
    <nav aria-label="Primary navigation" className="linwood-header__nav" ref={navRef}>
      {items.map((item) => {
        const menuId = `linwood-desktop-menu-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        const isOpen = openMenu === item.label;

        return (
          <div className="linwood-header__nav-item" key={item.label}>
            {item.children ? (
              <button
                aria-controls={menuId}
                aria-expanded={isOpen}
                className="linwood-header__nav-link linwood-header__nav-toggle"
                onClick={() => setOpenMenu(isOpen ? null : item.label)}
                type="button"
              >
                {item.label}
                <KeyboardArrowDownIcon aria-hidden="true" fontSize="small" />
              </button>
            ) : (
              <Link className="linwood-header__nav-link" href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            )}
            {item.children && item.submenuTitle ? (
              <div
                className={[
                  'linwood-header__mega',
                  isOpen ? 'linwood-header__mega--open' : undefined,
                  item.submenuTone ? `linwood-header__mega--${item.submenuTone}` : undefined,
                ]
                  .filter(Boolean)
                  .join(' ')}
                id={menuId}
                role="group"
              >
                <div className="linwood-header__mega-grid">
                  <Link className="linwood-header__mega-title" href={item.href} onClick={closeMenu}>
                    {item.submenuTitle}
                  </Link>
                  {item.children.map((child) => (
                    <Link
                      className="linwood-header__mega-link"
                      href={child.href}
                      key={child.label}
                      onClick={closeMenu}
                    >
                      {child.icon ? (
                        <span aria-hidden="true" className="linwood-header__mega-icon">
                          {child.icon}
                        </span>
                      ) : null}
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
