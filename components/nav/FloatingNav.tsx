'use client';

/**
 * FloatingNav — the site's top nav pill.
 *
 * Desktop: logo · Products▾ · Docs · Blog · About · search · socials.
 * Mobile:  logo · search · hamburger → full-screen sheet with everything stacked.
 *
 * The Products dropdown (ProductsMenu) is portaled to <body> so its blur
 * escapes this header's `isolation: isolate` backdrop-root.
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, Menu, BookOpen, Rss, X as CloseIcon } from 'lucide-react';
import { useSearchContext } from 'fumadocs-ui/contexts/search';
import { NuLogo } from '@/components/marks/NuLogo';
import { GithubMark } from '@/components/marks/GithubMark';
import { ProductsMenu } from './ProductsMenu';
import { SocialLinks } from './SocialLinks';
import { ThemeToggle } from './ThemeToggle';
import { PRODUCT_GROUPS, WORD_LINKS, SOCIAL_LINKS } from './nav.data';
import s from './FloatingNav.module.css';

const HOVER_CLOSE_MS = 140;

export function FloatingNav() {
  const { setOpenSearch } = useSearchContext();
  const pathname = usePathname();

  const [productsOpen, setProductsOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const pillRef = useRef<HTMLDivElement>(null);
  const productsTriggerRef = useRef<HTMLButtonElement>(null);
  const productsPanelRef = useRef<HTMLDivElement>(null);
  const sheetCloseRef = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<number | null>(null);

  // Close both surfaces on route change.
  useEffect(() => {
    setProductsOpen(false);
    setSheetOpen(false);
  }, [pathname]);

  // Outside-click closes the products panel. The panel is portaled to body,
  // so hover keeps it open via .panelWrap handlers, not via containment.
  useEffect(() => {
    if (!productsOpen) return;
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node;
      const inPill = pillRef.current?.contains(target);
      const inPanel = productsPanelRef.current?.contains(target);
      if (!inPill && !inPanel) setProductsOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [productsOpen]);

  // Esc closes either surface and returns focus to the products trigger.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setProductsOpen(false);
      setSheetOpen(false);
      productsTriggerRef.current?.focus();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll while the mobile sheet is up. iOS Safari ignores
  // `overflow: hidden` on body, so pin body with `position: fixed` and
  // restore the scroll position on close.
  useEffect(() => {
    if (!sheetOpen) return;
    const scrollY = window.scrollY;
    const body = document.body;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [sheetOpen]);

  // Give keyboard/AT users a starting anchor when the sheet opens.
  useEffect(() => {
    if (sheetOpen) sheetCloseRef.current?.focus();
  }, [sheetOpen]);

  const openProducts = useCallback(() => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    setProductsOpen(true);
  }, []);
  const scheduleCloseProducts = useCallback(() => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setProductsOpen(false), HOVER_CLOSE_MS);
  }, []);
  const toggleProducts = useCallback(() => setProductsOpen(v => !v), []);
  const onProductsKey = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleProducts();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setProductsOpen(true);
    }
  }, [toggleProducts]);

  return (
    <header className={s.floatingNav}>
      <div className={s.navPill} ref={pillRef}>
        <Link href="/" className={s.navIcon} aria-label="nustack home">
          <NuLogo size={18} />
        </Link>

        <span className={`${s.divider} ${s.desktopOnly}`} aria-hidden />

        <div
          className={s.productsSlot}
          onMouseEnter={openProducts}
          onMouseLeave={scheduleCloseProducts}
        >
          <button
            ref={productsTriggerRef}
            type="button"
            className={s.navWord}
            aria-haspopup="menu"
            aria-expanded={productsOpen}
            data-open={productsOpen ? 'true' : 'false'}
            onClick={toggleProducts}
            onKeyDown={onProductsKey}
          >
            Products
            <svg className={s.caret} width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden>
              <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {productsOpen && mounted && createPortal(
            <div
              ref={productsPanelRef}
              className={s.panelWrap}
              onMouseEnter={openProducts}
              onMouseLeave={scheduleCloseProducts}
              role="menu"
            >
              <ProductsMenu />
            </div>,
            document.body,
          )}
        </div>

        {WORD_LINKS.map((w) => (
          <Link key={w.href} href={w.href} className={`${s.navWord} ${s.desktopOnly}`}>
            {w.label}
          </Link>
        ))}

        <span className={`${s.divider} ${s.desktopOnly}`} aria-hidden />

        {/* Mobile-only word-link shortcuts. Placed before search to mirror the
            desktop order (word links → search → socials). */}
        <Link href="/docs" className={`${s.navIcon} ${s.mobileOnly}`} aria-label="docs">
          <BookOpen size={18} aria-hidden />
        </Link>
        <Link href="/blog" className={`${s.navIcon} ${s.mobileOnly}`} aria-label="blog">
          <Rss size={18} aria-hidden />
        </Link>

        <button
          type="button"
          className={s.navIcon}
          onClick={() => setOpenSearch(true)}
          aria-label="search"
        >
          <Search size={18} aria-hidden />
        </button>

        <ThemeToggle className={s.navIcon} />

        <span className={s.desktopOnly} style={{ gap: 2 }}>
          <SocialLinks className={s.navIcon} />
        </span>

        {/* Mobile-only github shortcut, standing in for the desktop socials row. */}
        <a
          className={`${s.navIcon} ${s.mobileOnly}`}
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noreferrer"
          aria-label="github"
        >
          <GithubMark size={16} />
        </a>

        <button
          type="button"
          className={`${s.navIcon} ${s.hamburger}`}
          aria-label="menu"
          aria-expanded={sheetOpen}
          onClick={() => setSheetOpen(true)}
        >
          <Menu size={18} aria-hidden />
        </button>
      </div>

      {sheetOpen && (
        <div className={s.sheet} role="dialog" aria-modal="true">
          <button
            ref={sheetCloseRef}
            type="button"
            className={s.sheetClose}
            aria-label="close menu"
            onClick={() => setSheetOpen(false)}
          >
            <CloseIcon size={18} aria-hidden />
          </button>

          {/* Top-level nav mirrors desktop: Products (expandable) · Docs
              · Blog · About. Only Products has a submenu. */}
          <details className={s.sheetAccordion}>
            <summary className={s.sheetAccordionSummary}>
              <span>Products</span>
            </summary>
            <div className={s.sheetAccordionBody}>
              {PRODUCT_GROUPS.map((group) => (
                <div key={group.header} className={s.sheetSubGroup}>
                  <div className={s.sheetSubHeader}>{group.header}</div>
                  {group.items.map((item) => (
                    <Link key={item.href} href={item.href} className={s.sheetSubLink}>
                      <span>{item.name}</span>
                      <span className={s.sheetLinkDesc}>{item.desc}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </details>

          {WORD_LINKS.map((w) => (
            <Link key={w.href} href={w.href} className={s.sheetTopLink}>
              {w.label}
            </Link>
          ))}

          <div className={s.sheetIconRow}>
            <SocialLinks className={s.navIcon} />
          </div>
        </div>
      )}
    </header>
  );
}
