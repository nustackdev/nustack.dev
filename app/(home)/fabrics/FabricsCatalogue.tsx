'use client';

import { useMemo, useState } from 'react';
import { Chapter, Section } from '@/components/page';
import { Description } from '@/components/text';
import { SearchInput } from '@/components/controls/SearchInput';
import { CatalogueGrid, CatalogueCard, type Hue } from '@/components/chapters/CatalogueGrid';

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

export function FabricsCatalogue() {
  const [q, setQ] = useState('');

  const fabrics = useMemo(() => FABRICS.filter((f) => matches(f, q)), [q]);

  return (
    <Chapter>
      <Section>
        <SearchInput
          value={q}
          onChange={setQ}
          placeholder="Search fabrics..."
          ariaLabel="Search fabrics"
        />
      </Section>

      <Section>
        {fabrics.length > 0 ? (
          <CatalogueGrid>
            {fabrics.map((f) => (
              <CatalogueCard
                key={f.slug}
                href={`/fabrics/${f.slug}`}
                name={f.name}
                hue={f.hue}
                tagline={f.tagline}
                description={f.description}
                badge={f.status === 'coming-soon' ? 'Coming soon' : undefined}
              />
            ))}
          </CatalogueGrid>
        ) : (
          <Description>No fabrics match &ldquo;{q}&rdquo;.</Description>
        )}
      </Section>
    </Chapter>
  );
}
