import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { NuLogo } from '@/components/site/marks/NuLogo';
import { NustackMark } from '@/components/site/marks/NustackMark';
import { SocialLinks } from './SocialLinks';
import { PRODUCT_GROUPS } from './nav.data';
import s from './SiteFooter.module.css';

/**
 * Site footer — rich sitemap.
 *
 * Each product entry is a titled row: name (link) + one-line description under
 * it. Four product groups become peer columns with taglines under each header.
 * A brand column carries the wordmark, a confident tagline, Learn links, and
 * socials. Transparent surface; sits on --site-bg from PageShell.
 */

const LEARN_LINKS = [
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
  { label: 'Use-cases', href: '/use-cases' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'About', href: '/about' },
];

const AREAS: Record<string, string> = {
  Foundations: 'foundations',
  Fabrics: 'fabrics',
  Infra: 'infra',
  Apps: 'apps',
};

export function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.top}>
          {/* Brand column */}
          <div className={s.brandCol}>
            <div className={s.brandBlock}>
              <span className={s.brand}>
                <NuLogo size={22} className={s.brandLogo} />
                <NustackMark mono className={s.brandMark} />
              </span>
              <p className={s.brandTagline}>The interaction primitive.</p>
            </div>
            <ul className={s.learnList}>
              {LEARN_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={s.learnLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sitemap: 4 groups × { header, tagline, rich items } */}
          <div className={s.sitemap}>
            {PRODUCT_GROUPS.map((group) => (
              <div
                key={group.header}
                className={s.group}
                style={{ gridArea: AREAS[group.header] }}
              >
                <div className={s.groupHead}>
                  <div className={s.groupHeader}>{group.header}</div>
                  <div className={s.groupTagline}>{group.tagline}</div>
                </div>
                <ul className={s.items}>
                  {group.items.map((item) => (
                    <li key={item.href} className={s.item}>
                      <Link href={item.href} className={s.itemName}>{item.name}</Link>
                      <span className={s.itemDesc}>{item.desc}</span>
                    </li>
                  ))}
                </ul>
                {group.explore ? (
                  <Link href={group.explore.href} className={s.explore}>
                    <span>{group.explore.label}</span>
                    <ArrowRight size={12} aria-hidden />
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className={s.bottom}>
          <span className={s.copyright}>© 2026 nustack</span>
          <div className={s.socials}>
            <SocialLinks className={s.socialIcon} />
            <a href="/blog/rss.xml" className={s.socialIcon} aria-label="rss">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 4a16 16 0 0 1 16 16M4 11a9 9 0 0 1 9 9M6 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
