'use client';

import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';

import { Link } from '@/i18n/navigation';
import type { NavItem } from '@/types/site';

import './MobileNav.css';

type MobileNavProps = {
  items: MobileNavItem[];
};

type MobileNavItem = Omit<NavItem, 'children'> & {
  children?: MobileNavItem[];
  icon?: string;
  submenuTitle?: string;
};

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Open navigation menu"
        className="linwood-mobile-nav__trigger"
        onClick={() => setOpen(true)}
        type="button"
      >
        <MenuIcon aria-hidden="true" />
      </button>
      <Drawer anchor="right" onClose={() => setOpen(false)} open={open}>
        <Box className="linwood-mobile-nav" role="presentation">
          <Box className="linwood-mobile-nav__top">
            <span className="linwood-mobile-nav__brand">Linwood Forest</span>
            <IconButton aria-label="Close navigation menu" onClick={() => setOpen(false)}>
              <CloseIcon aria-hidden="true" />
            </IconButton>
          </Box>
          <List className="linwood-mobile-nav__list">
            {items.map((item) => (
              <li className="linwood-mobile-nav__item" key={item.label}>
                <ListItemButton
                  className="linwood-mobile-nav__link"
                  component={Link}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary={item.label} />
                  <KeyboardArrowRightIcon aria-hidden="true" fontSize="small" />
                </ListItemButton>
                {item.children ? (
                  <div className="linwood-mobile-nav__subnav">
                    <p>{item.submenuTitle}</p>
                    {item.children.map((child) => (
                      <Link href={child.href} key={child.label} onClick={() => setOpen(false)}>
                        {'icon' in child && child.icon ? (
                          <span aria-hidden="true">{child.icon}</span>
                        ) : null}
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
