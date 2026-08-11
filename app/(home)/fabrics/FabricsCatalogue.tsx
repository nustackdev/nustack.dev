'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Chapter, Section } from '@/components/site/page';
import { SilverWovenName } from '@/components/site/SilverWovenName';
import { Tagline, Description } from '@/components/site/text';
import s from './FabricsCatalogue.module.css';

type Hue = 'steel' | 'sage' | 'teal' | 'plum' | 'amber';

interface Fabric {
  name: string;
  slug: string;
  hue: Hue;
  tagline: string;
  description: string;
  status?: 'shipping' | 'coming-soon';
}

const FABRICS: Fabric[] = [
  {
    name: 'nu.mem',
    slug: 'mem',
    hue: 'steel',
    tagline: 'In-memory state fabric.',
    description:
      'In-memory state on plain dicts. Perfect for cache, hot state, and in-process coordination.',
  },
  {
    name: 'nu.kv',
    slug: 'kv',
    hue: 'sage',
    tagline: 'Persistent state fabric.',
    description:
      'Refs over a KV backend (RocksDB, LMDB). Transactions, snapshots, and change notifications, built in.',
  },
  {
    name: 'nu.ui',
    slug: 'ui',
    hue: 'teal',
    tagline: 'Web UI fabric.',
    description:
      'Refs are widgets: text, buttons, tables. The fabric renders them in the browser and live-updates as your state changes.',
  },
  {
    name: 'nu.proxy',
    slug: 'proxy',
    hue: 'plum',
    tagline: 'Network fabric.',
    description:
      'Puts other fabrics on the network. Bind a fabric in one process, use it from another; same Refs, over TCP or Unix socket.',
  },
  {
    name: 'nu.http',
    slug: 'http',
    hue: 'amber',
    tagline: 'HTTP fabric.',
    description:
      'Expose Nu Refs as HTTP endpoints, or build fabrics on top of any HTTP service. Nu meets the web.',
  },
  {
    name: 'nu.ray',
    slug: 'ray',
    hue: 'amber',
    tagline: 'Cluster compute fabric.',
    description:
      'Teleport a Nu tree to any worker in your Ray cluster; it runs there and returns the result.',
  },
];

function matches(f: Fabric, q: string) {
  if (!q) return true;
  const needle = q.toLowerCase();
  return (
    f.name.toLowerCase().includes(needle) ||
    f.tagline.toLowerCase().includes(needle) ||
    f.description.toLowerCase().includes(needle)
  );
}

function FabricCard({ f }: { f: Fabric }) {
  return (
    <Link href={`/fabrics/${f.slug}`} className={s.card} data-hue={f.hue}>
      <div className={s.cardHead}>
        <SilverWovenName as="h3" hue={f.hue} className={s.cardName}>
          {f.name}
        </SilverWovenName>
        {f.status === 'coming-soon' ? (
          <span className={s.badge}>Coming soon</span>
        ) : null}
      </div>
      <Tagline>{f.tagline}</Tagline>
      <Description>{f.description}</Description>
    </Link>
  );
}

export function FabricsCatalogue() {
  const [q, setQ] = useState('');

  const fabrics = useMemo(() => FABRICS.filter((f) => matches(f, q)), [q]);

  return (
    <Chapter>
      <Section>
        <label className={s.searchWrap}>
          <Search size={16} aria-hidden className={s.searchIcon} />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search fabrics..."
            className={s.searchInput}
            aria-label="Search fabrics"
          />
        </label>
      </Section>

      <Section>
        {fabrics.length > 0 ? (
          <div className={s.grid}>
            {fabrics.map((f) => (
              <FabricCard key={f.slug} f={f} />
            ))}
          </div>
        ) : (
          <Description>No fabrics match &ldquo;{q}&rdquo;.</Description>
        )}
      </Section>
    </Chapter>
  );
}
