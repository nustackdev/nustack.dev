'use client';

/**
 * ProductsMenu — the Products mega-panel that opens under the nav trigger.
 *
 * One row per product group. Left column: group name + tagline. Right
 * column: 2-column grid of items (name + tagline text). Hover paints a
 * soft --site-wash bloom under the text and warms the tagline one step.
 * Surface matches FloatingNav's pill glass formula.
 */

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PRODUCT_GROUPS } from './nav.data';
import s from './ProductsMenu.module.css';

export function ProductsMenu() {
  return (
    <div className={s.panel}>
      {PRODUCT_GROUPS.map((group, i) => (
        <div
          key={group.header}
          className={s.row}
          data-first={i === 0 ? 'true' : undefined}
        >
          <div className={s.left}>
            <div className={s.groupName}>{group.header}</div>
            <div className={s.groupTagline}>{group.tagline}</div>
          </div>
          <div className={s.right}>
            {group.items.map((item) => (
              <Link key={item.href} href={item.href} className={s.item} role="menuitem">
                <span className={s.itemName}>{item.name}</span>
                <span className={s.itemDesc}>{item.desc}</span>
              </Link>
            ))}
            {group.explore ? (
              <Link href={group.explore.href} className={s.item} role="menuitem">
                <span className={s.itemName}>
                  {group.explore.label}
                  <ArrowRight size={13} aria-hidden className={s.exploreArrow} />
                </span>
              </Link>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
